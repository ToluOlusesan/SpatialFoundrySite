import { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Spatial Foundry",
  description:
    "Start a 3D branding project with Spatial Foundry. Reach out for brand identity, icon systems, motion, or web illustrations.",
};

const contactLinks = [
  { label: "Instagram", value: "@spatialfoundry", href: "https://instagram.com/spatialfoundry" },
  { label: "Behance",   value: "spatialfoundry",  href: "https://behance.net/spatialfoundry"   },
  { label: "LinkedIn",  value: "Olusesan Tolu",   href: "https://linkedin.com"                 },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="pb-16 pt-36 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RevealOnScroll>
            <span className="eyebrow accent-bar mb-8 block">Get in Touch</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <h1
              className="font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(2.5rem, 5vw, 4.5rem)",
                letterSpacing: "-0.025em",
                lineHeight:    1.05,
                maxWidth:      "18ch",
              }}
            >
              Let&apos;s build something spatial.
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.14}>
            <p
              className="mt-6 font-body text-fg/60"
              style={{ maxWidth: "44ch", lineHeight: 1.65 }}
            >
              Whether you have a clear brief or just a conversation to start —
              reach out.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

            {/* Left: contact info */}
            <div className="lg:col-span-4">
              <RevealOnScroll>
                <a href="mailto:spatialfoundry@gmail.com" className="group mb-12 block">
                  <span className="eyebrow mb-3 block">Email</span>
                  <span
                    className="font-display font-bold text-fg transition-colors duration-200 group-hover:text-accent link-underline"
                    style={{
                      fontSize:      "clamp(1rem, 2vw, 1.375rem)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    spatialfoundry@gmail.com
                  </span>
                </a>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <div>
                  <span className="eyebrow mb-5 block">Find Us</span>
                  <ul className="space-y-0">
                    {contactLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between border-b border-fg/8 py-4 transition-colors hover:border-fg/20"
                        >
                          <div>
                            <span className="eyebrow mb-1 block">{link.label}</span>
                            <span className="font-body text-sm text-fg/65 transition-colors group-hover:text-fg">
                              {link.value}
                            </span>
                          </div>
                          <ArrowUpRight
                            size={13}
                            className="text-fg/35 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.18} className="mt-12">
                <div className="rounded-2xl border border-fg/8 bg-surface p-6">
                  <p className="eyebrow mb-2">Based In</p>
                  <p className="mb-6 font-body text-sm text-fg/65">Lagos, Nigeria</p>
                  <p className="eyebrow mb-2">Response Time</p>
                  <p className="font-body text-sm text-fg/65">Within 48 hours</p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right: contact form */}
            <RevealOnScroll className="lg:col-span-8" delay={0.1}>
              <ContactForm />
            </RevealOnScroll>

          </div>
        </div>
      </section>
    </>
  );
}
