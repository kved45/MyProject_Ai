export type UnitAreaMode = "sqft" | "sqmt";

export type FloorPlanId = "2bhk" | "3bhk" | "4bhk";

export type ConnectivityTabId = "5mins" | "10mins" | "15mins";

export type ProjectThemeKey = "dream-city" | "royal-heritage";

export interface RoomDimension {
  name: string;
  widthFt: number;
  lengthFt: number;
  note?: string;
}

export interface FloorPlanSpec {
  id: FloorPlanId;
  tabLabel: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  reraCarpetSqFt: number;
  deckAreaSqFt: number;
  totalUsableSqFt: number;
  indicativePrice: string;
  elevationLevels: string;
  orientation: string;
  parking: string;
  highlights: string[];
  rooms: RoomDimension[];
}

export interface LandmarkItem {
  id: string;
  name: string;
  category: string;
  distanceKm: string;
  driveTime: string;
  mapX: number;
  mapY: number;
}

export const PROJECT_INFO = {
  developerName: "Shriniwasa Builders & Developers LLP",
  developerShortName: "Shriniwasa Builders",
  developerMonogram: "SB",
  foundedYear: 1998,
  memberships: ["CREDAI Nagpur", "NAREDCO"] as const,
  membershipsLine: "Member of CREDAI Nagpur & NAREDCO",
  projectName: "Nagpur Luxury Residences",
  tagline: "Trusted Architectural Landmarks Across Nagpur",
  locationShort: "Beltarodi Road, Nagpur",
  locationFull:
    "Block No. G1, Royal Tower, Beltarodi Road, Near Shatabdi Square, Nagpur, Maharashtra",
  reraNumber: "P50500078919",
  reraPortalUrl: "https://maharera.maharashtra.gov.in",
  configurationsSummary: "2 & 3 BHK Luxury Residences",
  possessionTimeline: "Ongoing & Ready-to-Move",
  densitySummary: "CREDAI Nagpur & NAREDCO Member · Est. 1998",
  salesPhoneDisplay: "+91 97667 33105",
  salesPhoneSecondary: "+91 97630 83104",
  salesPhoneHref: "tel:+919766733105",
  whatsappNumber: "919766733105",
  salesEmail: "info@shriniwasabuilders.in",
  officeHours: "Monday – Sunday · 10:00 AM to 7:00 PM",
} as const;

