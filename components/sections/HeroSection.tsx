"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const words = ["Your", "brand", "has", "form,", "we", "define", "it."];

const services = [
  "3D Brand Identity",
  "Icon Systems",
  "Motion & Film",
  "Web Illustrations",
];

export function HeroSection() {
  // Spring-smoothed mouse position (0–100 percentage)
  const rawX = useMotionValue(50);
  const rawY = useMotionValue(50);
  const mx = useSpring(rawX, { stiffness: 40, damping: 20, mass: 1 });
  const my = useSpring(rawY, { stiffness: 40, damping: 20, mass: 1 });

  // Reactive hotspot — bright molten gold that blooms at the cursor
  const hotspot = useMotionTemplate`radial-gradient(ellipse 52% 48% at ${mx}% ${my}%, rgba(255,195,55,0.44) 0%, rgba(228,92,18,0.28) 32%, rgba(168,40,8,0.1) 62%, transparent 100%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width) * 100);
    rawY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative mx-3 overflow-hidden rounded-2xl md:mx-5"
      style={{ marginTop: "76px", height: "calc(100svh - 88px)", minHeight: "520px" }}
    >
      {/* ── BASE: deep warm charcoal ── */}
      <div className="absolute inset-0 bg-[#0c0603]" />

      {/* ── LAVA BLOBS — each drifts independently ── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">

        {/* Primary burning-orange mass — large, left-center */}
        <div className="lava-blob lava-drift-1" style={{
          width: "72%", height: "72%", left: "-6%", top: "4%",
          background: "radial-gradient(circle at 42% 50%, rgba(205,85,26,0.92) 0%, rgba(158,42,8,0.65) 38%, rgba(72,12,3,0.28) 68%, transparent 100%)",
          filter: "blur(88px)",
        }} />

        {/* Gold accent — upper-right */}
        <div className="lava-blob lava-drift-2" style={{
          width: "58%", height: "58%", right: "0%", top: "-10%",
          background: "radial-gradient(circle at 55% 45%, rgba(215,138,18,0.78) 0%, rgba(178,66,10,0.52) 38%, transparent 72%)",
          filter: "blur(96px)",
        }} />

        {/* Deep red undercurrent — lower */}
        <div className="lava-blob lava-drift-3" style={{
          width: "68%", height: "60%", bottom: "-8%", left: "16%",
          background: "radial-gradient(circle at 50% 58%, rgba(118,19,5,0.88) 0%, rgba(62,9,3,0.58) 48%, transparent 80%)",
          filter: "blur(100px)",
        }} />

        {/* Small bright ember — mid-canvas */}
        <div className="lava-blob lava-drift-4" style={{
          width: "30%", height: "30%", left: "30%", top: "20%",
          background: "radial-gradient(circle, rgba(255,178,52,0.68) 0%, rgba(218,98,18,0.42) 42%, transparent 75%)",
          filter: "blur(54px)",
        }} />

        {/* Lower-right warm fill */}
        <div className="lava-blob lava-drift-5" style={{
          width: "48%", height: "50%", right: "8%", bottom: "2%",
          background: "radial-gradient(circle, rgba(145,36,8,0.62) 0%, rgba(78,14,3,0.38) 50%, transparent 82%)",
          filter: "blur(82px)",
        }} />

        {/* Subtle teal-purple cold shadow — far left, very faint — creates depth contrast */}
        <div className="lava-blob lava-drift-6" style={{
          width: "45%", height: "55%", left: "-5%", bottom: "0%",
          background: "radial-gradient(circle, rgba(18,8,28,0.7) 0%, transparent 70%)",
          filter: "blur(70px)",
        }} />
      </div>

      {/* ── MOUSE HOTSPOT ── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: hotspot }}
      />

      {/* ── EDGE VIGNETTE — darkens corners for depth ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 130% 110% at 50% 50%, transparent 30%, rgba(3,1,1,0.6) 100%)" }}
      />

      {/* ── FILM GRAIN — subtle texture ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10 lg:p-12 xl:p-14">

        {/* Top row: studio tag + contact badge */}
        <div className="flex items-start justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-white/40"
          >
            3D Branding Studio · Lagos
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-white/28 hover:bg-white/[0.1]"
            >
              <span className="font-body text-[11px] font-medium uppercase tracking-widest text-white/55 transition-colors group-hover:text-white/85">
                Start a Project
              </span>
              <ArrowUpRight
                size={11}
                className="text-white/38 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Middle: headline */}
        <div>
          <h1
            className="font-display font-bold text-white"
            style={{
              fontSize:      "clamp(2.75rem, 6.5vw, 6rem)",
              letterSpacing: "-0.03em",
              lineHeight:    1.0,
              maxWidth:      "13ch",
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay:    0.3 + i * 0.08,
                  duration: 0.8,
                  ease:     [0.16, 1, 0.3, 1],
                }}
                className="mr-[0.2em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Bottom row: services + CTA */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          {/* Services list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.9 }}
            className="flex flex-wrap gap-x-8 gap-y-2 md:gap-x-12"
          >
            {services.map((service) => (
              <span
                key={service}
                className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-white/35"
              >
                {service}
              </span>
            ))}
          </motion.div>

          {/* View Our Work CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-body text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white transition-all duration-[350ms] hover:border-white hover:bg-white hover:text-black"
            >
              View Our Work
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
