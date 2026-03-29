import React from 'react';
import { Testimonial } from '@/types';
import { Star } from 'lucide-react';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col h-full rounded-sm bg-luxe-black p-8 border border-white/5 transition-all hover:border-luxe-gray/30 cinematic-shadow relative overflow-hidden group">
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 rounded-full bg-luxe-gray/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50 pointer-events-none" />

      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? 'fill-luxe-gray text-luxe-gray' : 'text-white/20'}`}
          />
        ))}
      </div>

      <blockquote className="text-luxe-white/90 leading-relaxed text-sm flex-grow mb-6 relative z-10">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-auto border-t border-white/10 pt-4 relative z-10">
        <p className="font-medium text-white">{testimonial.name}</p>
        <p className="text-xs text-luxe-gray uppercase tracking-wider mt-1">{testimonial.service}</p>
      </div>
    </div>
  );
}
