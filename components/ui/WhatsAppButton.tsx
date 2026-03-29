import React from 'react';
import { generateWhatsAppLink } from '@/lib/utils';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 relative z-10 fill-current transition-transform group-hover:rotate-12">
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.49 0 .14 5.35.14 11.93c0 2.1.55 4.15 1.59 5.95L0 24l6.28-1.65a11.9 11.9 0 0 0 5.78 1.48h.01c6.57 0 11.92-5.35 11.93-11.93a11.84 11.84 0 0 0-3.48-8.42ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.73.98 1-3.64-.24-.37a9.88 9.88 0 0 1-1.53-5.24c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.13 1.03 7 2.9a9.86 9.86 0 0 1 2.91 7c0 5.47-4.46 9.92-9.93 9.92Zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.73-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.23-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.5 1.7.64.71.22 1.35.19 1.86.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_0_rgba(37,211,102,0.5)] transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-luxe-black group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      <WhatsAppIcon />
    </a>
  );
}
