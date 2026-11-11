"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Diamond, Expand, X } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";

const moments = [
  { src: "/images/gallery-3.webp", alt: "Diseño de cejas realizado en cabina", label: "Diseño de cejas", number: "01", className: "col-span-2 lg:col-span-6 lg:row-span-2", format: "featured" },
  { src: "/images/skin-tech.webp", alt: "Equipo de cuidado facial durante un tratamiento", label: "Facial", number: "02", className: "col-span-1 lg:col-span-3", format: "portrait" },
  { src: "/images/capilar-luxe.webp", alt: "Resultado de tratamiento capilar", label: "Cuidado capilar", number: "03", className: "col-span-1 lg:col-span-3", format: "portrait" },
  { src: "/images/spa-ambient.webp", alt: "Tratamiento de epilación facial", label: "Epilación", number: "04", className: "col-span-1 lg:col-span-3", format: "portrait" },
  { src: "/images/body-sculpt.webp", alt: "Tratamiento corporal", label: "Cuidado corporal", number: "05", className: "col-span-1 lg:col-span-3", format: "portrait" },
  { src: "/images/mirada-luxe.webp", alt: "Detalle de un diseño de cejas", label: "La mirada Luxe", number: "06", className: "col-span-2 lg:col-span-12", format: "wide" }
] as const;

