"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Compass,
  Download,
  Maximize2,
  RotateCcw,
  X,
  ZoomIn,
  ZoomOut,
  FileText,
  Car,
  Layers,
} from "lucide-react";
import {
  FLOOR_PLANS,
  PROJECT_INFO,
  formatArea,
  formatRoomDimensions,
  type FloorPlanId,
  type UnitAreaMode,
} from "@/data/projectData";
import { BlueprintCanvas } from "@/components/BlueprintCanvas";
import { EASE_EDITORIAL, EditorialReveal } from "@/components/MotionPrimitives";

export function FloorPlanExplorer() {
  const [activePlanId, setActivePlanId] = useState<FloorPlanId>("3bhk");
  const [unitMode, setUnitMode] = useState<UnitAreaMode>("sqft");
  const [blueprintModalOpen, setBlueprintModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [brochureDrawerOpen, setBrochureDrawerOpen] = useState(false);
  const [brochureSubmitted, setBrochureSubmitted] = useState(false);
  const [brochureForm, setBrochureForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const activePlan =
    FLOOR_PLANS.find((p) => p.id === activePlanId) ?? FLOOR_PLANS[0];

  // Close overlays on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setBlueprintModalOpen(false);
        setBrochureDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent body scroll when modal or drawer is open
  useEffect(() => {
    const locked = blueprintModalOpen || brochureDrawerOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [blueprintModalOpen, brochureDrawerOpen]);

  const handleOpenBlueprint = () => {
    setZoomLevel(1);
    setBlueprintModalOpen(true);
  };

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brochureForm.name.trim() || !brochureForm.phone.trim()) return;
    setBrochureSubmitted(true);
  };

  return (
    <section
      id="floor-plans"
      aria-labelledby="floor-plans-heading"
      className="bg-[#FAF8F5] py-20 md:py-28 lg:py-32 border-b border-[#E2DDD5]"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header + Live Unit Toggle */}
        <EditorialReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#E2DDD5]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#B89758]" aria-hidden="true" />
              <p className="eyebrow-label text-[#8C6F39]">
                03 · Interactive Floor Plans &amp; Dimensions
              </p>
            </div>
            <h2
              id="floor-plans-heading"
              className="font-serif font-normal text-[#1A1A1A] text-[clamp(2.1rem,3.6vw,3.25rem)] leading-[1.12] tracking-[-0.015em]"
            >
              Spatial Honesty, Measured to the{" "}
              <span className="italic">Square Inch.</span>
            </h2>
            <p className="mt-4 text-[15px] text-[#5C5852] leading-[1.7]">
              Toggle seamlessly between MahaRERA statutory square meters and
              familiar square feet across every room, deck, and carpet area.
            </p>
          </div>

          {/* Live Sq. Ft. / Sq. Mt. Toggle */}
          <div className="flex flex-col items-start lg:items-end gap-2">
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#5C5852]">
              Measurement Unit
            </span>
            <div
              role="group"
              aria-label="Carpet Area Unit Toggle"
              className="inline-flex border border-[#E2DDD5] bg-[#EFECE6] p-1 rounded-[2px]"
            >
              <button
                type="button"
                id="unit-toggle-sqft"
                onClick={() => setUnitMode("sqft")}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-medium rounded-[2px] transition-all duration-200 ${
                  unitMode === "sqft"
                    ? "bg-[#1A1A1A] text-[#FAF8F5]"
                    : "text-[#5C5852] hover:text-[#1A1A1A]"
                }`}
              >
                Sq. Ft.
              </button>
              <button
                type="button"
                id="unit-toggle-sqmt"
                onClick={() => setUnitMode("sqmt")}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-medium rounded-[2px] transition-all duration-200 ${
                  unitMode === "sqmt"
                    ? "bg-[#1A1A1A] text-[#FAF8F5]"
                    : "text-[#5C5852] hover:text-[#1A1A1A]"
                }`}
              >
                Sq. Mt.
              </button>
            </div>
          </div>
        </EditorialReveal>

        {/* Filterable Configuration Tabs: 2 BHK | 3 BHK | 4 BHK / Penthouse */}
        <div
          role="tablist"
          aria-label="Residence Configurations"
          className="mt-8 flex flex-wrap items-center gap-2 sm:gap-8 border-b border-[#E2DDD5]"
        >
          {FLOOR_PLANS.map((plan) => {
            const isActive = plan.id === activePlanId;
            return (
              <button
                key={plan.id}
                type="button"
                role="tab"
                id={`tab-${plan.id}`}
                aria-selected={isActive}
                onClick={() => setActivePlanId(plan.id)}
                className={`relative pb-4 pt-2 px-2 sm:px-0 text-left transition-colors duration-200 ${
                  isActive
                    ? "text-[#1A1A1A]"
                    : "text-[#5C5852] hover:text-[#1A1A1A]"
                }`}
              >
                <span className="font-serif text-2xl sm:text-[28px] leading-none block">
                  {plan.tabLabel}
                </span>
                <span className="block mt-1.5 text-[11px] tracking-[0.1em] uppercase text-[#5C5852] tabular-spec">
                  {formatArea(plan.reraCarpetSqFt, unitMode)}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="floorplan-active-underline"
                    transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#B89758]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Floor Plan Panel */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activePlan.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
            className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Left Blueprint Studio Card (7 cols) */}
            <div className="lg:col-span-7 border border-[#E2DDD5] bg-[#EFECE6] p-4 sm:p-6 rounded-[2px]">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#E2DDD5]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#8C6F39]">
                    Architectural Sheet · {activePlan.elevationLevels}
                  </p>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] mt-0.5">
                    {activePlan.title}
                  </h3>
                </div>
                <button
                  type="button"
                  id="view-blueprint-btn"
                  onClick={handleOpenBlueprint}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-[2px] border border-[#1A1A1A] bg-[#FAF8F5] text-[#1A1A1A] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#1A1A1A] hover:text-[#FAF8F5] transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 stroke-[1.5]" />
                  <span>View Blueprint</span>
                </button>
              </div>

              {/* Interactive Blueprint Canvas Preview */}
              <button
                type="button"
                onClick={handleOpenBlueprint}
                aria-label={`Open zoomable architectural blueprint for ${activePlan.title}`}
                className="group relative block w-full border border-[#E2DDD5] hover:border-[#B89758] bg-[#FAF8F5] rounded-[2px] overflow-hidden cursor-zoom-in text-left transition-colors duration-300"
              >
                <BlueprintCanvas plan={activePlan} unitMode={unitMode} />
              </button>

              {/* Carpet Area Metric Strip */}
              <div className="mt-5 grid grid-cols-3 divide-x divide-[#E2DDD5] border border-[#E2DDD5] bg-[#FAF8F5] rounded-[2px]">
                <div className="p-3 sm:p-4">
                  <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#5C5852]">
                    RERA Carpet
                  </p>
                  <p className="mt-1 font-serif text-lg sm:text-2xl text-[#1A1A1A] tabular-spec whitespace-nowrap">
                    {formatArea(activePlan.reraCarpetSqFt, unitMode)}
                  </p>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#5C5852]">
                    Sun Deck
                  </p>
                  <p className="mt-1 font-serif text-lg sm:text-2xl text-[#1A1A1A] tabular-spec whitespace-nowrap">
                    {formatArea(activePlan.deckAreaSqFt, unitMode)}
                  </p>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#8C6F39]">
                    Total Usable
                  </p>
                  <p className="mt-1 font-serif text-lg sm:text-2xl text-[#1A1A1A] tabular-spec whitespace-nowrap">
                    {formatArea(activePlan.totalUsableSqFt, unitMode)}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Specification Sheet & Room Dimensions (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-sm text-[#5C5852] leading-relaxed">
                  {activePlan.subtitle}
                </p>

                {/* Key Metadata Row */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 pb-5 border-b border-[#E2DDD5]">
                  <div className="flex items-start gap-2.5">
                    <Compass className="w-4 h-4 text-[#B89758] stroke-[1.5] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852]">
                        Orientation
                      </p>
                      <p className="text-xs font-medium text-[#1A1A1A] mt-0.5">
                        {activePlan.orientation}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Car className="w-4 h-4 text-[#B89758] stroke-[1.5] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852]">
                        Parking Allocation
                      </p>
                      <p className="text-xs font-medium text-[#1A1A1A] mt-0.5">
                        {activePlan.parking}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Room-by-Room Dimension Breakdown */}
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#1A1A1A]">
                      Room-by-Room Dimensions
                    </p>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#8C6F39] tabular-spec">
                      {unitMode === "sqft" ? "Feet & Inches" : "Meters (SI)"}
                    </span>
                  </div>

                  <div className="border border-[#E2DDD5] bg-white rounded-[2px] divide-y divide-[#E2DDD5]">
                    {activePlan.rooms.map((room) => (
                      <div
                        key={room.name}
                        className="px-4 py-3 flex items-center justify-between gap-4"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-[#1A1A1A] truncate">
                            {room.name}
                          </p>
                          {room.note && (
                            <p className="text-[11px] text-[#5C5852]">
                              {room.note}
                            </p>
                          )}
                        </div>
                        <span className="text-xs sm:text-[13px] font-medium text-[#1A1A1A] tabular-spec shrink-0">
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

                {/* Architectural Highlights */}
                <ul className="mt-5 space-y-2">
                  {activePlan.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#5C5852] leading-relaxed"
                    >
                      <Layers className="w-3.5 h-3.5 text-[#B89758] stroke-[1.5] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Indicative Guidance & Action Pair */}
              <div className="pt-5 border-t border-[#E2DDD5] space-y-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#5C5852]">
                    Indicative Offering
                  </span>
                  <span className="font-serif text-2xl text-[#1A1A1A] tabular-spec">
                    {activePlan.indicativePrice}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    id="download-brochure-btn"
                    onClick={() => {
                      setBrochureSubmitted(false);
                      setBrochureDrawerOpen(true);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-[2px] bg-[#1A1A1A] text-[#FAF8F5] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#B89758] hover:text-[#1A1A1A] transition-colors duration-300"
                  >
                    <Download className="w-3.5 h-3.5 stroke-[1.5]" />
                    <span>Download Brochure</span>
                  </button>

                  <a
                    href="#book-visit"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-[2px] border border-[#1A1A1A] bg-transparent text-[#1A1A1A] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#EFECE6] transition-colors duration-300"
                  >
                    <span>Enquire {activePlan.tabLabel}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Click-to-Zoom Architectural Blueprint Modal */}
      <AnimatePresence>
        {blueprintModalOpen && (
          <motion.div
            id="blueprint-zoom-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${activePlan.title} Blueprint Inspection`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setBlueprintModalOpen(false)}
            className="fixed inset-0 z-50 bg-[#161412]/80 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl max-h-[90vh] bg-[#FAF8F5] border border-[#E2DDD5] rounded-[2px] flex flex-col overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="px-5 sm:px-6 py-4 border-b border-[#E2DDD5] bg-[#EFECE6] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#8C6F39]">
                    MahaRERA {PROJECT_INFO.reraNumber} · {activePlan.elevationLevels}
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A]">
                    {activePlan.title} —{" "}
                    <span className="tabular-spec">
                      {formatArea(activePlan.reraCarpetSqFt, unitMode)}
                    </span>
                  </h3>
                </div>

                {/* Zoom & Unit Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setUnitMode((m) => (m === "sqft" ? "sqmt" : "sqft"))
                    }
                    className="px-3 py-1.5 rounded-[2px] border border-[#E2DDD5] bg-[#FAF8F5] text-[11px] uppercase tracking-[0.14em] text-[#1A1A1A] hover:border-[#B89758]"
                  >
                    {unitMode === "sqft" ? "Switch to Sq. Mt." : "Switch to Sq. Ft."}
                  </button>
                  <button
                    type="button"
                    aria-label="Zoom out blueprint"
                    onClick={() => setZoomLevel((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
                    className="w-8 h-8 rounded-[2px] border border-[#E2DDD5] bg-[#FAF8F5] flex items-center justify-center text-[#1A1A1A] hover:border-[#1A1A1A]"
                  >
                    <ZoomOut className="w-4 h-4 stroke-[1.5]" />
                  </button>
                  <span className="text-xs font-medium tabular-spec min-w-[44px] text-center text-[#1A1A1A]">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    id="blueprint-zoom-in-btn"
                    aria-label="Zoom in blueprint"
                    onClick={() => setZoomLevel((z) => Math.min(2.25, +(z + 0.25).toFixed(2)))}
                    className="w-8 h-8 rounded-[2px] border border-[#E2DDD5] bg-[#FAF8F5] flex items-center justify-center text-[#1A1A1A] hover:border-[#1A1A1A]"
                  >
                    <ZoomIn className="w-4 h-4 stroke-[1.5]" />
                  </button>
                  <button
                    type="button"
                    aria-label="Reset blueprint zoom"
                    onClick={() => setZoomLevel(1)}
                    className="w-8 h-8 rounded-[2px] border border-[#E2DDD5] bg-[#FAF8F5] flex items-center justify-center text-[#1A1A1A] hover:border-[#1A1A1A]"
                  >
                    <RotateCcw className="w-3.5 h-3.5 stroke-[1.5]" />
                  </button>
                  <button
                    type="button"
                    id="blueprint-close-btn"
                    aria-label="Close blueprint modal"
                    onClick={() => setBlueprintModalOpen(false)}
                    className="ml-2 w-8 h-8 rounded-[2px] bg-[#1A1A1A] text-[#FAF8F5] flex items-center justify-center hover:bg-[#B89758] hover:text-[#1A1A1A] transition-colors"
                  >
                    <X className="w-4 h-4 stroke-[1.5]" />
                  </button>
                </div>
              </div>

              {/* Scrollable / Zoomable Viewport */}
              <div className="flex-1 overflow-auto p-6 bg-[#FAF8F5] flex items-center justify-center">
                <div
                  style={{
                    width: `${zoomLevel * 100}%`,
                    maxWidth: zoomLevel === 1 ? "780px" : "none",
                    transition: "width 240ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <BlueprintCanvas plan={activePlan} unitMode={unitMode} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download Brochure Slide-Over Drawer */}
      <AnimatePresence>
        {brochureDrawerOpen && (
          <motion.div
            id="brochure-drawer-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Download Architectural Brochure"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setBrochureDrawerOpen(false)}
            className="fixed inset-0 z-50 bg-[#161412]/60 backdrop-blur-sm"
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#FAF8F5] border-l border-[#E2DDD5] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E2DDD5]">
                  <div>
                    <p className="eyebrow-label text-[#8C6F39]">
                      Digital Architectural Dossier
                    </p>
                    <h3 className="font-serif text-3xl text-[#1A1A1A] mt-1">
                      Download Brochure
                    </h3>
                  </div>
                  <button
                    type="button"
                    id="brochure-drawer-close"
                    aria-label="Close brochure drawer"
                    onClick={() => setBrochureDrawerOpen(false)}
                    className="w-9 h-9 rounded-[2px] border border-[#E2DDD5] flex items-center justify-center text-[#1A1A1A] hover:border-[#1A1A1A]"
                  >
                    <X className="w-4 h-4 stroke-[1.5]" />
                  </button>
                </div>

                {/* Dossier Summary Strip */}
                <div className="mt-6 p-4 border border-[#E2DDD5] bg-[#EFECE6] rounded-[2px] flex items-start gap-3.5">
                  <FileText className="w-5 h-5 text-[#8C6F39] stroke-[1.5] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">
                      {PROJECT_INFO.projectName} — {activePlan.shortLabel}
                    </p>
                    <p className="text-xs text-[#5C5852] mt-1">
                      Includes full scaled CAD floor plans, MahaRERA carpet
                      schedule, material specifications, and payment milestones
                      (PDF · 6.4 MB).
                    </p>
                  </div>
                </div>

                {brochureSubmitted ? (
                  <div className="mt-8 p-6 border border-[#E2DDD5] bg-white rounded-[2px] space-y-4">
                    <div className="flex items-center gap-2.5 text-[#1F6F4A]">
                      <CheckCircle2 className="w-5 h-5 stroke-[1.5]" />
                      <p className="text-xs uppercase tracking-[0.15em] font-medium">
                        Brochure Ready
                      </p>
                    </div>
                    <h4 className="font-serif text-2xl text-[#1A1A1A]">
                      Thank you, {brochureForm.name}.
                    </h4>
                    <p className="text-sm text-[#5C5852] leading-relaxed">
                      We have prepared the{" "}
                      <strong>{activePlan.shortLabel}</strong> brochure and sent
                      a copy to your WhatsApp/phone{" "}
                      <span className="tabular-spec font-medium text-[#1A1A1A]">
                        +91 {brochureForm.phone}
                      </span>
                      .
                    </p>
                    <a
                      href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                        `${PROJECT_INFO.developerName} — ${PROJECT_INFO.projectName}\nLocation: ${PROJECT_INFO.locationFull}\nMahaRERA: ${PROJECT_INFO.reraNumber}\nSelected Plan: ${activePlan.title} (${formatArea(activePlan.reraCarpetSqFt, unitMode)} RERA Carpet)\nPossession: ${PROJECT_INFO.possessionTimeline}\nSales Concierge: ${PROJECT_INFO.salesPhoneDisplay}`
                      )}`}
                      download={`The-Aurelia-${activePlan.id.toUpperCase()}-Dossier.txt`}
                      className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-[2px] bg-[#1A1A1A] text-[#FAF8F5] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#B89758] hover:text-[#1A1A1A] transition-colors"
                    >
                      <Download className="w-4 h-4 stroke-[1.5]" />
                      <span>Save Specification Summary</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleBrochureSubmit} className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor="brochure-name"
                        className="block text-[11px] uppercase tracking-[0.14em] text-[#5C5852] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="brochure-name"
                        type="text"
                        required
                        value={brochureForm.name}
                        onChange={(e) =>
                          setBrochureForm((f) => ({ ...f, name: e.target.value }))
                        }
                        placeholder="e.g., Aditya Deshmukh"
                        className="w-full px-3.5 py-3 rounded-[2px] border border-[#E2DDD5] bg-white text-sm text-[#1A1A1A] focus:outline-none focus:border-[#B89758]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="brochure-phone"
                        className="block text-[11px] uppercase tracking-[0.14em] text-[#5C5852] mb-1.5"
                      >
                        Mobile / WhatsApp Number *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 border border-r-0 border-[#E2DDD5] bg-[#EFECE6] text-xs font-medium text-[#5C5852] tabular-spec rounded-l-[2px]">
                          +91
                        </span>
                        <input
                          id="brochure-phone"
                          type="tel"
                          required
                          pattern="[0-9\s\-]{10,13}"
                          value={brochureForm.phone}
                          onChange={(e) =>
                            setBrochureForm((f) => ({
                              ...f,
                              phone: e.target.value,
                            }))
                          }
                          placeholder="98220 00000"
                          className="w-full px-3.5 py-3 rounded-r-[2px] border border-[#E2DDD5] bg-white text-sm text-[#1A1A1A] tabular-spec focus:outline-none focus:border-[#B89758]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="brochure-email"
                        className="block text-[11px] uppercase tracking-[0.14em] text-[#5C5852] mb-1.5"
                      >
                        Email Address (Optional)
                      </label>
                      <input
                        id="brochure-email"
                        type="email"
                        value={brochureForm.email}
                        onChange={(e) =>
                          setBrochureForm((f) => ({
                            ...f,
                            email: e.target.value,
                          }))
                        }
                        placeholder="aditya@example.com"
                        className="w-full px-3.5 py-3 rounded-[2px] border border-[#E2DDD5] bg-white text-sm text-[#1A1A1A] focus:outline-none focus:border-[#B89758]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-[2px] bg-[#1A1A1A] text-[#FAF8F5] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#B89758] hover:text-[#1A1A1A] transition-colors"
                    >
                      <Download className="w-4 h-4 stroke-[1.5]" />
                      <span>Unlock Digital Brochure</span>
                    </button>
                  </form>
                )}
              </div>

              <p className="mt-8 pt-4 border-t border-[#E2DDD5] text-[11px] text-[#5C5852] leading-relaxed">
                Your contact information is strictly confidential and used solely
                by {PROJECT_INFO.developerName} to share official MahaRERA
                project documentation.
              </p>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
