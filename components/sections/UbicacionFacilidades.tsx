import { businessInfo } from "@/data/businessInfo";
import { getBookingLink, generateWhatsAppLink } from "@/lib/utils";
import { whatsappMessages } from "@/lib/site";
import { getGoogleMapsEmbedUrl, getGoogleMapsUrl } from "@/lib/maps";
import { ArrowUpRight, Clock3, MapPin, CarFront, CreditCard, Diamond, MessageCircle } from "lucide-react";

export function UbicacionFacilidades() {
  return (
    <section id="ubicacion" className="relative isolate overflow-hidden scroll-mt-24 bg-[#e8ded0] py-22 text-[#251f1b] md:py-34" aria-labelledby="ubicacion-title">
      <div className="pointer-events-none absolute -right-14 top-3 luxe-serif text-[clamp(14rem,26vw,34rem)] italic leading-none text-[#d5c5af]/35" aria-hidden="true">L</div>
      <div className="luxe-container relative z-10">
        <div data-reveal className="mb-11 grid gap-8 lg:mb-16 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
          <div>
            <p className="luxe-eyebrow mb-6 flex items-center gap-3 text-[#6f5137]"><Diamond size={15} strokeWidth={1.3} aria-hidden="true"/> 04 / Visítanos</p>
            <h2 id="ubicacion-title" className="luxe-serif max-w-4xl text-[clamp(3.4rem,6.5vw,7rem)] leading-[1.04] tracking-[-.071em]">Tu espacio,<br/><em className="text-[#806041]">tu momento.</em></h2>
          </div>
          <p className="max-w-md border-l border-[#947352] pl-5 text-sm leading-8 text-[#514537] lg:ml-auto">Encuéntranos en Plaza LA FÉ, Local 1, Ciudad Madero. Tu experiencia comienza desde que llegas.</p>
        </div>

        <div className="grid min-w-0 gap-5 lg:grid-cols-[1.05fr_.95fr] lg:gap-6">
          <div data-reveal className="relative min-w-0 overflow-hidden border border-[#9b8060]/30 bg-[#d0c4b2] shadow-[0_20px_45px_rgba(37,27,17,.12)]">
            <div className="flex items-center justify-between gap-4 bg-[#211b17] px-5 py-4 text-[#f5e8d7] sm:px-7">
              <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.15em]"><MapPin size={17} className="text-[#d7b081]" aria-hidden="true"/> Luxe Brows & Spa</span>
              <span className="luxe-eyebrow hidden text-[#d3b38e] sm:block">Ciudad Madero</span>
            </div>
            <div className="relative h-[320px] min-w-0 sm:h-[430px] lg:h-[540px]">
              <iframe title="Mapa de Luxe Brows & Spa" src={getGoogleMapsEmbedUrl()} className="absolute inset-0 h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </div>
            <a href={getGoogleMapsUrl()} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-between gap-4 border-t border-[#cbb99e] bg-[#fcf8f0] px-5 text-[11px] font-semibold uppercase tracking-[.15em] text-[#372a20] transition-colors hover:bg-[#e9dcc9] sm:px-7">Abrir ubicación en Google Maps <ArrowUpRight size={19} aria-hidden="true"/></a>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-5 lg:grid-rows-[auto_auto_auto]">
            <article data-reveal className="col-span-2 border border-[#cbbb9f] bg-[#faf7f1] p-6 shadow-[0_15px_35px_rgba(33,24,17,.055)] sm:p-8">
              <div className="mb-5 flex items-center justify-between gap-4"><span className="luxe-eyebrow text-[#765639]">01 / Dirección</span><MapPin size={21} strokeWidth={1.4} className="text-[#8a6744]" aria-hidden="true"/></div>
              <address className="luxe-serif max-w-lg text-[clamp(1.3rem,2.2vw,2.15rem)] leading-[1.4] not-italic tracking-[-.035em] text-[#31251e]">{businessInfo.address.fullAddress}</address>
              <a href={getGoogleMapsUrl()} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.13em] text-[#6d5136] underline underline-offset-6">Cómo llegar <ArrowUpRight size={16}/></a>
            </article>
            <article id="horarios" data-reveal className="col-span-2 scroll-mt-30 border border-[#cbbb9f] sm:col-span-1 bg-[#f8f2e8] p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between"><span className="luxe-eyebrow text-[#765639]">02 / Horario</span><Clock3 size={19} strokeWidth={1.4} className="text-[#8a6744]"/></div>
              <p className="luxe-serif text-[clamp(1.3rem,2.3vw,2.2rem)] leading-tight tracking-[-.045em]">9:00 – 18:00</p>
              <p className="mt-3 text-xs leading-6 text-[#5d5044] sm:text-sm">Lunes a sábado<br/>Domingo: Cerrado</p>
              <span className="mt-5 inline-flex border border-[#8a6744]/50 px-3 py-2 text-[9px] font-semibold uppercase tracking-[.13em] text-[#6f5034]">Previa cita</span>
            </article>
            <article data-reveal className="col-span-2 border border-[#cbbb9f] bg-[#f8f2e8] sm:col-span-1 p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between"><span className="luxe-eyebrow text-[#765639]">03 / Comodidad</span><CarFront size={19} strokeWidth={1.4} className="text-[#8a6744]"/></div>
              <p className="luxe-serif text-[clamp(1.2rem,2.2vw,2rem)] leading-tight tracking-[-.045em]">Todo pensado para ti.</p>
              <p className="mt-3 text-xs leading-6 text-[#5d5044] sm:text-sm">Estacionamiento dentro de la plaza y acceso cómodo para tu cita.</p>
              <p className="mt-3 flex items-start gap-2 text-xs leading-6 text-[#5d5044]"><CreditCard size={15} className="mt-1 shrink-0 text-[#8a6744]" aria-hidden="true"/> Efectivo, transferencia y tarjeta (contactless).</p>
            </article>
            <div data-reveal className="col-span-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-cta luxe-cta-dark min-w-0 px-3 text-center text-[10px] sm:text-[11px]">Reservar cita <ArrowUpRight size={16}/></a>
              <a href={generateWhatsAppLink(whatsappMessages.location)} target="_blank" rel="noopener noreferrer" className="flex min-h-[54px] min-w-0 items-center justify-center gap-2 border border-[#6c5640]/60 px-2 text-center text-[10px] font-semibold uppercase tracking-[.12em] text-[#493c30] transition-colors hover:bg-[#decbb3]"><MessageCircle size={16}/> WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
