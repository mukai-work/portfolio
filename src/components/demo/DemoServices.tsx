import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { DemoConfig } from "@/data/demos";

function getIcon(name: string): LucideIcon {
  // 動的にlucide-reactのアイコンを取得（型安全）
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return icons[name] ?? LucideIcons.Sparkles;
}

export function DemoServices({ config }: { config: DemoConfig }) {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: config.colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-display tracking-[0.3em] uppercase text-sm mb-4"
            style={{ color: config.colors.accent }}
          >
            Services
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-wide"
            style={{ color: config.colors.text }}
          >
            サービス内容
          </h2>
          <div
            className="w-16 h-px mx-auto mt-6"
            style={{ backgroundColor: config.colors.accent }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {config.services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.title}
                className="p-8 text-center transition-all hover:-translate-y-2"
                style={{
                  backgroundColor: config.isDark
                    ? "rgba(255,255,255,0.07)"
                    : "white",
                  border: `1px solid ${config.colors.accent}${config.isDark ? "44" : "33"}`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    backgroundColor: `${config.colors.accent}22`,
                    color: config.colors.accent,
                  }}
                >
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: config.colors.text }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: config.colors.textLight }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
