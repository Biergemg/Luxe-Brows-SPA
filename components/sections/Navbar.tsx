"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/site';
import { businessInfo } from '@/data/businessInfo';
import { Button } from '../ui/Button';
import { getBookingLink, generateWhatsAppLink } from '@/lib/utils';
import { Menu, X, MessageCircle } from 'lucide-react';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.1" strokeWidth="1.75" />
      <circle cx="17.6" cy="6.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-nude-bg/90 backdrop-blur-md border-nude-text/10 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="bg-nude-text">
        <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-1.5 text-[11px] text-nude-bg/90 md:px-12 md:text-xs">
          <span className="truncate">
            <span className="md:hidden">Lun-Sáb 9-18h</span>
            <span className="hidden md:inline">Lunes a sábado 9:00-18:00 · Atención con previa cita</span>
          </span>
          <div className="flex shrink-0 items-center gap-4">
            {businessInfo.social.instagram && (
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-opacity hover:opacity-70"
              >
                <InstagramIcon />
              </a>
            )}
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition-opacity hover:opacity-70"
            >
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
        <div className="z-50 shrink-0">
          <a href="#" className="flex items-center" aria-label="Inicio">
            <Image
              src="/images/brand/logo-round.png"
              alt="Luxe Brows & Spa"
              width={128}
              height={128}
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-20 md:h-24' : 'h-24 md:h-28'}`}
              quality={100}
              unoptimized
              priority
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8 min-w-0">
          <ul className="flex items-center gap-8 text-sm font-medium text-nude-muted">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-nude-accent transition-colors py-2 whitespace-nowrap">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="primary-nude" size="sm" asChild>
            <a href={getBookingLink()} target="_blank" rel="noopener noreferrer">
              Reservar ahora
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden p-2 text-nude-text z-50 focus:outline-none shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`fixed inset-0 bg-nude-bg/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="mb-10">
            <Image src="/images/brand/logo-round.png" alt="Luxe Brows & Spa" width={224} height={224} className="h-40 w-auto" quality={100} unoptimized />
          </div>
          <ul className="flex flex-col items-center gap-8 text-xl font-serif text-nude-text w-full px-6">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href} className="w-full text-center border-b border-nude-text/10 pb-4">
                <a
                  href={link.href}
                  className="block w-full hover:text-nude-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="w-full mt-4">
              <Button variant="primary-nude" size="lg" className="w-full text-lg" asChild>
                <a
                  href={getBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reservar ahora
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
