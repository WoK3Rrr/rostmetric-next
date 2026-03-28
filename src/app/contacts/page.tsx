

import {
  Send,
  Radio,
  Youtube,
  Play,
  Phone,
  Mail,
  Globe,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  
  title: "Контакты для связи и социальные сети компании — РостМетрик",
  
  description:
    "Контактная информация проекта РостМетрик. Номер телефона. Юридическое лицо. Остальные ссылки",
  
  alternates: { canonical: "https://rostmetric.ru/contacts" },

  openGraph: {
    
    url: "https://rostmetric.ru/contacts",
    
    title: "Контакты для связи и социальные сети компании — РостМетрик",
    
    description: "Контактная информация проекта РостМетрик. Номер телефона. Юридическое лицо. Остальные ссылки",
    
    images: [{ url: "https://rostmetric.ru/assets/og-image.png", width: 1200, height: 630, 

    alt: "РостМетрик" }],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/assets/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  
};

export default function ContactsPage() {
  return (
    <>
      <main className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-14 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Связаться можно любым удобным способом. Каналы, соцсети и реквизиты — всё в одном месте.
            </p>
          </div>

          

          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <h2 className="text-xl font-semibold mb-6">Связаться напрямую</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Телефон</p>
                    <a
                      href="tel:+79960724770"
                      className="font-medium hover:text-secondary transition"
                    >
                      +7 (996) 072-47-70
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telegram</p>
                    <a
                      href="https://t.me/RostAlexandr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-secondary transition"
                    >
                      @RostAlexandr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-mail для клиентов</p>
                    <a
                      href="mailto:mail@example.com"
                      className="font-medium hover:text-secondary transition"
                    >
                      lead@rostmetric.ru
                    </a>


                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-mail для партнеров и предложений</p>
                    <a
                      href="mailto:mail@example.com"
                      className="font-medium hover:text-secondary transition"
                    >
                      info@rostmetric.ru
                    </a>


                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <h2 className="text-xl font-semibold mb-6">Реквизиты</h2>

              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  <strong>ИП:</strong> Смирнов Александр Александрович
                </p>
                <p>
                  <strong>ИНН:</strong> 540306051869
                </p>
                <p>
                  <strong>ОГРНИП:</strong> 326784700095946
                </p>
                <p>
                  <strong>Город:</strong> Санкт-Петербург
                </p>

            
                <p>
                  <strong>Наименование налогового органа:</strong> Межрайонная инспекция Федеральной
налоговой службы №17 по Санкт
Петербургу
                </p>

                
              </div>

              
            </div>
          </section>

<section className="mb-16">
            <h2 className="text-xl font-semibold mb-6 text-center">
              Где читать и смотреть
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <a
                href="https://t.me/rostmetric"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition flex flex-col items-center gap-3"
              >
                <Send className="w-6 h-6 text-secondary" />
                <p className="font-semibold">Telegram</p>
              </a>

              



              <a
                href="https://www.youtube.com/@rostmetric"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition flex flex-col items-center gap-3"
              >
                <Youtube className="w-6 h-6 text-secondary" />
                <p className="font-semibold">YouTube</p>
              </a>

              <a
                href="https://www.rutube.ru/@rostmetric"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition flex flex-col items-center gap-3"
              >
                <Play className="w-6 h-6 text-secondary" />
                <p className="font-semibold">Rutube</p>
              </a>

              <a
  href="https://vc.ru/rostmetric"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition flex flex-col items-center gap-3"
>
  <Globe className="w-6 h-6 text-secondary" />
  <p className="font-semibold">VC.ru</p>
</a>


            </div>
          </section>

          <div className="text-center">
            <a
              href="/"
              className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Вернуться на главную
            </a>
          </div>
        </div>
      </main>
    </>
  );
}