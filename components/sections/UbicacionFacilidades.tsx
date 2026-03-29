import React from 'react';
import { businessInfo } from '@/data/businessInfo';
import { MapPin, Clock, Car, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { generateWhatsAppLink } from '@/lib/utils';
import { getGoogleMapsEmbedUrl, getGoogleMapsUrl } from '@/lib/maps';
import { whatsappMessages } from '@/lib/site';

const mapEmbedSrc = getGoogleMapsEmbedUrl();
const mapsUrl = getGoogleMapsUrl();

export function UbicacionFacilidades() {
  return (
    <section id="ubicacion" className="py-24 md:py-32 bg-luxe-dark-gray border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6">
              Ubicación <br />
              <span className="text-luxe-gray italic">exacta y fácil de encontrar</span>
            </h2>
            <p className="text-luxe-light-gray text-lg mb-10">
              Estamos en Plaza LA FÉ, Local 1. Aquí te dejamos la dirección completa y un acceso directo al mapa para que llegar sea simple desde el primer click.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="mt-1">
                  <MapPin className="w-6 h-6 text-luxe-gray" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Dirección</h4>
                  <p className="text-luxe-light-gray">{businessInfo.address.location}{businessInfo.address.unit ? ` · ${businessInfo.address.unit}` : ''}</p>
                  <p className="text-luxe-light-gray">{businessInfo.address.street}</p>
                  <p className="text-luxe-light-gray">{businessInfo.address.neighborhood}</p>
                  <p className="text-luxe-light-gray">{businessInfo.address.city}, {businessInfo.address.state}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Clock className="w-6 h-6 text-luxe-gray" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Horarios de Atención</h4>
                  {businessInfo.hours.map((h, i) => (
                    <p key={i} className="text-luxe-light-gray">
                      <span className="inline-block w-32">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Car className="w-6 h-6 text-luxe-gray" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Facilidades</h4>
                  <p className="text-luxe-light-gray">Estacionamiento dentro de la plaza y acceso cómodo para tu cita.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  Abrir mapa exacto <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href={generateWhatsAppLink(whatsappMessages.location)} target="_blank" rel="noopener noreferrer">
                  Pedir ubicación por WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-luxe-black shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
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