export const NAV_LINKS = [
  { label: "Legacy", href: "#legacy" },
  { label: "Developments", href: "#developments" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
] as const;

export const LEGACY_STATS = [
  {
    value: "28+",
    label: "Years of Legacy",
    detail:
      "Family-led residential and commercial delivery across Nagpur since 1998.",
  },
  {
    value: "4.2M+",
    label: "Sq. Ft. Delivered",
    detail:
      "Landmark multi-wing communities and heritage-core residences built to last.",
  },
  {
    value: "1,850+",
    label: "Happy Families",
    detail:
      "Proud member of CREDAI Nagpur & NAREDCO with transparent MahaRERA compliance.",
  },
] as const;

export const ARCHITECTURAL_PILLARS = [
  {
    number: "01",
    title: "CREDAI & NAREDCO Pedigree",
    description:
      "Every project adheres to ethical documentation, clear land titles, and statutory MahaRERA disclosures from launch through occupancy.",
  },
  {
    number: "02",
    title: "Climate-Responsive Craft",
    description:
      "Cross-ventilated layouts, deep shaded balconies, solar common-area systems, and earthquake-resistant RCC engineering built for Vidarbha.",
  },
  {
    number: "03",
    title: "Prime Nagpur Neighbourhoods",
    description:
      "From Besa–Omkar Nagar's fast-growing residential belt to Mahal's historic heritage core near Chitnavis Wada, every plot is chosen for lasting value.",
  },
] as const;

/* ==========================================================================
   VERIFIED BROCHURE PROJECT DATA (2 DEDICATED THEMED PROJECT ROUTES)
   ========================================================================== */

export interface BrochureFlatUnit {
  id: string;
  flatNumber: string;
  bhk: "2 BHK" | "3 BHK";
  areaSqFt: number;
  exactSqFtDisplay?: string;
  exactSqMtDisplay?: string;
  wing?: "Wing A" | "Wing B";
  floors: string;
  facing: string;
  highlights: string[];
  rooms: RoomDimension[];
}

export interface BrochureAmenity {
  title: string;
  subtitle: string;
  description: string;
  iconName:
    | "waves"
    | "landmark"
    | "trees"
    | "users"
    | "dumbbell"
    | "smile"
    | "shield"
    | "sparkles"
    | "footprints"
    | "sun"
    | "arrowUpDown";
}

export interface BrochureSpecItem {
  id: string;
  category: string;
  summary: string;
  details: string[];
}

export interface BrochureConnectivityItem {
  name: string;
  category: string;
  proximity: string;
  note: string;
  mapX: number;
  mapY: number;
}

export interface BrochureProject {
  slug: "royal-dream-city-2" | "royal-heritage";
  route: string;
  themeKey: ProjectThemeKey;
  title: string;
  subtitle: string;
  badgeText: string;
  developerCredit: string;
  promoterCredit?: string;
  location: string;
  locationShort: string;
  reraNumber?: string;
  floorsSummary: string;
  configurationsSummary: string;
  contacts: { display: string; tel: string; whatsapp: string }[];
  heroImage: string;
  galleryImage: string;
  secondaryImage: string;
  swatchColors: { canvas: string; primary: string; accent: string };
  cardSummary: string;
  wings?: ("Wing A" | "Wing B")[];
  units: BrochureFlatUnit[];
  amenities: BrochureAmenity[];
  technicalSpecs?: BrochureSpecItem[];
  connectivityHighlights: BrochureConnectivityItem[];
  mapCoordinates: string;
  mapCorridorLabel: string;
}

export const BROCHURE_PROJECTS: Record<
  "royal-dream-city-2" | "royal-heritage",
  BrochureProject
> = {
  "royal-dream-city-2": {
    slug: "royal-dream-city-2",
    route: "/projects/royal-dream-city-2",
    themeKey: "dream-city",
    title: "Royal Dream City-2",
    subtitle: "2 & 3 BHK Luxury Apartments",
    badgeText: "MahaRERA P50500078919 · Wings A & B",
    developerCredit: "Shriniwasa Builders & Developers LLP",
    location: "Jairam Colony, Besa–Omkar Nagar Road, Nagpur - 440037",
    locationShort: "Besa–Omkar Nagar Road, Nagpur",
    reraNumber: "P50500078919",
    floorsSummary: "Wings A & B · 1st to 7th Floor",
    configurationsSummary: "2 BHK (1,091–1,120 Sq.Ft.) & 3 BHK (1,433–1,457 Sq.Ft.)",
    contacts: [
      { display: "+91 97667 33105", tel: "+919766733105", whatsapp: "919766733105" },
      { display: "+91 97630 83104", tel: "+919763083104", whatsapp: "919763083104" },
    ],
    heroImage: "/images/hero-exterior.jpg",
    galleryImage: "/images/amenity-clubhouse.jpg",
    secondaryImage: "/images/amenity-garden.jpg",
    swatchColors: { canvas: "#FFFFFF", primary: "#1E2B4D", accent: "#E87A24" },
    cardSummary:
      "Twin-wing 7-storey contemporary residential enclave along the Besa–Omkar Nagar corridor with covered swimming pool, Lord Ganesha Temple, podium garden, and full lifestyle clubhouse.",
    wings: ["Wing A", "Wing B"],
    units: [
      // Wing A
      {
        id: "wing-a-101",
        flatNumber: "Flat 101",
        bhk: "3 BHK",
        areaSqFt: 1457,
        wing: "Wing A",
        floors: "1st to 7th Floor",
        facing: "Corner Dual-Aspect · East Entry",
        highlights: [
          "Largest 3 BHK configuration in Wing A with generous living-dining span",
          "Dual balconies providing continuous cross-ventilation",
          "Dedicated modular kitchen platform with adjoining utility balcony",
        ],
        rooms: [
          { name: "Living & Dining Room", widthFt: 18.0, lengthFt: 11.5, note: "Balcony Access" },
          { name: "Master Bedroom", widthFt: 13.5, lengthFt: 11.0, note: "Attached Bath" },
          { name: "Bedroom II", widthFt: 12.0, lengthFt: 10.5, note: "Corner Window" },
          { name: "Bedroom III / Study", widthFt: 11.0, lengthFt: 10.0, note: "Cross-Ventilated" },
          { name: "Modular Kitchen & Wash Area", widthFt: 11.0, lengthFt: 8.0, note: "Granite Platform" },
          { name: "Sit-Out Balcony", widthFt: 12.0, lengthFt: 5.0, note: "Podium Facing" },
        ],
      },
      {
        id: "wing-a-102",
        flatNumber: "Flat 102",
        bhk: "2 BHK",
        areaSqFt: 1105,
        wing: "Wing A",
        floors: "1st to 7th Floor",
        facing: "East / Podium Garden View",
        highlights: [
          "Zero-wastage 2 BHK family layout designed for natural daylight",
          "Spacious living lounge opening onto a shaded front balcony",
          "Two well-proportioned bedrooms with branded CP sanitary fittings",
        ],
        rooms: [
          { name: "Living & Dining Lounge", widthFt: 16.5, lengthFt: 10.5, note: "Front Balcony" },
          { name: "Master Bedroom", widthFt: 12.5, lengthFt: 10.5, note: "Attached Toilet" },
          { name: "Children's / Guest Bedroom", widthFt: 11.5, lengthFt: 10.0, note: "Ample Light" },
          { name: "Kitchen & Dry Balcony", widthFt: 10.0, lengthFt: 7.5, note: "SS Sink & Granite" },
          { name: "Balcony Terrace", widthFt: 10.5, lengthFt: 4.5, note: "Open Sit-Out" },
        ],
      },
      {
        id: "wing-a-103",
        flatNumber: "Flat 103",
        bhk: "2 BHK",
        areaSqFt: 1120,
        wing: "Wing A",
        floors: "1st to 7th Floor",
        facing: "North-East Vastu Friendly",
        highlights: [
          "Enhanced 1,120 Sq.Ft. 2 BHK plan with extended dining niche",
          "Separate dry utility terrace adjoining the granite-top kitchen",
          "Quiet interior orientation overlooking the landscaped courtyard",
        ],
        rooms: [
          { name: "Living & Dining Area", widthFt: 17.0, lengthFt: 10.5, note: "Extended Dining" },
          { name: "Master Bedroom", widthFt: 13.0, lengthFt: 10.5, note: "En-Suite Bath" },
          { name: "Second Bedroom", widthFt: 11.5, lengthFt: 10.0, note: "Dual Aspect" },
          { name: "Kitchen & Utility", widthFt: 10.5, lengthFt: 7.5, note: "Granite Platform" },
          { name: "Private Balcony", widthFt: 11.0, lengthFt: 4.5, note: "Courtyard View" },
        ],
      },
      {
        id: "wing-a-104",
        flatNumber: "Flat 104",
        bhk: "3 BHK",
        areaSqFt: 1448,
        wing: "Wing A",
        floors: "1st to 7th Floor",
        facing: "Corner Open · Avenue Facing",
        highlights: [
          "Expansive 3 BHK corner residence with independent entrance foyer",
          "Three full bedrooms separated cleanly from the formal living room",
          "High-ventilation kitchen with provision for chimney & water purifier",
        ],
        rooms: [
          { name: "Living & Dining Hall", widthFt: 18.0, lengthFt: 11.5, note: "Wide Sit-Out" },
          { name: "Master Bedroom", widthFt: 13.5, lengthFt: 11.0, note: "Attached Bath" },
          { name: "Bedroom II", widthFt: 12.0, lengthFt: 10.5, note: "Avenue View" },
          { name: "Bedroom III", widthFt: 11.0, lengthFt: 10.0, note: "Guest / Parents" },
          { name: "Modular Kitchen & Utility", widthFt: 10.5, lengthFt: 8.0, note: "SS Sink" },
          { name: "Main Balcony", widthFt: 12.0, lengthFt: 5.0, note: "Evening Breeze" },
        ],
      },
      // Wing B
      {
        id: "wing-b-101",
        flatNumber: "Flat 101",
        bhk: "3 BHK",
        areaSqFt: 1433,
        wing: "Wing B",
        floors: "1st to 7th Floor",
        facing: "Corner Residence · Podium Facing",
        highlights: [
          "Well-balanced 1,433 Sq.Ft. 3 BHK floor plate in Wing B",
          "Direct visual connection to the podium garden & temple plaza",
          "Three comfortable bedrooms with vitrified tile flooring throughout",
        ],
        rooms: [
          { name: "Living & Dining Room", widthFt: 17.5, lengthFt: 11.5, note: "Podium Facing" },
          { name: "Master Bedroom", widthFt: 13.0, lengthFt: 11.0, note: "Attached Bath" },
          { name: "Bedroom II", widthFt: 12.0, lengthFt: 10.0, note: "Cross-Ventilated" },
          { name: "Bedroom III", widthFt: 11.0, lengthFt: 10.0, note: "Study / Kids" },
          { name: "Kitchen & Utility", widthFt: 10.5, lengthFt: 8.0, note: "Granite Top" },
          { name: "Balcony Deck", widthFt: 11.5, lengthFt: 5.0, note: "Shaded Sit-Out" },
        ],
      },
      {
        id: "wing-b-102",
        flatNumber: "Flat 102",
        bhk: "2 BHK",
        areaSqFt: 1091,
        wing: "Wing B",
        floors: "1st to 7th Floor",
        facing: "East / Garden Axis",
        highlights: [
          "Efficient 1,091 Sq.Ft. 2 BHK layout tailored for young families",
          "Seamless living-to-balcony daylight corridor",
          "Concealed copper wiring & modular switches in every room",
        ],
        rooms: [
          { name: "Living & Dining Room", widthFt: 16.0, lengthFt: 10.5, note: "Balcony Entry" },
          { name: "Master Bedroom", widthFt: 12.5, lengthFt: 10.0, note: "Attached Toilet" },
          { name: "Second Bedroom", widthFt: 11.5, lengthFt: 10.0, note: "Natural Light" },
          { name: "Kitchen & Wash Balcony", widthFt: 10.0, lengthFt: 7.5, note: "Modular Ready" },
          { name: "Front Balcony", widthFt: 10.0, lengthFt: 4.5, note: "Open Air" },
        ],
      },
      {
        id: "wing-b-103",
        flatNumber: "Flat 103",
        bhk: "2 BHK",
        areaSqFt: 1111,
        wing: "Wing B",
        floors: "1st to 7th Floor",
        facing: "North-East Orientation",
        highlights: [
          "1,111 Sq.Ft. 2 BHK residence with balanced room proportions",
          "Dedicated dining bay beside the granite-platform kitchen",
          "Protected utility space keeping washing appliances neatly tucked away",
        ],
        rooms: [
          { name: "Living & Dining Lounge", widthFt: 16.5, lengthFt: 10.5, note: "Dining Bay" },
          { name: "Master Bedroom", widthFt: 12.5, lengthFt: 10.5, note: "Attached Bath" },
          { name: "Guest / Kids Bedroom", widthFt: 11.5, lengthFt: 10.0, note: "Bright Corner" },
          { name: "Kitchen & Dry Utility", widthFt: 10.5, lengthFt: 7.5, note: "SS Sink" },
          { name: "Sit-Out Balcony", widthFt: 10.5, lengthFt: 4.5, note: "Courtyard View" },
        ],
      },
      {
        id: "wing-b-104",
        flatNumber: "Flat 104",
        bhk: "3 BHK",
        areaSqFt: 1435,
        wing: "Wing B",
        floors: "1st to 7th Floor",
        facing: "Corner Dual-Aspect",
        highlights: [
          "Spacious 1,435 Sq.Ft. 3 BHK corner residence with airy living hall",
          "Thoughtful separation between guest entertaining and private bedrooms",
          "Automatic lift with generator backup steps from the entrance corridor",
        ],
        rooms: [
          { name: "Living & Dining Hall", widthFt: 17.5, lengthFt: 11.5, note: "Corner Daylight" },
          { name: "Master Bedroom", widthFt: 13.5, lengthFt: 11.0, note: "Attached Bath" },
          { name: "Bedroom II", widthFt: 12.0, lengthFt: 10.0, note: "Dual Aspect" },
          { name: "Bedroom III", widthFt: 11.0, lengthFt: 10.0, note: "Flexible Suite" },
          { name: "Kitchen & Utility", widthFt: 10.5, lengthFt: 8.0, note: "Granite Platform" },
          { name: "Balcony Sit-Out", widthFt: 11.5, lengthFt: 5.0, note: "Avenue Breeze" },
        ],
      },
    ],
    amenities: [
      {
        title: "Covered Swimming Pool",
        subtitle: "All-Weather Leisure",
        description:
          "Sheltered swimming pool designed for year-round morning laps and family recreation protected from Nagpur's peak summer sun.",
        iconName: "waves",
      },
      {
        title: "Lord Ganesha Temple",
        subtitle: "Sacred Courtyard",
        description:
          "A tranquil, traditionally proportioned Lord Ganesha Temple integrated within the landscaped community precinct.",
        iconName: "landmark",
      },
      {
        title: "Podium Garden",
        subtitle: "Vehicle-Free Greens",
        description:
          "Elevated landscaped podium lawns with shaded seating alcoves for senior citizens and evening family walks.",
        iconName: "trees",
      },
      {
        title: "Community Hall",
        subtitle: "Celebrations & Gatherings",
        description:
          "Multipurpose indoor hall tailored for family milestones, festive poojas, and society meetings.",
        iconName: "users",
      },
      {
        title: "Fully Equipped Gym",
        subtitle: "Daily Wellness",
        description:
          "Airy fitness studio outfitted with modern cardio and strength equipment exclusively for Wing A & B residents.",
        iconName: "dumbbell",
      },
      {
        title: "Kids Play Area",
        subtitle: "Safe Recreation",
        description:
          "Dedicated child-safe play zone within the gated podium away from vehicular driveways.",
        iconName: "smile",
      },
      {
        title: "24×7 Security",
        subtitle: "Peace of Mind",
        description:
          "Manned entrance cabin, perimeter CCTV surveillance, and intercom connectivity across every residence.",
        iconName: "shield",
      },
    ],
    technicalSpecs: [
      {
        id: "structure",
        category: "01 · Earthquake-Resistant RCC Framed Structure",
        summary: "Seismic-compliant structural engineering for multi-decade longevity",
        details: [
          "Earthquake-resistant RCC framed structure designed as per latest IS seismic codes.",
          "Superior quality brick/AAC block masonry with double-coat weather-resistant exterior plaster.",
          "Smooth gypsum/POP finish on all internal walls ready for low-VOC premium emulsion paint.",
        ],
      },
      {
        id: "flooring",
        category: "02 · Vitrified Flooring",
        summary: "Seamless large-format vitrified tiles with anti-skid wet zones",
        details: [
          "Premium large-format vitrified tile flooring across living, dining, kitchen, and all bedrooms.",
          "Anti-skid ceramic designer tiles in bathrooms, balconies, and utility wash areas.",
          "Granite/stone threshold framing and polished staircase treads in common corridors.",
        ],
      },
      {
        id: "kitchen",
        category: "03 · Modular Kitchen Platform with Granite Top & SS Sink",
        summary: "Ergonomic Indian cooking workspace built for durability",
        details: [
          "Polished black granite cooking platform with branded stainless-steel (SS) sink.",
          "Glazed ceramic dado tiles above platform up to lintel height for effortless cleaning.",
          "Dedicated electrical & plumbing points for water purifier, chimney, refrigerator, and washing machine in utility area.",
        ],
      },
      {
        id: "electrical",
        category: "04 · Concealed Copper Wiring",
        summary: "Fire-retardant ISI wiring with modular switchboards",
        details: [
          "Concealed fire-retardant ISI-grade copper wiring throughout every apartment.",
          "Branded modular switches with MCB & ELCB distribution board for overload protection.",
          "Dedicated AC power points in living room and master bedroom, plus TV/broadband conduits.",
        ],
      },
      {
        id: "plumbing",
        category: "05 · Branded CP Fittings & Sanitaryware",
        summary: "Leak-free concealed plumbing with hot-and-cold mixers",
        details: [
          "Branded chromium-plated (CP) bath fittings and contemporary ceramic sanitaryware.",
          "Concealed CPVC/UPVC corrosion-free plumbing lines with diverter & geyser provision in toilets.",
          "Full-height glazed wall tiles in all bathrooms for lasting hygiene.",
        ],
      },
      {
        id: "lifts",
        category: "06 · Automatic Lifts with Power Backup",
        summary: "Uninterrupted vertical mobility for Wings A & B",
        details: [
          "Reputed-make automatic passenger elevators serving all residential levels (1st to 7th floor).",
          "Dedicated generator/inverter power backup for lifts, water pumps, and common passage lighting.",
          "Firefighting system and rainwater harvesting infrastructure as per NMC/MahaRERA norms.",
        ],
      },
    ],
    connectivityHighlights: [
      {
        name: "Besa–Omkar Nagar Main Road",
        category: "Primary Corridor",
        proximity: "Direct Access",
        note: "Smooth arterial connectivity linking Besa, Manish Nagar, and Ring Road",
        mapX: 300,
        mapY: 162,
      },
      {
        name: "Shatabdi Square & Ring Road",
        category: "Transit Node",
        proximity: "6 Mins",
        note: "Quick access to Beltarodi Road, Narendra Nagar, and Wardha Road",
        mapX: 166,
        mapY: 120,
      },
      {
        name: "Jaiprakash Nagar Metro Station",
        category: "Nagpur Metro",
        proximity: "10 Mins",
        note: "Orange Line metro connectivity to Airport, Sitabuldi & MIHAN",
        mapX: 392,
        mapY: 274,
      },
      {
        name: "Dr. Babasaheb Ambedkar Int'l Airport",
        category: "Aviation & MIHAN",
        proximity: "15 Mins",
        note: "Direct South Nagpur drive to Airport & MIHAN IT SEZ",
        mapX: 438,
        mapY: 332,
      },
    ],
    mapCoordinates: "21.0884° N · 79.0932° E",
    mapCorridorLabel: "BESA – OMKAR NAGAR CORRIDOR · SOUTH NAGPUR",
  },

  "royal-heritage": {
    slug: "royal-heritage",
    route: "/projects/royal-heritage",
    themeKey: "royal-heritage",
    title: "Royal Heritage",
    subtitle: "2 & 3 BHK Royal Residences",
    badgeText: "Opp. Chitnavis Wada · Mahal, Nagpur",
    developerCredit: "Project by Shriniwasa Developers",
    promoterCredit: "Promoted by Shri Sant Lahanuji Developers",
    location:
      "Hiwase Wada, beside Ratan Colony, Opp. Chitnavis Wada, Zenda Chowk, Mahal, Nagpur",
    locationShort: "Zenda Chowk, Mahal, Nagpur",
    floorsSummary: "1st to 7th Floor · Exclusive Low-Density Tower",
    configurationsSummary:
      "3 BHK (1,426.271 & 1,396.024 Sq.Ft.) & 2 BHK (1,000.000 Sq.Ft.)",
    contacts: [
      { display: "+91 77419 67060", tel: "+917741967060", whatsapp: "917741967060" },
      { display: "+91 96893 17175", tel: "+919689317175", whatsapp: "919689317175" },
    ],
    heroImage: "/images/legacy-craft.jpg",
    galleryImage: "/images/amenity-rooftop.jpg",
    secondaryImage: "/images/amenity-living.jpg",
    swatchColors: { canvas: "#FAF4E8", primary: "#6E472B", accent: "#A67C37" },
    cardSummary:
      "A stately 7-storey residential address in historic Mahal opposite Chitnavis Wada—blending heritage neighbourhood warmth with a terrace sky deck, rooftop gym, yoga room, and solar-powered common areas.",
    units: [
      {
        id: "rh-101",
        flatNumber: "Flat 101",
        bhk: "3 BHK",
        areaSqFt: 1426.271,
        exactSqFtDisplay: "1,426.271 Sq.Ft.",
        exactSqMtDisplay: "132.505 Sq.Mt.",
        floors: "1st to 7th Floor",
        facing: "Heritage Front Elevation · East Facing",
        highlights: [
          "Flagship 1,426.271 Sq.Ft. (132.505 Sq.Mt.) 3 BHK Royal Residence",
          "Grand living-dining expanse crafted for multi-generational family life",
          "Direct elevator access via 2 automatic lifts with full power backup",
        ],
        rooms: [
          { name: "Royal Living & Dining Salon", widthFt: 18.5, lengthFt: 12.0, note: "Balcony Sit-Out" },
          { name: "Primary Master Bedroom", widthFt: 13.5, lengthFt: 11.5, note: "Attached Bath" },
          { name: "Second Bedroom Suite", widthFt: 12.0, lengthFt: 10.5, note: "Natural Light" },
          { name: "Third Bedroom / Puja-Study", widthFt: 11.5, lengthFt: 10.0, note: "Versatile Layout" },
          { name: "Kitchen & Utility Balcony", widthFt: 11.0, lengthFt: 8.5, note: "Granite Counter" },
          { name: "Heritage Balcony Deck", widthFt: 12.0, lengthFt: 5.0, note: "Zenda Chowk Breeze" },
        ],
      },
      {
        id: "rh-102",
        flatNumber: "Flat 102",
        bhk: "2 BHK",
        areaSqFt: 1000.0,
        exactSqFtDisplay: "1,000.000 Sq.Ft.",
        exactSqMtDisplay: "92.903 Sq.Mt.",
        floors: "1st to 7th Floor",
        facing: "Ratan Colony Side · Quiet Aspect",
        highlights: [
          "Precision-proportioned 1,000.000 Sq.Ft. (92.903 Sq.Mt.) 2 BHK residence",
          "Thoughtful separation between living lounge and both bedrooms",
          "Abundant natural daylight with zero corridor wastage",
        ],
        rooms: [
          { name: "Living & Dining Room", widthFt: 16.0, lengthFt: 10.5, note: "Opens to Balcony" },
          { name: "Master Bedroom", widthFt: 12.5, lengthFt: 10.5, note: "Attached Toilet" },
          { name: "Guest / Family Bedroom", widthFt: 11.5, lengthFt: 10.0, note: "Quiet Exposure" },
          { name: "Kitchen & Wash Area", widthFt: 10.0, lengthFt: 7.5, note: "Dedicated Utility" },
          { name: "Front Sit-Out Balcony", widthFt: 10.0, lengthFt: 4.5, note: "Shaded Deck" },
        ],
      },
      {
        id: "rh-103",
        flatNumber: "Flat 103",
        bhk: "3 BHK",
        areaSqFt: 1396.024,
        exactSqFtDisplay: "1,396.024 Sq.Ft.",
        exactSqMtDisplay: "129.695 Sq.Mt.",
        floors: "1st to 7th Floor",
        facing: "Corner Cross-Ventilated · Chitnavis Wada Axis",
        highlights: [
          "Spacious 1,396.024 Sq.Ft. (129.695 Sq.Mt.) 3 BHK corner residence",
          "Three airy bedrooms with generous wardrobe alcoves and daylight windows",
          "Designed for quiet central-city comfort minutes from Mahal Market",
        ],
        rooms: [
          { name: "Formal Living & Dining", widthFt: 18.0, lengthFt: 11.5, note: "Dual Aspect" },
          { name: "Master Bedroom", widthFt: 13.5, lengthFt: 11.0, note: "En-Suite Bath" },
          { name: "Bedroom II", widthFt: 12.0, lengthFt: 10.5, note: "Corner Light" },
          { name: "Bedroom III", widthFt: 11.0, lengthFt: 10.0, note: "Parents / Study" },
          { name: "Kitchen & Utility", widthFt: 10.5, lengthFt: 8.0, note: "Granite Platform" },
          { name: "Private Balcony", widthFt: 11.5, lengthFt: 5.0, note: "Heritage Views" },
        ],
      },
    ],
    amenities: [
      {
        title: "Terrace Sky Deck",
        subtitle: "Crown Level Views",
        description:
          "An elevated open-air terrace deck overlooking historic Mahal—crafted for tranquil evenings, family conversations, and sunset views.",
        iconName: "sparkles",
      },
      {
        title: "Rooftop Gym & Yoga Room",
        subtitle: "Elevated Wellbeing",
        description:
          "Sunlit rooftop fitness studio paired with a serene dedicated yoga and meditation room high above city streets.",
        iconName: "dumbbell",
      },
      {
        title: "Resident Temple",
        subtitle: "Daily Devotion",
        description:
          "Peaceful on-premises temple space honoring Mahal's deep cultural and spiritual heritage.",
        iconName: "landmark",
      },
      {
        title: "Walking Track",
        subtitle: "Morning Rituals",
        description:
          "Dedicated senior-friendly rooftop/perimeter walking loop for safe daily exercise right at home.",
        iconName: "footprints",
      },
      {
        title: "Solar Power for Common Areas",
        subtitle: "Sustainable Savings",
        description:
          "Rooftop solar photovoltaic installation powering common lighting and utilities to lower society maintenance costs.",
        iconName: "sun",
      },
      {
        title: "2 Automatic Lifts with Power Backup",
        subtitle: "Effortless Access",
        description:
          "Dual high-reliability automatic elevators with dedicated backup power serving all 7 residential floors.",
        iconName: "arrowUpDown",
      },
    ],
    connectivityHighlights: [
      {
        name: "Chitnavis Wada",
        category: "Historic Landmark",
        proximity: "Opposite (1 Min)",
        note: "Directly opposite Nagpur's iconic cultural heritage estate",
        mapX: 205,
        mapY: 146,
      },
      {
        name: "Zenda Chowk",
        category: "Neighbourhood Square",
        proximity: "1 Min",
        note: "Immediate civic and cultural hub right outside Hiwase Wada",
        mapX: 332,
        mapY: 162,
      },
      {
        name: "Mahal Market",
        category: "Retail & Heritage Bazaar",
        proximity: "2 Mins",
        note: "Effortless walking distance to traditional markets & daily conveniences",
        mapX: 374,
        mapY: 226,
      },
      {
        name: "Central Avenue",
        category: "Major Arterial Road",
        proximity: "4 Mins",
        note: "Fast cross-city transit corridor & Aqua Line Metro connectivity",
        mapX: 298,
        mapY: 88,
      },
      {
        name: "Leading Schools & Colleges",
        category: "Education",
        proximity: "3–6 Mins",
        note: "Surrounded by Nagpur's established heritage schools and academies",
        mapX: 160,
        mapY: 256,
      },
      {
        name: "Multi-Speciality Hospitals",
        category: "Healthcare",
        proximity: "5–8 Mins",
        note: "Rapid access to Central Nagpur's premier hospitals & clinics",
        mapX: 396,
        mapY: 304,
      },
    ],
    mapCoordinates: "21.1458° N · 79.1066° E",
    mapCorridorLabel: "ZENDA CHOWK · MAHAL HERITAGE PRECINCT, NAGPUR",
  },
};

/* ==========================================================================
   HOMEPAGE FLOOR PLAN SHOWCASE (FEATURED UNITS ACROSS PORTFOLIO)
   ========================================================================== */

export const FLOOR_PLANS: FloorPlanSpec[] = [
  {
    id: "2bhk",
    tabLabel: "2 BHK",
    shortLabel: "2 BHK Luxury Residence",
    title: "2 BHK Signature Layout (Royal Dream City-2)",
    subtitle: "Efficient 1,105–1,120 Sq.Ft. Vastu-Compliant Family Residence",
    reraCarpetSqFt: 1120,
    deckAreaSqFt: 95,
    totalUsableSqFt: 1215,
    indicativePrice: "On Request · Besa & Mahal",
    elevationLevels: "1st to 7th Floor",
    orientation: "East / North-East Vastu Compliant",
    parking: "Dedicated Covered Parking",
    highlights: [
      "Available across Royal Dream City-2 (1,091–1,120 Sq.Ft.) & Royal Heritage (1,000 Sq.Ft.)",
      "Large vitrified tile living lounge opening onto a shaded sit-out balcony",
      "Modular kitchen platform with polished granite top, SS sink & utility area",
    ],
    rooms: [
      { name: "Living & Dining Lounge", widthFt: 17.0, lengthFt: 10.5, note: "Balcony Access" },
      { name: "Master Bedroom Suite", widthFt: 13.0, lengthFt: 10.5, note: "Attached Bath" },
      { name: "Second Bedroom", widthFt: 11.5, lengthFt: 10.0, note: "Dual Aspect" },
      { name: "Modular Kitchen & Utility", widthFt: 10.5, lengthFt: 7.5, note: "Granite Platform" },
      { name: "Sit-Out Balcony", widthFt: 11.0, lengthFt: 4.5, note: "Courtyard View" },
    ],
  },
  {
    id: "3bhk",
    tabLabel: "3 BHK",
    shortLabel: "3 BHK Luxury Residence",
    title: "3 BHK Corner Residence (Royal Dream City-2)",
    subtitle: "Expansive 1,433–1,457 Sq.Ft. Corner Sanctuary Across Wings A & B",
    reraCarpetSqFt: 1457,
    deckAreaSqFt: 125,
    totalUsableSqFt: 1582,
    indicativePrice: "On Request · Besa & Mahal",
    elevationLevels: "1st to 7th Floor · Wings A & B",
    orientation: "Corner Open · Cross-Ventilated",
    parking: "Dedicated Covered Parking",
    highlights: [
      "Corner dual-aspect floor plate for continuous cross-ventilation & daylight",
      "Three spacious bedrooms with concealed copper wiring & branded CP fittings",
      "MahaRERA registered (P50500078919) with automatic lifts & generator backup",
    ],
    rooms: [
      { name: "Grand Living & Dining Hall", widthFt: 18.0, lengthFt: 11.5, note: "Podium Facing" },
      { name: "Primary Master Suite", widthFt: 13.5, lengthFt: 11.0, note: "Attached Bath" },
      { name: "Second Bedroom", widthFt: 12.0, lengthFt: 10.5, note: "Corner Window" },
      { name: "Third Bedroom / Study", widthFt: 11.0, lengthFt: 10.0, note: "Parents Suite" },
      { name: "Modular Kitchen & Wash Area", widthFt: 11.0, lengthFt: 8.0, note: "Granite Top & SS Sink" },
      { name: "Sit-Out Balcony", widthFt: 12.0, lengthFt: 5.0, note: "Shaded Deck" },
    ],
  },
  {
    id: "4bhk",
    tabLabel: "3 BHK Royal",
    shortLabel: "3 BHK Royal Heritage",
    title: "3 BHK Royal Residence (Royal Heritage, Mahal)",
    subtitle: "1,426.271 Sq.Ft. (132.505 Sq.Mt.) Stately Residence Opp. Chitnavis Wada",
    reraCarpetSqFt: 1426.271,
    deckAreaSqFt: 120,
    totalUsableSqFt: 1546.271,
    indicativePrice: "On Request · Zenda Chowk, Mahal",
    elevationLevels: "1st to 7th Floor · Flat 101 & 103",
    orientation: "Heritage Frontage · East Facing",
    parking: "Covered Parking · 2 Auto Lifts",
    highlights: [
      "Exact brochure area: 1,426.271 Sq.Ft. (132.505 Sq.Mt.) for Flat 101",
      "Rooftop Terrace Sky Deck, Rooftop Gym & Yoga Room, and Solar Common Areas",
      "Project by Shriniwasa Developers · Promoted by Shri Sant Lahanuji Developers",
    ],
    rooms: [
      { name: "Royal Living & Dining Salon", widthFt: 18.5, lengthFt: 12.0, note: "Heritage Balcony" },
      { name: "Primary Master Bedroom", widthFt: 13.5, lengthFt: 11.5, note: "Attached Bath" },
      { name: "Second Bedroom Suite", widthFt: 12.0, lengthFt: 10.5, note: "Natural Daylight" },
      { name: "Third Bedroom / Study", widthFt: 11.5, lengthFt: 10.0, note: "Family Suite" },
      { name: "Kitchen & Utility", widthFt: 11.0, lengthFt: 8.5, note: "Granite Counter" },
      { name: "Balcony Deck", widthFt: 12.0, lengthFt: 5.0, note: "Open Sit-Out" },
    ],
  },
];

export interface AmenityPhotoCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metric: string;
  iconName: "building" | "sparkles" | "trees";
}

