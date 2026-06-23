import type { DemoConfig } from "@/data/demos";

export function DemoFooter({ config }: { config: DemoConfig }) {
  return (
    <footer
      className="py-12 px-6 text-center relative"
      style={{
        backgroundColor: config.colors.primary,
        color: "#fff",
      }}
    >
      <div
        className="w-20 h-px mx-auto mb-8"
        style={{ backgroundColor: config.colors.accent }}
      />
      <h2
        className="font-display text-2xl tracking-[0.2em] mb-3"
        style={{ color: config.colors.accent }}
      >
        {config.name.toUpperCase()}
      </h2>
      <p className="text-sm text-white/70 mb-6">{config.tagline}</p>
      <p className="text-xs text-white/50">
        © {new Date().getFullYear()} {config.name} Demo Site. All rights
        reserved.
      </p>
      <p className="text-xs text-white/40 mt-2">
        ※ このページはポートフォリオ用デモサイトです
      </p>
    </footer>
  );
}
