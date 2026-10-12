import type { ReactNode } from "react";

export default function HeadingReveal({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="sf-heading-reveal-text">{children}</span>
      <span className="sf-heading-tiles" aria-hidden="true">
        <i /><i /><i /><i />
      </span>
    </>
  );
}
