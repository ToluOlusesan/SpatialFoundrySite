"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import Image from "next/image";

interface ProjectCard {
  slug:   string;
  label:  string;
  sub:    string;
  tags:   string;
  render: string;
  image?: string;
}

// Only the two spec'd featured projects — SignalGrid removed
const featuredProjects: ProjectCard[] = [
  {
    slug:   "meshkit",
    label:  "MeshKit",
    sub:    "3D Icon Library & Identity",
    tags:   "Identity · Icons · Motion",
    render: "[ MeshKit — Hero Render ]",
    image:  "/images/meshkit.png",
  },
  {
    slug:   "therapysuite",
    label:  "TherapySuite",
    sub:    "Brand Worldbuilding for Group Therapy",
    tags:   "3D Branding · Identity System · Environments",
    render: "[ TherapySuite — Brand World ]",
    image:  "/images/therapysuite.png",
  },
];

function ProjectCard({ slug, label, sub, tags, render, image }: ProjectCard) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <motion.article
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl bg-surface"
        style={{ aspectRatio: "16/9" }}
      >


        {image ? (
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-fg">
              {render}
            </span>
          </motion.div>
        )}

        {/* Hover arrow — inverts: fg circle, bg icon */}
        <div className="absolute right-4 top-4 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fg text-bg">
            <ArrowUpRight size={14} />
          </div>
        </div>


        {/* Hover scrim darkening */}
        <div className="absolute inset-0 z-[5] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
             style={{ backgroundColor: "rgb(var(--bg) / 0.15)" }} />

        {/* Label — bottom-left, visible on hover */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          <p className="font-display mb-1 text-3xl font-bold leading-tight text-fg" style={{ letterSpacing: "-0.02em" }}>
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
    <section className="pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-14 lg:pb-[72px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Section header */}
        <RevealOnScroll className="mb-10 flex items-end justify-between">
          <div>
            <h2
              className="font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(2.5rem, 5vw, 3.5rem)",
                letterSpacing: "-0.025em",
                lineHeight:    1.05,
              }}
            >
              Recent Work.
            </h2>
          </div>
          <Link
            href="/projects"
            className="group hidden items-center gap-1.5 font-body text-base text-fg/60 transition-colors duration-200 hover:text-fg md:inline-flex"
          >
            View all work
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </RevealOnScroll>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={i * 0.1}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
