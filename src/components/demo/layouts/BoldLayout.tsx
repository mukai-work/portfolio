import Image from "next/image";
import { Star, MapPin, Clock, Phone } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { DemoConfig } from "@/data/demos";

function getIcon(name: string): LucideIcon {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return icons[name] ?? LucideIcons.Sparkles;
}

export function BoldLayout({ config }: { config: DemoConfig }) {
  const { colors, isDark } = config;

  // ライト/ダーク両対応の汎用カラー
  const sectionBg = colors.background;
  const sectionText = colors.text;
  const sectionTextLight = colors.textLight;
  const dividerColor = isDark
    ? "rgba(255,255,255,0.08)"
    : `${colors.primary}1A`;

  return (
    <>
      {/* ═══════ HERO: 左下寄せ + 超大型タイポ ═══════ */}
      <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={config.hero.imageUrl}
            alt={config.name}
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"
          />
          {/* 下→上 暗くなるグラデーション */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/60 to-black/10" />
          {/* accent カラーティント */}
          <div
            className="absolute inset-0 mix-blend-multiply opacity-20"
            style={{ backgroundColor: colors.primary }}
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-24">
          <p
            className="text-[10px] tracking-[0.6em] uppercase mb-5"
            style={{ color: colors.accent }}
          >
            {config.name} — Est. 2018
          </p>
          <h1
            className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem] font-black leading-[0.9] tracking-tighter mb-8 text-white"
          >
            {config.hero.heading}
          </h1>
          <p
            className="max-w-xl text-sm md:text-base leading-[1.9] mb-8"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {config.hero.subheading}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase border-2 transition-all hover:scale-105"
            style={{
              borderColor: colors.accent,
              color: colors.accent,
            }}
          >
            {config.hero.cta}
          </a>
        </div>

        <div className="absolute bottom-6 right-8 z-10 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.4em] text-white/30 uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ═══════ SERVICES: 番号付き横行リスト ═══════ */}
      <section
        className="py-24 md:py-32 px-6"
        style={{ backgroundColor: sectionBg }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 md:mb-20 flex items-end justify-between flex-wrap gap-6">
            <div>
              <p
                className="text-[10px] tracking-[0.6em] uppercase mb-4"
                style={{ color: colors.accent }}
              >
                Services
              </p>
              <h2
                className="text-3xl md:text-5xl font-black tracking-tight"
                style={{ color: sectionText }}
              >
                サービス内容
              </h2>
            </div>
            <div
              className="hidden md:block w-32 h-px"
              style={{ backgroundColor: colors.accent }}
            />
          </div>

          <div>
            {/* 一番上の border */}
            <div
              className="h-px"
              style={{ backgroundColor: dividerColor }}
            />
            {config.services.map((service, idx) => {
              const Icon = getIcon(service.icon);
              return (
                <div
                  key={service.title}
                  className="py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-6 items-center border-b transition-colors hover:bg-black/[0.02]"
                  style={{ borderColor: dividerColor }}
                >
                  <div className="col-span-3 md:col-span-1">
                    <span
                      className="text-2xl md:text-4xl font-black tracking-tighter"
                      style={{ color: `${colors.accent}66` }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      style={{ color: colors.accent }}
                    />
                  </div>
                  <div className="col-span-7 md:col-span-4">
                    <h3
                      className="text-lg md:text-2xl font-bold tracking-tight"
                      style={{ color: sectionText }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <p
                      className="text-sm leading-[1.9]"
                      style={{ color: sectionTextLight }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ GALLERY: 1枚目と最後がfullwidth、4枚が4:3 ═══════ */}
      <section
        className="py-20 md:py-28 px-6"
        style={{ backgroundColor: sectionBg }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p
              className="text-[10px] tracking-[0.6em] uppercase mb-4"
              style={{ color: colors.accent }}
            >
              Gallery
            </p>
            <h2
              className="text-3xl md:text-5xl font-black tracking-tight"
              style={{ color: sectionText }}
            >
              ギャラリー
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {config.gallery.slice(0, 6).map((img, idx) => {
              const isFullWidth = idx === 0 || idx === 5;
              return (
                <div
                  key={`${img.src}-${idx}`}
                  className={`relative overflow-hidden group ${
                    isFullWidth ? "col-span-2" : ""
                  }`}
                  style={{
                    aspectRatio: isFullWidth ? "16/7" : "4/3",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={
                      isFullWidth
                        ? "100vw"
                        : "(min-width: 768px) 50vw, 50vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS: primaryカラー暗いセクション ═══════ */}
      <section
        className="py-24 md:py-32 px-6"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p
              className="text-[10px] tracking-[0.6em] uppercase mb-4"
              style={{ color: colors.accent }}
            >
              Voice
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              お客さまの声
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {config.testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 md:p-10 relative"
                style={{
                  border: `1px solid ${colors.accent}44`,
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                <p
                  className="absolute top-2 left-4 font-black select-none leading-none"
                  style={{
                    color: `${colors.accent}33`,
                    fontSize: "5rem",
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </p>
                <div className="relative">
                  <div className="flex items-center mb-5 gap-1">
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
                    className="text-sm leading-[1.9] mb-6"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {t.text}
                  </p>
                  <p
                    className="text-[11px] tracking-[0.25em] font-bold"
                    style={{ color: colors.accent }}
                  >
                    — {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ACCESS: 横並び行リスト ═══════ */}
      <section
        id="contact"
        className="py-20 md:py-28 px-6"
        style={{ backgroundColor: sectionBg }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <p
              className="text-[10px] tracking-[0.6em] uppercase mb-4"
              style={{ color: colors.accent }}
            >
              Access
            </p>
            <h2
              className="text-3xl md:text-5xl font-black tracking-tight"
              style={{ color: sectionText }}
            >
              店舗情報
            </h2>
          </div>

          <div>
            <div
              className="h-px"
              style={{ backgroundColor: dividerColor }}
            />
            {[
              { Icon: MapPin, label: "住所", value: config.access.address },
              { Icon: Clock, label: "営業時間", value: config.access.hours },
              { Icon: Phone, label: "電話番号", value: config.access.phone },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-6 md:gap-10 py-6 md:py-7 border-b"
                style={{ borderColor: dividerColor }}
              >
                <div className="flex items-center gap-3 w-28 md:w-32 flex-shrink-0 pt-1">
                  <Icon size={14} style={{ color: colors.accent }} />
                  <span
                    className="text-[11px] tracking-[0.2em] uppercase"
                    style={{ color: sectionTextLight }}
                  >
                    {label}
                  </span>
                </div>
                <p
                  className="text-sm md:text-base leading-[1.9] flex-1"
                  style={{ color: sectionText }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer
        className="py-14 px-6 text-center border-t"
        style={{
          backgroundColor: isDark ? colors.background : colors.primary,
          borderColor: dividerColor,
        }}
      >
        <h2
          className="text-2xl md:text-3xl font-black tracking-[0.1em] mb-3"
          style={{ color: isDark ? sectionText : "#FFFFFF" }}
        >
          {config.name}
        </h2>
        <p
          className="text-[11px] tracking-widest"
          style={{ color: isDark ? sectionTextLight : "rgba(255,255,255,0.6)" }}
        >
          © {new Date().getFullYear()} {config.name} Demo Site. All rights
          reserved.
        </p>
        <p
          className="mt-4 text-[10px] tracking-wider"
          style={{ color: isDark ? sectionTextLight : "rgba(255,255,255,0.4)" }}
        >
          ※ このページはポートフォリオ用デモサイトです
        </p>
      </footer>
    </>
  );
}
