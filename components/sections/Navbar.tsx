"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/site';
import { Button } from '../ui/Button';
import { getBookingLink } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
          ? 'bg-luxe-black/90 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
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
          <ul className="flex items-center gap-8 text-sm font-medium text-luxe-light-gray">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-luxe-gray transition-colors py-2 whitespace-nowrap">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button size="sm" asChild>
            <a href={getBookingLink()} target="_blank" rel="noopener noreferrer">
              Reservar ahora
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden p-2 text-white z-50 focus:outline-none shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`fixed inset-0 bg-luxe-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="mb-10">
            <Image src="/images/brand/logo-round.png" alt="Luxe Brows & Spa" width={224} height={224} className="h-40 w-auto" quality={100} unoptimized />
          </div>
          <ul className="flex flex-col items-center gap-8 text-xl font-serif text-white w-full px-6">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href} className="w-full text-center border-b border-white/10 pb-4">
                <a
                  href={link.href}
                  className="block w-full hover:text-luxe-gray transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="w-full mt-4">
              <Button size="lg" className="w-full text-lg" asChild>
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
