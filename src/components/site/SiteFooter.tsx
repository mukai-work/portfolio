import Link from "next/link";
import { Mark } from "./Mark";

const links = [
  { href: "/cases", label: "事例" },
  { href: "/samples", label: "成果物サンプル" },
  { href: "/engineer", label: "エージェント・開発会社の方へ" },
  { href: "/works", label: "制作物・Webデモ" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-green-deep text-paper/85">
      <div className="mx-auto max-w-[1120px] px-5 py-12 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <Mark size={34} reverse />
            <div>
              <p className="font-serif text-lg tracking-[0.25em] text-paper">ムカイ</p>
              <p className="text-[0.75rem] tracking-[0.12em]">システムエンジニア ／ 大阪</p>
            </div>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 text-[0.85rem]" aria-label="フッターナビゲーション">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="transition-colors hover:text-paper">
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 h-px w-12 bg-gold" aria-hidden />
        <p className="mt-6 font-serif text-[0.95rem] tracking-[0.12em] text-paper/90">
          つくれるエンジニアが、ITの判断に伴走します。
        </p>
        <p className="mt-3 text-[0.8rem] text-paper/70">© {new Date().getFullYear()} mukai.works</p>
      </div>
    </footer>
  );
}
