import { NextResponse } from "next/server";

function safeText(v: unknown, max = 500) {
  return String(v ?? "").trim().slice(0, max);
}

function normalizePhone(raw: string) {
  return (raw || "").replace(/\D/g, "");
}

export async function POST(req: Request) {
  try {
    let data: any = {};

    const ct = req.headers.get("content-type") || "";

    // 1) Если пришёл JSON (fetch)
    if (ct.includes("application/json")) {
      data = await req.json();
    }
    // 2) Если пришли form-data (обычная HTML форма)
    else if (
      ct.includes("application/x-www-form-urlencoded") ||
      ct.includes("multipart/form-data")
    ) {
      const fd = await req.formData();
      data = Object.fromEntries(fd.entries());
    } else {
      // если формат неожиданный — попробуем как текст
      const text = await req.text();
      try { data = JSON.parse(text); } catch { data = {}; }
    }

    // Honeypot (если поле заполнено — бот, отвечаем “успешно” тихо)
    const honey = safeText(data.honey, 50);
    if (honey) return NextResponse.json({ ok: true }, { status: 200 });

    const name = safeText(data.name, 60);
    const phoneDigits = normalizePhone(safeText(data.phone, 30));
    const company = safeText(data.company, 120);
    const message = safeText(data.message, 1000);

    if (name.length < 2) {
      return NextResponse.json({ ok: false, error: "Укажите имя" }, { status: 400 });
    }
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      return NextResponse.json({ ok: false, error: "Укажите корректный телефон" }, { status: 400 });
    }

    // Пока инфраструктура — просто лог на сервере
    console.log("NEW LEAD:", { name, phoneDigits, company, message });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    console.error("LEAD API ERROR:", e);
    return NextResponse.json(
      { ok: false, error: "Ошибка на сервере" },
      { status: 500 }
    );
  }
}