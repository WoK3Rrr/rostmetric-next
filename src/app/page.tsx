
import { Search, Workflow, Settings } from "lucide-react";

import Link from "next/link";


export const metadata = {
  
  title: "РостМетрик — внедрение amoCRM и систем продаж",
  
  description: "РостМетрик — настройка воронок и рост продаж. Строим систему в amoCRM за 1–3 недели. Без хаоса.",
  
  alternates: { canonical: "https://rostmetric.ru/" },

  openGraph: {
    
    url: "https://rostmetric.ru/",
    
    title: "РостМетрик — внедрение amoCRM и систем продаж",

    siteName: "РостМетрик",
  locale: "ru_RU",
  type: "website",
    
    description: "РостМетрик — настройка воронок и рост продаж. Строим систему в amoCRM за 1–3 недели. Без хаоса.",
    
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



export default function HomePage() {
  return (
    <>


    
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-start pt-32 md:pt-40">

  
<div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
 <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
  <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

    <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-extrabold leading-tight mb-6">
      Строим управляемую систему продаж на базе <span className="text-secondary">amoCRM</span> за 1–3 недели
    </h1>
    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
      Соединяем трафик, продажи и аналитику в одну управляемую систему, чтобы привлекать клиентов, наводить порядок в воронке и устранять потери денег.
    </p>

    <a href="/form" className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition">
      Обсудить проект
    </a>
  </div>
</section>


<section className="bg-gray-50 py-24">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Почему реклама без системы не работает
    </h2>

    
    <p className="text-gray-600 max-w-3xl mx-auto mb-14">
      Трафик, то есть рекламная активность, усиливает то, что уже есть внутри бизнеса. Если нет выстроенной воронки и стандартов обработки заявок — масштабируется не прибыль, а хаос.
    </p>

    <p className="text-gray-600 max-w-3xl mx-auto mb-14">
      Кликайте на иконки — статьи по ссылке
    </p>

    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">

      
      <a href="/zayavki-teryayutsya" className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 9.75V6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v3M3 9.75l2.25 6.75A2.25 2.25 0 0 0 7.5 18h9a2.25 2.25 0 0 0 2.25-1.5L21 9.75M3 9.75h6.75m4.5 0H21"
  />
</svg>
          </div>
          <div>
            <p className="text-gray-900 font-semibold">Заявки теряются</p>
            <p className="text-gray-600 text-sm mt-1">
              Нет единого места, где фиксируется обращение — часть лидов просто исчезает
            </p>
          </div>
        </div>
      </a>

      
      <a href="/kontrol-menedzherov" className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M2.25 12c2.25-4.5 6-6.75 9.75-6.75S19.5 7.5 21.75 12c-2.25 4.5-6 6.75-9.75 6.75S4.5 16.5 2.25 12Z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  />
</svg>
          </div>
          <div>
            <p className="text-gray-900 font-semibold">Нет контроля менеджеров</p>
            <p className="text-gray-600 text-sm mt-1">
              Сложно понять, кто что делает с заявкой и почему сделки зависают
            </p>
          </div>
        </div>
      </a>

      
      <a href="/neponyatna-okupaemost" className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 3v18h18M9 17V9m4 8V5m4 12v-6"
  />
</svg>
          </div>
          <div>
            <p className="text-gray-900 font-semibold">Невозможно понять окупаемость</p>
            <p className="text-gray-600 text-sm mt-1">
              Нет связки источник → заявка → сделка, поэтому решения принимаются вслепую
            </p>
          </div>
        </div>
      </a>

      
      <a href="/resheniya-na-oshchushcheniyah" className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 18h.01M9.75 9a2.25 2.25 0 1 1 4.5 0c0 1.125-.75 1.875-1.5 2.25-.75.375-1.5.75-1.5 1.5"
  />
</svg>
          </div>
          <div>
            <p className="text-gray-900 font-semibold">Решения принимаются на ощущениях</p>
            <p className="text-gray-600 text-sm mt-1">
              Без цифр и прозрачных статусов сложно управлять продажами и улучшать результат
            </p>
          </div>
        </div>
      </a>

    </div>

  </div>
</section>





<section id="services" className="py-24 pb-26 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Что вы получаете после внедрения
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-16">
      РостМетрик для вас не просто устанавливает amoCRM, а строит рабочую систему: единые правила,
      контроль этапов и прозрачность каждого лида
    </p>

    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">

      <a
        href="/form"
        className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition
               focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary grid place-items-center shrink-0 leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 block"
            >
              <path d="M3 4.5h18l-7.5 8.25V18l-3 1.5v-6.75L3 4.5Z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Понятная воронка продаж</p>
            <p className="text-gray-600 text-sm mt-1">
              Чёткие этапы сделки и прозрачное движение клиента от заявки до оплаты
            </p>
          </div>
        </div>
      </a>

      <a href="/form"
     className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition
            focus:outline-none focus:ring-2 focus:ring-primary/40">
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0 leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="w-6 h-6 block">
          <path d="M9 12.75 11.25 15 15 9.75M4.5 6.75h15M4.5 12h6.75M4.5 17.25h6.75" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-gray-900">Автоматические задачи</p>
        <p className="text-gray-600 text-sm mt-1">
          Система сама ставит задачи менеджерам и не даёт забыть о клиентах
        </p>
      </div>
    </div>
  </a>

  <a href="/form"
     className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition
            focus:outline-none focus:ring-2 focus:ring-primary/40">
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary grid place-items-center shrink-0 leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="w-6 h-6 block">
          <path d="M3 3v18h18M8.25 15V9m4.5 6V6m4.5 9v-3" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-gray-900">Прозрачная аналитика</p>
        <p className="text-gray-600 text-sm mt-1">
          Видно, откуда приходят заявки и где реально зарабатываются деньги
        </p>
      </div>
    </div>
  </a>

  
  <a href="/form"
     className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition
            focus:outline-none focus:ring-2 focus:ring-primary/40">
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0 leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="w-6 h-6 block">
          <path d="M20.25 12c0 4.556-4.03 8.25-9 8.25a10.3 10.3 0 0 1-3.375-.56L3.75 20.25l.84-3.36A7.93 7.93 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          <path d="M7.5 12h9" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-gray-900">Интеграции и связь</p>
        <p className="text-gray-600 text-sm mt-1">
          Телефония, мессенджеры и заявки собираются в одном месте
        </p>
      </div>
    </div>
  </a>

  
  <a href="/form"
     className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition
            focus:outline-none focus:ring-2 focus:ring-primary/40">
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary grid place-items-center shrink-0 leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="w-6 h-6 block">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
          <path d="M15.75 9.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          <path d="M6.75 18a7.5 7.5 0 0 1 10.5 0" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-gray-900">Единые стандарты работы</p>
        <p className="text-gray-600 text-sm mt-1">
          Команда работает по понятным правилам, а не каждый по-своему
        </p>
      </div>
    </div>
  </a>

  
  <a href="/form"
     className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition
            focus:outline-none focus:ring-2 focus:ring-primary/40">
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0 leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="w-6 h-6 block">
          <path d="M12 3l7.5 4.5V12c0 5.25-3.75 9-7.5 9S4.5 17.25 4.5 12V7.5L12 3Z" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-gray-900">Контроль и стабильность</p>
        <p className="text-gray-600 text-sm mt-1">
          Продажи становятся управляемыми и предсказуемыми
        </p>
      </div>
    </div>
  </a>

      

    </div> {/* grid */}

  </div> 

</section>

<section
  id="contact"
  className="relative overflow-hidden py-25 text-white
             bg-gradient-to-br from-secondary via-secondary/90 to-primary"
>
  {/* фоновые свечения */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
      Хотите, чтобы продажи стали предсказуемыми?
    </h2>

    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
      Разберём вашу текущую ситуацию, покажем, где теряются деньги,
      и предложим понятную структуру продаж без лишних функций.
    </p>

    <a
      href="/form"
      className="inline-block bg-white text-secondary px-10 py-4 rounded-xl
                 text-lg font-semibold shadow-lg
                 hover:scale-[1.03] hover:shadow-xl transition"
    >
      Обсудить проект
    </a>

    <p className="mt-6 text-sm text-white/70">
      Ответим в течение рабочего дня
    </p>
  </div>
</section>


<section id="process" className="bg-gray-50 py-24">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
      Как проходит работа 
    </h2>

<p className="text-gray-600 text-center mt-4 mb-6">
  Кликайте на любой из этапов.
</p>

    <div className="max-w-3xl mx-auto space-y-4">

      <a href="/kak-prohodit-rabota" className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition">
        <div className="flex items-start gap-5">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold transition group-hover:bg-secondary/10 group-hover:text-secondary">
            1
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Диагностика</h3>
            <p className="text-gray-600">
              Анализируем текущую обработку заявок, воронку и точки потерь.
            </p>
          </div>
        </div>
      </a>

      <a href="/kak-prohodit-rabota" className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition">
        <div className="flex items-start gap-5">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold transition group-hover:bg-secondary/10 group-hover:text-secondary">
            2
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Проектирование воронки</h3>
            <p className="text-gray-600">
              Выстраиваем этапы, статусы и логику движения сделки под ваш процесс.
            </p>
          </div>
        </div>
      </a>

      <a href="/kak-prohodit-rabota" className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition">
        <div className="flex items-start gap-5">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold transition group-hover:bg-secondary/10 group-hover:text-secondary">
            3
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Настройка amoCRM</h3>
            <p className="text-gray-600">
              Настраиваем воронки, поля, автоматизации, задачи и нужные интеграции. 
            </p>
          </div>
        </div>
      </a>

      <a href="/kak-prohodit-rabota" className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition">
        <div className="flex items-start gap-5">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold transition group-hover:bg-secondary/10 group-hover:text-secondary">
            4
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Обучение и передача</h3>
            <p className="text-gray-600">
              Обучаем команду и передаём чек-лист, чтобы система работала стабильно.
            </p>
          </div>
        </div>
      </a>

    </div>
  </div>
</section>




<section
  id="about"
  className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-gray-50 to-white"
>
  {/* мягкие свечения на фоне */}
  <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
  <div className="pointer-events-none absolute top-10 -right-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
      О проекте
    </h2>

    {/* центральная карточка */}
    <div className="max-w-4xl mx-auto">
      <div className="relative rounded-3xl border border-gray-200/70 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] px-6 md:px-10 py-10 md:py-12">
        {/* декоративный SVG-паттерн */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path
                d="M 42 0 L 0 0 0 42"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-900"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative text-center">
          <div className="text-2xl md:text-3xl font-medium leading-snug tracking-tight">
            Строим архитектуру {" "}
            <span className="font-semibold text-gray-900">вашей системы продаж</span>{" "}
            на базе{" "}
            <span className="font-semibold text-gray-900">amoCRM</span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
          <span className="px-4 py-2 rounded-full bg-gray-500 text-white text-base md:text-lg font-semibold shadow-sm">
              сайт
            </span>
             <span className="text-gray-400 text-xl md:text-2xl">→</span>
            <span className="px-4 py-2 rounded-full bg-gray-900 text-white text-base md:text-lg font-semibold shadow-sm">
              трафик
            </span>
            <span className="text-gray-400 text-xl md:text-2xl">→</span>
            <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-base md:text-lg font-semibold border border-secondary/15 shadow-sm">
              заявки
            </span>
            <span className="text-gray-400 text-xl md:text-2xl">→</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-base md:text-lg font-semibold border border-primary/15 shadow-sm">
              продажи
            </span>
          </div>

          <div className="mt-7 mx-auto max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

          <div className="mt-7 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Собираем сайт, трафик и CRM в единую систему,{" "}
            <span className="text-gray-900 font-medium">
              чтобы заявки не терялись, а продажи были управляемыми,
            </span>{" "}
            без лишних сложностей.
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm md:text-base shadow-sm">
              1–3 недели на внедрение
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm md:text-base shadow-sm">
              Регламенты и стандарты
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm md:text-base shadow-sm">
              Контроль без микроменеджмента
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* ДВА РЯДА КАРТОЧЕК (ровно, симметрично) */}
    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
      {/* ряд 1 */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition h-full">
        <p className="font-semibold text-gray-900">Трафик</p>
        <p className="text-sm text-gray-600 mt-2">
          Настраиваем платный трафик и готовим посадочную страницу под него. Чтобы заявки приходили в понятную и управляемую систему — собираем рабочую связку сайта, заявок и CRM. 
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition h-full">
        <p className="font-semibold text-gray-900">CRM</p>
        <p className="text-sm text-gray-600 mt-2">
          Воронки, автоматизации, стандарты. amoCRM становится рабочим инструментом. Подключаем аналитику: UTM,
          источники, прозрачность входящих.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition h-full">
        <p className="font-semibold text-gray-900">Система продаж и контроль</p>
        <p className="text-sm text-gray-600 mt-2">
          Потери, конверсия, управляемость. Консультируем по системе продаж и помогаем
          наладить процессы. Помогаем экономить время на операционном управлении
        </p>
      </div>

      {/* ряд 2 */}
      <a
        href="/form"
        className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-primary/40 h-full"
      >
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
            {/* icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 13.5V6.75A2.25 2.25 0 0 0 18.75 4.5H16.5V3.75A2.25 2.25 0 0 0 14.25 1.5h-4.5A2.25 2.25 0 0 0 7.5 3.75V4.5H5.25A2.25 2.25 0 0 0 3 6.75v6.75m18 0v6.75A2.25 2.25 0 0 1 18.75 22.5H5.25A2.25 2.25 0 0 1 3 20.25V13.5m18 0a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 13.5" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Опыт и контекст</h3>
            <p className="text-gray-600">
              Смотрим на бизнес не только как на рекламу или CRM. Понимаем логику продаж, маркетинга и внутренней операционной работы. Поэтому смотрим не на отдельный инструмент, а на всю систему: от входящего спроса до обработки заявки и контроля.
            </p>

          </div>
        </div>
      </a>

      <a
        href="/form"
        className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-primary/40 h-full"
      >
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            {/* icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 18H7.5m6.75-6h6.75m-6.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 12H11.25" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Системный подход</h3>
            <p className="text-gray-600">
              Настраиваем CRM под ваш процесс, а не по шаблону: этапы, поля, автоматизации, задачи и правила обработки заявок. Оставляем только то, что действительно помогает продавать и контролировать.
            </p>
          </div>
        </div>
      </a>

      <a
        href="/form"
        className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-primary/40 h-full"
      >
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
            {/* icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M12 3l7.5 4.5V12c0 5.25-3.75 9-7.5 9S4.5 17.25 4.5 12V7.5L12 3z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Результат без хаоса</h3>
            <p className="text-gray-600">
              В итоге собственник получает не просто CRM, а рабочую систему: заявки не теряются, менеджеры работают по понятным правилам, а воронка становится прозрачной и управляемой.
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<section
  id="contact"
  className="relative overflow-hidden py-32 text-white
             bg-gradient-to-br from-secondary via-secondary/90 to-primary"
>
  {/* фоновые свечения */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
      Пора выстроить систему, которая работает на вас?
    </h2>

    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
      Сначала разбираем, как у вас устроены продажи, где теряются заявки и деньги, а потом настраиваем amoCRM под реальный процесс бизнеса. Без лишних действий и формального внедрения ради галочки.
    </p>

    <a
      href="/form"
      className="inline-block bg-white text-secondary px-10 py-4 rounded-xl
                 text-lg font-semibold shadow-lg
                 hover:scale-[1.03] hover:shadow-xl transition"
    >
      Обсудить проект
    </a>

    <p className="mt-6 text-sm text-white/70">
      Ответим в течение рабочего дня
    </p>
  </div>
</section>


  <section id="services" className="py-24 pb-14 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Прокачка ваших продаж по современному
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-16">
      Настраиваем аналитику, упорядочиваем обработку обращений и создаём прозрачность на каждом этапе.
    </p>

    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">

      <a
        href="/form"
        className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition
               focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary grid place-items-center shrink-0 leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 block"
            >
              <path d="M3 4.5h18l-7.5 8.25V18l-3 1.5v-6.75L3 4.5Z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Воронка продаж</p>
            <p className="text-gray-600 text-sm mt-1">
              Чёткие этапы сделки и прозрачное движение клиента от заявки до оплаты
            </p>
          </div>
        </div>
      </a>

      <a href="/form"
     className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition
            focus:outline-none focus:ring-2 focus:ring-primary/40">
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0 leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="w-6 h-6 block">
          <path d="M9 12.75 11.25 15 15 9.75M4.5 6.75h15M4.5 12h6.75M4.5 17.25h6.75" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-gray-900">Автозадачи в CRM</p>
        <p className="text-gray-600 text-sm mt-1">
          amoCRM автоматически ставит задачи менеджерам и не даёт забыть о любимых клиентах
        </p>
      </div>
    </div>
  </a>

  <a href="/form"
     className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition
            focus:outline-none focus:ring-2 focus:ring-primary/40">
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary grid place-items-center shrink-0 leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="w-6 h-6 block">
          <path d="M3 3v18h18M8.25 15V9m4.5 6V6m4.5 9v-3" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-gray-900">Сквозная аналитика</p>
        <p className="text-gray-600 text-sm mt-1">
          Видно, откуда приходят заявки и где реально зарабатываются деньги
        </p>
      </div>
    </div>
  </a>

  
  <a href="/form"
     className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition
            focus:outline-none focus:ring-2 focus:ring-primary/40">
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0 leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="w-6 h-6 block">
          <path d="M20.25 12c0 4.556-4.03 8.25-9 8.25a10.3 10.3 0 0 1-3.375-.56L3.75 20.25l.84-3.36A7.93 7.93 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          <path d="M7.5 12h9" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-gray-900">Телефония и мессенджеры</p>
        <p className="text-gray-600 text-sm mt-1">
          Все чаты и диалоге хранятся в одном месте и доступны для аналитики
        </p>
      </div>
    </div>
  </a>

  
  <a href="/form"
     className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition
            focus:outline-none focus:ring-2 focus:ring-primary/40">
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary grid place-items-center shrink-0 leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="w-6 h-6 block">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
          <path d="M15.75 9.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          <path d="M6.75 18a7.5 7.5 0 0 1 10.5 0" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-gray-900">Стандарты для команды</p>
        <p className="text-gray-600 text-sm mt-1">
          Команда работает по понятным правилам, а не каждый по-своему
        </p>
      </div>
    </div>
  </a>

  
  <a href="/form"
     className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition
            focus:outline-none focus:ring-2 focus:ring-primary/40">
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0 leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="w-6 h-6 block">
          <path d="M12 3l7.5 4.5V12c0 5.25-3.75 9-7.5 9S4.5 17.25 4.5 12V7.5L12 3Z" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-gray-900">Контроль и и решения на основе цифр</p>
        <p className="text-gray-600 text-sm mt-1">
          Продажи становятся управляемыми и предсказуемыми
        </p>
      </div>
    </div>
  </a>

      

    </div> {/* grid */}

  </div> 

</section>


<section className="bg-gradient-to-b from-white via-gray-50 to-white py-24">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Все еще не готовы обсудить ваш проект?
    </h2>

    
    <p className="text-gray-600 max-w-3xl mx-auto mb-14">
      Читайте наши статьи по ссылке где мы подробнее рассказали о решении проблемы хаоса в ваших продажах и почему не получается расти
    </p>

    <p className="text-gray-600 max-w-3xl mx-auto mb-14">
      Нажимайте на заголовки — статьи находятся по ссылке
    </p>

    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">

      
      <a href="/zayavki-teryayutsya" className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 9.75V6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v3M3 9.75l2.25 6.75A2.25 2.25 0 0 0 7.5 18h9a2.25 2.25 0 0 0 2.25-1.5L21 9.75M3 9.75h6.75m4.5 0H21"
  />
</svg>
          </div>
          <div>
            <p className="text-gray-900 font-semibold">Лиды не хранят</p>
            <p className="text-gray-600 text-sm mt-1">
              Нет единого места, где фиксируется обращение — часть лидов просто исчезает
            </p>
          </div>
        </div>
      </a>

      
      <a href="/net-kontrolya-menedzherov" className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M2.25 12c2.25-4.5 6-6.75 9.75-6.75S19.5 7.5 21.75 12c-2.25 4.5-6 6.75-9.75 6.75S4.5 16.5 2.25 12Z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  />
</svg>
          </div>
          <div>
            <p className="text-gray-900 font-semibold">Нет контроля менеджеров</p>
            <p className="text-gray-600 text-sm mt-1">
              Сложно понять, кто что делает с заявкой и почему сделки зависают
            </p>
          </div>
        </div>
      </a>

      
      <a href="/neponyatna-okupaemost" className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 3v18h18M9 17V9m4 8V5m4 12v-6"
  />
</svg>
          </div>
          <div>
            <p className="text-gray-900 font-semibold">Невозможно понять окупаемость</p>
            <p className="text-gray-600 text-sm mt-1">
              Нет связки источник → заявка → сделка, поэтому решения принимаются вслепую
            </p>
          </div>
        </div>
      </a>

      
      <a href="/resheniya-na-oshchushcheniyah" className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 18h.01M9.75 9a2.25 2.25 0 1 1 4.5 0c0 1.125-.75 1.875-1.5 2.25-.75.375-1.5.75-1.5 1.5"
  />
</svg>
          </div>
          <div>
            <p className="text-gray-900 font-semibold">Решения принимаются на ощущениях</p>
            <p className="text-gray-600 text-sm mt-1">
              Без цифр и прозрачных статусов сложно управлять продажами и улучшать результат
            </p>
          </div>
        </div>
      </a>

    </div>

  </div>
</section>


<section
  id="contact"
  className="relative overflow-hidden py-32 text-white
             bg-gradient-to-br from-secondary via-secondary/90 to-primary"
>
  {/* фоновые свечения */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
      Готовы навести порядок в продажах?
    </h2>

    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
      Разберёмся, где теряются заявки и деньги,
и создадим систему, которая даёт контроль и масштабируемость
    </p>

    <a
      href="/form"
      className="inline-block bg-white text-secondary px-10 py-4 rounded-xl
                 text-lg font-semibold shadow-lg
                 hover:scale-[1.03] hover:shadow-xl transition"
    >
      Обсудить проект
    </a>

    <p className="mt-6 text-sm text-white/70">
      Ответим в течение рабочего дня
    </p>
  </div>
</section>


    </>
  );
}