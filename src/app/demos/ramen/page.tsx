import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "麺や一煌 | ラーメン店デモサイト",
  description: "Webクリエイターポートフォリオ用のラーメン店デモサイト。",
};

const UNSPLASH = "https://images.unsplash.com/photo-";

const menu = [
  {
    no: "01",
    name: "醤油らーめん",
    price: "¥950",
    desc: "鶏・豚・昆布を12時間炊き出したスープ。醤油のキレと素材の旨みが溶け合う、定番にして究極の一杯。",
    tag: "定番",
  },
  {
    no: "02",
    name: "濃厚鶏白湯",
    price: "¥1,100",
    desc: "白濁するまで炊き上げた鶏白湯スープ。まろやかなコクがあと引く、人気No.1メニュー。",
    tag: "人気No.1",
  },
  {
    no: "03",
    name: "辛味噌らーめん",
    price: "¥1,050",
    desc: "独自ブレンドの辛味噌が溶け込む、スパイシーで奥深い一杯。辛さは1〜3で選択可能。",
    tag: "数量限定",
  },
];

const craft = [
  {
    no: "01",
    title: "スープ",
    body: "国産鶏ガラ・豚骨・昆布を12時間以上かけて炊き上げる。余計なものは入れない。素材だけが生む、本物の旨み。",
  },
  {
    no: "02",
    title: "自家製麺",
    body: "契約農家の小麦粉で作る手打ち麺。その日の気温・湿度で加水率を微調整し、スープとの絡みを計算する。",
  },
  {
    no: "03",
    title: "チャーシュー",
    body: "豚バラを低温調理で仕上げ、箸で割れるほどの柔らかさに。タレに一昼夜漬け込み、香りと深みを加える。",
  },
];

