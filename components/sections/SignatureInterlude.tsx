import { Diamond, Sparkles } from "lucide-react";

const signature = "CEJAS  ·  PESTAÑAS  ·  FACIALES  ·  CORPORALES  ·  CAPILAR  ·  ";

export function SignatureInterlude() {
  return (
    <aside className="relative overflow-hidden border-y border-[#d9b68d]/25 bg-[#231c17] py-10 text-[#efe0ce] md:py-14" aria-label="Experiencias de Luxe Brows & Spa">
      <div className="luxe-container mb-8 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[.2em] text-[#dfc09c]">
        <span className="flex items-center gap-3"><Diamond size={14} strokeWidth={1.2}/> Luxe Brows & Spa</span>
        <span className="hidden items-center gap-2 sm:flex">Cuidado de principio a fin <Sparkles size={13}/></span>
        <span className="sm:hidden">By Carely Gonzalez</span>
      </div>
      <div className="luxe-marquee" aria-hidden="true">
        <div className="luxe-marquee-track luxe-serif text-[clamp(2.2rem,6.5vw,6.5rem)] italic leading-[1.1] tracking-[-.05em] text-[#dac2a2]">
          <span>{signature}</span><span>{signature}</span>
        </div>
      </div>
      <div className="luxe-container mt-8 flex items-center justify-between gap-4">
        <div className="h-px w-[24%] bg-[#b59a78]/40"/>
        <p className="luxe-eyebrow shrink-0 text-[#dec39e]">La experiencia continúa</p>
        <div className="h-px w-[24%] bg-[#b59a78]/40"/>
      </div>
    </aside>
  );
}
