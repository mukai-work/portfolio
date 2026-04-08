"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const menuItems = [
  {
    category: "前菜",
    items: [
      { name: "フォアグラのテリーヌ", desc: "トリュフとともに、ブリオッシュを添えて", price: "¥3,200" },
      { name: "オマール海老のビスク", desc: "クリームと芳醇な海老の旨みが調和したスープ", price: "¥2,800" },
    ],
  },
  {
    category: "魚料理",
    items: [
      { name: "オコゼのポワレ", desc: "ブールブランソースとキャビアのアクセント", price: "¥5,800" },
      { name: "真鯛のブールブラン", desc: "旬の野菜とともにアンフュゼ仕立てで", price: "¥5,200" },
    ],
  },
  {
    category: "肉料理",
    items: [
      { name: "シャラン産鴨のロティ", desc: "オレンジのコンフィとフォンドヴォーのソース", price: "¥7,800" },
      { name: "和牛フィレのポワレ", desc: "黒トリュフのソースと季節のガルニチュール", price: "¥12,800" },
    ],
  },
];

const photos = [
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "料理1" },
  { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", alt: "料理2" },
  { url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80", alt: "料理3" },
  { url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "料理4" },
  { url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80", alt: "料理5" },
  { url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80", alt: "料理6" },
];

export default function RestaurantLP() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [form, setForm] = useState({
    name: "", email: "", tel: "", date: "", time: "", guests: "2", course: "", requests: "",
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "お名前を入力してください";
    if (!form.email.trim()) e.email = "メールアドレスを入力してください";
    if (!form.tel.trim()) e.tel = "お電話番号を入力してください";
    if (!form.date) e.date = "ご来店日を選択してください";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSent(true);
  };

  const heroParallax = scrollY * 0.45;
  const menu_sec = useInView();
  const gallery_sec = useInView();
  const reservation_sec = useInView();
  const concept_sec = useInView();

  return (
    <div className="min-h-screen" style={{ background: "#0d0b08", color: "#e8dcc8" }}>
      {/* Back link */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="flex items-center gap-2 text-sm px-4 py-2 rounded-full transition-colors" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", border: "1px solid rgba(232,220,200,0.2)", color: "#e8dcc8" }}>
          ← ポートフォリオに戻る
        </Link>
      </div>

      {/* Hero with Parallax */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1920&q=80")`,
            transform: `translateY(${heroParallax}px)`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(13,11,8,0.8))" }} />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.5em] uppercase mb-6 opacity-70" style={{ color: "#d4a853" }}>
            Fine Dining Restaurant
          </p>
          <h1 className="text-6xl md:text-8xl font-thin mb-4" style={{ color: "#e8dcc8", letterSpacing: "0.15em", fontFamily: "Georgia, serif" }}>
            LUMIÈRE
          </h1>
          <div className="w-24 h-px mx-auto mb-6" style={{ background: "linear-gradient(to right, transparent, #d4a853, transparent)" }} />
          <p className="text-lg md:text-xl font-thin opacity-80 mb-2" style={{ fontFamily: "Georgia, serif" }}>
            光の宿る、至高の一皿
          </p>
          <p className="text-sm opacity-60 mb-12 tracking-wider">
            フランス料理の伝統と日本の四季が交わる場所
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#reservation"
              className="px-8 py-3.5 text-sm tracking-widest uppercase font-medium transition-all"
              style={{ background: "#d4a853", color: "#0d0b08" }}
            >
              ご予約はこちら
            </a>
            <a
              href="#menu"
              className="px-8 py-3.5 text-sm tracking-widest uppercase font-medium border transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(212,168,83,0.5)", color: "#d4a853" }}
            >
              メニューを見る
            </a>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="py-28 px-6">
        <div
          ref={concept_sec.ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${concept_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "#d4a853" }}>Our Concept</p>
          <h2 className="text-3xl md:text-4xl font-thin mb-8" style={{ fontFamily: "Georgia, serif", lineHeight: 1.8 }}>
            「食」は、最高の芸術である
          </h2>
          <div className="w-12 h-px mx-auto mb-8" style={{ background: "#d4a853" }} />
          <p className="text-sm leading-loose opacity-70 mb-6">
            フランス料理の格式と技法を礎に、日本の豊かな食材と四季の移ろいを表現します。
            シェフ・アンドレ・田中が30年にわたる修行で培った感性と技術が、
            あなたの食卓に忘れられない時間をもたらします。
          </p>
          <p className="text-sm leading-loose opacity-70">
            厳選された食材、丁寧に構築されたペアリングワイン、そして心を込めたサービス。
            大切な記念日、ビジネスの接待、特別なひとときに。
          </p>
        </div>
      </section>

      {/* Photo Gallery / Carousel */}
      <section className="py-4 px-6 overflow-hidden">
        <div
          ref={gallery_sec.ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${gallery_sec.inView ? "opacity-100" : "opacity-0"}`}
        >
          {/* Main slide */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg mb-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                style={{
                  backgroundImage: `url("${photo.url}")`,
                  opacity: i === currentSlide ? 1 : 0,
                }}
              />
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i === currentSlide ? "#d4a853" : "rgba(255,255,255,0.4)" }}
                />
              ))}
            </div>
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-6 gap-2">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="aspect-square bg-cover bg-center rounded transition-all overflow-hidden"
                style={{
                  backgroundImage: `url("${photo.url}")`,
                  opacity: i === currentSlide ? 1 : 0.5,
                  outline: i === currentSlide ? `2px solid #d4a853` : "none",
                  outlineOffset: "2px",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={menu_sec.ref}
            className={`text-center mb-16 transition-all duration-700 ${menu_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a853" }}>Menu</p>
            <h2 className="text-3xl font-thin" style={{ fontFamily: "Georgia, serif" }}>本日のメニュー</h2>
          </div>
          <div className="space-y-12">
            {menuItems.map((section, si) => (
              <MenuSection key={si} section={section} delay={si * 150} />
            ))}
          </div>
          <div className="text-center mt-10 text-sm opacity-50 text-xs">
            ※ メニューは仕入れ状況により変更となる場合があります。アレルギーのある方はスタッフにお申し付けください。
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section id="reservation" className="py-24 px-6" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(212,168,83,0.15)" }}>
        <div
          ref={reservation_sec.ref}
          className={`max-w-2xl mx-auto transition-all duration-700 ${reservation_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a853" }}>Reservation</p>
            <h2 className="text-3xl font-thin mb-4" style={{ fontFamily: "Georgia, serif" }}>ご予約</h2>
            <p className="text-sm opacity-60">ご予約は3日前までにお願いいたします。</p>
          </div>

          {sent ? (
            <div className="rounded p-10 text-center" style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.3)" }}>
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-lg font-thin mb-2" style={{ fontFamily: "Georgia, serif" }}>ご予約を承りました</h3>
              <p className="text-sm opacity-60">確認のメールをお送りしました。当日のご来店をお待ちしております。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,168,83,0.2)" }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">お名前 *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="山田 太郎 様"
                    className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,168,83,0.2)", color: "#e8dcc8" }}
                  />
                  {errors.name && <p className="text-amber-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">お電話番号 *</label>
                  <input
                    type="tel"
                    value={form.tel}
                    onChange={(e) => setForm({ ...form, tel: e.target.value })}
                    placeholder="090-1234-5678"
                    className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,168,83,0.2)", color: "#e8dcc8" }}
                  />
                  {errors.tel && <p className="text-amber-400 text-xs mt-1">{errors.tel}</p>}
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">メールアドレス *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,168,83,0.2)", color: "#e8dcc8" }}
                />
                {errors.email && <p className="text-amber-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">ご来店日 *</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,168,83,0.2)", color: "#e8dcc8" }}
                  />
                  {errors.date && <p className="text-amber-400 text-xs mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">ご来店時間</label>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ background: "rgba(20,15,8,0.95)", border: "1px solid rgba(212,168,83,0.2)", color: "#e8dcc8" }}
                  >
                    <option value="">選択</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">人数</label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ background: "rgba(20,15,8,0.95)", border: "1px solid rgba(212,168,83,0.2)", color: "#e8dcc8" }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n}名</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">コース</label>
                <select
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                  style={{ background: "rgba(20,15,8,0.95)", border: "1px solid rgba(212,168,83,0.2)", color: "#e8dcc8" }}
                >
                  <option value="">未定</option>
                  <option value="standard">スタンダード（¥18,000〜）</option>
                  <option value="prestige">プレスティージュ（¥28,000〜）</option>
                  <option value="grand">グランシェフ（¥45,000〜）</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">ご要望・アレルギー</label>
                <textarea
                  value={form.requests}
                  onChange={(e) => setForm({ ...form, requests: e.target.value })}
                  placeholder="記念日のサプライズ、食物アレルギー、お席のご希望など"
                  rows={3}
                  className="w-full px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,168,83,0.2)", color: "#e8dcc8" }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 text-sm tracking-widest uppercase font-medium transition-all hover:opacity-85"
                style={{ background: "#d4a853", color: "#0d0b08" }}
              >
                ご予約を確定する
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="py-8 px-6 text-center text-xs opacity-40 border-t" style={{ borderColor: "rgba(212,168,83,0.15)" }}>
        <p>© 2024 Restaurant LUMIÈRE — このページはポートフォリオ用デモです</p>
      </footer>
    </div>
  );
}

function MenuSection({ section, delay }: { section: typeof menuItems[0]; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#d4a853" }}>{section.category}</p>
        <div className="flex-1 h-px" style={{ background: "rgba(212,168,83,0.2)" }} />
      </div>
      <div className="space-y-6">
        {section.items.map((item, i) => (
          <div key={i} className="flex justify-between items-start gap-4 group">
            <div className="flex-1">
              <h3 className="font-medium mb-1 group-hover:text-amber-300 transition-colors">{item.name}</h3>
              <p className="text-xs opacity-50 leading-relaxed">{item.desc}</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap" style={{ color: "#d4a853" }}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
