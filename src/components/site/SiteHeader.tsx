import Link from "next/link";
import { Mark } from "./Mark";

const nav = [
  { href: "/#work", label: "これまでの仕事" },
  { href: "/#process", label: "進め方" },
  { href: "/samples", label: "資料の見本" },
  { href: "/#pricing", label: "料金" },
  { href: "/#profile", label: "プロフィール" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="トップページへ">
          <Mark size={22} />
          <span className="text-[0.95rem] font-bold tracking-[0.04em] text-ink">ムカイ</span>
          <span className="hidden text-[0.75rem] text-ink-3 sm:inline">業務システムの設計と開発</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="サイト内ナビゲーション">
          {nav.map(({ href, label }) => (
            <Link key={href} href={href} className="text-[0.85rem] text-ink-2 hover:text-green">
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="inline-flex h-9 items-center rounded-[4px] bg-green px-4 text-[0.85rem] font-semibold text-white hover:bg-[#24493f]"
        >
          相談する
        </Link>
      </div>
    </header>
  );
}
