/**
 * 仕組みの図。手順を左から右へ（スマホでは上から下へ）並べ、矢印でつなぐ。
 * 画像ではなく HTML で組むので、どの画面幅でも文字がくっきり出る。
 * 色はサイトの約束どおり：線と文字は墨色、強調したい手順だけ深緑、金は使わない。
 */
export type FlowStep = {
  /** 手順の名前（短く） */
  title: string;
  /** 1〜2行の説明 */
  body: string;
  /** その製品ならではの手順。深緑で強調する */
  key?: boolean;
  /** 手順の中に並べる小さな札（例: 構成A・B・C） */
  chips?: string[];
};

function Arrow() {
  return (
    <span className="flex items-center justify-center py-0.5 text-ink-3 md:w-6 md:py-0" aria-hidden="true">
      <svg viewBox="0 0 16 16" className="h-4 w-4 rotate-90 md:rotate-0">
        <path
          d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function FlowDiagram({ steps, caption, label }: { steps: FlowStep[]; caption?: string; label: string }) {
  return (
    <figure className="mt-6" aria-label={label}>
      <ol className="flex flex-col md:flex-row md:items-stretch">
        {steps.map((s, i) => (
          <li key={s.title} className="flex flex-col md:flex-1 md:flex-row md:items-stretch">
            <div className={`flex-1 rounded-[6px] border p-4 ${s.key ? "border-green bg-green-soft" : "border-line bg-paper"}`}>
              <p className="flex items-center gap-2 text-[0.75rem] text-ink-3">
                <span
                  className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[0.7rem] font-bold ${
                    s.key ? "bg-green text-white" : "bg-surface text-ink-2"
                  }`}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                {s.key && <span className="font-semibold text-green">この製品の要</span>}
              </p>
              <p className="mt-2 text-[0.95rem] font-bold leading-snug text-ink">{s.title}</p>
              <p className="mt-1.5 text-[0.8rem] leading-relaxed text-ink-2">{s.body}</p>
              {s.chips && (
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {s.chips.map((c) => (
                    <li key={c} className="rounded-[3px] border border-line bg-paper px-1.5 py-0.5 text-[0.7rem] text-ink-2">
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {i < steps.length - 1 && <Arrow />}
          </li>
        ))}
      </ol>
      {caption && <figcaption className="mt-3 text-[0.8rem] text-ink-3">{caption}</figcaption>}
    </figure>
  );
}
