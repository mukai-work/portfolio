import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageIntro } from "@/components/site/PageIntro";
import { cases } from "@/data/cases";

export const metadata: Metadata = {
  title: "事例",
  description:
    "業務システムのクラウド移行、確認作業の仕組み化、AIを社外に出さずに使うツールなど、これまでの仕事の事例です。",
};

export default function CasesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro label="CASES" title="これまでの仕事から">
          守秘のため会社名・サービス名は伏せ、業種と規模までを書いています。
          数字は、実際に確認できたものだけを載せています。
          中小企業のIT相談で公開できる事例はまだありません。その進め方は、小さな会社の受発注を題材にした
          <Link href="/samples" className="text-green underline decoration-gold/60 underline-offset-4">成果物サンプル</Link>
          で、最初の相談から引き継ぎまで公開しています。
        </PageIntro>
        <div className="mx-auto max-w-[1120px] px-5 py-14 md:px-10">
          {[
            { title: "お客様の案件", items: cases.filter((c) => c.kind !== "自社開発") },
            { title: "自分で作って運用しているもの", items: cases.filter((c) => c.kind === "自社開発") },
          ].map((group) => (
            <section key={group.title} className="mb-14 last:mb-0">
              <h2 className="mb-4 font-serif text-[1.1rem] font-semibold text-green">
                {group.title}
                <span className="ml-2 text-[0.8rem] font-normal text-ink-3">{group.items.length}件</span>
              </h2>
            <ul className="divide-y divide-line border-y border-line">
              {group.items.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/cases/${c.slug}`}
                    className="group grid gap-3 py-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10"
                  >
                    <div>
                      <p className="text-[0.78rem] text-ink-3">
                        <span
                          className={`mr-2 rounded-full px-2 py-0.5 ${
                            c.kind === "自社開発" ? "bg-gold-soft text-gold-ink" : "bg-green-soft text-green"
                          }`}
                        >
                          {c.kind}
                        </span>
                        {c.client}
                      </p>
                      <h3 className="mt-2 font-serif text-[1.25rem] font-semibold leading-snug text-green">
                        {c.headline}
                      </h3>
                      <p className="mt-2 max-w-[44em] text-[0.9rem] leading-relaxed text-ink-2">{c.takeaway}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[0.85rem] text-green">
                      読む <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
