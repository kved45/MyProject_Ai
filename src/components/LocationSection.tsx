"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin, Navigation } from "lucide-react";
import {
  CONNECTIVITY_GROUPS,
  PROJECT_INFO,
  type ConnectivityTabId,
} from "@/data/projectData";
import { EASE_EDITORIAL, EditorialReveal } from "@/components/MotionPrimitives";

export function LocationSection() {
  const [activeTab, setActiveTab] = useState<ConnectivityTabId>("5mins");

  const activeGroup =
    CONNECTIVITY_GROUPS.find((g) => g.id === activeTab) ?? CONNECTIVITY_GROUPS[0];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    PROJECT_INFO.locationFull
  )}`;

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="bg-[#FAF8F5] py-20 md:py-28 lg:py-32 border-b border-[#E2DDD5]"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <EditorialReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E2DDD5]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#B89758]" aria-hidden="true" />
              <p className="eyebrow-label text-[#8C6F39]">
                05 · Corporate Office &amp; Nagpur Reach
              </p>
            </div>
            <h2
              id="location-heading"
              className="font-serif font-normal text-[#1A1A1A] text-[clamp(2.1rem,3.6vw,3.25rem)] leading-[1.12] tracking-[-0.015em]"
            >
              Beltarodi Road to Mahal:{" "}
              <span className="italic">Rooted Across Nagpur.</span>
            </h2>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-medium text-[#1A1A1A] hover:text-[#8C6F39] transition-colors self-start lg:self-end pb-1 border-b border-[#1A1A1A] hover:border-[#B89758]"
          >
            <Navigation className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Open in Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
          </a>
        </EditorialReveal>

        {/* Main 12-Col Split: Proximity Tabs (5 cols) + Styled Architectural Map Card (7 cols) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Interactive Proximity Panel */}
          <div className="lg:col-span-5">
            {/* Proximity Tabs: 5 Mins | 10 Mins | 15 Mins */}
            <div
              role="tablist"
              aria-label="Connectivity Travel Times"
              className="grid grid-cols-3 border border-[#E2DDD5] bg-[#EFECE6] rounded-[2px] p-1"
            >
              {CONNECTIVITY_GROUPS.map((group) => {
                const isActive = group.id === activeTab;
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    id={`connectivity-tab-${group.id}`}
                    aria-selected={isActive}
                    onClick={() => setActiveTab(group.id)}
                    className={`relative py-3 px-2 rounded-[2px] text-center transition-colors duration-200 ${
                      isActive
                        ? "bg-[#1A1A1A] text-[#FAF8F5]"
                        : "text-[#5C5852] hover:text-[#1A1A1A]"
                    }`}
                  >
                    <span className="block font-serif text-xl leading-none tabular-spec">
                      {group.timeLabel}
                    </span>
                    <span
                      className={`block mt-1 text-[9.5px] uppercase tracking-[0.12em] truncate ${
                        isActive ? "text-[#E6D5B3]" : "text-[#5C5852]"
                      }`}
                    >
                      {group.categoryLabel.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Group Details & Landmark List */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeGroup.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
                className="mt-6"
              >
                <div className="pb-4 border-b border-[#E2DDD5]">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#8C6F39] font-medium">
                    {activeGroup.timeLabel} · {activeGroup.categoryLabel}
                  </p>
                  <p className="mt-2 text-sm text-[#5C5852] leading-[1.68]">
                    {activeGroup.summary}
                  </p>
                </div>

                <ul className="divide-y divide-[#E2DDD5] border-b border-[#E2DDD5]">
                  {activeGroup.landmarks.map((landmark, idx) => (
                    <li
                      key={landmark.id}
                      className="py-4 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-3.5 min-w-0">
                        <span className="w-6 h-6 rounded-[2px] border border-[#E2DDD5] bg-[#EFECE6] flex items-center justify-center text-[10px] font-medium text-[#8C6F39] tabular-spec shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-[#1A1A1A] leading-snug">
                            {landmark.name}
                          </p>
                          <p className="text-[11px] uppercase tracking-[0.12em] text-[#5C5852] mt-0.5">
                            {landmark.category}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <p className="text-xs font-medium text-[#1A1A1A] tabular-spec inline-flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#B89758] stroke-[1.5]" />
                          {landmark.driveTime}
                        </p>
                        <p className="text-[11px] text-[#5C5852] tabular-spec">
                          {landmark.distanceKm}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Site Address Box */}
            <div className="mt-6 p-4 border border-[#E2DDD5] bg-[#EFECE6] rounded-[2px] flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#8C6F39] stroke-[1.5] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#8C6F39] font-medium">
                  Experience Gallery &amp; Site Address
                </p>
                <p className="mt-1 text-xs sm:text-sm text-[#1A1A1A] leading-relaxed">
                  {PROJECT_INFO.locationFull}
                </p>
              </div>
            </div>
          </div>

          {/* Right Styled Editorial Neighborhood Map Card */}
          <div className="lg:col-span-7 border border-[#E2DDD5] bg-[#EFECE6] p-4 sm:p-6 rounded-[2px]">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#E2DDD5]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#8C6F39]">
                  South Nagpur Corridor Map
                </p>
                <p className="font-serif text-xl text-[#1A1A1A]">
                  Corporate Office — {activeGroup.timeLabel} Radius
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852] tabular-spec">
                21.1068° N · 79.0694° E
              </span>
            </div>

            <div className="relative border border-[#E2DDD5] bg-[#FAF8F5] rounded-[2px] overflow-hidden">
              <svg
                viewBox="0 0 560 400"
                role="img"
                aria-label="Stylized architectural neighborhood connectivity map around Narendra Nagar, Nagpur"
                className="w-full h-auto block"
              >
                {/* Warm Map Background */}
                <rect x="0" y="0" width="560" height="400" fill="#FAF8F5" />

                {/* Subtle Architectural Land Blocks */}
                <rect x="28" y="32" width="120" height="82" fill="#EFECE6" />
                <rect x="172" y="32" width="102" height="72" fill="#EFECE6" />
                <rect x="372" y="36" width="150" height="84" fill="#EFECE6" />
                <rect x="36" y="274" width="112" height="90" fill="#EFECE6" />
                <rect x="404" y="218" width="122" height="78" fill="#EFECE6" />

                {/* Concentric Proximity Rings centered at The Aurelia (268, 196) */}
                <circle
                  cx="268"
                  cy="196"
                  r="76"
                  fill="none"
                  stroke="#B89758"
                  strokeOpacity={activeTab === "5mins" ? "0.7" : "0.25"}
                  strokeWidth={activeTab === "5mins" ? "1.3" : "0.9"}
                  strokeDasharray="4 4"
                />
                <circle
                  cx="268"
                  cy="196"
                  r="134"
                  fill="none"
                  stroke="#B89758"
                  strokeOpacity={activeTab === "10mins" ? "0.7" : "0.22"}
                  strokeWidth={activeTab === "10mins" ? "1.3" : "0.9"}
                  strokeDasharray="4 4"
                />
                <circle
                  cx="268"
                  cy="196"
                  r="186"
                  fill="none"
                  stroke="#B89758"
                  strokeOpacity={activeTab === "15mins" ? "0.7" : "0.18"}
                  strokeWidth={activeTab === "15mins" ? "1.3" : "0.9"}
                  strokeDasharray="4 4"
                />

                {/* Arterial Roads: Ring Road (East-West) & Wardha Road NH-44 (North-South) */}
                <path
                  d="M 0 184 Q 140 176 268 196 T 560 178"
                  fill="none"
                  stroke="#D9D2C5"
                  strokeWidth="8"
                />
                <path
                  d="M 0 184 Q 140 176 268 196 T 560 178"
                  fill="none"
                  stroke="#FAF8F5"
                  strokeWidth="1.2"
                  strokeDasharray="6 6"
                />

                {/* Wardha Road NH-44 & Orange Line Metro Spine */}
                <path
                  d="M 294 0 L 324 180 L 368 400"
                  fill="none"
                  stroke="#D9D2C5"
                  strokeWidth="10"
                />
                <path
                  d="M 299 0 L 329 180 L 373 400"
                  fill="none"
                  stroke="#B89758"
                  strokeWidth="1.8"
                  strokeDasharray="5 3"
                />

                {/* Road Labels */}
                <text
                  x="76"
                  y="174"
                  fill="#5C5852"
                  fontSize="8.5"
                  letterSpacing="1.4"
                  fontFamily="var(--font-sans)"
                >
                  RING ROAD
                </text>
                <text
                  x="336"
                  y="78"
                  fill="#5C5852"
                  fontSize="8.5"
                  letterSpacing="1.4"
                  fontFamily="var(--font-sans)"
                >
                  WARDHA RD · NH-44
                </text>
                <text
                  x="384"
                  y="386"
                  fill="#8C6F39"
                  fontSize="8"
                  letterSpacing="1.2"
                  fontFamily="var(--font-sans)"
                >
                  METRO ORANGE LINE
                </text>

                {/* Active Tab Connection Lines & Landmark Markers */}
                {activeGroup.landmarks.map((landmark, idx) => (
                  <g key={landmark.id}>
                    <line
                      x1="268"
                      y1="196"
                      x2={landmark.mapX}
                      y2={landmark.mapY}
                      stroke="#1A1A1A"
                      strokeOpacity="0.3"
                      strokeWidth="1"
                      strokeDasharray="2 3"
                    />
                    <circle
                      cx={landmark.mapX}
                      cy={landmark.mapY}
                      r="11"
                      fill="#FAF8F5"
                      stroke="#1A1A1A"
                      strokeWidth="1.2"
                    />
                    <text
                      x={landmark.mapX}
                      y={landmark.mapY + 3.5}
                      textAnchor="middle"
                      fill="#1A1A1A"
                      fontSize="8.5"
                      fontWeight="600"
                      fontFamily="var(--font-sans)"
                    >
                      0{idx + 1}
                    </text>

                    {/* Compact Landmark Caption Tag */}
                    <rect
                      x={landmark.mapX > 360 ? landmark.mapX - 118 : landmark.mapX + 15}
                      y={landmark.mapY - 11}
                      width="104"
                      height="22"
                      rx="2"
                      fill="#FAF8F5"
                      fillOpacity="0.94"
                      stroke="#E2DDD5"
                      strokeWidth="0.9"
                    />
                    <text
                      x={landmark.mapX > 360 ? landmark.mapX - 66 : landmark.mapX + 67}
                      y={landmark.mapY + 3}
                      textAnchor="middle"
                      fill="#1A1A1A"
                      fontSize="7.6"
                      fontWeight="500"
                      fontFamily="var(--font-sans)"
                    >
                      {landmark.name.length > 19
                        ? `${landmark.name.slice(0, 18)}…`
                        : landmark.name}
                    </text>
                  </g>
                ))}

                {/* Central Site Pin: The Aurelia Residences */}
                <g transform="translate(268, 196)">
                  <circle r="18" fill="#B89758" fillOpacity="0.18" />
                  <circle r="9" fill="#1A1A1A" stroke="#FAF8F5" strokeWidth="2" />
                  <circle r="3" fill="#B89758" />
                  <rect
                    x="-62"
                    y="-38"
                    width="124"
                    height="22"
                    rx="2"
                    fill="#1A1A1A"
                  />
                  <text
                    x="0"
                    y="-24"
                    textAnchor="middle"
                    fill="#FAF8F5"
                    fontSize="8.2"
                    fontWeight="600"
                    letterSpacing="1.1"
                    fontFamily="var(--font-sans)"
                  >
                    ROYAL TOWER OFFICE
                  </text>
                </g>
              </svg>
            </div>

            {/* Map Legend Footer */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#5C5852]">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] inline-block" />
                  Shriniwasa Corporate Office
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-3 h-[2px] bg-[#B89758] inline-block" />
                  Metro Orange Line
                </span>
              </div>
              <span className="tabular-spec">
                Indicative drive times via Google Traffic
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
