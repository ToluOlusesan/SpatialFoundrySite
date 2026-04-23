"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 text-center md:px-12">
        <RevealOnScroll>
          <span className="eyebrow mb-8 block">— Start a Project</span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <h2
            className="font-display mx-auto mb-6 font-bold text-fg"
            style={{
              fontSize:      "clamp(2.25rem, 4vw, 3.75rem)",
              letterSpacing: "-0.02em",
              lineHeight:    1.1,
              maxWidth:      "18ch",
            }}
          >
            Ready to give your brand a form it can own?
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.14}>
          <p
            className="mx-auto mb-12 font-body text-base leading-relaxed text-fg"
            style={{ maxWidth: "40ch", lineHeight: 1.65 }}
          >
            Let&apos;s talk about what you&apos;re building.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-fg/20 px-8 py-3.5 font-body text-xs font-medium uppercase tracking-widest text-fg transition-all duration-300 hover:border-fg hover:bg-fg hover:text-bg"
          >
            Start a Project
            <ArrowRight size={12} />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
