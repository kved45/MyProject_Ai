"use client";

import {
  formatArea,
  formatRoomDimensions,
  type BrochureFlatUnit,
  type UnitAreaMode,
} from "@/data/projectData";

interface ProjectBlueprintSvgProps {
  unit: BrochureFlatUnit;
  unitMode: UnitAreaMode;
  projectTitle: string;
}

interface RoomBox {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  roomIdx: number;
  isLiving?: boolean;
  isBalcony?: boolean;
}

const LAYOUT_2BHK: RoomBox[] = [
  { x: 52, y: 52, w: 300, h: 62, label: "SIT-OUT BALCONY", roomIdx: 4, isBalcony: true },
  { x: 52, y: 114, w: 300, h: 170, label: "LIVING & DINING LOUNGE", roomIdx: 0, isLiving: true },
  { x: 352, y: 52, w: 196, h: 170, label: "MASTER BEDROOM", roomIdx: 1 },
  { x: 352, y: 222, w: 196, h: 184, label: "SECOND BEDROOM", roomIdx: 2 },
  { x: 52, y: 284, w: 186, h: 122, label: "MODULAR KITCHEN & UTILITY", roomIdx: 3 },
  { x: 238, y: 284, w: 114, h: 122, label: "FOYER & BATHS", roomIdx: 4 },
];

const LAYOUT_3BHK: RoomBox[] = [
  { x: 48, y: 48, w: 326, h: 60, label: "SIT-OUT BALCONY DECK", roomIdx: 5, isBalcony: true },
  { x: 48, y: 108, w: 326, h: 162, label: "GRAND LIVING & DINING", roomIdx: 0, isLiving: true },
  { x: 374, y: 48, w: 178, h: 172, label: "MASTER BEDROOM", roomIdx: 1 },
  { x: 374, y: 220, w: 178, h: 188, label: "BEDROOM II", roomIdx: 2 },
  { x: 48, y: 270, w: 164, h: 138, label: "BEDROOM III / STUDY", roomIdx: 3 },
  { x: 212, y: 270, w: 162, h: 138, label: "KITCHEN & UTILITY", roomIdx: 4 },
];

