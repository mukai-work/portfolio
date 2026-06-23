import Image from "next/image";
import { Star, MapPin, Clock, Phone } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { DemoConfig } from "@/data/demos";

function getIcon(name: string): LucideIcon {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return icons[name] ?? LucideIcons.Sparkles;
}

export function EditorialLayout({ config }: { config: DemoConfig }) {
  const { colors } = config;

  return (
    <>
      {/* ═══════ HERO: split-screen ═══════ */}
      <section className="relative min-h-screen flex flex-col md:flex-row">
        {/* 左: テキスト */}
        <div
          className="md:w-1/2 flex items-center px-8 md:px-16 py-20 md:py-0 relative"
          style={{ backgroundColor: colors.primary }}
        >
          <div className="max-w-md">
            <p
              className="font-display text-[11px] tracking-[0.5em] uppercase mb-8"
              style={{ color: colors.accent }}
            >
              {config.name}
            </p>
            <h1
              className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.3] mb-8"
              style={{ color: "#FFFFFF", fontWeight: 300 }}
            >
              {config.hero.heading}
            </h1>
            <div
              className="w-10 h-px mb-8"
              style={{ backgroundColor: colors.accent }}
            />
            <p
              className="text-sm md:text-base leading-[2] mb-10"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {config.hero.subheading}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-sm tracking-wider border-b pb-1 transition-opacity hover:opacity-70"
              style={{
                color: colors.accent,
                borderColor: colors.accent,
              }}
            >
              {config.hero.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        {/* 右: 画像 */}
        <div className="md:w-1/2 relative min-h-[60vh] md:min-h-screen">
          <Image
            src={config.hero.imageUrl}
            alt={config.name}
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ═══════ CONCEPT: divider + tagline ═══════ */}
      <section
        className="py-28 md:py-40 px-6"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="w-px h-16 mx-auto mb-12"
            style={{ backgroundColor: colors.accent }}
          />
          <p
            className="font-display text-[10px] tracking-[0.6em] uppercase mb-8"
            style={{ color: colors.accent }}
          >
            Concept
          </p>
          <p
            className="font-display text-2xl md:text-[2rem] leading-[1.8] italic"
            style={{ color: colors.text, fontWeight: 300 }}
          >
            &ldquo;{config.tagline}&rdquo;
          </p>
          <div
            className="w-px h-16 mx-auto mt-12"
            style={{ backgroundColor: colors.accent }}
          />
        </div>
      </section>

      {/* ═══════ SERVICES: 番号+アイコン+テキスト の横行リスト ═══════ */}
      <section
        className="py-20 md:py-28 px-6"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 md:mb-20">
            <p
              className="font-display text-[10px] tracking-[0.6em] uppercase mb-4"
              style={{ color: colors.accent }}
            >
              Services
            </p>
            <h2
              className="font-display text-3xl md:text-4xl"
              style={{ color: colors.text, fontWeight: 300 }}
            >
              サービス内容
            </h2>
          </div>

          <div
            className="divide-y"
            style={{ borderColor: `${colors.accent}33` }}
          >
            {config.services.map((service, idx) => {
              const Icon = getIcon(service.icon);
              return (
                <div
                  key={service.title}
                  className="py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-center"
                  style={{ borderColor: `${colors.accent}22` }}
                >
                  <div className="col-span-2 md:col-span-1">
                    <span
                      className="font-display text-3xl md:text-5xl leading-none"
                      style={{ color: `${colors.accent}55`, fontWeight: 300 }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: `${colors.accent}1A`,
                        color: colors.accent,
                      }}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="col-span-8 md:col-span-4">
                    <h3
                      className="text-base md:text-lg font-medium tracking-wide"
                      style={{ color: colors.text }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <p
                      className="text-sm leading-[1.9]"
                      style={{ color: colors.textLight }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
            {/* 最下行 border */}
            <div
              className="h-px"
              style={{ backgroundColor: `${colors.accent}22` }}
            />
          </div>
        </div>
      </section>

      {/* ═══════ GALLERY: 非対称グリッド ═══════ */}
      <section
        className="py-20 md:py-28 px-6"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p
              className="font-display text-[10px] tracking-[0.6em] uppercase mb-4"
              style={{ color: colors.accent }}
            >
              Gallery
            </p>
            <h2
              className="font-display text-3xl md:text-4xl"
              style={{ color: colors.text, fontWeight: 300 }}
            >
              ギャラリー
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4 auto-rows-fr">
            {config.gallery.slice(0, 5).map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                className={`relative overflow-hidden group ${
                  idx === 0
                    ? "col-span-2 row-span-2 aspect-square md:aspect-auto"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={
                    idx === 0
                      ? "(min-width: 768px) 50vw, 100vw"
                      : "(min-width: 768px) 25vw, 50vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS: 縦積み + accent vertical border ═══════ */}
      <section
        className="py-20 md:py-28 px-6"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <p
              className="font-display text-[10px] tracking-[0.6em] uppercase mb-4"
              style={{ color: colors.accent }}
            >
              Voice
            </p>
            <h2
              className="font-display text-3xl md:text-4xl"
              style={{ color: colors.text, fontWeight: 300 }}
            >
              お客さまの声
            </h2>
          </div>

          <div className="space-y-10 md:space-y-14">
            {config.testimonials.map((t) => (
              <div
                key={t.name}
                className="pl-6 md:pl-10 border-l-2"
                style={{ borderColor: colors.accent }}
              >
                <div className="flex items-center mb-4 gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < t.rating ? colors.accent : "none"}
                      strokeWidth={1.5}
                      color={colors.accent}
                    />
                  ))}
                </div>
                <p
                  className="font-display text-lg md:text-xl leading-[1.9] italic mb-4"
                  style={{ color: colors.text, fontWeight: 300 }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <p
                  className="text-xs tracking-[0.25em]"
                  style={{ color: colors.textLight }}
                >
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ACCESS: divider区切りの横並び ═══════ */}
      <section
        id="contact"
        className="py-20 md:py-28 px-6"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <p
              className="font-display text-[10px] tracking-[0.6em] uppercase mb-4"
              style={{ color: colors.accent }}
            >
              Access
            </p>
            <h2
              className="font-display text-3xl md:text-4xl"
              style={{ color: colors.text, fontWeight: 300 }}
            >
              アクセス情報
            </h2>
          </div>

          <div
            className="flex flex-col md:flex-row md:items-center md:divide-x"
            style={{ borderColor: `${colors.accent}33` }}
          >
            {[
              { Icon: MapPin, label: "ADDRESS", value: config.access.address },
              { Icon: Clock, label: "HOURS", value: config.access.hours },
              { Icon: Phone, label: "TEL", value: config.access.phone },
            ].map((item, idx) => (
              <div
                key={item.label}
                className={`flex-1 px-6 md:px-8 py-8 md:py-4 ${
                  idx > 0 ? "border-t md:border-t-0" : ""
                }`}
                style={{ borderColor: `${colors.accent}33` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.Icon size={16} style={{ color: colors.accent }} />
                  <p
                    className="font-display text-[10px] tracking-[0.4em]"
                    style={{ color: colors.accent }}
                  >
                    {item.label}
                  </p>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.text }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer
        className="py-14 px-6 text-center"
        style={{ backgroundColor: colors.primary }}
      >
        <div
          className="w-10 h-px mx-auto mb-8"
          style={{ backgroundColor: colors.accent }}
        />
        <h2
          className="font-display text-xl tracking-[0.3em] mb-3"
          style={{ color: colors.accent, fontWeight: 300 }}
        >
          {config.name.toUpperCase()}
        </h2>
        <p
          className="text-sm mb-6"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          {config.tagline}
        </p>
        <p className="text-[11px] tracking-wider text-white/40">
          © {new Date().getFullYear()} {config.name} Demo Site. All rights
          reserved.
        </p>
        <p className="text-[10px] mt-3 text-white/30 tracking-wider">
          ※ このページはポートフォリオ用デモサイトです
        </p>
      </footer>
    </>
  );
}
