import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Experience = {
  period: string;
  title: string;
  role: string;
  badges: string[];
  highlights: string[];
  tech: string[];
};

const experiences: Experience[] = [
  {
    period: "2025.10 — 現在",
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

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          index="02"
          label="Experience"
          title="実務経歴"
          description={
            <>
              C#／ASP.NETを中心とした業務系Webシステム開発に約5年従事。
              <br className="hidden md:inline" />
              基本設計から実装・テスト・リリース・保守調査まで一貫対応してきた実務の記録です。
            </>
          }
        />

        <div className="relative">
          {/* タイムラインの縦線 */}
          <span
            className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-line"
            aria-hidden
          />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.title} delay={Math.min(i, 2) * 80}>
                <div className="relative pl-8 md:pl-12">
                  {/* タイムラインのドット */}
                  <span
                    className={`absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2 ${
                      i === 0
                        ? "border-accent bg-accent/15"
                        : "border-line bg-white"
                    }`}
                    aria-hidden
                  >
                    {i === 0 && (
                      <span className="absolute inset-[3px] rounded-full bg-accent animate-pulse" />
                    )}
                  </span>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-2">
                    <p className="font-mono text-xs text-accent tracking-wide">
                      {exp.period}
                    </p>
                    {exp.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-1">{exp.title}</h3>
                  <p className="text-xs text-ink-faint mb-3">{exp.role}</p>
                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm text-ink-soft leading-relaxed flex items-start gap-2"
                      >
                        <span className="font-mono text-accent mt-0.5 shrink-0">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 rounded border border-line text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12">
          <p className="text-xs text-ink-faint text-center">
            ※ 秘密保持の観点から案件名・業務ドメインの詳細は伏せています。面談時に話せる範囲で口頭補足いたします。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
