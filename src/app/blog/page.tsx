export const metadata = {
  
  title: "Блог и статьи о маркетинге и продажах — РостМетрик",
  
  description:
    "Экспертные материалы о маркетинге и продажах: воронки, реклама, окупаемость каналов, внедрение CRM, контроль менеджеров и построение системного роста бизнеса.",
  
  alternates: { canonical: "https://rostmetric.ru/blog" },

  openGraph: {
    
    url: "https://rostmetric.ru/",
    
    title: "РостМетрик — внедрение amoCRM и систем продаж",
    
    description: "РостМетрик — настройка воронок и рост продаж.Строим систему в amoCRM за 1–3 недели. Без хаоса.",
    
    images: [{ url: "https://rostmetric.ru/assets/og-image.png", width: 1200, height: 630, 

    alt: "РостМетрик" }],
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

const posts = [
  {
    slug: "/pro-voronky-prodazh",
    title: "Воронка продаж: где теряется конверсия и как вернуть управляемость",
    excerpt:
      "Статьи о структуре и оптимизации воронки продаж: где теряется конверсия, как выявить слабое звено и настроить этапы в CRM. Разбираем причины просадки, контроль движения сделок и рост выручки через управляемый процесс.",
    date: "2026-02-22",
    
  },

  {
    slug: "/pro-kontrol-menedzherov",
    title: "Контроль менеджеров по продажам без микроменеджмента",
    excerpt:
      "Материалы о системном контроле отдела продаж без микроменеджмента. Как внедрить стандарты работы в CRM, настроить SLA, задачи и прозрачную аналитику по менеджерам, чтобы сделки не зависали и конверсия росла.",
    date: "2026-02-22",
    
  },



  {
    slug: "/pro-end-to-end-analytics",
    title: "Сквозная аналитика: от клика до прибыли",
    excerpt:
      "Публикации о связке маркетинга и продаж через CRM и аналитику. Как видеть путь клиента от клика до оплаты, считать окупаемость рекламы и принимать решения на основе данных, а не ощущений. ",
    date: "2026-02-20",
    
  },
  {
    slug: "/pro-upravlenie",
    title:
      "Управление и менеджмент в сфере продаж и маркетинга",
    excerpt:
      "Статьи о построении управляемой системы: регламенты, KPI, автоматизация, синхронизация маркетинга и отдела продаж. Подход к масштабированию бизнеса без хаоса и потери контроля. Как управлять командой, внедрять улучшения и строить коорпоративную культуру с человеческим лицом. О том, как сделать так чтобы команда работала эффективно и без лишнего напряжения",
    date: "2026-02-18",
    
  },
  {
    slug: "/pro-amo-crm",
    title: "Темы напрямую по amoCRM",
    excerpt:
      "Почему amoCRM есть, а разницы в результате нету? Как настроить систему самостоятельно. Как оптимизировать работу. Гайды по amo для отдельных ниш",
    date: "2026-02-23",
    
  },

  


];

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
<div className="mb-8">
      <a href="/" className="text-sm text-gray-500 hover:text-secondary transition">← На главную</a>
    </div>
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Блог и статьи по темам нашей работы — РостМетрик
            </h1>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl">
              Короткие практические материалы про систему продаж и amoCRM
            </p>

            <p className="mt-3 text-lg text-gray-600 max-w-2xl">
              О построении систем продаж и маркетинга. Автоматизация бизнес-процессов продаж, веб и сквозная аналитика
            </p>
          </header>

          {/* Сетка 2x2 */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {posts.map((post, index) => {
    const isEvenRow = Math.floor(index / 2) % 2 === 0;
    const isLeft = index % 2 === 0;

    const isColored =
      (isEvenRow && isLeft) || (!isEvenRow && !isLeft);

    // 👉 если карточка цветная и она справа — инвертируем градиент
    const gradientClass =
      isColored && !isLeft
        ? "bg-gradient-to-r from-emerald-500 via-blue-600 to-blue-800"
        : "bg-gradient-to-r from-blue-800 via-blue-600 to-emerald-500";

    return (
      <a
        key={post.slug}
        href={post.slug}
        className={`group rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col min-h-[240px] ${
          isColored
            ? `${gradientClass} text-white border border-white/10`
            : "bg-white text-gray-900 border border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <div
            className={`text-xs ${
              isColored ? "text-white/80" : "text-gray-500"
            }`}
          >
            {post.date} 
          </div>

          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              isColored
                ? "bg-white/15 text-white ring-1 ring-white/20"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Тема
          </span>
        </div>

        <h2 className="mt-4 text-xl md:text-2xl font-extrabold leading-snug">
          {post.title}
        </h2>

        <p
          className={`mt-3 text-base leading-relaxed ${
            isColored ? "text-white/90" : "text-gray-600"
          }`}
        >
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6">
          <span
            className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              isColored
                ? "bg-white/15 text-white ring-1 ring-white/20 hover:bg-white/20"
                : "bg-gray-900 text-white hover:opacity-90"
            }`}
          >
            Читать →
          </span>
        </div>
      </a>
    );
  })}
</section>







        </div>
      </main>
    </>
  );
}