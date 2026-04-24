"use client";

interface MarqueeProps {
  items: string[];
}

// Full-bleed scrolling band. Items are duplicated once and translated by -50%
// to create a seamless infinite loop. Pauses on hover so users can actually read.
export function Marquee({ items }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="group relative overflow-hidden border-y border-fg/10 py-8 md:py-10 lg:py-12">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 px-8 md:gap-14 md:px-12"
          >
            <span
              className="font-display font-bold text-fg"
              style={{
                fontSize:      "clamp(2.25rem, 5vw, 4.5rem)",
                letterSpacing: "-0.025em",
                lineHeight:    1,
              }}
            >
              {item}
            </span>
            <span
              className="font-display text-fg/25"
              style={{
                fontSize:      "clamp(1.5rem, 3vw, 2.5rem)",
                lineHeight:    1,
              }}
              aria-hidden="true"
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