export const AMENITY_PHOTO_CARDS: AmenityPhotoCard[] = [
  {
    id: "clubhouse",
    tag: "01 · Community & Leisure",
    title: "Clubhouse, Community Hall & Gym",
    description:
      "Thoughtfully crafted social and fitness spaces—including fully equipped gyms, yoga rooms, and community halls—built for effortless everyday living.",
    image: "/images/amenity-clubhouse.jpg",
    imageAlt: "Warm limestone and oak private residents clubhouse lounge overlooking evening garden",
    metric: "Royal Dream City-2 & Royal Heritage",
    iconName: "building",
  },
  {
    id: "rooftop",
    tag: "02 · Sky & Water Leisure",
    title: "Terrace Sky Deck & Covered Pool",
    description:
      "From Royal Dream City-2's all-weather covered swimming pool to Royal Heritage's panoramic Terrace Sky Deck & rooftop yoga room.",
    image: "/images/amenity-rooftop.jpg",
    imageAlt: "Rooftop travertine sky deck and infinity water leisure terrace at twilight",
    metric: "Elevated Lifestyle Experiences",
    iconName: "sparkles",
  },
  {
    id: "garden",
    tag: "03 · Sacred & Green",
    title: "Podium Gardens & Resident Temple",
    description:
      "Serene vehicle-free podium gardens, dedicated walking tracks, children's play areas, and tranquil community temples woven into our enclaves.",
    image: "/images/amenity-garden.jpg",
    imageAlt: "Landscaped podium garden courtyard with mature trees and shaded walking paths",
    metric: "Family-Centric Masterplanning",
    iconName: "trees",
  },
];

