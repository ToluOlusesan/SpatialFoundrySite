"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CTASection() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">

        <RevealOnScroll>
          <div className="mb-8 flex justify-center">
            <span className="eyebrow accent-bar">Start a Project</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <h2
            className="font-display mx-auto mb-6 font-bold text-fg"
            style={{
              fontSize:      "clamp(2.25rem, 4vw, 4rem)",
              letterSpacing: "-0.025em",
              lineHeight:    1.05,
              maxWidth:      "18ch",
            }}
          >
            Ready to give your brand a form it can own?
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.14}>
          <p
            className="mx-auto mb-12 font-body text-fg/60"
            style={{ maxWidth: "40ch", lineHeight: 1.65 }}
          >
            Let&apos;s talk about what you&apos;re building.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-fg/15 px-8 py-3.5 font-body text-[0.875rem] font-medium uppercase tracking-[0.12em] text-fg transition-all duration-[350ms] hover:border-fg/25 hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent"
          >
            Start a Project
            <ArrowRight size={13} />
          </Link>
        </RevealOnScroll>

      </div>
    </section>
  );
}
