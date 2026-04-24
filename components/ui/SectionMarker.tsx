"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface SectionMarkerProps {
  number: string;
  label:  string;
}

// Chapter marker — large numeral, thin rule, tracked caps label.
// Replaces generic <hr> dividers with something that reads as studio/editorial.
export function SectionMarker({ number, label }: SectionMarkerProps) {
  return (
    <div className="mx-auto max-w-[1280px] px-6 md:px-12">
      <RevealOnScroll>
        <div className="flex items-center gap-6 py-6 md:gap-8 md:py-8">
          <span
            className="font-display font-bold text-fg shrink-0"
            style={{
              fontSize:      "clamp(1.75rem, 3vw, 3rem)",
              letterSpacing: "-0.02em",
              lineHeight:    1,
            }}
          >
            {number}
          </span>
          <span className="h-px flex-1 bg-fg/15" aria-hidden="true" />
          <span className="eyebrow shrink-0">— {label}</span>
        </div>
      </RevealOnScroll>
    </div>
  );
}
