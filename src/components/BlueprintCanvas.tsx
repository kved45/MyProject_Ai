"use client";

import {
  formatArea,
  formatRoomDimensions,
  type FloorPlanId,
  type FloorPlanSpec,
  type UnitAreaMode,
} from "@/data/projectData";

interface BlueprintCanvasProps {
  plan: FloorPlanSpec;
  unitMode: UnitAreaMode;
  className?: string;
}

interface BoxRoom {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  dimIdx: number;
  highlight?: boolean;
  isDeck?: boolean;
}

const PLAN_LAYOUTS: Record<FloorPlanId, BoxRoom[]> = {
  "2bhk": [
    { x: 56, y: 56, w: 300, h: 66, label: "CANTILEVERED SUN DECK", dimIdx: 4, isDeck: true },
    { x: 56, y: 122, w: 300, h: 170, label: "LIVING & DINING LOUNGE", dimIdx: 0, highlight: true },
    { x: 356, y: 56, w: 188, h: 168, label: "MASTER SUITE", dimIdx: 1 },
    { x: 356, y: 224, w: 188, h: 120, label: "GUEST BEDROOM", dimIdx: 2 },
    { x: 56, y: 292, w: 172, h: 112, label: "CHEF'S KITCHEN", dimIdx: 3 },
    { x: 228, y: 292, w: 128, h: 112, label: "FOYER & BATHS", dimIdx: 5 },
    { x: 356, y: 344, w: 188, h: 60, label: "WALK-IN / DRESS", dimIdx: 5 },
  ],
  "3bhk": [
    { x: 48, y: 48, w: 332, h: 62, label: "WRAP-AROUND VERANDAH DECK", dimIdx: 5, isDeck: true },
    { x: 48, y: 110, w: 332, h: 162, label: "GRAND LIVING & DINING", dimIdx: 0, highlight: true },
    { x: 380, y: 48, w: 172, h: 174, label: "PRIMARY MASTER SUITE", dimIdx: 1 },
    { x: 380, y: 222, w: 172, h: 186, label: "SECOND BEDROOM SUITE", dimIdx: 2 },
    { x: 48, y: 272, w: 164, h: 136, label: "PARENTS' / STUDY SUITE", dimIdx: 3 },
    { x: 212, y: 272, w: 168, h: 136, label: "KITCHEN & UTILITY", dimIdx: 4 },
  ],
  "4bhk": [
    { x: 44, y: 44, w: 512, h: 68, label: "PANORAMIC SKY TERRACE DECK", dimIdx: 5, isDeck: true },
    { x: 44, y: 112, w: 312, h: 152, label: "FORMAL LIVING SALON", dimIdx: 0, highlight: true },
    { x: 356, y: 112, w: 200, h: 152, label: "PRIMARY MASTER WING", dimIdx: 2 },
    { x: 44, y: 264, w: 178, h: 146, label: "DINING & DRY PANTRY", dimIdx: 1 },
    { x: 222, y: 264, w: 168, h: 146, label: "BEDROOM SUITES II & III", dimIdx: 3 },
    { x: 390, y: 264, w: 166, h: 146, label: "FOURTH SUITE / STUDY", dimIdx: 4 },
  ],
};

