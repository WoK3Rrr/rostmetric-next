export const metadata = {
  
  title: "Почему непонятна окупаемость рекламы: ошибки в учёте и аналитике — РостМетрик",
  
  description: "Разбираем, почему бизнес не видит реальную окупаемость рекламы: CRM, аналитика, обработка лидов и ошибки в расчёте ROI и ROMI",
  
  alternates: { canonical: "https://rostmetric.ru/neponyatna-okupaemost" },
  
  openGraph: {
    
    title:
      "Почему реклама “не окупается” — и где вы теряете деньги",
    
    description:
      "Разбираем, почему бизнес не видит реальную окупаемость рекламы: CRM, аналитика, обработка лидов и ошибки в расчёте ROI и ROMI",
    
    url: "https://rostmetric.ru/neponyatna-okupaemost",
    
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

export default function neponyatnaokupaemostPage() {
  return (

<>


<main className="bg-gradient-to-b from-white via-gray-50 to-white">
  <div className="max-w-4xl mx-auto px-6 py-16">

    <div className="mb-8 text-sm text-gray-500 flex items-center gap-2">
  <a href="/" className="hover:text-secondary transition">
    ← На главную
  </a>
  <span>/</span>
  <a href="/blog" className="hover:text-secondary transition">
    В блог
  </a>
  <span>/</span>
  <a href="/pro-end-to-end-analytics" className="hover:text-secondary transition">
    Про сквозую аналитику
  </a>
</div>

    <header className="mb-10">
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
        Невозможно понять окупаемость: почему реклама “вроде работает”, но цифр нет
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Самая частая ситуация: заявки идут, менеджеры заняты, но владелец не может ответить на простой вопрос —
        какие каналы приносят деньги. Причина почти всегда одна: нет связки
        <span className="font-semibold text-gray-900">«источник → заявка → сделка»</span>.
      </p>
    </header>

    <section className="grid md:grid-cols-3 gap-6 mb-14">
      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <p className="font-semibold">Симптом</p>
        <p className="text-sm text-gray-600 mt-2">Реклама есть — понимания окупаемости нет.</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <p className="font-semibold">Причина</p>
        <p className="text-sm text-gray-600 mt-2">Нет точного учёта источников и этапов.</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <p className="font-semibold">Решение</p>
        <p className="text-sm text-gray-600 mt-2">UTM + CRM + дисциплина ведения сделок.</p>
      </div>
    </section>

    <article className="space-y-12">

      <section>
        <h2 className="text-2xl font-bold mb-4">Почему “не видно” окупаемость</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Окупаемость нельзя посчитать, если данные распадаются на части:
            реклама живёт в рекламном кабинете, заявки — в чатах, деньги — в банке,
            а CRM существует “для галочки”.
          </p>
          <p>
            В итоге остаются только ощущения: “кажется, стало лучше” или “кажется, дорого”.
            Но управлять ростом на ощущениях невозможно.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">5 типовых причин, из-за которых аналитика не сходится</h2>

        <div className="space-y-6 text-gray-700">

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">1) Не используются UTM-метки</p>
            <p className="mt-2">
              Если источники не размечены, CRM не поймёт, откуда пришёл клиент.
              А значит, дальше нельзя сравнить каналы по прибыли.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">2) Источник не попадает в сделку</p>
            <p className="mt-2">
              UTM могут быть, но если они не записываются в поле сделки/контакта,
              то на уровне CRM всё равно будет “неизвестно”.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">3) Заявки в разных каналах не собираются в одно место</p>
            <p className="mt-2">
              Часть лидов приходит через сайт, часть — звонками, часть — в мессенджеры.
              Если это не объединено в единый контур, цифры будут неполными.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">4) Сделки ведутся без статусов и дисциплины</p>
            <p className="mt-2">
              Если сделки не двигаются по этапам, аналитика по воронке превращается в шум.
              Нельзя понять, где падает конверсия и почему.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">5) Деньги не отражаются корректно</p>
            <p className="mt-2">
              У сделки нет суммы, дата оплаты не фиксируется, оплаты идут “как получилось”.
              Без корректных сумм невозможно посчитать ROI и валовую прибыль по каналу.
            </p>
          </div>

        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Как выглядит рабочая схема учёта</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Хорошая аналитика — это не “сложная BI-система”. Это когда у каждого лида есть:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Источник</strong> (UTM / рекламный канал / площадка)</li>
            <li><strong>Статус воронки</strong> (где сейчас клиент)</li>
            <li><strong>Ответственный</strong> (кто ведёт)</li>
            <li><strong>Сумма</strong> и факт оплаты (если дошло до сделки)</li>
          </ul>
          <p>
            Тогда можно считать не только “заявки”, но и <strong>деньги</strong> по каждому каналу.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">План внедрения: минимум, который даёт цифры</h2>

        <div className="space-y-4">

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">Шаг 1. Разметить трафик</p>
            <p className="text-gray-700 mt-2">
              Настраиваем UTM для рекламных каналов. Единый стандарт именования, чтобы потом не было хаоса.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">Шаг 2. Зафиксировать источник в amoCRM</p>
            <p className="text-gray-700 mt-2">
              Делать так, чтобы источник записывался в поля сделки/контакта автоматически (из сайта/форм/интеграций).
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">Шаг 3. Собрать все точки входа</p>
            <p className="text-gray-700 mt-2">
              Звонки, мессенджеры, сайт — всё должно попадать в CRM. Иначе аналитика всегда будет неполной.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">Шаг 4. Ввести дисциплину ведения сделок</p>
            <p className="text-gray-700 mt-2">
              Статусы должны отражать реальность. Суммы сделок фиксируются. Причины отказов — тоже.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">Шаг 5. Настроить отчёты</p>
            <p className="text-gray-700 mt-2">
              Минимальный набор: заявки по источникам, конверсия по этапам, выручка по каналам.
              Этого достаточно, чтобы принимать решения по цифрам.
            </p>
          </div>

        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary text-white rounded-3xl p-10">

  {/* фоновые свечения */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

  <div className="relative z-10">
    <h2 className="text-2xl font-bold mb-3 leading-tight">
      Хотите видеть окупаемость рекламы по цифрам?
    </h2>

    <p className="text-white/80 mb-6 max-w-xl">
      Разберём ваши источники и покажем, как собрать связку “трафик → CRM → деньги”, чтобы понимать, какие каналы реально окупаются.
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

    </article>

  </div>
    
    
<section className="mt-10 max-w-4xl mx-auto px-6">
  <a href="/resheniya-na-oshchushcheniyah"
     className="group block bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 hover:shadow-lg hover:-translate-y-0.5 transition
            focus:outline-none focus:ring-2 focus:ring-primary/40">
    <div className="flex items-center justify-between gap-6">
      <div>
        <p className="text-sm text-gray-500 mb-2">Читать далее</p>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
          Решения принимаются на ощущениях
        </h3>
      </div>

      <span className="shrink-0 inline-flex items-center gap-2 text-secondary font-semibold">
        Перейти
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition group-hover:translate-x-0.5"
             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </div>
  </a>
</section>

</main>

</>
  );
}