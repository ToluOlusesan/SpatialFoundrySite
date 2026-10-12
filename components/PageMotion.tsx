"use client";

import { useEffect } from "react";

const squareZones = [
  [{ x: 0, y: 49 }, { x: 0, y: 68 }, { x: 10, y: 78 }, { x: 2, y: 28 }],
  [{ x: 91, y: 18 }, { x: 83, y: 37 }, { x: 91, y: 58 }, { x: 77, y: 15 }],
  [{ x: 78, y: 38 }, { x: 89, y: 69 }, { x: 70, y: 74 }, { x: 86, y: 45 }],
  [{ x: 96, y: 82 }, { x: 9, y: 31 }, { x: 1, y: 84 }, { x: 85, y: 85 }],
];

export default function PageMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".sf-home, .sf-case");
    const hero = root?.querySelector<HTMLElement>(".sf-hero");
    const header = root?.querySelector<HTMLElement>(".sf-header");
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const squares = hero ? Array.from(hero.querySelectorAll<HTMLElement>(".sf-hero-square")) : [];
    const revealTargets = Array.from(root.querySelectorAll<HTMLElement>("[data-sf-reveal]"));
    let heroInView = false;
    const lastPositions = squareZones.map(() => -1);
    let frame = 0;

    const updateHeader = () => {
      if (!hero || !header) return;
      header.classList.toggle("is-scrolled", hero.getBoundingClientRect().bottom <= header.offsetHeight);
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
        (entry.target as HTMLElement).dataset.sfVisible = "true";
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
