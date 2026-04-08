"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function useInView(threshold = 0.15) {
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

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#works", label: "Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span style={{ background: "linear-gradient(135deg,#667eea,#764ba2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>K.M.</span>
          <span className="text-gray-800 ml-1">Portfolio</span>
        </a>
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(139,92,246,0.2)", animation: "float 4s ease-in-out infinite" }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(59,130,246,0.2)", animation: "float 4s ease-in-out infinite 2s" }} />
      </div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-purple-300 text-sm font-semibold tracking-widest uppercase mb-6">
          Web Creator / LP Designer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          あなたのビジネスを
          <br />
          <span style={{ background: "linear-gradient(135deg,#a78bfa,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>加速させる</span>
          <br />
          Webを作ります
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          LP・コーポレートサイト・予約システム。
          <br className="hidden md:block" />
          デザインから実装まで一貫してお任せください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#works"
            className="px-8 py-4 text-white font-semibold rounded-full transition-all duration-200"
            style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 8px 30px rgba(124,58,237,0.4)" }}
          >
            制作実績を見る
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-white font-semibold rounded-full border transition-all duration-200 hover:bg-white/10"
            style={{ borderColor: "rgba(255,255,255,0.3)", backdropFilter: "blur(8px)" }}
          >
            お問い合わせ
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs">
        <span className="tracking-widest">SCROLL</span>
        <div className="w-px h-12 animate-pulse" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
      </div>
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
      `}</style>
    </section>
  );
}

function About() {
  const { ref, inView } = useInView();
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative mx-auto">
          <div className="w-72 h-72 rounded-3xl flex items-center justify-center shadow-2xl" style={{ background: "linear-gradient(135deg,#7c3aed,#3b82f6)" }}>
            <span className="text-8xl">👋</span>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border">
            <p className="text-xs text-gray-500">制作実績</p>
            <p className="text-2xl font-bold" style={{ background: "linear-gradient(135deg,#7c3aed,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>50+</p>
          </div>
        </div>
        <div>
          <p className="text-purple-600 text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            成果につながる
            <br />
            Webを届けます
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            フリーランスのWebクリエイターとして、LP・コーポレートサイト・予約システムなど幅広い制作実績があります。デザインの美しさだけでなく、
            <strong className="text-gray-800">コンバージョン率の改善</strong>を意識したサイト設計が強みです。
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            最新のWeb技術（Next.js・Tailwind CSS）を使い、スマートフォンでも美しく表示されるレスポンシブデザインを標準対応しています。
          </p>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "React", "Tailwind CSS", "TypeScript", "Figma"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm font-medium rounded-full border border-purple-100">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const skills = [
  { icon: "🎨", title: "UI/UXデザイン", desc: "視覚的に美しく、使いやすいデザインを設計。Figmaでワイヤーフレームから仕上げまで対応します。" },
  { icon: "⚡", title: "高速実装", desc: "最新のフレームワークを活用し、高品質なコードで素早く納品。修正対応もスピーディーに行います。" },
  { icon: "📱", title: "レスポンシブ対応", desc: "スマートフォン・タブレット・PCすべてで最適な表示を実現。モバイルファーストで設計します。" },
  { icon: "🚀", title: "SEO対策", desc: "検索エンジンに強いHTML構造と、ページ速度の最適化。Googleのコアウェブバイタルも意識します。" },
  { icon: "📝", title: "フォーム実装", desc: "問い合わせ・予約・決済フォームまで。バリデーションとメール通知も含めてフルスタックで対応。" },
  { icon: "✨", title: "アニメーション", desc: "スクロールアニメーション・パララックス・ホバーエフェクトで、印象に残るサイトを制作します。" },
];

function Skills() {
  const { ref, inView } = useInView();
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-purple-600 text-sm font-semibold tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">できること</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay }: { skill: typeof skills[0]; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-4">{skill.icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{skill.desc}</p>
    </div>
  );
}

const works = [
  {
    href: "/works/gym",
    title: "フィットネスジム",
    tags: ["予約フォーム", "スクロールアニメーション", "料金プラン"],
    emoji: "💪",
    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
    bg: "#fff7ed",
    desc: "スクロールに連動したアニメーションと体験申込フォームを実装したジム向けLP",
  },
  {
    href: "/works/restaurant",
    title: "高級レストラン",
    tags: ["予約フォーム", "パララックス", "カルーセル"],
    emoji: "🍽️",
    gradient: "linear-gradient(135deg,#d97706,#eab308)",
    bg: "#fffbeb",
    desc: "上品なパララックス演出とフォトギャラリー、テーブル予約フォームを備えたレストランLP",
  },
  {
    href: "/works/coaching",
    title: "ビジネスコーチング",
    tags: ["問い合わせフォーム", "お客様の声", "実績数値"],
    emoji: "🎯",
    gradient: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
    bg: "#eff6ff",
    desc: "社会的証明を強調したお客様の声スライダーと高コンバージョンな問い合わせフォームを実装",
  },
  {
    href: "/works/saas",
    title: "SaaSプロダクト",
    tags: ["料金プラン", "FAQアコーディオン", "CTA最適化"],
    emoji: "🚀",
    gradient: "linear-gradient(135deg,#7c3aed,#4f46e5)",
    bg: "#f5f3ff",
    desc: "モダンなグラデーションデザインと料金プラン比較、FAQアコーディオンを搭載したSaaS LP",
  },
  {
    href: "/works/agency",
    title: "クリエイティブエージェンシー",
    tags: ["カスタムカーソル", "スクランブルテキスト", "ブルータリスト"],
    emoji: "⚫",
    gradient: "linear-gradient(135deg,#1a1a1a,#ff003c)",
    bg: "#0d0d0d",
    desc: "カーソル追従・文字スクランブル・マーキーアニメーション。他とは一線を画すエッジなデザイン",
  },
  {
    href: "/works/festival",
    title: "音楽フェスティバル",
    tags: ["カウントダウン", "チケット購入", "グリッチエフェクト"],
    emoji: "🎪",
    gradient: "linear-gradient(135deg,#faff00,#ff0080)",
    bg: "#050008",
    desc: "リアルタイムカウントダウン・グリッチテキスト・パーティクル。エネルギー溢れるイベント系LP",
  },
];

function Works() {
  const { ref, inView } = useInView();
  return (
    <section id="works" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-purple-600 text-sm font-semibold tracking-widest uppercase mb-3">Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">制作実績</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            様々な業種・用途に対応したLP制作事例です。カードをクリックして実際の動作をご確認いただけます。
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {works.map((work, i) => (
            <WorkCard key={i} work={work} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work, delay }: { work: typeof works[0]; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <Link
      href={work.href}
      className={`group block rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms`, backgroundColor: work.bg }}
      ref={ref as React.Ref<HTMLAnchorElement>}
    >
      <div className="relative h-52 flex items-center justify-center overflow-hidden" style={{ background: work.gradient }}>
        <span className="text-8xl group-hover:scale-110 transition-transform duration-300">{work.emoji}</span>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          デモを見る →
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors" style={{ color: work.bg === "#0d0d0d" || work.bg === "#050008" ? "#f3f4f6" : "#111827" }}>
          {work.title}
        </h3>
        <p className="text-sm mb-4 leading-relaxed" style={{ color: work.bg === "#0d0d0d" || work.bg === "#050008" ? "rgba(255,255,255,0.5)" : "#4b5563" }}>{work.desc}</p>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full border" style={{ background: work.bg === "#0d0d0d" || work.bg === "#050008" ? "rgba(255,255,255,0.1)" : "white", color: work.bg === "#0d0d0d" || work.bg === "#050008" ? "rgba(255,255,255,0.6)" : "#4b5563", borderColor: work.bg === "#0d0d0d" || work.bg === "#050008" ? "rgba(255,255,255,0.15)" : "#e5e7eb" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "お名前を入力してください";
    if (!form.email.trim()) e.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "正しいメールアドレスを入力してください";
    if (!form.message.trim()) e.message = "メッセージを入力してください";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}>
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="text-center mb-12">
          <p className="text-purple-300 text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">お問い合わせ</h2>
          <p className="text-gray-400">制作のご依頼・ご相談はお気軽にどうぞ。通常2営業日以内にご返信します。</p>
        </div>

        {sent ? (
          <div className="rounded-3xl p-10 text-center text-white" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-2">送信完了しました！</h3>
            <p className="text-gray-300">ご連絡ありがとうございます。2営業日以内にご返信いたします。</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-3xl p-8 space-y-6" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="山田 太郎"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">ご依頼の種類</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-white focus:outline-none transition-colors"
                style={{ background: "rgba(30,30,60,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <option value="">選択してください</option>
                <option value="lp">LP制作</option>
                <option value="corporate">コーポレートサイト</option>
                <option value="ec">ECサイト</option>
                <option value="other">その他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                メッセージ <span className="text-red-400">*</span>
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="ご依頼の詳細・ご要望・ご予算などをお聞かせください"
                rows={5}
                className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-4 text-white font-bold rounded-xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 8px 30px rgba(124,58,237,0.4)" }}
            >
              送信する
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-950 text-center text-gray-500 text-sm">
      <p>© 2024 K.M. Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
