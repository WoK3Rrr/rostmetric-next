export const metadata = {
  
  title: "Сертификат специалиста Яндекс Директ — РостМетрик",
  
  description: "Подтверждение партнёрства и сертификации РостМетрик. Компания официально настраивать рекламные компании для бизнеса",
  
  alternates: { canonical: "https://rostmetric.ru/yad-cert" },

  openGraph: {
    
    url: "https://rostmetric.ru/yad-cert",
    
    title: "Сертификат специалиста Яндекс Директ — РостМетрик",
    
    description: "Подтверждение партнёрства и сертификации РостМетрик. Компания официально настраивать рекламные компании Яндекс Директ для бизнеса",
    
siteName: "РостМетрик",
  locale: "ru_RU",
  type: "website",
    
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

export default function yadcertPage() {
  return (

<>


<main className="py-16">
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-10">
        <a href="/yad-cert" className="text-sm text-gray-500 hover:text-secondary transition">← На главную</a>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">Сертификат специалиста Яндекс Директ</h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Здесь размещено подтверждение партнёрства и сертификации. При необходимости можем предоставить дополнительные данные по запросу.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 md:p-6">
        <img
          src="/assets/yad-cert.jpg"
          alt="Сертификат специалиста Яндекс Директ"
          className="w-full h-auto rounded-xl border border-gray-200 bg-white"
        />
      </div>

    <section className="bg-secondary text-white rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-3">Хотите работать с официальным и сертифицированным партнером Яндекс?</h2>
        <p className="text-white/80 mb-6">
          Тогда обращайтесь к нам! Мы решим любую задачу своими силами или направим к  подходящему партнеру. 
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="form.html" className="inline-block bg-primary px-7 py-3 rounded-xl font-semibold hover:opacity-90 transition text-center">
            Обсудить проект
          </a>
          <a href="contacts.html" className="inline-block border border-white/30 px-7 py-3 rounded-xl font-semibold hover:bg-white/10 transition text-center">
            Контакты
          </a>
        </div>
      </section>
    </div>
  </main>

</>
  );
}