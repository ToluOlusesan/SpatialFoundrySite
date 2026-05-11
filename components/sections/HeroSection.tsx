"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = ["3D Brand Identity", "Icon Systems", "Motion & Film", "Web Illustrations"];

const BAR_COUNT = 30;

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: 0.38, y: 0.72 });
  const rafRef    = useRef<number>(0);
  const t0Ref     = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = (now: number) => {
      if (!t0Ref.current) t0Ref.current = now;
      const t   = (now - t0Ref.current) / 1000;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W   = canvas.offsetWidth;
      const H   = canvas.offsetHeight;
      const { x: mx, y: my } = mouseRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const slotW = W / BAR_COUNT;
      const gap   = Math.max(2, slotW * 0.14); // small gap → thick bars
      const barW  = slotW - gap;

      const bellCenter = 0.10 + mx * 0.72;
      const bellSigma2 = 0.062;
      const intensity  = 0.68 + my * 0.32;

      for (let i = 0; i < BAR_COUNT; i++) {
        const frac = i / (BAR_COUNT - 1);
        const x    = i * slotW + gap * 0.5;

        const d    = frac - bellCenter;
        const bell = Math.exp(-(d * d) / bellSigma2) * intensity;

        // Golden-ratio seed per bar — each bar gets a unique phase offset
        // so motion feels independent, not like a synchronized wave
        const seed = i * 1.6180339887;

        // Many incommensurable frequencies: their sum looks stochastic
        const wave =
          Math.sin(t * 0.29 + seed)           * 0.048 +
          Math.sin(t * 0.71 + seed * 1.4)     * 0.036 +
          Math.cos(t * 0.47 + seed * 2.1)     * 0.041 +
          Math.sin(t * 1.13 + seed * 0.7)     * 0.022 +
          Math.cos(t * 0.37 + seed * 3.0)     * 0.018 +
          Math.sin(t * 0.83 + seed * 1.8)     * 0.026 +
          Math.cos(t * 1.57 + seed * 0.5)     * 0.014;

        const hFrac = Math.max(0.03, Math.min(0.95,
          bell * 0.82 + wave + 0.07
        ));
        const barH = H * hFrac;
        const y    = H - barH;

        const b      = Math.min(1, Math.max(0, bell + wave * 0.22));
        const hue    = 12  + b * 33;
        const sat    = 78  + b * 14;
        const light  = 14  + b * 68;
        const alpha  = Math.max(0.06, b * 0.94 + 0.06);

        const g = ctx.createLinearGradient(x, y, x, H);
        g.addColorStop(0,    `hsla(${hue},    ${sat}%,       ${light}%,            ${alpha})`);
        g.addColorStop(0.35, `hsla(${hue - 5},${sat - 8}%,  ${light * 0.48}%,     ${alpha * 0.38})`);
        g.addColorStop(0.72, `hsla(${hue - 8},${sat - 15}%, ${light * 0.22}%,     ${alpha * 0.12})`);
        g.addColorStop(1,    `hsla(0, 0%, 0%, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(x, y, barW, barH);

        if (b > 0.46) {
          const glowA  = (b - 0.46) * 0.48;
          const bloomW = barW * 4.2;
          const bloomH = barH * 0.20;
          const gGlow  = ctx.createLinearGradient(x, y, x, y + bloomH);
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
      y: 1 - (e.clientY - rect.top) / rect.height,
    };
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative mx-3 flex flex-col overflow-hidden rounded-2xl md:mx-5"
      style={{ marginTop: "76px", height: "calc(100svh - 88px)", minHeight: "560px", background: "#0d0603" }}
    >
      {/* Film grain — sits above all layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.04] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* ── TOP ROW ── */}
      <div className="relative z-10 flex shrink-0 items-start justify-between p-8 md:p-10 lg:p-12">
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
          transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.06] px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.1]"
          >
            <span className="font-body text-[11px] font-medium uppercase tracking-widest text-white/55 transition-colors group-hover:text-white/85">
              Start a Project
            </span>
            <ArrowUpRight size={11} className="text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* ── BAR CARD — contained, not full bleed ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 shrink-0 px-8 md:px-10 lg:px-12"
        style={{ height: "46%" }}
      >
        <div className="relative h-full overflow-hidden rounded-2xl">
          {/* Dark base */}
          <div className="absolute inset-0 bg-[#080300]" />

          {/* Atmosphere blobs */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="lava-blob lava-drift-1" style={{
              width: "80%", height: "70%", left: "-6%", top: "15%",
              background: "radial-gradient(circle at 42% 50%, rgba(175,68,18,0.62) 0%, rgba(115,28,5,0.34) 50%, transparent 78%)",
              filter: "blur(80px)",
            }} />
            <div className="lava-blob lava-drift-2" style={{
              width: "58%", height: "62%", right: "0%", top: "-10%",
              background: "radial-gradient(circle at 55% 45%, rgba(188,118,14,0.52) 0%, rgba(140,48,7,0.26) 48%, transparent 78%)",
              filter: "blur(88px)",
            }} />
            <div className="lava-blob lava-drift-3" style={{
              width: "62%", height: "52%", bottom: "-6%", left: "20%",
              background: "radial-gradient(circle at 50% 60%, rgba(90,14,3,0.68) 0%, rgba(48,7,2,0.34) 55%, transparent 80%)",
              filter: "blur(86px)",
            }} />
          </div>

          {/* Canvas bars */}
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0"
            style={{ width: "100%", height: "100%", mixBlendMode: "screen" }}
          />

          {/* Corner vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 130% 110% at 50% 50%, transparent 30%, rgba(2,1,0,0.65) 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* ── LOWER CONTENT: Studio name + bottom row ── */}
      <div className="relative z-10 flex flex-1 flex-col justify-between px-8 py-6 md:px-10 lg:px-12">

        {/* Studio name */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-white"
          style={{
            fontSize:      "clamp(2.4rem, 5.8vw, 5.5rem)",
            letterSpacing: "-0.03em",
            lineHeight:    1.0,
          }}
        >
          Spatial Foundry
        </motion.h1>

        {/* Bottom row: services + CTA */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.9 }}
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
            transition={{ delay: 1.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
