import React from 'react';
import { faqs } from '@/data/faqs';
import { FAQAccordion } from '../ui/FAQAccordion';
import { Button } from '../ui/Button';
import { generateWhatsAppLink } from '@/lib/utils';
import { whatsappMessages } from '@/lib/site';

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-luxe-black scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="w-full lg:w-1/3">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6">
            Preguntas <br className="hidden lg:block" />
            <span className="text-luxe-gray italic">Frecuentes</span>
          </h2>
          <p className="text-luxe-light-gray text-lg mb-8">
            Resolvemos tus dudas de forma clara para que agendes con confianza.
          </p>
          <div className="p-6 rounded-sm bg-luxe-dark-gray border border-white/5 cinematic-shadow">
            <h4 className="text-white font-medium mb-3">¿Tienes otra duda?</h4>
            <p className="text-sm text-luxe-light-gray mb-6">
              Si quieres, podemos orientarte por WhatsApp para que elijas con más tranquilidad.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <a href={generateWhatsAppLink(whatsappMessages.faq)} target="_blank" rel="noopener noreferrer">
                Resolver por WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col border-t border-white/10">
          {faqs.map((faq) => (
            <FAQAccordion key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
