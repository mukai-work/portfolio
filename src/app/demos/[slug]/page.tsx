import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

import { demos } from "@/data/demos";
import { ClassicLayout } from "@/components/demo/layouts/ClassicLayout";
import { EditorialLayout } from "@/components/demo/layouts/EditorialLayout";
import { BoldLayout } from "@/components/demo/layouts/BoldLayout";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  // ramen は src/app/demos/ramen/page.tsx で独自実装のため除外
  return demos.filter((d) => d.slug !== "ramen").map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const demo = demos.find((d) => d.slug === slug);
  if (!demo) return {};
  return {
    title: `${demo.name}のホームページデモ | ポートフォリオ`,
    description: demo.designConcept,
  };
}

export default async function DemoPage({ params }: { params: Params }) {
  const { slug } = await params;
  const demo = demos.find((d) => d.slug === slug);
  if (!demo) notFound();

  const themeStyle = {
    "--color-primary": demo.colors.primary,
    "--color-accent": demo.colors.accent,
    "--color-bg": demo.colors.background,
    "--color-text": demo.colors.text,
    "--color-text-light": demo.colors.textLight,
  } as React.CSSProperties;

  const layout = demo.layout ?? "classic";

  // dark テーマかどうかでナビゲーションの見た目を変える
  const navClass = demo.isDark
    ? "bg-black/40 hover:bg-black/60 text-white/90 border border-white/10"
    : "bg-white/80 hover:bg-white text-gray-800";

  return (
    <div style={themeStyle}>
      {/* 戻るナビゲーション */}
      <nav
        className="fixed top-4 left-4 z-50"
        aria-label="ポートフォリオへ戻る"
      >
        <Link
          href="/"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg backdrop-blur-md transition-colors ${navClass}`}
        >
          <ArrowLeft size={16} />
          ポートフォリオに戻る
        </Link>
      </nav>

      {layout === "editorial" ? (
        <EditorialLayout config={demo} />
      ) : layout === "bold" ? (
        <BoldLayout config={demo} />
      ) : (
        <ClassicLayout config={demo} />
      )}
    </div>
  );
}
