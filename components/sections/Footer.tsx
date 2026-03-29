import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/site';
import { businessInfo } from '@/data/businessInfo';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-none stroke-current">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.1" strokeWidth="1.75" />
      <circle cx="17.6" cy="6.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M13.37 20v-7.1h2.4l.36-2.77h-2.76V8.36c0-.8.22-1.35 1.37-1.35h1.46V4.53c-.25-.03-1.12-.11-2.13-.11-2.11 0-3.55 1.29-3.55 3.66v2.05H8.13v2.77h2.39V20h2.85Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxe-black border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center mb-6" aria-label="Inicio">
              <Image
                src="/images/brand/logo-round.png"
                alt="Luxe Brows & Spa"
                width={224}
                height={224}
                className="h-36 md:h-40 w-auto"
              />
            </a>
            <p className="text-sm text-luxe-light-gray leading-relaxed mb-6">
              Cejas · Pestañas · Faciales · Cuerpo
              <br />
              Plaza LA FÉ · Local 1
            </p>
            <div className="flex gap-4">
              {businessInfo.social.instagram && (
                <a
                  href={businessInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-luxe-gray hover:text-luxe-gray transition-colors"
                >
                  <InstagramIcon />
                </a>
              )}
              {businessInfo.social.facebook && (
                <a
                  href={businessInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-luxe-gray hover:text-luxe-gray transition-colors"
                >
                  <FacebookIcon />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Navegación</h4>
            <ul className="flex flex-col gap-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-luxe-light-gray hover:text-luxe-gray transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contáctanos</h4>
            <ul className="flex flex-col gap-4 text-sm text-luxe-light-gray">
              <li>
                <span className="block text-white mb-1">Dirección:</span>
                {businessInfo.address.fullAddress}
              </li>
              <li>
                <span className="block text-white mb-1">WhatsApp:</span>
                +{businessInfo.whatsapp}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Disponibilidad</h4>
            <ul className="flex flex-col gap-3 text-sm text-luxe-light-gray mb-8">
              {businessInfo.hours.map((h, i) => (
                <li key={i}>{h.days}: {h.time}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-luxe-light-gray">
            &copy; {currentYear} {businessInfo.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-luxe-light-gray hover:text-luxe-gray transition-colors">Aviso de Privacidad</a>
            <a href="#" className="text-xs text-luxe-light-gray hover:text-luxe-gray transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
