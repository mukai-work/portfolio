import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { cases } from "@/data/cases";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: c.headline, description: c.takeaway };
}

function Part({ no, title, items }: { no: string; title: string; items: string[] }) {
  return (
    <section className="grid gap-3 border-t border-line py-8 md:grid-cols-[200px_1fr] md:gap-10">
      <h2 className="font-serif text-[1.1rem] font-semibold text-green">
        <span className="mr-2 text-gold">{no}</span>
        {title}
      </h2>
      <ul className="space-y-2.5">
        {items.map((t) => (
          <li key={t} className="relative pl-5 text-[0.98rem] leading-relaxed">
            <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function CasePage({ params }: { params: Params }) {
  const { slug } = await params;
  const index = cases.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  const c = cases[index];
  const next = cases[(index + 1) % cases.length];

  return (
    <>
      <SiteHeader />
      <main>
        <div className="border-b border-line bg-surface">
          <div className="mx-auto max-w-[880px] px-5 py-12 md:px-10 md:py-16">
            <Link href="/cases" className="inline-flex items-center gap-1 text-[0.85rem] text-ink-3 hover:text-green">
              <ArrowLeft size={14} /> 事例一覧
            </Link>
            <p className="label-gold mt-6">CASE STUDY</p>
            <h1 className="heading-ja mt-3 text-h2 text-green">{c.headline}</h1>
            <dl className="mt-8 grid gap-x-8 gap-y-3 text-[0.88rem] sm:grid-cols-[auto_1fr]">
              <dt className="text-ink-3">ご依頼元</dt>
              <dd>{c.client}</dd>
              <dt className="text-ink-3">期間</dt>
              <dd>{c.period}</dd>
              <dt className="text-ink-3">私の役割</dt>
              <dd>{c.role}</dd>
            </dl>
          </div>
        </div>

        <article className="mx-auto max-w-[880px] px-5 py-10 md:px-10">
          <p className="rounded-[6px] bg-green-soft p-6 font-serif text-[1.05rem] leading-relaxed text-green">
            {c.takeaway}
          </p>
          <div className="mt-10">
            <Part no="01" title="状況" items={c.situation} />
            <Part no="02" title="困っていたこと" items={c.problem} />
            <Part no="03" title="やったこと" items={c.actions} />
            <Part no="04" title="結果" items={c.results} />
            <section className="grid gap-3 border-t border-line py-8 md:grid-cols-[200px_1fr] md:gap-10">
              <h2 className="font-serif text-[1.1rem] font-semibold text-green">
                <span className="mr-2 text-gold">05</span>使った技術
              </h2>
              <div className="flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <span key={s} className="rounded-[4px] border border-line bg-card px-2.5 py-1 text-[0.82rem] text-ink-2">
                    {s}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-6 rounded-[6px] border border-line bg-card p-7">
            <h2 className="font-serif text-[1.1rem] font-semibold text-green">この経験が生きるご相談</h2>
            <ul className="mt-3 space-y-1.5 text-[0.95rem]">
              {c.fitsFor.map((t) => (
                <li key={t}>・{t}</li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-[4px] bg-green px-5 text-[0.9rem] font-medium text-paper hover:bg-green-deep"
            >
              似たことで困っている、と相談する <ArrowRight size={15} />
            </Link>
            <p className="mt-4 text-[0.8rem] text-ink-3">
              お客様の環境や予算は一社ごとに違うため、同じやり方をそのまま当てはめるのではなく、改めて設計します。
            </p>
          </section>

          {c.note && <p className="mt-6 text-[0.8rem] text-ink-3">※ {c.note}</p>}

          <Link href={`/cases/${next.slug}`} className="group mt-12 block border-t border-line pt-6">
            <p className="text-[0.78rem] text-ink-3">次の事例</p>
            <p className="mt-1 font-serif text-[1.05rem] text-green group-hover:underline">{next.headline}</p>
          </Link>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
