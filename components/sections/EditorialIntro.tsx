import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getBookingLink } from "@/lib/utils";

export function EditorialIntro() {
  return (
    <section id="experiencia" className="relative overflow-hidden bg-[#e9dfd2] py-24 text-[#241e1a] md:py-36">
      <div className="pointer-events-none absolute -right-25 top-0 select-none luxe-serif text-[clamp(14rem,30vw,34rem)] leading-none tracking-[-.13em] text-[#dbceb9]/55" aria-hidden="true">L</div>
      <div className="luxe-container relative z-10 grid gap-16 lg:grid-cols-[.93fr_1.07fr] lg:items-center lg:gap-28">
        <div data-reveal className="relative">
          <div className="luxe-image-frame relative aspect-[4/5] w-[82%] bg-[#cec0ad]">
            <Image src="/images/gallery-3.webp" alt="Profesional realizando un tratamiento de cejas en Luxe Brows & Spa" fill className="object-cover" sizes="(max-width:1024px) 80vw, 35vw" loading="lazy"/>
          </div>
          <div className="luxe-image-frame absolute -bottom-12 right-0 aspect-[3/4] w-[40%] border-[7px] border-[#e9dfd2] bg-[#c4aa8c] sm:border-[12px]">
            <Image src="/images/spa-ambient.webp" alt="Detalle de tratamiento de epilación profesional" fill className="object-cover" sizes="(max-width:1024px) 36vw, 16vw" loading="lazy"/>
          </div>
          <div className="absolute left-[8%] top-6 border border-white/70 bg-[#e9dfd2]/90 px-4 py-3 backdrop-blur-sm">
            <span className="luxe-eyebrow text-[#69543d]">The Luxe Edit</span>
          </div>
        </div>
        <div data-reveal className="pt-10 lg:pt-0">
          <p className="luxe-eyebrow mb-7 flex items-center gap-4 text-[#6b4e34]"><span className="inline-block h-px w-12 bg-[#987551]"/> La experiencia Luxe</p>
          <h2 className="luxe-serif text-[clamp(3.4rem,6.8vw,7.3rem)] leading-[1.02] tracking-[-.075em]">Belleza que se <em>vive.</em></h2>
          <div className="my-9 h-px w-full bg-[#241e1a]/20 sm:my-12"/>
          <div className="grid gap-9 sm:grid-cols-[.3fr_.7fr]">
            <span className="luxe-serif text-5xl italic text-[#765538]">01 /</span>
            <div>
              <p className="mb-5 text-lg leading-8 text-[#51473e]">Tu mirada, tu piel y tu bienestar merecen atención a los detalles.</p>
              <p className="mb-9 text-sm leading-8 text-[#625346]">Diseño de cejas y pestañas, faciales, tratamientos corporales, epilación y cuidado capilar. Descubre el menú completo y elige tu siguiente cita.</p>
              <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-link text-[#29211b]">Vive tu experiencia Luxe <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
