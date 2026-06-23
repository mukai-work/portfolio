import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* 装飾的グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <p className="font-display tracking-[0.4em] text-xs md:text-sm text-blue-300 uppercase">
            Fullstack Engineer Portfolio
          </p>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-300 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            副業枠：今すぐ受付中
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-4xl">
          要件定義から本番リリースまで、ひとりで完走します。
          <br />
          <span className="text-blue-300">
            フルスタック × AI活用で、速く・確実に。
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-10">
          自らSaaSを0→1で作り運営した事業家エンジニア。
          <br className="hidden md:inline" />
          Next.js / TypeScript / Python / Supabase を軸に、シード〜シリーズAスタートアップの
          <br className="hidden md:inline" />
          開発を要件定義から本番リリースまで一気通貫でリードします。
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-md transition-colors shadow-lg shadow-blue-500/30"
          >
            稼働相談・スカウト
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#works"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white font-medium rounded-md transition-colors"
          >
            プロダクト実績を見る
          </Link>
        </div>
        <p className="mt-5 text-sm text-blue-100/90">
          シード〜シリーズAスタートアップのCTO・PM・エージェント担当者からのご相談を歓迎。
          副業・スポット相談は今すぐ可 · フルタイム参画は2026年10月〜 · 月額60〜100万円
        </p>

        {/* 実績バッジ */}
        <div className="mt-14 pt-12 border-t border-white/10 flex flex-wrap gap-8 md:gap-12 text-sm">
          <div>
            <p className="text-3xl font-bold text-blue-300">自社SaaS開発</p>
            <p className="text-gray-400">設計〜本番ローンチまで独力で完走</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-300">フルスタック</p>
            <p className="text-gray-400">フロント〜バックエンド〜インフラ</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-300">AI駆動開発</p>
            <p className="text-gray-400">Claude Code / Cursor で通常比3〜5倍速</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-300">副業 · 今すぐ可</p>
            <p className="text-gray-400">フルタイムは10月〜 · フルリモート対応</p>
          </div>
        </div>
      </div>
    </section>
  );
}
