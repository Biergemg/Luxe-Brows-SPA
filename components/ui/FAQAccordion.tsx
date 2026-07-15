import React from 'react';
import { FAQ } from '@/types';
import { Plus } from 'lucide-react';

export function FAQAccordion({ faq }: { faq: FAQ }) {
  return (
    <details className="group border-b border-nude-text/10 [&_summary::-webkit-details-marker]:hidden bg-transparent">
      <summary className="flex cursor-pointer items-center justify-between py-5 text-nude-text font-medium hover:text-nude-accent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-nude-accent">
        <span className="pr-6 text-base leading-snug">{faq.question}</span>
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-nude-text/10 bg-nude-surface group-open:border-nude-accent transition-colors">
          <Plus className="h-4 w-4 transition-transform duration-300 group-open:rotate-45 group-open:text-nude-accent text-nude-muted" />
        </span>
      </summary>
      <div className="overflow-hidden bg-transparent">
        <div className="pb-6 pr-12">
          <p className="text-sm text-nude-muted leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </details>
  );
}
