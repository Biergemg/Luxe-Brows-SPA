import React from "react";
import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, updatedAt, sections }: LegalPageProps) {
  return (
    <main className="bg-luxe-black pt-36 pb-20 md:pt-40 md:pb-24">
      <section className="container mx-auto max-w-4xl px-6 md:px-12">
        <div className="mb-10">
          <Link
            href="/"
            className="section-kicker inline-flex items-center gap-2 text-luxe-light-gray transition-colors hover:text-white"
          >
            ← Volver al inicio
          </Link>
        </div>

        <div className="mb-12 rounded-[28px] border border-white/8 bg-luxe-dark-gray/80 px-7 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm md:px-10 md:py-10">
          <div className="section-kicker mb-5">{eyebrow}</div>
          <h1 className="mb-5 text-4xl font-medium text-white md:text-6xl">{title}</h1>
          <p className="max-w-3xl text-base leading-8 text-luxe-light-gray md:text-lg">{intro}</p>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-luxe-gray to-transparent" />
          <p className="mt-6 text-sm text-luxe-light-gray">Última actualización: {updatedAt}</p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[24px] border border-white/8 bg-luxe-dark-gray/55 px-7 py-7 md:px-8"
            >
              <h2 className="mb-4 text-2xl font-medium text-white md:text-3xl">{section.title}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-sm leading-8 text-luxe-light-gray md:text-base">
                  {paragraph}
                </p>
              ))}

              {section.items ? (
                <ul className="space-y-3 text-sm leading-8 text-luxe-light-gray md:text-base">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.8rem] h-1.5 w-1.5 shrink-0 rounded-full bg-luxe-gray" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
