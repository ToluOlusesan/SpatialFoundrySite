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
  const caseClassName = project.slug === "utribe" ? "sf-case sf-case-utribe" : "sf-case";

  return (
    <div className={caseClassName}>
      <header className="sf-header">
        <div className="sf-header-inner sf-shell">
          <Link href="/" className="sf-brand" aria-label="Spatial Foundry home">
            <Image src="/logo/logo-wordmark-combination/combination.svg" alt="Spatial Foundry" width={1025} height={296} priority />
          </Link>
          <Link href="/#project" className="sf-case-back"><ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" /> Back to work</Link>
        </div>
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
          <figure className={`sf-case-film sf-shell${project.slug === "utribe" ? " sf-case-film-bleed" : ""}`} data-sf-reveal="fade">
            <video src={project.launchFilm.src} poster={project.launchFilm.poster} controls playsInline preload="metadata" aria-label={project.title + " launch film"} />
            <figcaption>{project.launchFilm.caption ?? `Launch film / ${project.title}`}</figcaption>
          </figure>
        )}

        <section className="sf-case-overview sf-shell" aria-labelledby="overview-title">
          <div className="sf-section-label"><span>02 / Overview</span><span>About the project</span></div>
          <div className="sf-case-overview-grid">
            <h2 id="overview-title" data-sf-reveal="heading"><HeadingReveal>{project.lead}</HeadingReveal></h2>
            <div className="sf-case-facts" data-sf-reveal="fade">
              <p>{project.description}</p>
              <dl>
                {project.client && <div><dt>Client</dt><dd>{project.client}</dd></div>}
                {project.collaboration && <div><dt>With</dt><dd>{project.collaboration.replace("Created with ", "")}</dd></div>}
                <div><dt>Scope</dt><dd>{project.scope.join(", ")}</dd></div>
                {project.tools && <div><dt>Tools</dt><dd>{project.tools.join(", ")}</dd></div>}
              </dl>
            </div>
          </div>
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section className="sf-case-gallery sf-shell" aria-labelledby="gallery-title">
            <div className="sf-section-label"><span>03 / Gallery</span><span>Selected work</span></div>
            <h2 id="gallery-title" data-sf-reveal="heading"><HeadingReveal>{project.galleryTitle ?? `${project.title} in detail`}</HeadingReveal></h2>
            <div className="sf-case-gallery-grid">
              {project.gallery.map((item, index) => item.image && (
                <figure className={[item.featured && "sf-case-gallery-featured", project.slug === "utribe" && `sf-case-gallery-item-${index}`].filter(Boolean).join(" ")} key={item.title} data-sf-reveal="fade">
                  <div className="sf-case-gallery-image" style={{ aspectRatio: project.slug === "utribe" && !item.featured ? "1 / 1" : item.aspectRatio }}>
                    <Image src={item.image} alt={item.title} fill unoptimized={project.slug !== "utribe"} sizes={item.featured ? "100vw" : "(max-width: 720px) 100vw, 50vw"} />
                  </div>
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {project.materials && project.materials.length > 0 && (
          <section className="sf-case-materials sf-shell" aria-labelledby="materials-title">
            <div className="sf-section-label"><span>04 / Material studies</span><span>3D explorations</span></div>
            <div className="sf-case-materials-intro">
              <h2 id="materials-title" data-sf-reveal="heading"><HeadingReveal>Material, shaped by light.</HeadingReveal></h2>
              {project.materialsNote && <p data-sf-reveal="fade">{project.materialsNote}</p>}
            </div>
            <div className="sf-case-materials-grid">
              {project.materials.map((item) => item.image && (
                <figure key={item.title} data-sf-reveal="fade">
                  <div className="sf-case-material-image" style={{ aspectRatio: item.aspectRatio }}>
                    <Image src={item.image} alt={item.title} fill unoptimized={project.slug === "utribe"} sizes="(max-width: 720px) 100vw, 50vw" />
                  </div>
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {(project.research?.length || project.researchFilm) && (
          <section className="sf-case-research sf-shell" aria-labelledby="research-title">
            <div className="sf-section-label"><span>05 / R&amp;D</span><span>Visual exploration</span></div>
            <div className="sf-case-research-intro">
              <h2 id="research-title" data-sf-reveal="heading"><HeadingReveal>From material to mark.</HeadingReveal></h2>
              {project.researchNote && <p data-sf-reveal="fade">{project.researchNote}</p>}
            </div>
            {project.researchFilm && (
              <figure className="sf-case-research-film sf-case-film" data-sf-reveal="fade">
                <video src={project.researchFilm.src} controls playsInline preload="none" aria-label={`${project.title} ${project.researchFilm.caption ?? "R&D film"}`} />
                <figcaption>{project.researchFilm.caption ?? `${project.title} / R&D film`}</figcaption>
              </figure>
            )}
            {project.research && project.research.length > 0 && (
              <div className="sf-case-research-grid">
                {project.research.map((item) => item.image && (
                  <figure key={item.title} data-sf-reveal="fade">
                    <div className="sf-case-research-image" style={{ aspectRatio: item.aspectRatio }}>
                      <Image src={item.image} alt={item.title} fill unoptimized={project.slug !== "utribe"} sizes="(max-width: 720px) 100vw, 50vw" />
                    </div>
                    <figcaption>{item.title}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </section>
        )}

        {project.sections && project.sections.length > 0 && (
          <section className="sf-case-story sf-shell" aria-label="Approach and visual direction">
            <div className="sf-section-label"><span>{project.research ? "06" : project.materials ? "05" : "04"} / Approach</span><span>Behind the work</span></div>
            {project.sections.map((section) => (
              <div className="sf-case-story-row" key={section.title}>
                <h2 id={`story-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} data-sf-reveal="heading"><HeadingReveal>{section.title}</HeadingReveal></h2>
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
