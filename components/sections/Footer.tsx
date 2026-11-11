import { ArrowRight, ArrowUpRight, Camera, Clock3, Diamond, MapPin, MessageCircle, Users } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import { siteConfig } from "@/lib/site";
import { getGoogleMapsUrl } from "@/lib/maps";
import { generateWhatsAppLink, getBookingLink } from "@/lib/utils";

const navigation = [
  ...siteConfig.navLinks,
  { label: "Galería", href: "#galeria" },
  { label: "Experiencias", href: "#testimonios" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#17120f] pb-27 pt-15 text-[#f3e9dd] md:pb-10 md:pt-20" aria-label="Información y contacto de Luxe Brows & Spa">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 70% 20%,rgba(129,93,58,.24),transparent 55%)" }} aria-hidden="true"/>
      <div className="luxe-container relative">
        <div data-reveal className="border-b border-[#ddbb91]/25 pb-10 md:pb-13">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#dec39c]"><Diamond size={15} strokeWidth={1.2} aria-hidden="true"/> Luxe Brows & Spa</p>
            <p className="text-[10px] uppercase tracking-[.18em] text-[#e2ccb2]">By Carely Gonzalez</p>
          </div>
          <a href="#inicio" className="group flex w-full items-baseline justify-between gap-3">
            <span className="luxe-serif text-[clamp(5.5rem,17vw,17rem)] leading-[.83] tracking-[-.11em] text-[#f5eadb] transition-colors duration-500 group-hover:text-[#d4b58d]">Luxe<span className="text-[#c69c68]">.</span></span>
            <span className="hidden shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-[#dfc5a5] sm:flex">Volver arriba <ArrowUpRight size={18}/></span>
            <ArrowUpRight size={25} strokeWidth={1.3} className="mb-2 shrink-0 text-[#d4b58d] sm:hidden" aria-hidden="true"/>
          </a>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
            <p className="max-w-lg text-sm leading-7 text-[#eadccc]/85">Cejas · Pestañas · Faciales · Corporales<br/>Plaza LA FÉ · Local 1</p>
            <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-cta shrink-0">Reservar mi cita <ArrowUpRight size={17}/></a>
          </div>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-x-5 gap-y-11 border-b border-[#ddbb91]/25 py-12 sm:gap-x-9 lg:grid-cols-[.9fr_.9fr_1.35fr_1fr] lg:gap-12 lg:py-18">
          <div data-reveal className="min-w-0">
            <p className="luxe-eyebrow mb-7 text-[#dec39c]">01 / Explora</p>
            <nav aria-label="Enlaces del pie de página">
              <ul className="space-y-3">
                {navigation.map((link) => (
                  <li key={link.href}><a href={link.href} className="group flex min-h-8 items-center gap-2 text-sm text-[#f3e9dd]/85 transition-colors hover:text-[#d4b58d]"><span>{link.label}</span><ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true"/></a></li>
                ))}
              </ul>
            </nav>
          </div>
          <div data-reveal className="min-w-0">
            <p className="luxe-eyebrow mb-7 text-[#dec39c]">02 / Conecta</p>
            <div className="space-y-3">
              <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="group flex min-h-9 items-center gap-3 text-sm text-[#f3e9dd]/85 transition-colors hover:text-[#d4b58d]"><Camera size={17} strokeWidth={1.5} className="shrink-0 text-[#d8b58a]" aria-hidden="true"/> Instagram</a>
              <a href={businessInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="group flex min-h-9 items-center gap-3 text-sm text-[#f3e9dd]/85 transition-colors hover:text-[#d4b58d]"><Users size={17} strokeWidth={1.5} className="shrink-0 text-[#d8b58a]" aria-hidden="true"/> Facebook</a>
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="group flex min-h-9 items-center gap-3 text-sm text-[#f3e9dd]/85 transition-colors hover:text-[#d4b58d]"><MessageCircle size={17} strokeWidth={1.5} className="shrink-0 text-[#d8b58a]" aria-hidden="true"/> WhatsApp</a>
              <p className="break-all pt-1 text-xs leading-6 text-[#e6d5c0]/85">+{businessInfo.whatsapp}</p>
            </div>
          </div>
          <div data-reveal className="col-span-2 min-w-0 lg:col-span-1">
            <p className="luxe-eyebrow mb-7 text-[#dec39c]">03 / Visítanos</p>
            <a href={getGoogleMapsUrl()} target="_blank" rel="noopener noreferrer" className="group flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c7a277]/45 text-[#d8b58a]"><MapPin size={19} strokeWidth={1.5} aria-hidden="true"/></span>
              <span className="max-w-sm text-sm leading-7 text-[#f3e9dd]/85 transition-colors group-hover:text-[#d4b58d]">{businessInfo.address.fullAddress}<span className="mt-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#d4b58d]">Abrir indicaciones <ArrowUpRight size={14}/></span></span>
            </a>
          </div>
          <div data-reveal className="col-span-2 min-w-0 lg:col-span-1">
            <p className="luxe-eyebrow mb-7 text-[#dec39c]">04 / Horarios</p>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c7a277]/45 text-[#d8b58a]"><Clock3 size={19} strokeWidth={1.5} aria-hidden="true"/></span>
              <div>
                <p className="luxe-serif text-[clamp(1.5rem,2.5vw,2.4rem)] tracking-[-.04em]">9:00 – 18:00</p>
                <p className="mt-2 text-sm leading-7 text-[#f3e9dd]/80">Lunes a sábado<br/>Domingo: Cerrado</p>
                <p className="mt-2 text-sm italic text-[#d5b58a]">Atención con previa cita</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 pt-8 text-[11px] leading-6 text-[#e2d0b9]/85">
          <span>© {year} Luxe Brows & Spa · By Carely Gonzalez</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/aviso-de-privacidad" className="transition-colors hover:text-white">Aviso de privacidad</a>
            <a href="/politicas-de-citas" className="transition-colors hover:text-white">Políticas de citas</a>
          </div>
          <a href="#inicio" className="flex items-center gap-2 text-[#d8b58a]">Arriba <ArrowRight className="-rotate-90" size={16}/></a>
        </div>
      </div>
    </footer>
  );
}
