import React from 'react';
import { HeroCarousel } from '../ui/HeroCarousel';

export function Hero() {
  return (
    <section className="relative min-h-[70svh] md:min-h-[80svh] flex items-center bg-nude-bg" aria-label="Introducción">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,112,78,0.12),transparent_28%),radial-gradient(circle_at_20%_30%,rgba(147,112,78,0.1),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(58,44,34,0.05),transparent_22%),linear-gradient(180deg,#ECE3D3_0%,#EFE7D9_38%,#ECE3D3_100%)]" />
        <div className="grain-overlay-nude" />
      </div>

      <div className="container relative z-10 mx-auto flex justify-center px-6 pt-32 pb-16 md:px-12 md:pt-36 md:pb-20">
        <HeroCarousel />
      </div>
    </section>
  );
}
