import React from 'react';
import { Button } from '../ui/Button';
import { getBookingLink } from '@/lib/utils';
import { MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[88svh] md:min-h-[92svh] flex items-center justify-center overflow-hidden bg-luxe-black" aria-label="Introducción">
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

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-36 pb-18 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-luxe-gray/30 bg-luxe-black/60 backdrop-blur-md px-4 py-1.5 mb-8 md:mb-12 shadow-[0_0_15px_rgba(89,89,89,0.15)]">
          <MapPin className="h-3.5 w-3.5 text-luxe-gray" />
          <span className="text-xs font-medium tracking-widest text-luxe-white uppercase">Plaza La Fe</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white max-w-5xl mb-6 md:mb-8 text-border-glow leading-[1.1]">
          Donde la belleza se eleva <br className="hidden md:block" />
          <span className="text-luxe-gray italic pr-4">y la innovación comienza</span>
        </h1>

        <p className="max-w-3xl text-base md:text-xl text-luxe-light-gray font-light leading-relaxed mb-10 md:mb-12">
          Centro de cosmiatría avanzada especializado en tratamientos premium de cejas y pestañas.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4 w-full sm:w-auto">
          <Button variant="outline" size="lg" className="w-full sm:w-[240px] border-white/20 text-white hover:border-white hover:bg-white/5" asChild>
            <a href="#servicios">
              Menú de servicios
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-[240px] border-white/20 text-white hover:border-white hover:bg-white/5" asChild>
            <a href="#horarios">
              Horarios
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-[240px] border-white/20 text-white hover:border-white hover:bg-white/5" asChild>
            <a href="#ubicacion">
              Ubicación
            </a>
          </Button>
        </div>

        <a
          href={getBookingLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 text-sm tracking-[0.24em] uppercase text-luxe-light-gray transition-colors hover:text-white"
        >
          Reserva en línea 24/7
        </a>
        <div className="mt-12 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent md:mt-14" />
      </div>
    </section>
  );
}
