"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { src: '/images/carrusel/tinte-cejas.jpeg', alt: 'Tinte de cejas' },
  { src: '/images/carrusel/shaping-cejas.jpeg', alt: 'Shaping de cejas con mapping previo' },
  { src: '/images/carrusel/diseno-cejas.jpeg', alt: 'Diseño de cejas' },
  { src: '/images/carrusel/laminacion-cejas.jpeg', alt: 'Laminación de cejas' },
  { src: '/images/carrusel/laminacion-con-tinte.jpeg', alt: 'Laminación de cejas con tinte' },
  { src: '/images/carrusel/epilacion-cejas-cera-hilo.jpeg', alt: 'Epilación de cejas con cera o hilo' },
  { src: '/images/carrusel/lash-lift.jpeg', alt: 'Lash lift de pestañas' },
  { src: '/images/carrusel/faciales-tratamientos.jpeg', alt: 'Tratamientos faciales' },
  { src: '/images/carrusel/epilacion-corporal.jpeg', alt: 'Epilaciones corporales' },
  { src: '/images/carrusel/hair-care.jpeg', alt: 'Hair care' },
  { src: '/images/carrusel/body-sculpt-masaje.jpeg', alt: 'Body sculpt' },
];

const INTERVAL_MS = 4500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  return (
    <div className="relative w-full max-w-xl aspect-square overflow-hidden rounded-[28px] border border-nude-text/10 shadow-[0_20px_80px_rgba(58,44,34,0.22)] bg-nude-surface">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 768px) 90vw, 576px"
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <button
        type="button"
        onClick={goPrev}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-nude-bg/70 text-nude-text backdrop-blur-sm transition-colors hover:bg-nude-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-nude-accent"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Foto siguiente"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-nude-bg/70 text-nude-text backdrop-blur-sm transition-colors hover:bg-nude-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-nude-accent"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir a la foto ${i + 1}`}
            aria-current={i === index}
            className="p-1"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 bg-nude-bg' : 'w-1.5 bg-nude-bg/50'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
