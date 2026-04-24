import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme tokens — flip via .dark on <html>. All accept alpha: text-fg/55, border-line/30.
        bg:      "rgb(var(--bg) / <alpha-value>)",
        fg:      "rgb(var(--fg) / <alpha-value>)",
        muted:   "rgb(var(--muted) / <alpha-value>)",
        line:    "rgb(var(--line) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
      },
      fontFamily: {
        // Outfit — headings, display text (weights 500–800)
        display: ["var(--font-outfit)", "sans-serif"],
        // Work Sans — body, labels, eyebrows, captions (weights 400–500)
        body:    ["var(--font-work-sans)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight:   "-0.02em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-dot": "scrollDot 1.8s ease-in-out infinite",
        "marquee":    "marquee 38s linear infinite",
      },
      keyframes: {
        scrollDot: {
          "0%, 100%": { transform: "translateY(0)",    opacity: "1" },
          "50%":      { transform: "translateY(16px)", opacity: "0.2" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)"   },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
