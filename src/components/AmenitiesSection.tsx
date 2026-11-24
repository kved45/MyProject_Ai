"use client";

import { Building, ShieldCheck, Sparkles, Sun, Trees, Zap } from "lucide-react";
import {
  AMENITY_PHOTO_CARDS,
  INFRASTRUCTURE_AMENITIES,
} from "@/data/projectData";
import { EditorialReveal } from "@/components/MotionPrimitives";
import { ArchitecturalImage } from "@/components/ArchitecturalImage";

const PHOTO_ICONS = {
  building: Building,
  sparkles: Sparkles,
  trees: Trees,
} as const;

const INFRA_ICONS = {
  zap: Zap,
  sun: Sun,
  shield: ShieldCheck,
} as const;

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="bg-[#EFECE6] text-[#1A1A1A] py-20 md:py-28 lg:py-32 border-b border-[#E2DDD5]"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <EditorialReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#E2DDD5]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#B89758]" aria-hidden="true" />
              <p className="eyebrow-label text-[#8C6F39]">
                04 · Curated Lifestyle &amp; Sustainable Systems
              </p>
            </div>
            <h2
              id="amenities-heading"
              className="font-serif font-normal text-[#1A1A1A] text-[clamp(2.1rem,3.6vw,3.25rem)] leading-[1.12] tracking-[-0.015em]"
            >
              Quiet Conveniences Designed for{" "}
              <span className="italic">Unrushed</span> Living.
            </h2>
          </div>

          <p className="text-[15px] text-[#5C5852] leading-[1.7] max-w-md">
            Rather than overcrowded gimmicks, every shared space is scaled for
            genuine family comfort—pairing hospitality-grade interiors with
            solar common-area power and reliable engineering.
          </p>
        </EditorialReveal>

        {/* Editorial 4:3 Architectural Photo Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {AMENITY_PHOTO_CARDS.map((item, idx) => {
            const Icon = PHOTO_ICONS[item.iconName];
            return (
              <EditorialReveal
                key={item.id}
                delay={idx * 0.08}
                className="group border border-[#E2DDD5] bg-[#FAF8F5] rounded-[2px] flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1A1A1A]">
                  <ArchitecturalImage
                    src={item.image}
                    alt={item.imageAlt}
                    placeholderLabel={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#E2DDD5]">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[#8C6F39] font-medium">
                        {item.tag}
                      </span>
                      <Icon
                        className="w-4 h-4 text-[#B89758] stroke-[1.5]"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="font-serif text-2xl text-[#1A1A1A] leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#5C5852] leading-[1.68]">
                      {item.description}
                    </p>
                  </div>

                  <p className="mt-5 pt-3.5 border-t border-[#E2DDD5] text-[11px] uppercase tracking-[0.14em] text-[#1A1A1A] tabular-spec">
                    {item.metric}
                  </p>
                </div>
              </EditorialReveal>
            );
          })}
        </div>

        {/* 3-Column Engineering & Sustainability Strip (EV Charging, 100% Solar, 3-Tier Security) */}
        <EditorialReveal
          delay={0.12}
          className="mt-10 border border-[#E2DDD5] bg-[#FAF8F5] rounded-[2px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E2DDD5]">
            {INFRASTRUCTURE_AMENITIES.map((infra) => {
              const Icon = INFRA_ICONS[infra.iconName];
              return (
                <div key={infra.id} className="p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="w-10 h-10 rounded-[2px] border border-[#E2DDD5] bg-[#EFECE6] flex items-center justify-center">
                        <Icon
                          className="w-4 h-4 text-[#8C6F39] stroke-[1.5]"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[#5C5852]">
                        {infra.subtitle}
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif text-2xl text-[#1A1A1A]">
                      {infra.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-[#5C5852] leading-[1.68]">
                      {infra.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </EditorialReveal>
      </div>
    </section>
  );
}
