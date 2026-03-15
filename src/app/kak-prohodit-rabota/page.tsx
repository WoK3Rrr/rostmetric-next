
import { Workflow } from "lucide-react";
import { Search } from "lucide-react";
import Link from "next/link";

export const metadata = {
  
  title: "Как проходит внедрение системы продаж на основе IT-решений — РостМетрик",
  
  description: "Этапы внедрения системы продаж: аудит процессов, проектирование воронки, настройка amoCRM, регламенты и контроль показателей. Пошаговая структура работы.",
  
  alternates: { canonical: "/kak-prohodit-rabota" },
  
  openGraph: {
    
    title:
      "Как проходит внедрение системы продаж на основе IT-решений — РостМетрик”",
    
    description:
      "Пошагово разбираем процесс внедрения: аудит, структура воронки, настройка CRM, регламенты и контроль показателей.",
    
    url: "https://rostmetric.ru/kak-prohodit-rabota",
    
    siteName: "РостМетрик",
    type: "article",
    locale: "ru_RU",

    images: [
      {
        url: "https://rostmetric.ru/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "РостМетрик — внедрение CRM и систем продаж",
      },
    ],


      },

      twitter: {
    card: "summary_large_image",
    images: ["https://rostmetric.ru/assets/og-image.png"],
},

robots: {
    index: true,
    follow: true,
  },

  
};

export default function WorkSteps() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-10 pb-28">
    <div className="mb-8">
      <a href="/" className="text-sm text-gray-500 hover:text-secondary transition">← На главную</a>
    </div>
<div className="max-w-4xl mx-auto px-6 pt-24">
</div>
    {/* ВСТУПИТЕЛЬНЫЙ БЛОК */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Как проходит наша совместная работа?
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Последовательно выстраиваем процесс — от анализа текущей ситуации
          до внедрения и обучения команды. Читайте ниже — а если что непонятно, всегда обращайтесь напрямую!

        </p>
      </div>

    <section className="space-y-6">
      {/* 01 */}
      <Link
        href="/form"
        className="group block bg-white border border-gray-100 rounded-2xl p-7 shadow-sm transition
                   hover:shadow-lg hover:-translate-y-0.5
                   focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        <div className="flex items-start gap-5">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-bold mb-2">Диагностика</h2>
            <p className="text-gray-700">
              Анализируем текущую обработку заявок: как приходит трафик, где теряются клиенты,
          что происходит на этапах и почему деньги “протекают” мимо.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Без диагностики внедрение превращается в настройку вслепую. Сначала — ясность,
          потом — система. Нажмите, чтобы обсудить 
              <span className="inline-block ml-1 transition group-hover:translate-x-0.5">→</span>
            </p>
          </div>
        </div>
      </Link>

      {/* 02 */}
      <Link
        href="/form"
        className="group block bg-white border border-gray-100 rounded-2xl p-7 shadow-sm transition
                   hover:shadow-lg hover:-translate-y-0.5
                   focus:outline-none focus:ring-2 focus:ring-secondary/30"
      >
        <div className="flex items-start gap-5">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
            <Workflow className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-bold mb-2">Проектирование воронки</h2>
            <p className="text-gray-700">
              Проектируем этапы и статусы под ваш реальный процесс: какие поля обязательны,
          где контрольные точки, какие действия должны происходить на каждом шаге. Собираем этапы и правила процесса под вашу реальность.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Воронка должна отражать реальность, иначе CRM становится формальностью. Нажмите, чтобы обсудить 
              <span className="inline-block ml-1 transition group-hover:translate-x-0.5">→</span>
            </p>
          </div>
        </div>
      </Link>

      {/* 03 */}
      <Link
        href="/form"
        className="group block bg-white border border-gray-100 rounded-2xl p-7 shadow-sm transition
                   hover:shadow-lg hover:-translate-y-0.5
                   focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        <div className="flex items-start gap-5">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-6 h-6"
>
  <circle cx="12" cy="12" r="3" />
  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.33-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06c.46.46 1.14.6 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c0 .7.4 1.33 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.46.46-.6 1.14-.33 1.82V9c.7 0 1.33.4 1.51 1H21a2 2 0 1 1 0 4h-.09c-.7 0-1.33.4-1.51 1z" />
</svg>
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-bold mb-2">Настройка amoCRM</h2>
            <p className="text-gray-700">
              Реализуем проект в системе: воронки, поля, автоматизации, задачи, интеграции
          телефонии/мессенджеров/сайта. Собираем заявки в один контур.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              CRM становится центром, где сходятся трафик, команда и деньги. Нажмите, чтобы обсудить
              <span className="inline-block ml-1 transition group-hover:translate-x-0.5">→</span>
            </p>
          </div>
        </div>
      </Link>

      {/* 04 */}
      <Link
        href="/form"
        className="group block bg-white border border-gray-100 rounded-2xl p-7 shadow-sm transition
                   hover:shadow-lg hover:-translate-y-0.5
                   focus:outline-none focus:ring-2 focus:ring-secondary/30"
      >
        <div className="flex items-start gap-5">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-lg">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-6 h-6"
>
  <circle cx="9" cy="7" r="4" />
  <path d="M17 11a4 4 0 1 0-4-4" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
  <path d="M17 17a4 4 0 0 1 4 4v0" />
</svg>
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-bold mb-2">Обучение и передача</h2>
            <p className="text-gray-700">
              Обучаем команду и передаём чек-лист: как вести сделки, как работать со статусами,
          как не терять заявки и держать дисциплину.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Цель — чтобы система работала стабильно, а не “только когда все в ресурсе”. Нажмите, чтобы обсудить 
              <span className="inline-block ml-1 transition group-hover:translate-x-0.5">→</span>
            </p>
          </div>
        </div>
      </Link>
    </section>


<section className="relative overflow-hidden bg-hidden text-white rounded-3xl p-10 mt-10">
 </section>

<section className="relative overflow-hidden bg-secondary text-white rounded-3xl p-10">

  {/* фоновые свечения */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

  <div className="relative z-10">
    <h2 className="text-2xl font-bold mb-3 leading-tight">
      Хотите перестать управлять на ощущениях?
    </h2>

    <p className="text-white/80 mb-6 max-w-xl">
      Поможем выстроить систему, где каждое решение опирается на данные, а не на интуицию. CRM станет основой сквозной аналитики и устойчивого масштабирования.
    </p>

    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="/form"
        className="inline-block bg-primary px-7 py-3 rounded-xl font-semibold hover:opacity-90 transition text-center"
      >
        Обсудить проект
      </a>

      <a
        href="/contacts"
        className="inline-block border border-white/30 px-7 py-3 rounded-xl font-semibold hover:bg-white/10 transition text-center"
      >
        Контакты
      </a>
    </div>
  </div>

</section>



    </div>


  );
}