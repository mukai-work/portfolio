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
        <PageIntro label="事例" title="これまでの仕事">
          守秘のため会社名・サービス名は伏せ、業種と規模までを書いています。数字は、実際に確認できたものだけを載せています。
        </PageIntro>
        <div className="mx-auto max-w-[1080px] px-5 py-14 md:px-8">
          {[
            { title: "受託・参画した案件", items: cases.filter((c) => c.kind !== "自社開発") },
            { title: "自分で作って運用しているもの", items: cases.filter((c) => c.kind === "自社開発") },
          ].map((group) => (
            <section key={group.title} className="mb-14 last:mb-0">
              <h2 className="mb-4 text-[1.05rem] font-bold text-ink">
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
                          className={`mr-2 rounded-[3px] px-2 py-0.5 text-[0.75rem] ${
                            c.kind === "自社開発" ? "bg-surface text-ink-2" : "bg-green-soft text-green"
                          }`}
                        >
                          {c.kind === "自社開発" ? "自作" : c.kind}
                        </span>
                        {c.client}
                      </p>
                      <h3 className="mt-2 text-[1.1rem] font-bold leading-snug text-ink group-hover:text-green">
                        {c.headline}
                      </h3>
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
