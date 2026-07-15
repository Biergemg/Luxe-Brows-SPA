"use client";

import React, { useEffect, useRef, useState } from 'react';
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
const MAX_TILT_DEG = 9;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });
  const [interactive, setInteractive] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setInteractive(finePointer && !reducedMotion);
  }, []);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: (0.5 - py) * MAX_TILT_DEG,
      ry: (px - 0.5) * MAX_TILT_DEG,
      mx: px * 100,
      my: py * 100,
    });
  };

  const handlePointerLeave = () => {
    setTilt({ rx: 0, ry: 0, mx: 50, my: 50 });
  };

  return (
    <div
      className="relative w-full max-w-xl"
      style={{ perspective: '1400px' }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Ambient floating glow beneath the card, for depth */}
      <div
        className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(147,112,78,0.35),transparent)] blur-2xl transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${tilt.ry * -1.5}px, ${12 + tilt.rx * -1.5}px, 0)`,
        }}
      />

      <div
        ref={frameRef}
        className="group relative aspect-square overflow-hidden rounded-[28px] border border-nude-text/10 bg-nude-surface shadow-[0_30px_90px_-20px_rgba(58,44,34,0.45)] transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${interactive && (tilt.rx || tilt.ry) ? 1.015 : 1})`,
          transformStyle: 'preserve-3d',
        }}
      >
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

        {/* Glare that tracks the pointer, for a glossy premium finish */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          style={{
            background: `radial-gradient(480px circle at ${tilt.mx}% ${tilt.my}%, rgba(255,255,255,0.22), transparent 55%)`,
          }}
        />
        {/* Subtle permanent top sheen for a polished, glassy edge */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10" />
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />

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
    </div>
  );
}
