import { businessInfo } from "@/data/businessInfo";
import { getBookingLink } from "@/lib/utils";
import { getGoogleMapsEmbedUrl, getGoogleMapsUrl } from "@/lib/maps";
import { ArrowUpRight, Clock3, MapPin, CarFront, CreditCard } from "lucide-react";

export function UbicacionFacilidades() {
  return (
    <section id="ubicacion" className="scroll-mt-24 bg-[#e8ded0] py-24 text-[#251f1b] md:py-36" aria-labelledby="ubicacion-title">
      <div className="luxe-container">
        <div data-reveal className="mb-12 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="luxe-eyebrow mb-6 text-[#6f5137]">04 / Visítanos</p>
            <h2 id="ubicacion-title" className="luxe-serif text-[clamp(3.4rem,6.5vw,6.8rem)] leading-[1.05] tracking-[-.07em]">Tu espacio, <em>tu momento.</em></h2>
          </div>
          <span className="luxe-eyebrow text-[#574638]">Plaza LA FÉ · Local 1</span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div data-reveal className="relative min-h-[360px] overflow-hidden border border-[#574536]/25 bg-[#d0c4b2] md:min-h-[560px]">
            <iframe title="Mapa de Luxe Brows & Spa" src={getGoogleMapsEmbedUrl()} className="absolute inset-0 h-full w-full grayscale-[.3]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div data-reveal className="flex flex-col justify-between">
            <div>
              <div className="border-t border-[#241e1a]/20 py-7">
                <div className="flex gap-6">
                  <MapPin className="mt-1 shrink-0 text-[#97724e]" size={22}/>
                  <div><h3 className="luxe-serif mb-3 text-2xl">Dirección</h3><p className="text-sm leading-7 text-[#62564b]">{businessInfo.address.location} · {businessInfo.address.unit}<br/>{businessInfo.address.street}<br/>{businessInfo.address.neighborhood}<br/>{businessInfo.address.city}, {businessInfo.address.state}</p></div>
                </div>
              </div>
              <div id="horarios" className="scroll-mt-28 border-t border-[#241e1a]/20 py-7">
                <div className="flex gap-6">
                  <Clock3 className="mt-1 shrink-0 text-[#97724e]" size={22}/>
                  <div><h3 className="luxe-serif mb-3 text-2xl">Horarios</h3><p className="text-sm leading-7 text-[#62564b]">Lunes a sábado: 9:00 - 18:00<br/>Domingo: Cerrado<br/>Atención con previa cita</p></div>
                </div>
              </div>
              <div className="grid gap-6 border-t border-[#241e1a]/20 py-7 sm:grid-cols-2">
                <div className="flex gap-4"><CarFront size={22} className="mt-1 shrink-0 text-[#97724e]"/><div><h3 className="luxe-serif mb-2 text-xl">Facilidades</h3><p className="text-sm leading-6 text-[#62564b]">Estacionamiento dentro de la plaza y acceso cómodo para tu cita.</p></div></div>
                <div className="flex gap-4"><CreditCard size={22} className="mt-1 shrink-0 text-[#97724e]"/><div><h3 className="luxe-serif mb-2 text-xl">Métodos de pago</h3><p className="text-sm leading-6 text-[#62564b]">Efectivo, transferencia y tarjeta (opción contactless).</p></div></div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={getGoogleMapsUrl()} target="_blank" rel="noopener noreferrer" className="luxe-cta luxe-cta-dark">Abrir mapa exacto <ArrowUpRight size={16}/></a>
              <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-cta border border-[#241e1a]/25 bg-transparent text-[#241e1a] hover:bg-[#dbcebc]">Reservar cita <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
