import { Children, isValidElement, type CSSProperties, type ReactNode } from "react";

/**
 * Splits a heading into per-character spans for the glyph dissolve reveal.
 * Each character gets its position in the sequence (`--i`); PageMotion spreads
 * those positions across a fixed wave. Spaces take one beat too, so words read
 * as small pauses rather than one unbroken stream.
 */
export default function HeadingReveal({ children }: { children: ReactNode }) {
  let beat = 0;

  const typed = Children.toArray(children).flatMap((child, partIndex) => {
    if (isValidElement(child) && child.type === "br") {
      beat += 2; // a line break reads as a slightly longer pause
      return [<br key={`break-${partIndex}`} />];
    }
    if (typeof child !== "string" && typeof child !== "number") return [];

    return String(child).split(/(\s+)/).map((part, wordIndex) => {
      if (/^\s+$/.test(part)) {
        beat += 1;
        return part;
      }

      return (
        <span className="sf-type-word" key={`${partIndex}-${wordIndex}`}>
          {Array.from(part).map((character, letterIndex) => (
            <span className="sf-type-char" key={letterIndex} style={{ "--i": beat++ } as CSSProperties}>
              <span className="sf-type-glyph">{character}</span>
            </span>
          ))}
        </span>
      );
    });
  });

  return (
    <>
      <span className="sr-only">{children}</span>
      <span className="sf-type-text" aria-hidden="true">
        {typed}
      </span>
    </>
  );
}
