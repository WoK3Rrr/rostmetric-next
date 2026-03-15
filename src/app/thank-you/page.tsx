import ThankYouClient from "./ThankYouClient";

export const metadata = {
  title: "Спасибо! Заявка отправлена — РостМетрик",
  description: "Мы получили вашу заявку и свяжемся в ближайшее время.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    url: "/thank-you",
    title: "Спасибо! Заявка отправлена — РостМетрик",
    description: "Мы получили вашу заявку и свяжемся в ближайшее время.",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "РостМетрик — заявка отправлена" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Спасибо! Заявка отправлена — РостМетрик",
    description: "Мы получили вашу заявку и свяжемся в ближайшее время.",
    images: ["/assets/og-image.png"],
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}