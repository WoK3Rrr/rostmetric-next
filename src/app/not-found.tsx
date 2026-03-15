export const metadata = {
  title: "Страница не найдена — РостМетрик",
  description: "Запрошенная страница не существует или была удалена.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-6">
          Страница не найдена или была перемещена.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-xl hover:opacity-90 transition"
        >
          Вернуться на главную
        </a>
      </div>
    </main>
  );
}