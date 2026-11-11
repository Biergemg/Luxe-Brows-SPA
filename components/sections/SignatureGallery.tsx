import Image from "next/image";
import { ArrowUpRight, Diamond, MoveUpRight } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";

const moments = [
  { src: "/images/gallery-3.webp", alt: "Procedimiento de cejas realizado en cabina", label: "Diseño de cejas", number: "01", className: "col-span-2 lg:col-span-6" },
  { src: "/images/skin-tech.webp", alt: "Equipo de cuidado facial aplicado durante un tratamiento", label: "Facial", number: "02", className: "col-span-1 lg:col-span-3" },
  { src: "/images/capilar-luxe.webp", alt: "Resultado de un tratamiento capilar", label: "Cuidado capilar", number: "03", className: "col-span-1 lg:col-span-3" },
  { src: "/images/spa-ambient.webp", alt: "Tratamiento de epilación facial", label: "Epilación", number: "04", className: "col-span-1 lg:col-span-3" },
  { src: "/images/body-sculpt.webp", alt: "Terapia corporal", label: "Cuidado corporal", number: "05", className: "col-span-1 lg:col-span-3" },
  { src: "/images/mirada-luxe.webp", alt: "Detalle del diseño personalizado de cejas", label: "La mirada Luxe", number: "06", className: "col-span-2 lg:col-span-6" },
];

export function SignatureGallery() {
  return (
    <section id="galeria" className="overflow-hidden bg-[#e7ddd0] py-24 text-[#241e1a] md:py-36" aria-labelledby="galeria-title">
      <div className="luxe-container">
        <div data-reveal className="mb-12 grid gap-7 md:mb-16 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="luxe-eyebrow mb-6 flex items-center gap-3 text-[#694a30]"><Diamond size={14} strokeWidth={1.4}/> 03 / Nuestro universo</p>
            <h2 id="galeria-title" className="luxe-serif max-w-4xl text-[clamp(3.3rem,6vw,6.5rem)] leading-[1.05] tracking-[-.07em]">Detrás de cada <em>detalle.</em></h2>
          </div>
          <div className="max-w-md lg:ml-auto">
            <p className="mb-7 text-sm leading-8 text-[#5e5144]">Un recorrido visual por el cuidado de cejas, pestañas, piel y cuerpo. El carrusel principal reúne nuestros creativos originales.</p>
            <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="luxe-link text-[#493c32]">Ver más en Instagram <ArrowUpRight size={16}/></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-12">
          {moments.map((item, i) => (
            <figure key={item.src} data-reveal className={item.className + " luxe-editorial-panel group relative min-w-0 bg-[#d0c1ae]"}>
              <div className={i === 0 || i === 5 ? "relative aspect-[1.2/1] w-full sm:aspect-[1.55/1]" : "relative aspect-[.78/1] w-full sm:aspect-[.84/1]"}>
                <Image src={item.src} alt={item.alt} fill loading="lazy" sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 50vw" className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.055]"/>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17130f]/85 via-transparent to-transparent"/>
                <div className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center border border-white/60 bg-black/20 text-[10px] font-semibold tracking-widest text-white backdrop-blur-sm sm:left-6 sm:top-6">{item.number}</div>
                <figcaption className="absolute bottom-5 left-4 right-4 z-10 flex items-end justify-between gap-2 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <span className="luxe-serif text-[clamp(1.15rem,2.5vw,2.1rem)] leading-tight tracking-[-.04em]">{item.label}</span>
                  <MoveUpRight size={18} strokeWidth={1.2} className="shrink-0 text-[#dbb78b]" aria-hidden="true"/>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-[#241e1a]/20 pt-5">
          <p className="luxe-eyebrow text-[#70533c]">Luxe Brows & Spa · By Carely Gonzalez</p>
          <a href="#inicio" className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#70533c]">Volver al carrusel <ArrowUpRight size={16}/></a>
        </div>
      </div>
    </section>
  );
}
