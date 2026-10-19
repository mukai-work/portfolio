import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** エージェント向けに、コードを公開している個人開発を設計の要点つきで見せる */
const SLUGS = ["genba-nippo"];

export function PersonalDevSection() {
  const items = SLUGS.map((s) => projects.find((p) => p.slug === s)).filter((p) => p !== undefined);

  return (
    <Section id="personal-dev">
      <SectionHeading
        title="個人開発"
        description="実務とは別に、個人で設計からテストまで作り、コードを公開しているものです。実務経歴ではありません。"
      />

      <div className="mt-10 grid gap-8">
        {items.map((p) => (
          <Reveal key={p.slug}>
            <article className="overflow-hidden rounded-[4px] border border-line bg-paper">
              {p.image && (
                <div className="relative aspect-[1600/852] border-b border-line bg-surface">
                  <Image
                    src={p.image}
                    alt={`${p.title}の工程表画面（予定と実績）`}
                    fill
                    sizes="(min-width: 1080px) 1016px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[0.75rem] text-ink-3">{p.kind}</p>
                  <span className="inline-flex items-center gap-1.5 text-[0.7rem] text-ink-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                    {p.status}
                  </span>
                </div>
                <h3 className="heading-ja mt-3 text-[1.3rem] text-ink">{p.title}</h3>
                <p className="mt-4 text-[0.875rem] leading-[1.85] text-ink-2 max-w-[60em]">{p.summary}</p>

                {p.highlights && (
                  <>
                    <p className="mt-6 text-[0.85rem] font-bold text-ink">設計・テストで取り組んだこと</p>
                    <ul className="mt-3 space-y-2">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="grid grid-cols-[1rem_1fr] text-[0.875rem] leading-relaxed text-ink-2"
                        >
                          <span className="font-mono text-accent-ink" aria-hidden>
                            –
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.6875rem] px-2 py-0.5 rounded-[2px] border border-line-strong text-ink-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.links && (
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-[0.875rem] font-medium text-accent-ink hover:underline underline-offset-4"
                      >
                        {l.label}でコードを見る
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
