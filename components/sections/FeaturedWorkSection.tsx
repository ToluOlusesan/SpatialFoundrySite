"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface ProjectCard {
  slug:   string;
  label:  string;
  sub:    string;
  tags:   string;
  render: string;
}

// Only the two spec'd featured projects — SignalGrid removed
const featuredProjects: ProjectCard[] = [
  {
    slug:   "meshkit",
    label:  "MeshKit",
    sub:    "3D Icon Library & Identity",
    tags:   "Identity · Icons · Motion",
    render: "[ MeshKit — Hero Render ]",
  },
  {
    slug:   "therapysuite",
    label:  "TherapySuite",
    sub:    "Brand Worldbuilding for Group Therapy",
    tags:   "3D Branding · Identity System · Environments",
    render: "[ TherapySuite — Brand World ]",
  },
];

function ProjectCard({ slug, label, sub, tags, render }: ProjectCard) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <motion.article
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl border border-fg/8 bg-surface"
        style={{ aspectRatio: "16/9" }}
      >
        {/* Atmosphere */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 35%, rgb(var(--fg) / 0.05) 0%, transparent 65%)",
          }}
        />

        {/* Placeholder label — pulses softly until a render is dropped in */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-fg">
            {render}
          </span>
        </motion.div>

        {/* Hover arrow — inverts: fg circle, bg icon */}
        <div className="absolute right-4 top-4 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fg text-bg">
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Bottom gradient scrim — theme-aware: derives from current bg */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 h-2/5"
          style={{
            background:
              "linear-gradient(to top, rgb(var(--bg) / 0.92) 0%, rgb(var(--bg) / 0) 100%)",
          }}
        />

        {/* Hover scrim darkening */}
        <div className="absolute inset-0 z-[5] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
             style={{ backgroundColor: "rgb(var(--bg) / 0.15)" }} />

        {/* Label — bottom-left, always visible */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          <p className="font-display mb-1 text-lg font-bold leading-tight text-fg" style={{ letterSpacing: "-0.01em" }}>
            {label}
          </p>
          <div className="flex items-end justify-between gap-4">
            <p className="font-body text-sm text-fg">{sub}</p>
            <span className="shrink-0 font-body text-[10px] text-fg">{tags}</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export function FeaturedWorkSection() {
  return (
    <section className="py-16 md:py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Section header */}
        <RevealOnScroll className="mb-12 flex items-end justify-between">
          <h2
            className="font-display font-bold text-fg"
            style={{
              fontSize:      "clamp(1.75rem, 3vw, 2.75rem)",
              letterSpacing: "-0.015em",
              lineHeight:    1.15,
            }}
          >
            Selected Projects
          </h2>
        </RevealOnScroll>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={i * 0.1}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Discover all */}
        <RevealOnScroll className="mt-8 flex justify-end" delay={0.2}>
          <Link
            href="/projects"
            className="group flex items-center gap-2 font-body text-xs font-medium uppercase tracking-widest text-fg transition hover:text-fg"
          >
            Discover All Projects
            <ArrowUpRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
