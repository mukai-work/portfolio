import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageIntro } from "@/components/site/PageIntro";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";

export const metadata: Metadata = {
  title: "エージェント・開発会社の方へ",
  description: "C#／ASP.NETを中心とした業務系Webシステム開発の実務経歴と技術スタック。準委任での参画条件。",
};

const terms = [
  ["主な領域", "C#／ASP.NET（MVC・Web API）の業務系Webシステム。Vue.js・Oracle・SQL Server・Azure"],
  ["契約", "準委任（個人事業主）。エンド直・元請け直を優先"],
  ["稼働", "月140〜160時間。本格参画は2026年12月〜を目安に相談可（条件により前倒しも相談可）"],
  ["単価", "月額70万円〜（応相談）"],
  ["勤務", "フルリモート（大阪在住）。初日や数か月に一度の出社は内容次第で相談可"],
];

export default function EngineerPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro label="FOR AGENTS & DEV TEAMS" title="エージェント・開発会社の方へ">
          業務系Webシステムの開発経歴と、参画の条件をまとめています。スキルシート（Excel）は面談前にお送りします。
        </PageIntro>
        <div className="mx-auto max-w-[1120px] px-5 py-12 md:px-10">
          <dl className="overflow-hidden rounded-[6px] border border-line bg-card">
            {terms.map(([k, v], i) => (
              <div
                key={k}
                className={`grid gap-1 p-5 md:grid-cols-[160px_1fr] md:gap-8 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <dt className="font-medium text-green">{k}</dt>
                <dd className="text-[0.95rem] text-ink-2">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[0.85rem] text-ink-3">
            ご連絡は
            <Link href="/#contact" className="text-green underline decoration-gold/60 underline-offset-4">
              トップページのご相談窓口（クラウドワークス／XのDM）
            </Link>
            から。面談では、話せる範囲で案件の詳細とコードの書き方をご説明します。NDAにも対応します。
          </p>
        </div>
        <ExperienceSection />
        <SkillsSection />
      </main>
      <SiteFooter />
    </>
  );
}
