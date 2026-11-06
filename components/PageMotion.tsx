"use client";

import { useEffect } from "react";

const squareZones = [
  [{ x: 0, y: 49 }, { x: 0, y: 68 }, { x: 10, y: 78 }, { x: 2, y: 28 }],
  [{ x: 91, y: 18 }, { x: 83, y: 37 }, { x: 91, y: 58 }, { x: 77, y: 15 }],
  [{ x: 78, y: 38 }, { x: 89, y: 69 }, { x: 70, y: 74 }, { x: 86, y: 45 }],
  [{ x: 96, y: 82 }, { x: 9, y: 31 }, { x: 1, y: 84 }, { x: 85, y: 85 }],
];

// Glyph dissolve, after the section headlines on Meta's Muse Wonder article:
// every character steps through the same fixed sequence (dense block → dotted → sparse)
// before the real letter lands. Deterministic, not random, so it reads as ink settling.
// Each glyph is born in the studio orange and cools into the text colour as it resolves,
// so the moving wave carries an orange → ink gradient across the line.
const DISSOLVE_GLYPHS = ["█", "⣿", ":"];
const SPREAD_MS = 900; // the wave crosses the whole heading in this time, whatever its length
const GLYPH_MS = 640;  // each character's own dissolve, from first block to settled letter

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const smootherstep = (value: number) => {
  const t = clamp(value, 0, 1);
  return t * t * t * (t * (6 * t - 15) + 10);
};
// Maps progress through [from, to] onto 0–1.
const window01 = (value: number, from: number, to: number) => clamp((value - from) / (to - from), 0, 1);

type RGB = [number, number, number];
const parseColor = (value: string): RGB | null => {
  const color = value.trim();
  const hex = color.match(/^#([0-9a-f]{6})$/i);
  if (hex) return [0, 2, 4].map((offset) => parseInt(hex[1].slice(offset, offset + 2), 16)) as RGB;
  const rgb = color.match(/rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i);
  return rgb ? [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])] : null;
};
const mixColor = (from: RGB, to: RGB, amount: number) =>
  `rgb(${from.map((channel, index) => Math.round(channel + (to[index] - channel) * amount)).join(" ")})`;

