"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import Image from "next/image";

interface Project {
  slug:   string;
  label:  string;
  sub:    string;
  tags:   string;
  image?: string;
}

const featuredProjects: Project[] = [
  {
    slug:   "meshkit",
    label:  "MeshKit",
    sub:    "3D Icon Library & Identity",
    tags:   "Identity · Icons · Motion",
    image:  "/images/meshkit.png",
  },
];

function IntroCard() {
  return (
    <article
      className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-fg/[0.06] bg-surface p-8 md:p-10"
      style={{ aspectRatio: "16/9" }}
    >
      <div>
        <h3
          className="font-display font-bold text-fg"
          style={{
            fontSize:      "clamp(1.75rem, 3.4vw, 3rem)",
            letterSpacing: "-0.025em",
            lineHeight:    1.0,
          }}
        >
          Selected<br />Work
        </h3>
        <p className="mt-5 max-w-[36ch] font-body text-fg/85" style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)", lineHeight: 1.65 }}>
          A curated set of recent identity systems, motion films, and brand objects we&apos;ve built.
        </p>
      </div>

      <Link
        href="/projects"
        className="group inline-flex w-fit items-center gap-2 rounded-full bg-fg px-7 py-3.5 font-body text-[0.9375rem] font-medium uppercase tracking-[0.12em] text-bg transition-all duration-[350ms] hover:bg-fg/90 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        Discover More
        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </article>
  );
}

function ProjectCard({ slug, label, sub, tags, image }: Project) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <motion.article
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl border border-fg/[0.06] bg-surface"
        style={{ aspectRatio: "16/9" }}
      >
        {image && (
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
          />
        )}

        {/* Hover arrow — solid white circle, top-right */}
        <div className="absolute right-4 top-4 z-20 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-md">
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Dark scrim — fades in on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[5] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
        />

        {/* Label slides in on hover */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-2 p-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <p
            className="font-display mb-1 font-bold leading-tight text-white"
            style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
          >
            {label}
          </p>
          <div className="flex items-end justify-between gap-4">
            <p className="font-body text-sm text-white/85">{sub}</p>
            <span className="shrink-0 font-body text-[10px] uppercase tracking-[0.12em] text-white/60">{tags}</span>
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <RevealOnScroll>
            <IntroCard />
          </RevealOnScroll>

          {featuredProjects.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={0.08 + i * 0.08}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}

        </div>

      </div>
    </section>
  );
}
