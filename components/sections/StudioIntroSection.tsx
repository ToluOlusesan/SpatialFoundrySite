"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function StudioIntroSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Eyebrow with accent-bar */}
        <RevealOnScroll className="mb-10">
          <span className="eyebrow accent-bar">The Studio</span>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-20">

          {/* Left: display heading + CTA */}
          <RevealOnScroll delay={0.06} className="flex flex-col justify-between gap-12 md:col-span-7">
            <h2
              className="font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(2.25rem, 5vw, 4.5rem)",
                letterSpacing: "-0.025em",
                lineHeight:    1.05,
              }}
            >
              We&apos;re Spatial Foundry.
            </h2>
            <Link
              href="/about"
              className="group self-start inline-flex items-center gap-2 rounded-full bg-fg px-7 py-3.5 font-body text-[0.875rem] font-medium uppercase tracking-[0.12em] text-bg transition-all duration-[350ms] hover:bg-fg/90 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              More About the Studio
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </RevealOnScroll>

          {/* Right: body copy */}
          <div className="flex flex-col justify-center md:col-span-5">
            <RevealOnScroll delay={0.12}>
              <p
                className="font-body text-fg/70"
                style={{ lineHeight: 1.7, maxWidth: "50ch" }}
              >
                Spatial Foundry is a 3D branding studio built around a single
                conviction: that the most compelling identities aren&apos;t flat.
                We build brand objects, icon systems, and motion assets that make
                abstract ideas hold their own weight in the world.
              </p>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
