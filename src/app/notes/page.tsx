import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageIntro } from "@/components/site/PageIntro";
import { notes } from "@/data/notes";

export const metadata: Metadata = {
  title: "コラム",
  description: "ITに詳しくない経営者の方向けに、システムやAIを入れる前に考えておきたいことを短くまとめています。",
};

export default function NotesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro label="NOTES" title="コラム">
          ITに詳しくない経営者の方向けに、システムやAIを入れる前に考えておきたいことを短くまとめています。
        </PageIntro>
        <div className="mx-auto max-w-[1120px] px-5 py-14 md:px-10">
          <ul className="divide-y divide-line border-y border-line">
            {notes.map((n) => (
              <li key={n.slug}>
                <Link href={`/notes/${n.slug}`} className="group grid gap-2 py-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
                  <div>
                    <h2 className="font-serif text-[1.25rem] font-semibold leading-snug text-green">{n.title}</h2>
                    <p className="mt-2 text-[0.92rem] text-ink-2">{n.lead}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[0.85rem] text-green">
                    読む <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
