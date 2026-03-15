"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ym?: (...args: any[]) => void;
  }
}

export default function ThankYouClient() {
  useEffect(() => {
    /// ID метрики сюда
    const ID = 106958946 ;
    if (window.ym) window.ym(ID, "reachGoal", "lead");
  }, []);

  return (
    <section className="relative pt-28 pb-24 min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl -z-10" />
      <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-indigo-400/15 blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">Спасибо! Заявка отправлена</h1>

        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Мы получили ваши данные. Обычно отвечаем в течение рабочего дня.
          Если вопрос срочный — напишите в Telegram.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/80 backdrop-blur border border-gray-200 font-semibold hover:shadow-sm transition">
            На главную
          </a>

          <a href="/contacts" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-white font-semibold hover:opacity-90 transition">
            Контакты
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-10">
          Пока вы ждёте ответ — можете посмотреть, как устроен процесс работы.
        </p>
        <a href="/kak-prohodit-rabota" className="text-sm font-semibold text-secondary hover:underline">
          Читать про процесс →
        </a>
      </div>
    </section>
  );
}