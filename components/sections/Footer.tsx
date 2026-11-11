import Image from "next/image";
import { ArrowUpRight, Camera, Users } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#15120f] pb-28 pt-20 text-[#f3eade] md:pb-10 md:pt-24">
      <div className="luxe-container">
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.1fr_.8fr_.8fr_.8fr] lg:gap-10">
          <div>
            <a href="#inicio" aria-label="Volver al inicio" className="relative mb-5 block h-[145px] w-[210px] overflow-hidden">
              <Image src="/images/brand/logo-round.png" alt="Luxe Brows & Spa · By Carely Gonzalez" fill sizes="210px" className="object-contain object-left"/>
            </a>
            <p className="max-w-xs text-sm leading-7 text-[#ded0bf]/70">Cejas · Pestañas · Faciales · Corporales<br/>Plaza LA FÉ · Local 1</p>
            <div className="mt-7 flex gap-3">
              <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Luxe Brows & Spa" className="flex h-11 w-11 items-center justify-center border border-white/25 transition-colors hover:bg-white/10"><Camera size={17}/></a>
              <a href={businessInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook de Luxe Brows & Spa" className="flex h-11 w-11 items-center justify-center border border-white/25 transition-colors hover:bg-white/10"><Users size={17}/></a>
            </div>
          </div>
          <div>
            <p className="luxe-eyebrow mb-7 text-[#c4a17a]">Explora</p>
            <ul className="space-y-4 text-sm text-[#e6d9c8]/80">
              {[...siteConfig.navLinks, {label:"Galería",href:"#galeria"}, {label:"Experiencias",href:"#testimonios"}].map(link => <li key={link.href}><a href={link.href} className="transition-colors hover:text-[#d5ae7c]">{link.label}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="luxe-eyebrow mb-7 text-[#c4a17a]">Visítanos</p>
            <address className="max-w-xs not-italic text-sm leading-8 text-[#e6d9c8]/80">{businessInfo.address.fullAddress}</address>
            <p className="mt-3 text-sm text-[#e6d9c8]/80">WhatsApp: +{businessInfo.whatsapp}</p>
          </div>
          <div>
            <p className="luxe-eyebrow mb-7 text-[#c4a17a]">Horario</p>
            <p className="text-sm leading-8 text-[#e6d9c8]/80">Lunes a sábado<br/>9:00 – 18:00<br/>Domingo: Cerrado</p>
            <p className="mt-2 text-sm italic text-[#c4a17a]">Atención con previa cita</p>
            <a href="#inicio" className="luxe-link mt-8 text-[#e6d9c8]">Volver arriba <ArrowUpRight size={15}/></a>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-[11px] leading-6 text-[#d0bea9]/85 md:flex-row md:items-center md:justify-between">
          <span>© {year} Luxe Brows & Spa · By Carely Gonzalez</span>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            <a href="/aviso-de-privacidad" className="hover:text-white">Aviso de privacidad</a>
            <a href="/politicas-de-citas" className="hover:text-white">Políticas de citas</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
