"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, MapPin, Phone, ShieldCheck } from "lucide-react";
import { BROCHURE_PROJECTS } from "@/data/projectData";
import { EditorialReveal } from "@/components/MotionPrimitives";
import { ArchitecturalImage } from "@/components/ArchitecturalImage";

export function SignatureDevelopmentsSection() {
  const projects = [
    BROCHURE_PROJECTS["royal-dream-city-2"],
    BROCHURE_PROJECTS["royal-heritage"],
  ];

  return (
    <section
      id="developments"
      aria-labelledby="signature-developments-heading"
      className="bg-[#EFECE6] text-[#1A1A1A] py-20 md:py-28 lg:py-32 border-b border-[#E2DDD5]"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <EditorialReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#E2DDD5]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#B89758]" aria-hidden="true" />
              <p className="eyebrow-label text-[#8C6F39]">
                02 · Signature Developments
              </p>
            </div>
            <h2
              id="signature-developments-heading"
              className="font-serif font-normal text-[#1A1A1A] text-[clamp(2.1rem,3.6vw,3.25rem)] leading-[1.12] tracking-[-0.015em]"
            >
              Two Distinct Nagpur Addresses,{" "}
              <span className="italic">One Standard of Craft.</span>
            </h2>
          </div>

          <p className="text-[15px] text-[#5C5852] leading-[1.7] max-w-md">
            Explore our featured ongoing 2 &amp; 3 BHK developments—each
            presented in its own brochure-curated architectural experience with
            verified floor plates, amenities, and direct site desks.
          </p>
        </EditorialReveal>

        {/* Two Interactive Project Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <EditorialReveal key={project.slug} delay={idx * 0.1}>
              <article
                id={`signature-card-${project.slug}`}
                className="group h-full border border-[#E2DDD5] bg-[#FAF8F5] rounded-[2px] flex flex-col overflow-hidden transition-colors duration-300 hover:border-[#B89758]"
              >
                {/* Project Visual Header */}
                <Link
                  href={project.route}
                  className="relative aspect-[16/10] w-full block overflow-hidden bg-[#1A1A1A]"
                >
                  <ArchitecturalImage
                    src={project.heroImage}
                    alt={`${project.title} — ${project.subtitle} in ${project.locationShort}`}
                    placeholderLabel={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#161412]/75 via-[#161412]/15 to-transparent"
                  />

                  {/* Top-Left Brochure Theme Palette Swatch Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-[2px] bg-[#FAF8F5]/92 backdrop-blur-sm border border-[#E2DDD5] flex items-center gap-2">
                    <span className="flex items-center gap-1" aria-hidden="true">
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/15"
                        style={{ backgroundColor: project.swatchColors.canvas }}
                      />
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: project.swatchColors.primary }}
                      />
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: project.swatchColors.accent }}
                      />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#1A1A1A] font-medium">
                      {project.badgeText}
                    </span>
                  </div>

                  {/* Bottom-Left Title Overlay */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[#E6D5B3]">
                        {project.subtitle}
                      </p>
                      <h3 className="font-serif text-3xl sm:text-[34px] leading-tight text-[#FAF8F5] mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm sm:text-[15px] text-[#5C5852] leading-[1.7]">
                      {project.cardSummary}
                    </p>

                    {/* Structured Key Specs */}
                    <div className="mt-6 pt-5 border-t border-[#E2DDD5] space-y-3 text-xs sm:text-[13px]">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-[#B89758] stroke-[1.5] mt-0.5 shrink-0" />
                        <span className="text-[#1A1A1A] leading-snug">
                          {project.location}
                        </span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Building2 className="w-4 h-4 text-[#B89758] stroke-[1.5] mt-0.5 shrink-0" />
                        <span className="text-[#5C5852] tabular-spec">
                          {project.floorsSummary} · {project.configurationsSummary}
                        </span>
                      </div>

                      {project.reraNumber ? (
                        <div className="flex items-center gap-2.5">
                          <ShieldCheck className="w-4 h-4 text-[#B89758] stroke-[1.5] shrink-0" />
                          <span className="text-[#1A1A1A] font-medium tabular-spec">
                            MahaRERA Reg. No.: {project.reraNumber}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2.5">
                          <ShieldCheck className="w-4 h-4 text-[#B89758] stroke-[1.5] shrink-0" />
                          <span className="text-[#1A1A1A]">
                            {project.developerCredit}
                            {project.promoterCredit
                              ? ` · ${project.promoterCredit}`
                              : ""}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#B89758] stroke-[1.5] shrink-0" />
                        <span className="text-[#5C5852] tabular-spec">
                          Direct Desk:{" "}
                          {project.contacts.map((c) => c.display).join(" / ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="mt-7 pt-5 border-t border-[#E2DDD5] flex items-center justify-between gap-4">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#8C6F39]">
                      {project.units.length} Verified Flat Layouts
                    </span>

                    <Link
                      id={`explore-${project.slug}`}
                      href={project.route}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-[2px] bg-[#1A1A1A] text-[#FAF8F5] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#B89758] hover:text-[#1A1A1A] transition-colors duration-300"
                    >
                      <span>Explore Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                    </Link>
                  </div>
                </div>
              </article>
            </EditorialReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
