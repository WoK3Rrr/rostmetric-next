
import type { ReactNode, SVGProps } from "react";
// app/legal/page.jsx
import Link from "next/link";


export const metadata = {
  title: "Соглашения и юридические документы",
  description: "Перечень юридических документов и реквизиты оператора.",
};

const Placeholder = ({ children }: { children: ReactNode }) => (
  <span className="inline-block border-b border-dashed border-gray-400/70 px-1 text-gray-700">
    {children}
  </span>
);

function FileIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-5 w-5 text-gray-400 ${className ?? ""}`}
      {...props}
    >
      <path
        d="M7 3h6l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13 3v5h5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 12h8M8 15h8M8 18h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const docs = [
  
  {
    title: "Политика в отношении обработки персональных данных",
    href: "/privacy",
  },
  {
    title: "Согласие на обработку персональных данных",
    href: "/consent",
  },
  
  
];

export default function LegalPage() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Соглашения и юридические документы
        </h1>

        <div className="mt-10">
          <ul className="space-y-4">
            {docs.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="group inline-flex items-start gap-3 text-gray-800 hover:text-gray-900 transition"
                >
                  <FileIcon className="mt-0.5" />
                  <span className="text-[15px] leading-relaxed underline underline-offset-4 decoration-transparent group-hover:decoration-gray-300 transition">
                    {d.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      
      </div>
    </main>
  );
}