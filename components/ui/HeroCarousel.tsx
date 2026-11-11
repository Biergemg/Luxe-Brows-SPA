"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const photographs = [
  { src: "/images/mirada-luxe.webp", alt: "Tratamiento especializado en diseño de cejas" },
  { src: "/images/gallery-3.webp", alt: "Aplicación de tratamiento de cejas en cabina" },
  { src: "/images/spa-ambient.webp", alt: "Tratamiento de epilación de bozo" },
  { src: "/images/capilar-luxe.webp", alt: "Resultado de tratamiento capilar" }
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const interval = window.setInterval(() => setIndex((current) => (current + 1) % photographs.length), 6500);
    return () => window.clearInterval(interval);
  }, [paused, reducedMotion]);

  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="absolute inset-0 left-[0%] lg:left-[31%]" data-parallax>
          {photographs.map((photo, i) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              priority={i === 0}
              sizes="(max-width:1024px) 100vw, 70vw"
              className={i === index ? "object-cover object-center opacity-100 transition-opacity duration-[1100ms]" : "object-cover object-center opacity-0 transition-opacity duration-[1100ms]"}
              aria-hidden={i !== index}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-31 right-6 z-[5] flex items-center gap-5 text-[#fbf0e1] sm:bottom-17 sm:right-12 lg:bottom-20 lg:right-[7vw]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
        <span className="bg-[#191512]/70 px-2 py-1 text-xs tracking-[.2em]"><strong className="font-medium">{String(index + 1).padStart(2, "0")}</strong><span className="px-2 text-white/50">/</span>{String(photographs.length).padStart(2, "0")}</span>
        <div className="flex gap-1">
          <button type="button" aria-label="Fotografía anterior" onClick={() => setIndex((current) => (current + photographs.length - 1) % photographs.length)} className="flex h-11 w-11 items-center justify-center border border-white/60 bg-[#191512]/65 backdrop-blur-sm transition-colors hover:bg-[#191512]"><ArrowLeft size={16}/></button>
          <button type="button" aria-label="Fotografía siguiente" onClick={() => setIndex((current) => (current + 1) % photographs.length)} className="flex h-11 w-11 items-center justify-center border border-white/60 bg-[#191512]/65 backdrop-blur-sm transition-colors hover:bg-[#191512]"><ArrowRight size={16}/></button>
        </div>
      </div>
    </>
  );
}
