import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { publishedNotes } from "@/data/notes";
import { cases } from "@/data/cases";
import { samples } from "@/data/samples";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return publishedNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const n = publishedNotes().find((x) => x.slug === slug);
  if (!n) return {};
  return {
    title: n.title,
    description: n.lead,
    alternates: { canonical: `/notes/${n.slug}` },
    openGraph: { type: "article", title: n.title, description: n.lead, publishedTime: n.date },
  };
}

export default async function NotePage({ params }: { params: Params }) {
  const { slug } = await params;
  const n = publishedNotes().find((x) => x.slug === slug);
  if (!n) notFound();
  const relatedCases = (n.related?.cases ?? []).map((s) => cases.find((c) => c.slug === s)).filter((c) => c !== undefined);
  const relatedSamples = (n.related?.samples ?? []).map((s) => samples.find((x) => x.slug === s)).filter((x) => x !== undefined);
  const others = publishedNotes().filter((x) => x.slug !== n.slug).slice(0, 3);
  // 検索結果に記事として認識させるための構造化データ
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: n.title,
    description: n.lead,
    datePublished: n.date,
    author: { "@id": "https://mukai.works/#person", "@type": "Person", name: "ムカイ", url: "https://mukai.works" },
    mainEntityOfPage: `https://mukai.works/notes/${n.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main>
        <article className="mx-auto max-w-[760px] px-5 py-12 md:px-8 md:py-16">
          <Link href="/notes" className="inline-flex items-center gap-1 text-[0.85rem] text-ink-3 hover:text-green">
            <ArrowLeft size={14} /> ブログ一覧
          </Link>
          <p className="label-gold mt-6">{n.category}</p>
          <h1 className="heading-ja mt-2 text-h2 text-ink">{n.title}</h1>
          <p className="mt-3 text-[0.8rem] text-ink-3">
            {n.date.replaceAll("-", ".")}　ムカイ
          </p>
          <p className="mt-8 text-[1.05rem] font-bold leading-relaxed text-ink">{n.lead}</p>
          {n.sections.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="text-[1.15rem] font-bold text-ink">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-4 text-[1rem] leading-[1.95]">
                  {p}
                </p>
              ))}
            </section>
          ))}
          {(relatedCases.length > 0 || relatedSamples.length > 0) && (
            <section className="mt-14 border-t border-line pt-8">
              <h2 className="text-[1rem] font-bold text-ink">関連する事例・資料</h2>
              <ul className="mt-3 space-y-2 text-[0.95rem]">
                {relatedCases.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/cases/${c.slug}`} className="text-green underline underline-offset-4">
                      事例：{c.headline}
                    </Link>
                  </li>
                ))}
                {relatedSamples.map((x) => (
                  <li key={x.slug}>
                    <a href={`/samples/${x.slug}.pdf`} className="text-green underline underline-offset-4">
                      資料の見本：{x.title}（PDF）
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {others.length > 0 && (
            <section className="mt-10 border-t border-line pt-8">
              <h2 className="text-[1rem] font-bold text-ink">ほかの記事</h2>
              <ul className="mt-3 space-y-2 text-[0.95rem]">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/notes/${o.slug}`} className="text-green underline underline-offset-4">
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <div className="mt-10 border-t border-line pt-8">
            <p className="text-[1rem] font-bold text-ink">自社の場合について相談したい方へ</p>
            <p className="mt-2 text-[0.92rem] text-ink-2">今の状況を伺い、進め方の方向性をお伝えします。</p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex h-11 items-center rounded-[4px] bg-green px-5 text-[0.9rem] font-semibold text-white hover:bg-[#24493f]"
            >
              相談する
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
