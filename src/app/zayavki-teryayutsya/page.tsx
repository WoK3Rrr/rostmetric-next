export const metadata = {
  
  title: "Заявки теряются: почему это происходит и как исправить — РостМетрик",
  
  description: "Где бизнес теряет заявки и деньги: ошибки в обработке лидов, дисциплина отдела продаж и контроль в CRM. Практические решения.",
  
  alternates: { canonical: "https://rostmetric.ru/zayavki-teryayutsya" },
  
  openGraph: {
    
    title:
      "Почему теряются заявки и как перестать терять клиентов — РостМетрик",
    
    description:
      "Разбираем точки потери заявок: CRM, менеджеры, время реакции и дисциплина обработки лидов.",
    
    url: "https://rostmetric.ru/zayavki-teryayutsya",
    
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

export default function zayavkiteryayutsyaPage() {
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
        Заявки теряются: почему так происходит и как это исправить
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Это одна из самых дорогих проблем в продажах: вы платите за трафик, который всегда дорожает, получаете обращения,
        но часть клиентов “пропадает” между рекламой, мессенджерами, телефонией и менеджерами. На трафик / лиды / привлечение заявок потрачено сотни тысяч и миллионы рублей в год. Отлично если бы, часто суммы окупаются в разы, но иногда терются в никуда без системной работы с базой.
      </p>
      <p className="mt-4 text-lg text-gray-600">
         Если собирать и работать со своей базой клиентов, реанимировать интерес и актуальность их заявок, предлагать специальные офферы/скидки, делать рассылки, то суммы потерь можно было бы снизить. 
        Ниже — типовые сценарии потерь и простой план, как собрать систему в единый контур.
      </p>
    </header>

    
    <section className="relative py-20">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Где теряются клиенты и их обращения?
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Проблема редко в трафике. Чаще — в разрыве между заявкой и системой контроля.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-100 group-hover:bg-primary/10 transition">
              <span className="text-lg">01</span>
            </div>
            <h3 className="font-semibold text-lg">Где ломается</h3>
            <p className="text-gray-500 mt-3 leading-relaxed">
              Трафик в заявки, заявки в CRM, дальше обработка лидов и контроль менеджеров.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-100 group-hover:bg-primary/10 transition">
              <span className="text-lg">02</span>
            </div>
            <h3 className="font-semibold text-lg">Как выглядит</h3>
            <p className="text-gray-500 mt-3 leading-relaxed">
              «Не дозвонились», «не ответили», «потеряли в чате».
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-100 group-hover:bg-primary/10 transition">
              <span className="text-lg">03</span>
            </div>
            <h3 className="font-semibold text-lg">Что помогает</h3>
            <p className="text-gray-500 mt-3 leading-relaxed">
              Единый вход заявок + стандарты + аналитика.
            </p>
          </div>
        </div>
      </div>
    </section>

    
    <article className="space-y-12">

      <section>
        <h2 className="text-2xl font-bold mb-4">Как понять, что заявки теряются</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Потеря заявок редко выглядит как “катастрофа”. Обычно это набор мелких ситуаций,
            которые кажутся нормой. Но в сумме они превращаются в системную утечку денег.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Часть обращений есть в рекламе, но их нет в CRM.</li>
            <li>Клиент писал в WhatsApp/Telegram, а менеджер “не увидел” сообщение вовремя.</li>
            <li>Звонок был, но он не закрепился за сделкой, запись разговора не найдена.</li>
            <li>Нет понятного статуса: что с заявкой сейчас и кто за неё отвечает.</li>
            <li>Невозможно честно посчитать окупаемость рекламы: нет цепочки “источник → сделка”.</li>
          </ul>
          <p>
            Если вы узнаёте хотя бы 2–3 пункта — потери почти наверняка есть.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Почему это происходит: 5 типовых причин</h2>

        <div className="space-y-6 text-gray-700">
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">1) Нет единого входа заявок</p>
            <p className="mt-2">
              Когда обращения приходят одновременно в телефон, мессенджеры, форму на сайте, социальные сети и рекламу, но не собираются в одну систему, бизнес начинает терять управляемость. 
              Каждый канал живёт своей жизнью, а ответственность размазывается между менеджерами.
            </p>

            <p className="mt-2">
              Без единого центра приёма заявок (CRM как обязательной точки фиксации) компания зависит не от системы, а от дисциплины конкретных людей. 
              Стоит менеджеру отвлечься, устать или уйти в отпуск — часть обращений теряется.
            </p>

            <p className="mt-2">
              В результате падает конверсия, и владелец не видит реальный объём входящего спроса. 
              Невозможно точно оценить эффективность маркетинга, загрузку отдела продаж и фактическую стоимость лида.
            </p>

            <p className="mt-2">
              Для управляемых продаж необходим единый цифровой “приёмник” заявок — интеграция сайта, рекламы, телефонии и мессенджеров в CRM. 
              Это фундамент для прозрачной  системы.
            </p>

          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">2) CRM “есть”, но она не обязательна</p>
            <p className="mt-2">
              Формально amoCRM внедрена, но фактически команда продолжает работать в личных чатах, блокнотах и памяти. CRM используется для отчёта перед руководителем, а не как ежедневный рабочий инструмент.
            </p>

            <p className="mt-2">
              В такой модели система не управляет процессом — она лишь частично фиксирует последствия. Сделки появляются задним числом, задачи не ставятся, этапы не обновляются. Руководитель видит “картинку”, но не реальную динамику.
            </p>

            <p className="mt-2">
              Когда CRM не является обязательной точкой работы, невозможно выстроить аналитику, прогнозирование и контроль конверсии по этапам воронки. Внедрение превращается в формальность, а инвестиции не окупаются.
            </p>

            <p className="mt-2">
              Рабочая модель — это когда вся коммуникация фиксируется, каждая сделка проходит через стандартизированную воронку, а менеджер не может вести клиента вне системы. Только в этом случае CRM становится инструментом роста, а не отчётной таблицей.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">3) Нет стандарта: что делать с заявкой</p>
            <p className="mt-2">
              Без чётких регламентов обработки входящих обращений каждый менеджер действует по-своему. 
              Один перезванивает в течение 5 минут, другой — через час. Кто-то работает по скрипту, кто-то импровизирует.
            </p>

            <p className="mt-2">
              Это приводит к нестабильной конверсии и непредсказуемым результатам. При одинаковом трафике отдел продаж может показывать разницу в десятки процентов по закрытию сделок — просто из-за отсутствия стандарта реакции.
            </p>

            

            <p className="mt-2">
              Без зафиксированного алгоритма невозможно масштабировать продажи: новые сотрудники обучаются дольше, руководитель не может объективно оценить эффективность, а точки потери клиентов остаются скрытыми.
            </p>

            

            <p className="mt-2">
              Стандарт обработки заявки — это конкретные правила: время первого контакта, формат квалификации, обязательные поля в CRM, сценарии повторного касания. 
              Только так продажи становятся управляемым процессом, а не хаотичным набором действий.
            </p>


          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">4) Нет контроля и точек ответственности</p>
            <p className="mt-2">
              Даже сильные менеджеры не справляются с потоком задач без системы контроля. 
              Если нет правила “каждая сделка должна иметь активную задачу”, если не определено SLA по времени реакции, сделки начинают зависать.
            </p>

            <p className="mt-2">
              Проблема редко выглядит как саботаж. Чаще это накопление мелких переносов, забытых перезвонов и “вернусь позже”. В итоге компания теряет клиентов не из-за конкурентов, а из-за отсутствия дисциплины в процессе.
            </p>

            <p className="mt-2">
              Без регулярных точек контроля (ежедневный разбор воронки, отчёт по просроченным задачам, анализ этапов) руководитель не управляет продажами — он реагирует на последствия.
            </p>

            <p className="mt-2">
              Система контроля должна быть встроена в CRM: автоматические напоминания, запрет на сделки без задач, прозрачная зона ответственности по каждому этапу. Это создаёт предсказуемость и защищает прибыль.
            </p>


          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">5) Нет связки “источник → сделка”</p>
            <p className="mt-2">
              Если в системе не фиксируется источник обращения, нет UTM-разметки и корректной аналитики, бизнес начинает принимать решения на основе ощущений. Кажется, что “этот канал работает”, а “этот нет”, но цифры не подтверждены.
            </p>
<p className="mt-2">
            Без сквозной аналитики невозможно понять реальную стоимость привлечения клиента, окупаемость рекламы и вклад каждого канала в выручку. Дешёвый трафик может давать слабых лидов, а дорогой — приносить основную прибыль.
          </p>

<p className="mt-2">
            Отсутствие связки “реклама → лид → сделка → деньги” лишает собственника стратегического управления. Маркетинг и продажи работают разрозненно, а бюджет распределяется интуитивно.
          </p>

          <p className="mt-2">
            Интеграция CRM с рекламными системами и корректная передача данных позволяют видеть полный цикл: от клика до оплаты. Только так можно масштабировать бизнес без потерь и хаоса.
          </p>

          

          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Что меняется, когда все заявки попадают в одну систему</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Важно: цель не “поставить CRM”. Цель — сделать продажи управляемыми.
            Обычно изменения ощущаются быстро:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Появляется единая картина по всем лидам: кто в работе, кто потерян, почему.</li>
            <li>Становится ясно, какие каналы приводят деньги, а какие — шум.</li>
            <li>Менеджеры начинают работать по правилам, а не по настроению.</li>
            <li>Сокращается время реакции, повышается конверсия в контакт и встречу.</li>
            <li>Владелец видит контроль: задачи, сроки, ответственность.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">План действий: как перестать терять заявки</h2>

        <div className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">Шаг 1. Собрать точки входа</p>
            <p className="text-gray-700 mt-2">
              Выписать все источники обращений: сайт, звонки, WhatsApp, Telegram, директ, лид-формы, агрегаторы.
              Понять, какие из них должны попадать в CRM автоматически.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">Шаг 2. Настроить воронку и статусы</p>
            <p className="text-gray-700 mt-2">
              Сделать этапы так, чтобы по одному взгляду было ясно: что происходит с клиентом и что делать дальше.
              Без “свалки” статусов и без лишних переходов.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">Шаг 3. Включить стандарты и автоматические задачи</p>
            <p className="text-gray-700 mt-2">
              Правило уровня базы: “нет задачи — нет сделки”. Автоматизация задач, чтобы менеджер 
              не тратил время и не терял задачи в процессе работы.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">Шаг 4. Подключить аналитику источников</p>
            <p className="text-gray-700 mt-2">
              UTM-метки, фиксация источника, отчёты по каналам. Не ради графиков, а чтобы принимать решения по цифрам.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="font-semibold text-gray-900">Шаг 5. Проверить на реальном потоке</p>
            <p className="text-gray-700 mt-2">
              Тест на 1–2 недели: смотрим конверсию по этапам, точки зависаний и скорость реакции.
              Дальше — точечные улучшения, а не “переделать всё”.
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
      Хотите понять, где у вас теряются заявки?
    </h2>

    <p className="text-white/80 mb-6 max-w-xl">
      Можем быстро разобрать вашу ситуацию: каналы, воронка,
      точки потерь и что сделать в первую очередь,
      чтобы продажи стали управляемыми.
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
  <a href="/kontrol-menedzherov"
     className="group block bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 hover:shadow-lg hover:-translate-y-0.5 transition
            focus:outline-none focus:ring-2 focus:ring-primary/40">
    <div className="flex items-center justify-between gap-6">
      <div>
        <p className="text-sm text-gray-500 mb-2">Читать далее</p>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
          Нет контроля менеджеров
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