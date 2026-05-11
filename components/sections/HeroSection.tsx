"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-[72px]">

      {/* ── DARK CARD ── */}
      <div
        className="relative mx-3 overflow-hidden rounded-2xl md:mx-5"
        style={{ height: "calc(92vh - 72px)", minHeight: "560px", background: "#0a0a0a" }}
      >
        {/* Hero image — fills card */}
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Legibility scrim — soft at top for the tag, deeper at bottom for the headline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 22%, rgba(0,0,0,0.0) 52%, rgba(0,0,0,0.70) 100%)",
          }}
        />

        {/* Film grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col p-6 md:p-10 lg:p-14">

          {/* Top row: eyebrow + contact pill */}
          <div className="flex items-start justify-between gap-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-[10px] font-medium uppercase tracking-[0.22em] text-white/55"
            >
              Spatial Foundry · Est. 2025
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.06] px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/[0.12]"
              >
                <span className="font-body text-[11px] font-medium uppercase tracking-widest text-white/65 transition-colors group-hover:text-white/95">
                  Start a Project
                </span>
                <ArrowUpRight size={11} className="text-white/45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Bottom-right statement */}
          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.55, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="ml-auto mt-auto max-w-[24ch] text-right font-display font-bold text-white"
            style={{
              fontSize:      "clamp(1.125rem, 1.95vw, 1.95rem)",
              letterSpacing: "-0.015em",
              lineHeight:    1.15,
            }}
          >
            Your brand has form. We define it.
          </motion.h1>

        </div>
      </div>

    </section>
  );
}
