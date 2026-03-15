"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function FormClient() {
  const router = useRouter();
  const formTs = useMemo(() => Date.now(), []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");

  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pending) return;

    setError(null);
    setPending(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, company, message, honey, formTs }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setError(data?.error || "Не удалось отправить. Попробуйте ещё раз.");
        setPending(false);
        return;
      }

      window.location.href = "/thank-you";
    } catch {
      setError("Ошибка сети. Попробуйте ещё раз.");
      setPending(false);
    }
  }

  return (
    <section className="pt-28 pb-24 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Обсудим ваш проект</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Оставьте заявку — разберём вашу текущую систему продаж, покажем точки потерь и предложим
            структуру внедрения.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-6"
        >
          {/* honeypot */}
          <div className="hidden">
            <label>
              Leave empty
              <input
                value={honey}
                onChange={(e) => setHoney(e.target.value)}
                autoComplete="off"
                tabIndex={-1}
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Ваше имя*</label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Иван"
              minLength={2}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Телефон*</label>
            <input
              type="tel"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="+7 (___) ___-__-__"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Компания / ниша</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Строительная компания по ремонту квартир"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Кратко о задаче</label>
            <textarea
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Опишите текущую ситуацию..."
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              required
              className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <p className="text-sm text-gray-600">
              Я согласен с{" "}
              <a href="/privacy" className="text-secondary hover:underline">
                политикой обработки персональных данных
              </a>
            </p>
          </div>

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-60"
          >
            {pending ? "Отправляем..." : "Отправить заявку"}
          </button>
        </form>
      </div>
    </section>
  );
}