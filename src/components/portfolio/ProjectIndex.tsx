"use client";

import Image from "next/image";
import { useState } from "react";
import { flushSync } from "react-dom";
import { ArrowUpRight } from "lucide-react";
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

type Filter = "all" | ProjectCategory;

const MOBILE_INITIAL = 4;

const labelOf = Object.fromEntries(projectCategories.map((c) => [c.key, c.label]));

function Links({ project }: { project: Project }) {
  if (!project.links?.length) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
      {project.links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-[0.8125rem] font-medium text-accent-ink hover:underline underline-offset-4"
        >
          {l.label}
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      ))}
    </div>
  );
}

function Tech({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <span
          key={t}
          className="font-mono text-[0.6875rem] px-2 py-0.5 rounded-[2px] border border-line-strong text-ink-2"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function ProjectIndex() {
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);

  const select = (next: Filter) => {
    if (next === filter) return;
    const apply = () => flushSync(() => setFilter(next));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) apply();
    else document.startViewTransition(apply);
  };

  const visible = projects.filter((p) => filter === "all" || p.categories.includes(filter));
  const featured = visible.find((p) => p.image);
  const rest = visible.filter((p) => p !== featured);

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "すべて", count: projects.length },
    ...projectCategories.map((c) => ({
      key: c.key as Filter,
      label: c.label,
      count: projects.filter((p) => p.categories.includes(c.key)).length,
    })),
  ];

  return (
    <div>
      <div role="group" aria-label="分野で絞り込み" className="flex flex-wrap gap-2 mb-8">
        {filters.map(({ key, label, count }) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => select(key)}
              aria-pressed={active}
              className={`h-9 px-4 rounded-[4px] border text-[0.8125rem] transition-colors ${
                active
                  ? "bg-ink border-ink text-paper"
                  : "border-line-strong text-ink-2 hover:border-ink hover:text-ink"
              }`}
            >
              {label}
              <span className={`ml-2 font-mono text-[0.7rem] ${active ? "text-paper/60" : "text-ink-3"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {featured && (
        <article
          className="grid overflow-hidden rounded-[4px] border border-line bg-paper md:grid-cols-[1.1fr_1fr]"
          style={{ viewTransitionName: `project-${featured.slug}` }}
        >
          <div className="relative aspect-[16/10] border-b border-line md:aspect-auto md:min-h-[300px] md:border-b-0 md:border-r">
            <Image
              src={featured.image!}
              alt={`${featured.title}の紹介ページ`}
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-ink-3">
                {featured.categories.map((c) => labelOf[c]).join(" · ")}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[0.7rem] text-ink-2">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                {featured.status}
              </span>
            </div>
            <h4 className="mt-5 text-[1.75rem] font-medium tracking-tight text-ink">{featured.title}</h4>
            <p className="mt-1 text-[0.875rem] font-medium text-ink-2">{featured.kind}</p>
            <p className="mt-4 flex-1 text-[0.8125rem] leading-[1.85] text-ink-2">{featured.summary}</p>
            <div className="mt-5">
              <Tech tech={featured.tech} />
            </div>
            <Links project={featured} />
          </div>
        </article>
      )}

      <ol className={`border-t border-ink ${featured ? "mt-8" : ""}`}>
        {rest.map((p, i) => (
          <li
            key={p.slug}
            className={`${!expanded && i >= MOBILE_INITIAL ? "hidden md:grid" : "grid"} gap-x-8 gap-y-3 py-7 border-b border-line md:grid-cols-[220px_1fr]`}
            style={{ viewTransitionName: `project-${p.slug}` }}
          >
            <div>
              <p className="font-mono text-[0.7rem] tracking-[0.1em] text-ink-3">
                {p.categories.map((c) => labelOf[c]).join(" · ")}
              </p>
              <p className="mt-2 text-[0.75rem] text-ink-2">{p.status}</p>
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h4 className="heading-ja text-[1.1rem] text-ink">{p.title}</h4>
                <span className="text-[0.75rem] text-ink-3">{p.kind}</span>
              </div>
              <p className="mt-3 text-[0.8125rem] leading-[1.85] text-ink-2 max-w-[60em]">{p.summary}</p>
              <div className="mt-4">
                <Tech tech={p.tech} />
              </div>
              <Links project={p} />
            </div>
          </li>
        ))}
      </ol>

      {!expanded && rest.length > MOBILE_INITIAL && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="md:hidden mt-5 w-full h-12 rounded-[4px] border border-line-strong text-[0.875rem] text-ink-2 hover:border-ink hover:text-ink transition-colors"
        >
          残り{rest.length - MOBILE_INITIAL}件を表示
        </button>
      )}
    </div>
  );
}
