import React from 'react';
import Image from 'next/image';

export function AutoridadTecnica() {
  return (
    <section className="py-24 md:py-32 bg-luxe-dark-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6">
                Un servicio pensado <br />
                <span className="text-luxe-gray italic text-2xl md:text-4xl">para que te sientas bien</span>
              </h2>
              <p className="text-luxe-light-gray text-lg leading-relaxed mb-6">
                Cada cita se realiza con cuidado, limpieza y atención personalizada. La idea es acompañarte para que elijas lo que mejor va contigo y con tu rutina.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-luxe-gray pl-4">
                <p className="text-sm font-medium text-white mb-1">Atención</p>
                <p className="text-xs text-luxe-light-gray uppercase tracking-widest">Personalizada</p>
              </div>
              <div className="border-l-2 border-luxe-gray pl-4">
                <p className="text-sm font-medium text-white mb-1">Detalle</p>
                <p className="text-xs text-luxe-light-gray uppercase tracking-widest">En cada cita</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] md:aspect-square relative rounded-sm overflow-hidden border border-white/10 cinematic-shadow group">
              <Image
                src="/images/spa-ambient.webp"
                alt="Servicio de cuidado personal en un ambiente cómodo"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-luxe-black/20 mix-blend-multiply group-hover:bg-luxe-black/10 transition-colors duration-500" />
            </div>
            <div className="absolute -bottom-10 -left-6 md:-left-12 bg-luxe-black/90 backdrop-blur-md p-6 border border-white/10 rounded-sm shadow-2xl max-w-[280px]">
              <p className="text-sm text-luxe-light-gray italic mb-2">&ldquo;Una cita tranquila, cuidada y hecha con atención.&rdquo;</p>
              <div className="w-8 h-[1px] bg-luxe-gray" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
