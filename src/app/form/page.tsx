import FormClient from "./FormClient";

export const metadata = {
  title: "Обсудить проект и оставить заявку — РостМетрик",
  description: "Оставьте заявку на внедрение CRM и настройку системы продаж.",
  alternates: { canonical: "/form" },
  openGraph: {
    url: "https://rostmetric.ru/",
    title: "Обсудить проект и оставить заявку — РостМетрик",
    description: "Оставьте заявку на внедрение CRM и настройку системы продаж.",
    images: [
      {
        url: "https://rostmetric.ru/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "РостМетрик",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://rostmetric.ru/assets/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function FormPage() {
  return <FormClient />;
}