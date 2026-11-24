"use client";

import type { HTMLAttributes, ReactNode } from "react";

export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

interface EditorialRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  y?: number;
}

/**
 * Renders immediately visible (opacity: 1, visibility: visible) during SSR and
 * initial paint so content can never get stuck invisible under strict scroll
 * containers, iframes, or delayed hydration.
 */
export function EditorialReveal({
  children,
  className = "",
  ...rest
}: EditorialRevealProps) {
  const { delay: _delay, y: _y, ...divProps } = rest as EditorialRevealProps;
  void _delay;
  void _y;

  return (
    <div
      className={`opacity-100 visible ${className}`.trim()}
      {...divProps}
    >
      {children}
    </div>
  );
}
