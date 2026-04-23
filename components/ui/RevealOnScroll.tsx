"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealOnScrollProps {
  children:  React.ReactNode;
  className?: string;
  delay?:     number;
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  const ref     = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(8px)" }
      }
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
