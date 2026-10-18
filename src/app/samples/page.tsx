import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageIntro } from "@/components/site/PageIntro";
import { samples } from "@/data/samples";

export const metadata: Metadata = {
  title: "成果物サンプル",
  description:
    "ご相談シート、提案書、要件定義書、構成図、操作手順書。依頼すると何が返ってくるかを、架空の案件で一続きの見本にしました。",
};

export default function SamplesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro label="資料の見本" title="お渡しする資料の見本">
          「依頼したら、何が返ってくるのか」を先に見ていただくためのページです。架空の会社「サンプル商事」の、受発注の手作業を減らしたいというご相談を題材に、最初の相談から引き継ぎまでの資料を一続きで作りました。会社名・数値はすべて架空です。
        </PageIntro>
        <div className="mx-auto max-w-[1080px] px-5 py-14 md:px-8">
          <ol className="space-y-14">
            {samples.map((s) => (
              <li
                key={s.slug}
                className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[1fr_1.1fr] lg:items-start"
              >
                <div>
                  <p className="label-gold">{s.step}</p>
                  <h2 className="mt-1 text-[1.25rem] font-bold text-ink">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-2">{s.summary}</p>
                  <p className="mt-4 border-l-2 border-line-strong pl-4 text-[0.92rem] leading-relaxed text-ink">
                    <span className="mb-1 block text-[0.8rem] font-bold text-ink-3">
                      見ていただきたい点
                    </span>
                    {s.why}
                  </p>
                  <a
                    href={`/samples/${s.slug}.pdf`}
                    className="mt-6 inline-flex h-11 items-center gap-2 rounded-[4px] border border-green/40 px-5 text-[0.9rem] font-medium text-green hover:bg-green-soft"
                  >
                    <Download size={16} /> PDFを開く（{s.pages}ページ）
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2].filter((p) => p <= s.pages).map((p) => (
                    <a
                      key={p}
                      href={`/samples/${s.slug}.pdf`}
                      className="block overflow-hidden rounded-[4px] border border-line bg-card"
                    >
                      <Image
                        src={`/samples/${s.slug}-p${p}.webp`}
                        alt={`${s.title} ${p}ページ目`}
                        width={640}
                        height={905}
                        className="h-auto w-full"
                      />
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-16 border-t border-line pt-8">
            <h2 className="text-[1.05rem] font-bold text-ink">実際のご依頼では</h2>
            <p className="mt-3 max-w-[44em] leading-relaxed text-ink-2">
              ご相談の規模に合わせて、必要な資料だけを作ります。小さな改善なら、提案と手順書の2つで済むこともあります。資料を作ること自体が目的にならないようにしています。
            </p>
            <Link href="/#contact" className="mt-5 inline-flex text-green underline underline-offset-4">
              相談する
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
