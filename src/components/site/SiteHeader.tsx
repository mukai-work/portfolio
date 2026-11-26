import Link from "next/link";
import { Mark } from "./Mark";

const nav = [
  { href: "/#work", label: "これまでの仕事" },
  { href: "/#process", label: "進め方" },
  { href: "/#products", label: "製品" },
  { href: "/samples", label: "資料の見本" },
  { href: "/#pricing", label: "料金" },
  { href: "/#profile", label: "プロフィール" },
  { href: "/notes", label: "ブログ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="トップページへ">
          <Mark size={22} />
          <span className="whitespace-nowrap text-[0.9rem] font-bold tracking-[0.02em] text-ink sm:text-[0.95rem]">ムカイクリエイトスタジオ</span>
          <span className="hidden whitespace-nowrap text-[0.75rem] text-ink-3 2xl:inline">業務システムの設計と開発</span>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="サイト内ナビゲーション">
          {nav.map(({ href, label }) => (
            <Link key={href} href={href} className="whitespace-nowrap text-[0.85rem] text-ink-2 hover:text-green">
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-[4px] bg-green px-4 text-[0.85rem] font-semibold text-white hover:bg-[#24493f]"
        >
          相談する
        </Link>
      </div>
    </header>
  );
}
