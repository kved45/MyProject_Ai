"use client";

import { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { PROJECT_INFO, getWhatsAppUrl } from "@/data/projectData";
import { EditorialReveal } from "@/components/MotionPrimitives";

interface VisitFormFieldsProps {
  idPrefix: string;
  compact?: boolean;
  onSuccess?: () => void;
}

export function VisitBookingForm({
  idPrefix,
  compact = false,
  onSuccess,
}: VisitFormFieldsProps) {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [configuration, setConfiguration] = useState(
    "Royal Dream City-2 — 3 BHK (1,433–1,457 Sq.Ft.)"
  );
  const [visitDate, setVisitDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobile.trim() || !visitDate) return;
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <div
        id={`${idPrefix}-confirmation`}
        className="p-6 sm:p-8 border border-[#E2DDD5] bg-[#FAF8F5] rounded-[2px] space-y-4"
      >
        <div className="flex items-center gap-2.5 text-[#1F6F4A]">
          <CheckCircle2 className="w-5 h-5 stroke-[1.5]" />
          <p className="text-[11px] uppercase tracking-[0.15em] font-medium">
            Private Viewing Reserved
          </p>
        </div>

        <h3 className="font-serif text-3xl text-[#1A1A1A]">
          We look forward to welcoming you, {fullName}.
        </h3>

        <p className="text-sm text-[#5C5852] leading-[1.7]">
          Our Senior Residence Advisor at {PROJECT_INFO.developerName} will
          confirm your private walkthrough for{" "}
          <strong className="font-medium text-[#1A1A1A]">{configuration}</strong>{" "}
          on{" "}
          <strong className="font-medium text-[#1A1A1A] tabular-spec">
            {visitDate}
          </strong>{" "}
          at{" "}
          <span className="tabular-spec font-medium text-[#1A1A1A]">
            +91 {mobile}
          </span>
          .
        </p>

        <div className="pt-3 flex flex-wrap items-center gap-3">
          <a
            href={getWhatsAppUrl(
              `Hello Shriniwasa Developers, I just scheduled a site visit for ${configuration} on ${visitDate} under ${fullName}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[2px] bg-[#1F6F4A] text-[#FAF8F5] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#175739] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Confirm on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFullName("");
              setMobile("");
              setVisitDate("");
            }}
            className="px-4 py-2.5 rounded-[2px] border border-[#E2DDD5] text-[11px] uppercase tracking-[0.15em] text-[#5C5852] hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"
          >
            Modify Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id={`${idPrefix}-form`}
      onSubmit={handleSubmit}
      className={compact ? "space-y-4" : "space-y-5"}
    >
      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-5"}>
        <div>
          <label
            htmlFor={`${idPrefix}-name`}
            className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5852] mb-2"
          >
            Full Name *
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g., Rohan Kulkarni"
            className="w-full px-4 py-3 rounded-[2px] border border-[#E2DDD5] bg-white text-sm text-[#1A1A1A] placeholder:text-[#5C5852]/55 focus:outline-none focus:border-[#B89758] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-mobile`}
            className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5852] mb-2"
          >
            Mobile Number *
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3.5 border border-r-0 border-[#E2DDD5] bg-[#EFECE6] text-xs font-medium text-[#5C5852] tabular-spec rounded-l-[2px]">
              +91
            </span>
            <input
              id={`${idPrefix}-mobile`}
              type="tel"
              required
              pattern="[0-9\s\-]{10,13}"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="98220 00000"
              className="w-full px-4 py-3 rounded-r-[2px] border border-[#E2DDD5] bg-white text-sm text-[#1A1A1A] tabular-spec placeholder:text-[#5C5852]/55 focus:outline-none focus:border-[#B89758] transition-colors"
            />
          </div>
        </div>
      </div>

      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-5"}>
        <div>
          <label
            htmlFor={`${idPrefix}-config`}
            className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5852] mb-2"
          >
            Preferred Configuration *
          </label>
          <select
            id={`${idPrefix}-config`}
            value={configuration}
            onChange={(e) => setConfiguration(e.target.value)}
            className="w-full px-4 py-3 rounded-[2px] border border-[#E2DDD5] bg-white text-sm text-[#1A1A1A] focus:outline-none focus:border-[#B89758] transition-colors"
          >
            <option value="Royal Dream City-2 — 2 BHK (1,091–1,120 Sq.Ft.)">
              Royal Dream City-2 — 2 BHK (Besa–Omkar Nagar Rd)
            </option>
            <option value="Royal Dream City-2 — 3 BHK (1,433–1,457 Sq.Ft.)">
              Royal Dream City-2 — 3 BHK (Besa–Omkar Nagar Rd)
            </option>
            <option value="Royal Heritage — 2 BHK (1,000.000 Sq.Ft.)">
              Royal Heritage — 2 BHK (Zenda Chowk, Mahal)
            </option>
            <option value="Royal Heritage — 3 BHK (1,396–1,426 Sq.Ft.)">
              Royal Heritage — 3 BHK (Zenda Chowk, Mahal)
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-date`}
            className="block text-[11px] uppercase tracking-[0.15em] text-[#5C5852] mb-2"
          >
            Preferred Visit Date *
          </label>
          <input
            id={`${idPrefix}-date`}
            type="date"
            required
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
            className="w-full px-4 py-3 rounded-[2px] border border-[#E2DDD5] bg-white text-sm text-[#1A1A1A] tabular-spec focus:outline-none focus:border-[#B89758] transition-colors"
          />
        </div>
      </div>

      <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          id={`${idPrefix}-submit`}
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[2px] bg-[#1A1A1A] text-[#FAF8F5] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#B89758] hover:text-[#1A1A1A] transition-colors duration-300"
        >
          <Calendar className="w-4 h-4 stroke-[1.5]" />
          <span>Confirm Private Site Visit</span>
        </button>

        <p className="text-[11px] text-[#5C5852] leading-snug max-w-xs">
          Zero third-party broker calls. Direct consultation with{" "}
          {PROJECT_INFO.developerName}&apos;s advisory desk.
        </p>
      </div>
    </form>
  );
}

export function SiteVisitSection() {
  return (
    <section
      id="book-visit"
      aria-labelledby="site-visit-heading"
      className="bg-[#EFECE6] py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Concierge & Direct Trust Details (5 cols) */}
          <EditorialReveal className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#B89758]" aria-hidden="true" />
              <p className="eyebrow-label text-[#8C6F39]">
                06 · Private Experience Gallery
              </p>
            </div>

            <h2
              id="site-visit-heading"
              className="font-serif font-normal text-[#1A1A1A] text-[clamp(2.1rem,3.6vw,3.25rem)] leading-[1.12] tracking-[-0.015em]"
            >
              Experience the{" "}
              <span className="italic">Light and Scale</span> in Person.
            </h2>

            <p className="mt-5 text-[15px] text-[#5C5852] leading-[1.72]">
              Arrange a guided visit to our Corporate Office at Royal Tower,
              Beltarodi Road (Near Shatabdi Square), or directly at our Royal
              Dream City-2 and Royal Heritage sites across Nagpur.
            </p>

            {/* Direct Concierge Contact List */}
            <div className="mt-8 border-t border-b border-[#E2DDD5] divide-y divide-[#E2DDD5]">
              <a
                href={PROJECT_INFO.salesPhoneHref}
                className="py-4 flex items-center justify-between gap-4 group"
              >
                <span className="flex items-center gap-3 text-sm text-[#5C5852]">
                  <Phone className="w-4 h-4 text-[#B89758] stroke-[1.5]" />
                  Direct Sales Concierge
                </span>
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#8C6F39] tabular-spec transition-colors">
                  {PROJECT_INFO.salesPhoneDisplay}
                </span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 flex items-center justify-between gap-4 group"
              >
                <span className="flex items-center gap-3 text-sm text-[#5C5852]">
                  <MessageCircle className="w-4 h-4 text-[#1F6F4A] stroke-[1.5]" />
                  WhatsApp Priority Desk
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#1F6F4A] group-hover:underline">
                  Start Inquiry
                </span>
              </a>

              <a
                href={`mailto:${PROJECT_INFO.salesEmail}`}
                className="py-4 flex items-center justify-between gap-4 group"
              >
                <span className="flex items-center gap-3 text-sm text-[#5C5852]">
                  <Mail className="w-4 h-4 text-[#B89758] stroke-[1.5]" />
                  NRI &amp; Private Office Desk
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#1A1A1A] group-hover:text-[#8C6F39] transition-colors truncate">
                  {PROJECT_INFO.salesEmail}
                </span>
              </a>

              <div className="py-4 flex items-center justify-between gap-4">
                <span className="flex items-center gap-3 text-sm text-[#5C5852]">
                  <Clock className="w-4 h-4 text-[#B89758] stroke-[1.5]" />
                  Viewing Hours
                </span>
                <span className="text-xs sm:text-sm text-[#1A1A1A]">
                  {PROJECT_INFO.officeHours}
                </span>
              </div>
            </div>
          </EditorialReveal>

          {/* Right Inline Appointment Scheduler Card (7 cols) */}
          <EditorialReveal
            delay={0.1}
            className="lg:col-span-7 border border-[#E2DDD5] bg-[#FAF8F5] p-6 sm:p-10 rounded-[2px]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-[#E2DDD5]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#8C6F39]">
                  By Prior Appointment
                </p>
                <h3 className="font-serif text-3xl text-[#1A1A1A] mt-1">
                  Schedule a Site Visit
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] border border-[#E2DDD5] bg-[#EFECE6] text-[10px] uppercase tracking-[0.14em] text-[#5C5852] tabular-spec">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B89758] stroke-[1.5]" />
                RERA {PROJECT_INFO.reraNumber}
              </span>
            </div>

            <VisitBookingForm idPrefix="desktop-visit" />
          </EditorialReveal>
        </div>
      </div>
    </section>
  );
}