export default function RamenDemoPage() {
  return (
    <div className="bg-[#0D0D0D] text-[#F5F0E8] min-h-screen font-sans">

      {/* 戻るナビ */}
      <div className="fixed top-5 left-5 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] tracking-widest text-white/50 hover:text-white/90 transition-colors bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowLeft size={11} />
          ポートフォリオに戻る
        </Link>
      </div>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${UNSPLASH}1623341214825-9f4f963727da?w=1920&q=80`}
            alt="ラーメン"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"
          />
          {/* 下から上へのグラデーション */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-[#0D0D0D]/10" />
          {/* 赤いトーン */}
          <div className="absolute inset-0 bg-[#C8392B]/5" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 md:pb-28">
          <p
            className="text-[10px] tracking-[0.6em] uppercase mb-5"
            style={{ color: "#C8392B" }}
          >
            Ramen Shop — Est. 2018
          </p>
          {/* 超大型タイトル */}
          <h1 className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-black leading-[0.9] tracking-tighter mb-6">
            麺や
            <br />
            <span style={{ color: "#C8392B" }}>一煌</span>
          </h1>
          <p className="text-[#A09080] text-sm md:text-base tracking-[0.35em]">
            一杯に、魂を込める。
          </p>
        </div>

        {/* スクロール */}
        <div className="absolute bottom-6 right-8 z-10 flex flex-col items-center gap-1">
          <span className="text-[9px] tracking-[0.4em] text-white/30 uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════ CONCEPT ═══════════════════ */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.6em] uppercase mb-10" style={{ color: "#C8392B" }}>
            Concept
          </p>
          <h2 className="text-2xl md:text-[2.2rem] font-bold leading-[1.7] mb-10 tracking-wide">
            「毎日でも食べたい」と思える<br />
            一杯を、ずっと追いかけている。
          </h2>
          <div
            className="w-10 h-px mx-auto mb-10"
            style={{ backgroundColor: "#C8392B" }}
          />
          <p className="text-[#A09080] leading-[2] text-sm md:text-base">
            素材と向き合い、火加減を確かめ、スープを味見する。<br className="hidden md:inline" />
            その繰り返しの先にだけ、本当においしいラーメンがある。<br className="hidden md:inline" />
            私たちは、毎日その一杯を作り続けています。
          </p>
        </div>
      </section>

      {/* ═══════════════════ MENU ═══════════════════ */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] tracking-[0.6em] uppercase mb-4" style={{ color: "#C8392B" }}>
              Menu
            </p>
            <h2 className="text-3xl md:text-4xl font-black">看板メニュー</h2>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {menu.map((item) => (
              <div key={item.no} className="py-8 md:py-10 flex flex-col md:flex-row md:items-start gap-5 md:gap-10">
                {/* 番号 */}
                <span
                  className="font-black text-[3.5rem] md:text-[5rem] leading-none w-20 flex-shrink-0 opacity-20"
                  style={{ color: "#C8392B" }}
                >
                  {item.no}
                </span>
                {/* テキスト */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold">{item.name}</h3>
                    <span
                      className="text-[9px] tracking-wider px-2.5 py-1 border rounded-sm"
                      style={{ borderColor: "#C8392B80", color: "#C8392B" }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[#A09080] text-sm leading-[1.9]">{item.desc}</p>
                </div>
                {/* 価格 */}
                <div className="text-right flex-shrink-0 pt-2">
                  <p className="text-2xl md:text-3xl font-black tracking-wider">{item.price}</p>
                  <p className="text-[#A09080] text-xs mt-1">税込</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ GALLERY ═══════════════════ */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.6em] uppercase mb-14 text-center" style={{ color: "#C8392B" }}>
            Gallery
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {[
              { id: "1623341214825-9f4f963727da", alt: "らーめん" },
              { id: "1546069901-ba9599a7e63c", alt: "スープ" },
              { id: "1544025162-d76694265947", alt: "チャーシュー" },
              { id: "1467003909585-2f8a72700288", alt: "店内" },
              { id: "1551183053-bf91a1d81141", alt: "仕込み" },
              { id: "1559339352-11d035aa65de", alt: "トッピング" },
            ].map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={`${UNSPLASH}${img.id}?w=800&q=80`}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ こだわり ═══════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.6em] uppercase mb-4" style={{ color: "#C8392B" }}>
              Our Craft
            </p>
            <h2 className="text-3xl md:text-4xl font-black">こだわり</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {craft.map((item) => (
              <div key={item.no} className="relative">
                <p
                  className="font-black text-[6rem] absolute -top-6 -left-3 leading-none select-none opacity-[0.08]"
                  style={{ color: "#C8392B" }}
                >
                  {item.no}
                </p>
                <div className="relative pt-12">
                  <div
                    className="w-8 h-px mb-5"
                    style={{ backgroundColor: "#C8392B" }}
                  />
                  <h3 className="text-lg font-bold mb-4 tracking-wider">{item.title}</h3>
                  <p className="text-[#A09080] text-sm leading-[2]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ACCESS ═══════════════════ */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.6em] uppercase mb-4" style={{ color: "#C8392B" }}>
              Access
            </p>
            <h2 className="text-3xl md:text-4xl font-black">店舗情報</h2>
          </div>

          <div className="space-y-0 divide-y divide-white/[0.06]">
            {[
              { Icon: MapPin, label: "住所", value: "東京都渋谷区〇〇町 1-2-3" },
              { Icon: Clock, label: "営業時間", value: "11:00〜22:00（LO 21:30）\n月曜定休" },
              { Icon: Phone, label: "電話番号", value: "03-XXXX-XXXX" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-8 py-6">
                <div className="flex items-center gap-3 w-24 flex-shrink-0 pt-0.5">
                  <Icon size={13} style={{ color: "#C8392B" }} />
                  <span className="text-[11px] tracking-wider text-[#A09080]">{label}</span>
                </div>
                <p className="text-sm leading-[1.9] whitespace-pre-line text-[#F5F0E8]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t border-white/[0.06] py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-black tracking-[0.1em] mb-3">
          麺や<span style={{ color: "#C8392B" }}>一煌</span>
        </h2>
        <p className="text-[#A09080] text-[11px] tracking-widest">
          © {new Date().getFullYear()} 麺や一煌. All rights reserved.
        </p>
        <p className="mt-6 text-[10px] text-white/20 tracking-wider">
          ※ このページはWebクリエイターポートフォリオ用のデモサイトです
        </p>
      </footer>

    </div>
  );
}
