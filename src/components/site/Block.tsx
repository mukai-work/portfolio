import type { ReactNode } from "react";

/**
 * トップページのセクション枠。白地に罫線で区切る。
 * 背景色の交互・番号・英字ラベルは「販売ページの型」に見えるので使わない
 */
export function Block({
  id,
  title,
  lead,
  children,
}: {
  id?: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-[1080px] px-5 py-12 md:px-8 md:py-[72px]">
        <h2 className="heading-ja text-h2 text-ink">{title}</h2>
        {lead && <p className="lead-ja mt-3 text-[0.95rem] text-ink-2">{lead}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
