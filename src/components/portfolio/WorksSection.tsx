import { ArrowRight, ArrowUpRight } from "lucide-react";
import { demos } from "@/data/demos";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightGroup } from "@/components/ui/Spotlight";
import { DemoGallery } from "./DemoGallery";
import { ProjectIndex } from "./ProjectIndex";

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

const statusDot: Record<SaasProduct["status"]["tone"], string> = {
  live: "bg-signal",
  wip: "bg-[oklch(75%_0.15_75)]",
  mvp: "bg-accent",
};

const saasProducts: SaasProduct[] = [
  {
    badge: "SaaS / Productivity",
    title: "Stride",
    subtitle: "AI副業コーチング×生産性ツール",
    description:
      "月額¥1,480のサブスクリプション型SaaS。8ステップオンボーディングで収集したプロフィールを元に、Claude Haiku APIがWeek 1〜12の副業ロードマップを個別生成。ポモドーロタイマー・週次メール自動送信（Vercel Cron + Resend）を内蔵。Stripe Webhook + Supabase RLSによる本格的な決済・認証フローを独力で実装。",
    launchInfo: "設計〜インフラ構築: 約6週間 · Stripe承認済み・Vercel本番デプロイ済み",
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

const demoStats = [
  { value: String(demos.length), label: "業種" },
  { value: "3", label: "レイアウト" },
  { value: "1", label: "動的ルート" },
];

const snippet = `// src/app/demos/[slug]/page.tsx
export async function generateStaticParams() {
  // ramen は専用ページで独自実装のため除外
  return demos
    .filter((d) => d.slug !== "ramen")
    .map((d) => ({ slug: d.slug }));
}

// 業種ごとの差分はデータだけ。配色は CSS Variables で注入
const themeStyle = {
  "--color-primary": demo.colors.primary,
  "--color-accent": demo.colors.accent,
  "--color-bg": demo.colors.background,
  // ...
};`;

function ProductCard({ product, index }: { product: SaasProduct; index: number }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="spot group flex h-full flex-col rounded-[4px] border border-line bg-paper p-6 md:p-7 transition-colors duration-300 hover:border-line-strong"
    >
      <div className="flex items-center justify-between gap-3 pb-5 border-b border-line">
        <p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-ink-3">
          <span className="text-accent-ink">{String(index + 1).padStart(2, "0")}</span>
          <span className="mx-2 opacity-50">/</span>
          {product.badge}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[0.7rem] text-ink-2 whitespace-nowrap">
          <span className={`w-1.5 h-1.5 rounded-full ${statusDot[product.status.tone]}`} />
          {product.status.label}
        </span>
      </div>
      <h4 className="mt-6 text-[1.75rem] font-medium tracking-tight text-ink flex items-center gap-2">
        {product.title}
        <ArrowUpRight
          size={20}
          className="text-ink-3 transition-all duration-300 group-hover:text-accent-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </h4>
      <p className="mt-1 text-[0.875rem] font-medium text-ink-2">{product.subtitle}</p>
      <p className="mt-5 flex-1 text-[0.8125rem] leading-[1.85] text-ink-2">{product.description}</p>
      <p className="mt-5 pt-4 border-t border-line font-mono text-[0.7rem] leading-relaxed text-ink-3">
        {product.launchInfo}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[0.6875rem] px-2 py-0.5 rounded-[2px] border border-line-strong text-ink-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export function WorksSection() {
  return (
    <Section id="works" tone="surface">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10 items-end">
        <SectionHeading
          index="04"
          label="Works"
          title="制作実績"
          className="min-w-0 md:col-span-5"
        />
        <Reveal className="min-w-0 md:col-span-7">
          <p className="lead-ja text-[0.95rem] text-ink-2">
            個人開発のSaaS、販売中・運用中の制作物、受託案件、業種別のWebデモをまとめています。
            開発だけでなく、動画・Web制作・自動化まで実物でご確認いただけます。
          </p>
        </Reveal>
      </div>

      {/* SaaS・Webアプリ */}
      <Reveal className="mt-16">
        <p className="label-mono text-ink-3">SaaS / Web Apps</p>
        <h3 className="heading-ja mt-4 text-[1.6rem] text-ink">個人開発プロダクト</h3>
        <p className="mt-3 lead-ja text-[0.875rem] text-ink-2">
          AI駆動開発（Claude Code）の実証として、設計・認証・決済・インフラまで
          一気通貫で独力開発したプロダクト群です。コードはGitHubで公開しています。
        </p>
      </Reveal>

      <SpotlightGroup className="mt-10 grid gap-5 md:grid-cols-3">
        {saasProducts.map((product, i) => (
          <Reveal key={product.title} delay={i * 90} className="h-full">
            <ProductCard product={product} index={i} />
          </Reveal>
        ))}
      </SpotlightGroup>

      {/* Works内CTA */}
      <Reveal className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-y border-line">
          <p className="text-[0.875rem] text-ink-2">
            <span className="font-bold text-ink">設計〜本番稼働まで一人称で対応します。</span>
            <span className="ml-2 text-ink-3">まずはお気軽にご相談ください。</span>
          </p>
          <a
            href="#contact"
            className="group shrink-0 inline-flex items-center gap-2 h-10 px-5 bg-ink hover:opacity-85 text-paper text-[0.8125rem] font-medium rounded-[4px] transition-colors"
          >
            稼働相談する
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>

      {/* その他の制作物 */}
      <div id="more-works" className="mt-28 scroll-mt-24">
        <Reveal>
          <p className="label-mono text-ink-3">Beyond Development</p>
          <h3 className="heading-ja mt-4 text-[1.6rem] text-ink">その他の制作物</h3>
          <p className="mt-3 lead-ja text-[0.875rem] text-ink-2">
            動画編集の自動化、YouTube台本の受託、Webサイト制作、拡張機能やアプリまで。
            受託案件は守秘のため、クライアント名を伏せて概要のみ掲載しています。
          </p>
        </Reveal>
        <div className="mt-10">
          <ProjectIndex />
        </div>
      </div>

      {/* Webサイト制作デモ */}
      <div className="mt-28 grid gap-10 md:grid-cols-12">
        <Reveal className="min-w-0 md:col-span-5">
          <p className="label-mono text-ink-3">Frontend Samples</p>
          <h3 className="heading-ja mt-4 text-[1.6rem] text-ink">フロントエンド実装サンプル</h3>
          <p className="mt-4 lead-ja text-[0.875rem] text-ink-2">
            20業種のデザインを、動的ルーティング1セット（ラーメン店のみ専用ページ）で実装。CSS Variables によるテーマ切替・Unsplash画像・レスポンシブ対応。
          </p>
          <dl className="mt-8 grid grid-cols-3 border-y border-line">
            {demoStats.map(({ value, label }, i) => (
              <div key={label} className={`py-4 ${i > 0 ? "pl-4 border-l border-line" : ""}`}>
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block text-[2rem] font-medium tracking-tight text-ink leading-none">
                    {value}
                  </span>
                  <span className="mt-2 block text-xs text-ink-3">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="min-w-0 md:col-span-7" delay={100}>
          <details className="group rounded-[4px] border border-line bg-navy-deep text-white/85 open:shadow-none">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-3.5 [&::-webkit-details-marker]:hidden">
              <span className="font-mono text-xs text-white/70">設計を見る — demos/[slug]/page.tsx</span>
              <span className="font-mono text-xs text-accent-soft transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="faq-answer">
              <div>
                <pre className="overflow-x-auto border-t border-white/10 px-5 py-5 font-mono text-[0.75rem] leading-[1.7] text-white/80">
                  <code>{snippet}</code>
                </pre>
              </div>
            </div>
          </details>
        </Reveal>
      </div>

      <div className="mt-12">
        <DemoGallery
          demos={demos.map(({ slug, name, designConcept, highlights, layout }) => ({
            slug,
            name,
            designConcept,
            highlights,
            layout,
          }))}
        />
      </div>
    </Section>
  );
}
