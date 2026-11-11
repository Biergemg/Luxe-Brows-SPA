"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Camera, CircleHelp, Clock3, Diamond, Images, MapPin, Menu, Sparkles, X } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import { getBookingLink } from "@/lib/utils";

const links = [
  { label: "Servicios", href: "#servicios", icon: Sparkles },
  { label: "Experiencias", href: "#testimonios", icon: Diamond },
  { label: "Galería", href: "#galeria", icon: Images },
  { label: "Ubicación", href: "#ubicacion", icon: MapPin },
  { label: "FAQ", href: "#faq", icon: CircleHelp },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => {
      const intersecting = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (intersecting.length) setCurrentSection("#" + intersecting[0].target.id);
    }, { rootMargin: "-25% 0px -45% 0px", threshold: 0 });
    links.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [menuOpen]);

  const light = scrolled || menuOpen;

  return (
    <header className={light ? "fixed inset-x-0 top-0 z-50 border-b border-[#33271e]/10 bg-[#f6f2ec]/95 shadow-[0_8px_28px_rgba(25,20,15,.07)] backdrop-blur-xl transition-all duration-500" : "fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#181512]/85 backdrop-blur-lg transition-all duration-500"}>
      <div className={light ? "border-b border-[#33271e]/10 text-[#554637]" : "border-b border-white/15 text-[#e4d6c4]"}>
        <div className="luxe-container flex h-[34px] items-center justify-between gap-3 text-[9px] font-semibold uppercase tracking-[.12em] sm:text-[10px] sm:tracking-[.17em]">
          <a href={businessInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-center gap-2 transition-opacity hover:opacity-70">
            <MapPin size={12} className="shrink-0 text-[#c6a37c]" strokeWidth={1.8} aria-hidden="true" />
            <span className="truncate">Plaza LA FÉ · Ciudad Madero</span>
          </a>
          <span className="hidden items-center gap-2 sm:flex"><Diamond size={11} className="text-[#c6a37c]" strokeWidth={1.4} aria-hidden="true"/> Atención con previa cita</span>
          <span className="flex shrink-0 items-center gap-2"><Clock3 size={12} className="text-[#c6a37c]" strokeWidth={1.8} aria-hidden="true"/><span>Lun–Sáb · 9–18h</span></span>
        </div>
      </div>
      <div className="luxe-container flex h-[78px] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Luxe Brows & Spa · Inicio" className={light ? "flex shrink-0 items-center gap-3 text-[#241e1a]" : "flex shrink-0 items-center gap-3 text-[#f8f1e8]"}>
          <span className="relative">
            <span className="luxe-serif text-4xl leading-none tracking-[-.08em] sm:text-[42px]">Luxe<span className="text-[#b8976e]">.</span></span>
            <Diamond size={11} strokeWidth={1.5} className="absolute -right-3 -top-1 text-[#b8976e]" aria-hidden="true" />
          </span>
          <span className="border-l border-current/25 pl-3 text-[9px] font-semibold uppercase leading-[1.55] tracking-[.25em]">Brows<br/>& Spa</span>
        </a>
        <nav aria-label="Navegación principal" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map(({ href, label, icon: Icon }) => (
            <a key={href} href={href} aria-current={currentSection === href ? "location" : undefined} className={"group relative flex min-h-11 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[.13em] transition-colors " + (light ? "text-[#514638] hover:text-[#8e6943]" : "text-[#f8f1e8]/85 hover:text-[#e5bf90]")}>
              <Icon size={12} strokeWidth={1.5} className={currentSection === href ? "text-[#c29d70]" : "text-[#b49978]/80 transition-colors group-hover:text-[#c29d70]"} aria-hidden="true"/>
              <span>{label}</span>
              <span className={"pointer-events-none absolute bottom-0 left-0 h-px bg-[#bb9769] transition-all duration-300 " + (currentSection === href ? "w-full" : "w-0 group-hover:w-full")} aria-hidden="true"/>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Luxe Brows & Spa" className={light ? "hidden h-11 w-11 items-center justify-center border border-[#251f19]/15 text-[#8d6b4a] transition-colors hover:border-[#8d6b4a] lg:flex" : "hidden h-11 w-11 items-center justify-center border border-white/25 text-[#d4b48d] transition-colors hover:bg-white/10 lg:flex"}><Camera size={17} strokeWidth={1.5}/></a>
          <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className={light ? "hidden h-11 items-center gap-3 border border-[#241e1a] bg-[#241e1a] px-5 text-[10px] font-semibold uppercase tracking-[.16em] text-white transition-colors hover:bg-[#5f4c3e] md:inline-flex" : "hidden h-11 items-center gap-3 border border-[#d2b48b] bg-[#d2b48b] px-5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#241e1a] transition-colors hover:bg-[#f1d2ab] md:inline-flex"}>Reservar ahora <ArrowUpRight size={14} aria-hidden="true"/></a>
          <button type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="luxe-menu-mobile" onClick={() => setMenuOpen(!menuOpen)} className={light ? "flex h-12 w-12 items-center justify-center text-[#241e1a] lg:hidden" : "flex h-12 w-12 items-center justify-center text-white lg:hidden"}>
            {menuOpen ? <X size={25}/> : <Menu size={25}/>}
          </button>
        </div>
      </div>
      <span className="luxe-scroll-progress" aria-hidden="true" />
      {menuOpen && (
        <nav id="luxe-menu-mobile" aria-label="Navegación móvil" className="fixed inset-x-0 top-[112px] bottom-0 z-50 min-h-[calc(100svh-112px)] overflow-y-auto bg-[#f6f2ec] px-8 pb-28 pt-8 text-[#241e1a] lg:hidden">
          <span className="luxe-eyebrow mb-8 flex items-center gap-3 text-[#775634]"><Diamond size={15} strokeWidth={1.5}/> Explora Luxe</span>
          <div className="flex flex-col">
            {links.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="luxe-serif flex items-center justify-between border-b border-[#241e1a]/15 py-4 text-[clamp(2.25rem,8vw,3.5rem)] tracking-[-.065em]">
                <span>{label}</span><Icon size={19} strokeWidth={1.3} className="text-[#96724a]"/>
              </a>
            ))}
          </div>
          <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="luxe-cta luxe-cta-dark mt-10 w-full">Reservar mi cita <ArrowUpRight size={17}/></a>
          <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="luxe-eyebrow mt-8 flex items-center justify-center gap-2 text-[#786957]"><Camera size={15} /> @luxebrowsspa</a>
        </nav>
      )}
    </header>
  );
}
