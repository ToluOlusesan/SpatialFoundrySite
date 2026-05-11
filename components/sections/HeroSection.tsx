"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const words = ["Your", "brand", "has", "form,", "we", "define", "it."];

export function HeroSection() {
  return (
    <section className="relative flex h-[100svh] min-h-[600px] w-full flex-col overflow-hidden bg-black text-white">
      {/* Hero image */}
      <div className="absolute inset-0 bg-black">
        <Image
          src="/images/hero.png"
          alt="Spatial Foundry — 3D brand sculpture"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />

        {/* Bottom scrim — dark gradient so text reads over image */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(3,3,3,0.88) 0%, rgba(3,3,3,0.3) 45%, rgba(3,3,3,0.23) 75%, transparent 100%)",
          }}
        />
      </div>

      {/* Hero content — bottom-left anchored */}
      <div className="relative z-10 mt-auto flex flex-col items-start px-6 pb-20 md:px-10">
        {/* Staggered word-by-word heading */}
        <h1
          suppressHydrationWarning
          className="font-display max-w-4xl font-bold text-white"
          style={{
            fontSize:      "clamp(3rem, 6vw, 5.5rem)",
            letterSpacing: "-0.03em",
            lineHeight:    1.05,
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay:    0.15 + i * 0.08,
                duration: 0.8,
                ease:     [0.16, 1, 0.3, 1],
              }}
              className="mr-[0.22em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-[44ch] font-body text-white/80"
          style={{ lineHeight: 1.65 }}
        >
          We give brands physical weight, spatial presence, and the kind of
          form that stops people mid-scroll.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-body text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white transition-all duration-[350ms] hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-white"
          >
            View Our Work
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
        aria-hidden="true"
        className="absolute bottom-8 right-6 md:right-10"
      >
        <div className="flex h-10 w-[1px] flex-col items-center overflow-hidden">
          <div className="h-3 w-[1px] flex-shrink-0 animate-scroll-dot bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
