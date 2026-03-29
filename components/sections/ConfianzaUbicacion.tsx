import React from 'react';
import { Heart, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export function ConfianzaUbicacion() {
  const trustItems = [
    {
      icon: <Heart className="w-6 h-6 text-luxe-gray" />,
      title: "Atención personalizada",
      desc: "Cada servicio se adapta a lo que buscas"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-luxe-gray" />,
      title: "Trabajo limpio y cuidadoso",
      desc: "Procuramos limpieza, orden y cuidado en cabina"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-luxe-gray" />,
      title: "Acabados a tu estilo",
      desc: "Resultados pensados para lo que a ti te gusta"
    },
    {
      icon: <MapPin className="w-6 h-6 text-luxe-gray" />,
      title: "Ubicación cómoda",
      desc: "Plaza La Fe con fácil acceso y estacionamiento"
    }
  ];

  return (
    <section className="bg-luxe-black border-y border-white/5 py-16 relative overflow-hidden" aria-label="Indicadores de Confianza">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_55%)]" />
      <div className="grain-overlay" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="section-kicker">Por qué elegirnos</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {trustItems.map((item, i) => (
            <div key={i} className="luxury-panel rounded-[24px] px-6 py-7 flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:-translate-y-1">
              <div className="p-3 rounded-full bg-luxe-black border border-white/5 shadow-inner">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-medium text-sm md:text-base mb-2">{item.title}</h4>
                <p className="text-luxe-light-gray text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
