import type { ReactNode } from "react";
import type { SectionIntro } from "@/content/types";

interface Props {
  intro: SectionIntro;
  headingId: string;
  /** "life" switches to the Off the clock look: condensed display type, warm palette. */
  tone?: "default" | "life";
  /** Index of the title line to colour with the accent (life tone only). */
  accentLine?: number;
  children?: ReactNode;
}

export function SectionHeading({ intro, headingId, tone = "default", accentLine, children }: Props) {
  const isLife = tone === "life";
  return (
    <div className="reveal mb-16 flex flex-wrap gap-x-12 gap-y-5 md:mb-[72px]">
      <p
        className={`mt-2 flex flex-[0_0_300px] flex-col gap-3.5 font-mono text-sm uppercase tracking-[0.04em] ${
          isLife ? "text-life-muted" : "text-muted"
        }`}
      >
        {intro.number} / {intro.label}
        <span aria-hidden="true" className={`normal-case tracking-normal ${isLife ? "text-life-accent-ink" : ""}`}>
          {intro.hash}
        </span>
      </p>
      <div className="min-w-0 flex-[999_1_560px]">
        <h2
          id={headingId}
          className={
            isLife
              ? "font-display text-[clamp(64px,10vw,150px)] font-normal uppercase leading-[0.9] tracking-[-0.01em]"
              : "text-[clamp(40px,5.6vw,80px)] font-bold leading-none tracking-[-0.045em]"
          }
        >
          {intro.title.map((line, i) => (
            <span key={line} className={`block ${isLife && i === accentLine ? "text-life-accent-ink" : ""}`}>
              {line}
            </span>
          ))}
        </h2>
        <p className={`mt-6 max-w-[720px] text-xl leading-[1.55] ${isLife ? "text-life-soft" : "text-soft"}`}>
          {intro.subtitle}
          {children}
        </p>
      </div>
    </div>
  );
}
