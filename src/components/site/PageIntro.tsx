import type { ReactNode } from "react";

/** 下層ページの見出し。白地・ゴシック・罫線で区切る */
export function PageIntro({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return (
    <div className="border-b border-line">
      <div className="mx-auto max-w-[1080px] px-5 py-10 md:px-8 md:py-14">
        <p className="label-gold">{label}</p>
        <h1 className="heading-ja mt-2 text-[clamp(1.6rem,1.3rem+1vw,2rem)] leading-[1.4] text-ink">{title}</h1>
        {children && <div className="lead-ja mt-4 text-[0.95rem] text-ink-2">{children}</div>}
      </div>
    </div>
  );
}
