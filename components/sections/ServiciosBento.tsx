import React from 'react';
import { serviceCategories } from '@/data/services';
import { ServiceCard } from '../ui/ServiceCard';

export function ServiciosBento() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-luxe-black relative scroll-mt-20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxe-gray/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6">
              Menú de <span className="text-luxe-gray italic">servicios</span>
            </h2>
            <p className="text-luxe-light-gray text-base md:text-lg leading-relaxed">
              Revisa cada categoría, abre los servicios y consulta precios, detalles y combinaciones de forma clara.
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
