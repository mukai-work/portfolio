import type { ReactNode } from "react";

/** 下層ページの見出し。資料PDFの章ラベル（金の英字）＋明朝見出しと同じ組み方 */
export function PageIntro({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return (
    <div className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1120px] px-5 py-14 md:px-10 md:py-20">
        <p className="label-gold">{label}</p>
        <h1 className="heading-ja mt-3 text-h2 text-green">{title}</h1>
        {children && <div className="lead-ja mt-5 text-ink-2">{children}</div>}
      </div>
    </div>
  );
}
