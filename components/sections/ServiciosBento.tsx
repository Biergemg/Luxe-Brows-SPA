import React from 'react';
import { serviceCategories } from '@/data/services';
import { ServiceCard } from '../ui/ServiceCard';

export function ServiciosBento() {
  return (
    <section id="servicios" className="relative scroll-mt-20 bg-luxe-black py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxe-gray/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-14 max-w-3xl md:mb-16">
          <span className="section-kicker mb-5 inline-flex">Servicios</span>
          <div className="mb-6 h-px w-20 bg-gradient-to-r from-luxe-gray to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-16">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6">
              Menú de <span className="text-luxe-gray italic">servicios</span>
            </h2>
            <p className="text-luxe-light-gray text-base md:text-lg leading-relaxed">
              Explora cada categoría y selecciona tu tratamiento ideal. Si así lo requieres, solicita asesoría por WhatsApp previo a tu reserva.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {serviceCategories.map((category) => (
            <ServiceCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
