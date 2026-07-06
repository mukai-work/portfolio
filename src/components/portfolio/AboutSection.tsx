import Image from "next/image";
import { Layers, FileText, Sparkles, Rocket, Github, Twitter, PenLine } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
    <section id="about" className="py-20 md:py-28 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="01" label="About" title="エンジニア紹介" />

        <Reveal>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* プロフィール */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-5 w-full md:w-56">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-[0_1px_2px_rgba(15,42,67,0.12)] ring-1 ring-line">
                <Image
                  src="/avatar.png"
                  alt="ムカイのプロフィール画像"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl font-bold text-ink">ムカイ</p>
                <p className="font-mono text-xs text-accent font-medium mt-1">
                  Fullstack Engineer / 5年目
                </p>
                <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-ink-soft hover:text-accent transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 自己紹介文 */}
            <div className="flex-1 space-y-5 text-ink-soft leading-relaxed">
              <p className="font-mono text-xs text-accent tracking-wide">
                2021年10月 エンジニアキャリア開始 → 受託開発 → 独立・フリーランス → SaaS自社開発（現在）
              </p>
              <p>
                フルスタックエンジニアのムカイです。コードを書くだけでなく、<strong className="text-ink">自らSaaSプロダクトを0→1で設計・開発・運営した事業家エンジニア</strong>です。シード〜シリーズAのスタートアップで「CTOひとりでは開発が回らない」「MVPを速く本番に届けたい」という状況に即戦力で入ります。
              </p>
              <p>
                要件定義・設計・フロントエンド・バックエンド・インフラ構築・本番リリースまで、一人称で一気通貫に対応できることが強みです。AI活用（Claude Code・Cursor）を駆使した爆速開発も得意としており、通常の3〜5倍のスピードで機能をデリバリーできます。
              </p>
              <p>
                事業オーナーとして認証・決済・インフラまでひとりで構築した経験があるため、<strong className="text-ink">技術的判断と事業的判断の両方の視点</strong>でプロダクト開発に貢献できます。スタートアップのCTO・PM・エージェント担当者からのご相談を歓迎しています。
              </p>

              {/* 採用コスト比較 */}
              <div className="rounded-lg border border-line bg-white p-5">
                <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase mb-4">
                  Cost Comparison — 採用コストとの比較
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="rounded border border-line p-4">
                    <p className="font-medium text-ink-soft mb-2">正社員エンジニア2名採用の場合</p>
                    <p className="text-ink">
                      採用コスト <span className="font-bold">〜300万円</span> + 人件費{" "}
                      <span className="font-bold">1,200万円/年</span>
                    </p>
                    <p className="text-ink-faint mt-2">※ 即戦力まで最低3〜6ヶ月のオンボーディング</p>
                  </div>
                  <div className="rounded bg-navy text-white p-4 relative overflow-hidden">
                    <span className="absolute top-0 left-0 h-full w-0.5 bg-accent" aria-hidden />
                    <p className="font-medium text-accent-soft mb-2">ムカイ（フリーランス）の場合</p>
                    <p>
                      月60〜80万円 × 3ヶ月 = <span className="font-bold">〜240万円</span>でMVPリリース
                    </p>
                    <p className="text-white/60 mt-2">※ 翌週から稼働・採用管理コストゼロ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* こんな課題を持つ方へ */}
        <Reveal>
          <div className="mt-14 p-6 md:p-8 bg-white rounded-lg border border-line">
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase mb-5">
              こんな課題を持つCTO・PMの方へ
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "エンジニア採用まで間に合わない", sub: "即戦力を今すぐチームに加えたい" },
                { label: "MVPを速く・確実に完成させたい", sub: "設計ミスなくゼロから本番まで届けたい" },
                { label: "技術顧問＋実装の両方が欲しい", sub: "要件定義から一緒に考えてほしい" },
              ].map(({ label, sub }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{label}</p>
                    <p className="text-xs text-ink-faint mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 強み4項目 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-12">
          {strengths.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full bg-white rounded-lg p-6 border border-line hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_12px_32px_-16px_rgba(30,94,255,0.25)] transition-all duration-300">
                <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <p className="font-bold text-ink mb-2">{title}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[#3d74ff] text-white font-medium rounded transition-colors text-sm"
          >
            稼働のご相談はこちら →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
