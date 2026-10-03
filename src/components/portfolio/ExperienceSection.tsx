import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Experience = {
  period: string;
  /** ガント図用の開始・終了（YYYY-MM）。end 省略は現在進行中 */
  start: string;
  end?: string;
  short: string;
  kind: "main" | "side";
  title: string;
  role: string;
  badges: string[];
  highlights: string[];
  tech: string[];
};

const experiences: Experience[] = [
  {
    period: "2025.10 — 現在",
    start: "2025-10",
    short: "建設業向け業務システム",
    kind: "main",
    title: "建設業向け業務システム（情報共有系Web）の機能開発",
    role: "フルスタック担当 / チーム5名",
    badges: ["エンド企業直", "フルリモート", "現案件"],
    highlights: [
      "Azure Blob Storageへのストレージ移行を要件定義から担当。SASトークン認証・設定値のみで接続先を切替できる構成・障害時にローカルへ即時切り戻せる安全設計",
      "繁忙期に1社あたり100GB超のzipを扱うため、ストリーミング処理で体感速度を維持",
      "Oracle SQLチューニングで約3分の処理を約20秒に短縮",
      "IISへの配置・リリース対応からログ調査まで一貫対応",
    ],
    tech: ["C#", "ASP.NET MVC / Web API", "Vue.js 2/3", "Oracle", "Azure Blob Storage", "IIS"],
  },
  {
    period: "2024.4 — 2025.9",
    start: "2024-04",
    end: "2025-09",
    short: "医療系システム",
    kind: "main",
    title: "医療系システムの開発支援",
    role: "メンバー / チーム4名",
    badges: [],
    highlights: [
      "保守運用フェーズからの途中参画。ドキュメントに頼らずコードから製品仕様を解析し、基本設計〜シナリオテスト・導入まで対応",
    ],
    tech: ["C#", ".NET", "XAML", "SQL Server"],
  },
  {
    period: "2024.4 — 2025.9",
    start: "2024-04",
    end: "2025-09",
    short: "ヘッドレスEC刷新",
    kind: "side",
    title: "ヘッドレスECサイト フロントエンド刷新",
    role: "テックリード / チーム6名",
    badges: ["個人受託"],
    highlights: [
      "Nuxt3＋Piniaでの設計・実装、ジュニア4名のTypeScript指導",
      "検索APIの応答時間を短縮（ElastiCache活用・実測で改善を確認）",
    ],
    tech: ["TypeScript", "Nuxt3", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    period: "2024.4 — 2024.10",
    start: "2024-04",
    end: "2024-10",
    short: "JS → TS 移行",
    kind: "side",
    title: "SaaSダッシュボード刷新（レガシーJS → TypeScript移行）",
    role: "メンバー / チーム4名",
    badges: ["個人受託"],
    highlights: [
      "15万行超のレガシーJavaScriptを機能単位に分解しTypeScriptへ段階移行",
      "移行手順のドキュメント化とCI設計（クリティカルバグ発生率の低減を依頼元が評価）",
    ],
    tech: ["TypeScript", "GitHub", "CI設計"],
  },
  {
    period: "2023.10 — 2024.2",
    start: "2023-10",
    end: "2024-02",
    short: "官公庁 人事システム",
    kind: "main",
    title: "官公庁向け人事管理システム開発",
    role: "チームリーダー / 20名規模",
    badges: ["リーダー経験"],
    highlights: [
      "標準化チーム・モックアップ作成チームのリーダーとして進捗管理・コードレビュー・デザインレビューを担当",
      "官公庁品質の基本設計書・詳細設計書、UI/UX設計〜モックアップ作成",
    ],
    tech: ["C#", ".NET", "Razor", "Oracle", "Adobe XD"],
  },
  {
    period: "2022.1 — 2023.9",
    start: "2022-01",
    end: "2023-09",
    short: "EC構築（決済連携）",
    kind: "main",
    title: "自社パッケージによるECサイト構築（決済・外部連携）",
    role: "メンバー → 技術リーダー / チーム5〜15名",
    badges: ["技術リーダー"],
    highlights: [
      "マルチペイメント決済・ポイント・配送など外部サービス連携APIの要件定義〜開発を多数担当",
      "新卒8名の育成リーダーも兼任（技術指導・コードレビュー・DDD講義）",
    ],
    tech: ["C#", "ASP.NET", "SQL Server", "AzureDevOps"],
  },
];

const AXIS_START = { y: 2022, m: 1 };
const AXIS_MONTHS = 60; // 2022.01 〜 2026.12
const YEARS = [2022, 2023, 2024, 2025, 2026];

function monthIndex(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return (y - AXIS_START.y) * 12 + (m - AXIS_START.m);
}

function nowYm() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

/** 開始月の頭〜終了月の末尾までを、軸に対する割合で返す */
function span(start: string, end: string) {
  const s = monthIndex(start);
  const e = Math.min(monthIndex(end) + 1, AXIS_MONTHS);
  return { left: (s / AXIS_MONTHS) * 100, width: ((e - s) / AXIS_MONTHS) * 100 };
}

// 経歴はビルド時に静的生成されるため、「現在」はビルド時点の月になる
const NOW = nowYm();
const nowPct = (Math.min(monthIndex(NOW) + 1, AXIS_MONTHS) / AXIS_MONTHS) * 100;

function Gantt() {
  const chronological = [...experiences].reverse();
  return (
    <Reveal className="mt-14">
      <div className="rounded-[4px] border border-line bg-paper">
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 md:px-6 py-4 border-b border-line">
          <p className="label-mono text-ink-3">Timeline 2022 — {NOW.replace("-", ".")}</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-ink-2">
            <li className="flex items-center gap-2">
              <span className="w-4 h-2 rounded-[1px] bg-ink" aria-hidden />
              主参画
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-2 rounded-[1px] border border-ink gantt-stripe" aria-hidden />
              個人受託（並行）
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-2 rounded-[1px] bg-accent" aria-hidden />
              現案件
            </li>
          </ul>
        </div>

        <div className="px-5 md:px-6 py-5">
          {/* 年の目盛り */}
          <div className="grid md:grid-cols-[180px_1fr] gap-x-4">
            <span className="hidden md:block" />
            <div className="relative h-5">
              {YEARS.map((y) => (
                <span
                  key={y}
                  className="absolute top-0 font-mono text-[0.7rem] text-ink-3"
                  style={{ left: `${(monthIndex(`${y}-01`) / AXIS_MONTHS) * 100}%` }}
                >
                  {y}
                </span>
              ))}
            </div>
          </div>

          <ol className="mt-1 space-y-3 md:space-y-2">
            {chronological.map((exp) => {
              const idx = experiences.indexOf(exp);
              const current = !exp.end;
              const { left, width } = span(exp.start, exp.end ?? NOW);
              return (
                <li key={exp.title} className="grid md:grid-cols-[180px_1fr] gap-x-4 gap-y-1 items-center">
                  <a
                    href={`#exp-${idx}`}
                    className="text-[0.8125rem] text-ink-2 hover:text-accent-ink transition-colors truncate"
                  >
                    {exp.short}
                  </a>
                  <div className="relative h-6 [background:repeating-linear-gradient(90deg,var(--color-line)_0_1px,transparent_1px_20%)]">
                    <span
                      className={`gantt-bar absolute top-1 bottom-1 rounded-[2px] ${
                        current
                          ? "bg-accent"
                          : exp.kind === "main"
                            ? "bg-ink"
                            : "border border-ink gantt-stripe"
                      }`}
                      style={{
                        left: `${left}%`,
                        width: `${width}%`,
                        transitionDelay: `${0.15 + chronological.indexOf(exp) * 0.09}s`,
                      }}
                    />
                    {current && (
                      <span
                        className="signal-dot absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                        style={{ left: `${left + width}%` }}
                        aria-hidden
                      />
                    )}
                  </div>
                </li>
              );
            })}
          </ol>

          {/* 現在位置の縦線 */}
          <div className="grid md:grid-cols-[180px_1fr] gap-x-4 mt-2">
            <span className="hidden md:block" />
            <div className="relative h-4">
              <span
                className="absolute top-0 -translate-x-1/2 font-mono text-[0.65rem] text-accent-ink"
                style={{ left: `${nowPct}%` }}
              >
                NOW
              </span>
            </div>
          </div>
        </div>

        <p className="sr-only">
          {chronological.map((e) => `${e.period}：${e.title}`).join("。")}
        </p>
      </div>
    </Reveal>
  );
}

export function ExperienceSection() {
  return (
    <Section id="experience" tone="surface">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10 items-end">
        <SectionHeading
          index="02"
          label="Experience"
          title="実務経歴"
          className="md:col-span-5"
        />
        <Reveal className="min-w-0 md:col-span-7">
          <p className="lead-ja text-[0.95rem] text-ink-2">
            C#／ASP.NETを中心とした業務系Webシステム開発に約5年従事。
            基本設計から実装・テスト・リリース・保守調査まで一貫対応してきた実務の記録です。
          </p>
        </Reveal>
      </div>

      <Gantt />

      {/* 縦タイムライン */}
      <div className="relative mt-20">
        <span
          className="tl-line absolute left-[5px] md:left-[220px] top-2 bottom-2 w-px bg-accent/50"
          aria-hidden
        />
        <ol className="space-y-14">
          {experiences.map((exp, i) => (
            <li
              key={exp.title}
              id={`exp-${i}`}
              className="relative grid md:grid-cols-[220px_1fr] scroll-mt-28"
            >
              <span
                className={`tl-dot absolute left-0 md:left-[215px] top-1.5 w-[11px] h-[11px] rounded-full border-2 ${
                  i === 0 ? "border-accent bg-accent" : "border-accent bg-paper"
                }`}
                aria-hidden
              />
              <Reveal className="pl-8 md:pl-0 md:pr-10">
                <p className="font-mono text-[0.8125rem] text-ink md:text-right">{exp.period}</p>
                <p className="mt-1 text-xs text-ink-3 md:text-right">{exp.role}</p>
              </Reveal>
              <Reveal className="min-w-0 pl-8 md:pl-10 mt-3 md:mt-0">
                {exp.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {exp.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[0.6875rem] font-medium px-2 py-0.5 rounded-[2px] border border-accent/30 text-accent-ink"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="heading-ja text-[1.2rem] text-ink">{exp.title}</h3>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="grid grid-cols-[1rem_1fr] text-[0.875rem] leading-relaxed text-ink-2"
                    >
                      <span className="font-mono text-accent-ink" aria-hidden>
                        –
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.6875rem] px-2 py-0.5 rounded-[2px] border border-line-strong text-ink-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <Reveal className="mt-16">
        <p className="text-xs text-ink-3 md:pl-[260px]">
          ※ 秘密保持の観点から案件名・業務ドメインの詳細は伏せています。面談時に話せる範囲で口頭補足いたします。
        </p>
      </Reveal>
    </Section>
  );
}
