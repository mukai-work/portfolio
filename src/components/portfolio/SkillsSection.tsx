import { Code2, Server, Cloud, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Skill = {
  category: string;
  en: string;
  icon: LucideIcon;
  items: string[];
};

const skills: Skill[] = [
  {
    category: "フロントエンド",
    en: "Frontend",
    icon: Code2,
    items: [
      "Vue.js(2系・3系) / jQuery",
      "Next.js / React (App Router)",
      "TypeScript(実務約2年)",
      "Tailwind CSS / shadcn/ui",
      "レスポンシブ・アクセシビリティ対応",
    ],
  },
  {
    category: "バックエンド",
    en: "Backend",
    icon: Server,
    items: [
      "C# / ASP.NET MVC・Web API(実務約5年)",
      "Python / FastAPI · Node.js",
      "Oracle / SQL Server / PostgreSQL",
      "REST API 設計・実装",
      "認証(JWT / NextAuth / Supabase Auth)",
    ],
  },
  {
    category: "インフラ・クラウド",
    en: "Infrastructure",
    icon: Cloud,
    items: [
      "Azure Blob Storage(移行を要件定義から)",
      "IIS(配置・リリース〜ログ調査)",
      "Vercel / AWS(ECS Fargate・Terraform)",
      "Docker / GitHub Actions(CI/CD)",
      "監視・ログ設計",
    ],
  },
  {
    category: "AI活用・開発スタイル",
    en: "AI-Driven",
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
    <Section id="skills" tone="surface">
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="min-w-0 md:col-span-4">
          <div className="md:sticky md:top-28">
            <SectionHeading
              index="04"
              label="Skills"
              title="スキル・対応範囲"
              description="設計から本番稼働まで全工程対応。AI活用で通常の3〜5倍の開発速度を実現します。"
            />
          </div>
        </div>

        <div className="min-w-0 md:col-span-8">
          <div className="border-t border-ink">
            {skills.map((s, i) => (
              <Reveal key={s.category} delay={i * 60}>
                <div className="grid gap-5 sm:grid-cols-[200px_1fr] py-7 border-b border-line">
                  <div className="flex items-start gap-3">
                    <s.icon size={20} strokeWidth={1.25} className="text-accent-ink mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-[0.975rem] font-bold text-ink">{s.category}</h3>
                      <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-ink-3 mt-1">
                        {s.en}
                      </p>
                    </div>
                  </div>
                  <ul className="grid gap-y-2.5">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="grid grid-cols-[0.875rem_1fr] text-[0.875rem] leading-relaxed text-ink-2"
                      >
                        <span className="font-mono text-ink-3" aria-hidden>
                          –
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-[0.9rem] font-medium text-accent-ink border-b border-accent-ink/40 hover:border-accent-ink pb-1 transition-colors"
            >
              技術スタックの詳細は面談でご確認ください
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
