export const metadata = {
  
  title: "Блог и статьи про управление в сфере продаж — РостМетрик",
  
  description:
    "Материалы об управлении отделом продаж: дисциплина и контроль менеджеров, регламенты, KPI, внедрение CRM и построение управляемой системы продаж без хаоса.",
  
  alternates: { canonical: "https://rostmetric.ru/pro-upravlenie" },

  openGraph: {
    
    url: "https://rostmetric.ru/pro-upravlenie",
    
    title: "Блог и статьи про управление в сфере продаж — РостМетрик",
    
    description: "Материалы об управлении отделом продаж: дисциплина и контроль менеджеров, регламенты, KPI, внедрение CRM и построение управляемой системы продаж без хаоса.",
    
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
    slug: "/resheniya-na-oshchushcheniyah",
    title: "Решения принимаются на ощущениях — и рост превращается в хаос",
    excerpt:
      "Но когда поток заявок растёт, управление “на ощущениях” перестаёт быть преимуществом. Без цифр, CRM и сквозной аналитики масштабирование превращается в ускорение вслепую. ",
    date: "2026-02-20",
    readTime: "читать 5 мин",
  },
  
  

  

{
  slug: "/crm-ne-daet-rezultata",
  title: "CRM есть, результата нет: почему внедрение не решает проблему",
  excerpt:
    "Система установлена, воронка создана, лицензии оплачены — но управляемости не стало. Разбираем, где именно ломается интеграция CRM в бизнес",
  date: "2026-02-25",
  readTime: "читать 4 мин",
},




];

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
<div className="mb-8 text-sm text-gray-500 flex items-center gap-2">
  <a href="/" className="hover:text-secondary transition">
    ← На главную
  </a>
  <span>/</span>
  <a href="/blog" className="hover:text-secondary transition">
    В блог
  </a>
</div>
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Блог и статьи про управление в сфере продаж и маркетинга — РостМетрик
            </h1>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl">
              Короткие практические материалы про систему продаж и amoCRM
            </p>

            <p className="mt-3 text-lg text-gray-600 max-w-2xl">
              О построении систем продаж и маркетинга. А также об автоматизации бизнес-процессов и веб-аналитике
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
        ? "bg-gradient-to-r from-emerald-500/90 via-blue-600 to-blue-800/90"
        : "bg-gradient-to-r from-blue-800/90 via-blue-600 to-emerald-500/90";

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
            {post.date} • {post.readTime}
          </div>

          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              isColored
                ? "bg-white/15 text-white ring-1 ring-white/20"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Статья
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