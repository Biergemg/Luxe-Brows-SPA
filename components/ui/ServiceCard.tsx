"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ServiceCategory } from '@/types';
import { Button } from './Button';
import { whatsappMessages } from '@/lib/site';
import { generateWhatsAppLink } from '@/lib/utils';
import { Eye, Sparkles, Activity, Stethoscope, ChevronDown } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye className="w-5 h-5 text-luxe-gray" />,
  Sparkles: <Sparkles className="w-5 h-5 text-luxe-gray" />,
  Activity: <Activity className="w-5 h-5 text-luxe-gray" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-luxe-gray" />,
};

export function ServiceCard({ category }: { category: ServiceCategory }) {
  const icon = iconMap[category.iconName] || <Sparkles className="w-5 h-5 text-luxe-gray" />;
  const [openServiceId, setOpenServiceId] = useState<string | null>(category.services[0]?.id ?? null);
  const compactServices = category.id === 'combos';

  return (
    <div className="group relative overflow-hidden rounded-[28px] luxury-panel transition-all duration-500 hover:border-luxe-gray/50 hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)] flex flex-col h-full">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={category.imagePath}
          alt={category.title}
          fill
          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
            category.imagePosition === 'top' ? 'object-top' : 
            category.imagePosition === 'bottom' ? 'object-bottom' : 
            'object-center'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxe-black via-luxe-black/55 to-transparent opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-full bg-luxe-black/80 backdrop-blur-sm border border-white/10">
              {icon}
            </div>
            <h3 className="text-2xl font-medium text-white">{category.title}</h3>
          </div>
          <p className="text-sm text-luxe-light-gray max-w-xl whitespace-pre-line">{category.description}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between gap-4 mb-5">
          <p className="text-xs uppercase tracking-[0.28em] text-luxe-gray">Servicios y precios</p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="space-y-3 mb-8 flex-grow">
          {category.services.map((service) => {
            const isOpen = openServiceId === service.id;
            const staticService = compactServices && !service.description && !service.note;

            if (staticService) {
              return (
                <div
                  key={service.id}
                  className="rounded-2xl border border-white/6 bg-luxe-black/30 px-5 py-4 transition-all duration-300 hover:border-white/15 hover:bg-luxe-black/40"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-white text-sm md:text-base font-medium">{service.name}</span>
                    {service.price ? (
                      <span className="inline-flex items-center rounded-full border border-luxe-gray/25 bg-luxe-gray/10 px-3 py-1 text-sm font-medium text-white">
                        {service.price}
                      </span>
                    ) : null}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={service.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-luxe-gray/40 bg-luxe-black/60 shadow-[0_16px_40px_rgba(0,0,0,0.22)]'
                    : 'border-white/6 bg-luxe-black/30 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
                  onClick={() => setOpenServiceId(isOpen ? null : service.id)}
                  aria-expanded={isOpen}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white text-sm md:text-base font-medium">{service.name}</span>
                      {service.highlight && (
                        <span className="rounded-full border border-luxe-gray/30 bg-luxe-gray/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-luxe-gray">
                          {service.highlight}
                        </span>
                      )}
                    </div>
                    {service.price && !isOpen && (
                      <span className="mt-2 inline-flex text-xs text-luxe-light-gray">{service.price}</span>
                    )}
                  </div>
                  <ChevronDown className={`h-4 w-4 text-luxe-gray transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 border-t border-white/6">
                      {service.price && (
                        <div className="inline-flex items-center rounded-full border border-luxe-gray/30 bg-luxe-gray/10 px-3 py-1 text-sm font-medium text-white mb-3">
                          {service.price}
                        </div>
                      )}
                      {service.description ? (
                        <p className="text-sm leading-relaxed text-luxe-light-gray whitespace-pre-line">{service.description}</p>
                      ) : null}
                      {service.note && (
                        <p className="text-xs leading-relaxed text-luxe-gray mt-3 whitespace-pre-line">{service.note}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Button variant="outline" size="sm" className="w-full mt-auto" asChild>
          <a href={generateWhatsAppLink(whatsappMessages.service(category.title))} target="_blank" rel="noopener noreferrer">
            Solicitar asesoría
          </a>
        </Button>
      </div>
    </div>
  );
}
