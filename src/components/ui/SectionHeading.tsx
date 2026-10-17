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
      <p className={`label-gold ${dark ? "!text-accent-soft" : ""}`}>
        <span className="mr-2 font-serif text-[0.95rem] tracking-normal">{index}</span>
        {label.toUpperCase()}
      </p>
      <h2
        className={`heading-ja mt-3 text-h2 ${dark ? "text-white" : "text-green"}`}
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
