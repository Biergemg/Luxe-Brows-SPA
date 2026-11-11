import Image from "next/image";
import { ArrowUpRight, Diamond } from "lucide-react";
import { getBookingLink } from "@/lib/utils";

export function EditorialIntro() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="relative overflow-hidden bg-[#ede5da] py-20 text-[#241e1a] md:py-28 lg:py-32">
      <div className="luxe-container">
        <div data-reveal className="mb-10 grid gap-7 lg:mb-16 lg:grid-cols-[1.07fr_.93fr] lg:items-end lg:gap-16">
          <div>
            <p className="luxe-eyebrow mb-6 flex items-center gap-3 text-[#674b32]"><Diamond size={15} strokeWidth={1.2} aria-hidden="true"/> 01 / La experiencia Luxe</p>
            <h2 id="experiencia-title" className="luxe-serif max-w-[850px] text-[clamp(3.4rem,7vw,7.4rem)] leading-[1.02] tracking-[-.07em]">Belleza que se <em className="text-[#84613e]">vive.</em></h2>
          </div>
          <div>
            <p className="max-w-[550px] border-l border-[#98704c] pl-5 text-base leading-8 text-[#4e4135] lg:ml-auto lg:text-lg lg:leading-9">Tu mirada, tu piel y tu bienestar merecen atención a los detalles.</p>
            <p className="mt-5 max-w-[550px] text-sm leading-7 text-[#5b4d40] lg:ml-auto">Diseño de cejas y pestañas, faciales, tratamientos corporales, epilación y cuidado capilar. Descubre el menú completo y elige tu siguiente cita.</p>
          </div>
        </div>

        <div data-reveal className="grid min-w-0 grid-cols-2 items-stretch gap-3 sm:gap-5 lg:grid-cols-[1.12fr_.88fr] lg:gap-7">
          <figure className="group relative min-w-0 overflow-hidden bg-[#c3b5a3]">
            <div className="relative aspect-[.7/1] w-full sm:aspect-[.85/1] lg:aspect-auto lg:h-[clamp(440px,42vw,620px)]">
              <Image src="/images/gallery-3.webp" alt="Especialista realizando un diseño de cejas en Luxe Brows & Spa" fill loading="lazy" sizes="(max-width: 1024px) 48vw, 55vw" className="object-cover object-center transition-transform duration-[1100ms] group-hover:scale-[1.04]"/>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1c1510]/70 via-transparent to-transparent" aria-hidden="true"/>
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 text-[#fff8eb] sm:inset-x-7 sm:bottom-7">
                <figcaption className="luxe-serif text-[clamp(1.15rem,3vw,2.6rem)] leading-tight tracking-[-.04em]">Diseño de cejas</figcaption>
                <span className="luxe-serif text-xs italic text-[#e7c59b] sm:text-lg" aria-hidden="true">01</span>
              </div>
            </div>
          </figure>
          <figure className="group relative min-w-0 overflow-hidden bg-[#c6ae94]">
            <div className="relative aspect-[.7/1] w-full sm:aspect-[.85/1] lg:aspect-auto lg:h-[clamp(440px,42vw,620px)]">
              <Image src="/images/spa-ambient.webp" alt="Tratamiento profesional de epilación facial" fill loading="lazy" sizes="(max-width: 1024px) 48vw, 40vw" className="object-cover object-center transition-transform duration-[1100ms] group-hover:scale-[1.04]"/>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1c1510]/70 via-transparent to-transparent" aria-hidden="true"/>
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 text-[#fff8eb] sm:inset-x-7 sm:bottom-7">
                <figcaption className="luxe-serif text-[clamp(1.15rem,3vw,2.6rem)] leading-tight tracking-[-.04em]">Epilación facial</figcaption>
                <span className="luxe-serif text-xs italic text-[#e7c59b] sm:text-lg" aria-hidden="true">02</span>
              </div>
            </div>
          </figure>
        </div>
        <div data-reveal className="mt-7 flex flex-col gap-5 border-t border-[#8e7255]/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="luxe-eyebrow text-[#66503a]">Luxe Brows & Spa · By Carely Gonzalez</p>
          <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-link self-start text-[#29211b]">Reserva tu experiencia <ArrowUpRight size={16} aria-hidden="true"/></a>
        </div>
      </div>
    </section>
  );
}
