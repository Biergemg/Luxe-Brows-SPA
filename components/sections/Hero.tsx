import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { getBookingLink } from "@/lib/utils";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[#181512] text-[#f7f0e7]" aria-labelledby="hero-title">
      <HeroCarousel />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(19,16,14,.98)_0%,rgba(19,16,14,.9)_30%,rgba(19,16,14,.38)_57%,rgba(19,16,14,.04)_100%)] max-lg:bg-[linear-gradient(0deg,rgba(19,16,14,.98)_0%,rgba(19,16,14,.86)_33%,rgba(19,16,14,.1)_83%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] opacity-30" style={{ background: "radial-gradient(ellipse at 0 80%, rgba(182,135,86,.19), transparent 55%)" }} />
      <div className="luxe-container relative z-[3] flex min-h-[850px] flex-col justify-end pb-18 pt-44 sm:min-h-[850px] lg:min-h-[min(980px,100svh)] lg:justify-center lg:pb-24 lg:pt-44">
        <div className="max-w-[790px]">
          <div data-hero-animate className="mb-9 flex items-center gap-4">
            <span className="h-px w-12 bg-[#c5a984]" />
            <span className="luxe-eyebrow text-[#dac6a8]">Cosmiatría avanzada · Ciudad Madero</span>
          </div>
          <h1 id="hero-title" className="luxe-serif text-[clamp(4rem,9vw,9.5rem)] leading-[.94] tracking-[-.07em]">
            <span data-hero-animate className="block">Donde la</span>
            <span data-hero-animate className="block italic text-[#d0af87]">belleza</span>
            <span data-hero-animate className="block">se eleva<span className="text-[#d0af87]">.</span></span>
          </h1>
          <div data-hero-animate className="mt-10 flex max-w-[500px] flex-col gap-8 sm:flex-row sm:items-end lg:mt-12">
            <p className="max-w-[370px] border-l border-[#b99b73] pl-5 text-sm leading-7 text-[#e6dace]/85">
              Cejas, pestañas, faciales, tratamientos corporales y capilares. Una experiencia pensada para ti, en Plaza LA FÉ.
            </p>
          </div>
          <div data-hero-animate className="mt-10 flex flex-wrap items-center gap-5 sm:gap-8">
            <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-cta">Reservar mi cita <ArrowUpRight size={17} aria-hidden="true" /></a>
            <a href="#servicios" className="luxe-link text-[#f6eee3]">Explorar servicios <ArrowDownRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="mt-20 flex items-center justify-between gap-6 border-t border-white/20 pt-5 text-[10px] tracking-[.21em] uppercase text-[#f2e6d7]/70 lg:absolute lg:bottom-10 lg:left-0 lg:right-0 lg:mt-0">
          <span>By Carely Gonzalez</span>
          <span className="hidden sm:inline">Lunes a sábado · 9:00 a 18:00</span>
          <a href="#experiencia" className="flex items-center gap-2 text-[#e4cbaa]">Descubre Luxe <ArrowDownRight size={15} /></a>
        </div>
      </div>
      <div className="pointer-events-none absolute right-7 top-1/2 z-[3] hidden -translate-y-1/2 [writing-mode:vertical-rl] text-[10px] tracking-[.36em] text-white/50 uppercase xl:block">Luxe Brows & Spa / Beauty Studio</div>
    </section>
  );
}
