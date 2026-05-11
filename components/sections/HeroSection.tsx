"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = ["3D Brand Identity", "Icon Systems", "Motion & Film", "Web Illustrations"];

export function HeroSection() {
  return (
    <section className="relative pt-[72px]">

      {/* ── DARK CARD ── */}
      <div
        className="relative mx-3 overflow-hidden rounded-2xl md:mx-5"
        style={{ height: "calc(80vh - 72px)", minHeight: "540px", background: "#0d0603" }}
      >
        {/* Base */}
        <div className="absolute inset-0 bg-[#0d0603]" />

        {/* Atmosphere */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="lava-blob lava-drift-1" style={{
            width: "80%", height: "65%", left: "-8%", top: "20%",
            background: "radial-gradient(circle at 42% 50%, rgba(175,68,18,0.55) 0%, rgba(115,28,5,0.32) 50%, transparent 78%)",
            filter: "blur(85px)",
          }} />
          <div className="lava-blob lava-drift-2" style={{
            width: "55%", height: "58%", right: "2%", top: "-8%",
            background: "radial-gradient(circle at 55% 45%, rgba(188,118,14,0.46) 0%, rgba(140,48,7,0.26) 48%, transparent 78%)",
            filter: "blur(92px)",
          }} />
          <div className="lava-blob lava-drift-3" style={{
            width: "60%", height: "50%", bottom: "-4%", left: "22%",
            background: "radial-gradient(circle at 50% 60%, rgba(90,14,3,0.62) 0%, rgba(48,7,2,0.34) 55%, transparent 80%)",
            filter: "blur(90px)",
          }} />
        </div>

        {/* Hero image — drop your asset here */}
        {/* <Image src="/images/hero.jpg" alt="" fill className="object-cover object-center" priority /> */}

        {/* Film grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        {/* Vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 135% 110% at 50% 50%, transparent 30%, rgba(3,1,1,0.55) 100%)" }}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col p-6 md:p-10 lg:p-12">

          {/* Top row: eyebrow + contact pill */}
          <div className="flex items-start justify-between gap-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="font-body text-[10px] font-medium uppercase tracking-[0.22em] text-white/45"
            >
              Relentlessly crafted · 3D Branding
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.06] px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.1]"
              >
                <span className="font-body text-[11px] font-medium uppercase tracking-widest text-white/55 transition-colors group-hover:text-white/85">
                  Start a Project
                </span>
                <ArrowUpRight size={11} className="text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Headline — upper area, left-aligned */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-[13ch] font-display font-bold text-white md:mt-14"
            style={{
              fontSize:      "clamp(2.4rem, 5.4vw, 5.5rem)",
              letterSpacing: "-0.03em",
              lineHeight:    1.0,
            }}
          >
            Your brand has form. We define it.
          </motion.h1>

          {/* Services — pinned bottom with top border */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="mt-auto grid grid-cols-2 gap-y-3 border-t border-white/10 pt-5 md:grid-cols-4"
          >
            {services.map((s) => (
              <span key={s} className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                {s}
              </span>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── BIG WORDMARK BELOW CARD ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
        className="relative mt-6 flex items-end justify-between px-3 md:mt-10 md:px-5"
        style={{
          maskImage:       "linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      >
        <span
          className="font-display font-black leading-[0.85] text-fg"
          style={{
            fontSize:      "clamp(3.5rem, 14vw, 16rem)",
            letterSpacing: "-0.045em",
          }}
        >
          Spatial
        </span>
        <span
          className="font-display font-black leading-[0.85] text-fg"
          style={{
            fontSize:      "clamp(3.5rem, 14vw, 16rem)",
            letterSpacing: "-0.045em",
          }}
        >
          Foundry
        </span>
      </motion.div>

    </section>
  );
}
