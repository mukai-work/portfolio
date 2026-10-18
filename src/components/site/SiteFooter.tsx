import Link from "next/link";
import { Mark } from "./Mark";

const links = [
  { href: "/cases", label: "これまでの仕事" },
  { href: "/samples", label: "資料の見本" },
  { href: "/notes", label: "書いたもの" },
  { href: "/engineer", label: "エージェント・開発会社の方へ" },
  { href: "/works", label: "自分で作ったもの・Webデモ" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-surface text-ink-2">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-6 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="flex items-center gap-2.5">
          <Mark size={24} />
          <div>
            <p className="text-[0.95rem] font-bold text-ink">ムカイ</p>
            <p className="text-[0.75rem] text-ink-3">システムエンジニア（個人事業主）／大阪</p>
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-[0.85rem]" aria-label="フッターナビゲーション">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-green">
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="mx-auto max-w-[1080px] px-5 pb-8 text-[0.75rem] text-ink-3 md:px-8">© {new Date().getFullYear()} mukai.works</p>
    </footer>
  );
}
