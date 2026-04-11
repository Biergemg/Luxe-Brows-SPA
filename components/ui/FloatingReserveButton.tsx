import Image from 'next/image';
import { getBookingLink } from '@/lib/utils';

export function FloatingReserveButton() {
  return (
    <a
      href={getBookingLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white shadow-[0_8px_35px_rgba(255,255,255,0.22)] transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-luxe-black"
      aria-label="Reservar cita en línea"
    >
      <div className="absolute inset-0 rounded-full bg-white/25 animate-ping" />
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white">
        <Image
          src="/images/brand/logo-round.png"
          alt="Luxe Brows & Spa"
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
          quality={100}
          unoptimized
        />
      </div>
    </a>
  );
}
