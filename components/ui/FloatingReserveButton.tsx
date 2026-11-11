"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getBookingLink, generateWhatsAppLink } from "@/lib/utils";

export function FloatingReserveButton() {
  const [showDesktop, setShowDesktop] = useState(false);

  useEffect(() => {
    const update = () => setShowDesktop(window.scrollY > Math.max(420, window.innerHeight * .72));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-[#ded2c0] bg-[#f6f2ec]/95 px-4 py-3 shadow-[0_-15px_45px_rgba(33,26,18,.1)] backdrop-blur-xl md:hidden">
        <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-cta luxe-cta-dark min-w-0 flex-1 px-3 text-[10px]">Reservar cita <ArrowUpRight size={16}/></a>
        <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex h-[54px] w-[54px] shrink-0 items-center justify-center border border-[#241e1a]/25 text-[#241e1a]" aria-label="Contactar por WhatsApp"><MessageCircle size={22}/></a>
      </div>
      <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" aria-hidden={!showDesktop} tabIndex={showDesktop ? 0 : -1} className={"fixed bottom-7 right-7 z-40 hidden min-h-14 items-center gap-4 border border-[#d4b992] bg-[#241e1a] px-6 text-[11px] font-semibold uppercase tracking-[.2em] text-white shadow-[0_12px_35px_rgba(15,12,10,.24)] transition-all duration-300 md:inline-flex " + (showDesktop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0")}>Reservar cita <ArrowUpRight size={17}/></a>
    </>
  );
}
