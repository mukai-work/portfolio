import Image from "next/image";
import { Layers, FileText, Sparkles, Rocket, Github, Twitter, PenLine } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/mukai-work", icon: Github, label: "GitHub" },
  { href: "https://x.com/m333studio", icon: Twitter, label: "X" },
  { href: "https://note.com/m333_studio", icon: PenLine, label: "Note" },
];

const strengths = [
  {
    icon: Layers,
    title: "アーキテクチャ設計力",
    description: "フロントからDB・インフラまで一人で設計できる。初期設計のミスを防ぐ上流工程対応が得意。",
  },
  {
    icon: FileText,
    title: "要件定義力",
    description: "曖昧な要件を仕様書・画面設計に落とし込む。ヒアリングから設計まで一気通貫で対応。",
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

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display tracking-[0.3em] text-xs text-blue-500 uppercase mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            エンジニア紹介
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* プロフィール */}
          <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-5 w-full md:w-56">
            <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/avatar.png"
                alt="ムカイのプロフィール画像"
                width={144}
                height={144}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-gray-900">ムカイ</p>
              <p className="text-sm text-blue-500 font-medium mt-0.5">Fullstack Engineer / 5年目</p>
              <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 自己紹介文 */}
          <div className="flex-1 space-y-5 text-gray-700 leading-relaxed">
            <p className="text-xs text-blue-500 font-medium tracking-wide">
              2021年10月 エンジニアキャリア開始 → 受託開発 → 独立・フリーランス → SaaS自社開発（現在）
            </p>
            <p>
              フルスタックエンジニアのムカイです。コードを書くだけでなく、<strong className="text-gray-900">自らSaaSプロダクトを0→1で設計・開発・運営した事業家エンジニア</strong>です。シード〜シリーズAのスタートアップで「CTOひとりでは開発が回らない」「MVPを速く本番に届けたい」という状況に即戦力で入ります。
            </p>
            <p>
              要件定義・設計・フロントエンド・バックエンド・インフラ構築・本番リリースまで、一人称で一気通貫に対応できることが強みです。AI活用（Claude Code・Cursor）を駆使した爆速開発も得意としており、通常の3〜5倍のスピードで機能をデリバリーできます。
            </p>
            <p>
              事業オーナーとして認証・決済・インフラまでひとりで構築した経験があるため、<strong className="text-gray-900">技術的判断と事業的判断の両方の視点</strong>でプロダクト開発に貢献できます。スタートアップのCTO・PM・エージェント担当者からのご相談を歓迎しています。
            </p>
            <div className="text-sm bg-blue-50 border border-blue-100 rounded-lg px-4 py-4 text-blue-800">
              <p className="font-semibold mb-2">💡 採用コストとの比較</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white/60 rounded-md p-3">
                  <p className="font-medium text-gray-600 mb-1">正社員エンジニア2名採用の場合</p>
                  <p className="text-gray-800">採用コスト <span className="font-bold">〜300万円</span> + 人件費 <span className="font-bold">1,200万円/年</span></p>
                  <p className="text-gray-500 mt-1">※ 即戦力まで最低3〜6ヶ月のオンボーディング</p>
                </div>
                <div className="bg-blue-100/60 rounded-md p-3">
                  <p className="font-medium text-blue-700 mb-1">ムカイ（フリーランス）の場合</p>
                  <p className="text-blue-900">月60〜80万円 × 3ヶ月 = <span className="font-bold">〜240万円</span>でMVPリリース</p>
                  <p className="text-blue-600 mt-1">※ 翌週から稼働・採用管理コストゼロ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* こんな課題を持つ方へ */}
        <div className="mt-14 p-6 md:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium tracking-widest text-blue-500 uppercase mb-5">こんな課題を持つCTO・PMの方へ</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "エンジニア採用まで間に合わない", sub: "即戦力を今すぐチームに加えたい" },
              { label: "MVPを速く・確実に完成させたい", sub: "設計ミスなくゼロから本番まで届けたい" },
              { label: "技術顧問＋実装の両方が欲しい", sub: "要件定義から一緒に考えてほしい" },
            ].map(({ label, sub }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-500 text-xs font-bold flex items-center justify-center">✓</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 強み4項目 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-12">
          {strengths.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Icon size={20} className="text-blue-500" />
              </div>
              <p className="font-bold text-gray-900 mb-2">{title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-md transition-colors text-sm"
          >
            稼働のご相談はこちら →
          </a>
        </div>
      </div>
    </section>
  );
}
