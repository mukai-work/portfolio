import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { demos } from "@/data/demos";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type SaasProduct = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  launchInfo: string;
  tags: string[];
  status: {
    label: string;
    tone: "live" | "wip" | "mvp";
  };
  url: string;
};

const statusTone: Record<SaasProduct["status"]["tone"], string> = {
  live: "bg-emerald-400/10 text-emerald-300 border-emerald-400/25",
  wip: "bg-amber-400/10 text-amber-300 border-amber-400/25",
  mvp: "bg-sky-400/10 text-sky-300 border-sky-400/25",
};

const saasProducts: SaasProduct[] = [
  {
    badge: "SaaS / Productivity",
    title: "Stride",
    subtitle: "AI副業コーチング×生産性ツール",
    description:
      "月額¥1,480のサブスクリプション型SaaS。8ステップオンボーディングで収集したプロフィールを元に、Claude Haiku APIがWeek 1〜12の副業ロードマップを個別生成。ポモドーロタイマー・週次メール自動送信（Vercel Cron + Resend）を内蔵。Stripe Webhook + Supabase RLSによる本格的な決済・認証フローを独力で実装。",
    launchInfo: "設計〜インフラ構築: 約6週間 · Stripe承認済み・Vercelデプロイ済み・E2Eテスト待ち",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "Claude API", "Resend"],
    status: { label: "本番デプロイ済み", tone: "live" },
    url: "https://stride-three-swart.vercel.app",
  },
  {
    badge: "SaaS / BYOK",
    title: "AI-SE-Hub",
    subtitle: "SE向けマルチAI統合ダッシュボード",
    description:
      "Claude・GPT-4o・Geminiをひとつの画面で切り替え操作できるBYOK（Bring Your Own Key）型SaaS。Supabase Auth + RLS によるマルチユーザー対応、APIキーのAES-256暗号化管理、ストリーミングレスポンス表示を実装。エンジニアが日常業務でAIを使い倒せる開発者向けツール。",
    launchInfo: "設計〜MVP実装: 約6週間 · 3社AIをストリーミング統合で一元操作する設計を独力で構築",
    tags: ["Next.js", "TypeScript", "Supabase", "Claude API", "GPT-4o"],
    status: { label: "開発中", tone: "wip" },
    url: "https://github.com/mukai-work/ai-se-hub",
  },
  {
    badge: "Web App / AI",
    title: "ReFormat",
    subtitle: "AIドキュメント自動整形",
    description:
      "Markdown・JSON・CSV・自然文など様々なフォーマット間の変換をAIで自動化するWebアプリ。Next.js App Router + OpenAI API でサーバーサイドストリーミング処理を実装。変換ルールをプロンプトで自由指定できるフレキシブル設計で、議事録整形・仕様書変換などの反復業務を削減。",
    launchInfo: "PoC〜MVP完成: 約4週間 · ストリーミング変換パイプラインを独力で設計・実装",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Vercel", "Streaming"],
    status: { label: "MVP完成", tone: "mvp" },
    url: "https://github.com/mukai-work/reformat",
  },
];

function ProductCard({ product }: { product: SaasProduct }) {
  const isLinked = product.url !== "#";
  const cardClass =
    "group relative h-full overflow-hidden rounded-lg border border-white/10 bg-navy p-6 flex flex-col min-h-[280px] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-soft/40 hover:shadow-[0_24px_48px_-20px_rgba(30,94,255,0.4)]";

  const inner = (
    <>
      <span
        className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-accent to-transparent"
        aria-hidden
      />
      <div className="absolute inset-0 bg-blueprint opacity-60" aria-hidden />
      <div className="relative flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <p className="font-mono tracking-[0.15em] text-[10px] uppercase text-accent-soft">
            {product.badge}
          </p>
          <span
            className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${statusTone[product.status.tone]}`}
          >
            {product.status.label}
          </span>
        </div>
        <h4 className="text-2xl font-bold text-white mb-1 font-display">
          {product.title}
        </h4>
        <p className="text-sm text-white/70 mb-3">{product.subtitle}</p>
        <p className="text-sm text-white/80 leading-relaxed mb-3 flex-1">
          {product.description}
        </p>
        <p className="font-mono text-[11px] text-white/45 mb-3 leading-relaxed border-t border-white/10 pt-3">
          {product.launchInfo}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-1">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/15 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
        {isLinked && (
          <span className="mt-4 flex items-center gap-1 text-xs font-medium text-accent-soft group-hover:gap-2 transition-all self-end">
            見る
            <ExternalLink size={13} />
          </span>
        )}
      </div>
    </>
  );

  if (isLinked) {
    return (
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        {inner}
      </a>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}

export function WorksSection() {
  return (
    <section id="works" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="02"
          label="Works"
          title="プロダクト開発実績"
          description={
            <>
              自社SaaS開発を含む、設計・認証・決済・インフラまで
              <br className="hidden md:inline" />
              一気通貫で独力開発した実績をご覧ください。
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {saasProducts.map((product, i) => (
            <Reveal key={product.title} delay={i * 100} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {/* Works内CTA */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 px-6 bg-surface rounded-lg border border-line mb-12">
            <p className="text-sm text-ink-soft">
              <span className="font-semibold text-ink">設計〜本番稼働まで一人称で対応します。</span>
              <span className="ml-2 text-ink-faint">まずはお気軽にご相談ください。</span>
            </p>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-[#3d74ff] text-white text-sm font-medium rounded transition-colors"
            >
              稼働相談する
              <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>

        <hr className="border-line mb-12" />

        {/* Webサイト制作デモ */}
        <Reveal>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold text-ink mb-1">
              フロントエンド実装サンプル
            </h3>
            <p className="text-sm text-ink-faint">
              8業種のデザインを動的ルーティング1セットで実装。CSS Variables によるテーマ切替・Unsplash画像・レスポンシブ対応。
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, i) => (
            <Reveal key={demo.slug} delay={(i % 4) * 80} className="h-full">
              <Link
                href={`/demos/${demo.slug}`}
                className="group relative h-full overflow-hidden rounded-lg p-6 md:p-7 flex flex-col min-h-[280px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${demo.colors.primary} 0%, ${demo.colors.primary}dd 60%, ${demo.colors.accent} 200%)`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: demo.colors.accent }}
                />
                <div className="flex-1">
                  <p
                    className="font-mono tracking-[0.2em] text-[10px] uppercase mb-3 opacity-80"
                    style={{ color: demo.colors.accent }}
                  >
                    Case {String(demos.indexOf(demo) + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {demo.name}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4 line-clamp-3">
                    {demo.designConcept}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {demo.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[10px] px-2 py-0.5 rounded border border-white/20 text-white/90"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-white group-hover:gap-2 transition-all">
                  デモを見る
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
