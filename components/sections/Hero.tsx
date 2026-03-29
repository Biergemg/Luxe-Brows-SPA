import React from 'react';
import { Button } from '../ui/Button';
import { generateWhatsAppLink } from '@/lib/utils';
import { MapPin } from 'lucide-react';
import { landingVisibility } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-luxe-black" aria-label="Introducción">
      <div className="absolute inset-0 w-full h-full z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 mix-blend-luminosity scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: 'url(/images/hero-bg.webp)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxe-black/40 via-luxe-black/60 to-luxe-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(164,119,100,0.13),transparent_24%)]" />
        <div className="grain-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-36 pb-28 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-luxe-gray/30 bg-luxe-black/60 backdrop-blur-md px-4 py-1.5 mb-8 md:mb-12 shadow-[0_0_15px_rgba(89,89,89,0.15)]">
          <MapPin className="h-3.5 w-3.5 text-luxe-gray" />
          <span className="text-xs font-medium tracking-widest text-luxe-white uppercase">Plaza La Fe</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white max-w-5xl mb-6 md:mb-8 text-border-glow leading-[1.1]">
          Un espacio para <br className="hidden md:block" />
          <span className="text-luxe-gray italic pr-4">cuidarte y verte bien</span>
        </h1>

        <p className="max-w-3xl text-base md:text-xl text-luxe-light-gray font-light leading-relaxed mb-10 md:mb-12">
          Cejas, pestañas y faciales en un espacio pensado para que tu cita se sienta tranquila, cuidada y acorde a lo que te gusta.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-[280px]" asChild>
            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Agendar por WhatsApp
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-[280px] border-white/20 text-white hover:border-white hover:bg-white/5" asChild>
            <a href="#servicios">
              Ver servicios
            </a>
          </Button>
        </div>

        {landingVisibility.heroHighlights ? (
          <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              "Atención personalizada",
              "Ambiente limpio y cuidado",
              "Servicios para tu rutina y ocasiones especiales"
            ].map((item) => (
              <div key={item} className="luxury-panel rounded-full px-5 py-3 text-sm text-luxe-white/90">
                {item}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {landingVisibility.heroScrollCue ? (
        <div className="pointer-events-none absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] uppercase tracking-[0.3em] text-luxe-light-gray font-medium">Ver más</span>
          <div className="w-px h-10 md:h-12 bg-gradient-to-b from-luxe-gray to-transparent" />
        </div>
      ) : null}
    </section>
  );
}
