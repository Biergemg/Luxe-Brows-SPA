import React from 'react';
import { Button } from '../ui/Button';
import { generateWhatsAppLink } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

export function ProcesoAtencion() {
  const pasos = [
    {
      number: '1',
      title: 'Contacto por WhatsApp',
      desc: 'Resolución de dudas iniciales y agenda de cita.'
    },
    {
      number: '2',
      title: 'Elegimos tu servicio',
      desc: 'Te orientamos según lo que buscas y lo que mejor te funciona.'
    },
    {
      number: '3',
      title: 'Servicio',
      desc: 'Atención meticulosa y con altos estándares de higiene.'
    },
    {
      number: '4',
      title: 'Cuidados posteriores',
      desc: 'Te compartimos recomendaciones para mantener tu resultado.'
    }
  ];

  return (
    <section className="relative bg-luxe-black py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="mx-auto mb-5 h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6">
          Así es tu <span className="text-luxe-gray italic">experiencia</span>
        </h2>
        <p className="text-luxe-light-gray text-lg max-w-2xl mx-auto mb-16">
          Después de elegir tu servicio, te acompañamos paso a paso para que todo se sienta claro desde el inicio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 max-w-6xl mx-auto mb-16">
          {pasos.map((paso, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 rounded-full bg-luxe-dark-gray border border-white/10 flex items-center justify-center mb-6 z-10">
                <span className="text-luxe-gray font-serif text-2xl">{paso.number}</span>
              </div>

              {idx < pasos.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-gradient-to-r from-luxe-gray/50 to-transparent" />
              )}

              <h4 className="text-white font-medium text-lg mb-3 flex items-center gap-2 justify-center">
                {paso.title}
                {idx === 0 && <CheckCircle2 className="w-4 h-4 text-[#25D366]" />}
              </h4>
              <p className="text-sm text-luxe-light-gray leading-relaxed">{paso.desc}</p>
            </div>
          ))}
        </div>

        <Button size="lg" className="w-full sm:w-auto" asChild>
          <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            Agendar por WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
