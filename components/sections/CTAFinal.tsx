import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getBookingLink, generateWhatsAppLink } from "@/lib/utils";
import { whatsappMessages } from "@/lib/site";

export function CTAFinal() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1b1714] text-[#f6efe5]" aria-labelledby="final-title">
      <div className="absolute inset-0 z-0 lg:left-[40%]">
        <Image src="/images/gallery-1.webp" alt="Retrato editorial de belleza" fill sizes="(max-width:1024px) 100vw, 65vw" className="object-cover object-center" loading="lazy"/>
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,#1b1714_0%,rgba(27,23,20,.95)_45%,rgba(27,23,20,.5)_75%,rgba(27,23,20,.25)_100%)] max-lg:bg-[linear-gradient(0deg,#1b1714_0%,rgba(27,23,20,.93)_53%,rgba(27,23,20,.4)_100%)]" />
      <div className="luxe-container relative z-[2] flex min-h-[750px] flex-col justify-center py-28 md:py-36">
        <p data-reveal className="luxe-eyebrow mb-8 text-[#c7a77d]">06 / Tu siguiente cita empieza aquí</p>
        <h2 id="final-title" data-reveal className="luxe-serif max-w-5xl text-[clamp(3.9rem,8.2vw,9rem)] leading-[.98] tracking-[-.075em]">Es tu momento<br/>de <em className="text-[#d4b18b]">brillar.</em></h2>
        <p data-reveal className="mt-8 max-w-lg text-base leading-8 text-[#ece1d4]/80">Tu próxima cita está a un clic de distancia. Reserva 24/7 en segundos. Si antes de agendar necesitas orientación, también podemos ayudarte por WhatsApp.</p>
        <div data-reveal className="mt-10 flex flex-wrap gap-4">
          <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-cta">Reservar ahora <ArrowUpRight size={17}/></a>
          <a href={generateWhatsAppLink(whatsappMessages.booking)} target="_blank" rel="noopener noreferrer" className="luxe-cta luxe-cta-outline">Pedir asesoría <MessageCircle size={17}/></a>
        </div>
        <div data-reveal className="mt-16 max-w-3xl border-t border-white/20 pt-6">
          <p className="luxe-eyebrow mb-4 text-[#c8aa85]">Al contactarnos</p>
          <ul className="grid gap-4 text-xs leading-6 text-[#ecdfd0]/75 sm:grid-cols-3">
            <li>01 / Compártenos tu nombre.</li>
            <li>02 / Cuéntanos qué buscas. Tratamientos de tu interés o dudas.</li>
            <li>03 / Menciona tu disponibilidad. Horario o fecha preferente.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
