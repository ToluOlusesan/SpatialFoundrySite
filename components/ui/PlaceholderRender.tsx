"use client";

import { motion } from "framer-motion";

interface PlaceholderRenderProps {
  label?:       string;
  aspectRatio?: string;
  className?:   string;
}

export function PlaceholderRender({
  label,
  aspectRatio = "16/9",
  className   = "",
}: PlaceholderRenderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-fg/8 bg-surface ${className}`}
      style={{ aspectRatio }}
    >
      {/* Atmospheric radial — derived from fg so it reads in both themes */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgb(var(--fg) / 0.05) 0%, transparent 70%)",
        }}
      />
      {/* Corner tick marks */}
      <div className="absolute left-4 top-4     h-4 w-4 border-l border-t border-fg/12" />
      <div className="absolute right-4 top-4    h-4 w-4 border-r border-t border-fg/12" />
      <div className="absolute bottom-4 left-4  h-4 w-4 border-b border-l border-fg/12" />
      <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-fg/12" />

      {/* Pulsing label */}
      {label && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: [0.3, 0.65, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span
            className="text-center text-[10px] uppercase tracking-[0.2em] text-fg"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            {label}
          </span>
        </motion.div>
      )}
    </div>
  );
}
