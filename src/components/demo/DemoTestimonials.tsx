import { Star } from "lucide-react";
import type { DemoConfig } from "@/data/demos";

export function DemoTestimonials({ config }: { config: DemoConfig }) {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{
        backgroundColor: config.isDark
          ? config.colors.background
          : `${config.colors.primary}08`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-display tracking-[0.3em] uppercase text-sm mb-4"
            style={{ color: config.colors.accent }}
          >
            Voice
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-wide"
            style={{ color: config.colors.text }}
          >
            お客さまの声
          </h2>
          <div
            className="w-16 h-px mx-auto mt-6"
            style={{ backgroundColor: config.colors.accent }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {config.testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 shadow-sm"
              style={{
                backgroundColor: config.isDark
                  ? "rgba(255,255,255,0.07)"
                  : "white",
                borderTop: `3px solid ${config.colors.accent}`,
              }}
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < t.rating ? config.colors.accent : "none"}
                    strokeWidth={1.5}
                    color={config.colors.accent}
                  />
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: config.colors.text }}
              >
                「{t.text}」
              </p>
              <p
                className="text-xs font-medium tracking-wider"
                style={{ color: config.colors.textLight }}
              >
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
