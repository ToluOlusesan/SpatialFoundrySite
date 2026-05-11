"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const words    = ["Your", "brand", "has", "form,", "we", "define", "it."];
const services = ["3D Brand Identity", "Icon Systems", "Motion & Film", "Web Illustrations"];

const BAR_COUNT = 64;

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: 0.38, y: 0.72 }); // default: bell left-of-center, mid intensity
  const rafRef    = useRef<number>(0);
  const t0Ref     = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* ── resize: match canvas pixel size to CSS size × DPR ── */
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    /* ── draw loop ── */
    const draw = (now: number) => {
      if (!t0Ref.current) t0Ref.current = now;
      const t   = (now - t0Ref.current) / 1000;          // seconds
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W   = canvas.offsetWidth;
      const H   = canvas.offsetHeight;
      const { x: mx, y: my } = mouseRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const slotW  = W / BAR_COUNT;
      const gap    = Math.max(1.5, slotW * 0.30); // narrow gap — keeps bars prominent
      const barW   = slotW - gap;

      // Bell curve: mouse x controls where the hot column sits
      const bellCenter = 0.10 + mx * 0.72; // mouse maps to 0.10 → 0.82
      const bellSigma2 = 0.058;             // controls width of hot zone
      // Mouse y: bottom of hero = low intensity (my≈0), top = high (my≈1)
      const intensity  = 0.70 + my * 0.30;

      for (let i = 0; i < BAR_COUNT; i++) {
        const frac = i / (BAR_COUNT - 1);
        const x    = i * slotW + gap * 0.5;

        /* ── bell curve: proximity to hot center ── */
        const d    = frac - bellCenter;
        const bell = Math.exp(-(d * d) / bellSigma2) * intensity;

        /* ── three overlapping waves for organic motion ──
           Different frequencies + speeds so they never repeat obviously */
        const wave =
          Math.sin(frac * Math.PI * 5.5  - t * 0.52)  * 0.088 +
          Math.cos(frac * Math.PI * 3.1  + t * 0.39)  * 0.055 +
          Math.sin(frac * Math.PI * 9.2  - t * 1.05)  * 0.024;

        const hFrac = Math.max(0.025, Math.min(0.96,
          bell * 0.80 + wave + 0.09
        ));
        const barH = H * hFrac;
        const y    = H - barH; // bars grow upward from bottom

        /* ── lava HSL palette ──
           b = overall brightness factor for this bar
           hue  : 12° (deep red) → 45° (hot gold)
           light: 14% (dark ember) → 82% (near-white molten peak) */
        const b      = Math.min(1, Math.max(0, bell + wave * 0.25));
        const hue    = 12  + b * 33;
        const sat    = 78  + b * 14;
        const light  = 14  + b * 68;
        const alpha  = Math.max(0.06, b * 0.94 + 0.06);

        /* ── main bar gradient: bright tip → transparent base ── */
        const g = ctx.createLinearGradient(x, y, x, H);
        g.addColorStop(0,    `hsla(${hue},    ${sat}%,       ${light}%,            ${alpha})`);
        g.addColorStop(0.35, `hsla(${hue - 5},${sat - 8}%,  ${light * 0.48}%,     ${alpha * 0.38})`);
        g.addColorStop(0.72, `hsla(${hue - 8},${sat - 15}%, ${light * 0.22}%,     ${alpha * 0.12})`);
        g.addColorStop(1,    `hsla(0, 0%, 0%, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(x, y, barW, barH);

        /* ── tip bloom: wide soft glow at the peak of hot bars ── */
        if (b > 0.48) {
          const glowA    = (b - 0.48) * 0.45;
          const bloomW   = barW * 4.5;
          const bloomH   = barH * 0.22;
          const gGlow    = ctx.createLinearGradient(x, y, x, y + bloomH);
          gGlow.addColorStop(0, `hsla(${hue + 6}, ${sat}%, ${Math.min(92, light + 14)}%, ${glowA})`);
          gGlow.addColorStop(1, `hsla(0, 0%, 0%, 0)`);
          ctx.fillStyle = gGlow;
          ctx.fillRect(x - bloomW / 2 + barW / 2, y, bloomW, bloomH);
        }
      }

      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      // Invert Y: moving mouse toward top = higher intensity
      y: 1 - (e.clientY - rect.top) / rect.height,
    };
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative mx-3 overflow-hidden rounded-2xl md:mx-5"
      style={{ marginTop: "76px", height: "calc(100svh - 88px)", minHeight: "520px" }}
    >
      {/* ── BASE — deep warm charcoal ── */}
      <div className="absolute inset-0 bg-[#0d0603]" />

      {/* ── ATMOSPHERE — soft background glow tints the bars via screen blend ── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="lava-blob lava-drift-1" style={{
          width: "80%", height: "65%", left: "-8%", top: "20%",
          background: "radial-gradient(circle at 42% 50%, rgba(175,68,18,0.6) 0%, rgba(115,28,5,0.35) 50%, transparent 78%)",
          filter: "blur(85px)",
        }} />
        <div className="lava-blob lava-drift-2" style={{
          width: "55%", height: "58%", right: "2%", top: "-8%",
          background: "radial-gradient(circle at 55% 45%, rgba(188,118,14,0.5) 0%, rgba(140,48,7,0.28) 48%, transparent 78%)",
          filter: "blur(92px)",
        }} />
        <div className="lava-blob lava-drift-3" style={{
          width: "60%", height: "50%", bottom: "-4%", left: "22%",
          background: "radial-gradient(circle at 50% 60%, rgba(90,14,3,0.65) 0%, rgba(48,7,2,0.35) 55%, transparent 80%)",
          filter: "blur(90px)",
        }} />
      </div>

      {/* ── CANVAS BARS — mix-blend-mode screen adds bar light over atmosphere ── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0"
        style={{ width: "100%", height: "100%", mixBlendMode: "screen" }}
      />

      {/* ── VIGNETTE — darkens corners, frames the card ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 135% 110% at 50% 50%, transparent 28%, rgba(3,1,1,0.7) 100%)",
        }}
      />

      {/* ── BOTTOM FADE — smooth transition into page ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(3,1,1,0.45))",
        }}
      />

      {/* ── FILM GRAIN ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10 lg:p-12 xl:p-14">

        {/* Top row */}
        <div className="flex items-start justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-white/40"
          >
            3D Branding Studio · Lagos
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.06] px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.1]"
            >
              <span className="font-body text-[11px] font-medium uppercase tracking-widest text-white/55 transition-colors group-hover:text-white/85">
                Start a Project
              </span>
              <ArrowUpRight size={11} className="text-white/38 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Headline */}
        <div>
          <h1
            className="font-display font-bold text-white"
            style={{
              fontSize:      "clamp(2.75rem, 6.5vw, 6rem)",
              letterSpacing: "-0.03em",
              lineHeight:    1.0,
              maxWidth:      "13ch",
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay:    0.3 + i * 0.08,
                  duration: 0.8,
                  ease:     [0.16, 1, 0.3, 1],
                }}
                className="mr-[0.2em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Bottom row: services + CTA */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.9 }}
            className="flex flex-wrap gap-x-8 gap-y-2 md:gap-x-12"
          >
            {services.map((s) => (
              <span key={s} className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-white/35">
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-body text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white transition-all duration-[350ms] hover:border-white hover:bg-white hover:text-black"
            >
              View Our Work
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
