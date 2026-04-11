import React from 'react';
import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '../ui/TestimonialCard';

export function Testimonios() {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-luxe-black relative scroll-mt-20 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-luxe-gray/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-6">
              Experiencias <span className="text-luxe-gray italic">Luxe</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
