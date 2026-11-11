import { ArrowDownRight, ArrowUpRight, Diamond, MoveUpRight, Sparkles } from "lucide-react";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { getBookingLink } from "@/lib/utils";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[#17130f] text-[#f7f0e7]" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 84% 45%, rgba(154,111,67,.14), transparent 44%),radial-gradient(circle at 12% 12%, rgba(142,108,68,.13),transparent 38%)" }} />
      <div className="pointer-events-none absolute left-[-14%] top-0 h-full w-[45%] border-r border-[#c7a67f]/10 [transform:skewX(-17deg)]" />
      <div className="luxe-container relative z-10 grid grid-cols-1 gap-5 pb-14 pt-[145px] sm:gap-10 sm:pt-[165px] lg:min-h-[835px] lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-10 lg:pb-16 lg:pt-[155px] xl:gap-18">
        <div className="contents lg:flex lg:flex-col lg:justify-center">
          <div className="order-1 relative max-w-[710px] lg:order-none">
            <div data-hero-animate className="mb-4 flex items-center gap-3 sm:mb-8">
              <Diamond size={14} strokeWidth={1.5} className="text-[#c8a57a]" aria-hidden="true" />
              <span className="luxe-eyebrow text-[#d8bf9e]">Cosmiatría avanzada · Ciudad Madero</span>
            </div>
            <h1 id="hero-title" className="luxe-serif text-[clamp(3.5rem,11vw,5.3rem)] leading-[.97] tracking-[-.07em] sm:text-[clamp(5rem,7vw,7.4rem)] lg:leading-[.98]">
              <span data-hero-animate className="block whitespace-nowrap">Donde la</span>
              <span data-hero-animate className="block whitespace-nowrap italic text-[#d7b58c]">belleza</span>
              <span data-hero-animate className="block whitespace-nowrap">se eleva<span className="text-[#d7b58c]">.</span></span>
            </h1>
            <div data-hero-animate className="mt-5 hidden items-center gap-3 text-[#bfa683] lg:flex">
              <span className="h-px w-14 bg-current" />
              <span className="luxe-eyebrow">By Carely Gonzalez</span>
              <Sparkles size={14} strokeWidth={1.3} aria-hidden="true"/>
            </div>
          </div>
          <div className="order-3 mt-2 max-w-[540px] lg:order-none lg:mt-10">
            <p data-hero-animate className="max-w-[440px] border-l border-[#c5a47d] pl-5 text-sm leading-7 text-[#e2d5c6] sm:text-base sm:leading-8">
              Cejas, pestañas, faciales, tratamientos corporales y capilares. Una experiencia pensada para ti, en Plaza LA FÉ.
            </p>
            <div data-hero-animate className="mt-7 flex flex-wrap items-center gap-5 sm:mt-10 sm:gap-8">
              <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-cta">
                Reservar mi cita <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="#servicios" className="luxe-link text-[#f6eee3]">
                Explorar servicios <ArrowDownRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div data-hero-animate className="mt-7 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[.15em] text-[#c9b391] lg:mt-12">
              <span className="inline-block h-[6px] w-[6px] rotate-45 bg-[#c9a77b]"/>
              <span>Contenido auténtico de Luxe Brows & Spa</span>
            </div>
          </div>
        </div>
        <div data-hero-animate className="order-2 relative min-w-0 pt-2 lg:order-none lg:pl-3 lg:pt-0 xl:pl-8">
          <div className="pointer-events-none absolute -left-10 -top-7 hidden h-18 w-18 rounded-full border border-[#b38f65]/40 lg:grid lg:place-content-center" aria-hidden="true"><Diamond size={26} strokeWidth={1} className="text-[#b38f65]"/></div>
          <HeroCarousel />
        </div>
      </div>
      <div className="relative z-10 border-t border-[#d6b18a]/20 bg-[#211b17]">
        <div className="luxe-container flex min-h-[70px] items-center justify-between gap-5 py-3 text-[10px] font-semibold uppercase tracking-[.16em] text-[#d2b994]">
          <div className="flex items-center gap-3"><Diamond size={14} strokeWidth={1.2}/><span>Diseño de cejas · Pestañas · Cosmiatría</span></div>
          <a href="#experiencia" className="hidden items-center gap-2 transition-colors hover:text-white sm:flex">La experiencia Luxe <MoveUpRight size={15}/></a>
        </div>
      </div>
    </section>
  );
}
