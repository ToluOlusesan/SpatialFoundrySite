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
      <section className="pb-16 pt-32 md:pb-20 md:pt-40 lg:pt-48">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <RevealOnScroll>
            <span className="eyebrow mb-6 block">— 02 / Work</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <h1
              className="font-display mb-5 font-bold text-fg"
              style={{
                fontSize:      "clamp(3rem, 6vw, 5.5rem)",
                letterSpacing: "-0.03em",
                lineHeight:    1.05,
              }}
            >
              Projects
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.13}>
            <p
              className="font-body text-base leading-relaxed text-fg"
              style={{ maxWidth: "50ch", lineHeight: 1.65 }}
            >
              A selection of spatial identity work across 3D branding, icon
              systems, and motion.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-16 pt-12 md:pb-20 md:pt-16 lg:pb-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ProjectsGrid />
        </div>
      </section>
    </>
  );
}
