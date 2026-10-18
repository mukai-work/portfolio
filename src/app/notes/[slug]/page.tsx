import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { notes } from "@/data/notes";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const n = notes.find((x) => x.slug === slug);
  if (!n) return {};
  return { title: n.title, description: n.lead };
}

export default async function NotePage({ params }: { params: Params }) {
  const { slug } = await params;
  const n = notes.find((x) => x.slug === slug);
  if (!n) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <article className="mx-auto max-w-[760px] px-5 py-12 md:px-8 md:py-16">
          <Link href="/notes" className="inline-flex items-center gap-1 text-[0.85rem] text-ink-3 hover:text-green">
            <ArrowLeft size={14} /> 書いたもの一覧
          </Link>
          <p className="label-gold mt-6">書いたもの</p>
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
          <div className="mt-14 border-t border-line pt-8">
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
