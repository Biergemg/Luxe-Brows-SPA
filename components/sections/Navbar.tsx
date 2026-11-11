"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import { getBookingLink } from "@/lib/utils";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencias", href: "#testimonios" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "FAQ", href: "#faq" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [menuOpen]);

  return (
    <header className={scrolled || menuOpen ? "fixed inset-x-0 top-0 z-50 border-b border-[#33271e]/10 bg-[#f6f2ec]/95 shadow-[0_8px_28px_rgba(25,20,15,.07)] backdrop-blur-xl transition-all duration-500" : "fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#181512]/60 backdrop-blur-lg transition-all duration-500"}>
      <div className={scrolled || menuOpen ? "border-b border-[#33271e]/10 text-[#5c4d3e]" : "border-b border-white/15 text-[#f6eee2]/70"}>
        <div className="luxe-container flex h-[31px] items-center justify-between gap-3 text-[9px] font-semibold uppercase tracking-[.18em] sm:text-[10px]">
          <span>Plaza LA FÉ · Ciudad Madero</span>
          <span className="hidden sm:inline">Atención con previa cita</span>
          <span>Lun–Sáb · 9:00–18:00</span>
        </div>
      </div>
      <div className="luxe-container flex h-[78px] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Luxe Brows & Spa · Inicio" className={scrolled || menuOpen ? "flex shrink-0 items-center gap-3 text-[#241e1a]" : "flex shrink-0 items-center gap-3 text-[#f8f1e8]"}>
          <span className="luxe-serif text-4xl leading-none tracking-[-.08em] sm:text-[42px]">Luxe<span className="text-[#b8976e]">.</span></span>
          <span className="border-l border-current/25 pl-3 text-[9px] font-semibold uppercase leading-[1.55] tracking-[.25em]">Brows<br/>& Spa</span>
        </a>
        <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex xl:gap-9">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={scrolled ? "text-[11px] font-semibold uppercase tracking-[.15em] text-[#514638] transition-colors hover:text-[#aa8053]" : "text-[11px] font-semibold uppercase tracking-[.15em] text-[#f8f1e8]/85 transition-colors hover:text-[#d5ad79]"}>{link.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className={scrolled ? "hidden h-11 items-center gap-3 border border-[#241e1a] bg-[#241e1a] px-5 text-[10px] font-semibold uppercase tracking-[.16em] text-white transition-colors hover:bg-[#5f4c3e] md:inline-flex" : "hidden h-11 items-center gap-3 border border-[#d2b48b] bg-[#d2b48b] px-5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#241e1a] transition-colors hover:bg-[#f1d2ab] md:inline-flex"}>Reservar ahora <ArrowUpRight size={14}/></a>
          <button type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="luxe-menu-mobile" onClick={() => setMenuOpen(!menuOpen)} className={scrolled || menuOpen ? "flex h-12 w-12 items-center justify-center text-[#241e1a] lg:hidden" : "flex h-12 w-12 items-center justify-center text-white lg:hidden"}>{menuOpen ? <X size={26}/> : <Menu size={26}/>}</button>
        </div>
      </div>
      {menuOpen && (
        <nav id="luxe-menu-mobile" aria-label="Navegación móvil" className="fixed inset-x-0 top-[109px] bottom-0 z-50 min-h-[calc(100svh-109px)] overflow-y-auto bg-[#f6f2ec] px-8 pb-12 pt-8 text-[#241e1a] lg:hidden">
          <span className="luxe-eyebrow mb-8 block text-[#997958]">Explora Luxe</span>
          <div className="flex flex-col">
            {links.map((link, i) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="luxe-serif flex items-center justify-between border-b border-[#241e1a]/15 py-4 text-[clamp(2.4rem,8vw,3.7rem)] tracking-[-.065em]"><span>{link.label}</span><span className="font-sans text-xs tracking-normal text-[#927458]">{String(i+1).padStart(2, "0")}</span></a>
            ))}
          </div>
          <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="luxe-cta luxe-cta-dark mt-10 w-full">Reservar mi cita <ArrowUpRight size={17}/></a>
          <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="luxe-eyebrow mt-8 block text-center text-[#786957]">Instagram · @luxebrowsspa</a>
        </nav>
      )}
    </header>
  );
}
