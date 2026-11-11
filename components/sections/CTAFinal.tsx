import Image from "next/image";
import { ArrowUpRight, Diamond } from "lucide-react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { getBookingLink, generateWhatsAppLink } from "@/lib/utils";
import { whatsappMessages } from "@/lib/site";

export function CTAFinal() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1c1612] text-[#f6efe5]" aria-labelledby="final-title">
      <div className="pointer-events-none absolute -left-22 bottom-0 luxe-serif text-[clamp(20rem,30vw,38rem)] leading-[.85] text-[#d2ad7a]/[.05]" aria-hidden="true">L</div>
      <div className="luxe-container relative z-10 grid min-w-0 gap-12 py-22 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16 lg:py-29 xl:gap-26">
        <div data-reveal className="order-1">
          <p className="luxe-eyebrow mb-7 flex items-center gap-3 text-[#dfbb8e]"><Diamond size={16} strokeWidth={1.3}/> 06 / Tu siguiente cita empieza aquí</p>
          <h2 id="final-title" className="luxe-serif max-w-4xl text-[clamp(3.9rem,7.4vw,8.8rem)] leading-[.99] tracking-[-.074em]">
            Es tu<br/>momento de<br/><em className="text-[#d5b087]">brillar.</em>
          </h2>
          <p className="mt-8 max-w-xl border-l border-[#b99a72] pl-5 text-sm leading-8 text-[#ecdfcf]/85 lg:mt-10 lg:text-base">Tu próxima cita está a un clic de distancia. Reserva 24/7 en segundos. Si antes de agendar necesitas orientación, también podemos ayudarte por WhatsApp.</p>
          <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
            <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-cta">Reservar ahora <ArrowUpRight size={17}/></a>
            <a href={generateWhatsAppLink(whatsappMessages.booking)} target="_blank" rel="noopener noreferrer" className="luxe-cta luxe-cta-outline">Pedir asesoría <BrandIcon name="whatsapp" size={17}/></a>
          </div>
          <div className="mt-11 border-t border-[#d6b389]/25 pt-7 lg:mt-15">
            <p className="luxe-eyebrow mb-5 text-[#dbb991]">Al contactarnos</p>
            <ul className="grid gap-4 text-xs leading-6 text-[#f0e0cb]/85 sm:grid-cols-3">
              <li><span className="mr-2 text-[#d7b182]">01 /</span>Compártenos tu nombre.</li>
              <li><span className="mr-2 text-[#d7b182]">02 /</span>Cuéntanos qué buscas. Tratamientos de tu interés o dudas.</li>
              <li><span className="mr-2 text-[#d7b182]">03 /</span>Menciona tu disponibilidad. Horario o fecha preferente.</li>
            </ul>
          </div>
        </div>
        <div data-reveal className="order-2 relative min-w-0 border border-[#b99568]/30 p-3 sm:p-5">
          <div className="absolute -left-2 bottom-[17%] top-[7%] h-[1px] w-[32%] origin-left -rotate-90 bg-[#c5a47c]/55" aria-hidden="true"/>
          <div className="relative aspect-[.95/1] overflow-hidden border-[6px] border-[#3d3025] bg-[#66574b] shadow-[0_30px_75px_rgba(0,0,0,.3)] sm:aspect-[.96/1] sm:border-[10px]">
            <Image src="/images/gallery-1.webp" alt="Retrato editorial de belleza" fill loading="lazy" sizes="(max-width:1024px) 85vw, 43vw" className="object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/55 via-transparent to-transparent"/>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3 text-[#faead5]">
              <span className="luxe-eyebrow">Luxe Brows & Spa</span>
              <Diamond size={18} strokeWidth={1.3}/>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
