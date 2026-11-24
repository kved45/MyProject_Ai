"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, MessageCircle, X } from "lucide-react";
import { PROJECT_INFO, getWhatsAppUrl } from "@/data/projectData";
import { VisitBookingForm } from "@/components/SiteVisitSection";
import { EASE_EDITORIAL } from "@/components/MotionPrimitives";

interface MobileStickyBarProps {
  drawerOpen: boolean;
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
}

export function MobileStickyBar({
  drawerOpen,
  onOpenDrawer,
  onCloseDrawer,
}: MobileStickyBarProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseDrawer();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onCloseDrawer]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      {/* Mobile-Only Sticky Dual CTA Bottom Bar */}
      <div
        id="mobile-sticky-action-bar"
        className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#FAF8F5]/96 backdrop-blur-md border-t border-[#E2DDD5] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      >
        <div className="grid grid-cols-2 gap-3">
          <a
            id="mobile-whatsapp-cta"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-[2px] bg-[#1F6F4A] text-[#FAF8F5] text-[11px] uppercase tracking-[0.14em] font-medium active:scale-[0.99] transition-transform"
          >
            <MessageCircle className="w-4 h-4 stroke-[1.6]" />
            <span>WhatsApp Us</span>
          </a>

          <button
            id="mobile-schedule-visit-cta"
            type="button"
            onClick={onOpenDrawer}
            className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-[2px] bg-[#1A1A1A] text-[#FAF8F5] text-[11px] uppercase tracking-[0.14em] font-medium active:scale-[0.99] transition-transform"
          >
            <Calendar className="w-4 h-4 stroke-[1.5] text-[#B89758]" />
            <span>Schedule Visit</span>
          </button>
        </div>
      </div>

      {/* Mobile Site Visit Bottom Sheet Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            id="mobile-visit-drawer-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Schedule a Site Visit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onCloseDrawer}
            className="fixed inset-0 z-50 bg-[#161412]/65 backdrop-blur-sm flex items-end justify-center"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.38, ease: EASE_EDITORIAL }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg max-h-[88vh] overflow-y-auto bg-[#FAF8F5] border-t border-[#E2DDD5] rounded-t-[2px] p-5 pb-8"
            >
              <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-[#E2DDD5]">
                <div>
                  <p className="eyebrow-label text-[#8C6F39]">
                    {PROJECT_INFO.projectName}
                  </p>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] mt-0.5">
                    Schedule a Private Site Visit
                  </h3>
                </div>
                <button
                  type="button"
                  id="mobile-drawer-close"
                  aria-label="Close site visit drawer"
                  onClick={onCloseDrawer}
                  className="w-9 h-9 rounded-[2px] border border-[#E2DDD5] flex items-center justify-center text-[#1A1A1A]"
                >
                  <X className="w-4 h-4 stroke-[1.5]" />
                </button>
              </div>

              <VisitBookingForm idPrefix="mobile-drawer-visit" compact />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
