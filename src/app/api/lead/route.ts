import { NextResponse } from "next/server";

type AmoAuth = {
  accessToken: string;
  refreshToken: string;
};

function safeText(v: unknown, max = 500) {
  return String(v ?? "").trim().slice(0, max);
}

function normalizePhone(raw: string) {
  return (raw || "").replace(/\D/g, "");
}

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

async function parseRequest(req: Request) {
  const ct = req.headers.get("content-type") || "";

  if (ct.includes("application/json")) {
    return await req.json();
  }

  if (
    ct.includes("application/x-www-form-urlencoded") ||
    ct.includes("multipart/form-data")
  ) {
    const fd = await req.formData();
    return Object.fromEntries(fd.entries());
  }

  const text = await req.text();
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}

async function refreshAmoTokens(): Promise<AmoAuth> {
  const baseUrl = getRequiredEnv("AMO_BASE_URL");
  const clientId = getRequiredEnv("AMO_CLIENT_ID");
  const clientSecret = getRequiredEnv("AMO_CLIENT_SECRET");
  const redirectUri = getRequiredEnv("AMO_REDIRECT_URI");
  const refreshToken = getRequiredEnv("AMO_REFRESH_TOKEN");

  const res = await fetch(`${baseUrl}/oauth2/access_token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      redirect_uri: redirectUri,
    }),
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(`AMO refresh failed: ${res.status} ${text}`);
  }

  const json = JSON.parse(text);

  const nextAccessToken = json.access_token as string;
  const nextRefreshToken = json.refresh_token as string;

  if (!nextAccessToken || !nextRefreshToken) {
    throw new Error("AMO refresh succeeded but tokens are missing");
  }

  console.log("AMO TOKENS UPDATED. Replace Vercel env vars manually:", {
    AMO_ACCESS_TOKEN: nextAccessToken,
    AMO_REFRESH_TOKEN: nextRefreshToken,
  });

  return {
    accessToken: nextAccessToken,
    refreshToken: nextRefreshToken,
  };
}

async function amoFetch(
  path: string,
  init: RequestInit,
  auth: AmoAuth
): Promise<Response> {
  const baseUrl = getRequiredEnv("AMO_BASE_URL");

  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${auth.accessToken}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });
}

async function amoFetchWithRefresh(
  path: string,
  init: RequestInit,
  auth: AmoAuth
): Promise<{ response: Response; auth: AmoAuth }> {
  let response = await amoFetch(path, init, auth);

  if (response.status !== 401) {
    return { response, auth };
  }

  const nextAuth = await refreshAmoTokens();
  response = await amoFetch(path, init, nextAuth);

  return { response, auth: nextAuth };
}

export async function POST(req: Request) {
  try {
    const data: Record<string, unknown> = await parseRequest(req);

    const honey = safeText(data.honey, 50);
    if (honey) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = safeText(data.name, 60);

    // Поддержка обоих вариантов названий полей
    const phoneRaw = safeText(data.phone ?? data.tel, 30);
    const niche = safeText(data.niche ?? data.company, 120);
    const comment = safeText(data.comment ?? data.message, 1000);

    const phoneDigits = normalizePhone(phoneRaw);

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Укажите имя" },
        { status: 400 }
      );
    }

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      return NextResponse.json(
        { ok: false, error: "Укажите корректный телефон" },
        { status: 400 }
      );
    }

    let auth: AmoAuth = {
      accessToken: getRequiredEnv("AMO_ACCESS_TOKEN"),
      refreshToken: getRequiredEnv("AMO_REFRESH_TOKEN"),
    };

    const pipelineId = process.env.AMO_PIPELINE_ID
      ? Number(process.env.AMO_PIPELINE_ID)
      : undefined;

    const statusId = process.env.AMO_STATUS_ID
      ? Number(process.env.AMO_STATUS_ID)
      : undefined;

    const leadNameParts = ["Заявка с сайта", name];
    if (niche) leadNameParts.push(`• ${niche}`);
    const leadName = leadNameParts.join(" ");

    const leadCustomFields = [
  ...(niche
    ? [
        {
          field_id: 2618859,
          values: [{ value: niche }],
        },
      ]
    : []),
  ...(comment
    ? [
        {
          field_id: 2618853,
          values: [{ value: comment }],
        },
      ]
    : []),
];

const complexPayload = [
  {
    name: leadName,
    ...(pipelineId ? { pipeline_id: pipelineId } : {}),
    ...(statusId ? { status_id: statusId } : {}),
    ...(leadCustomFields.length > 0
      ? { custom_fields_values: leadCustomFields }
      : {}),
    _embedded: {
      contacts: [
        {
          first_name: name,
          custom_fields_values: [
            {
              field_code: "PHONE",
              values: [{ value: phoneDigits }],
            },
          ],
        },
      ],
    },
  },
];

    const complexResult = await amoFetchWithRefresh(
      "/api/v4/leads/complex",
      {
        method: "POST",
        body: JSON.stringify(complexPayload),
      },
      auth
    );

    auth = complexResult.auth;

    const complexText = await complexResult.response.text();

    if (!complexResult.response.ok) {
      console.error("AMO COMPLEX CREATE ERROR:", complexText);
      return NextResponse.json(
        { ok: false, error: "Не удалось создать лид в amoCRM" },
        { status: 502 }
      );
    }

    const complexJson = JSON.parse(complexText);

console.log("AMO COMPLEX RAW RESPONSE:", JSON.stringify(complexJson, null, 2));

const leadId =
  complexJson?.id ??
  complexJson?._embedded?.leads?.[0]?.id ??
  complexJson?._embedded?.items?.[0]?.id ??
  complexJson?.leads?.[0]?.id ??
  (Array.isArray(complexJson) ? complexJson[0]?.id : undefined);

if (!leadId) {
  return NextResponse.json(
    {
      ok: false,
      error: "amoCRM не вернула ID лида",
      amoResponse: complexJson,
    },
    { status: 502 }
  );
}

    const noteLines = [
      `Имя: ${name}`,
      `Телефон: ${phoneDigits}`,
      niche ? `Ниша: ${niche}` : "",
      comment ? `Комментарий: ${comment}` : "",
      `Источник: ${req.headers.get("origin") || "site form"}`,
    ].filter(Boolean);

    const notesPayload = [
      {
        note_type: "common",
        params: {
          text: noteLines.join("\n"),
        },
      },
    ];

    const notesResult = await amoFetchWithRefresh(
      `/api/v4/leads/${leadId}/notes`,
      {
        method: "POST",
        body: JSON.stringify(notesPayload),
      },
      auth
    );

    const notesText = await notesResult.response.text();

    if (!notesResult.response.ok) {
      console.error("AMO NOTE CREATE ERROR:", notesText);
      return NextResponse.json(
        {
          ok: true,
          warning: "Лид создан, но примечание не добавилось",
          leadId,
        },
        { status: 200 }
      );
    }

    console.log("AMO LEAD CREATED:", {
      leadId,
      name,
      phoneDigits,
      niche,
    });

    return NextResponse.json({ ok: true, leadId }, { status: 200 });
  } catch (e: any) {
  console.error("LEAD API ERROR FULL:", e);

  return NextResponse.json(
    {
      ok: false,
      error: e?.message || "Ошибка на сервере",
      stack: process.env.NODE_ENV !== "production" ? e?.stack : undefined,
    },
    { status: 500 }
    );
  }
}