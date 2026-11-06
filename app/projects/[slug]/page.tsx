import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/lib/projects";
import PageMotion from "@/components/PageMotion";
import HeadingReveal from "@/components/HeadingReveal";

// Small per-column delay so grid rows settle left to right rather than as one block.
const stagger = (column: number) => ({ "--sf-delay": `${column * 90}ms` } as React.CSSProperties);

interface Params {
  params: { slug: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return { title: "Project Not Found — Spatial Foundry" };
  const title = project.title + " — Spatial Foundry";
  const images = project.heroImage ? [project.heroImage] : undefined;
  return {
    title,
    description: project.subtitle,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title, description: project.subtitle, type: "article", images },
    twitter: { card: "summary_large_image", title, description: project.subtitle, images },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const caseClassName = project.slug === "utribe" ? "sf-case sf-case-utribe" : "sf-case";
  // Home lists MeshKit first; send visitors back to the section they came from.
  const backHref = project.slug === "meshkit" ? "/#project" : `/#${project.slug}`;
  const order = ["meshkit", "utribe"];
  const nextSlug = order[(order.indexOf(project.slug) + 1) % order.length];
  const next = nextSlug !== project.slug ? getProject(nextSlug) : undefined;

  // Number sections in the order they actually render.
  const hasGallery = Boolean(project.gallery?.length);
  const hasMaterials = Boolean(project.materials?.length);
  const hasResearch = Boolean(project.research?.length || project.researchFilm);
  const hasStory = Boolean(project.sections?.length);
  const hasIcons = Boolean(project.icons?.length);
  let sectionCount = 2;
  const number = (present: boolean) => (present ? String(++sectionCount).padStart(2, "0") : "");
  const galleryNumber = number(hasGallery);
  const materialsNumber = number(hasMaterials);
  const researchNumber = number(hasResearch);
  const storyNumber = number(hasStory);
  const iconsNumber = number(hasIcons);

  return (
    <div className={caseClassName}>
      <a href="#main" className="sf-skip">Skip to content</a>
      <header className="sf-header">
        <div className="sf-header-inner sf-shell">
          <Link href="/" className="sf-brand" aria-label="Spatial Foundry home">
            <Image src="/logo/logo-wordmark-combination/combination.svg" alt="Spatial Foundry" width={1025} height={296} priority />
          </Link>
          <Link href={backHref} className="sf-case-back"><ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" /> Back to work</Link>
        </div>
      </header>

      <main id="main">
        <section className="sf-case-intro sf-shell" aria-labelledby="case-title">
          <div className="sf-section-label"><span>01 / Case study</span><span>{project.client ? `${project.client} · ` : ""}{project.year}</span></div>
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

        {hasGallery && project.gallery && (
          <section className="sf-case-gallery sf-shell" aria-labelledby="gallery-title">
            <div className="sf-section-label"><span>{galleryNumber} / Gallery</span><span>Selected work</span></div>
            <h2 id="gallery-title" data-sf-reveal="heading"><HeadingReveal>{project.galleryTitle ?? `${project.title} in detail`}</HeadingReveal></h2>
            <div className="sf-case-gallery-grid">
              {project.gallery.map((item, index) => item.image && (
                <figure className={item.featured ? "sf-case-gallery-featured" : undefined} key={item.title} data-sf-reveal="fade" style={item.featured ? undefined : stagger((index - 1) % 2)}>
                  <div className="sf-case-gallery-image" style={{ aspectRatio: project.slug === "utribe" && !item.featured ? "1 / 1" : item.aspectRatio }}>
                    <Image src={item.image} alt={item.title} fill quality={90} sizes={item.featured ? "(max-width: 1600px) 100vw, 1520px" : "(max-width: 720px) 100vw, 760px"} />
                  </div>
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {hasMaterials && project.materials && (
          <section className="sf-case-materials sf-shell" aria-labelledby="materials-title">
            <div className="sf-section-label"><span>{materialsNumber} / Material studies</span><span>3D explorations</span></div>
            <div className="sf-case-materials-intro">
              <h2 id="materials-title" data-sf-reveal="heading"><HeadingReveal>Material, shaped by light.</HeadingReveal></h2>
              {project.materialsNote && <p data-sf-reveal="fade">{project.materialsNote}</p>}
            </div>
            <div className="sf-case-materials-grid">
              {project.materials.map((item, index) => item.image && (
                <figure key={item.title} data-sf-reveal="fade" style={stagger(index % 2)}>
                  <div className="sf-case-material-image" style={{ aspectRatio: item.aspectRatio }}>
                    <Image src={item.image} alt={item.title} fill quality={90} sizes="(max-width: 720px) 100vw, 760px" />
                  </div>
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {hasResearch && (
          <section className="sf-case-research sf-shell" aria-labelledby="research-title">
            <div className="sf-section-label"><span>{researchNumber} / R&amp;D</span><span>Visual exploration</span></div>
            <div className="sf-case-research-intro">
              <h2 id="research-title" data-sf-reveal="heading"><HeadingReveal>From material to mark.</HeadingReveal></h2>
              {project.researchNote && <p data-sf-reveal="fade">{project.researchNote}</p>}
            </div>
            {project.researchFilm && (
              <figure className="sf-case-research-film sf-case-film" data-sf-reveal="fade">
                <video src={project.researchFilm.src} poster={project.researchFilm.poster} controls playsInline preload="none" aria-label={`${project.title} ${project.researchFilm.caption ?? "R&D film"}`} />
                <figcaption>{project.researchFilm.caption ?? `${project.title} / R&D film`}</figcaption>
              </figure>
            )}
            {project.research && project.research.length > 0 && (
              <div className="sf-case-research-grid">
                {project.research.map((item, index) => item.image && (
                  <figure key={item.title} data-sf-reveal="fade" style={stagger(index % 2)}>
                    <div className="sf-case-research-image" style={{ aspectRatio: item.aspectRatio }}>
                      <Image src={item.image} alt={item.title} fill quality={90} sizes="(max-width: 720px) 100vw, 760px" />
                    </div>
                    <figcaption>{item.title}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </section>
        )}

        {hasStory && project.sections && (
          <section className="sf-case-story sf-shell" aria-label="Approach and visual direction">
            <div className="sf-section-label"><span>{storyNumber} / Approach</span><span>Behind the work</span></div>
            {project.sections.map((section) => (
              <div className="sf-case-story-row" key={section.title}>
                <h2 id={`story-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} data-sf-reveal="heading"><HeadingReveal>{section.title}</HeadingReveal></h2>
                <p data-sf-reveal="fade">{section.body}</p>
              </div>
            ))}
          </section>
        )}

        {hasIcons && project.icons && (
          <section className="sf-case-icons sf-shell" aria-labelledby="icons-title">
            <div className="sf-section-label"><span>{iconsNumber} / Library</span><span>Icon selection</span></div>
            <h2 id="icons-title" data-sf-reveal="heading"><HeadingReveal>A sample of the library</HeadingReveal></h2>
            <div className="sf-case-icon-grid">
              {project.icons.map((icon, index) => (
                <figure key={icon.name} data-sf-reveal="fade" style={stagger(index % 3)}>
                  <div><Image src={icon.image} alt={icon.name} fill quality={90} sizes="(max-width: 720px) 50vw, 500px" /></div>
                  <figcaption>{icon.name}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
        {next && (
          <section className="sf-next sf-shell" aria-labelledby="next-title">
            <div className="sf-section-label"><span>Next project</span><span>{next.client ? `${next.client} · ` : ""}{next.year}</span></div>
            <Link href={`/projects/${next.slug}`} className="sf-next-link" data-sf-reveal="fade">
              <div className="sf-next-text">
                <h2 id="next-title">{next.title}</h2>
                <p>{next.subtitle}</p>
                <span className="sf-next-cta">View case study <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" /></span>
              </div>
              {next.heroImage && (
                <div className="sf-next-image">
                  <Image src={next.heroImage} alt="" fill quality={90} sizes="(max-width: 720px) 100vw, 760px" />
                </div>
              )}
            </Link>
          </section>
        )}
      </main>

      <footer className="sf-footer sf-shell">
        <Link href={backHref} className="sf-case-footer-link"><ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" /> Back to work</Link>
        <a href="mailto:spatialfoundry@gmail.com" className="sf-footer-mail">spatialfoundry@gmail.com</a>
        <span>© {project.year} Spatial Foundry</span>
      </footer>
      <PageMotion />
    </div>
  );
}
