"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { flushSync } from "react-dom";
import { ArrowUpRight } from "lucide-react";
import type { DemoConfig } from "@/data/demos";
import { SpotlightGroup } from "@/components/ui/Spotlight";

const MOBILE_INITIAL = 6;

type Category = "all" | "food" | "beauty" | "care" | "life";

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "food", label: "飲食" },
  { key: "beauty", label: "美容・健康" },
  { key: "care", label: "医療・教育" },
  { key: "life", label: "暮らし・専門店" },
];

const categoryOf: Record<string, Exclude<Category, "all">> = {
  restaurant: "food",
  cafe: "food",
  ramen: "food",
  izakaya: "food",
  sushi: "food",
  bakery: "food",
  "beauty-salon": "beauty",
  "nail-salon": "beauty",
  gym: "beauty",
  yoga: "beauty",
  seitai: "beauty",
  esthetic: "beauty",
  dental: "care",
  juku: "care",
  "real-estate": "life",
  "pet-salon": "life",
  "flower-shop": "life",
  wedding: "life",
  "photo-studio": "life",
  interior: "life",
};

type Props = {
  demos: Pick<DemoConfig, "slug" | "name" | "designConcept" | "highlights" | "layout">[];
};

export function DemoGallery({ demos }: Props) {
  const [filter, setFilter] = useState<Category>("all");
  const [expanded, setExpanded] = useState(false);

  const select = (next: Category) => {
    if (next === filter) return;
    const apply = () => flushSync(() => setFilter(next));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) apply();
    else document.startViewTransition(apply);
  };

  const visible = demos.filter((d) => filter === "all" || categoryOf[d.slug] === filter);

  return (
    <div>
      <div role="group" aria-label="業種で絞り込み" className="flex flex-wrap gap-2 mb-8">
        {categories.map(({ key, label }) => {
          const count =
            key === "all" ? demos.length : demos.filter((d) => categoryOf[d.slug] === key).length;
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => select(key)}
              aria-pressed={active}
              className={`h-9 px-4 rounded-[4px] border text-[0.8125rem] transition-colors ${
                active
                  ? "bg-ink border-ink text-white"
                  : "border-line-strong text-ink-2 hover:border-ink hover:text-ink"
              }`}
            >
              {label}
              <span className={`ml-2 font-mono text-[0.7rem] ${active ? "text-white/60" : "text-ink-3"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <SpotlightGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((demo, i) => {
          const number = demos.indexOf(demo) + 1;
          const featured = filter === "all" && number === 1;
          const collapsed = !expanded && i >= MOBILE_INITIAL;
          return (
            <Link
              key={demo.slug}
              href={`/demos/${demo.slug}`}
              className={`spot group ${collapsed ? "hidden sm:flex" : "flex"} flex-col rounded-[4px] border border-line bg-paper transition-colors duration-300 hover:border-line-strong [content-visibility:auto] [contain-intrinsic-block-size:auto_420px] min-w-0 ${
                featured ? "sm:col-span-2 lg:row-span-2" : ""
              }`}
              style={{ viewTransitionName: `demo-${demo.slug}` }}
            >
              {/* 最小構成のブラウザフレーム */}
              <div className="flex items-center gap-3 h-8 px-3 border-b border-line">
                <span className="flex gap-1.5" aria-hidden>
                  <span className="w-2 h-2 rounded-full border border-line-strong" />
                  <span className="w-2 h-2 rounded-full border border-line-strong" />
                  <span className="w-2 h-2 rounded-full border border-line-strong" />
                </span>
                <span className="font-mono text-[0.65rem] text-ink-3 truncate">/demos/{demo.slug}</span>
              </div>
              <div className={`relative aspect-[16/10] overflow-hidden bg-surface ${featured ? "lg:aspect-auto lg:flex-1 lg:min-h-[320px]" : ""}`}>
                <Image
                  src={`/demos/${demo.slug}.webp`}
                  alt={`${demo.name}のホームページデモのスクリーンショット`}
                  fill
                  sizes={featured ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  priority={featured}
                />
              </div>
              <div className={`flex flex-col p-5 ${featured ? "" : "flex-1"}`}>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="font-mono text-[0.7rem] tracking-[0.12em] text-ink-3">
                    CASE {String(number).padStart(2, "0")}
                  </p>
                  {demo.layout && (
                    <span className="font-mono text-[0.65rem] text-ink-3">{demo.layout}</span>
                  )}
                </div>
                <h4 className="heading-ja text-[1.05rem] text-ink flex items-center gap-1.5">
                  {demo.name}
                  <ArrowUpRight
                    size={15}
                    className="text-ink-3 transition-all duration-300 group-hover:text-accent-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </h4>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-2 line-clamp-2">
                  {demo.designConcept}
                </p>
                <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                  {demo.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[0.6875rem] px-1.5 py-0.5 rounded-[2px] bg-surface text-ink-2"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </SpotlightGroup>

      {!expanded && visible.length > MOBILE_INITIAL && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="sm:hidden mt-5 w-full h-12 rounded-[4px] border border-line-strong text-[0.875rem] text-ink-2 hover:border-ink hover:text-ink transition-colors"
        >
          残り{visible.length - MOBILE_INITIAL}件を表示
        </button>
      )}
    </div>
  );
}
