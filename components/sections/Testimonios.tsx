import { testimonials } from "@/data/testimonials";
import { Star, ArrowUpRight } from "lucide-react";
import { getBookingLink } from "@/lib/utils";

export function Testimonios() {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-[#211b17] py-24 text-[#f5eee3] md:py-36" aria-labelledby="testimonios-title">
      <div className="pointer-events-none absolute -right-16 bottom-0 luxe-serif text-[clamp(18rem,34vw,42rem)] leading-none tracking-[-.1em] text-[#e9d6bb]/[.035]" aria-hidden="true">L</div>
      <div className="luxe-container relative z-10">
        <div data-reveal className="mb-15 flex flex-col justify-between gap-7 border-b border-white/15 pb-10 lg:mb-20 lg:flex-row lg:items-end">
          <div>
            <p className="luxe-eyebrow mb-6 text-[#c6a780]">02 / Lo que cuentan de Luxe</p>
            <h2 id="testimonios-title" className="luxe-serif max-w-4xl text-[clamp(3.3rem,6vw,6.7rem)] leading-[1.05] tracking-[-.07em]">La confianza se <em className="text-[#caa981]">siente.</em></h2>
          </div>
          <a href={getBookingLink()} target="_blank" rel="noopener noreferrer" className="luxe-link shrink-0 self-start text-[#e4c8a7]">Reserva tu experiencia <ArrowUpRight size={17}/></a>
        </div>
        <div className="grid gap-[1px] bg-white/15 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <article key={item.id} data-reveal className="group flex min-h-[315px] flex-col justify-between bg-[#211b17] px-7 py-9 transition-colors duration-500 hover:bg-[#30271f] md:min-h-[355px] md:px-11 md:py-12">
              <div className="flex items-start justify-between gap-5">
                <div role="img" className="flex gap-1" aria-label={item.rating + " de 5 estrellas"}>{Array.from({length:item.rating}).map((_, i) => <Star key={i} size={12} fill="currentColor" className="text-[#caa981]"/>)}</div>
                <span className="luxe-serif text-5xl italic leading-none text-[#caa981]/50" aria-hidden="true">“</span>
              </div>
              <blockquote className="luxe-serif max-w-[550px] py-7 text-[clamp(1.15rem,2vw,1.7rem)] leading-[1.55] tracking-[-.02em] text-[#eee4d5]">“{item.quote}”</blockquote>
              <div className="flex items-center justify-between border-t border-white/15 pt-5">
                <span className="text-xs font-medium tracking-[.08em] text-[#e6d7c2]">{item.name}</span>
                <span className="text-[10px] uppercase tracking-[.15em] text-[#caa981]">{item.service} · {String(index + 1).padStart(2,"0")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
