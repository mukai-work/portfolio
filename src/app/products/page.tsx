import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageIntro } from "@/components/site/PageIntro";
import { FlowDiagram } from "@/components/site/FlowDiagram";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "製品",
  description:
    "AI機能の精度検証（ハカル）やAI駆動開発の点検（ヘルピア）など、自分で設計・実装して公開している製品。動くデモとコード、実際に測った数字を載せています。",
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro label="ムカイクリエイトスタジオ" title="自分で作っている製品">
          受託の仕事とは別に、設計から実装・計測まで自分で行い、公開している製品です。どちらも「AIを数字で確かめる」ための道具で、デモはログインなしで見られ、コードはGitHubで読めます。数字は実際に動かして測った値だけを載せています。
        </PageIntro>

        {/* 製品の目次 */}
        <nav aria-label="製品の目次" className="border-b border-line">
          <ul className="mx-auto flex max-w-[1080px] flex-wrap gap-x-6 gap-y-2 px-5 py-4 text-[0.9rem] md:px-8">
            {products.map((p) => (
              <li key={p.slug}>
                <a href={`#${p.slug}`} className="text-ink-2 hover:text-green">
                  <span className="font-bold text-ink">{p.name}</span>　{p.tagline}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {products.map((p, idx) => (
          <section key={p.slug} id={p.slug} className={`scroll-mt-16 ${idx > 0 ? "border-t border-line" : ""}`}>
            <div className="mx-auto max-w-[1080px] px-5 py-12 md:px-8 md:py-16">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="heading-ja text-[1.6rem] text-ink">{p.name}</h2>
                <span className="text-[0.8rem] tracking-[0.1em] text-ink-3">{p.reading}</span>
                <span className="rounded-[3px] bg-green-soft px-2 py-0.5 text-[0.75rem] font-semibold text-green">{p.status}</span>
              </div>
              <p className="mt-3 text-[1.1rem] font-semibold leading-relaxed text-ink">{p.tagline}</p>
              <p className="mt-3 max-w-[46em] text-[0.95rem] leading-[1.9] text-ink-2">{p.summary}</p>

              <h3 className="mt-10 text-[1rem] font-bold text-ink">仕組み</h3>
              <FlowDiagram steps={p.flow} caption={p.flowCaption} label={`${p.name}の仕組み`} />

              <h3 className="mt-12 text-[1rem] font-bold text-ink">実際の画面</h3>
              <div className="mt-5 grid gap-8">
                {p.shots.map((s) => (
                  <figure key={s.src}>
                    <a
                      href={p.demoUrl}
                      className="block overflow-hidden rounded-[6px] border border-line bg-paper shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_-12px_rgb(31_36_33/0.18)] transition hover:border-green"
                    >
                      {/* 画面の文字を読めるよう、縮めずに元の解像度（横2080px）のまま配る */}
                      <Image src={s.src} alt={s.alt} width={2080} height={1300} unoptimized className="h-auto w-full" />
                    </a>
                    <figcaption className="mt-2.5 text-[0.85rem] text-ink-2">{s.caption}</figcaption>
                  </figure>
                ))}
              </div>

              <h3 className="mt-12 text-[1rem] font-bold text-ink">分かったこと・約束</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.92rem] leading-relaxed text-ink-2">
                {p.points.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="mt-4 text-[0.8rem] text-ink-3">使っている技術: {p.stack}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={p.demoUrl}
                  className="inline-flex h-11 items-center rounded-[4px] bg-green px-6 text-[0.92rem] font-semibold text-white hover:bg-[#24493f]"
                >
                  デモを見る
                </a>
                <a
                  href={p.codeUrl}
                  className="inline-flex h-11 items-center rounded-[4px] border border-line px-6 text-[0.92rem] text-ink hover:border-green hover:text-green"
                >
                  コードを見る（GitHub）
                </a>
              </div>
            </div>
          </section>
        ))}

        <div className="border-t border-line bg-surface">
          <div className="mx-auto max-w-[1080px] px-5 py-10 text-[0.95rem] text-ink-2 md:px-8">
            <p>
              作った人の経歴と技術スタックは
              <Link href="/engineer" className="text-green underline underline-offset-2">
                エージェント・開発会社の方へ
              </Link>
              にまとめています。製品を使った検証や、同じ考え方での開発のご相談は
              <Link href="/#contact" className="text-green underline underline-offset-2">
                お問い合わせ
              </Link>
              からどうぞ。
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
