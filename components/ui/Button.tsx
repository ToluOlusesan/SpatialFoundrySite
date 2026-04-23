"use client";

import Link from "next/link";

interface ButtonProps {
  children:   React.ReactNode;
  href?:      string;
  onClick?:   () => void;
  variant?:   "outline" | "solid";
  size?:      "sm" | "md";
  className?: string;
  type?:      "button" | "submit";
}

export function Button({
  children,
  href,
  onClick,
  variant = "outline",
  size    = "md",
  className = "",
  type    = "button",
}: ButtonProps) {
  const base =
    size === "sm"
      ? "inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-body text-xs font-medium uppercase tracking-widest transition-all duration-300"
      : "inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-body text-xs font-medium uppercase tracking-widest transition-all duration-300";

  // Outline → inverts to solid fg on hover.
  // Solid → starts as solid fg, slides to outline on hover (both feel tactile).
  const styles =
    variant === "outline"
      ? "border border-fg/20 text-fg hover:bg-fg hover:text-bg hover:border-fg"
      : "bg-fg text-bg border border-fg hover:bg-transparent hover:text-fg";

  const combined = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
