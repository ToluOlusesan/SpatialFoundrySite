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
        <RevealOnScroll key={project.slug} delay={i * 0.1}>
          <Link href={`/projects/${project.slug}`} className="group block">
            <motion.article
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-fg/8 bg-surface"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Atmosphere */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 35%, rgb(var(--fg) / 0.05) 0%, transparent 65%)",
                }}
              />

              {/* Animated label */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0.25, 0.5, 0.25] }}
                transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-center font-body text-[10px] uppercase tracking-[0.2em] text-fg">
                  [ {project.title} — {project.subtitle} ]
                </span>
              </motion.div>

              {/* Hover arrow — fg circle, bg icon */}
              <div className="absolute right-4 top-4 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fg text-bg">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Bottom scrim */}
              <div
                className="absolute inset-x-0 bottom-0 z-10 h-2/5"
                style={{
                  background:
                    "linear-gradient(to top, rgb(var(--bg) / 0.92) 0%, rgb(var(--bg) / 0) 100%)",
                }}
              />

              {/* Hover darken */}
              <div className="absolute inset-0 z-[5] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                   style={{ backgroundColor: "rgb(var(--bg) / 0.12)" }} />

              {/* Label — bottom-left */}
              <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-6">
                <div>
                  <p
                    className="font-display mb-1 text-lg font-bold leading-tight text-fg"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {project.title}
                  </p>
                  <p className="font-body text-sm text-fg">{project.subtitle}</p>
                </div>

                <div className="flex flex-col items-end gap-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-body text-[10px] text-fg">
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
