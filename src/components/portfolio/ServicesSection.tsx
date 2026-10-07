import {
  Building2,
  Code2,
  Globe,
  Clapperboard,
  FileText,
  Workflow,
  Puzzle,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightGroup } from "@/components/ui/Spotlight";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  evidence: string;
};

const spotServices: Service[] = [
  {
    icon: Code2,
    title: "Webアプリ・SaaS開発",
    description: "MVPの設計から認証・決済・本番公開まで。Next.js／Supabase／Stripeでの一人称開発。",
    evidence: "Stride・AI-SE-Hub・ReFormat",
  },
  {
    icon: Globe,
    title: "Webサイト制作・SEO",
    description: "企画・デザイン・実装・公開・検索流入の改善まで。表示速度とスマホでの読みやすさを重視。",
    evidence: "地域情報サイト2件・業種別デモ20件",
  },
  {
    icon: Clapperboard,
    title: "動画編集・ショート動画制作",
    description: "字幕・カット・ズーム・効果音入りのショート動画。本数が多い場合は編集工程の自動化からご提案。",
    evidence: "ショート動画の自動編集・AI縦型動画",
  },
  {
    icon: FileText,
    title: "YouTube台本・構成",
    description: "字幕入り素材から構成とナレーション台本を作成。フィードバックをルール化して品質を揃える。",
    evidence: "継続受託中・30本以上",
  },
  {
    icon: Workflow,
    title: "AI活用・業務の自動化",
    description: "生成AIの機能組み込み、定型作業の自動化、ローカルLLMの活用。手作業の工程を仕組みに置き換える。",
    evidence: "自動編集パイプライン・ReFormat",
  },
  {
    icon: Puzzle,
    title: "拡張機能・アプリ・ツール開発",
    description: "Chrome拡張、Unityエディタ拡張、Androidアプリ、社内向けの小さな業務ツールまで。",
    evidence: "ZoomReel（販売中）・TrueRef・PDF編集ツール",
  },
];

export function ServicesSection() {
  return (
    <Section id="services" tone="surface">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10 items-end">
        <SectionHeading
          index="02"
          label="Services"
          title="お受けできる仕事"
          className="min-w-0 md:col-span-5"
        />
        <Reveal className="min-w-0 md:col-span-7">
          <p className="lead-ja text-[0.95rem] text-ink-2">
            本業の業務システム開発に加えて、Web制作・動画・台本・自動化ツールなど幅広く手がけています。
            どの領域も、下の「制作実績」に対応する実物があります。
          </p>
        </Reveal>
      </div>

      {/* 本業領域 */}
      <Reveal className="mt-14">
        <div className="grid gap-6 rounded-[4px] border border-line bg-paper p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
          <Building2 size={28} strokeWidth={1.25} className="text-accent-ink" />
          <div>
            <p className="label-mono text-ink-3">Main — 準委任・長期参画</p>
            <h3 className="heading-ja mt-2 text-xl text-ink">業務系Webシステム開発</h3>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-2">
              C#／ASP.NET・Vue.js・Oracle・Azure。既存システムの調査・機能開発から、機能単位の要件定義・リリースまで。
            </p>
          </div>
          <p className="font-mono text-[0.75rem] leading-relaxed text-ink-3 md:text-right">
            本格参画は2026年12月〜相談可
            <br />
            月額70万円〜（応相談）
          </p>
        </div>
      </Reveal>

      {/* 副業・スポット */}
      <Reveal className="mt-12">
        <p className="label-mono text-ink-3 mb-4">Spot — 副業・スポットで今すぐ対応可</p>
      </Reveal>
      <SpotlightGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {spotServices.map(({ icon: Icon, title, description, evidence }, i) => (
          <Reveal key={title} delay={(i % 3) * 70} className="h-full">
            <div className="spot flex h-full flex-col rounded-[4px] border border-line bg-paper p-6 transition-colors duration-300 hover:border-line-strong">
              <Icon size={22} strokeWidth={1.25} className="text-accent-ink" />
              <h3 className="heading-ja mt-5 text-[1.05rem] text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-ink-2">{description}</p>
              <p className="mt-5 border-t border-line pt-3 font-mono text-[0.7rem] leading-relaxed text-ink-3">
                <span className="text-accent-ink">実績</span>
                <span className="mx-2 opacity-50">/</span>
                {evidence}
              </p>
            </div>
          </Reveal>
        ))}
      </SpotlightGroup>

      <Reveal className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
        <a
          href="#works"
          className="group inline-flex items-center gap-2 text-[0.9rem] font-medium text-accent-ink border-b border-accent-ink/40 hover:border-accent-ink pb-1 transition-colors"
        >
          制作実績を見る
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-[0.9rem] font-medium text-ink-2 hover:text-ink transition-colors"
        >
          内容と分量を伺ってお見積りします
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </Reveal>
    </Section>
  );
}
