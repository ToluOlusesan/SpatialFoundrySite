import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/lib/projects";
import PageMotion from "@/components/PageMotion";
import HeadingReveal from "@/components/HeadingReveal";

interface Params {
  params: { slug: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return { title: "Project Not Found — Spatial Foundry" };
  return {
    title: project.title + " — Spatial Foundry",
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <div className="sf-case">
      <header className="sf-header sf-shell">
        <Link href="/" className="sf-brand" aria-label="Spatial Foundry home">
          <Image src="/logo/logo-wordmark-combination/combination.svg" alt="Spatial Foundry" width={1025} height={296} priority />
        </Link>
        <Link href="/#project" className="sf-case-back"><ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" /> Back to work</Link>
      </header>

      <main>
        <section className="sf-case-intro sf-shell" aria-labelledby="case-title">
          <div className="sf-section-label"><span>01 / Work</span><span>{project.year}</span></div>
          <h1 id="case-title" data-sf-reveal="heading"><HeadingReveal>{project.title}</HeadingReveal></h1>
          <div className="sf-case-intro-bottom" data-sf-reveal="fade">
            <p>{project.subtitle}</p>
            {project.website && (
              <a href={project.website.url} target="_blank" rel="noopener noreferrer">
                Visit {project.website.label} <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
              </a>
            )}
          </div>
        </section>

        {project.launchFilm && (
          <figure className="sf-case-film sf-shell" data-sf-reveal="fade">
            <video src={project.launchFilm.src} poster={project.launchFilm.poster} controls playsInline preload="metadata" aria-label={project.title + " launch film"} />
            <figcaption>Launch film / MeshKit</figcaption>
          </figure>
        )}

        <section className="sf-case-overview sf-shell" aria-labelledby="overview-title">
          <div className="sf-section-label"><span>02 / Overview</span><span>About the project</span></div>
          <div className="sf-case-overview-grid">
            <h2 id="overview-title" data-sf-reveal="heading"><HeadingReveal>{project.lead}</HeadingReveal></h2>
            <div className="sf-case-facts" data-sf-reveal="fade">
              <p>{project.description}</p>
              <dl>
                <div><dt>Scope</dt><dd>{project.scope.join(", ")}</dd></div>
                {project.tools && <div><dt>Tools</dt><dd>{project.tools.join(", ")}</dd></div>}
              </dl>
            </div>
          </div>
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section className="sf-case-gallery sf-shell" aria-labelledby="gallery-title">
            <div className="sf-section-label"><span>03 / Gallery</span><span>Selected work</span></div>
            <h2 id="gallery-title" data-sf-reveal="heading"><HeadingReveal>MeshKit in detail</HeadingReveal></h2>
            <div className="sf-case-gallery-grid">
              {project.gallery.map((item) => item.image && (
                <figure className={item.featured ? "sf-case-gallery-featured" : ""} key={item.title} data-sf-reveal="fade">
                  <div className="sf-case-gallery-image" style={{ aspectRatio: item.aspectRatio }}>
                    <Image src={item.image} alt={item.title} fill unoptimized sizes={item.featured ? "100vw" : "(max-width: 720px) 100vw, 50vw"} />
                  </div>
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {project.sections && project.sections.length > 0 && (
          <section className="sf-case-story sf-shell" aria-labelledby="story-title">
            <div className="sf-section-label"><span>04 / Approach</span><span>Behind the work</span></div>
            {project.sections.map((section) => (
              <div className="sf-case-story-row" key={section.title}>
                <h2 id="story-title" data-sf-reveal="heading"><HeadingReveal>{section.title}</HeadingReveal></h2>
                <p data-sf-reveal="fade">{section.body}</p>
              </div>
            ))}
          </section>
        )}

        {project.icons && project.icons.length > 0 && (
          <section className="sf-case-icons sf-shell" aria-labelledby="icons-title">
            <div className="sf-section-label"><span>05 / Library</span><span>Icon selection</span></div>
            <h2 id="icons-title" data-sf-reveal="heading"><HeadingReveal>A sample of the library</HeadingReveal></h2>
            <div className="sf-case-icon-grid">
              {project.icons.map((icon) => (
                <figure key={icon.name} data-sf-reveal="fade">
                  <div><Image src={icon.image} alt={icon.name} fill unoptimized sizes="(max-width: 720px) 50vw, 33vw" /></div>
                  <figcaption>{icon.name}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="sf-footer sf-shell">
        <Link href="/" className="sf-case-footer-link"><ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" /> Back to index</Link>
        <span>Spatial Foundry / {project.year}</span>
      </footer>
      <PageMotion />
    </div>
  );
}
