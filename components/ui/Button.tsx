"use client";

import Link from "next/link";

interface ButtonProps {
  children:   React.ReactNode;
  href?:      string;
  onClick?:   () => void;
  className?: string;
  type?:      "button" | "submit";
  white?:     boolean;  /* for dark-background contexts (hero) */
}

export function Button({
  children,
  href,
  onClick,
  className = "",
  type      = "button",
  white     = false,
}: ButtonProps) {
  const base = white
    ? "inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-body text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white transition-all duration-[350ms] hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-white"
    : "inline-flex items-center gap-2 rounded-full border border-fg/15 px-7 py-3.5 font-body text-[0.875rem] font-medium uppercase tracking-[0.12em] text-fg transition-all duration-[350ms] hover:border-fg/25 hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent";

  const combined = `${base} ${className}`;

  if (href) {
    return <Link href={href} className={combined}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
