"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = ["3D Brand Identity", "Icon Systems", "Motion & Film", "Web Illustrations"];

export function HeroSection() {
  return (
    <section
      className="relative mx-3 flex flex-col overflow-hidden rounded-2xl md:mx-5"
      style={{ marginTop: "76px", height: "calc(100svh - 88px)", minHeight: "560px" }}
    >

      {/* ── DARK TOP — image area ── */}
      <div className="relative flex-1 overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-[#0d0603]" />

        {/* Atmosphere */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="lava-blob lava-drift-1" style={{
            width: "80%", height: "65%", left: "-8%", top: "20%",
            background: "radial-gradient(circle at 42% 50%, rgba(175,68,18,0.6) 0%, rgba(115,28,5,0.35) 50%, transparent 78%)",
            filter: "blur(85px)",
          }} />
          <div className="lava-blob lava-drift-2" style={{
            width: "55%", height: "58%", right: "2%", top: "-8%",
            background: "radial-gradient(circle at 55% 45%, rgba(188,118,14,0.5) 0%, rgba(140,48,7,0.28) 48%, transparent 78%)",
            filter: "blur(92px)",
          }} />
          <div className="lava-blob lava-drift-3" style={{
            width: "60%", height: "50%", bottom: "-4%", left: "22%",
            background: "radial-gradient(circle at 50% 60%, rgba(90,14,3,0.65) 0%, rgba(48,7,2,0.35) 55%, transparent 80%)",
            filter: "blur(90px)",
          }} />
        </div>

        {/* Hero image — drop your asset here */}
        {/* <Image src="/images/hero.jpg" alt="" fill className="object-cover object-center" priority /> */}

        {/* Film grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        {/* Corner vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 135% 110% at 50% 50%, transparent 30%, rgba(3,1,1,0.6) 100%)" }}
        />

        {/* Top row */}
        <div className="relative z-10 flex items-start justify-between p-8 md:p-10 lg:p-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-white/40"
          >
            3D Branding Studio · Lagos
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
      </div>

      {/* ── WHITE BOTTOM — studio name + services ── */}
      <div
        className="relative flex shrink-0 flex-col justify-between px-8 py-7 md:px-10 lg:px-12"
        style={{ height: "30%", minHeight: "160px", background: "rgb(var(--bg))" }}
      >
        {/* Studio name */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-fg"
          style={{
            fontSize:      "clamp(2.2rem, 5.2vw, 5rem)",
            letterSpacing: "-0.03em",
            lineHeight:    1.0,
          }}
        >
          Spatial Foundry
        </motion.h1>

        {/* Services + CTA */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="flex flex-wrap gap-x-8 gap-y-2 md:gap-x-12"
          >
            {services.map((s) => (
              <span key={s} className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-fg/35">
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-fg/15 px-7 py-3.5 font-body text-[0.875rem] font-medium uppercase tracking-[0.12em] text-fg transition-all duration-[350ms] hover:border-fg hover:bg-fg hover:text-bg"
            >
              View Our Work
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
