import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  /** 以前は番号と英字ラベルを出していた。販売ページの型に見えるため表示しないが、呼び出し側の互換のため受け取る */
  index?: string;
  label?: string;
  title: string;
  description?: ReactNode;
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <h2
        className={`heading-ja text-h2 ${dark ? "text-white" : "text-ink"}`}
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
