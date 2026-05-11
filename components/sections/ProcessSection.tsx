"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const steps = [
  {
    title: "Discovery & Brief",
    body:  "We learn your brand from the inside out: what it stands for, who it's for, and what problem the 3D work needs to solve.",
  },
  {
    title: "Concept & Art Direction",
    body:  "Moodboards, material studies, and initial form explorations. We define the visual logic before touching a single vertex.",
  },
  {
    title: "3D Design & Rendering",
    body:  "The build phase. Assets are modelled, lit, and rendered with obsessive attention to material quality, lighting, and compositional precision.",
  },
  {
    title: "Motion & Animation",
    body:  "Static assets are animated into launch films, loop sequences, and UI-ready motion assets.",
  },
  {
    title: "Delivery & Handoff",
    body:  "Final files packaged cleanly: renders at every required resolution, animation exports, Figma-ready assets, and a usage guide.",
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Header */}
        <RevealOnScroll>
          <span className="eyebrow accent-bar mb-5 block">The Process</span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.06} className="mb-4">
          <h2
            className="font-display font-bold text-fg"
            style={{
              fontSize:      "clamp(2rem, 3.5vw, 3.25rem)",
              letterSpacing: "-0.02em",
              lineHeight:    1.1,
              maxWidth:      "14ch",
            }}
          >
            From Brief to Final Render
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p
            className="mb-16 font-body text-fg/80"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.125rem)", maxWidth: "55ch", lineHeight: 1.7 }}
          >
            No black boxes, no guesswork — just a clear path from your brief to
            deliverables that ship.
          </p>
        </RevealOnScroll>

        {/* Accordion */}
        <div className="flex flex-col">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <RevealOnScroll key={step.title} delay={i * 0.05}>
                <div className="border-t border-line last:border-b last:border-line">
                  <button
                    onClick={() => setActiveStep(isActive ? null : i)}
                    aria-expanded={isActive}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left focus-visible:outline-none"
                  >
                    <span
                      className={[
                        "font-display font-bold leading-tight transition-colors duration-200",
                        isActive ? "text-fg" : "text-fg/65 group-hover:text-accent",
                      ].join(" ")}
                      style={{
                        fontSize:      "clamp(1.375rem, 2.2vw, 1.875rem)",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {step.title}
                    </span>

                    {/* Circle toggle */}
                    <span
                      className={[
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border",
                        "transition-all duration-300",
                        isActive
                          ? "border-fg bg-fg text-bg"
                          : "border-line text-fg/65 group-hover:border-fg/35 group-hover:text-fg/90",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      <span
                        className="text-lg font-medium leading-none transition-transform duration-300"
                        style={{ display: "inline-block", transform: isActive ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        +
                      </span>
                    </span>
                  </button>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{    opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p
                          className="pb-8 font-body text-fg/85"
                          style={{ fontSize: "clamp(0.9375rem, 1.15vw, 1.0625rem)", maxWidth: "62ch", lineHeight: 1.75 }}
                        >
                          {step.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
