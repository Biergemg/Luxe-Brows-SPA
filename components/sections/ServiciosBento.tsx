"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { whatsappMessages } from "@/lib/site";
import { generateWhatsAppLink, getBookingLink } from "@/lib/utils";

export function ServiciosBento() {
  const [active, setActive] = useState(0);
  const category = serviceCategories[active];
  const handleTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? serviceCategories.length-1 : (index + (event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1) + serviceCategories.length) % serviceCategories.length;
    setActive(next);
    document.getElementById("service-tab-" + next)?.focus();
  };

  return (
    <section id="servicios" className="luxe-paper scroll-mt-24 py-24 md:py-36" aria-labelledby="services-title">
      <div className="luxe-container">
        <div data-reveal className="mb-14 grid items-end gap-10 lg:mb-20 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="luxe-eyebrow mb-6 flex items-center gap-4 text-[#997959]"><span className="inline-block h-px w-12 bg-[#aa8967]"/> 01 / El menú Luxe</p>
            <h2 id="services-title" className="luxe-serif max-w-[850px] text-[clamp(3.4rem,7vw,7rem)] leading-[1.05] tracking-[-.07em]">El arte de <em className="text-[#9e7b56]">cuidarte.</em></h2>
          </div>
          <div>
            <p className="mb-6 max-w-md text-base leading-8 text-[#685e54]">Explora cada categoría y selecciona tu tratamiento ideal. Si así lo requieres, solicita asesoría por WhatsApp previo a tu reserva.</p>
            <div className="h-px w-full bg-[#241e1a]/15" />
            <p className="luxe-eyebrow mt-4 text-[#8b735b]">{serviceCategories.length} categorías · Menú de servicios y precios</p>
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-8 xl:grid-cols-[.37fr_.63fr] xl:gap-14">
          <div data-reveal className="min-w-0 xl:sticky xl:top-36 xl:self-start">
            <div role="tablist" aria-label="Categorías de servicios" aria-orientation="horizontal" className="luxe-mobile-scroll flex min-w-0 max-w-full gap-2 overflow-x-auto pb-3 xl:block xl:overflow-visible xl:pb-0">
              {serviceCategories.map((item, index) => (
                <button key={item.id} id={"service-tab-"+index} type="button" role="tab" aria-selected={active===index} aria-controls="service-panel" tabIndex={active===index?0:-1} onClick={() => setActive(index)} onKeyDown={(event) => handleTabKey(event,index)} className={active===index ? "group flex min-h-[60px] shrink-0 items-center justify-between gap-7 border border-[#29221b] bg-[#29221b] px-5 text-left text-[#f6eee2] transition-colors xl:w-full xl:border-x-0 xl:border-t-0 xl:py-6 xl:pr-4" : "group flex min-h-[60px] shrink-0 items-center justify-between gap-7 border border-[#241e1a]/15 bg-transparent px-5 text-left text-[#51483f] transition-colors hover:bg-[#eae1d5] xl:w-full xl:border-x-0 xl:border-t-0 xl:py-6 xl:pr-4"}>
                  <span className="flex items-center gap-5"><span className="text-[10px] tracking-widest opacity-60">{String(index+1).padStart(2,"0")}</span><span className="luxe-serif text-lg tracking-[-.03em] sm:text-xl">{item.title}</span></span>
                  <ArrowUpRight size={17} aria-hidden="true" className={active===index ? "text-[#d5b38a]" : "hidden opacity-50 xl:block"} />
                </button>
              ))}
            </div>
            <p className="mt-7 hidden max-w-[310px] text-sm leading-7 text-[#7d6c5d] xl:block">Cada servicio conserva su descripción y precio. Puedes consultar sus detalles antes de reservar.</p>
          </div>
          <div id="service-panel" role="tabpanel" aria-labelledby={"service-tab-"+active} tabIndex={0} key={category.id} className="min-w-0 border border-[#d8cbbb] bg-[#fbf8f3] shadow-[0_18px_55px_rgba(38,29,20,.07)]">
            <div className="relative h-[260px] overflow-hidden bg-[#d0c1ae] sm:h-[370px]">
              <Image src={category.imagePath} alt={category.title} fill className={category.imagePosition === "top" ? "object-cover object-top" : category.imagePosition === "bottom" ? "object-cover object-bottom" : "object-cover object-center"} sizes="(max-width:1280px) 100vw, 65vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1714]/85 via-[#1b1714]/20 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-9 sm:left-10 sm:right-10">
                <span className="luxe-eyebrow mb-3 block text-[#e6c7a3]">Colección {String(active+1).padStart(2,"0")}</span>
                <h3 className="luxe-serif text-[clamp(2.5rem,4vw,4.4rem)] leading-none tracking-[-.065em]">{category.title}</h3>
              </div>
            </div>
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <p className="mb-8 max-w-xl text-sm leading-7 text-[#665b51]">{category.description}</p>
              <div className="border-t border-[#241e1a]/20">
                {category.services.map((service, index) => (
                  <details key={service.id} className="group border-b border-[#241e1a]/14" open={undefined}>
                    <summary className="flex min-h-[76px] cursor-pointer list-none items-center justify-between gap-3 py-4 marker:hidden">
                      <span className="flex min-w-0 items-start gap-3 sm:gap-5">
                        <span className="mt-1.5 shrink-0 text-[10px] font-semibold tracking-wide text-[#745537]">{String(index+1).padStart(2,"0")}</span>
                        <span className="text-[14px] font-medium leading-6 text-[#26211d] sm:text-base">{service.name}{service.highlight ? <span className="ml-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#73522f]">{service.highlight}</span> : null}</span>
                      </span>
                      <span className="flex shrink-0 items-center gap-2 sm:gap-5">
                        <span className="text-sm font-semibold text-[#876844] sm:text-base">{service.price}</span>
                        {service.description || service.note ? <Plus size={17} className="luxe-caret text-[#8e7153]" /> : null}
                      </span>
                    </summary>
                    {service.description || service.note ? (
                      <div className="pb-7 pl-6 pr-2 sm:pl-10">
                        {service.description ? <p className="max-w-[660px] whitespace-pre-line text-sm leading-7 text-[#6d6257]">{service.description}</p> : null}
                        {service.note ? <p className="mt-3 whitespace-pre-line text-xs leading-6 text-[#947b61]">{service.note}</p> : null}
                      </div>
                    ) : null}
                  </details>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={generateWhatsAppLink(whatsappMessages.service(category.title))} target="_blank" rel="noopener noreferrer" className="luxe-cta luxe-cta-dark">Solicitar asesoría <ArrowUpRight size={16}/></a>
                <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-cta border border-[#241e1a]/30 bg-transparent text-[#241e1a] hover:bg-[#e8dece]">Reservar cita <ArrowUpRight size={16}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
