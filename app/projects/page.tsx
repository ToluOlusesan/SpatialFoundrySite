import { Metadata } from "next";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Work — Spatial Foundry",
  description:
    "A selection of spatial identity work across 3D branding, icon systems, and motion.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page header */}
      <section className="pb-16 pt-36 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll>
            <span className="eyebrow accent-bar mb-8 block">Work</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <h1
              className="font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(3rem, 6vw, 5.5rem)",
                letterSpacing: "-0.03em",
                lineHeight:    1.05,
              }}
            >
              Projects
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.14}>
            <p
              className="mt-5 font-body text-fg/60"
              style={{ maxWidth: "50ch", lineHeight: 1.65 }}
            >
              A selection of spatial identity work across 3D branding, icon
              systems, and motion.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-24 pt-8 md:pb-32 md:pt-12">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ProjectsGrid />
        </div>
      </section>
    </>
  );
}
