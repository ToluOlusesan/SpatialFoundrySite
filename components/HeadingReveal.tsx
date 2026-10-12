import { Children, isValidElement, type ReactNode } from "react";

export default function HeadingReveal({ children }: { children: ReactNode }) {
  const typed = Children.toArray(children).flatMap((child, partIndex) => {
    if (isValidElement(child) && child.type === "br") {
      return [<br key={`break-${partIndex}`} />];
    }
    if (typeof child !== "string" && typeof child !== "number") return [];

    return String(child).split(/(\s+)/).map((part, wordIndex) => {
      if (/^\s+$/.test(part)) return part;

      return (
        <span className="sf-type-word" key={`${partIndex}-${wordIndex}`}>
          {Array.from(part).map((character, letterIndex) => {
            return <span className="sf-type-char" key={letterIndex}><span className="sf-type-glyph">{character}</span></span>;
          })}
        </span>
      );
    });
  });

  return (
    <>
      <span className="sr-only">{children}</span>
      <span className="sf-type-text" aria-hidden="true">{typed}</span>
    </>
  );
}
