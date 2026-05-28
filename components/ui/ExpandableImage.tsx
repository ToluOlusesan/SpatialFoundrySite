"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ExpandableImageProps {
  src:          string;
  alt:          string;
  aspectRatio?: string;                // "16/9", "4/3", "1/1", etc.
  objectFit?:   "cover" | "contain";   // gallery → cover; icons → contain
  padded?:      boolean;               // adds inner padding for icon-style art
  sizes?:       string;
  quality?:     number;
  className?:   string;                // extra classes on the outer trigger
}

/**
 * Click-to-expand image. Renders the inline preview and, when open,
 * a full-viewport lightbox with the image scaled to fit and a close
 * affordance. Escape, backdrop click, and the X button all close it.
 */
export function ExpandableImage({
  src,
  alt,
  aspectRatio,
  objectFit = "cover",
  padded    = false,
  sizes     = "(max-width: 768px) 100vw, 33vw",
  quality   = 90,
  className = "",
}: ExpandableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const fit = objectFit === "contain" ? "object-contain" : "object-cover";
  const pad = padded ? "p-6 md:p-10" : "";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Expand ${alt}`}
        className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-fg/[0.06] bg-surface focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          className={`${fit} object-center ${pad} transition-transform duration-500 group-hover:scale-[1.03]`}
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-bg/95 p-6 backdrop-blur-md md:p-12"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpen(false); }}
            aria-label="Close"
            className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line text-fg/85 transition-colors hover:border-fg/40 hover:text-fg md:right-10 md:top-10"
          >
            <X size={18} />
          </button>

          <div
            className="relative h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              quality={95}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
