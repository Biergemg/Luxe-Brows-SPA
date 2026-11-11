import Image from "next/image";
import { ArrowUpRight, Diamond, Sparkles } from "lucide-react";
import { getBookingLink } from "@/lib/utils";

export function EditorialIntro() {
  return (
    <section id="experiencia" className="relative isolate overflow-hidden bg-[#ede5da] py-22 text-[#241e1a] md:py-32 xl:py-40" aria-labelledby="experiencia-title">
      <div className="pointer-events-none absolute -right-[6vw] top-0 select-none luxe-serif text-[clamp(16rem,41vw,45rem)] leading-[.9] tracking-[-.16em] text-[#d7c8b6]/40" aria-hidden="true">L</div>
      <div className="luxe-container relative z-10 grid min-w-0 gap-13 lg:grid-cols-[.94fr_1.06fr] lg:items-center lg:gap-18 xl:gap-28">
        <div data-reveal className="order-1 lg:order-2">
          <div className="mb-7 flex items-center gap-3 text-[#674b32]">
            <Diamond size={16} strokeWidth={1.3} aria-hidden="true"/>
            <span className="luxe-eyebrow">01 / La experiencia Luxe</span>
          </div>
          <h2 id="experiencia-title" className="luxe-serif max-w-3xl text-[clamp(3.5rem,7.3vw,8rem)] leading-[.99] tracking-[-.072em]">
            Belleza que<br/>se <em className="text-[#84613e]">vive.</em>
          </h2>
          <p className="mt-7 max-w-xl border-l border-[#98704c] pl-5 text-[17px] leading-8 text-[#4e4135] lg:mt-11 lg:text-xl lg:leading-9">Tu mirada, tu piel y tu bienestar merecen atención a los detalles.</p>
          <div className="my-7 luxe-gold-line lg:my-11" aria-hidden="true"/>
          <div className="grid gap-5 sm:grid-cols-[90px_1fr] sm:gap-9">
            <span className="luxe-serif text-[54px] italic leading-none text-[#795838]" aria-hidden="true">01<span className="text-[#b3916d]">/</span></span>
            <div>
              <p className="max-w-xl text-sm leading-8 text-[#5b4d40]">
                Diseño de cejas y pestañas, faciales, tratamientos corporales, epilación y cuidado capilar. Descubre el menú completo y elige tu siguiente cita.
              </p>
              <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-link mt-8 text-[#29211b]">Vive tu experiencia Luxe <ArrowUpRight size={16} aria-hidden="true"/></a>
            </div>
          </div>
        </div>
        <div data-reveal className="order-2 min-w-0 lg:order-1">
          <div className="relative pb-[13%] pl-[4%] pr-[15%]">
            <div className="pointer-events-none absolute bottom-[7%] left-0 top-[7%] w-[1px] bg-[#a78660]/80" aria-hidden="true"/>
            <div className="luxe-image-frame luxe-editorial-panel relative aspect-[4/5] w-full border-[6px] border-[#e9e0d3] bg-[#d0bca6] shadow-[0_24px_65px_rgba(52,37,23,.16)] sm:border-[10px]">
              <Image src="/images/gallery-3.webp" alt="Profesional realizando diseño de cejas en Luxe Brows & Spa" fill className="object-cover" loading="lazy" sizes="(max-width:1024px) 82vw, 38vw"/>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#211912]/50 via-transparent to-transparent" aria-hidden="true"/>
              <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#fff6ea] sm:bottom-8 sm:left-8"><Sparkles size={15} aria-hidden="true"/> The Luxe Edit</div>
            </div>
            <div className="luxe-image-frame luxe-editorial-panel absolute bottom-0 right-0 aspect-[.82/1] w-[41%] border-[7px] border-[#ede5da] bg-[#c5aa8d] shadow-[0_20px_55px_rgba(42,28,17,.18)] sm:border-[12px]">
              <Image src="/images/spa-ambient.webp" alt="Epilación facial profesional" fill className="object-cover" loading="lazy" sizes="(max-width:1024px) 34vw, 19vw"/>
            </div>
            <div className="absolute -top-5 right-[4%] flex h-17 w-17 items-center justify-center rounded-full border border-[#937250]/55 bg-[#ede5da] text-[#876541] shadow-md sm:h-22 sm:w-22" aria-hidden="true">
              <Diamond size={28} strokeWidth={.9}/>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#8e7255]/25 pt-4">
            <span className="luxe-eyebrow text-[#664b34]">Luxe Brows & Spa</span>
            <span className="luxe-eyebrow text-[#664b34]">By Carely Gonzalez</span>
          </div>
        </div>
      </div>
    </section>
  );
}
