import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  description?: ReactNode;
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  description,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <p className={`label-mono ${dark ? "text-white/55" : "text-ink-3"}`}>
        <span className={dark ? "text-accent-soft" : "text-accent-ink"}>{index}</span>
        <span className="mx-2 opacity-50">/</span>
        {label}
      </p>
      <h2
        className={`heading-ja mt-4 text-h2 ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`lead-ja mt-5 text-[0.95rem] ${
            dark ? "text-white/65" : "text-ink-2"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
