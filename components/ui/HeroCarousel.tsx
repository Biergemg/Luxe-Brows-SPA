"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

export const originalLuxeSlides = [
  { src: "/images/carrusel/tinte-cejas.jpeg", alt: "Publicación original de Luxe Brows sobre tinte de cejas", label: "Tinte de cejas" },
  { src: "/images/carrusel/shaping-cejas.jpeg", alt: "Publicación original de Luxe Brows sobre diseño shaping de cejas", label: "Shaping de cejas" },
  { src: "/images/carrusel/diseno-cejas.jpeg", alt: "Publicación original de Luxe Brows sobre diseño de cejas", label: "Diseño de cejas" },
  { src: "/images/carrusel/laminacion-cejas.jpeg", alt: "Publicación original de Luxe Brows sobre laminación de cejas", label: "Laminación de cejas" },
  { src: "/images/carrusel/laminacion-con-tinte.jpeg", alt: "Publicación original de Luxe Brows sobre laminación de cejas con tinte", label: "Laminación con tinte" },
  { src: "/images/carrusel/epilacion-cejas-cera-hilo.jpeg", alt: "Publicación original de Luxe Brows sobre epilación de cejas", label: "Epilación con cera o hilo" },
  { src: "/images/carrusel/lash-lift.jpeg", alt: "Publicación original de Luxe Brows sobre lash lift", label: "Lash lift" },
  { src: "/images/carrusel/faciales-tratamientos.jpeg", alt: "Publicación original de Luxe Brows sobre tratamientos faciales", label: "Faciales" },
  { src: "/images/carrusel/epilacion-corporal.jpeg", alt: "Publicación original de Luxe Brows sobre epilación corporal", label: "Epilación corporal" },
  { src: "/images/carrusel/hair-care.jpeg", alt: "Publicación original de Luxe Brows sobre cuidado capilar", label: "Hair care" },
  { src: "/images/carrusel/body-sculpt-masaje.jpeg", alt: "Publicación original de Luxe Brows sobre body sculpt", label: "Body sculpt" },
] as const;

const INTERVAL = 6500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const active = !userPaused && !hovered && inView && tabVisible && !reducedMotion;
  const goTo = useCallback((nextIndex: number) => {
    setIndex((nextIndex + originalLuxeSlides.length) % originalLuxeSlides.length);
  }, []);
  const next = useCallback(() => setIndex((current) => (current + 1) % originalLuxeSlides.length), []);
  const previous = useCallback(() => setIndex((current) => (current - 1 + originalLuxeSlides.length) % originalLuxeSlides.length), []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMedia = () => setReducedMotion(media.matches);
    const updateVisibility = () => setTabVisible(!document.hidden);
    updateMedia();
    updateVisibility();
    media.addEventListener("change", updateMedia);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      media.removeEventListener("change", updateMedia);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!carouselRef.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const timer = window.setInterval(next, INTERVAL);
    return () => window.clearInterval(timer);
  }, [active, next]);

  const slide = originalLuxeSlides[index];

  return (
    <div
      ref={carouselRef}
      role="region"
      aria-label="Servicios destacados de Luxe Brows & Spa"
      aria-roledescription="carrusel"
      className="luxe-original-carousel relative mx-auto w-full max-w-[650px]"
      data-cinematic-media
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false); }}
    >
      <div className="pointer-events-none absolute -right-3 -top-3 bottom-14 left-3 border border-[#b99a72]/45 sm:-right-5 sm:-top-5 sm:left-5" aria-hidden="true" />
      <div className="relative z-[1] border border-[#ae8a63]/50 bg-[#221c18] p-2 shadow-[0_24px_90px_rgba(0,0,0,.4)] sm:p-3">
        <div
          className="relative aspect-square touch-pan-y overflow-hidden bg-[#ded7c9]"
          onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const delta = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
            if (Math.abs(delta) >= 45) {
              if (delta < 0) next();
              else previous();
            }
            touchStartX.current = null;
          }}
        >
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 1024px) calc(100vw - 64px), (max-width: 1440px) 44vw, 650px"
            priority={index === 0}
            className="luxe-carousel-slide object-cover"
            data-luxe-slide={index}
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" aria-hidden="true" />

        </div>
        <div className="flex min-h-[75px] items-center justify-between gap-3 px-2 py-3 sm:min-h-[91px] sm:px-3">
          <div className="min-w-0">
            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[.2em] text-[#bd9c74]">Servicios · {String(index + 1).padStart(2, "0")} / {originalLuxeSlides.length}</p>
            <p className="luxe-serif truncate text-[18px] leading-tight text-[#f8eee1] sm:text-[24px]" aria-live={active ? "off" : "polite"}>{slide.label}</p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <button type="button" onClick={previous} aria-label="Fotografía anterior" className="luxe-carousel-control"><ArrowLeft size={18} /></button>
            <button type="button" onClick={() => setUserPaused((value) => !value)} aria-label={reducedMotion ? "Reproducción automática desactivada por preferencia de movimiento reducido" : userPaused ? "Reanudar reproducción automática" : "Pausar reproducción automática"} aria-pressed={userPaused} disabled={reducedMotion} className="luxe-carousel-control">
              {userPaused || reducedMotion ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <button type="button" onClick={next} aria-label="Fotografía siguiente" className="luxe-carousel-control"><ArrowRight size={18} /></button>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="hidden shrink-0 text-[9px] font-semibold uppercase tracking-[.18em] text-[#c8ad8b] sm:inline">Explora cada tratamiento</span>
        <div className="flex min-w-0 flex-1 items-center gap-[5px]" role="group" aria-label="Elegir fotografía">
          {originalLuxeSlides.map((item, i) => (
            <button type="button" key={item.src} onClick={() => goTo(i)} aria-label={"Ver " + item.label} aria-current={index === i ? "true" : undefined} className="group flex h-7 min-w-0 flex-1 items-center justify-center" title={item.label}>
              <span className={index === i ? "relative block h-[3px] w-full overflow-hidden bg-[#7d674f]" : "block h-[3px] w-full bg-white/30 transition-colors group-hover:bg-[#d8b48a]"}>
                {index === i ? <span key={index + "-" + String(active)} className="luxe-carousel-progress absolute inset-y-0 left-0 bg-[#e0bd8f]" style={{ animationDuration: INTERVAL + "ms", animationPlayState: active ? "running" : "paused" }} /> : null}
              </span>
            </button>
          ))}
        </div>
        <span className="luxe-serif shrink-0 text-xl italic text-[#dec19a] sm:text-2xl">{String(index + 1).padStart(2, "0")}<span className="text-[#dec19a]/45"> / {originalLuxeSlides.length}</span></span>
      </div>
    </div>
  );
}
