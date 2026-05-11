"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Marquee terms — duplicated in markup for seamless loop
const marqueeTerms = [
  "3D Brand Identity",
  "Icon Systems",
  "Motion & Film",
  "Web Illustrations",
  "Form",
  "Texture",
  "Mark",
  "Craft",
];

export function HeroSection() {
  return (
    <section className="relative pt-[72px]">

      {/* ── DARK CARD ── */}
      <div
        className="relative mx-3 overflow-hidden rounded-2xl md:mx-5"
        style={{ height: "calc(78vh - 72px)", minHeight: "520px", background: "#0d0603" }}
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

        {/* Top→bottom legibility scrim (subtle — keeps the top tag and bottom headline readable) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(3,1,1,0.55) 0%, rgba(3,1,1,0.0) 22%, rgba(3,1,1,0.0) 55%, rgba(3,1,1,0.65) 100%)",
          }}
        />

        {/* Film grain — light texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col p-6 md:p-10 lg:p-12">

          {/* Top row: eyebrow + contact pill */}
          <div className="flex items-start justify-between gap-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="font-body text-[10px] font-medium uppercase tracking-[0.22em] text-white/55"
            >
              Spatial Foundry · Est. 2025
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.06] px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12]"
              >
                <span className="font-body text-[11px] font-medium uppercase tracking-widest text-white/65 transition-colors group-hover:text-white/90">
                  Start a Project
                </span>
                <ArrowUpRight size={11} className="text-white/45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Bottom-right headline — smaller, refined statement */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="ml-auto mt-auto max-w-[22ch] text-right font-display font-bold text-white"
            style={{
              fontSize:      "clamp(1.125rem, 1.9vw, 1.875rem)",
              letterSpacing: "-0.015em",
              lineHeight:    1.15,
            }}
          >
            Your brand has form. We define it.
          </motion.h1>

        </div>
      </div>

      {/* ── MARQUEE — service terms scrolling, swaps out the YeahNice-style split wordmark ── */}
      <div
        className="relative mt-8 overflow-hidden border-y border-fg/10 py-5 md:mt-12"
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap md:gap-14">
          {[...marqueeTerms, ...marqueeTerms].map((term, i) => (
            <span key={i} className="flex shrink-0 items-center gap-10 md:gap-14">
              <span
                className="font-display font-bold leading-none text-fg"
                style={{
                  fontSize:      "clamp(2rem, 5vw, 4.25rem)",
                  letterSpacing: "-0.025em",
                }}
              >
                {term}
              </span>
              <span className="text-accent" style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
