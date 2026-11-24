import Link from "next/link";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { NAV_LINKS, PROJECT_INFO } from "@/data/projectData";

export function Footer() {
  return (
    <footer className="bg-[#161412] text-[#FAF8F5] border-t border-white/12 pt-16 pb-28 md:pb-12">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-[2px] border border-[#B89758] flex items-center justify-center font-serif text-base text-[#FAF8F5]">
                {PROJECT_INFO.developerMonogram}
              </span>
              <div>
                <p className="font-serif text-xl text-[#FAF8F5]">
                  {PROJECT_INFO.developerName}
                </p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#C2BCB2]">
                  {PROJECT_INFO.membershipsLine}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-[#C2BCB2] leading-[1.7] max-w-sm">
              Corporate Office: {PROJECT_INFO.locationFull}.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {PROJECT_INFO.memberships.map((org) => (
                <span
                  key={org}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] border border-white/15 bg-[#201D1A] text-[10px] uppercase tracking-[0.14em] text-[#E6D5B3]"
                >
                  <Award className="w-3 h-3 text-[#B89758] stroke-[1.5]" />
                  {org}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation & Developments Column */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#B89758] mb-4">
              Signature Projects
            </p>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  href="/projects/royal-dream-city-2"
                  className="text-sm text-[#FAF8F5] hover:text-[#E6D5B3] transition-colors"
                >
                  Royal Dream City-2 (Besa–Omkar Nagar)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/royal-heritage"
                  className="text-sm text-[#FAF8F5] hover:text-[#E6D5B3] transition-colors"
                >
                  Royal Heritage (Zenda Chowk, Mahal)
                </Link>
              </li>
            </ul>

            <p className="text-[10px] uppercase tracking-[0.15em] text-[#B89758] mb-3">
              Navigation
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    className="text-xs text-[#C2BCB2] hover:text-[#FAF8F5] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MahaRERA Statutory Verification Card */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#B89758] mb-4">
              MahaRERA Statutory Disclosure
            </p>
            <div className="p-4 rounded-[2px] border border-white/15 bg-[#201D1A] space-y-2.5">
              <div className="flex items-center gap-2 text-[#FAF8F5]">
                <ShieldCheck className="w-4 h-4 text-[#B89758] stroke-[1.5]" />
                <span className="text-xs font-medium tabular-spec">
                  Royal Dream City-2: {PROJECT_INFO.reraNumber}
                </span>
              </div>
              <p className="text-xs text-[#C2BCB2] leading-relaxed">
                Registered project specifications and sanctioned drawings are
                independently verifiable on the Maharashtra Real Estate
                Regulatory Authority portal.
              </p>
              <a
                href={PROJECT_INFO.reraPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-[#E6D5B3] hover:text-white transition-colors"
              >
                <span>maharera.maharashtra.gov.in</span>
                <ExternalLink className="w-3 h-3 stroke-[1.5]" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-7 flex flex-col gap-4 text-[11px] text-[#C2BCB2]/80 leading-relaxed">
          <p>
            Disclaimer: Architectural elevations, floor plan diagrams, and
            brochure highlights presented on this website are for informational
            reference. Buyers are requested to verify sanctioned plans,
            specifications, and MahaRERA disclosures directly with{" "}
            {PROJECT_INFO.developerName} prior to allotment.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-white/10">
            <p>© 2026 {PROJECT_INFO.developerName}. All rights reserved.</p>
            <p className="tabular-spec">{PROJECT_INFO.locationFull}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
