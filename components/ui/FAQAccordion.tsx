import { FAQ } from "@/types";
import { Plus } from "lucide-react";

export function FAQAccordion({ faq }: { faq: FAQ }) {
  return (
    <details className="group border-b border-[#241e1a]/20">
      <summary className="flex min-h-[84px] cursor-pointer list-none items-center justify-between gap-6 py-6 text-left marker:hidden">
        <span className="luxe-serif text-xl leading-7 tracking-[-.025em] text-[#302720] transition-colors group-hover:text-[#926e4e] sm:text-2xl">{faq.question}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#241e1a]/20"><Plus className="luxe-caret text-[#8a704f]" size={18}/></span>
      </summary>
      <div className="max-w-2xl pb-8 pr-12 text-sm leading-8 text-[#6e6155]">{faq.answer}</div>
    </details>
  );
}