export function ProjectBlueprintSvg({
  unit,
  unitMode,
  projectTitle,
}: ProjectBlueprintSvgProps) {
  const boxes = unit.bhk === "3 BHK" ? LAYOUT_3BHK : LAYOUT_2BHK;
  const patternId = `proj-hatch-${unit.id}`;

  return (
    <svg
      viewBox="0 0 600 460"
      role="img"
      aria-label={`Architectural floor plan for ${projectTitle} ${unit.wing ? `${unit.wing} ` : ""}${unit.flatNumber} (${unit.bhk})`}
      className="w-full h-auto block select-none"
    >
      <defs>
        <pattern
          id={patternId}
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
            stroke="var(--proj-accent)"
            strokeOpacity="0.32"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      {/* Sheet Ground */}
      <rect x="0" y="0" width="600" height="460" fill="var(--proj-elevated)" />
      <rect
        x="14"
        y="14"
        width="572"
        height="432"
        fill="none"
        stroke="var(--proj-border)"
        strokeWidth="1"
      />

      {/* Top Elevation Dimension Line */}
      <line
        x1="48"
        y1="30"
        x2="552"
        y2="30"
        stroke="var(--proj-accent)"
        strokeWidth="0.9"
        strokeDasharray="3 3"
      />
      <line x1="48" y1="26" x2="48" y2="34" stroke="var(--proj-accent)" strokeWidth="1" />
      <line x1="552" y1="26" x2="552" y2="34" stroke="var(--proj-accent)" strokeWidth="1" />
      <text
        x="300"
        y="26"
        textAnchor="middle"
        fill="var(--proj-muted)"
        fontSize="8.5"
        letterSpacing="1.4"
        fontFamily="var(--font-sans)"
      >
        {unit.wing ? `${unit.wing.toUpperCase()} · ` : ""}
        {unit.flatNumber.toUpperCase()} · {unit.bhk} ({unit.floors.toUpperCase()})
      </text>

      {/* Structural Perimeter Wall */}
      <rect
        x={unit.bhk === "3 BHK" ? 45 : 49}
        y={unit.bhk === "3 BHK" ? 45 : 49}
        width={unit.bhk === "3 BHK" ? 510 : 502}
        height={unit.bhk === "3 BHK" ? 366 : 360}
        fill="none"
        stroke="var(--proj-primary)"
        strokeWidth="2.4"
      />

      {/* Rooms */}
      {boxes.map((box, idx) => {
        const room = unit.rooms[box.roomIdx] ?? unit.rooms[0];
        const dimText = formatRoomDimensions(room.widthFt, room.lengthFt, unitMode);
        const cx = box.x + box.w / 2;
        const cy = box.y + box.h / 2;

        return (
          <g key={`${unit.id}-box-${idx}`}>
            <rect
              x={box.x}
              y={box.y}
              width={box.w}
              height={box.h}
              fill={
                box.isBalcony
                  ? `url(#${patternId})`
                  : box.isLiving
                  ? "var(--proj-surface)"
                  : "var(--proj-elevated)"
              }
              stroke="var(--proj-primary)"
              strokeWidth={box.isBalcony ? "1.1" : "1.3"}
            />

            {box.isBalcony && (
              <line
                x1={box.x + 24}
                y1={box.y + box.h}
                x2={box.x + box.w - 24}
                y2={box.y + box.h}
                stroke="var(--proj-accent)"
                strokeWidth="2.5"
              />
            )}

            {!box.isBalcony && idx > 1 && (
              <path
                d={`M ${box.x} ${box.y + 20} A 16 16 0 0 1 ${box.x + 16} ${box.y + 4}`}
                fill="none"
                stroke="var(--proj-accent)"
                strokeWidth="0.9"
                strokeDasharray="2 2"
              />
            )}

            <text
              x={cx}
              y={cy - 5}
              textAnchor="middle"
              fill="var(--proj-ink)"
              fontSize={box.w < 130 ? "7.8" : "9"}
              fontWeight="600"
              letterSpacing="0.8"
              fontFamily="var(--font-sans)"
            >
              {box.label}
            </text>

            <text
              x={cx}
              y={cy + 10}
              textAnchor="middle"
              fill="var(--proj-muted)"
              fontSize="9.2"
              fontFamily="var(--font-sans)"
            >
              {dimText}
            </text>
          </g>
        );
      })}

      {/* Sheet Title Footer */}
      <line
        x1="28"
        y1="422"
        x2="572"
        y2="422"
        stroke="var(--proj-border)"
        strokeWidth="1"
      />

      <g transform="translate(46, 434)">
        <circle
          cx="0"
          cy="0"
          r="8"
          fill="none"
          stroke="var(--proj-primary)"
          strokeWidth="0.9"
        />
        <polygon points="0,-6 2.5,2 0,0.5 -2.5,2" fill="var(--proj-accent)" />
        <text
          x="14"
          y="3"
          fill="var(--proj-muted)"
          fontSize="8.5"
          letterSpacing="1.2"
          fontFamily="var(--font-sans)"
        >
          NORTH · {projectTitle.toUpperCase()}
        </text>
      </g>

      <text
        x="568"
        y="437"
        textAnchor="end"
        fill="var(--proj-primary)"
        fontSize="9"
        fontWeight="600"
        letterSpacing="0.8"
        fontFamily="var(--font-sans)"
      >
        AREA:{" "}
        {formatArea(
          unit.areaSqFt,
          unitMode,
          unit.exactSqFtDisplay,
          unit.exactSqMtDisplay
        ).toUpperCase()}
      </text>
    </svg>
  );
}
