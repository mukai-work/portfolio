import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  description?: ReactNode;
  dark?: boolean;
};

export function SectionHeading({
  index,
  label,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <Reveal className="text-center mb-16">
      <p
        className={`font-mono text-xs tracking-[0.25em] uppercase mb-4 ${
          dark ? "text-accent-soft" : "text-accent"
        }`}
      >
        {index} <span className="opacity-40">/</span> {label}
      </p>
      <h2
        className={`text-3xl md:text-4xl font-bold ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span
        className={`grow-line block mx-auto mt-5 h-px w-16 ${
          dark ? "bg-accent-soft" : "bg-accent"
        }`}
        aria-hidden
      />
      {description && (
        <p
          className={`mt-5 max-w-2xl mx-auto leading-relaxed ${
            dark ? "text-white/60" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
