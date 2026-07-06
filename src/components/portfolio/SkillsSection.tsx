import {
  Code2,
  Server,
  Cloud,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Skill = {
  category: string;
  icon: LucideIcon;
  items: string[];
};

const skills: Skill[] = [
  {
    category: "フロントエンド",
    icon: Code2,
    items: [
      "Next.js / React (App Router)",
      "TypeScript",
      "Tailwind CSS / shadcn/ui",
      "Figma → コンポーネント実装",
      "レスポンシブ・アクセシビリティ対応",
    ],
  },
  {
    category: "バックエンド",
    icon: Server,
    items: [
      "Python / FastAPI",
      "Node.js / Express",
      "Supabase / PostgreSQL",
      "REST API 設計・実装",
      "認証(JWT / NextAuth / Supabase Auth)",
    ],
  },
  {
    category: "インフラ・クラウド",
    icon: Cloud,
    items: [
      "Vercel / AWS(EC2・S3)",
      "Docker / GitHub Actions(CI/CD)",
      "Supabase(DB・Auth・Storage)",
      "ドメイン・SSL 設定",
      "監視・ログ設計",
    ],
  },
  {
    category: "AI活用・開発スタイル",
    icon: Sparkles,
    items: [
      "Claude Code / Cursor / GitHub Copilot",
      "AI活用で開発速度 3〜5倍化",
      "要件定義 → 設計 → 実装 → 納品 一人称対応",
      "生成AI機能のプロダクト組み込み",
      "プロンプトエンジニアリング",
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 px-6 bg-navy-deep overflow-hidden"
    >
      <div className="absolute inset-0 bg-blueprint" aria-hidden />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          index="03"
          label="Skills"
          title="スキル・対応範囲"
          description="設計から本番稼働まで全工程対応。AI活用で通常の3〜5倍の開発速度を実現します。"
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((s, i) => (
            <Reveal key={s.category} delay={i * 80} className="h-full">
              <div className="h-full p-7 bg-white/[0.04] rounded-lg border border-white/10 hover:border-accent-soft/40 hover:bg-white/[0.06] transition-all duration-300">
                <div className="w-12 h-12 rounded bg-accent/15 flex items-center justify-center text-accent-soft mb-5">
                  <s.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-4 text-white">
                  {s.category}
                </h3>
                <ul className="space-y-2.5">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-white/65 flex items-start gap-2"
                    >
                      <span className="font-mono text-accent-soft mt-0.5 shrink-0">
                        ▹
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-accent-soft/60 text-white font-medium rounded transition-colors text-sm"
          >
            技術スタックの詳細は面談でご確認ください →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
