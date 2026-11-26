import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageIntro } from "@/components/site/PageIntro";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "製品（ムカイクリエイトスタジオ）",
  description:
    "AI機能の精度検証（ハカル）やAI駆動開発の点検（ヘルピア）など、自分で設計・実装して公開している製品。動くデモとコード、実際に測った数字を載せています。",
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro label="ムカイクリエイトスタジオ" title="自分で作っている製品">
          受託の仕事とは別に、設計から実装・計測まで自分で行い、公開している製品です。どれもデモはログインなしで見られ、コードはGitHubで読めます。数字は実際に動かして測った値だけを載せています。
        </PageIntro>
        <div className="mx-auto max-w-[1080px] px-5 py-12 md:px-8">
          <div className="grid gap-6">
            {products.map((p) => (
              <article key={p.slug} className="rounded-[6px] border border-line bg-paper p-6 md:p-8">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="heading-ja text-[1.4rem] text-ink">{p.name}</h2>
                  <span className="text-[0.8rem] tracking-[0.08em] text-ink-3">{p.reading}</span>
                  <span className="rounded-[3px] bg-surface px-2 py-0.5 text-[0.75rem] text-ink-2">{p.status}</span>
                </div>
                <p className="mt-2 text-[1rem] font-semibold text-ink">{p.tagline}</p>
                <p className="mt-3 text-[0.95rem] leading-[1.9] text-ink-2">{p.summary}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[0.9rem] text-ink-2">
                  {p.points.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {p.shots.map((s) => (
                    <a key={s.src} href={p.demoUrl} className="block overflow-hidden rounded-[4px] border border-line hover:border-green">
                      <Image src={s.src} alt={s.alt} width={1200} height={750} className="h-auto w-full" sizes="(min-width: 768px) 500px, 100vw" />
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-[0.8rem] text-ink-3">使っている技術: {p.stack}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={p.demoUrl}
                    className="inline-flex h-10 items-center rounded-[4px] bg-green px-5 text-[0.9rem] font-semibold text-white hover:bg-[#24493f]"
                  >
                    デモを見る
                  </a>
                  <a
                    href={p.codeUrl}
                    className="inline-flex h-10 items-center rounded-[4px] border border-line px-5 text-[0.9rem] text-ink hover:border-green hover:text-green"
                  >
                    コードを見る（GitHub）
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 border-t border-line pt-8 text-[0.95rem] text-ink-2">
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
