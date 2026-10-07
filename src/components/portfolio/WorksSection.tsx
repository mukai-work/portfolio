import { ArrowRight } from "lucide-react";
import { demos } from "@/data/demos";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DemoGallery } from "./DemoGallery";
import { ProjectIndex } from "./ProjectIndex";

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
            販売中・運用中のプロダクト、受託案件、個人開発のツール、業種別のWebデモをまとめています。
            開発だけでなく、動画・Web制作・自動化まで実物でご確認いただけます。
            受託案件は守秘のため、クライアント名を伏せて概要のみ掲載しています。
          </p>
        </Reveal>
      </div>

      {/* プロダクト・制作物 */}
      <div id="more-works" className="mt-14 scroll-mt-24">
        <ProjectIndex />
      </div>

      {/* Works内CTA */}
      <Reveal className="mt-12">
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
