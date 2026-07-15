import React from 'react';
import { businessInfo } from '@/data/businessInfo';
import { MapPin, Clock, Car, ExternalLink, CreditCard } from 'lucide-react';
import { Button } from '../ui/Button';
import { getBookingLink } from '@/lib/utils';
import { getGoogleMapsEmbedUrl, getGoogleMapsUrl } from '@/lib/maps';

const mapEmbedSrc = getGoogleMapsEmbedUrl();
const mapsUrl = getGoogleMapsUrl();

export function UbicacionFacilidades() {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-nude-surface border-t border-nude-text/10 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-nude-text mb-10">
              Ubicación
            </h2>

            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="mt-1">
                  <MapPin className="w-6 h-6 text-nude-accent" />
                </div>
                <div>
                  <h4 className="text-nude-text font-medium mb-1">Dirección</h4>
                  <p className="text-nude-muted">{businessInfo.address.location}{businessInfo.address.unit ? ` · ${businessInfo.address.unit}` : ''}</p>
                  <p className="text-nude-muted">{businessInfo.address.street}</p>
                  <p className="text-nude-muted">{businessInfo.address.neighborhood}</p>
                  <p className="text-nude-muted">{businessInfo.address.city}, {businessInfo.address.state}</p>
                </div>
              </div>

              <div id="horarios" className="flex gap-4 scroll-mt-20">
                <div className="mt-1">
                  <Clock className="w-6 h-6 text-nude-accent" />
                </div>
                <div>
                  <h4 className="text-nude-text font-medium mb-1">Horarios</h4>
                  <p className="text-nude-muted">Lunes a sábado: 9:00 - 18:00</p>
                  <p className="text-nude-muted">Domingo: Cerrado</p>
                  <p className="text-nude-muted">Atención con previa cita</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Car className="w-6 h-6 text-nude-accent" />
                </div>
                <div>
                  <h4 className="text-nude-text font-medium mb-1">Facilidades</h4>
                  <p className="text-nude-muted">Estacionamiento dentro de la plaza y acceso cómodo para tu cita.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <CreditCard className="w-6 h-6 text-nude-accent" />
                </div>
                <div>
                  <h4 className="text-nude-text font-medium mb-1">Métodos de pago</h4>
                  <p className="text-nude-muted">Efectivo, transferencia y tarjeta (opción contactless).</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary-nude" size="lg" className="w-full sm:w-auto" asChild>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  Abrir mapa exacto <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline-nude" size="lg" className="w-full sm:w-auto" asChild>
                <a href={getBookingLink()} target="_blank" rel="noopener noreferrer">
                  Reservar cita
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-[24px] border border-nude-text/10 bg-nude-bg shadow-[0_20px_80px_rgba(58,44,34,0.18)]">
              <iframe
                title="Mapa de Luxe Brows & Spa"
                src={mapEmbedSrc}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
