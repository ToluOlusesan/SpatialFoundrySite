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
  { label: "Behance",   value: "spatialfoundry",  href: "https://behance.net/spatialfoundry" },
  { label: "LinkedIn",  value: "Olusesan Tolu",   href: "https://linkedin.com" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="pb-16 pt-32 md:pb-20 md:pt-40 lg:pt-48">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <RevealOnScroll>
            <span className="eyebrow mb-6 block">— Get in Touch</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <h1
              className="font-display mb-6 font-bold text-fg"
              style={{
                fontSize:      "clamp(2.25rem, 4vw, 3.75rem)",
                letterSpacing: "-0.02em",
                lineHeight:    1.1,
                maxWidth:      "18ch",
              }}
            >
              Let&apos;s build something spatial.
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.13}>
            <p
              className="font-body text-base leading-relaxed text-fg"
              style={{ maxWidth: "44ch", lineHeight: 1.65 }}
            >
              Whether you have a clear brief or just a conversation to start —
              reach out.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 md:py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Left: contact info */}
            <div className="lg:col-span-4">
              <RevealOnScroll>
                <a href="mailto:spatialfoundry@gmail.com" className="group mb-12 block">
                  <span className="eyebrow mb-3 block">Email</span>
                  <span
                    className="font-display font-bold text-fg transition-opacity duration-200 group-hover:opacity-60"
                    style={{
                      fontSize:      "clamp(1.1rem, 2vw, 1.5rem)",
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
                          className="group flex items-center justify-between border-b border-fg/8 py-4 transition-colors hover:border-fg/30"
                        >
                          <div>
                            <span className="eyebrow mb-1 block" style={{ opacity: 0.7 }}>
                              {link.label}
                            </span>
                            <span className="font-body text-sm text-fg transition-colors group-hover:text-fg">
                              {link.value}
                            </span>
                          </div>
                          <ArrowUpRight
                            size={13}
                            className="text-fg transition-all duration-300 group-hover:text-fg group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.18} className="mt-12">
                <div className="rounded-2xl border border-fg/8 p-6">
                  <p className="eyebrow mb-2" style={{ opacity: 0.55 }}>Based In</p>
                  <p className="mb-6 font-body text-sm text-fg">Lagos, Nigeria</p>
                  <p className="eyebrow mb-2" style={{ opacity: 0.55 }}>Response Time</p>
                  <p className="font-body text-sm text-fg">Within 48 hours</p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right: contact form */}
            <RevealOnScroll className="lg:col-span-8" delay={0.12}>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
