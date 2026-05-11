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
            className="mx-auto mb-12 font-body text-fg/80"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.125rem)", maxWidth: "40ch", lineHeight: 1.7 }}
          >
            Let&apos;s talk about what you&apos;re building.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-fg px-8 py-4 font-body text-[0.9375rem] font-medium uppercase tracking-[0.12em] text-bg transition-all duration-[350ms] hover:bg-fg/90 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Start a Project
            <ArrowRight size={14} />
          </Link>
        </RevealOnScroll>

      </div>
    </section>
  );
}
