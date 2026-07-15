import Image from 'next/image';
import { getBookingLink } from '@/lib/utils';

export function FloatingReserveButton() {
  return (
    <a
      href={getBookingLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-nude-text/15 bg-nude-bg/95 text-nude-text shadow-[0_8px_30px_rgba(58,44,34,0.18)] backdrop-blur-md transition-transform hover:scale-110 hover:shadow-[0_10px_36px_rgba(58,44,34,0.24)] focus:outline-none focus:ring-2 focus:ring-nude-accent/40 focus:ring-offset-2 focus:ring-offset-nude-bg"
      aria-label="Reservar cita en línea"
    >
      <div className="absolute inset-0 rounded-full bg-nude-accent/15 animate-ping" />
      <div className="absolute inset-[3px] rounded-full border border-nude-text/10" />
      <Image
        src="/images/brand/logo-round.png"
        alt="Luxe Brows & Spa"
        width={44}
        height={44}
        className="relative z-10 h-11 w-11 object-contain"
        quality={100}
        unoptimized
      />
    </a>
  );
}
