import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderRender } from "@/components/ui/PlaceholderRender";
import { projects, getProject } from "@/lib/projects";

interface Params {
  params: { slug: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return { title: "Project Not Found — Spatial Foundry" };
  return {
    title:       `${project.title} — Spatial Foundry`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject  = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero render */}
      <section className="px-6 pb-0 pt-24 md:px-10 lg:pt-32">
        <div className="mx-auto max-w-[1400px]">
          <RevealOnScroll>
            <Link
              href="/projects"
              className="group mb-10 inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-widest text-fg/45 transition-colors hover:text-fg"
            >
              <ArrowLeft size={11} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              All Projects
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.06}>
            <PlaceholderRender
              label={`[ ${project.title} — Hero Render ]`}
              aspectRatio="21/9"
              className="w-full"
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* Project header */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* Left: title + subtitle */}
            <div className="lg:col-span-7">
              <RevealOnScroll>
                <span className="eyebrow mb-5 block">{project.year}</span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.08}>
                <h1
                  className="font-display mb-4 font-bold text-fg"
                  style={{
                    fontSize:      "clamp(2.5rem, 5vw, 4.5rem)",
                    letterSpacing: "-0.025em",
                    lineHeight:    1.05,
                  }}
                >
                  {project.title}
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={0.12}>
                <p
                  className="font-display font-bold text-fg/70"
                  style={{
                    fontSize:      "clamp(1.1rem, 2vw, 1.5rem)",
                    letterSpacing: "-0.01em",
                    lineHeight:    1.25,
                  }}
                >
                  {project.subtitle}
                </p>
              </RevealOnScroll>
            </div>

            {/* Right: tags + scope */}
            <div className="lg:col-span-5">
              <RevealOnScroll delay={0.14}>
                <div className="mb-8">
                  <h3 className="eyebrow mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-fg/12 px-3 py-1 font-body text-xs font-medium text-fg/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="eyebrow mb-4">Scope</h3>
                  <ul className="space-y-2.5">
                    {project.scope.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-body text-sm text-fg/65">
                        <span className="h-px w-4 bg-accent/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll>
            <p
              className="font-body text-fg/70"
              style={{ maxWidth: "65ch", lineHeight: 1.7 }}
            >
              {project.description}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="pb-24 pt-0 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll className="mb-8">
            <span className="eyebrow accent-bar">Gallery</span>
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <RevealOnScroll key={n} delay={n * 0.08}>
                <PlaceholderRender
                  label={`[ ${project.title} — Render 0${n} ]`}
                  aspectRatio="4/3"
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-fg/8 py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll className="flex items-center justify-between gap-8">
            <span className="eyebrow">Next Project</span>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-4"
            >
              <span
                className="font-display font-bold text-fg transition-colors duration-200 group-hover:text-accent"
                style={{
                  fontSize:      "clamp(1.25rem, 3vw, 2.25rem)",
                  letterSpacing: "-0.02em",
                  lineHeight:    1.1,
                }}
              >
                {nextProject.title}
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fg/15 text-fg transition-all duration-[350ms] group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <ArrowRight size={14} />
              </span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
