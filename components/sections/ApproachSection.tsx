"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderRender } from "@/components/ui/PlaceholderRender";

const tabs = [
  {
    id:     "shape",
    title:  "Shape the Identity",
    number: "01",
    copy:   "Every brand object, icon, and render we create starts from the same question: what is the physical truth of this brand? We design spatial identities that communicate clearly whether you see them at 16px or projected at 3 metres.",
    render: "[ Shape the Identity — Render ]",
  },
  {
    id:     "build",
    title:  "Build the System",
    number: "02",
    copy:   "A single great render is decoration. A system is infrastructure. We build icon libraries, brand object families, and motion templates that scale across your product, marketing, and communications — coherently.",
    render: "[ Build the System — Render ]",
  },
  {
    id:     "life",
    title:  "Bring It to Life",
    number: "03",
    copy:   "From launch films to web illustrations, we make your 3D identity move. Motion isn't an afterthought here — it's baked into how we design. Every static asset is conceived with its animated form in mind.",
    render: "[ Bring It to Life — Motion Render ]",
  },
];

export function ApproachSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Section header */}
        <RevealOnScroll className="mb-14">
          <span className="eyebrow accent-bar mb-4 block">The Method</span>
          <h2
            className="font-display font-bold text-fg"
            style={{
              fontSize:      "clamp(2rem, 3.5vw, 3rem)",
              letterSpacing: "-0.02em",
              lineHeight:    1.1,
            }}
          >
            The Spatial Foundry Method
          </h2>
        </RevealOnScroll>

        {/* Two-column split */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* Left: tab list */}
          <div className="flex flex-col gap-1 lg:col-span-5">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  aria-pressed={isActive}
                  className={[
                    "group relative flex items-start gap-5 rounded-2xl px-5 py-5 text-left",
                    "transition-all duration-[350ms]",
                    isActive ? "bg-fg/[0.04]" : "hover:bg-fg/[0.02]",
                  ].join(" ")}
                >
                  {/* Number badge */}
                  <span
                    className={[
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                      "font-body text-[12px] font-medium tracking-widest transition-all duration-300",
                      isActive
                        ? "bg-fg text-bg"
                        : "border border-line text-fg/70 group-hover:border-fg/35 group-hover:text-fg/95",
                    ].join(" ")}
                  >
                    {tab.number}
                  </span>

                  <div className="flex-1 pt-1.5">
                    <span
                      className={[
                        "block font-display font-bold leading-tight transition-colors duration-200",
                        isActive
                          ? "text-fg"
                          : "text-fg/75 group-hover:text-accent",
                      ].join(" ")}
                      style={{
                        fontSize:      "clamp(1.25rem, 1.95vw, 1.5rem)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {tab.title}
                    </span>

                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.p
                          key={tab.id + "-copy"}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{    opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="mt-3 overflow-hidden font-body text-fg/85"
                          style={{ fontSize: "clamp(0.9375rem, 1.15vw, 1.0625rem)", lineHeight: 1.7 }}
                        >
                          {tab.copy}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: swappable render */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{    opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full min-h-[320px]"
              >
                <PlaceholderRender
                  label={active.render}
                  aspectRatio="4/3"
                  className="h-full w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
