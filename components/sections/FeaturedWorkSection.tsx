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
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
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

        {/* Hover arrow — white circle, top-right */}
        <div className="absolute right-4 top-4 z-20 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-sm">
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Dark gradient scrim — fades in on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[5] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
        />

        {/* Bottom label — slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-2 p-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <p
            className="font-display mb-1 font-bold leading-tight text-white"
            style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
          >
            {label}
          </p>
          <div className="flex items-end justify-between gap-4">
            <p className="font-body text-sm text-white/80">{sub}</p>
            <span className="shrink-0 font-body text-[10px] uppercase tracking-[0.12em] text-white/55">{tags}</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export function FeaturedWorkSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* 2-column grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={i * 0.1}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>

        {/* View all work — bottom right */}
        <RevealOnScroll delay={0.2} className="mt-8 flex justify-end">
          <Link
            href="/projects"
            className="group link-underline inline-flex items-center gap-1.5 font-body text-sm text-fg/55 transition-colors duration-200 hover:text-fg"
          >
            View all work
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </RevealOnScroll>

      </div>
    </section>
  );
}
