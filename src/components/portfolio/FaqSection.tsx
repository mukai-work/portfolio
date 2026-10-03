import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "現在の稼働状況は？",
    a: "週1〜3日の副業・スポット案件は今すぐご対応可能です。本格参画（月140〜160時間・準委任）は2026年12月〜を目安に調整可能で、条件により前倒しのご相談も承ります。まずはカジュアル面談でご相談ください。",
  },
  {
    q: "同時に何社まで受けますか？",
    a: "副業・スポット案件は2〜3社まで対応しています。品質を担保するため、フルタイム案件は1社専属での参画を基本としています。",
  },
  {
    q: "得意な案件・プロジェクトのタイプは？",
    a: "C#／ASP.NETなど業務系Webシステムの機能開発・改修と、ゼロイチのSaaS・Webアプリ開発がともに得意です。既存コードの解析・影響範囲調査から入る改修案件、要件定義〜本番リリースまで一人称で完走するプロジェクト、AI機能の組み込みやMVP開発で特に力を発揮します。",
  },
  {
    q: "単価・料金の目安を教えてください",
    a: "本格参画（準委任・月140〜160時間）は月額70万円〜を目安にご相談しています。副業・スポット稼働は稼働日数に応じて個別にお見積りします。案件規模・技術要件によって変動しますので、まずはお気軽にご相談ください。",
  },
  {
    q: "コードや設計を確認できますか？",
    a: "面談時にGitHubリポジトリをご共有します。設計ドキュメント・実装コードをご確認いただいたうえでご判断いただけます。NDA締結も対応可能です。",
  },
  {
    q: "チーム開発・既存プロジェクトへの参画も可能ですか？",
    a: "もちろん可能です。既存コードベースへのキャッチアップ・技術的負債の解消・チームの開発速度向上など、スタートアップのフェーズに合わせて柔軟に対応します。",
  },
];

export function FaqSection() {
  return (
    <Section id="faq">
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="min-w-0 md:col-span-4">
          <div className="md:sticky md:top-28">
            <SectionHeading index="05" label="FAQ" title="よくある質問" />
          </div>
        </div>
        <Reveal className="min-w-0 md:col-span-8">
          <div className="border-t border-ink">
            {faqs.map(({ q, a }, i) => (
              <details key={q} className="group border-b border-line">
                <summary className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-2 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                  <span className="font-mono text-xs text-ink-3 group-open:text-accent-ink transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1rem] font-bold text-ink group-hover:text-accent-ink transition-colors">
                    {q}
                  </span>
                  <Plus
                    size={18}
                    strokeWidth={1.5}
                    className="shrink-0 text-ink-3 transition-transform duration-300 group-open:rotate-45 group-open:text-accent-ink"
                  />
                </summary>
                <div className="faq-answer">
                  <div>
                    <p className="pb-7 pl-12 pr-8 text-[0.9rem] text-ink-2 leading-[1.9]">
                      {a}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
