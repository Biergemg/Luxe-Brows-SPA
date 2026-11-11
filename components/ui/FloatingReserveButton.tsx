"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getBookingLink, generateWhatsAppLink } from "@/lib/utils";

export function FloatingReserveButton() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > Math.max(420, window.innerHeight * .55));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Desktop already offers a persistent booking CTA in the fixed navigation.
  // The secondary fixed CTA appears only on small screens to keep cards unobstructed.
  return (
    <div
      data-floating-reserve
      aria-hidden={!scrolled}
      className={"fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-[#ded2c0] bg-[#f6f2ec]/96 px-4 py-3 shadow-[0_-15px_45px_rgba(33,26,18,.1)] backdrop-blur-xl transition-all duration-300 md:hidden " + (scrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0")}
    >
      <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" tabIndex={scrolled ? 0 : -1} className="luxe-cta luxe-cta-dark min-w-0 flex-1 px-3 text-[10px]">Reservar cita <ArrowUpRight size={16}/></a>
      <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" tabIndex={scrolled ? 0 : -1} className="flex h-[54px] w-[54px] shrink-0 items-center justify-center border border-[#241e1a]/25 text-[#241e1a]" aria-label="Contactar por WhatsApp"><MessageCircle size={22}/></a>
    </div>
  );
}
