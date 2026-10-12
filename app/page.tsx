import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageMotion from "@/components/PageMotion";
import HeadingReveal from "@/components/HeadingReveal";

const practice = [
  {
    number: "01",
    title: "Creative technology",
    description: "Digital tools and experiences shaped around a clear idea.",
  },
  {
    number: "02",
    title: "Identity systems",
    description: "Visual languages made to work across formats and contexts.",
  },
  {
    number: "03",
    title: "3D & motion",
    description: "Form, material and movement used with purpose.",
  },
  {
    number: "04",
    title: "Digital craft",
    description: "Design carried through to the final interaction.",
  },
];

export default function HomePage() {
  return (
    <div className="sf-home" id="top">
      <header className="sf-header">
        <div className="sf-header-inner sf-shell">
        <Link href="/" className="sf-brand" aria-label="Spatial Foundry home">
          <Image
            src="/logo/logo/logo.svg"
            alt="Spatial Foundry"
            width={1024}
            height={760}
            priority
          />
        </Link>
        <nav className="sf-nav" aria-label="Main navigation">
          <a href="#project">Work</a>
          <a href="#practice">Practice</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      </header>

      <main>
        <section className="sf-hero" aria-label="Spatial Foundry studio">
          <Image
            src="/images/hero.png"
            alt="Rendered studio workspace with a design board, desk and chair"
            fill
            priority
            className="sf-hero-image"
            sizes="100vw"
          />
          <div className="sf-hero-squares" aria-hidden="true">
            <span className="sf-hero-square" /><span className="sf-hero-square" />
            <span className="sf-hero-square" /><span className="sf-hero-square" />
          </div>
        </section>

        <section className="sf-intro sf-shell" aria-labelledby="hero-title">
          <div className="sf-section-label"><span>Creative technology studio</span></div>
          <div className="sf-intro-content">
            <h1 id="hero-title" data-sf-reveal="heading"><HeadingReveal>At Spatial Foundry, we turn ambitious ideas into visual stories, digital experiences and the tools to bring them to life.</HeadingReveal></h1>
            <a href="#project" className="sf-hero-link" data-sf-reveal="fade">
              Selected work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="sf-project sf-shell" id="project" aria-labelledby="project-title">
          <div className="sf-section-label"><span>01 / Work</span></div>
          <div className="sf-project-heading">
            <h2 id="project-title" data-sf-reveal="heading"><HeadingReveal>MeshKit</HeadingReveal></h2>
            <p data-sf-reveal="fade">
              A customizable 3D icon library that gives brands more control over
              the way their icons look and feel.
            </p>
          </div>
          <div className="sf-project-images" data-sf-reveal="fade">
            <figure>
              <Link href="/projects/meshkit" className="sf-project-image sf-project-image-art" aria-label="View the MeshKit project">
                <Image
                  src="/images/meshkit/0018.png"
                  alt="A red microphone icon in a lilac 3D design scene"
                  fill
                  unoptimized
                  sizes="(max-width: 720px) 100vw, 42vw"
                />
              </Link>
              <figcaption>Icon study</figcaption>
            </figure>
            <figure>
              <Link href="/projects/meshkit" className="sf-project-image sf-project-image-ui" aria-label="View the MeshKit project">
                <Image
                  src="/images/meshkit/portfolio/Home%20page.png"
                  alt="MeshKit icon library interface"
                  fill
                  unoptimized
                  sizes="(max-width: 720px) 100vw, 58vw"
                />
              </Link>
              <figcaption>Product library</figcaption>
            </figure>
          </div>
          <div className="sf-project-footer">
            <Link href="/projects/meshkit">Explore the project <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="sf-practice sf-shell" id="practice" aria-labelledby="practice-title">
          <div className="sf-section-label"><span>02 / Practice</span></div>
          <div className="sf-practice-intro">
            <h2 id="practice-title" data-sf-reveal="heading"><HeadingReveal>Across disciplines,<br />from the start.</HeadingReveal></h2>
            <p data-sf-reveal="fade">
              The work moves between design and technology according to the idea.
              We bring both into the process from day one.
            </p>
          </div>
          <div className="sf-practice-grid">
            {practice.map((item) => (
              <div className="sf-practice-item" key={item.number} data-sf-reveal="fade">
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sf-philosophy" id="philosophy" aria-labelledby="philosophy-title">
          <div className="sf-shell">
            <div className="sf-section-label"><span>03 / Philosophy</span></div>
            <div className="sf-philosophy-content">
              <h2 id="philosophy-title" data-sf-reveal="heading"><HeadingReveal>We make ideas real. We make the process better.</HeadingReveal></h2>
              <p data-sf-reveal="fade">
                We start with the story and work out how to make the idea real. Sometimes that means bold visuals. Sometimes it means solving a technical problem, changing our workflow, or building a tool we wish existed. We see it through.
              </p>
            </div>
          </div>
        </section>

        <section className="sf-contact sf-shell" id="contact" aria-labelledby="contact-title">
          <div className="sf-section-label"><span>04 / Contact</span></div>
          <div className="sf-contact-content">
            <h2 id="contact-title" data-sf-reveal="heading"><HeadingReveal>Tell us what you’re making.</HeadingReveal></h2>
            <a href="mailto:spatialfoundry@gmail.com" data-sf-reveal="fade">
              spatialfoundry@gmail.com <ArrowUpRight size={25} strokeWidth={1.4} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="sf-footer sf-shell">
        <Image src="/logo/wordmark/wordmark-orange.png" alt="Spatial Foundry" width={1024} height={490} />
        <span>Lagos, Nigeria · Working everywhere</span>
        <span>© 2026 Spatial Foundry</span>
      </footer>
      <PageMotion />
    </div>
  );
}

