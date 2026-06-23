import {
  Code2,
  Server,
  Cloud,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

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
    <section id="skills" className="py-20 md:py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display tracking-[0.3em] text-xs text-blue-500 uppercase mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            スキル・対応範囲
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            設計から本番稼働まで全工程対応。AI活用で通常の3〜5倍の開発速度を実現します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((s) => (
            <div
              key={s.category}
              className="p-7 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 mb-5">
                <s.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                {s.category}
              </h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-600 flex items-start gap-2"
                  >
                    <span className="text-blue-400 mt-1 shrink-0">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-blue-300 hover:border-blue-500 text-blue-600 hover:text-blue-700 font-medium rounded-md transition-colors text-sm"
          >
            技術スタックの詳細は面談でご確認ください →
          </a>
        </div>
      </div>
    </section>
  );
}