export function BlueprintCanvas({
  plan,
  unitMode,
  className = "",
}: BlueprintCanvasProps) {
  const boxes = PLAN_LAYOUTS[plan.id];

  return (
    <svg
      viewBox="0 0 600 460"
      role="img"
      aria-label={`Architectural floor plan blueprint for ${plan.title} in ${
        unitMode === "sqft" ? "square feet" : "square meters"
      }`}
      className={`w-full h-auto select-none ${className}`}
    >
      <defs>
        <pattern
          id={`deck-hatch-${plan.id}`}
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="8"
            stroke="#B89758"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      {/* Architectural Sheet Background */}
      <rect x="0" y="0" width="600" height="460" fill="#FAF8F5" />

      {/* Outer CAD Sheet Frame */}
      <rect
        x="14"
        y="14"
        width="572"
        height="432"
        fill="none"
        stroke="#E2DDD5"
        strokeWidth="1"
      />

      {/* Dimension Guide Lines (Top & Left) */}
      <line x1="44" y1="30" x2="556" y2="30" stroke="#B89758" strokeWidth="0.75" strokeDasharray="3 3" />
      <line x1="44" y1="26" x2="44" y2="34" stroke="#B89758" strokeWidth="1" />
      <line x1="556" y1="26" x2="556" y2="34" stroke="#B89758" strokeWidth="1" />
      <text
        x="300"
        y="26"
        textAnchor="middle"
        fill="#5C5852"
        fontSize="8.5"
        letterSpacing="1.6"
        fontFamily="var(--font-sans)"
      >
        EAST ELEVATION · PRIMARY DAYLIGHT FACADE
      </text>

      {/* Outer Structural Double Wall Outline */}
      <rect
        x={plan.id === "4bhk" ? 41 : plan.id === "3bhk" ? 45 : 53}
        y={plan.id === "4bhk" ? 41 : plan.id === "3bhk" ? 45 : 53}
        width={plan.id === "4bhk" ? 518 : plan.id === "3bhk" ? 510 : 494}
        height={plan.id === "4bhk" ? 372 : plan.id === "3bhk" ? 366 : 354}
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="2.5"
      />

      {/* Room Partitions */}
      {boxes.map((box, index) => {
        const room = plan.rooms[box.dimIdx] ?? plan.rooms[0];
        const dimLabel = formatRoomDimensions(room.widthFt, room.lengthFt, unitMode);
        const cx = box.x + box.w / 2;
        const cy = box.y + box.h / 2;

        return (
          <g key={`${plan.id}-room-${index}`}>
            <rect
              x={box.x}
              y={box.y}
              width={box.w}
              height={box.h}
              fill={
                box.isDeck
                  ? `url(#deck-hatch-${plan.id})`
                  : box.highlight
                  ? "#EFECE6"
                  : "#FFFFFF"
              }
              stroke="#1A1A1A"
              strokeWidth={box.isDeck ? "1.1" : "1.35"}
            />

            {/* Glazed sliding door indicator between deck and living */}
            {box.isDeck && (
              <line
                x1={box.x + 28}
                y1={box.y + box.h}
                x2={box.x + box.w - 28}
                y2={box.y + box.h}
                stroke="#B89758"
                strokeWidth="2.5"
              />
            )}

            {/* Architectural Door Swing Arcs for realism */}
            {!box.isDeck && index > 1 && (
              <path
                d={`M ${box.x} ${box.y + 22} A 18 18 0 0 1 ${box.x + 18} ${box.y + 4}`}
                fill="none"
                stroke="#B89758"
                strokeWidth="0.9"
                strokeDasharray="2 2"
              />
            )}

            {/* Room Name */}
            <text
              x={cx}
              y={cy - 5}
              textAnchor="middle"
              fill="#1A1A1A"
              fontSize={box.w < 145 ? "8" : "9.2"}
              fontWeight="600"
              letterSpacing="0.9"
              fontFamily="var(--font-sans)"
            >
              {box.label}
            </text>

            {/* Live Converted Dimension Readout */}
            <text
              x={cx}
              y={cy + 10}
              textAnchor="middle"
              fill="#5C5852"
              fontSize="9.5"
              fontFamily="var(--font-sans)"
            >
              {dimLabel}
            </text>
          </g>
        );
      })}

      {/* Architectural Sheet Title Block Footer */}
      <line x1="28" y1="422" x2="572" y2="422" stroke="#E2DDD5" strokeWidth="1" />

      {/* Compass North Indicator */}
      <g transform="translate(46, 434)">
        <circle cx="0" cy="0" r="8" fill="none" stroke="#1A1A1A" strokeWidth="0.9" />
        <polygon points="0,-6 2.5,2 0,0.5 -2.5,2" fill="#B89758" />
        <text
          x="14"
          y="3"
          fill="#5C5852"
          fontSize="8.5"
          letterSpacing="1.2"
          fontFamily="var(--font-sans)"
        >
          NORTH · VASTU ALIGNED
        </text>
      </g>

      {/* RERA Carpet Stamp */}
      <text
        x="568"
        y="437"
        textAnchor="end"
        fill="#1A1A1A"
        fontSize="9"
        fontWeight="600"
        letterSpacing="0.8"
        fontFamily="var(--font-sans)"
      >
        RERA CARPET: {formatArea(plan.reraCarpetSqFt, unitMode).toUpperCase()}
      </text>
    </svg>
  );
}
