"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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

  return (
    <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-[28px] border border-nude-text/10 shadow-[0_20px_80px_rgba(58,44,34,0.22)] bg-nude-surface">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 768px) 90vw, 420px"
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {slides.map((slide, i) => (
          <span
            key={slide.src}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-5 bg-nude-bg' : 'w-1.5 bg-nude-bg/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
