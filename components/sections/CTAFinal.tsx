import React from 'react';
import { Button } from '../ui/Button';
import { getBookingLink, generateWhatsAppLink } from '@/lib/utils';
import { whatsappMessages } from '@/lib/site';

export function CTAFinal() {
  return (
    <section className="py-20 md:py-28 bg-luxe-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(89,89,89,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="grain-overlay" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 p-8 md:p-16 rounded-[32px] luxury-panel relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(164,119,100,0.12),transparent_25%),linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:auto,10px_10px] pointer-events-none" />

          <div className="w-full lg:w-1/2 relative z-10">
            <div className="section-kicker mb-5">Reserva en línea</div>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6 leading-tight">
              Tu próxima cita está <br />
              <span className="text-luxe-gray italic">a un clic de distancia.</span>
            </h2>
            <p className="text-luxe-light-gray text-lg mb-10 leading-relaxed">
              Reserva 24/7 en segundos. Si antes de agendar necesitas orientación, también podemos ayudarte por WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href={getBookingLink()} target="_blank" rel="noopener noreferrer">
                  Reservar ahora
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href={generateWhatsAppLink(whatsappMessages.booking)} target="_blank" rel="noopener noreferrer">
                  Pedir asesoría
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative z-10">
            <div className="rounded-[28px] border border-white/8 bg-black/40 p-6 shadow-xl backdrop-blur-md">
              <h4 className="mb-4 text-xl font-medium text-white">Al contactarnos</h4>
              <ul className="space-y-4 text-sm text-luxe-light-gray">
                <li>• Compártenos tu nombre.</li>
                <li>• Cuéntanos qué buscas. Tratamientos de tu interés o dudas.</li>
                <li>• Menciona tu disponibilidad. Horario y/o fecha preferente para verificar disponibilidad de agenda.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
