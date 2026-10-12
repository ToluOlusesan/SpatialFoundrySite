import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/lib/projects";

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
          <h1 id="case-title">{project.title}</h1>
          <div className="sf-case-intro-bottom">
            <p>{project.subtitle}</p>
            {project.website && (
              <a href={project.website.url} target="_blank" rel="noopener noreferrer">
                Visit {project.website.label} <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
              </a>
            )}
          </div>
        </section>

        {project.launchFilm && (
          <figure className="sf-case-film sf-shell">
            <video src={project.launchFilm.src} poster={project.launchFilm.poster} controls playsInline preload="metadata" aria-label={project.title + " launch film"} />
            <figcaption>Launch film / MeshKit</figcaption>
          </figure>
        )}

        <section className="sf-case-overview sf-shell" aria-labelledby="overview-title">
          <div className="sf-section-label"><span>02 / Overview</span><span>About the project</span></div>
          <div className="sf-case-overview-grid">
            <h2 id="overview-title">{project.lead}</h2>
            <div className="sf-case-facts">
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
            <h2 id="gallery-title">MeshKit in detail</h2>
            <div className="sf-case-gallery-grid">
              {project.gallery.map((item) => item.image && (
                <figure className={item.featured ? "sf-case-gallery-featured" : ""} key={item.title}>
                  <div className="sf-case-gallery-image" style={{ aspectRatio: item.aspectRatio }}>
                    <Image src={item.image} alt={item.title} fill sizes={item.featured ? "100vw" : "(max-width: 720px) 100vw, 50vw"} />
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
                <h2 id="story-title">{section.title}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </section>
        )}

        {project.icons && project.icons.length > 0 && (
          <section className="sf-case-icons sf-shell" aria-labelledby="icons-title">
            <div className="sf-section-label"><span>05 / Library</span><span>Icon selection</span></div>
            <h2 id="icons-title">A sample of the library</h2>
            <div className="sf-case-icon-grid">
              {project.icons.map((icon) => (
                <figure key={icon.name}>
                  <div><Image src={icon.image} alt={icon.name} fill sizes="(max-width: 720px) 50vw, 25vw" /></div>
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
    </div>
  );
}
