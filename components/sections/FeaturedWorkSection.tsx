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

function ProjectCard({ slug, label, sub, tags, image }: Project) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <motion.article
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl border border-fg/[0.06] bg-surface"
        style={{ aspectRatio: "16/9" }}
      >
        {image && (
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="100vw"
            quality={92}
            priority
          />
        )}

        {/* Resting label scrim — always shown subtly, intensifies on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[5] opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.18) 38%, transparent 62%)" }}
        />

        {/* Hover arrow — solid white circle, top-right */}
        <div className="absolute right-5 top-5 z-20 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg">
            <ArrowUpRight size={16} />
          </div>
        </div>

        {/* Resting label */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-2 p-7 md:flex-row md:items-end md:justify-between md:gap-8 md:p-9 lg:p-10">
          <div>
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-white/65">
              {tags}
            </p>
            <p
              className="font-display mt-2 font-bold leading-[0.95] text-white"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
            >
              {label}
            </p>
          </div>
          <p className="font-body text-fg/85 md:max-w-[28ch] md:text-right" style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)" }}>
            {sub}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}

export function FeaturedWorkSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* ── Header row ── */}
        <div className="mb-14 grid grid-cols-12 gap-8 md:mb-20 md:items-end lg:gap-12">

          {/* LEFT — Selected\nWorks. */}
          <RevealOnScroll className="col-span-12 md:col-span-7">
            <h2
              className="font-display font-bold leading-[0.95] text-fg"
              style={{
                fontSize:      "clamp(2.5rem, 5.4vw, 5.75rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Selected<br />Works.
            </h2>
          </RevealOnScroll>

          {/* RIGHT — Projects eyebrow + description */}
          <RevealOnScroll delay={0.1} className="col-span-12 md:col-span-5 md:pb-2 lg:pb-3">
            <span className="eyebrow mb-4 block">Projects</span>
            <p
              className="font-body text-fg/85"
              style={{
                fontSize:   "clamp(0.9375rem, 1.15vw, 1.0625rem)",
                lineHeight: 1.65,
                maxWidth:   "42ch",
              }}
            >
              A curated set of recent identity systems, motion films, and brand
              objects — built for clarity at every scale.
            </p>
          </RevealOnScroll>

        </div>

        {/* ── Wide project showcase ── */}
        <div className="flex flex-col gap-5">
          {featuredProjects.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={0.25 + i * 0.08}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
