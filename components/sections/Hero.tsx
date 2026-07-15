import React from 'react';
import { Button } from '../ui/Button';
import { HeroCarousel } from '../ui/HeroCarousel';
import { getBookingLink } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative min-h-[88svh] md:min-h-[92svh] flex items-center bg-nude-bg" aria-label="Introducción">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,112,78,0.12),transparent_28%),radial-gradient(circle_at_20%_30%,rgba(147,112,78,0.1),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(58,44,34,0.05),transparent_22%),linear-gradient(180deg,#ECE3D3_0%,#EFE7D9_38%,#ECE3D3_100%)]" />
        <div className="grain-overlay-nude" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-36 pb-18 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24">
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left lg:w-1/2">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-nude-text max-w-xl mb-6 leading-[1.1]">
            Donde la belleza se eleva <br className="hidden lg:block" />
            <span className="text-nude-accent italic">y la innovación comienza</span>
          </h1>

          <p className="max-w-lg text-base md:text-xl text-nude-muted font-light leading-relaxed mb-10">
            Centro de cosmiatría avanzada especializado en tratamientos premium de cejas y pestañas.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <Button variant="outline-nude" size="lg" className="w-full sm:w-[220px]" asChild>
              <a href="#servicios">Menú de servicios</a>
            </Button>
            <Button variant="outline-nude" size="lg" className="w-full sm:w-[220px]" asChild>
              <a href="#horarios">Horarios</a>
            </Button>
            <Button variant="outline-nude" size="lg" className="w-full sm:w-[220px]" asChild>
              <a href="#ubicacion">Ubicación</a>
            </Button>
          </div>

          <Button variant="primary-nude" size="lg" className="mt-4 w-full sm:w-[220px]" asChild>
            <a href={getBookingLink()} target="_blank" rel="noopener noreferrer">
              Reserva en Línea
            </a>
          </Button>
        </div>

        <div className="order-1 flex w-full justify-center lg:order-2 lg:w-1/2">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
