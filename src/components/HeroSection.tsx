"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Award, MapPin, ShieldCheck, Building2 } from "lucide-react";
import { PROJECT_INFO } from "@/data/projectData";
import { ArchitecturalImage } from "@/components/ArchitecturalImage";

export function HeroSection() {
  const trustSpecs = [
    {
      label: "Memberships",
      value: "CREDAI Nagpur & NAREDCO",
      icon: Award,
    },
    {
      label: "Corporate Office",
      value: "Beltarodi Rd, Shatabdi Sq., Nagpur",
      icon: MapPin,
    },
    {
      label: "Flagship MahaRERA",
      value: PROJECT_INFO.reraNumber,
      icon: ShieldCheck,
    },
    {
      label: "Configurations",
      value: PROJECT_INFO.configurationsSummary,
      icon: Building2,
    },
  ];

  return (
    <section
      id="top"
      aria-label="Shriniwasa Builders & Developers LLP Hero"
      className="relative min-h-[85vh] w-full flex flex-col justify-between overflow-hidden bg-[#1A1A1A] text-[#FAF8F5]"
    >
      {/* Full-Bleed Architectural Exterior with Continuous Slow-Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#1A1A1A]">
        <motion.div
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.06 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative w-full h-full"
        >
          <ArchitecturalImage
            src="/images/hero-exterior.jpg"
            alt="Luxury residential elevation by Shriniwasa Builders & Developers LLP in Nagpur"
            placeholderLabel="Shriniwasa Luxury Elevation"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Refined Architectural Tonal Scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#161412]/72 via-[#161412]/32 to-[#161412]/88"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#161412]/75 via-[#161412]/28 to-transparent"
        />
      </div>

      {/* Top Spacer for Fixed Navbar */}
      <div className="h-20 relative z-10" />

      {/* Center-Left Editorial Headline & Actions */}
      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl opacity-100 visible">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-10 bg-[#B89758]" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#E6D5B3] font-medium">
              {PROJECT_INFO.densitySummary}
            </p>
          </div>

          <h1 className="font-serif font-normal text-[#FAF8F5] text-[clamp(2.65rem,5.4vw,4.85rem)] leading-[1.06] tracking-[-0.02em]">
            Architecture Shaped for{" "}
            <span className="italic text-[#E9D7B5]">Generational</span> Trust.
          </h1>

          <p className="mt-6 text-[#FAF8F5]/84 text-base sm:text-lg leading-[1.7] max-w-xl font-light">
            <strong className="font-medium text-[#FAF8F5]">
              {PROJECT_INFO.developerName}
            </strong>{" "}
            crafts enduring 2 &amp; 3 BHK residential landmarks across Nagpur—from
            contemporary twin-wing communities on Besa–Omkar Nagar Road to
            stately heritage residences in the heart of Mahal.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              id="hero-explore-developments-cta"
              href="#developments"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[2px] bg-[#FAF8F5] text-[#1A1A1A] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#B89758] hover:text-[#1A1A1A] transition-colors duration-300"
            >
              <span>Signature Developments</span>
              <ArrowDownRight className="w-4 h-4 stroke-[1.5]" />
            </a>

            <a
              id="hero-book-visit-cta"
              href="#book-visit"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[2px] border border-[#FAF8F5]/45 text-[#FAF8F5] bg-[#161412]/30 backdrop-blur-sm text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#FAF8F5]/15 hover:border-[#FAF8F5] transition-colors duration-300"
            >
              <span>Schedule Private Viewing</span>
            </a>
          </div>
        </div>
      </div>

      {/* Anchored Bottom Glassmorphic Trust & Corporate Spec Bar */}
      <div className="relative z-10 w-full border-t border-white/18 bg-[#161412]/68 backdrop-blur-md pb-[72px] md:pb-0 opacity-100 visible">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/15">
            {trustSpecs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.label}
                  className={`py-3.5 sm:py-5 flex items-start gap-2.5 sm:gap-3.5 ${
                    index % 2 === 1 ? "pl-3.5 sm:pl-6 lg:pl-7" : "pr-3 sm:pr-6"
                  } ${index >= 2 ? "lg:pl-7" : ""}`}
                >
                  <Icon
                    className="w-4 h-4 text-[#B89758] stroke-[1.5] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#FAF8F5]/65">
                      {spec.label}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-[#FAF8F5] tabular-spec leading-snug">
                      {spec.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
