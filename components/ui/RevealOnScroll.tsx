"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealOnScrollProps {
  children:   React.ReactNode;
  className?: string;
  delay?:     number;
  /** Override default y-offset (px). Lower = subtler. */
  y?:         number;
  /** Override default blur amount (px). */
  blur?:      number;
}

/**
 * Reveal-on-scroll: opacity + y-translate + blur, gated by intersection.
 * Tuned for a cinematic dark-mode studio feel — elements drift into focus
 * once they enter the viewport (-80px margin so they're firmly in view).
 */
export function RevealOnScroll({
  children,
  className,
  delay = 0,
  y     = 32,
  blur  = 12,
}: RevealOnScrollProps) {
  const ref      = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y,     filter: `blur(${blur}px)` }
      }
      transition={{
        duration: 1.0,
        ease:     [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
