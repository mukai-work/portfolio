import type { ReactNode } from "react";

type Tone = "paper" | "surface" | "green";

const tones: Record<Tone, string> = {
  paper: "bg-paper",
  surface: "bg-surface",
  green: "bg-green-deep text-paper",
};

/** トップページのセクション枠。章番号・英字ラベル・明朝見出しをPDFと同じ型で出す */
export function Block({
  id,
  no,
  label,
  title,
  lead,
  tone = "paper",
  children,
}: {
  id?: string;
  no?: string;
  label: string;
  title: string;
  lead?: ReactNode;
  tone?: Tone;
  children: ReactNode;
}) {
  const dark = tone === "green";
  return (
    <section id={id} className={`border-t border-line ${tones[tone]}`}>
      <div className="mx-auto max-w-[1120px] px-5 py-[clamp(4rem,3rem+5vw,7rem)] md:px-10">
        <p className={`label-gold ${dark ? "!text-accent-soft" : ""}`}>
          {no && <span className="mr-2 font-serif text-[0.95rem] tracking-normal">{no}</span>}
          {label}
        </p>
        <h2 className={`heading-ja mt-3 text-h2 ${dark ? "text-paper" : "text-green"}`}>{title}</h2>
        {lead && <p className={`lead-ja mt-4 ${dark ? "text-paper/85" : "text-ink-2"}`}>{lead}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
