"use client";

import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

// Minimal sun / moon — custom SVG so line-weight matches the other nav icons.
function SunIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  );
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className={`group relative flex h-8 w-8 items-center justify-center rounded-full border border-fg/15 text-fg transition-all duration-300 hover:border-fg/40 hover:text-fg ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -40, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0,   scale: 1 }}
          exit={{    opacity: 0, rotate: 40,  scale: 0.7 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? <MoonIcon size={13} /> : <SunIcon size={13} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
