import React from 'react';
import { FAQ } from '@/types';
import { Plus } from 'lucide-react';

export function FAQAccordion({ faq }: { faq: FAQ }) {
  return (
    <details className="group border-b border-white/10 [&_summary::-webkit-details-marker]:hidden bg-transparent">
      <summary className="flex cursor-pointer items-center justify-between py-5 text-white font-medium hover:text-luxe-gray transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-luxe-gray">
        <span className="pr-6 text-base leading-snug">{faq.question}</span>
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-luxe-black group-open:border-luxe-gray transition-colors">
          <Plus className="h-4 w-4 transition-transform duration-300 group-open:rotate-45 group-open:text-luxe-gray text-luxe-light-gray" />
        </span>
      </summary>
      <div className="overflow-hidden bg-transparent">
        <div className="pb-6 pr-12">
          <p className="text-sm text-luxe-light-gray leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </details>
  );
}
