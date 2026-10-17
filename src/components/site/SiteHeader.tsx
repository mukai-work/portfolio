import Link from "next/link";
import { Mark } from "./Mark";

const nav = [
  { href: "/#consult", label: "ご相談の例" },
  { href: "/#process", label: "進め方" },
  { href: "/cases", label: "事例" },
  { href: "/samples", label: "成果物サンプル" },
  { href: "/#pricing", label: "料金" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-4 px-5 md:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="トップページへ">
          <Mark size={26} />
          <span className="font-serif text-[1.05rem] font-semibold tracking-[0.2em] text-green">ムカイ</span>
          <span className="hidden text-[0.7rem] tracking-[0.12em] text-ink-3 sm:inline">mukai.works</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="サイト内ナビゲーション">
          {nav.map(({ href, label }) => (
            <Link key={href} href={href} className="text-[0.85rem] text-ink-2 transition-colors hover:text-green">
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="inline-flex h-10 items-center rounded-[4px] bg-green px-4 text-[0.85rem] font-medium text-paper transition-colors hover:bg-green-deep"
        >
          相談する
        </Link>
      </div>
    </header>
  );
}
