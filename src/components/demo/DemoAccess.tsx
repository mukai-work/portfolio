import { MapPin, Clock, Phone } from "lucide-react";
import type { DemoConfig } from "@/data/demos";

export function DemoAccess({ config }: { config: DemoConfig }) {
  const items = [
    { icon: MapPin, label: "ADDRESS", value: config.access.address },
    { icon: Clock, label: "HOURS", value: config.access.hours },
    { icon: Phone, label: "TEL", value: config.access.phone },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: config.colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-display tracking-[0.3em] uppercase text-sm mb-4"
            style={{ color: config.colors.accent }}
          >
            Access
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-wide"
            style={{ color: config.colors.text }}
          >
            アクセス情報
          </h2>
          <div
            className="w-16 h-px mx-auto mt-6"
            style={{ backgroundColor: config.colors.accent }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{
                  backgroundColor: `${config.colors.accent}22`,
                  color: config.colors.accent,
                }}
              >
                <item.icon size={22} strokeWidth={1.5} />
              </div>
              <p
                className="font-display tracking-[0.3em] text-xs mb-3"
                style={{ color: config.colors.accent }}
              >
                {item.label}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: config.colors.text }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
