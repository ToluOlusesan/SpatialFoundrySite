import { Metadata } from "next";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderRender } from "@/components/ui/PlaceholderRender";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title:       "Culture — Spatial Foundry",
  description:
    "3D design from a distinctly Nigerian lens. Studio explorations that reinterpret heritage patterns, symbols, and materials — from Adire and Nsibidi to Benin bronze and Hausa adobe — in three dimensions.",
};

const explorations = [
  {
    title:  "Adire",
    sub:    "Yoruba indigo resist, in three dimensions",
    body:   "What happens when Adire's resist logic stops behaving like cloth — and starts behaving like a surface system? We study how the pattern modulates across curvature, depth, and light instead of laying flat.",
  },
  {
    title:  "Nsibidi",
    sub:    "Igbo pictograms, given mass",
    body:   "Nsibidi compresses meaning into mark. We treat each glyph as a volume — letting weight, undercut, and material communicate what the line drawing only implies, and building system-ready icon families from the source.",
  },
  {
    title:  "Benin & Ife",
    sub:    "From brass casting to digital render",
    body:   "Benin and Ife perfected a 3D language centuries before the word existed. We study how their proportions, surface treatment, and patina translate into digital materiality without losing what made the originals authoritative.",
  },
  {
    title:  "Hausa adobe",
    sub:    "Architecture as identity",
    body:   "The mud facades of Kano and Zaria — geometric, layered, shadow-driven — already solve form-and-light problems we're still asking in 3D today. We model them as systems, not references.",
  },
];

export default function CulturePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pb-20 pt-36 md:pb-28 md:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll>
            <span className="eyebrow accent-bar mb-8 block">Culture</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <h1
              className="font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(2.75rem, 6vw, 6rem)",
                letterSpacing: "-0.03em",
                lineHeight:    1.0,
              }}
            >
              Culture,<br />cast in form.
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.18}>
            <p
              className="mt-10 font-body text-fg/85"
              style={{
                fontSize:   "clamp(1.0625rem, 1.4vw, 1.3125rem)",
                lineHeight: 1.6,
                maxWidth:   "54ch",
              }}
            >
              3D design from a distinctly Nigerian lens — work and explorations
              that reimagine the medium from our culture, and reinterpret our
              culture in three dimensions.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Hero render placeholder ── */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll>
            <PlaceholderRender
              label="[ Culture / Heritage Render ]"
              aspectRatio="12/5"
              className="w-full"
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Manifesto ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <RevealOnScroll className="col-span-12 md:col-span-4">
              <span className="eyebrow accent-bar block">A premise</span>
            </RevealOnScroll>

            <div className="col-span-12 flex flex-col gap-7 md:col-span-8">
              <RevealOnScroll delay={0.06}>
                <p
                  className="font-body text-fg/90"
                  style={{
                    fontSize:   "clamp(1.0625rem, 1.3vw, 1.25rem)",
                    lineHeight: 1.7,
                    maxWidth:   "60ch",
                  }}
                >
                  We don&apos;t import a visual language and translate it. Spatial
                  Foundry works from a different premise — that the geometries,
                  proportions, and mass encoded in Nigerian design traditions are
                  themselves world-class material for the spatial era.
                  Adire&apos;s indigo-resist patterns. Nsibidi&apos;s compressed
                  pictograms. The bronze casts of Benin and Ife. Yoruba beadwork.
                  Hausa adobe geometry. Uli linework. Aso Oke handweave. These
                  aren&apos;t motifs to sprinkle into a render — they&apos;re
                  starting points for entire systems.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.14}>
                <p
                  className="font-body text-fg/90"
                  style={{
                    fontSize:   "clamp(1.0625rem, 1.3vw, 1.25rem)",
                    lineHeight: 1.7,
                    maxWidth:   "60ch",
                  }}
                >
                  When we build a 3D identity, the first question isn&apos;t
                  aesthetic. It&apos;s grammatical: what would this look like if
                  its rules came from here? Not &ldquo;inspired by&rdquo; — actually
                  constructed from. The work that follows feels familiar to the
                  eye that knows it, and fresh to the eye that doesn&apos;t. Both
                  eyes are welcome.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pull quote ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll>
            <div className="border-t border-line pt-12 md:pt-16">
              <blockquote
                className="font-display font-bold text-fg"
                style={{
                  fontSize:      "clamp(2rem, 4.4vw, 4.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight:    1.05,
                  maxWidth:      "22ch",
                }}
              >
                Culture is geometry.<br />
                Geometry is mass.<br />
                <span className="text-accent">Mass is form.</span>
              </blockquote>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Explorations ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">

          <RevealOnScroll className="mb-14">
            <span className="eyebrow accent-bar mb-4 block">Explorations</span>
            <h2
              className="font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(2rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight:    1.1,
                maxWidth:      "20ch",
              }}
            >
              Studies in progress.
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2">
            {explorations.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.07}>
                <article className="flex flex-col gap-7 bg-bg p-8 transition-colors duration-[350ms] hover:bg-surface md:p-10">
                  <PlaceholderRender
                    label={`[ ${item.title} — Study ]`}
                    aspectRatio="4/3"
                    className="w-full"
                  />
                  <div>
                    <h3
                      className="font-display mb-2 font-bold text-fg"
                      style={{
                        fontSize:      "clamp(1.5rem, 2.4vw, 2rem)",
                        letterSpacing: "-0.015em",
                        lineHeight:    1.15,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="mb-4 font-body text-fg/65" style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)" }}>
                      {item.sub}
                    </p>
                    <p
                      className="font-body text-fg/85"
                      style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)", lineHeight: 1.65, maxWidth: "50ch" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* ── Closing line ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll>
            <p
              className="mx-auto text-center font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(1.75rem, 3.2vw, 2.75rem)",
                letterSpacing: "-0.02em",
                lineHeight:    1.15,
                maxWidth:      "30ch",
              }}
            >
              A 3D vocabulary that starts in Nigeria — and travels well.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  );
}
