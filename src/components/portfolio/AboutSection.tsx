import Image from "next/image";
import { Layers, FileText, Sparkles, Rocket, Github, Twitter, PenLine } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightGroup } from "@/components/ui/Spotlight";

const socialLinks = [
  { href: "https://github.com/mukai-work", icon: Github, label: "GitHub" },
  { href: "https://x.com/m333studio", icon: Twitter, label: "X" },
  { href: "https://note.com/m333_studio", icon: PenLine, label: "Note" },
];

const strengths = [
  {
    icon: Layers,
    title: "既存システムを壊さず改善",
    description: "長期運用された業務システムのコード解析・影響範囲調査を徹底した上で安全に機能追加・修正。本番障害の緊急対応〜リリース後監視まで経験。",
  },
  {
    icon: FileText,
    title: "機能単位の要件定義力",
    description: "曖昧な要件を仕様書・画面設計に落とし込む。ストレージ移行や決済連携では要件定義から試験まで一貫して担当。",
  },
  {
    icon: Sparkles,
    title: "AI活用による実行速度",
    description: "Claude Code・Cursorを活用し、チーム3〜5名・半年相当の開発を独力で1〜3ヶ月に短縮。素早いプロトタイプから本番リリースを実現。",
  },
  {
    icon: Rocket,
    title: "SaaS自社開発実績",
    description: "AI-SE-Hub・ReFormatを含む複数のSaaSプロダクトを設計から本番リリースまで独力で開発。認証・決済・インフラまで一人称対応。",
  },
];