export const INFRASTRUCTURE_AMENITIES = [
  {
    id: "ev-charging",
    iconName: "zap" as const,
    title: "Automatic Lifts & Power Backup",
    subtitle: "Uninterrupted Comfort",
    description:
      "Reputed automatic elevators with full generator backup across lifts, water pumps, and common passages in every Shriniwasa development.",
  },
  {
    id: "solar",
    iconName: "sun" as const,
    title: "Solar Common-Area Power",
    subtitle: "Sustainable Engineering",
    description:
      "Clean rooftop solar power systems reduce common electricity overheads while supporting an environmentally responsible residential footprint.",
  },
  {
    id: "security",
    iconName: "shield" as const,
    title: "24×7 Security & Earthquake RCC",
    subtitle: "Structural Peace of Mind",
    description:
      "Earthquake-resistant RCC framed structures paired with round-the-clock gated security, CCTV monitoring, and verified MahaRERA compliance.",
  },
];

export interface ConnectivityGroup {
  id: ConnectivityTabId;
  timeLabel: string;
  categoryLabel: string;
  summary: string;
  landmarks: LandmarkItem[];
}

export const CONNECTIVITY_GROUPS: ConnectivityGroup[] = [
  {
    id: "5mins",
    timeLabel: "5 Mins",
    categoryLabel: "Beltarodi & Besa",
    summary:
      "Our Corporate Office at Royal Tower, Beltarodi Road sits moments from Shatabdi Square, Manish Nagar, and our Royal Dream City-2 enclave.",
    landmarks: [
      {
        id: "shatabdi",
        name: "Shatabdi Square & Ring Road",
        category: "Transit Hub",
        distanceKm: "0.7 km",
        driveTime: "3 mins",
        mapX: 215,
        mapY: 146,
      },
      {
        id: "besa-road",
        name: "Royal Dream City-2 (Besa–Omkar Nagar Rd)",
        category: "Signature Project",
        distanceKm: "2.1 km",
        driveTime: "5 mins",
        mapX: 368,
        mapY: 224,
      },
      {
        id: "schools-south",
        name: "Leading CBSE Schools & Clinics",
        category: "Education & Health",
        distanceKm: "1.4 km",
        driveTime: "4 mins",
        mapX: 168,
        mapY: 236,
      },
      {
        id: "manish-nagar",
        name: "Manish Nagar High Street",
        category: "Daily Retail",
        distanceKm: "1.9 km",
        driveTime: "5 mins",
        mapX: 350,
        mapY: 132,
      },
    ],
  },
  {
    id: "10mins",
    timeLabel: "10 Mins",
    categoryLabel: "Metro & Highway",
    summary:
      "Effortless connectivity to Nagpur Metro's Orange Line, Wardha Road NH-44, and Nagpur's central commercial spine.",
    landmarks: [
      {
        id: "wardha-nh44",
        name: "Wardha Road (NH-44) Corridor",
        category: "Highway",
        distanceKm: "2.0 km",
        driveTime: "6 mins",
        mapX: 324,
        mapY: 192,
      },
      {
        id: "jp-metro",
        name: "Jaiprakash Nagar Metro Station",
        category: "Orange Line Metro",
        distanceKm: "2.9 km",
        driveTime: "8 mins",
        mapX: 342,
        mapY: 286,
      },
      {
        id: "chhatrapati-metro",
        name: "Chhatrapati Square Metro Station",
        category: "Metro Interchange",
        distanceKm: "3.1 km",
        driveTime: "9 mins",
        mapX: 286,
        mapY: 112,
      },
      {
        id: "samruddhi-link",
        name: "Samruddhi Mahamarg Feeder Link",
        category: "Expressway",
        distanceKm: "6.4 km",
        driveTime: "10 mins",
        mapX: 468,
        mapY: 318,
      },
    ],
  },
  {
    id: "15mins",
    timeLabel: "15 Mins",
    categoryLabel: "Airport & Mahal",
    summary:
      "Direct reach to Dr. Babasaheb Ambedkar International Airport, MIHAN SEZ, and Nagpur's historic Mahal hub home to Royal Heritage.",
    landmarks: [
      {
        id: "airport",
        name: "Dr. Babasaheb Ambedkar Int'l Airport",
        category: "Aviation",
        distanceKm: "5.2 km",
        driveTime: "12 mins",
        mapX: 416,
        mapY: 338,
      },
      {
        id: "royal-heritage-mahal",
        name: "Royal Heritage (Zenda Chowk, Mahal)",
        category: "Heritage Project",
        distanceKm: "6.8 km",
        driveTime: "15 mins",
        mapX: 256,
        mapY: 66,
      },
      {
        id: "mihan",
        name: "MIHAN SEZ & Global IT Park",
        category: "Business Park",
        distanceKm: "8.9 km",
        driveTime: "15 mins",
        mapX: 312,
        mapY: 356,
      },
      {
        id: "aiims",
        name: "AIIMS Nagpur & IIM Campus",
        category: "Institutional",
        distanceKm: "9.6 km",
        driveTime: "15 mins",
        mapX: 168,
        mapY: 344,
      },
    ],
  },
];

