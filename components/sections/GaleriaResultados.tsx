import React from 'react';
import Image from 'next/image';
import { gallery } from '@/data/gallery';

export function GaleriaResultados() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-luxe-black relative scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6">
            Resultados <span className="text-luxe-gray italic">reales</span>
          </h2>
          <p className="text-luxe-light-gray text-lg">
            Trabajos realizados con cuidado, precisión y enfoque en la naturalidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gallery.map((item) => (
            <div key={item.id} className="group relative aspect-[4/5] rounded-sm overflow-hidden border border-white/5 cinematic-shadow">
              <Image 
                src={item.imagePath} 
                alt={item.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxe-black to-transparent opacity-80 mix-blend-multiply" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-luxe-gray text-xs uppercase tracking-widest font-medium block mb-1">{item.category}</span>
                <p className="text-white text-sm font-medium">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
