import { faqs } from "@/data/faqs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-[#f6f2ec] py-24 md:py-36" aria-labelledby="faq-title">
      <div className="luxe-container grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
        <div data-reveal>
          <p className="luxe-eyebrow mb-6 text-[#715132]">05 / Antes de tu cita</p>
          <h2 id="faq-title" className="luxe-serif max-w-[520px] text-[clamp(3.5rem,6vw,6.4rem)] leading-[1.06] tracking-[-.07em]">Preguntas <em className="text-[#a1825c]">frecuentes.</em></h2>
          <p className="mt-8 max-w-sm text-sm leading-8 text-[#6d6258]">Todo lo que necesitas saber antes de visitarnos.</p>
        </div>
        <div data-reveal className="border-t border-[#241e1a]/20">
          {faqs.map((item) => <FAQAccordion key={item.id} faq={item}/>)}
        </div>
      </div>
    </section>
  );
}