export default function PageMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".sf-home, .sf-case");
    const hero = root?.querySelector<HTMLElement>(".sf-hero");
    const header = root?.querySelector<HTMLElement>(".sf-header");
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const squares = hero ? Array.from(hero.querySelectorAll<HTMLElement>(".sf-hero-square")) : [];
    const squareField = hero?.querySelector<HTMLElement>(".sf-hero-squares");
    const revealTargets = Array.from(root.querySelectorAll<HTMLElement>("[data-sf-reveal]"));
    let heroInView = false;
    const lastPositions = squareZones.map(() => -1);
    let frame = 0;
    let disposed = false;

    const dissolveHeading = (heading: HTMLElement) => {
      if (reducedMotion.matches) return;
      const chars = Array.from(heading.querySelectorAll<HTMLElement>(".sf-type-char"));
      const beats = chars.map((el) => Number(el.style.getPropertyValue("--i")) || 0);
      const lastBeat = Math.max(1, ...beats);
      const items = chars.map((el, index) => ({ el, start: (beats[index] / lastBeat) * SPREAD_MS, stage: -1, done: false }));
      // Resolve both ends of the gradient once: the brand orange and this section's own ink.
      const warm = parseColor(getComputedStyle(root).getPropertyValue("--orange")) ?? [255, 43, 0];
      const ink = parseColor(getComputedStyle(heading).color) ?? [18, 18, 18];
      const startedAt = performance.now();

      const tick = (now: number) => {
        if (disposed) return;
        const elapsed = now - startedAt;
        let pending = false;
        for (const item of items) {
          if (item.done) continue;
          pending = true;
          const local = elapsed - item.start;
          if (local < 0) continue;
          const progress = local / GLYPH_MS;
          const { el } = item;
          if (progress >= 1) {
            delete el.dataset.sfGlyph;
            ["--sf-glyph-opacity", "--sf-glyph-color", "--sf-letter-opacity", "--sf-letter-shift"].forEach((name) => el.style.removeProperty(name));
            el.classList.add("is-revealed");
            item.done = true;
            continue;
          }

          // Glyph stages run through the first ~80%; the letter takes over from there.
          const stage = Math.min(DISSOLVE_GLYPHS.length - 1, Math.floor(window01(progress, 0, 0.8) * DISSOLVE_GLYPHS.length));
          if (stage !== item.stage) {
            item.stage = stage;
            el.dataset.sfGlyph = DISSOLVE_GLYPHS[stage];
          }
          // Glyph fades in quickly, then hands off to the letter with a crossfade rather than a cut.
          const glyphIn = smootherstep(window01(progress, 0, 0.28));
          const glyphOut = smootherstep(window01(progress, 0.6, 0.92));
          const letter = smootherstep(window01(progress, 0.55, 1));
          el.style.setProperty("--sf-glyph-opacity", (glyphIn * (1 - glyphOut)).toFixed(3));
          el.style.setProperty("--sf-glyph-color", mixColor(warm, ink, smootherstep(window01(progress, 0.08, 0.9))));
          el.style.setProperty("--sf-letter-opacity", letter.toFixed(3));
          el.style.setProperty("--sf-letter-shift", `${((1 - letter) * 0.08).toFixed(3)}em`);
        }
        if (pending) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const updateHeader = () => {
      if (!hero || !header) return;
      const headerHeight = header.offsetHeight;
      const heroRect = hero.getBoundingClientRect();
      const rawProgress = -heroRect.top / Math.max(1, heroRect.height - headerHeight);
      const progress = reducedMotion.matches
        ? Number(heroRect.bottom <= headerHeight)
        : Math.min(1, Math.max(0, rawProgress));
      const passing = Math.sin(progress * Math.PI);
      const squareFade = 1 - Math.min(1, Math.max(0, -heroRect.top / 320));

      if (squareField) squareField.style.opacity = squareFade.toFixed(3);
      header.style.setProperty("--sf-paper", progress.toFixed(3));
      header.style.setProperty("--sf-backdrop-blur", `${(8 * progress).toFixed(2)}px`);
      header.style.setProperty("--sf-nav-blur", `${(1.25 * passing).toFixed(2)}px`);
      header.style.setProperty("--sf-nav-opacity", (1 - 0.1 * passing).toFixed(3));
      header.style.setProperty("--sf-nav-shift", `${(2 * passing).toFixed(2)}px`);
      header.classList.toggle("is-scrolled", progress === 1);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateHeader);
    };

    const rearrangeSquares = () => {
      if (!heroInView || document.hidden || reducedMotion.matches) return;
      squares.forEach((square, index) => {
        const zones = squareZones[index];
        if (!zones) return;
        let next = Math.floor(Math.random() * zones.length);
        if (next === lastPositions[index]) next = (next + 1) % zones.length;
        lastPositions[index] = next;
        square.style.left = `${zones[next].x}%`;
        square.style.top = `${zones[next].y}%`;
      });
    };

    const heroObserver = hero ? new IntersectionObserver(([entry]) => {
      heroInView = entry.isIntersecting;
    }) : null;
    if (hero) heroObserver?.observe(hero);

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        target.dataset.sfVisible = "true";
        if (target.dataset.sfReveal === "heading") dissolveHeading(target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -9% 0px", threshold: 0.05 });

    revealTargets.forEach((target) => revealObserver.observe(target));
    if (!reducedMotion.matches) root.dataset.sfMotionReady = "true";

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateHeader();
    // Hash navigation can settle after hydration and the first layout pass.
    frame = requestAnimationFrame(updateHeader);
    const interval = hero ? window.setInterval(rearrangeSquares, 2000) : null;

    return () => {
      disposed = true;
      if (interval !== null) window.clearInterval(interval);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      heroObserver?.disconnect();
      revealObserver.disconnect();
      delete root.dataset.sfMotionReady;
    };
  }, []);

  return null;
}
