"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
  { href: "/",         label: "Home"  },
  { href: "/projects", label: "Work"  },
  { href: "/about",    label: "About" },
];

const socialLinks = [
  { href: "https://instagram.com/spatialfoundry", label: "Instagram", Icon: InstagramIcon },
  { href: "https://linkedin.com",                 label: "LinkedIn",  Icon: LinkedinIcon  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                 = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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
      {/* Full-width nav */}
      <header
        className="fixed left-0 right-0 top-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor:      scrolled ? "rgb(var(--bg) / 0.85)" : "transparent",
          backdropFilter:       scrolled ? "blur(14px) saturate(140%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        }}
      >
        <nav className="flex items-center justify-between gap-4 px-6 py-5 md:px-10">
          {/* Left: logo */}
          <Link href="/" aria-label="Spatial Foundry — Home" className="shrink-0">
            <Image
              src="/logo/logo/logo-white.png"
              alt="Spatial Foundry"
              width={130}
              height={26}
              className="h-[22px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Right: nav links + contact + menu */}
          <div className="flex items-center gap-1">
            <div className="mr-2 hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      "relative px-3 py-1.5 font-body text-[13px] font-medium",
                      "transition-colors duration-200",
                      isActive ? "text-accent" : "text-fg/70 hover:text-fg",
                    ].join(" ")}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-accent"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="hidden px-3 py-1.5 font-body text-[13px] font-medium text-fg/70 transition-colors hover:text-fg sm:inline-flex"
            >
              Contact
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="ml-2 flex flex-col gap-[5px] p-2 transition-opacity hover:opacity-70"
            >
              <span className="block h-[1.5px] w-5 bg-fg" />
              <span className="block h-[1.5px] w-5 bg-fg" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-bg px-6 pb-12 pt-24 md:px-10 lg:px-16"
          >
            {/* Nav links */}
            <nav className="flex flex-1 flex-col justify-center">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-5 border-b border-fg/8 py-7 last:border-b-0"
                    >
                      <span className="font-body text-xs font-medium uppercase tracking-widest text-fg/40" style={{ minWidth: "2rem" }}>
                        0{i + 1}
                      </span>
                      <span className="relative inline-block">
                        <span
                          className={[
                            "font-display font-bold leading-none transition-colors duration-300",
                            isActive ? "text-accent" : "text-fg",
                          ].join(" ")}
                          style={{
                            fontSize:      "clamp(2.5rem, 8vw, 6rem)",
                            letterSpacing: "-0.03em",
                          }}
                        >
                          {link.label}
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                        />
                      </span>
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="mb-4 ml-1 inline-block h-2 w-2 rounded-full bg-accent"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Social + location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-6 border-t border-fg/10 pt-8"
            >
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-widest text-fg/55 transition-colors hover:text-fg"
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
              <span className="ml-auto font-body text-[11px] font-medium uppercase tracking-widest text-fg/40">
                Lagos, Nigeria
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
