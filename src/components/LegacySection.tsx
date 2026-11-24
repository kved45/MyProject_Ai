"use client";

import {
  ARCHITECTURAL_PILLARS,
  LEGACY_STATS,
  PROJECT_INFO,
} from "@/data/projectData";
import { EditorialReveal } from "@/components/MotionPrimitives";
import { ArchitecturalImage } from "@/components/ArchitecturalImage";

export function LegacySection() {
  return (
    <>
      {/* Section 3: Builder Legacy & Craftsmanship */}
      <section
        id="legacy"
        aria-labelledby="legacy-heading"
        className="bg-[#FAF8F5] py-20 md:py-28 lg:py-32 border-b border-[#E2DDD5]"
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Asymmetric 12-Column Editorial Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative Column (7 cols) */}
            <EditorialReveal className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-[1px] w-8 bg-[#B89758]" aria-hidden="true" />
                  <p className="eyebrow-label text-[#8C6F39]">
                    01 · Builder Legacy &amp; Craftsmanship
                  </p>
                </div>

                <h2
                  id="legacy-heading"
                  className="font-serif font-normal text-[#1A1A1A] text-[clamp(2.1rem,3.6vw,3.25rem)] leading-[1.12] tracking-[-0.015em]"
                >
                  Built on Structural Honesty and a{" "}
                  <span className="italic">Family Name</span> Since{" "}
                  {PROJECT_INFO.foundedYear}.
                </h2>

                <div className="mt-7 space-y-5 text-[#5C5852] text-[15px] sm:text-base leading-[1.75] max-w-2xl">
                  <p>
                    For nearly three decades, {PROJECT_INFO.developerName} has
                    approached residential architecture in Nagpur not as volume
                    construction, but as enduring neighborhood stewardship. Every
                    foundation, plumbing shaft, and facade joint is supervised
                    in-house—so a home feels as quiet and solid twenty years
                    after handover as it does on day one.
                  </p>
                  <p>
                    At {PROJECT_INFO.developerName}, proud members of CREDAI
                    Nagpur &amp; NAREDCO, our design team prioritizes honest
                    proportion over ostentation—delivering earthquake-resistant
                    RCC structures, cross-ventilated 2 &amp; 3 BHK homes, and
                    clear MahaRERA documentation across Nagpur&apos;s prime
                    residential corridors.
                  </p>
                </div>

                {/* Founder Signature Strip */}
                <div className="mt-9 pt-7 border-t border-[#E2DDD5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-2xl">
                  <div>
                    <p className="font-serif italic text-2xl text-[#1A1A1A]">
                      &ldquo;A residence should age with grace, not require
                      constant repair.&rdquo;
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-[#5C5852]">
                      Founding Principal · {PROJECT_INFO.developerName}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3-Column Architectural Stats Bar with 1px Vertical Dividers */}
              <div className="mt-12 lg:mt-16 pt-10 border-t border-[#E2DDD5]">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DDD5]">
                  {LEGACY_STATS.map((stat, idx) => (
                    <div
                      key={stat.label}
                      className={`${
                        idx === 0
                          ? "pb-6 sm:pb-0 sm:pr-6 lg:pr-8"
                          : idx === 1
                          ? "py-6 sm:py-0 sm:px-6 lg:px-8"
                          : "pt-6 sm:pt-0 sm:pl-6 lg:pl-8"
                      }`}
                    >
                      <p className="font-serif text-4xl sm:text-[44px] leading-none text-[#1A1A1A] tabular-spec">
                        {stat.value}
                      </p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.15em] font-medium text-[#8C6F39]">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-xs leading-[1.6] text-[#5C5852]">
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </EditorialReveal>

            {/* Right Editorial Architectural Portrait (5 cols) */}
            <EditorialReveal delay={0.12} className="lg:col-span-5">
              <figure className="border border-[#E2DDD5] bg-[#EFECE6] p-2.5 rounded-[2px]">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-[#1A1A1A]">
                  <ArchitecturalImage
                    src="/images/legacy-craft.jpg"
                    alt="Double-height fluted travertine arrival lobby with bronze screens and teakwood ceiling"
                    placeholderLabel="Double-Height Arrival Lobby"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="px-2 pt-3.5 pb-1.5 flex items-center justify-between gap-4 border-t border-[#E2DDD5]/70 mt-2.5">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#5C5852]">
                    Double-Height Arrival Lobby
                  </span>
                  <span className="text-[11px] text-[#8C6F39] tabular-spec">
                    Travertine &amp; Teak
                  </span>
                </figcaption>
              </figure>
            </EditorialReveal>
          </div>
        </div>
      </section>

      {/* Residences Architectural Showcase Band (Anchored to #residences) */}
      <section
        id="residences"
        aria-labelledby="residences-heading"
        className="bg-[#EFECE6] text-[#1A1A1A] py-20 md:py-28 border-b border-[#E2DDD5]"
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <EditorialReveal className="lg:col-span-7">
              <div className="border border-[#E2DDD5] bg-[#FAF8F5] p-2.5 rounded-[2px]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#1A1A1A]">
                  <ArchitecturalImage
                    src="/images/amenity-living.jpg"
                    alt="Expansive living and dining residence opening onto a private cantilevered balcony deck"
                    placeholderLabel="Sunlit Living & Dining Salon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </EditorialReveal>

            <EditorialReveal delay={0.1} className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-8 bg-[#B89758]" aria-hidden="true" />
                <p className="eyebrow-label text-[#8C6F39]">
                  02 · The Residences
                </p>
              </div>

              <h2
                id="residences-heading"
                className="font-serif font-normal text-[#1A1A1A] text-[clamp(2rem,3.3vw,2.9rem)] leading-[1.12] tracking-[-0.015em]"
              >
                Generous Light, Quiet Proportion, Three-Side Open Air.
              </h2>

              <p className="mt-5 text-[15px] leading-[1.7] text-[#5C5852]">
                Each residence is planned like an independent bungalow in the
                sky—featuring 10.5 ft ceiling heights, honed marble living
                spaces, acoustic double-glazed sliding walls, and private lift
                foyers.
              </p>

              <div className="mt-8 divide-y divide-[#E2DDD5] border-t border-b border-[#E2DDD5]">
                {ARCHITECTURAL_PILLARS.map((pillar) => (
                  <div key={pillar.number} className="py-4 flex gap-4">
                    <span className="text-[11px] font-medium tracking-[0.15em] text-[#B89758] tabular-spec pt-0.5">
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-[#1A1A1A]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-[13px] leading-[1.6] text-[#5C5852]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </EditorialReveal>
          </div>
        </div>
      </section>
    </>
  );
}
