"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

// Inline SVG brand icons (lucide-react does not ship these)
function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about",    label: "About" },
];

const socialLinks = [
  { href: "https://instagram.com/spatialfoundry", label: "Instagram", Icon: InstagramIcon },
  { href: "https://linkedin.com",                 label: "LinkedIn",  Icon: LinkedinIcon },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Floating pill navbar */}
      <div className="fixed left-1/2 top-5 z-50 w-[calc(100%-48px)] max-w-[1100px] -translate-x-1/2">
        <nav
          className="relative flex items-center justify-between gap-4 rounded-full border border-fg/10 px-4 py-2.5 md:px-5"
          style={{
            backdropFilter:       "blur(16px) saturate(140%)",
            WebkitBackdropFilter: "blur(16px) saturate(140%)",
            backgroundColor:      scrolled
              ? "rgb(var(--bg) / 0.88)"
              : "rgb(var(--bg) / 0.55)",
            transition: "background-color 0.3s ease, border-color 0.3s ease",
          }}
        >
          {/* Left: Logo. Asset is white PNG — invert it in light mode so it reads on bone bg. */}
          <Link href="/" aria-label="Spatial Foundry — Home" className="shrink-0">
            <Image
              src="/logo/logo/logo-white.png"
              alt="Spatial Foundry"
              width={140}
              height={28}
              className="h-6 w-auto object-contain invert dark:invert-0"
              priority
            />
          </Link>

          {/* Center: nav links — absolutely centered so logo width ≠ buttons width doesn't skew it */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 font-body text-xs font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? "text-fg" : "text-fg hover:text-fg"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-fg"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right: theme toggle + menu */}
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />

            <Link
              href="/contact"
              className="hidden rounded-full border border-fg/15 px-4 py-1.5 font-body text-xs font-medium tracking-wide text-fg transition-all duration-300 hover:border-fg hover:bg-fg hover:text-bg sm:inline-flex"
            >
              Contact
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="flex items-center gap-2 rounded-full border border-fg/15 px-4 py-1.5 font-body text-xs font-medium tracking-wide text-fg transition-all duration-200 hover:border-fg/35"
            >
              Menu
              <span
                className="font-body text-fg transition-transform duration-300"
                style={{ display: "inline-block", transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                aria-hidden="true"
              >
                +
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-bg px-6 pb-12 pt-28 md:px-12 lg:px-16"
          >
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="absolute right-6 top-5 rounded-full border border-fg/12 px-4 py-1.5 font-body text-xs font-medium text-fg transition hover:text-fg md:right-12"
            >
              Close ×
            </button>

            {/* Nav links */}
            <nav className="flex flex-1 flex-col justify-center">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-5 border-b border-fg/8 py-7 last:border-b-0"
                    >
                      <span
                        className="font-body text-xs font-medium tracking-widest text-fg"
                        style={{ minWidth: "2rem" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`font-display font-bold leading-none transition-opacity duration-200 ${
                          isActive ? "text-fg" : "text-fg group-hover:text-fg"
                        }`}
                        style={{
                          fontSize:      "clamp(2.5rem, 8vw, 6rem)",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {link.label}
                      </span>
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="mb-4 ml-2 inline-block h-1.5 w-1.5 rounded-full bg-fg"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-6 border-t border-fg/10 pt-8"
            >
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-xs font-medium uppercase tracking-widest text-fg transition hover:text-fg"
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
              <span className="ml-auto font-body text-xs font-medium uppercase tracking-widest text-fg">
                Lagos, Nigeria
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
