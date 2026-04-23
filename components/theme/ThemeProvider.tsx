"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme:  Theme;
  toggle: () => void;
  set:    (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // SSR default: "dark". The inline no-flash script in <head> has already
  // applied the correct class to <html> before React hydrates, so the initial
  // render matches the DOM. We sync state from the DOM on mount.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const set = useCallback((t: Theme) => {
    setTheme(t);
    const root = document.documentElement;
    if (t === "dark") root.classList.add("dark");
    else              root.classList.remove("dark");
    try { localStorage.setItem("theme", t); } catch {}
  }, []);

  const toggle = useCallback(() => {
    set(theme === "dark" ? "light" : "dark");
  }, [theme, set]);

  const value = useMemo(() => ({ theme, toggle, set }), [theme, toggle, set]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
