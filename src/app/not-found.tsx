import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1120px] px-5 py-24 md:px-10">
        <p className="label-gold">404</p>
        <h1 className="heading-ja mt-3 text-h2 text-green">お探しのページが見つかりませんでした</h1>
        <p className="lead-ja mt-5 text-ink-2">
          サイトを作り直したため、以前のページの場所が変わっています。お手数ですが、下のページからお探しください。
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["/", "トップページ"],
            ["/cases", "事例"],
            ["/samples", "成果物サンプル"],
            ["/#contact", "ご相談の窓口"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                className="block rounded-[6px] border border-line bg-card p-5 font-medium text-green transition-colors hover:border-green/50"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
