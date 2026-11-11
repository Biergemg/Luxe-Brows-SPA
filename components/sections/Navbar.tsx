"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const menuButton = useRef<HTMLButtonElement>(null);

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
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const blocked = [document.querySelector("main"), ...document.querySelectorAll("[data-floating-reserve]")].filter(Boolean) as HTMLElement[];
    blocked.forEach((element) => element.setAttribute("inert", ""));
    const frame = requestAnimationFrame(() => document.querySelector<HTMLElement>("#luxe-menu-mobile a")?.focus());
    window.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = oldOverflow;
      blocked.forEach((element) => element.removeAttribute("inert"));
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const light = scrolled || menuOpen;

  return (
    <header className={light ? "fixed inset-x-0 top-0 z-50 border-b border-[#33271e]/10 bg-[#f6f2ec]/96 shadow-[0_8px_28px_rgba(25,20,15,.07)] backdrop-blur-xl transition-all duration-500" : "fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#181512]/85 backdrop-blur-lg transition-all duration-500"}>
      <div className={light ? "border-b border-[#33271e]/10 text-[#554637]" : "border-b border-white/15 text-[#e4d6c4]"}>
        <div className="luxe-container flex h-[34px] items-center justify-between gap-3 text-[9px] font-semibold uppercase tracking-[.12em] sm:text-[10px] sm:tracking-[.17em]">
          <a href={businessInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-center gap-2 transition-opacity hover:opacity-70">
            <MapPin size={12} className="shrink-0 text-[#bd966c]" strokeWidth={1.8} aria-hidden="true" />
            <span className="truncate">Plaza LA FÉ · Ciudad Madero</span>
          </a>
          <span className="hidden items-center gap-2 sm:flex"><Diamond size={11} className="text-[#bd966c]" strokeWidth={1.4} aria-hidden="true"/> Atención con previa cita</span>
          <span className="flex shrink-0 items-center gap-2"><Clock3 size={12} className="text-[#bd966c]" strokeWidth={1.8} aria-hidden="true"/><span>Lun–Sáb · 9–18h</span></span>
        </div>
      </div>
      <div className="luxe-container flex h-[78px] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Luxe Brows & Spa · Inicio" className={light ? "flex shrink-0 items-center gap-3 text-[#241e1a]" : "flex shrink-0 items-center gap-3 text-[#f8f1e8]"}>
          <span className="relative">
            <span className="luxe-serif text-4xl leading-none tracking-[-.08em] sm:text-[42px]">Luxe<span className="text-[#b8976e]">.</span></span>
            <Diamond size={11} strokeWidth={1.5} className="absolute -right-3 -top-1 text-[#b8976e]" aria-hidden="true"/>
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
          <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className={light ? "hidden h-11 items-center gap-3 border border-[#241e1a] bg-[#241e1a] px-5 text-[10px] font-semibold uppercase tracking-[.16em] text-white transition-colors hover:bg-[#5f4c3e] md:inline-flex" : "hidden h-11 items-center gap-3 border border-[#d2b48b] bg-[#d2b48b] px-5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#241e1a] transition-colors hover:bg-[#f1d2ab] md:inline-flex"}>Reservar ahora <ArrowUpRight size={14}/></a>
          <button ref={menuButton} type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="luxe-menu-mobile" onClick={() => setMenuOpen(!menuOpen)} className={light ? "flex h-12 w-12 items-center justify-center text-[#241e1a] lg:hidden" : "flex h-12 w-12 items-center justify-center text-white lg:hidden"}>
            {menuOpen ? <X size={26}/> : <Menu size={26}/>}
          </button>
        </div>
      </div>
      <span className="luxe-scroll-progress" aria-hidden="true" />
      {menuOpen && (
        <nav id="luxe-menu-mobile" aria-label="Navegación móvil" className="fixed inset-x-0 top-[112px] z-50 h-[calc(100dvh-112px)] overflow-y-auto bg-[#201915] text-[#f6e9d8] lg:hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <Image src="/images/mirada-luxe.webp" alt="" fill sizes="100vw" className="object-cover object-[70%_center] opacity-[.16]" priority={false}/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#201915] via-[#201915]/90 to-[#201915]/70"/>
          </div>
          <div className="luxe-container relative z-10 flex min-h-full flex-col pb-27 pt-7 sm:pt-10">
            <p className="luxe-eyebrow mb-6 flex items-center gap-3 text-[#dbba91]"><Diamond size={15} strokeWidth={1.3}/> Explora Luxe <span className="ml-auto text-[#cbb18e]">01 / 05</span></p>
            <div className="border-t border-[#c4a47e]/35">
              {links.map(({ href, label, icon: Icon }, index) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="group flex min-h-[71px] items-center justify-between gap-3 border-b border-[#c4a47e]/30 py-2.5 sm:min-h-[80px]">
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="w-6 shrink-0 text-[10px] font-semibold tracking-widest text-[#d0ab7e]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="luxe-serif text-[clamp(1.75rem,7.3vw,3.7rem)] tracking-[-.055em] text-[#faf0e3] transition-transform duration-300 group-hover:translate-x-2">{label}</span>
                  </span>
                  <Icon size={20} strokeWidth={1.3} className="shrink-0 text-[#d9b48a]"/>
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <p className="mb-5 text-[11px] leading-6 tracking-wide text-[#dac7ac]">Cejas · Pestañas · Faciales · Corporales</p>
              <div className="grid grid-cols-[1fr_auto] gap-3">
                <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="luxe-cta min-w-0 px-3">Reservar mi cita <ArrowUpRight size={16}/></a>
                <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Luxe Brows & Spa" className="flex h-[54px] w-[54px] items-center justify-center border border-[#c2a17b]/50 text-[#deb98d]"><Camera size={19} strokeWidth={1.5}/></a>
              </div>
              <div className="mt-7 flex items-center justify-between gap-3 border-t border-[#c4a47e]/25 pt-4">
                <span className="luxe-eyebrow text-[#caaa83]">By Carely Gonzalez</span>
                <span className="luxe-eyebrow text-[#d3bd9e]">Plaza LA FÉ</span>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
