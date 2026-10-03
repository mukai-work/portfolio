import type { ReactNode } from "react";

type Tone = "paper" | "surface" | "dark";

const toneClass: Record<Tone, string> = {
  paper: "bg-paper",
  surface: "bg-surface",
  dark: "tone-dark bg-navy-deep text-white",
};

type SectionProps = {
  id?: string;
  tone?: Tone;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

/** 全幅の横罫線と、ページ縦罫線との交点「+」を持つセクション枠 */
export function Section({
  id,
  tone = "paper",
  className = "",
  innerClassName = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative border-t border-hair ${toneClass[tone]} ${className}`}
    >
      <div
        className={`relative mx-auto max-w-[1200px] px-6 md:px-12 py-[clamp(5rem,4rem+6vw,8.5rem)] ${innerClassName}`}
      >
        <span className="cross hidden md:block -left-[6px] -top-[6px]" aria-hidden />
        <span className="cross hidden md:block -right-[6px] -top-[6px]" aria-hidden />
        {children}
      </div>
    </section>
  );
}
