import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "現在の稼働状況は？",
    a: "週1〜3日の副業案件は今すぐご対応可能です。フルタイム（週4〜5日）参画は2026年10月〜となります。まずはカジュアル面談でご相談ください。",
  },
  {
    q: "同時に何社まで受けますか？",
    a: "副業・スポット案件は2〜3社まで対応しています。品質を担保するため、フルタイム案件は1社専属での参画を基本としています。",
  },
  {
    q: "得意な案件・プロジェクトのタイプは？",
    a: "ゼロイチのSaaS・Webアプリ開発が最も得意です。要件定義〜設計〜実装〜本番リリースまで一人称で完走するプロジェクト、AI機能の組み込み、スピードが求められるMVP開発などは特に力を発揮します。",
  },
  {
    q: "単価・料金の目安を教えてください",
    a: "稼働形態によって異なりますが、月額60〜100万円が多いレンジです。案件規模・稼働日数・技術要件によって変動しますので、まずはお気軽にご相談ください。",
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
    <section id="faq" className="py-20 md:py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <SectionHeading index="04" label="FAQ" title="よくある質問" />
        <Reveal>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map(({ q, a }, i) => (
              <details key={q} className="group">
                <summary className="flex items-center gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                  <span className="font-mono text-xs text-accent shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base font-semibold text-ink group-hover:text-accent transition-colors">
                    {q}
                  </span>
                  <Plus
                    size={18}
                    className="shrink-0 text-ink-faint transition-transform duration-300 group-open:rotate-45 group-open:text-accent"
                  />
                </summary>
                <div className="faq-answer">
                  <div>
                    <p className="pb-6 pl-9 text-sm text-ink-soft leading-relaxed">
                      {a}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
