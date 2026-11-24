"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PROJECT_INFO } from "@/data/projectData";
import { EASE_EDITORIAL } from "@/components/MotionPrimitives";

interface NavbarProps {
  onOpenBooking?: () => void;
  forceSolid?: boolean;
}

export function Navbar({ onOpenBooking, forceSolid = false }: NavbarProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(forceSolid);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (forceSolid) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceSolid]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const resolveHref = (hashHref: string) => (isHome ? hashHref : `/${hashHref}`);

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (onOpenBooking && window.innerWidth < 768) {
      e.preventDefault();
      onOpenBooking();
    }
  };

  return (
    <>
      <header
        id="site-navbar"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E2DDD5]"
            : "bg-gradient-to-b from-[#161412]/72 via-[#161412]/28 to-transparent border-b border-white/15"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
          {/* Corporate Brand Wordmark (Always Locked to Primary Corporate Theme) */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none min-w-0"
            aria-label={PROJECT_INFO.developerName}
          >
            <span
              className={`w-9 h-9 rounded-[2px] border flex items-center justify-center font-serif text-base tracking-[0.08em] shrink-0 transition-colors duration-300 ${
                scrolled
                  ? "border-[#B89758] text-[#1A1A1A] bg-[#EFECE6]/70"
                  : "border-[#B89758]/80 text-[#FAF8F5] bg-[#161412]/40"
              }`}
            >
              {PROJECT_INFO.developerMonogram}
            </span>
            <span className="flex flex-col min-w-0">
              <span
                className={`font-serif text-base sm:text-[19px] leading-none tracking-[0.01em] truncate transition-colors duration-300 ${
                  scrolled ? "text-[#1A1A1A]" : "text-[#FAF8F5]"
                }`}
              >
                {PROJECT_INFO.developerName}
              </span>
              <span
                className={`text-[9.5px] uppercase tracking-[0.15em] mt-1 truncate transition-colors duration-300 ${
                  scrolled ? "text-[#5C5852]" : "text-[#FAF8F5]/75"
                }`}
              >
                {PROJECT_INFO.membershipsLine}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                className={`text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#B89758] hover:after:w-full after:transition-all after:duration-300 ${
                  scrolled
                    ? "text-[#1A1A1A]/85 hover:text-[#1A1A1A]"
                    : "text-[#FAF8F5]/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              id="nav-book-visit-cta"
              href="#book-visit"
              onClick={handleBookClick}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-[2px] text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-300 border ${
                scrolled
                  ? "bg-[#1A1A1A] text-[#FAF8F5] border-[#1A1A1A] hover:bg-[#B89758] hover:border-[#B89758] hover:text-[#1A1A1A]"
                  : "bg-[#FAF8F5]/12 text-[#FAF8F5] border-[#FAF8F5]/45 backdrop-blur-sm hover:bg-[#FAF8F5] hover:text-[#1A1A1A] hover:border-[#FAF8F5]"
              }`}
            >
              <span>Book a Site Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </a>

            <button
              type="button"
              id="mobile-menu-toggle"
              aria-label={
                mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`xl:hidden w-10 h-10 rounded-[2px] border flex items-center justify-center transition-colors ${
                scrolled
                  ? "border-[#E2DDD5] text-[#1A1A1A] bg-[#FAF8F5]"
                  : "border-white/30 text-[#FAF8F5] bg-[#161412]/35 backdrop-blur-sm"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[1.5]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Slide-Over */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 xl:hidden bg-[#161412]/55 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-[86%] max-w-sm bg-[#FAF8F5] border-l border-[#E2DDD5] p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#E2DDD5]">
                  <div>
                    <p className="font-serif text-lg text-[#1A1A1A]">
                      {PROJECT_INFO.developerName}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#5C5852] mt-0.5">
                      {PROJECT_INFO.membershipsLine}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close navigation menu"
                    className="w-9 h-9 rounded-[2px] border border-[#E2DDD5] flex items-center justify-center text-[#1A1A1A]"
                  >
                    <X className="w-4 h-4 stroke-[1.5]" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col divide-y divide-[#E2DDD5]">
                  {NAV_LINKS.map((link, idx) => (
                    <Link
                      key={link.href}
                      href={resolveHref(link.href)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3.5 flex items-center justify-between text-[#1A1A1A] hover:text-[#8C6F39] transition-colors"
                    >
                      <span className="font-serif text-2xl">{link.label}</span>
                      <span className="text-[11px] tracking-[0.15em] text-[#5C5852] tabular-spec">
                        0{idx + 1}
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* Direct Project Route Links in Mobile Menu */}
                <div className="mt-6 pt-5 border-t border-[#E2DDD5]">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#8C6F39] mb-3">
                    Signature Projects
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/projects/royal-dream-city-2"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-[2px] border border-[#E2DDD5] bg-[#EFECE6]/70 text-sm text-[#1A1A1A]"
                    >
                      <span>Royal Dream City-2</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#8C6F39]" />
                    </Link>
                    <Link
                      href="/projects/royal-heritage"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-[2px] border border-[#E2DDD5] bg-[#EFECE6]/70 text-sm text-[#1A1A1A]"
                    >
                      <span>Royal Heritage</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#8C6F39]" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2DDD5] space-y-4">
                <a
                  href="#book-visit"
                  onClick={handleBookClick}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-[2px] bg-[#1A1A1A] text-[#FAF8F5] text-[11px] uppercase tracking-[0.15em] font-medium"
                >
                  <span>Book a Site Visit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
