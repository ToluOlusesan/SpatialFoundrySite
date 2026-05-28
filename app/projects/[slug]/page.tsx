import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
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
      {/* ── Hero ── */}
      <section className="px-6 pb-0 pt-24 md:px-10 lg:pt-32">
        <div className="mx-auto max-w-[1400px]">
          <RevealOnScroll>
            <Link
              href="/projects"
              className="group mb-10 inline-flex items-center gap-2 font-body text-[12px] font-semibold uppercase tracking-widest text-fg/65 transition-colors hover:text-fg"
            >
              <ArrowLeft size={12} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              All Projects
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.06}>
            {project.heroImage ? (
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-fg/[0.06] bg-surface"
                style={{ aspectRatio: "21/9" }}
              >
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  priority
                  sizes="100vw"
                  quality={92}
                  className="object-cover object-center"
                />
              </div>
            ) : (
              <PlaceholderRender
                label={`[ ${project.title} — Hero Render ]`}
                aspectRatio="21/9"
                className="w-full"
              />
            )}
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Header: title + meta ── */}
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
                  className="font-display mb-5 font-bold text-fg"
                  style={{
                    fontSize:      "clamp(2.75rem, 5.4vw, 5rem)",
                    letterSpacing: "-0.03em",
                    lineHeight:    1.0,
                  }}
                >
                  {project.title}
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={0.12}>
                <p
                  className="font-display font-bold text-fg/80"
                  style={{
                    fontSize:      "clamp(1.125rem, 1.85vw, 1.5rem)",
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
                        className="rounded-full border border-line px-3 py-1.5 font-body text-sm font-medium text-fg/85"
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
                      <li key={item} className="flex items-center gap-3 font-body text-fg/85" style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)" }}>
                        <span className="h-px w-4 bg-accent" />
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

      {/* ── Lead paragraph ── */}
      {project.lead && (
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <RevealOnScroll>
              <p
                className="font-display font-bold text-fg"
                style={{
                  fontSize:      "clamp(1.5rem, 2.8vw, 2.5rem)",
                  letterSpacing: "-0.02em",
                  lineHeight:    1.2,
                  maxWidth:      "30ch",
                }}
              >
                {project.lead}
              </p>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* ── Case-study sections ── */}
      {project.sections && project.sections.length > 0 && (
        <section className="pb-20 pt-4 md:pb-24 md:pt-6">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="flex flex-col gap-10 md:gap-12">
              {project.sections.map((section, i) => (
                <div key={section.title} className="grid grid-cols-12 gap-8 lg:gap-12">
                  <RevealOnScroll className="col-span-12 md:col-span-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-fg/55">
                        0{i + 1}
                      </span>
                      <h2
                        className="font-display font-bold text-fg"
                        style={{
                          fontSize:      "clamp(1.5rem, 2.4vw, 2rem)",
                          letterSpacing: "-0.02em",
                          lineHeight:    1.1,
                        }}
                      >
                        {section.title}
                      </h2>
                    </div>
                  </RevealOnScroll>
                  <RevealOnScroll delay={0.08} className="col-span-12 md:col-span-8">
                    <p
                      className="font-body text-fg/85"
                      style={{
                        fontSize:   "clamp(1.0625rem, 1.3vw, 1.25rem)",
                        lineHeight: 1.7,
                        maxWidth:   "60ch",
                      }}
                    >
                      {section.body}
                    </p>
                  </RevealOnScroll>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Stats panel ── */}
      {project.stats && project.stats.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <RevealOnScroll>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-2 bg-bg p-7 md:p-9">
                    <span
                      className="font-display font-bold text-fg"
                      style={{
                        fontSize:      "clamp(1.75rem, 3.2vw, 2.75rem)",
                        letterSpacing: "-0.025em",
                        lineHeight:    1.0,
                      }}
                    >
                      {stat.value}
                    </span>
                    <span className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-fg/55">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      <section className="pb-12 pt-24 md:pb-16 md:pt-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll className="mb-10">
            <span className="eyebrow accent-bar mb-4 block">Gallery</span>
            <h2
              className="font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(2rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight:    1.1,
              }}
            >
              Selected renders.
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {(project.gallery ?? [
              { label: `${project.title} — Render 01`, aspectRatio: "4/3" },
              { label: `${project.title} — Render 02`, aspectRatio: "4/3" },
              { label: `${project.title} — Render 03`, aspectRatio: "4/3" },
            ]).map((item, i) => (
              <RevealOnScroll key={item.label} delay={i * 0.08}>
                {item.image ? (
                  <figure className="flex flex-col gap-3">
                    <div
                      className="relative w-full overflow-hidden rounded-2xl border border-fg/[0.06] bg-surface"
                      style={{ aspectRatio: item.aspectRatio }}
                    >
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={90}
                        className="object-cover object-center"
                      />
                    </div>
                    <figcaption className="font-body text-[12px] font-medium uppercase tracking-[0.16em] text-fg/55">
                      {item.label}
                    </figcaption>
                  </figure>
                ) : (
                  <PlaceholderRender
                    label={`[ ${item.label} ]`}
                    aspectRatio={item.aspectRatio}
                  />
                )}
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credits ── */}
      {project.credits && project.credits.length > 0 && (
        <section className="pb-24 pt-12 md:pb-32 md:pt-16">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">

            <RevealOnScroll className="mb-10">
              <span className="eyebrow accent-bar">Credits</span>
            </RevealOnScroll>

            <RevealOnScroll>
              <dl className="border-t border-line">
                {project.credits.map((credit) => (
                  <div
                    key={credit.role}
                    className="grid grid-cols-12 items-baseline gap-6 border-b border-line py-5"
                  >
                    <dt className="col-span-12 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-fg/55 md:col-span-4">
                      {credit.role}
                    </dt>
                    <dd className="col-span-12 font-body font-medium text-fg md:col-span-8" style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)" }}>
                      {credit.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </RevealOnScroll>

          </div>
        </section>
      )}

      {/* ── Next project ── */}
      {nextProject.slug !== project.slug && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-[1400px] border-t border-line px-6 pt-16 md:px-10 md:pt-20">
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-fg transition-all duration-[350ms] group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </RevealOnScroll>
          </div>
        </section>
      )}
    </>
  );
}
