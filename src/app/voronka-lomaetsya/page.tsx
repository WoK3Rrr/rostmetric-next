export const metadata = {
  title:
    "Контроль менеджеров по продажам: как повысить конверсию и управляемость — РостМетрик",
  description:
    "Разбираем, как внедрить дисциплину в отделе продаж, настроить регламент и CRM-контроль без микроменеджмента и давления.",
  alternates: { canonical: "https://rostmetric.ru/kontrol-menedzherov" },
  openGraph: {
    title:
      "Контроль менеджеров по продажам: как повысить конверсию и управляемость",
    description:
      "Пошаговая система дисциплины в отделе продаж: регламент, CRM и контроль выполнения задач.",
    url: "https://rostmetric.ru/kontrol-menedzherov",
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

export default function KontrolMenedzherovPage() {
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
  <a href="/pro-voronky-prodazh" className="hover:text-secondary transition">
    Про воронку продаж
  </a>
</div>

          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Воронка продаж ломается незаметно: где теряется конверсия
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Когда продажи начинают расти, собственник часто теряет прозрачность
              процессов. Конверсия в продажах редко падает резко. Обычно она
              “проседает” постепенно — на этапе первого звонка, после отправки
              коммерческого предложения, перед встречей или уже на согласовании
              договора.
            </p>

            <p className="mt-4 text-lg text-gray-600">
              Бизнес видит итог: выручка ниже ожиданий. Но не видит главного —
              где именно воронка продаж начинает разрушаться.
            </p>

            <p className="mt-4 text-lg text-gray-600">
              Проблема не в отсутствии клиентов. Проблема в отсутствии прозрачной
              аналитики и контроля этапов сделки.
            </p>

            <p className="mt-4 text-lg text-gray-600">
              Отсутствие системы контроля — это не проблема людей, это проблема
              структуры.
            </p>
          </header>

          {/* Заголовок секции вынесли ИЗ grid */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-4">
              Где чаще всего теряется конверсия
            </h2>

            {/* Сделали сетку на 2 колонки, чтобы 4 карточки легли ровно */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="font-semibold">1. Первый контакт с клиентом</p>

                <p className="text-sm text-gray-600 mt-2">
                  Если нет SLA по времени реакции, заявка может обрабатываться
                  через несколько часов или даже на следующий день.
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  В digital-среде скорость критична. Чем дольше пауза, тем выше
                  вероятность, что клиент уже поговорил с конкурентом. Падение
                  конверсии на этапе первого контакта напрямую увеличивает
                  стоимость привлечения клиента.
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  Они формально находятся в воронке продаж, но фактически не
                  продвигаются.
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  Нет следующего шага, нет зафиксированной задачи, нет чёткого
                  понимания, кто и когда должен связаться с клиентом.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="font-semibold">2. Квалификация</p>
                <p className="text-sm text-gray-600 mt-2">
                  Менеджер не задаёт правильные вопросы, не выявляет потребность,
                  не фиксирует бюджет и сроки.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  В результате в воронке появляются “мёртвые” сделки, которые
                  формально активны, но фактически не имеют перспективы.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Это искажает аналитику и создаёт иллюзию большого объёма
                  работы.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="font-semibold">3. Коммерческое предложение</p>
                <p className="text-sm text-gray-600 mt-2">
                  КП отправлено — но нет задачи на повторный контакт.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Менеджер ждёт инициативы клиента, клиент — пояснений менеджера.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Без стандарта работы с КП и обязательного follow-up конверсия
                  на этом этапе часто проседает сильнее всего.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Только при таких условиях отдел продаж становится управляемой
                  системой, а не набором индивидуальных усилий.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="font-semibold">4. Согласование и закрытие сделки</p>
                <p className="text-sm text-gray-600 mt-2">
                  Если этапы “Переговоры”, “Согласование”, “Договор” не имеют
                  чётких критериев перехода, сделки могут зависать неделями.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  В CRM они числятся активными, но реального движения нет.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Руководитель видит загруженную воронку, но не видит, что
                  половина сделок фактически заморожена.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Только при таких условиях отдел продаж становится управляемой
                  системой, а не набором индивидуальных усилий.
                </p>
              </div>
            </div>
          </section>

          <article className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Почему без CRM это невозможно увидеть
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Где падает конверсия?</li>
                <li>Сколько времени сделка находится на этапе?</li>
                <li>Какая стадия самая слабая?</li>
                <li>Какой менеджер теряет больше клиентов?</li>
                <li>Какие источники трафика дают качественные сделки?</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Как увидеть слабое звено воронки продаж</h2>
              <div className="space-y-6 text-gray-700">
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <p className="font-semibold text-gray-900">
                    1. Настроенная воронка продаж в CRM — с чёткими критериями перехода между этапами.
                  </p>
                  
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <p className="font-semibold text-gray-900">
                    2. Фиксация времени на каждом этапе — чтобы видеть, где сделки застревают.
                  </p>
                  
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <p className="font-semibold text-gray-900">
                    3. Конверсия по этапам — от лида до оплаты.
                  </p>
                  
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <p className="font-semibold text-gray-900">
                    4. SLA по обработке заявок — чтобы исключить потери на первом контакте.
                  </p>
                  
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <p className="font-semibold text-gray-900">
                    5. Связка источник → сделка → прибыль — для оценки качества трафика.
                  </p>
                  
                </div>

                





                
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Что происходит после внедрения системного контроля
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Видно, на каком этапе проседает конверсия</li>
                <li>Понятно, где требуется обучение менеджеров</li>
                <li>Можно корректно перераспределить рекламный бюджет</li>
                <li>Прогноз выручки становится реалистичным</li>
                <li>Отдел продаж перестаёт работать “на ощущениях”</li>
              </ul>
            </section>

            <section className="relative overflow-hidden bg-secondary text-white rounded-3xl p-10">
              <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-3 leading-tight">
                  Хотите видеть продажи прозрачно?
                </h2>

                <p className="text-white/80 mb-6 max-w-xl">
                  Разберём вашу текущую воронку и покажем, где именно теряется
                  управляемость над продажами и как её вернуть
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

        <section className="mt-10 max-w-4xl mx-auto px-6 pb-16">
          <a
            href="/neponyatna-okupaemost"
            className="group block bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 hover:shadow-lg hover:-translate-y-0.5 transition
              focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">Читать далее</p>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Невозможно понять окупаемость
                </h3>
              </div>

              <span className="shrink-0 inline-flex items-center gap-2 text-secondary font-semibold">
                Перейти
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transition group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </div>
          </a>
        </section>
      </main>
    </>
  );
}