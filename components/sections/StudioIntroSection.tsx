"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function StudioIntroSection() {
  return (
    <section className="pt-16 pb-8 md:pt-20 md:pb-10 lg:pt-[120px] lg:pb-14">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">

        {/* Eyebrow */}
        <RevealOnScroll className="mb-8">
          <span className="eyebrow">— The Studio</span>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">

          {/* Left: large display heading — wider column */}
          <RevealOnScroll delay={0.06} className="md:col-span-7 flex flex-col justify-between gap-12">
            <h2
              className="font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(2.25rem, 5vw, 5rem)",
                letterSpacing: "-0.025em",
                lineHeight:    1.05,
              }}
            >
              We&apos;re Spatial Foundry.
            </h2>
            <Link
              href="/about"
              className="group self-start inline-flex items-center gap-2 rounded-full border border-fg/20 px-6 py-3 font-body text-sm font-medium text-fg transition-all duration-300 hover:border-fg hover:bg-fg hover:text-bg"
            >
              More About the Studio
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </RevealOnScroll>

          {/* Right: subheading + body — narrower column, vertically centered */}
          <div className="md:col-span-5 flex flex-col justify-center gap-6">
            <RevealOnScroll delay={0.12}>
  
            </RevealOnScroll>
            <RevealOnScroll delay={0.18}>
              <p className="font-body text-base text-fg" style={{ lineHeight: 1.7 }}>
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
