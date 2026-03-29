import React from 'react';

export function CompromisoLuxe() {
  const pilares = [
    {
      title: "Atención personalizada",
      desc: "Escuchamos lo que buscas para orientarte con calma."
    },
    {
      title: "Trabajo limpio y seguro",
      desc: "Procuramos que cada cita se sienta limpia, ordenada y cómoda."
    },
    {
      title: "Acabados a tu estilo",
      desc: "Buscamos que el resultado se sienta natural y vaya contigo."
    },
    {
      title: "Experiencia cómoda",
      desc: "Un espacio pensado para que te sientas en confianza."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-luxe-dark-gray border-y border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="w-full md:w-1/3">
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6 leading-tight">
              Nuestro compromiso <br />
              <span className="text-luxe-gray italic">contigo</span>
            </h2>
            <div className="w-12 h-[1px] bg-luxe-gray mb-6" />
            <p className="text-luxe-light-gray text-base leading-relaxed">
              Queremos que desde el momento en que agendas, tu cita se sienta clara, tranquila y acompañada.
            </p>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pl-0 md:pl-10 border-l-0 md:border-l border-white/10">
            {pilares.map((pilar, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-luxe-gray text-sm font-serif font-medium tracking-widest">0{idx + 1}</span>
                  <div className="w-8 h-px bg-white/10" />
                </div>
                <h4 className="text-white font-medium text-lg">{pilar.title}</h4>
                <p className="text-luxe-light-gray text-sm leading-relaxed">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
