"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const steps = [
  {
    number: "01",
    title:  "Discovery & Brief",
    body:   "We learn your brand from the inside out: what it stands for, who it's for, and what problem the 3D work needs to solve.",
  },
  {
    number: "02",
    title:  "Concept & Art Direction",
    body:   "Moodboards, material studies, and initial form explorations. We define the visual logic before touching a single vertex.",
  },
  {
    number: "03",
    title:  "3D Design & Rendering",
    body:   "The build phase. Assets are modelled, lit, and rendered with obsessive attention to material quality, lighting, and compositional precision.",
  },
  {
    number: "04",
    title:  "Motion & Animation",
    body:   "Static assets are animated into launch films, loop sequences, and UI-ready motion assets.",
  },
  {
    number: "05",
    title:  "Delivery & Handoff",
    body:   "Final files packaged cleanly: renders at every required resolution, animation exports, Figma-ready assets, and a usage guide.",
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Header */}
        <RevealOnScroll className="mb-6">
          <h2
            className="font-display font-bold text-fg"
            style={{
              fontSize:      "clamp(1.75rem, 3vw, 2.75rem)",
              letterSpacing: "-0.015em",
              lineHeight:    1.15,
            }}
          >
            From Brief to Final Render
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <p
            className="mb-16 font-body text-base leading-relaxed text-fg"
            style={{ maxWidth: "65ch", lineHeight: 1.65 }}
          >
            We run a tight, collaborative process. No black boxes, no guesswork
            — just a clear path from your brief to deliverables that ship.
          </p>
        </RevealOnScroll>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <RevealOnScroll key={step.number} delay={i * 0.06}>
                <button
                  onClick={() => setActiveStep(isActive ? null : i)}
                  aria-expanded={isActive}
                  className="group w-full border-t border-fg/10 py-6 text-left last:border-b last:border-b-fg/10"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-8">
                      <span
                        className={`w-8 shrink-0 font-body text-xs font-medium tracking-widest transition-colors duration-200 ${
                          isActive ? "text-fg" : "text-fg"
                        }`}
                      >
                        {step.number}
                      </span>
                      <span
                        className={`font-display font-bold leading-tight transition-colors duration-200 ${
                          isActive ? "text-fg" : "text-fg group-hover:text-fg"
                        }`}
                        style={{
                          fontSize:      "clamp(1.25rem, 2.5vw, 2rem)",
                          letterSpacing: "-0.015em",
                        }}
                      >
                        {step.title}
                      </span>
                    </div>

                    <span
                      className={`shrink-0 font-body text-lg font-medium transition-all duration-300 ${
                        isActive ? "text-fg" : "text-fg"
                      }`}
                      style={{
                        transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                        display:   "inline-block",
                      }}
                    >
                      +
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{    opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p
                          className="pl-16 pt-4 font-body text-base text-fg"
                          style={{ maxWidth: "65ch", lineHeight: 1.65 }}
                        >
                          {step.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
