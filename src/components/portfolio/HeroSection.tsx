import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArchDiagram } from "./ArchDiagram";

const stack = [
  "C#",
  "ASP.NET",
  "Vue.js",
  "Oracle",
  "SQL Server",
  "Azure",
  "IIS",
  "Next.js",
  "TypeScript",
  "React",
  "Python",
  "Supabase",
  "PostgreSQL",
  "Stripe",
  "Vercel",
  "AWS",
  "Docker",
  "GitHub Actions",
  "Claude Code",
  "Cursor",
];

const stats = [
  {
    index: "01",
    title: "実務 約5年",
    sub: "C#/.NET中心の業務系Webシステム開発",
  },
  {
    index: "02",
    title: "SQL改善 3分→20秒",
    sub: "Oracle環境でのチューニング実績",
  },
  {
    index: "03",
    title: "100GB超のAzure移行",
    sub: "Blob Storage移行を要件定義から完遂",
  },
  {
    index: "04",
    title: "AI駆動開発 3〜5倍速",
    sub: "Claude Code / Cursor を開発フローに組込",
  },
];

export function HeroSection() {
  return (
    <section className="tone-dark relative bg-navy-deep text-white overflow-hidden">
      {/* 中央だけ浮かぶドットグリッド */}
      <div
        className="absolute inset-0 opacity-60 [background-image:radial-gradient(oklch(100%_0_0/0.14)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_40%,black,transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12 pt-32 md:pt-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 items-center">
          <div className="min-w-0 lg:col-span-7">
            <div className="rise flex flex-wrap items-center gap-x-5 gap-y-3 mb-8">
              <p className="label-mono text-accent-soft">
                {"// FULLSTACK ENGINEER × AI-DRIVEN DEVELOPMENT"}
              </p>
              <span className="inline-flex items-center gap-2 text-xs text-white/80">
                <span className="signal-dot w-1.5 h-1.5 rounded-full" />
                副業枠：今すぐ受付中
              </span>
            </div>

            <h1
              className="rise heading-ja text-[clamp(2rem,1.3rem+2.6vw,3.25rem)] text-white mb-8"
              style={{ animationDelay: "0.08s" }}
            >
              要件定義から本番リリースまで、ひとりで完走します。
              <br />
              <span className="text-accent-soft">
                フルスタック × AI活用で、速く・確実に。
              </span>
            </h1>

            <p
              className="rise lead-ja text-base md:text-[1.05rem] text-white/70 mb-10"
              style={{ animationDelay: "0.16s" }}
            >
              C#／ASP.NETの業務系Webシステム開発に約5年従事し、自らプロダクトも0→1で開発・販売。
              実務（C# / .NET・Vue.js・Oracle・Azure）× 個人開発（Next.js / TypeScript × AI駆動）の両輪で、
              調査・設計から実装・テスト・リリースまで一気通貫で対応します。
            </p>

            <div className="rise" style={{ animationDelay: "0.24s" }}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 h-12 px-6 bg-accent hover:bg-[oklch(60%_0.24_262)] text-white text-[0.95rem] font-medium rounded-[4px] transition-colors"
                >
                  稼働相談・スカウト
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="#works"
                  className="inline-flex items-center h-12 px-6 border border-white/20 hover:border-white/50 text-white text-[0.95rem] font-medium rounded-[4px] transition-colors"
                >
                  プロダクト実績を見る
                </Link>
              </div>
              <p className="mt-6 text-[0.8125rem] leading-relaxed text-white/55 max-w-[46em]">
                エンド企業・開発会社・エージェント担当者からのご相談を歓迎（エンド直・元請け直を優先）。
                副業・スポット相談は今すぐ可 · 本格参画は2026年12月〜相談可 · 月額70万円〜（応相談）
              </p>
              <Link
                href="#services"
                className="group mt-4 inline-flex items-center gap-2 text-[0.8125rem] text-accent-soft hover:text-white transition-colors"
              >
                開発以外の対応範囲（動画編集・Web制作・自動化）を見る
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          <div
            className="rise lg:col-span-5 flex justify-center lg:justify-end"
            style={{ animationDelay: "0.1s" }}
          >
            <ArchDiagram />
          </div>
        </div>
      </div>

      {/* 実績 KPI 列：全幅の罫線上に4分割 */}
      <div className="relative mt-20 md:mt-24 border-t border-hair">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ index, title, sub }, i) => (
            <div
              key={index}
              className={`rise px-6 md:px-12 lg:px-8 py-8 border-hair ${
                i > 0 ? "border-t sm:border-t-0" : ""
              } ${i % 2 === 1 ? "sm:border-l" : ""} ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${
                i > 0 ? "lg:border-l" : ""
              }`}
              style={{ animationDelay: `${0.35 + i * 0.07}s` }}
            >
              <p className="label-mono text-[0.65rem] text-white/40 mb-3">{index}</p>
              <p className="heading-ja text-[1.45rem] text-white">{title}</p>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/55">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 技術スタック（静的な1行） */}
      <div className="relative border-t border-hair">
        <p className="mx-auto max-w-[1200px] px-6 md:px-12 py-5 font-mono text-[0.75rem] leading-loose text-white/45">
          {stack.join("  ·  ")}
        </p>
      </div>
    </section>
  );
}
