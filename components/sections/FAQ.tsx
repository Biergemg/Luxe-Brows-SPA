import React from 'react';
import { faqs } from '@/data/faqs';
import { FAQAccordion } from '../ui/FAQAccordion';

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-luxe-black scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-16">
        <div className="w-full max-w-2xl">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6">
            Preguntas <span className="text-luxe-gray italic">frecuentes</span>
          </h2>
        </div>

        <div className="w-full flex flex-col border-t border-white/10">
          {faqs.map((faq) => (
            <FAQAccordion key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
