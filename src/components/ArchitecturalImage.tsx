"use client";

import { useState } from "react";
import { Building2 } from "lucide-react";

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderLabel?: string;
  loading?: "eager" | "lazy";
}

/**
 * Standard <img> renderer with graceful fallback to a refined architectural
 * placeholder card if a local asset is missing or fails to load.
 */
export function ArchitecturalImage({
  src,
  alt,
  className = "w-full h-full object-cover",
  placeholderLabel,
  loading = "eager",
}: ArchitecturalImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full bg-[#1A1A1A] text-[#FAF8F5] flex flex-col items-center justify-center p-6 text-center border border-[#E2DDD5]/20"
      >
        <Building2
          className="w-7 h-7 text-[#B89758] stroke-[1.25] mb-3"
          aria-hidden="true"
        />
        <p className="font-serif text-lg tracking-[0.02em] text-[#FAF8F5]">
          {placeholderLabel ?? "Architectural Perspective"}
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#C2BCB2]">
          Shriniwasa Builders &amp; Developers LLP
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