export function SignatureGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected !== null && !dialog.open) dialog.showModal();
    if (selected === null && dialog.open) dialog.close();
  }, [selected]);

  const change = (delta: number) => setSelected((index) => index === null ? null : (index + delta + moments.length) % moments.length);

  return (
    <section id="galeria" className="relative overflow-hidden bg-[#e7ddd0] py-22 text-[#241e1a] md:py-34" aria-labelledby="galeria-title">
      <div className="luxe-container">
        <div data-reveal className="mb-11 grid gap-7 md:mb-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="luxe-eyebrow mb-6 flex items-center gap-3 text-[#694a30]"><Diamond size={14} strokeWidth={1.4}/> 03 / Nuestro universo</p>
            <h2 id="galeria-title" className="luxe-serif max-w-4xl text-[clamp(3.35rem,6vw,6.5rem)] leading-[1.04] tracking-[-.07em]">Detrás de cada <em>detalle.</em></h2>
          </div>
          <div className="max-w-md lg:ml-auto">
            <p className="mb-7 border-l border-[#997755] pl-5 text-sm leading-8 text-[#504538]">Un recorrido visual por el cuidado de cejas, pestañas, piel y cuerpo. Descubre cada fotografía de nuestra experiencia.</p>
            <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="luxe-link text-[#493c32]">Más en Instagram <ArrowUpRight size={16}/></a>
          </div>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-5">
          {moments.slice(0, 5).map((item, i) => (
            <figure key={item.src} data-reveal className={item.className + " luxe-editorial-panel group relative min-w-0 bg-[#c9b9a5]"}>
              <button type="button" onClick={() => setSelected(i)} className="group block h-full w-full cursor-zoom-in text-left"><span className="sr-only">Ampliar fotografía </span>
                <div className={"relative w-full overflow-hidden " + (item.format === "featured" ? "aspect-[.92/1] sm:aspect-[1.3/1] lg:aspect-auto lg:h-full lg:min-h-[550px]" : "aspect-[.76/1] sm:aspect-[.83/1] lg:aspect-[.91/1]")}>
                  <Image src={item.src} alt="" fill loading="lazy" sizes={i === 0 ? "(max-width:1024px) 94vw, 55vw" : "(max-width:640px) 45vw, 27vw"} className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"/>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17130f]/85 via-[#17130f]/5 to-transparent"/>
                  <div aria-hidden="true" className="absolute left-3 top-3 z-10 flex h-9 w-9 items-center justify-center border border-white/60 bg-black/25 text-[10px] tracking-widest text-white sm:left-6 sm:top-6">{item.number}</div>
                  <span className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center border border-white/40 bg-[#1b1612]/30 text-white backdrop-blur-sm sm:right-6 sm:top-6" aria-hidden="true"><Expand size={15} strokeWidth={1.5}/></span>
                  <span className="absolute bottom-4 left-4 right-4 z-10 luxe-serif text-[clamp(1.2rem,2.5vw,2.5rem)] leading-[1.08] tracking-[-.04em] text-[#fff8ed] sm:bottom-7 sm:left-7 sm:right-7">{item.label}</span>
                </div>
              </button>
              <figcaption className="sr-only">{item.alt}</figcaption>
            </figure>
          ))}

          <div data-reveal className="col-span-2 flex min-h-[175px] flex-col items-center justify-center gap-4 border-y border-[#9b7755]/40 px-4 py-9 text-center lg:col-span-12 lg:min-h-[220px] lg:gap-6">
            <Diamond size={20} strokeWidth={1} className="text-[#856440]" aria-hidden="true"/>
            <p className="luxe-serif text-[clamp(2.2rem,5vw,5rem)] italic leading-tight tracking-[-.06em] text-[#493629]">El lujo está en el detalle.</p>
            <p className="luxe-eyebrow text-[#6e533c]">The Luxe Edit · By Carely Gonzalez</p>
          </div>

          <figure data-reveal className="luxe-editorial-panel group relative col-span-2 min-w-0 bg-[#c9b9a5] lg:col-span-12">
            <button type="button" onClick={() => setSelected(5)} className="block w-full cursor-zoom-in text-left"><span className="sr-only">Ampliar fotografía </span>
              <div className="relative aspect-[1.12/1] w-full overflow-hidden sm:aspect-[1.8/1] lg:aspect-[3.3/1]">
                <Image src={moments[5].src} alt="" fill loading="lazy" sizes="(max-width:1024px) 94vw, 90vw" className="object-cover object-center transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"/>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17130f]/80 via-transparent to-transparent"/>
                <span aria-hidden="true" className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center border border-white/70 bg-black/25 text-xs tracking-widest text-white">06</span>
                <span className="absolute bottom-6 left-6 right-6 luxe-serif text-[clamp(2rem,5vw,5.5rem)] leading-none tracking-[-.05em] text-white">La mirada Luxe <span className="italic text-[#dec29d]">.</span></span>
                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/60 bg-[#1b1612]/35 text-white"><Expand size={18}/></span>
              </div>
            </button>
            <figcaption className="sr-only">{moments[5].alt}</figcaption>
          </figure>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-[#241e1a]/20 pt-5">
          <p className="luxe-eyebrow text-[#70533c]">Luxe Brows & Spa · By Carely Gonzalez</p>
          <a href="#inicio" className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#70533c]">Volver al carrusel original <ArrowUpRight size={16}/></a>
        </div>
      </div>

      <dialog ref={dialogRef} onClose={() => setSelected(null)} onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); change(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); change(1); }
      }} aria-label="Galería fotográfica de Luxe Brows & Spa" className="luxe-lightbox fixed inset-0 m-auto max-h-[100dvh] w-[100vw] max-w-none border-0 bg-[#15110e] p-0 text-white backdrop:bg-black/92">
        {selected !== null && (
          <div className="relative flex h-[100dvh] w-full flex-col">
            <div className="flex min-h-[70px] items-center justify-between gap-4 border-b border-white/15 px-5 sm:px-9">
              <div><p className="luxe-eyebrow text-[#d4b38a]">The Luxe Edit</p><p className="luxe-serif mt-1 text-base sm:text-xl">{moments[selected].label}</p></div>
              <button type="button" onClick={() => setSelected(null)} aria-label="Cerrar galería" className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/30 transition-colors hover:bg-white/15"><X size={20}/></button>
            </div>
            <div className="relative min-h-0 flex-1 overflow-hidden bg-[#15110e]" onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => {
              if (touchStart.current === null) return;
              const delta = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
              if (Math.abs(delta) > 45) change(delta < 0 ? 1 : -1);
              touchStart.current = null;
            }}>
              <Image key={moments[selected].src} src={moments[selected].src} alt={moments[selected].alt} fill sizes="100vw" className="object-contain" priority/>
            </div>
            <div className="flex min-h-[76px] items-center justify-between gap-4 border-t border-white/15 px-5 sm:px-9">
              <span className="luxe-serif text-xl italic text-[#d8b995]">{String(selected + 1).padStart(2, "0")} <span className="text-white/50">/ {String(moments.length).padStart(2, "0")}</span></span>
              <div className="flex gap-3">
                <button type="button" onClick={() => change(-1)} aria-label="Imagen anterior" className="luxe-carousel-control"><ArrowLeft size={20}/></button>
                <button type="button" onClick={() => change(1)} aria-label="Imagen siguiente" className="luxe-carousel-control"><ArrowRight size={20}/></button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
