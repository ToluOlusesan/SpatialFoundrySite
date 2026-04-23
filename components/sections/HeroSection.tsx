"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const words = ["Your", "brand", "has", "form,", "we", "define", "it."];

export function HeroSection() {
  return (
    // Image-dominant section — forces dark tokens inside its subtree and
    // hardcodes white text so the hero stays legible regardless of site theme.
    <section className="dark relative flex h-screen w-full flex-col overflow-hidden bg-black text-white">
      {/* Hero image — swap /public/images/hero.png to change */}
      <div className="absolute inset-0 bg-black">
        <Image
          src="/images/hero.png"
          alt="Spatial Foundry — 3D brand sculpture"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Soft bottom scrim — centered text needs even falloff top+bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 75%)",
          }}
        />
      </div>

      {/* Left-aligned hero block */}
      <div className="relative z-10 mt-auto flex flex-col items-start px-6 pb-20 md:px-12">
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay:    0.4 + i * 0.08,
                duration: 0.5,
                ease:     "easeOut",
              }}
              className="mr-[0.22em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
          className="mt-6 font-body text-base leading-relaxed text-white"
          style={{ maxWidth: "44ch", lineHeight: 1.65 }}
        >
          We give brands physical weight, spatial presence, and the kind of
          form that stops people mid-scroll.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
          className="mt-10"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-2.5 font-body text-xs font-medium uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            View Our Work
            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
