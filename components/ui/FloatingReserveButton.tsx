import Image from 'next/image';
import { getBookingLink } from '@/lib/utils';

export function FloatingReserveButton() {
  return (
    <a
      href={getBookingLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-16 w-[148px] items-center justify-center rounded-full border border-white/15 bg-luxe-black/92 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-transform hover:scale-105 hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-luxe-black"
      aria-label="Reservar cita en línea"
    >
      <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
      <Image
        src="/images/brand/logo-wordmark.png"
        alt="Luxe Brows & Spa"
        width={120}
        height={82}
        className="relative z-10 h-auto w-[108px] object-contain"
        quality={100}
        unoptimized
      />
    </a>
  );
}
