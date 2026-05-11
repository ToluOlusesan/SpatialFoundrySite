import { Metadata } from "next";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderRender } from "@/components/ui/PlaceholderRender";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Studio — Spatial Foundry",
  description:
    "We believe every brand has a physical truth waiting to be designed. A 3D branding studio built around conviction, not decoration.",
};

const capabilities = [
  {
    title: "3D Brand Identity",
    body:  "Hero brand objects, spatial logos, material studies, and the visual logic that defines how your brand exists in three dimensions.",
  },
  {
    title: "Icon Systems",
    body:  "Modular 3D icon libraries built for product UI, marketing, and motion use. Consistent across every size and context.",
  },
  {
    title: "Motion & Launch Films",
    body:  "From 15-second social loops to full 90-second brand films. Motion that launches products and makes identities memorable.",
  },
  {
    title: "Web Illustrations & UI Renders",
    body:  "3D assets designed specifically for digital interfaces: hero illustrations, feature renders, and spatial UI elements.",
  },
];

const values = [
  {
    title: "Form follows meaning",
    body:  "We don't pick shapes for aesthetics. Every form decision traces back to what the brand stands for.",
  },
  {
    title: "Systems over singles",
    body:  "One great render is a photograph. A system is an identity. We always design for scale.",
  },
  {
    title: "Made in Lagos, built for the world",
    body:  "Our perspective is specific and grounded. Our ambitions and client base are global.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-24 pt-36 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll>
            <span className="eyebrow accent-bar mb-8 block">The Studio</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <h1
              className="font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(2.5rem, 5vw, 4.5rem)",
                letterSpacing: "-0.025em",
                lineHeight:    1.05,
                maxWidth:      "20ch",
              }}
            >
              We believe every brand has a physical truth waiting to be designed.
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      {/* Full-width render placeholder */}
      <section className="pb-0 pt-4">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll>
            <PlaceholderRender
              label="[ Studio / Brand Render ]"
              aspectRatio="21/9"
              className="w-full"
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll>
            <p
              className="mb-7 font-body text-fg/70"
              style={{ maxWidth: "65ch", lineHeight: 1.7 }}
            >
              Spatial Foundry was built around a frustration: that 3D design in
              branding had become decoration. Beautiful renders dropped into
              Figma files, disconnected from the brand thinking underneath. We
              wanted to prove something different — that when you approach 3D
              from the identity outward, you get work that&apos;s coherent,
              scalable, and unmistakably owned.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p
              className="font-body text-fg/70"
              style={{ maxWidth: "65ch", lineHeight: 1.7 }}
            >
              We don&apos;t render things. We build spatial identities. The
              renders are evidence. What we&apos;re really making is a language
              of form, material, and light that belongs to your brand and no
              other.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll className="mb-14">
            <span className="eyebrow accent-bar mb-4 block">Capabilities</span>
            <h2
              className="font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(2rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight:    1.1,
              }}
            >
              What We Do
            </h2>
          </RevealOnScroll>

          {/* Gap-of-1px = hairline border grid */}
          <div className="grid grid-cols-1 gap-px bg-fg/8 md:grid-cols-2">
            {capabilities.map((cap, i) => (
              <RevealOnScroll key={cap.title} delay={i * 0.07}>
                <div className="bg-bg p-10 transition-colors duration-[350ms] hover:bg-surface">
                  <h3
                    className="font-display mb-4 font-bold text-fg"
                    style={{
                      fontSize:      "clamp(1.25rem, 2vw, 1.5rem)",
                      letterSpacing: "-0.01em",
                      lineHeight:    1.25,
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className="font-body text-fg/65"
                    style={{ lineHeight: 1.65 }}
                  >
                    {cap.body}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Portrait placeholder */}
            <RevealOnScroll className="lg:col-span-5">
              <PlaceholderRender
                label="[ Founder portrait / render ]"
                aspectRatio="3/4"
                className="w-full"
              />
            </RevealOnScroll>

            {/* Bio */}
            <div className="flex flex-col justify-center lg:col-span-7">
              <RevealOnScroll delay={0.08}>
                <span className="eyebrow accent-bar mb-6 block">The Founder</span>
              </RevealOnScroll>

              <RevealOnScroll delay={0.12}>
                <h2
                  className="font-display mb-2 font-bold text-fg"
                  style={{
                    fontSize:      "clamp(2.25rem, 4vw, 3.75rem)",
                    letterSpacing: "-0.025em",
                    lineHeight:    1.05,
                  }}
                >
                  Olusesan Tolu
                </h2>
              </RevealOnScroll>

              <RevealOnScroll delay={0.15}>
                <p className="eyebrow mb-8">Founder &amp; Creative Director</p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.19}>
                <p
                  className="mb-6 font-body text-fg/70"
                  style={{ maxWidth: "55ch", lineHeight: 1.7 }}
                >
                  I started as a writer — short stories and fiction before I
                  ever touched a design tool. That background shaped how I
                  think about 3D: as a narrative medium, not a technical one.
                  Every project I take on starts with the story the brand is
                  trying to tell, and ends with a spatial form that tells it
                  better than words could.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.23}>
                <p
                  className="font-body text-fg/70"
                  style={{ maxWidth: "55ch", lineHeight: 1.7 }}
                >
                  I&apos;ve spent years at the intersection of product design
                  and 3D — working in-house at fintech companies and
                  independently on branding projects across Lagos and beyond.
                  Spatial Foundry is where both sides of that meet.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll className="mb-14">
            <span className="eyebrow accent-bar mb-4 block">Principles</span>
            <h2
              className="font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(2rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight:    1.1,
              }}
            >
              What We Stand For
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {values.map((val, i) => (
              <RevealOnScroll key={val.title} delay={i * 0.09}>
                <article>
                  <div className="mb-5 h-px w-8 bg-accent" />
                  <h3
                    className="font-display mb-4 font-bold text-fg"
                    style={{
                      fontSize:      "clamp(1.25rem, 2vw, 1.5rem)",
                      letterSpacing: "-0.01em",
                      lineHeight:    1.25,
                    }}
                  >
                    {val.title}
                  </h3>
                  <p
                    className="font-body text-fg/65"
                    style={{ lineHeight: 1.65 }}
                  >
                    {val.body}
                  </p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
