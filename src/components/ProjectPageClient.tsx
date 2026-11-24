"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArchitecturalImage } from "@/components/ArchitecturalImage";
import {
  ArrowLeft,
  ArrowUpDown,
  ArrowUpRight,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Compass,
  Dumbbell,
  Footprints,
  Landmark,
  Layers,
  MapPin,
  Maximize2,
  MessageCircle,
  Navigation,
  Phone,
  RotateCcw,
  ShieldCheck,
  Smile,
  Sparkles,
  Sun,
  Trees,
  Users,
  Waves,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import {
  formatArea,
  formatRoomDimensions,
  getWhatsAppUrl,
  type BrochureAmenity,
  type BrochureProject,
  type UnitAreaMode,
} from "@/data/projectData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectBlueprintSvg } from "@/components/ProjectBlueprintSvg";
import { EASE_EDITORIAL, EditorialReveal } from "@/components/MotionPrimitives";

interface ProjectPageClientProps {
  project: BrochureProject;
}

const AMENITY_ICON_MAP: Record<BrochureAmenity["iconName"], typeof Waves> = {
  waves: Waves,
  landmark: Landmark,
  trees: Trees,
  users: Users,
  dumbbell: Dumbbell,
  smile: Smile,
  shield: ShieldCheck,
  sparkles: Sparkles,
  footprints: Footprints,
  sun: Sun,
  arrowUpDown: ArrowUpDown,
};

function ProjectVisitForm({
  project,
  idPrefix,
  compact = false,
}: {
  project: BrochureProject;
  idPrefix: string;
  compact?: boolean;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedConfig, setSelectedConfig] = useState(
    `${project.units[0].wing ? `${project.units[0].wing} · ` : ""}${project.units[0].flatNumber} (${project.units[0].bhk})`
  );
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const primaryContact = project.contacts[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        id={`${idPrefix}-confirmation`}
        className="p-6 sm:p-8 rounded-[2px] border border-[var(--proj-border)] bg-[var(--proj-canvas)] space-y-4"
      >
        <div className="flex items-center gap-2 text-[#1F6F4A]">
          <CheckCircle2 className="w-5 h-5 stroke-[1.5]" />
          <p className="text-[11px] uppercase tracking-[0.15em] font-medium">
            Site Visit Scheduled
          </p>
        </div>
        <h3 className="font-serif text-3xl text-[var(--proj-ink)]">
          Thank you, {name}.
        </h3>
        <p className="text-sm text-[var(--proj-muted)] leading-[1.7]">
          Our {project.title} site representative will call you on{" "}
          <span className="tabular-spec font-medium text-[var(--proj-ink)]">
            +91 {phone}
          </span>{" "}
          to confirm your visit for{" "}
          <strong className="font-medium text-[var(--proj-ink)]">
            {selectedConfig}
          </strong>{" "}
          on <span className="tabular-spec font-medium">{date}</span>.
        </p>
        <div className="pt-2 flex flex-wrap gap-3">
          <a
            href={getWhatsAppUrl(
              `Hello, I just scheduled a site visit for ${project.title} (${selectedConfig}) on ${date} under ${name}.`,
              primaryContact.whatsapp
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[2px] bg-[#1F6F4A] text-white text-[11px] uppercase tracking-[0.15em] font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Confirm on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setName("");
              setPhone("");
              setDate("");
            }}
            className="px-4 py-2.5 rounded-[2px] border border-[var(--proj-border)] text-[11px] uppercase tracking-[0.15em] text-[var(--proj-muted)] hover:text-[var(--proj-ink)]"
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
            className="block text-[11px] uppercase tracking-[0.15em] text-[var(--proj-muted)] mb-2"
          >
            Full Name *
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Pratik Joshi"
            className="w-full px-4 py-3 rounded-[2px] border border-[var(--proj-border)] bg-[var(--proj-elevated)] text-sm text-[var(--proj-ink)] focus:outline-none focus:border-[var(--proj-accent)]"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-phone`}
            className="block text-[11px] uppercase tracking-[0.15em] text-[var(--proj-muted)] mb-2"
          >
            Mobile Number *
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3.5 border border-r-0 border-[var(--proj-border)] bg-[var(--proj-surface)] text-xs font-medium text-[var(--proj-muted)] tabular-spec rounded-l-[2px]">
              +91
            </span>
            <input
              id={`${idPrefix}-phone`}
              type="tel"
              required
              pattern="[0-9\s\-]{10,13}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="98220 00000"
              className="w-full px-4 py-3 rounded-r-[2px] border border-[var(--proj-border)] bg-[var(--proj-elevated)] text-sm text-[var(--proj-ink)] tabular-spec focus:outline-none focus:border-[var(--proj-accent)]"
            />
          </div>
        </div>
      </div>

      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-5"}>
        <div>
          <label
            htmlFor={`${idPrefix}-unit`}
            className="block text-[11px] uppercase tracking-[0.15em] text-[var(--proj-muted)] mb-2"
          >
            Preferred Flat / Configuration *
          </label>
          <select
            id={`${idPrefix}-unit`}
            value={selectedConfig}
            onChange={(e) => setSelectedConfig(e.target.value)}
            className="w-full px-4 py-3 rounded-[2px] border border-[var(--proj-border)] bg-[var(--proj-elevated)] text-sm text-[var(--proj-ink)] focus:outline-none focus:border-[var(--proj-accent)]"
          >
            {project.units.map((u) => {
              const label = `${u.wing ? `${u.wing} · ` : ""}${u.flatNumber} (${u.bhk} — ${formatArea(
                u.areaSqFt,
                "sqft",
                u.exactSqFtDisplay,
                u.exactSqMtDisplay
              )})`;
              return (
                <option key={u.id} value={label}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-date`}
            className="block text-[11px] uppercase tracking-[0.15em] text-[var(--proj-muted)] mb-2"
          >
            Preferred Visit Date *
          </label>
          <input
            id={`${idPrefix}-date`}
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 rounded-[2px] border border-[var(--proj-border)] bg-[var(--proj-elevated)] text-sm text-[var(--proj-ink)] tabular-spec focus:outline-none focus:border-[var(--proj-accent)]"
          />
        </div>
      </div>

      <button
        id={`${idPrefix}-submit`}
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[2px] bg-[var(--proj-primary)] text-[var(--proj-on-primary)] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[var(--proj-accent)] hover:text-white transition-colors duration-300"
      >
        <Calendar className="w-4 h-4 stroke-[1.5]" />
        <span>Schedule {project.title} Site Visit</span>
      </button>
    </form>
  );
}

export function ProjectPageClient({ project }: ProjectPageClientProps) {
  const [unitMode, setUnitMode] = useState<UnitAreaMode>("sqft");
  const [activeWing, setActiveWing] = useState<"Wing A" | "Wing B">("Wing A");

  const visibleUnits = project.wings
    ? project.units.filter((u) => u.wing === activeWing)
    : project.units;

  const [selectedUnitId, setSelectedUnitId] = useState<string>(
    visibleUnits[0]?.id ?? project.units[0].id
  );
  const [openSpecId, setOpenSpecId] = useState<string | null>(
    project.technicalSpecs?.[0]?.id ?? null
  );
  const [blueprintModalOpen, setBlueprintModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mobileVisitOpen, setMobileVisitOpen] = useState(false);

  // Sync selected flat when switching Wing A / Wing B
  const activeUnit =
    visibleUnits.find((u) => u.id === selectedUnitId) ?? visibleUnits[0];

  const handleSelectWing = (wing: "Wing A" | "Wing B") => {
    setActiveWing(wing);
    const firstInWing = project.units.find((u) => u.wing === wing);
    if (firstInWing) setSelectedUnitId(firstInWing.id);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setBlueprintModalOpen(false);
        setMobileVisitOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const locked = blueprintModalOpen || mobileVisitOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [blueprintModalOpen, mobileVisitOpen]);

  const primaryContact = project.contacts[0];
  const projectWhatsAppHref = getWhatsAppUrl(
    `Hello ${project.developerCredit}, I am interested in ${project.title} (${project.locationShort}) and would like to enquire about ${activeUnit.wing ? `${activeUnit.wing} ` : ""}${activeUnit.flatNumber} (${activeUnit.bhk}) and schedule a site visit.`,
    primaryContact.whatsapp
  );

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    project.location
  )}`;

  return (
    <>
      {/* Global Sticky Navbar — Locked to Primary Corporate Theme */}
      <Navbar forceSolid onOpenBooking={() => setMobileVisitOpen(true)} />

      {/* Brochure-Scoped Project Theme Root */}
      <main
        data-project-theme={project.themeKey}
        className="min-h-screen w-full relative z-10 flex-1 bg-[var(--proj-canvas)] text-[var(--proj-ink)] pt-20 opacity-100 visible"
      >
        {/* Top Breadcrumb Bar */}
        <div className="border-b border-[var(--proj-border)] bg-[var(--proj-surface)]">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs">
              <Link
                href="/"
                className="text-[var(--proj-muted)] hover:text-[var(--proj-primary)] transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[var(--proj-muted)]" />
              <Link
                href="/#developments"
                className="text-[var(--proj-muted)] hover:text-[var(--proj-primary)] transition-colors"
              >
                Projects
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[var(--proj-muted)]" />
              <span className="font-medium text-[var(--proj-primary)]">
                {project.title}
              </span>
            </nav>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--proj-accent-dark)] hover:text-[var(--proj-primary)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>All Developments</span>
            </Link>
          </div>
        </div>

        {/* Project Hero & Compliance Banner */}
        <section
          aria-labelledby="project-hero-title"
          className="relative overflow-hidden min-h-[72vh] flex flex-col justify-between bg-[var(--proj-primary-deep)] text-[var(--proj-on-primary)] border-b border-[var(--proj-border)]"
        >
          <div className="absolute inset-0 opacity-28">
            <ArchitecturalImage
              src={project.heroImage}
              alt={`${project.title} architectural showcase`}
              placeholderLabel={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[var(--proj-primary-deep)] via-[var(--proj-primary-deep)]/90 to-[var(--proj-primary-deep)]/60"
          />

          <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className="h-[1px] w-8 bg-[var(--proj-accent)]"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-[var(--proj-accent)]">
                    {project.subtitle}
                  </span>
                </div>

                <h1
                  id="project-hero-title"
                  className="font-serif font-normal text-[clamp(2.6rem,5vw,4.4rem)] leading-[1.06] tracking-[-0.02em] text-white"
                >
                  {project.title}
                </h1>

                <p className="mt-4 text-sm sm:text-base text-white/85 leading-[1.7] max-w-2xl">
                  {project.cardSummary}
                </p>

                {/* Developer & Promoter Credits */}
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/80">
                  <span className="font-medium text-white">
                    {project.developerCredit}
                  </span>
                  {project.promoterCredit && (
                    <>
                      <span className="text-[var(--proj-accent)]">•</span>
                      <span>{project.promoterCredit}</span>
                    </>
                  )}
                </div>

                {/* Primary Hero Actions */}
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#project-floor-plans"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[2px] bg-[var(--proj-accent)] text-white text-[11px] uppercase tracking-[0.15em] font-medium hover:opacity-92 transition-opacity"
                  >
                    <span>Explore Floor Plans</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                  </a>
                  <a
                    href="#book-visit"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[2px] border border-white/40 bg-white/10 backdrop-blur-sm text-white text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-white hover:text-[var(--proj-primary-deep)] transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 stroke-[1.5]" />
                    <span>Schedule Site Visit</span>
                  </a>
                </div>
              </div>

              {/* Right Quick Contact & Compliance Panel */}
              <div className="lg:col-span-4 border border-white/18 bg-white/8 backdrop-blur-md p-6 rounded-[2px] space-y-4">
                {project.reraNumber && (
                  <div className="pb-4 border-b border-white/15">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--proj-accent)]">
                      MahaRERA Registration No.
                    </p>
                    <p className="mt-1 text-base font-medium text-white tabular-spec flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--proj-accent)] stroke-[1.5]" />
                      {project.reraNumber}
                    </p>
                  </div>
                )}

                <div className="pb-4 border-b border-white/15">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/65">
                    Site Location
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-white leading-relaxed flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[var(--proj-accent)] stroke-[1.5] shrink-0 mt-0.5" />
                    <span>{project.location}</span>
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/65 mb-2">
                    Project Sales Numbers
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.contacts.map((c) => (
                      <a
                        key={c.tel}
                        href={`tel:${c.tel}`}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[2px] border border-white/25 bg-white/10 text-xs font-medium text-white tabular-spec hover:bg-[var(--proj-accent)] hover:border-[var(--proj-accent)] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 stroke-[1.5]" />
                        {c.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Spec Ribbon */}
          <div className="relative z-10 border-t border-white/15 bg-black/25">
            <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[var(--proj-accent)] stroke-[1.5] shrink-0" />
                <span className="text-white/90">{project.floorsSummary}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-[var(--proj-accent)] stroke-[1.5] shrink-0" />
                <span className="text-white/90 tabular-spec">
                  {project.configurationsSummary}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[var(--proj-accent)] stroke-[1.5] shrink-0" />
                <span className="text-white/90 tabular-spec">
                  {project.mapCoordinates}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Floor Plans & Configurations Section */}
        <section
          id="project-floor-plans"
          aria-labelledby="project-plans-heading"
          className="bg-[var(--proj-canvas)] py-16 md:py-24 border-b border-[var(--proj-border)]"
        >
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Section Title + Sq.Ft./Sq.Mt. Live Toggle */}
            <EditorialReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[var(--proj-border)]">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="h-[1px] w-8 bg-[var(--proj-accent)]"
                    aria-hidden="true"
                  />
                  <p className="eyebrow-label text-[var(--proj-accent-dark)]">
                    01 · Verified Floor Plans &amp; Flat Areas
                  </p>
                </div>
                <h2
                  id="project-plans-heading"
                  className="font-serif font-normal text-[var(--proj-ink)] text-[clamp(2rem,3.4vw,3rem)] leading-[1.12] tracking-[-0.015em]"
                >
                  {project.wings
                    ? "Wings A & B Floor Plate Explorer"
                    : "1st to 7th Floor Royal Flat Configurations"}
                </h2>
                <p className="mt-3 text-sm sm:text-[15px] text-[var(--proj-muted)] leading-[1.68]">
                  Inspect exact brochure flat areas and switch instantaneously
                  between square feet and square meters.
                </p>
              </div>

              {/* Sq. Ft. / Sq. Mt. Toggle */}
              <div className="flex flex-col items-start lg:items-end gap-2">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--proj-muted)]">
                  Area Unit
                </span>
                <div
                  role="group"
                  aria-label="Unit Measurement Toggle"
                  className="inline-flex border border-[var(--proj-border)] bg-[var(--proj-surface)] p-1 rounded-[2px]"
                >
                  <button
                    type="button"
                    id="project-unit-sqft"
                    onClick={() => setUnitMode("sqft")}
                    className={`px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-medium rounded-[2px] transition-colors ${
                      unitMode === "sqft"
                        ? "bg-[var(--proj-primary)] text-[var(--proj-on-primary)]"
                        : "text-[var(--proj-muted)] hover:text-[var(--proj-ink)]"
                    }`}
                  >
                    Sq. Ft.
                  </button>
                  <button
                    type="button"
                    id="project-unit-sqmt"
                    onClick={() => setUnitMode("sqmt")}
                    className={`px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-medium rounded-[2px] transition-colors ${
                      unitMode === "sqmt"
                        ? "bg-[var(--proj-primary)] text-[var(--proj-on-primary)]"
                        : "text-[var(--proj-muted)] hover:text-[var(--proj-ink)]"
                    }`}
                  >
                    Sq. Mt.
                  </button>
                </div>
              </div>
            </EditorialReveal>

            {/* Wing A / Wing B Tabs (Only on multi-wing projects like Royal Dream City-2) */}
            {project.wings && (
              <div
                role="tablist"
                aria-label="Building Wings"
                className="mt-7 flex items-center gap-8 border-b border-[var(--proj-border)]"
              >
                {project.wings.map((wing) => {
                  const isActive = wing === activeWing;
                  return (
                    <button
                      key={wing}
                      type="button"
                      role="tab"
                      id={`wing-tab-${wing.toLowerCase().replace(" ", "-")}`}
                      aria-selected={isActive}
                      onClick={() => handleSelectWing(wing)}
                      className={`relative pb-4 pt-1 font-serif text-2xl sm:text-3xl transition-colors ${
                        isActive
                          ? "text-[var(--proj-primary)]"
                          : "text-[var(--proj-muted)] hover:text-[var(--proj-ink)]"
                      }`}
                    >
                      {wing}
                      <span className="block font-sans text-[10px] uppercase tracking-[0.14em] text-[var(--proj-muted)] mt-1">
                        1st – 7th Floor · 4 Flats / Floor
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="wing-active-bar"
                          transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                          className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[var(--proj-accent)]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Flat Selector Cards Grid */}
            <div
              className={`mt-8 grid gap-4 ${
                visibleUnits.length === 4
                  ? "grid-cols-2 lg:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-3"
              }`}
            >
              {visibleUnits.map((unit) => {
                const isSelected = unit.id === activeUnit.id;
                return (
                  <button
                    key={unit.id}
                    type="button"
                    id={`flat-card-${unit.id}`}
                    onClick={() => setSelectedUnitId(unit.id)}
                    className={`p-4 sm:p-5 rounded-[2px] border text-left transition-all duration-200 ${
                      isSelected
                        ? "border-[var(--proj-accent)] bg-[var(--proj-primary)] text-[var(--proj-on-primary)]"
                        : "border-[var(--proj-border)] bg-[var(--proj-surface)] text-[var(--proj-ink)] hover:border-[var(--proj-accent)]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[10px] uppercase tracking-[0.15em] font-medium ${
                          isSelected
                            ? "text-[var(--proj-accent)]"
                            : "text-[var(--proj-accent-dark)]"
                        }`}
                      >
                        {unit.wing ? `${unit.wing} · ` : ""}
                        {unit.bhk}
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-[0.12em] ${
                          isSelected ? "text-white/70" : "text-[var(--proj-muted)]"
                        }`}
                      >
                        {unit.floors.split(" ")[0]}–7F
                      </span>
                    </div>

                    <p className="mt-2 font-serif text-2xl leading-none">
                      {unit.flatNumber}
                    </p>

                    <p
                      className={`mt-2 text-xs sm:text-sm font-medium tabular-spec ${
                        isSelected ? "text-white/95" : "text-[var(--proj-ink)]"
                      }`}
                    >
                      {formatArea(
                        unit.areaSqFt,
                        unitMode,
                        unit.exactSqFtDisplay,
                        unit.exactSqMtDisplay
                      )}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Flat Detailed Blueprint + Room Breakdown */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeUnit.id}-${unitMode}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
              >
                {/* Left Blueprint Sheet (7 cols) */}
                <div className="lg:col-span-7 border border-[var(--proj-border)] bg-[var(--proj-surface)] p-4 sm:p-6 rounded-[2px]">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[var(--proj-border)]">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--proj-accent-dark)]">
                        {activeUnit.wing ? `${activeUnit.wing} · ` : ""}
                        {activeUnit.floors}
                      </p>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[var(--proj-ink)] mt-0.5">
                        {activeUnit.flatNumber} — {activeUnit.bhk}
                      </h3>
                    </div>

                    <button
                      type="button"
                      id="project-view-blueprint-btn"
                      onClick={() => {
                        setZoomLevel(1);
                        setBlueprintModalOpen(true);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-[2px] border border-[var(--proj-primary)] bg-[var(--proj-elevated)] text-[var(--proj-primary)] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[var(--proj-primary)] hover:text-[var(--proj-on-primary)] transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5 stroke-[1.5]" />
                      <span>Zoom Blueprint</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setZoomLevel(1);
                      setBlueprintModalOpen(true);
                    }}
                    className="block w-full border border-[var(--proj-border)] hover:border-[var(--proj-accent)] bg-[var(--proj-elevated)] rounded-[2px] overflow-hidden cursor-zoom-in transition-colors"
                  >
                    <ProjectBlueprintSvg
                      unit={activeUnit}
                      unitMode={unitMode}
                      projectTitle={project.title}
                    />
                  </button>
                </div>

                {/* Right Flat Specifications & Room Schedule (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="p-5 border border-[var(--proj-border)] bg-[var(--proj-surface)] rounded-[2px] grid grid-cols-2 divide-x divide-[var(--proj-border)]">
                    <div className="pr-4">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--proj-muted)]">
                        Verified Brochure Area
                      </p>
                      <p className="mt-1 font-serif text-2xl sm:text-[26px] text-[var(--proj-primary)] tabular-spec">
                        {formatArea(
                          activeUnit.areaSqFt,
                          unitMode,
                          activeUnit.exactSqFtDisplay,
                          activeUnit.exactSqMtDisplay
                        )}
                      </p>
                    </div>
                    <div className="pl-4">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--proj-muted)]">
                        Alternate Unit
                      </p>
                      <p className="mt-1 font-serif text-xl sm:text-2xl text-[var(--proj-ink)] tabular-spec">
                        {formatArea(
                          activeUnit.areaSqFt,
                          unitMode === "sqft" ? "sqmt" : "sqft",
                          activeUnit.exactSqFtDisplay,
                          activeUnit.exactSqMtDisplay
                        )}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-[var(--proj-ink)]">
                        Indicative Room Schedule
                      </p>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--proj-accent-dark)]">
                        {activeUnit.facing}
                      </span>
                    </div>

                    <div className="border border-[var(--proj-border)] bg-[var(--proj-elevated)] rounded-[2px] divide-y divide-[var(--proj-border)]">
                      {activeUnit.rooms.map((room) => (
                        <div
                          key={room.name}
                          className="px-4 py-3 flex items-center justify-between gap-4"
                        >
                          <div>
                            <p className="text-sm font-medium text-[var(--proj-ink)]">
                              {room.name}
                            </p>
                            {room.note && (
                              <p className="text-[11px] text-[var(--proj-muted)]">
                                {room.note}
                              </p>
                            )}
                          </div>
                          <span className="text-xs sm:text-[13px] font-medium text-[var(--proj-primary)] tabular-spec shrink-0">
                            {formatRoomDimensions(
                              room.widthFt,
                              room.lengthFt,
                              unitMode
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {activeUnit.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[var(--proj-muted)] leading-relaxed"
                      >
                        <Layers className="w-3.5 h-3.5 text-[var(--proj-accent)] stroke-[1.5] mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={projectWhatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-[2px] bg-[#1F6F4A] text-white text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#175739] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 stroke-[1.5]" />
                      <span>WhatsApp Price Sheet</span>
                    </a>
                    <a
                      href="#book-visit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-[2px] bg-[var(--proj-primary)] text-[var(--proj-on-primary)] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[var(--proj-accent)] hover:text-white transition-colors"
                    >
                      <span>Book Site Visit</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Lifestyle & Rooftop Amenities Section */}
        <section
          id="project-amenities"
          aria-labelledby="project-amenities-heading"
          className="bg-[var(--proj-surface)] py-16 md:py-24 border-b border-[var(--proj-border)]"
        >
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <EditorialReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[var(--proj-border)]">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="h-[1px] w-8 bg-[var(--proj-accent)]"
                    aria-hidden="true"
                  />
                  <p className="eyebrow-label text-[var(--proj-accent-dark)]">
                    02 · Curated Lifestyle &amp; Rooftop Amenities
                  </p>
                </div>
                <h2
                  id="project-amenities-heading"
                  className="font-serif font-normal text-[var(--proj-ink)] text-[clamp(2rem,3.4vw,3rem)] leading-[1.12]"
                >
                  Thoughtful Spaces for Every Generation.
                </h2>
              </div>

              <p className="text-sm sm:text-[15px] text-[var(--proj-muted)] max-w-md leading-[1.7]">
                Every leisure, wellness, devotional, and utility amenity in{" "}
                {project.title} is proportioned for genuine daily enjoyment.
              </p>
            </EditorialReveal>

            {/* Editorial Photography Pair */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[var(--proj-border)] bg-[var(--proj-elevated)] p-2 rounded-[2px]">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-[#1A1A1A]">
                  <ArchitecturalImage
                    src={project.galleryImage}
                    alt={`${project.title} primary lifestyle amenity perspective`}
                    placeholderLabel={`${project.title} Clubhouse & Leisure`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="border border-[var(--proj-border)] bg-[var(--proj-elevated)] p-2 rounded-[2px]">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-[#1A1A1A]">
                  <ArchitecturalImage
                    src={project.secondaryImage}
                    alt={`${project.title} courtyard and interior architectural perspective`}
                    placeholderLabel={`${project.title} Residences & Greens`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Verified Brochure Amenities Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.amenities.map((amenity, idx) => {
                const Icon = AMENITY_ICON_MAP[amenity.iconName];
                return (
                  <EditorialReveal
                    key={amenity.title}
                    delay={idx * 0.05}
                    className="p-6 border border-[var(--proj-border)] bg-[var(--proj-elevated)] rounded-[2px] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-[var(--proj-border)]">
                        <span className="w-10 h-10 rounded-[2px] border border-[var(--proj-border)] bg-[var(--proj-surface)] flex items-center justify-center">
                          <Icon
                            className="w-4 h-4 text-[var(--proj-accent-dark)] stroke-[1.5]"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--proj-muted)]">
                          {amenity.subtitle}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-[var(--proj-ink)]">
                        {amenity.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-[var(--proj-muted)] leading-[1.68]">
                        {amenity.description}
                      </p>
                    </div>
                  </EditorialReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Specifications Accordion (Rendered for Royal Dream City-2) */}
        {project.technicalSpecs && project.technicalSpecs.length > 0 && (
          <section
            id="project-specifications"
            aria-labelledby="project-specs-heading"
            className="bg-[var(--proj-canvas)] py-16 md:py-24 border-b border-[var(--proj-border)]"
          >
            <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                <EditorialReveal className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="h-[1px] w-8 bg-[var(--proj-accent)]"
                      aria-hidden="true"
                    />
                    <p className="eyebrow-label text-[var(--proj-accent-dark)]">
                      03 · Engineering &amp; Finish Standards
                    </p>
                  </div>
                  <h2
                    id="project-specs-heading"
                    className="font-serif font-normal text-[var(--proj-ink)] text-[clamp(2rem,3.4vw,3rem)] leading-[1.12]"
                  >
                    Technical Specifications
                  </h2>
                  <p className="mt-4 text-sm sm:text-[15px] text-[var(--proj-muted)] leading-[1.72]">
                    Every structural, electrical, plumbing, and finishing
                    specification in {project.title} is engineered for long-term
                    safety, low maintenance, and daily comfort.
                  </p>
                </EditorialReveal>

                <div className="lg:col-span-7 border-t border-[var(--proj-border)] divide-y divide-[var(--proj-border)]">
                  {project.technicalSpecs.map((spec) => {
                    const isOpen = openSpecId === spec.id;
                    return (
                      <div key={spec.id}>
                        <button
                          type="button"
                          id={`spec-accordion-${spec.id}`}
                          aria-expanded={isOpen}
                          onClick={() =>
                            setOpenSpecId(isOpen ? null : spec.id)
                          }
                          className="w-full py-5 flex items-center justify-between gap-4 text-left group"
                        >
                          <div>
                            <p className="font-serif text-xl sm:text-2xl text-[var(--proj-ink)] group-hover:text-[var(--proj-accent-dark)] transition-colors">
                              {spec.category}
                            </p>
                            <p className="text-xs text-[var(--proj-muted)] mt-1">
                              {spec.summary}
                            </p>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-[var(--proj-accent)] stroke-[1.5] shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
                              className="overflow-hidden"
                            >
                              <ul className="pb-6 pl-4 space-y-2.5 text-sm text-[var(--proj-muted)] leading-relaxed border-l-2 border-[var(--proj-accent)] ml-1 mb-2">
                                {spec.details.map((line) => (
                                  <li key={line}>{line}</li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Location & Neighbourhood Connectivity Highlights */}
        <section
          id="project-location"
          aria-labelledby="project-location-heading"
          className="bg-[var(--proj-surface)] py-16 md:py-24 border-b border-[var(--proj-border)]"
        >
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <EditorialReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[var(--proj-border)]">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="h-[1px] w-8 bg-[var(--proj-accent)]"
                    aria-hidden="true"
                  />
                  <p className="eyebrow-label text-[var(--proj-accent-dark)]">
                    {project.technicalSpecs ? "04" : "03"} · Location &amp;
                    Connectivity
                  </p>
                </div>
                <h2
                  id="project-location-heading"
                  className="font-serif font-normal text-[var(--proj-ink)] text-[clamp(2rem,3.4vw,3rem)] leading-[1.12]"
                >
                  {project.locationShort}
                </h2>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-medium text-[var(--proj-primary)] hover:text-[var(--proj-accent-dark)] border-b border-[var(--proj-primary)] pb-1 self-start lg:self-end"
              >
                <Navigation className="w-3.5 h-3.5 stroke-[1.5]" />
                <span>Open Site in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
              </a>
            </EditorialReveal>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Connectivity List */}
              <div className="lg:col-span-5">
                <ul className="divide-y divide-[var(--proj-border)] border-t border-b border-[var(--proj-border)] bg-[var(--proj-elevated)] rounded-[2px]">
                  {project.connectivityHighlights.map((item, idx) => (
                    <li
                      key={item.name}
                      className="p-4 flex items-start justify-between gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-[2px] border border-[var(--proj-border)] bg-[var(--proj-surface)] flex items-center justify-center text-[10px] font-medium text-[var(--proj-accent-dark)] tabular-spec shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-[var(--proj-ink)]">
                            {item.name}
                          </p>
                          <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--proj-muted)] mt-0.5">
                            {item.category}
                          </p>
                          <p className="text-xs text-[var(--proj-muted)] mt-1 leading-relaxed">
                            {item.note}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-[var(--proj-primary)] tabular-spec shrink-0">
                        {item.proximity}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 p-4 border border-[var(--proj-border)] bg-[var(--proj-elevated)] rounded-[2px] flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[var(--proj-accent)] stroke-[1.5] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--proj-accent-dark)]">
                      Exact Site Address
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[var(--proj-ink)] leading-relaxed">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Scoped Corridor Map Card */}
              <div className="lg:col-span-7 border border-[var(--proj-border)] bg-[var(--proj-elevated)] p-4 sm:p-6 rounded-[2px]">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[var(--proj-border)]">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--proj-accent-dark)] font-medium">
                    {project.mapCorridorLabel}
                  </p>
                  <span className="text-[10px] text-[var(--proj-muted)] tabular-spec">
                    {project.mapCoordinates}
                  </span>
                </div>

                <svg
                  viewBox="0 0 560 390"
                  role="img"
                  aria-label={`Connectivity map for ${project.title} in ${project.locationShort}`}
                  className="w-full h-auto block border border-[var(--proj-border)] rounded-[2px]"
                >
                  <rect x="0" y="0" width="560" height="390" fill="var(--proj-canvas)" />
                  <rect x="24" y="28" width="128" height="78" fill="var(--proj-surface)" />
                  <rect x="392" y="34" width="140" height="76" fill="var(--proj-surface)" />
                  <rect x="34" y="264" width="118" height="90" fill="var(--proj-surface)" />
                  <rect x="410" y="218" width="120" height="74" fill="var(--proj-surface)" />

                  <circle
                    cx="268"
                    cy="195"
                    r="86"
                    fill="none"
                    stroke="var(--proj-accent)"
                    strokeOpacity="0.45"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="268"
                    cy="195"
                    r="154"
                    fill="none"
                    stroke="var(--proj-accent)"
                    strokeOpacity="0.25"
                    strokeDasharray="4 4"
                  />

                  <path
                    d="M 0 185 Q 150 175 268 195 T 560 178"
                    fill="none"
                    stroke="var(--proj-border)"
                    strokeWidth="9"
                  />
                  <path
                    d="M 294 0 L 324 185 L 364 390"
                    fill="none"
                    stroke="var(--proj-border)"
                    strokeWidth="9"
                  />

                  {project.connectivityHighlights.map((lm, idx) => (
                    <g key={lm.name}>
                      <line
                        x1="268"
                        y1="195"
                        x2={lm.mapX}
                        y2={lm.mapY}
                        stroke="var(--proj-primary)"
                        strokeOpacity="0.32"
                        strokeDasharray="2 3"
                      />
                      <circle
                        cx={lm.mapX}
                        cy={lm.mapY}
                        r="11"
                        fill="var(--proj-elevated)"
                        stroke="var(--proj-primary)"
                        strokeWidth="1.2"
                      />
                      <text
                        x={lm.mapX}
                        y={lm.mapY + 3.5}
                        textAnchor="middle"
                        fill="var(--proj-primary)"
                        fontSize="8.5"
                        fontWeight="600"
                        fontFamily="var(--font-sans)"
                      >
                        0{idx + 1}
                      </text>
                    </g>
                  ))}

                  <g transform="translate(268, 195)">
                    <circle r="18" fill="var(--proj-accent)" fillOpacity="0.2" />
                    <circle
                      r="9"
                      fill="var(--proj-primary)"
                      stroke="var(--proj-canvas)"
                      strokeWidth="2"
                    />
                    <circle r="3" fill="var(--proj-accent)" />
                    <rect
                      x="-68"
                      y="-38"
                      width="136"
                      height="22"
                      rx="2"
                      fill="var(--proj-primary)"
                    />
                    <text
                      x="0"
                      y="-24"
                      textAnchor="middle"
                      fill="var(--proj-on-primary)"
                      fontSize="8"
                      fontWeight="600"
                      letterSpacing="1"
                      fontFamily="var(--font-sans)"
                    >
                      {project.title.toUpperCase()}
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Project-Specific Inline Site Visit Booking Section */}
        <section
          id="book-visit"
          aria-labelledby="project-booking-heading"
          className="bg-[var(--proj-canvas)] py-16 md:py-24"
        >
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="h-[1px] w-8 bg-[var(--proj-accent)]"
                    aria-hidden="true"
                  />
                  <p className="eyebrow-label text-[var(--proj-accent-dark)]">
                    Direct Site Advisory Desk
                  </p>
                </div>
                <h2
                  id="project-booking-heading"
                  className="font-serif font-normal text-[var(--proj-ink)] text-[clamp(2rem,3.4vw,3rem)] leading-[1.12]"
                >
                  Visit {project.title} in Person.
                </h2>
                <p className="mt-4 text-sm sm:text-[15px] text-[var(--proj-muted)] leading-[1.7]">
                  Connect directly with our {project.title} project desk for
                  available floor inventory, cost sheets, and guided site tours.
                </p>

                <div className="mt-7 border-t border-b border-[var(--proj-border)] divide-y divide-[var(--proj-border)]">
                  {project.contacts.map((c, idx) => (
                    <a
                      key={c.tel}
                      href={`tel:${c.tel}`}
                      className="py-4 flex items-center justify-between gap-4 group"
                    >
                      <span className="flex items-center gap-2.5 text-sm text-[var(--proj-muted)]">
                        <Phone className="w-4 h-4 text-[var(--proj-accent)] stroke-[1.5]" />
                        Sales Line {idx + 1}
                      </span>
                      <span className="text-sm font-medium text-[var(--proj-primary)] tabular-spec group-hover:text-[var(--proj-accent-dark)]">
                        {c.display}
                      </span>
                    </a>
                  ))}
                  <a
                    href={projectWhatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 flex items-center justify-between gap-4 group"
                  >
                    <span className="flex items-center gap-2.5 text-sm text-[var(--proj-muted)]">
                      <MessageCircle className="w-4 h-4 text-[#1F6F4A] stroke-[1.5]" />
                      WhatsApp Project Desk
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#1F6F4A] group-hover:underline">
                      Message Now
                    </span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 border border-[var(--proj-border)] bg-[var(--proj-surface)] p-6 sm:p-10 rounded-[2px]">
                <ProjectVisitForm
                  project={project}
                  idPrefix={`${project.slug}-desktop`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blueprint Zoom Modal */}
        <AnimatePresence>
          {blueprintModalOpen && (
            <motion.div
              id="project-blueprint-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} ${activeUnit.flatNumber} Blueprint`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBlueprintModalOpen(false)}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-5xl max-h-[90vh] bg-[var(--proj-canvas)] border border-[var(--proj-border)] rounded-[2px] flex flex-col overflow-hidden"
              >
                <div className="px-5 py-4 border-b border-[var(--proj-border)] bg-[var(--proj-surface)] flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--proj-accent-dark)]">
                      {project.title}
                      {activeUnit.wing ? ` · ${activeUnit.wing}` : ""}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl text-[var(--proj-ink)]">
                      {activeUnit.flatNumber} ({activeUnit.bhk}) —{" "}
                      <span className="tabular-spec">
                        {formatArea(
                          activeUnit.areaSqFt,
                          unitMode,
                          activeUnit.exactSqFtDisplay,
                          activeUnit.exactSqMtDisplay
                        )}
                      </span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setUnitMode((m) => (m === "sqft" ? "sqmt" : "sqft"))
                      }
                      className="px-3 py-1.5 rounded-[2px] border border-[var(--proj-border)] bg-[var(--proj-elevated)] text-[11px] uppercase tracking-[0.14em] text-[var(--proj-ink)]"
                    >
                      {unitMode === "sqft" ? "Sq. Mt." : "Sq. Ft."}
                    </button>
                    <button
                      type="button"
                      aria-label="Zoom out"
                      onClick={() =>
                        setZoomLevel((z) => Math.max(1, +(z - 0.25).toFixed(2)))
                      }
                      className="w-8 h-8 rounded-[2px] border border-[var(--proj-border)] bg-[var(--proj-elevated)] flex items-center justify-center text-[var(--proj-ink)]"
                    >
                      <ZoomOut className="w-4 h-4 stroke-[1.5]" />
                    </button>
                    <span className="text-xs font-medium tabular-spec min-w-[42px] text-center">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                      type="button"
                      id="project-zoom-in-btn"
                      aria-label="Zoom in"
                      onClick={() =>
                        setZoomLevel((z) =>
                          Math.min(2.25, +(z + 0.25).toFixed(2))
                        )
                      }
                      className="w-8 h-8 rounded-[2px] border border-[var(--proj-border)] bg-[var(--proj-elevated)] flex items-center justify-center text-[var(--proj-ink)]"
                    >
                      <ZoomIn className="w-4 h-4 stroke-[1.5]" />
                    </button>
                    <button
                      type="button"
                      aria-label="Reset zoom"
                      onClick={() => setZoomLevel(1)}
                      className="w-8 h-8 rounded-[2px] border border-[var(--proj-border)] bg-[var(--proj-elevated)] flex items-center justify-center text-[var(--proj-ink)]"
                    >
                      <RotateCcw className="w-3.5 h-3.5 stroke-[1.5]" />
                    </button>
                    <button
                      type="button"
                      id="project-modal-close-btn"
                      aria-label="Close modal"
                      onClick={() => setBlueprintModalOpen(false)}
                      className="ml-1 w-8 h-8 rounded-[2px] bg-[var(--proj-primary)] text-[var(--proj-on-primary)] flex items-center justify-center"
                    >
                      <X className="w-4 h-4 stroke-[1.5]" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-auto p-6 flex items-center justify-center">
                  <div
                    style={{
                      width: `${zoomLevel * 100}%`,
                      maxWidth: zoomLevel === 1 ? "780px" : "none",
                      transition: "width 240ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <ProjectBlueprintSvg
                      unit={activeUnit}
                      unitMode={unitMode}
                      projectTitle={project.title}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile-Only Sticky Bottom Bar (Project-Specific WhatsApp + Schedule Visit Modal) */}
        <div
          id="project-mobile-sticky-bar"
          className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[var(--proj-canvas)]/96 backdrop-blur-md border-t border-[var(--proj-border)] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        >
          <div className="grid grid-cols-2 gap-3">
            <a
              id="project-mobile-whatsapp"
              href={projectWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-[2px] bg-[#1F6F4A] text-white text-[11px] uppercase tracking-[0.14em] font-medium"
            >
              <MessageCircle className="w-4 h-4 stroke-[1.6]" />
              <span>WhatsApp Us</span>
            </a>

            <button
              id="project-mobile-schedule-btn"
              type="button"
              onClick={() => setMobileVisitOpen(true)}
              className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-[2px] bg-[var(--proj-primary)] text-[var(--proj-on-primary)] text-[11px] uppercase tracking-[0.14em] font-medium"
            >
              <Calendar className="w-4 h-4 stroke-[1.5] text-[var(--proj-accent)]" />
              <span>Schedule Visit</span>
            </button>
          </div>
        </div>

        {/* Mobile Schedule Site Visit Bottom Sheet Modal */}
        <AnimatePresence>
          {mobileVisitOpen && (
            <motion.div
              id="project-mobile-visit-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`Schedule Site Visit for ${project.title}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileVisitOpen(false)}
              className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-end justify-center"
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.36, ease: EASE_EDITORIAL }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg max-h-[88vh] overflow-y-auto bg-[var(--proj-canvas)] border-t border-[var(--proj-border)] rounded-t-[2px] p-5 pb-8"
              >
                <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-[var(--proj-border)]">
                  <div>
                    <p className="eyebrow-label text-[var(--proj-accent-dark)]">
                      {project.title}
                    </p>
                    <h3 className="font-serif text-2xl text-[var(--proj-ink)] mt-0.5">
                      Schedule Site Visit
                    </h3>
                  </div>
                  <button
                    type="button"
                    id="project-mobile-modal-close"
                    aria-label="Close modal"
                    onClick={() => setMobileVisitOpen(false)}
                    className="w-9 h-9 rounded-[2px] border border-[var(--proj-border)] flex items-center justify-center text-[var(--proj-ink)]"
                  >
                    <X className="w-4 h-4 stroke-[1.5]" />
                  </button>
                </div>

                <ProjectVisitForm
                  project={project}
                  idPrefix={`${project.slug}-mobile`}
                  compact
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Corporate Footer */}
      <Footer />
    </>
  );
}