// Exact unit conversion helpers (1 sq ft = 0.092903 sq m; 1 ft = 0.3048 m)
export function formatArea(
  sqFt: number,
  mode: UnitAreaMode,
  exactSqFtDisplay?: string,
  exactSqMtDisplay?: string
): string {
  if (mode === "sqft") {
    if (exactSqFtDisplay) return exactSqFtDisplay;
    const isInt = Number.isInteger(sqFt);
    return `${sqFt.toLocaleString("en-IN", {
      minimumFractionDigits: isInt ? 0 : 1,
      maximumFractionDigits: isInt ? 0 : 3,
    })} Sq.Ft.`;
  }
  if (exactSqMtDisplay) return exactSqMtDisplay;
  const sqMt = sqFt * 0.092903;
  return `${sqMt.toFixed(2)} Sq.Mt.`;
}

export function formatRoomDimensions(
  widthFt: number,
  lengthFt: number,
  mode: UnitAreaMode
): string {
  if (mode === "sqft") {
    const formatFeetInches = (val: number) => {
      const feet = Math.floor(val);
      const inches = Math.round((val - feet) * 12);
      return inches === 0 ? `${feet}'0"` : `${feet}'${inches}"`;
    };
    return `${formatFeetInches(widthFt)} × ${formatFeetInches(lengthFt)}`;
  }
  const wM = (widthFt * 0.3048).toFixed(2);
  const lM = (lengthFt * 0.3048).toFixed(2);
  return `${wM} m × ${lM} m`;
}

export function getWhatsAppUrl(
  customMessage?: string,
  phoneNumber: string = PROJECT_INFO.whatsappNumber
): string {
  const defaultMsg =
    customMessage ??
    `Hello ${PROJECT_INFO.developerName}, I would like to request brochure details and schedule a site visit for your Nagpur residential projects.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMsg)}`;
}
