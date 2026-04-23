"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function StudioIntroSection() {
  return (
    <section className="py-16 md:py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="max-w-[960px]">
          <div>
            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display mb-8 font-bold text-fg"
                style={{
                  fontSize:      "clamp(1.75rem, 3vw, 2.75rem)",
                  letterSpacing: "-0.015em",
                  lineHeight:    1.15,
                  maxWidth:      "22ch",
                }}
              >
                Your brand has a shape.{" "}
                <span className="text-fg">We find it.</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.18}>
              <p
                className="mb-6 font-body text-base leading-relaxed text-fg"
                style={{ maxWidth: "65ch", lineHeight: 1.65 }}
              >
                Spatial Foundry is a 3D branding and design studio built around a
                single conviction: that the most compelling brand identities
                aren&apos;t flat. We build brand objects, icon systems, spatial
                identities, and motion assets that make abstract ideas hold their
                own weight in the world.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.24}>
              <p
                className="mb-10 font-body text-base leading-relaxed text-fg"
                style={{ maxWidth: "65ch", lineHeight: 1.65 }}
              >
                Based in Lagos. Built for the world. Our clients are product
                companies, tech platforms, and creative-led brands who want their
                visual identity to feel like something you could reach out and
                touch.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.28}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-fg/15 px-6 py-2.5 font-body text-xs font-medium uppercase tracking-widest text-fg transition-all duration-300 hover:border-fg hover:bg-fg hover:text-bg"
              >
                More About the Studio
                <ArrowRight size={12} />
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