const problems = [
  { label: "エンジニア採用まで間に合わない", sub: "即戦力を今すぐチームに加えたい" },
  { label: "MVPを速く・確実に完成させたい", sub: "設計ミスなくゼロから本番まで届けたい" },
  { label: "既存システムの改修を任せたい", sub: "調査→影響範囲の見極め→安全なリリースまで" },
];

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        {/* 左：見出し＋プロフィール（スクロール中も追従） */}
        <div className="min-w-0 md:col-span-4">
          <div className="md:sticky md:top-28">
            <SectionHeading index="01" label="About" title="エンジニア紹介" />
            <Reveal className="mt-10 flex items-center gap-5 md:flex-col md:items-start">
              <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 overflow-hidden rounded-[4px] border border-line">
                <Image
                  src="/avatar.png"
                  alt="ムカイのプロフィール画像"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-ink">ムカイ</p>
                <p className="font-mono text-xs text-accent-ink mt-1">
                  Fullstack Engineer / 実務約5年
                </p>
                <div className="flex items-center gap-4 mt-4">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-ink-2 hover:text-accent-ink transition-colors"
                    >
                      <Icon size={18} strokeWidth={1.75} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 右：本文 */}
        <div className="min-w-0 md:col-span-8">
          <Reveal>
            <p className="font-mono text-xs leading-relaxed text-accent-ink pb-6 border-b border-line">
              2021年10月 キャリア開始 → EC・官公庁・医療系の業務システム開発 → 2024年4月 独立 → 建設業向けシステムに参画中（エンド企業直）
            </p>
            <div className="mt-8 space-y-6 text-[0.975rem] text-ink-2 lead-ja max-w-none">
              <p>
                フルスタックエンジニアのムカイです。<strong className="font-bold text-ink">C#／ASP.NETを中心とした業務系Webシステム開発に約5年従事</strong>し、現在は建設業向け業務システムにエンド企業直・フルリモートで参画しています。あわせて<strong className="font-bold text-ink">自らSaaSプロダクトを0→1で設計・開発・運営した事業家エンジニア</strong>でもあります。
              </p>
              <p>
                要件定義・設計・フロントエンド・バックエンド・インフラ構築・本番リリースまで、一人称で一気通貫に対応できることが強みです。AI活用（Claude Code・Cursor）を駆使した爆速開発も得意としており、通常の3〜5倍のスピードで機能をデリバリーできます。
              </p>
              <p>
                事業オーナーとして認証・決済・インフラまでひとりで構築した経験があるため、<strong className="font-bold text-ink">技術的判断と事業的判断の両方の視点</strong>でプロダクト開発に貢献できます。エンド企業・開発会社のCTO・PM、エージェント担当者からのご相談を歓迎しています。
              </p>
            </div>
          </Reveal>

          {/* 採用コスト比較：罫線テーブル */}
          <Reveal className="mt-14">
            <p className="label-mono text-ink-3 mb-4">Cost Comparison — 採用コストとの比較</p>
            <div className="sm:hidden space-y-3">
              <div className="rounded-[4px] border border-line p-4">
                <p className="text-[0.8125rem] font-medium text-ink-2 mb-2">正社員エンジニア2名採用の場合</p>
                <p className="text-[0.875rem] text-ink">
                  採用コスト <span className="font-bold">〜300万円</span> + 人件費{" "}
                  <span className="font-bold">1,200万円/年</span>
                </p>
                <p className="mt-2 text-xs text-ink-3">※ 即戦力まで最低3〜6ヶ月のオンボーディング</p>
              </div>
              <div className="rounded-[4px] border border-accent/40 border-l-2 border-l-accent bg-accent/[0.04] p-4">
                <p className="text-[0.8125rem] font-bold text-ink mb-2">ムカイ（フリーランス）の場合</p>
                <p className="text-[0.875rem] text-ink">
                  月70〜80万円 × 3ヶ月 = <span className="font-bold text-accent-ink">〜240万円</span>でMVPリリース
                </p>
                <p className="mt-2 text-xs text-ink-2">※ 翌週から稼働・採用管理コストゼロ</p>
              </div>
            </div>
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-[0.875rem] border-t border-ink">
                <thead>
                  <tr className="border-b border-line">
                    <th scope="col" className="w-[16%] py-3 pr-4 font-medium text-ink-3 text-xs" />
                    <th scope="col" className="py-3 pr-6 font-medium text-ink-2">
                      正社員エンジニア2名採用の場合
                    </th>
                    <th scope="col" className="py-3 pl-4 font-bold text-ink border-l-2 border-accent bg-accent/[0.04]">
                      ムカイ（フリーランス）の場合
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-line align-top">
                    <th scope="row" className="py-4 pr-4 font-mono text-xs font-normal text-ink-3">COST</th>
                    <td className="py-4 pr-6 text-ink">
                      採用コスト <span className="font-bold">〜300万円</span> + 人件費{" "}
                      <span className="font-bold">1,200万円/年</span>
                    </td>
                    <td className="py-4 pl-4 text-ink border-l-2 border-accent bg-accent/[0.04]">
                      月70〜80万円 × 3ヶ月 = <span className="font-bold text-accent-ink">〜240万円</span>でMVPリリース
                    </td>
                  </tr>
                  <tr className="border-b border-line align-top">
                    <th scope="row" className="py-4 pr-4 font-mono text-xs font-normal text-ink-3">LEAD TIME</th>
                    <td className="py-4 pr-6 text-ink-3 text-[0.8125rem]">
                      ※ 即戦力まで最低3〜6ヶ月のオンボーディング
                    </td>
                    <td className="py-4 pl-4 text-ink-2 text-[0.8125rem] border-l-2 border-accent bg-accent/[0.04]">
                      ※ 翌週から稼働・採用管理コストゼロ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* こんな課題を持つ方へ */}
          <Reveal className="mt-14">
            <p className="label-mono text-ink-3 mb-2">こんな課題を持つCTO・PMの方へ</p>
            <ul className="divide-y divide-line border-y border-line">
              {problems.map(({ label, sub }, i) => (
                <li key={label} className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[2.5rem_1fr_1fr] gap-x-4 py-4">
                  <span className="font-mono text-xs text-accent-ink pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.95rem] font-bold text-ink">{label}</p>
                  <p className="col-start-2 sm:col-start-3 text-[0.8125rem] text-ink-3 mt-1 sm:mt-0.5">{sub}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* 強み：1枚大＋3枚小 */}
          <SpotlightGroup className="mt-14 grid gap-4 sm:grid-cols-3">
            {strengths.map(({ icon: Icon, title, description }, i) => (
              <Reveal
                key={title}
                delay={i * 70}
                className={i === 0 ? "sm:col-span-3" : ""}
              >
                <div
                  className={`spot h-full rounded-[4px] border border-line bg-paper transition-colors duration-300 hover:border-line-strong ${
                    i === 0 ? "p-7 sm:p-8 sm:grid sm:grid-cols-[auto_1fr] sm:gap-8 sm:items-start" : "p-6"
                  }`}
                >
                  <Icon
                    size={i === 0 ? 28 : 22}
                    strokeWidth={1.25}
                    className="text-accent-ink mb-5 sm:mb-0"
                  />
                  <div className={i === 0 ? "" : "sm:mt-5"}>
                    <p className={`heading-ja text-ink mb-2 ${i === 0 ? "text-xl" : "text-base"}`}>
                      {title}
                    </p>
                    <p className="text-[0.8125rem] leading-relaxed text-ink-2">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </SpotlightGroup>

          <Reveal className="mt-12">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-[0.95rem] font-medium text-accent-ink border-b border-accent-ink/40 hover:border-accent-ink pb-1 transition-colors"
            >
              稼働のご相談はこちら
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
