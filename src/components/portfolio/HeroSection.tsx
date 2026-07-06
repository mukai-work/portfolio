import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Python",
  "FastAPI",
  "Supabase",
  "PostgreSQL",
  "Stripe",
  "Vercel",
  "AWS",
  "Docker",
  "GitHub Actions",
  "Claude Code",
  "Cursor",
  "OpenAI API",
];

const stats = [
  {
    index: "01",
    title: "自社SaaS開発",
    sub: "設計〜本番ローンチまで独力で完走",
  },
  {
    index: "02",
    title: "フルスタック",
    sub: "フロント〜バックエンド〜インフラ",
  },
  {
    index: "03",
    title: "AI駆動開発",
    sub: "Claude Code / Cursor で通常比3〜5倍速",
  },
  {
    index: "04",
    title: "副業 · 今すぐ可",
    sub: "フルタイムは10月〜 · フルリモート対応",
  },
];

export function HeroSection() {
  return (
    <section className="relative bg-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 bg-blueprint" aria-hidden />
      {/* アクセント1色のみの控えめなグロー */}
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[720px] h-[480px] rounded-full bg-accent/15 blur-[140px]"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-16 md:pt-44 md:pb-20">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <p className="font-mono text-xs md:text-sm text-accent-soft tracking-wider">
              {"// FULLSTACK ENGINEER × AI-DRIVEN DEVELOPMENT"}
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/25 text-emerald-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              副業枠：今すぐ受付中
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-4xl">
            要件定義から本番リリースまで、ひとりで完走します。
            <br />
            <span className="text-accent-soft">
              フルスタック × AI活用で、速く・確実に。
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed mb-10">
            自らSaaSを0→1で作り運営した事業家エンジニア。
            <br className="hidden md:inline" />
            Next.js / TypeScript / Python / Supabase を軸に、シード〜シリーズAスタートアップの
            <br className="hidden md:inline" />
            開発を要件定義から本番リリースまで一気通貫でリードします。
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-[#3d74ff] text-white font-medium rounded transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40"
            >
              稼働相談・スカウト
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#works"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-accent-soft/60 text-white font-medium rounded transition-colors"
            >
              プロダクト実績を見る
            </Link>
          </div>
          <p className="mt-5 text-sm text-white/55">
            シード〜シリーズAスタートアップのCTO・PM・エージェント担当者からのご相談を歓迎。
            副業・スポット相談は今すぐ可 · フルタイム参画は2026年10月〜 · 月額60〜100万円
          </p>
        </Reveal>

        {/* 実績バッジ */}
        <Reveal delay={450}>
          <div className="mt-14 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            {stats.map(({ index, title, sub }) => (
              <div key={index}>
                <p className="font-mono text-[11px] text-accent-soft/70 mb-2">
                  {index}
                </p>
                <p className="text-2xl font-bold text-white">{title}</p>
                <p className="text-white/50 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* 技術スタックのマーキー */}
      <div className="relative border-t border-white/10 py-4 overflow-hidden marquee-mask">
        <div className="flex w-max animate-marquee" aria-hidden>
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center shrink-0">
              {stack.map((tech) => (
                <span
                  key={`${half}-${tech}`}
                  className="font-mono text-xs text-white/40 px-5 whitespace-nowrap"
                >
                  {tech}
                  <span className="text-accent-soft/40 pl-10">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <span className="sr-only">{stack.join(" / ")}</span>
      </div>
    </section>
  );
}
