
// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});


import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
export const metadata = {
  metadataBase: new URL("https://rostmetric.ru"),
verification: {
    yandex: "6b831ea8899bae51",
  },
  title: "РостМетрик — внедрение amoCRM",
  description: "Внедрение amoCRM и настройка системы продаж за 1–3 недели.",

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://rostmetric.ru/",
    siteName: "РостМетрик",
    title: "РостМетрик — внедрение amoCRM",
    description: "Внедрение amoCRM и настройка системы продаж за 1–3 недели.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "РостМетрик — внедрение amoCRM",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "РостМетрик — внедрение amoCRM",
    description: "Внедрение amoCRM и настройка системы продаж за 1–3 недели.",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        
      
        


        {/* Header */}
<header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur shadow-sm">
  <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
    <a href="/">
      <img
        src="/assets/img/logo.svg"
        alt="Logo"
        className="h-11 md:h-12 object-contain"
      />
    </a>

    <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
      <a href="/#services" className="hover:text-secondary transition">
        Ценность
      </a>
      <a href="/#process" className="hover:text-secondary transition">
        Процесс
      </a>
      <a href="/#about" className="hover:text-secondary transition">
        О проекте
      </a>
      <a href="/blog" className="hover:text-secondary transition">
        Статьи
      </a>
    </nav>

    <div className="flex items-center gap-2 sm:gap-4">
  <a
    href="/contacts"
    className="inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-r from-blue-800 via-blue-600 to-teal-500 px-3 sm:px-4 md:px-5 py-2 text-xs sm:text-sm font-medium text-white shadow-md transition hover:scale-[1.02] hover:opacity-90"
  >
    Контакты
  </a>

  <a
  href="/form"
  className="inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-lg bg-primary px-3 sm:px-4 md:px-5 py-2 text-xs sm:text-sm font-medium text-white transition hover:opacity-90"
>
  <span className="sm:hidden">Обсудить</span>
  <span className="hidden sm:inline">Обсудить проект</span>
</a>
</div>
  </div>
</header>

        {/* CONTENT */}
        <main className="pt-[68px] md:pt-[72px]">

        


        {children}

<Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  k=e.createElement(t),a=e.getElementsByTagName(t)[0];
  k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(106958946, "init", {
  clickmap:true,
  trackLinks:true,
  accurateTrackBounce:true,
  webvisor:true
});
            `,
          }}
        />



        </main>

        




        {/* Footer */}
<footer className="bg-gray-100 border-t border-gray-200 py-16">
  <div className="max-w-4xl mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-12">
      {/* Company Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4">РостМетрик</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Построение систем продаж и внедрение amoCRM для малого и среднего бизнеса.
        </p>

        <div className="mt-6 text-sm text-gray-500 space-y-1">
          <p>ИП Смирнов Александр Александрович</p>
          <p>ИНН: 540306051869</p>
          <p>Санкт-Петербург</p>
        </div>
      </div>

      {/* Partnerships */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Партнёрства</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="/amo-cert"
              className="text-gray-600 hover:text-secondary transition"
            >
              Сертификат партнёра amoCRM

            </a>
          </li>

          <li>
            <a
              href="https://roistat.com/ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-secondary hover:underline transition"
            >
              Партнёр Roistat
            </a>
          </li>


          <li>
            <a
              href="https://wazzup24.ru/?utm_p=UrJCAR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-secondary hover:underline transition"
            >
              Партнёр Wazzup Business API
            </a>
          </li>
          <li>
            <a
              href="https://rostmetric.ru/sipuni-cert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-secondary hover:underline transition"
            >
              Партнёр SIPUNI
            </a>
          </li>
          <li>
            
          </li>
          <li>
            <a
              href="/yad-cert"
              className="text-gray-600 hover:text-secondary hover:underline transition"
            >
              Сертификация Яндекс
            </a>
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Навигация</h3>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>
            <a href="/#services" className="hover:text-secondary transition">
              Ценность
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-secondary transition">
              Блог и статьи
            </a>
          </li>
          <li>
            <a href="/kak-prohodit-rabota" className="hover:text-secondary transition">
              Как проходит работа
            </a>
          </li>
          <li>
            <a href="/#about" className="hover:text-secondary transition">
              О проекте
            </a>
          </li>
          <li>
            <a href="/contacts" className="hover:text-secondary transition">
              Контакты
            </a>
          </li>
          <li>
            
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Line */}
    <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500 text-center">
      © 2026 РостМетрик. Все права защищены.
    </div>

    {/* ===== Добавленный блок "как у конкурентов" ===== */}
    <div className="mt-10 pt-8 border-t border-gray-200">
      {/* Юр-ссылки в ряд */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[13px] text-gray-400">
        <a
          href="/privacy"
          className="hover:text-gray-500 transition"
        >
          Политика в отношении обработки персональных данных
        </a>

        

        <a
          href="/consent"
          className="hover:text-gray-500 transition"
        >
          Согласие на обработку персональных данных
        </a>

        <a
          href="/legal"
          className="hover:text-gray-500 transition"
        >
          Все соглашения и юридические документы
        </a>
      </div>

      {/* Микротекст про cookies + согласие */}
      <div className="mt-10 max-w-3xl text-[13px] leading-relaxed text-gray-400">
        <p className="m-0">
          Мы{" "}
          <a
            href="/privacy"
            className="underline underline-offset-4 decoration-gray-300 hover:decoration-gray-400 hover:text-gray-500 transition"
          >
            используем файлы «cookie»
          </a>
          , с целью персонализации сервисов и повышения удобства пользования сайтом.
          Если вы не хотите использовать файлы «cookie», измените настройки браузера.
        </p>

        <p className="m-0 mt-3">
          Используя этот сайт, заполняя формы, обращаясь в мессенджеры и чаты, звоня нам по телефону,
          вы подтверждаете своё{" "}
          <a
            href="/consent"
            className="underline underline-offset-4 decoration-gray-300 hover:decoration-gray-400 hover:text-gray-500 transition"
          >
            согласие на обработку
          </a>{" "}
          персональных данных.
        </p>
      </div>
    </div>
    {/* ===== /Добавленный блок ===== */}
  </div>
</footer>


      
        
      </body>
    </html>
      
    
  );
}