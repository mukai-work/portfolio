import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { demos } from "@/data/demos";

type SaasProduct = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  launchInfo: string;
  tags: string[];
  gradient: string;
  status: {
    label: string;
    bg: string;
    text: string;
  };
  url: string;
};

const saasProducts: SaasProduct[] = [
  {
    badge: "SaaS / BYOK",
    title: "AI-SE-Hub",
    subtitle: "SE向けマルチAI統合ダッシュボード",
    description:
      "Claude・GPT-4o・Geminiをひとつの画面で切り替え操作できるBYOK（Bring Your Own Key）型SaaS。Supabase Auth + RLS によるマルチユーザー対応、APIキーの暗号化管理、ストリーミングレスポンス表示を実装。エンジニアが日常業務でAIを使い倒せる開発者向けツール。",
    launchInfo: "設計〜MVP実装: 約6週間 · 3社AIをストリーミング統合で一元操作する設計を独力で構築",
    tags: ["Next.js", "TypeScript", "Supabase", "Claude API", "GPT-4o"],
    gradient: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)",
    status: {
      label: "開発中",
      bg: "bg-yellow-400/20",
      text: "text-yellow-200",
    },
    url: "#",
  },
  {
    badge: "Web App / AI",
    title: "ReFormat",
    subtitle: "AIドキュメント自動整形",
    description:
      "Markdown・JSON・CSV・自然文など様々なフォーマット間の変換をAIで自動化するWebアプリ。Next.js App Router + OpenAI API でサーバーサイドストリーミング処理を実装。変換ルールをプロンプトで自由指定できるフレキシブル設計で、議事録整形・仕様書変換などの反復業務を削減。",
    launchInfo: "PoC〜MVP完成: 約4週間 · ストリーミング変換パイプラインを独力で設計・実装",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Vercel", "Streaming"],
    gradient: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)",
    status: {
      label: "MVP完成",
      bg: "bg-blue-400/20",
      text: "text-blue-200",
    },
    url: "#",
  },
];

function ProductCard({ product }: { product: SaasProduct }) {
  const isLinked = product.url !== "#";
  const cardClass =
    "group relative overflow-hidden rounded-xl p-6 flex flex-col min-h-[280px] transition-all hover:-translate-y-1 hover:shadow-2xl";

  const inner = (
    <>
      <p className="font-display tracking-[0.2em] text-[10px] uppercase text-white/70 mb-3">
        {product.badge}
      </p>
      <h4 className="text-2xl font-bold text-white mb-1">{product.title}</h4>
      <p className="text-sm text-white/80 mb-3">{product.subtitle}</p>
      <p className="text-sm text-white/85 leading-relaxed mb-3 flex-1">
        {product.description}
      </p>
      <p className="text-[11px] text-white/60 mb-3 leading-relaxed border-t border-white/10 pt-3">
        {product.launchInfo}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full bg-white/15 text-white/90 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span
          className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${product.status.bg} ${product.status.text}`}
        >
          {product.status.label}
        </span>
        {isLinked && (
          <span className="flex items-center gap-1 text-xs font-medium text-white group-hover:gap-2 transition-all">
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
        style={{ background: product.gradient }}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={cardClass} style={{ background: product.gradient }}>
      {inner}
    </div>
  );
}

export function WorksSection() {
  return (
    <section id="works" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display tracking-[0.3em] text-xs text-blue-500 uppercase mb-4">
            Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            プロダクト開発実績
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            自社SaaS開発を含む、設計・認証・決済・インフラまで
            <br className="hidden md:inline" />
            一気通貫で独力開発した実績をご覧ください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {saasProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>

        {/* Works内CTA */}
        <div className="flex items-center justify-between py-6 px-6 bg-blue-50 rounded-xl border border-blue-100 mb-12">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">設計〜本番稼働まで一人称で対応します。</span>
            <span className="ml-2 text-gray-500">まずはお気軽にご相談ください。</span>
          </p>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-md transition-colors"
          >
            稼働相談する
            <ArrowRight size={14} />
          </a>
        </div>

        <hr className="border-gray-200 mb-12" />

        {/* Webサイト制作デモ */}
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-1">
            フロントエンド実装サンプル
          </h3>
          <p className="text-sm text-gray-500">
            8業種のデザインを動的ルーティング1セットで実装。CSS Variables によるテーマ切替・Unsplash画像・レスポンシブ対応。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo) => (
            <Link
              key={demo.slug}
              href={`/demos/${demo.slug}`}
              className="group relative overflow-hidden rounded-xl p-6 md:p-7 flex flex-col min-h-[280px] transition-all hover:-translate-y-1 hover:shadow-2xl"
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
                  className="font-display tracking-[0.2em] text-[10px] uppercase mb-3 opacity-80"
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
                    className="text-[10px] px-2 py-0.5 rounded-full bg-white/15 text-white/90 backdrop-blur-sm"
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
          ))}
        </div>
      </div>
    </section>
  );
}
