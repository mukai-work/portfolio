import Image from "next/image";
import type { DemoConfig } from "@/data/demos";

export function DemoHero({ config }: { config: DemoConfig }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src={config.hero.imageUrl}
          alt={config.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <p
          className="font-display text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          style={{ color: config.colors.accent }}
        >
          {config.name}
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-wide">
          {config.hero.heading}
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
          {config.hero.subheading}
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-4 text-base md:text-lg font-medium tracking-wider rounded-md transition-transform hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundColor: config.colors.accent,
            color: config.colors.primary,
          }}
        >
          {config.hero.cta}
        </a>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 text-xs tracking-widest">
        <span className="block animate-bounce">SCROLL</span>
      </div>
    </section>
  );
}
