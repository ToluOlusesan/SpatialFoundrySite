"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {projects.map((project, i) => (
        <RevealOnScroll key={project.slug} delay={i * 0.08}>
          <Link href={`/projects/${project.slug}`} className="group block">
            <motion.article
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl bg-surface"
              style={{ aspectRatio: "16/9" }}
            >
              {/* Atmosphere */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 35%, rgb(var(--fg) / 0.04) 0%, transparent 65%)",
                }}
              />

              {/* Animated placeholder label */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0.2, 0.45, 0.2] }}
                transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-center font-body text-[10px] uppercase tracking-[0.2em] text-fg/60">
                  [ {project.title} — {project.subtitle} ]
                </span>
              </motion.div>

              {/* Hover arrow — fg circle */}
              <div className="absolute right-4 top-4 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-fg/15 bg-bg text-fg">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Hover scrim */}
              <div
                aria-hidden="true"
                className="absolute inset-0 z-[5] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, rgb(var(--surface) / 0.9) 0%, transparent 60%)",
                }}
              />

              {/* Label — bottom-left, always visible */}
              <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-6">
                <div>
                  <p
                    className="font-display mb-0.5 font-bold leading-tight text-fg"
                    style={{ fontSize: "clamp(1.125rem, 1.8vw, 1.375rem)", letterSpacing: "-0.01em" }}
                  >
                    {project.title}
                  </p>
                  <p className="font-body text-sm text-fg/60">{project.subtitle}</p>
                </div>

                <div className="flex flex-col items-end gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] uppercase tracking-[0.08em] text-fg/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Link>
        </RevealOnScroll>
      ))}
    </div>
  );
}
