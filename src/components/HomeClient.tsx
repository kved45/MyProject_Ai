"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LegacySection } from "@/components/LegacySection";
import { SignatureDevelopmentsSection } from "@/components/SignatureDevelopmentsSection";
import { FloorPlanExplorer } from "@/components/FloorPlanExplorer";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { LocationSection } from "@/components/LocationSection";
import { SiteVisitSection } from "@/components/SiteVisitSection";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { Footer } from "@/components/Footer";

export function HomeClient() {
  const [mobileBookingOpen, setMobileBookingOpen] = useState(false);

  return (
    <>
      <Navbar onOpenBooking={() => setMobileBookingOpen(true)} />
      <main className="min-h-screen w-full relative z-10 flex-1 opacity-100 visible">
        <HeroSection />
        <LegacySection />
        <SignatureDevelopmentsSection />
        <FloorPlanExplorer />
        <AmenitiesSection />
        <LocationSection />
        <SiteVisitSection />
      </main>
      <Footer />
      <MobileStickyBar
        drawerOpen={mobileBookingOpen}
        onOpenDrawer={() => setMobileBookingOpen(true)}
        onCloseDrawer={() => setMobileBookingOpen(false)}
      />
    </>
  );
}
