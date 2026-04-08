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

function CountUp({ end, duration = 1800, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.5);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const testimonials = [
  {
    name: "田中 恵子",
    role: "IT企業 マネージャー",
    avatar: "👩‍💼",
    text: "コーチングを受ける前は、自分のキャリアに迷いがありました。3ヶ月のプログラムを通じて、自分の強みと方向性が明確になり、念願の昇進を実現できました。",
    stars: 5,
    result: "昇進・年収120%UP",
  },
  {
    name: "鈴木 大輔",
    role: "フリーランス エンジニア",
    avatar: "👨‍💻",
    text: "副業から独立を考えていましたが、不安で一歩踏み出せずにいました。コーチとの対話を重ねることで、リスクを正確に把握し、確信を持って独立できました。",
    stars: 5,
    result: "独立6ヶ月で月収3倍",
  },
  {
    name: "山本 美咲",
    role: "医療従事者",
    avatar: "👩‍⚕️",
    text: "仕事と育児の両立でバーンアウト寸前でした。コーチングで自分の価値観を整理し、無理なく継続できる働き方に変えることができました。心から感謝しています。",
    stars: 5,
    result: "ストレス70%軽減・充実感UP",
  },
  {
    name: "伊藤 健",
    role: "中小企業 経営者",
    avatar: "👨‍🏫",
    text: "売上の伸び悩みと組織の課題に悩んでいました。コーチのサポートで根本的な問題に気づき、チームの在り方を見直した結果、6ヶ月で売上が1.8倍になりました。",
    stars: 5,
    result: "売上1.8倍・組織改革成功",
  },
];

const programs = [
  {
    name: "スターター",
    duration: "1ヶ月",
    sessions: "月4回（60分/回）",
    price: "¥58,000",
    features: ["オンライン1on1セッション", "毎回のアクションプラン設定", "チャットサポート（平日）", "振り返りレポート"],
    cta: "まずは体験セッション",
    highlight: false,
  },
  {
    name: "スタンダード",
    duration: "3ヶ月",
    sessions: "月6回（60〜90分/回）",
    price: "¥138,000",
    features: ["オンライン1on1セッション", "毎回のアクションプラン設定", "チャットサポート（毎日）", "月次振り返りレポート", "価値観・強み診断ツール", "書籍・教材プレゼント"],
    cta: "このプログラムで始める",
    highlight: true,
  },
  {
    name: "エグゼクティブ",
    duration: "6ヶ月",
    sessions: "週2回（90分/回）",
    price: "¥298,000",
    features: ["全て含む＋", "24h緊急サポート", "パーソナル戦略書作成", "外部専門家ネットワーク紹介", "成果保証制度あり"],
    cta: "エグゼクティブを選ぶ",
    highlight: false,
  },
];

const faqs_data = [
  { q: "どんな方が対象ですか？", a: "「現状を変えたい」「次のステップに進みたい」という意欲をお持ちの方であれば、職種・年齢・経験問わずご参加いただけます。キャリア・副業・独立・人間関係など幅広いテーマに対応しています。" },
  { q: "オンラインのみですか？", a: "基本的にはZoomを使ったオンラインセッションです。東京近郊の方は対面も選択可能です（一部オプション料金がかかる場合があります）。" },
  { q: "途中でプログラムを変更できますか？", a: "はい、可能です。セッションの進捗や状況に応じて、プログラム内容の調整が可能です。まずはご相談ください。" },
  { q: "効果が出なかった場合はどうなりますか？", a: "エグゼクティブプランには成果保証制度があります。コーチとの合意した目標が達成されなかった場合、追加セッションを無償で提供いたします。" },
];

export default function CoachingLP() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", goal: "", challenge: "", program: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "お名前を入力してください";
    if (!form.email.trim()) e.email = "メールアドレスを入力してください";
    if (!form.goal.trim()) e.goal = "達成したい目標を入力してください";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSent(true);
  };

  const hero_sec = useInView();
  const stats_sec = useInView(0.3);
  const testimonial_sec = useInView();
  const programs_sec = useInView();
  const faq_sec = useInView();
  const contact_sec = useInView();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Back link */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="flex items-center gap-2 bg-white text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm">
          ← ポートフォリオに戻る
        </Link>
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d6a4f 50%, #1e3a5f 100%)" }}>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: "rgba(255,255,255,0.3)",
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div
          ref={hero_sec.ref}
          className={`relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            hero_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <p className="text-green-300 text-sm font-semibold tracking-widest uppercase mb-4">Business Coaching</p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              あなたの
              <span style={{ color: "#4ade80" }}>可能性</span>
              を<br />
              解き放つ
              <br />
              コーチング
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              「なりたい自分」に最短でたどり着く。
              プロコーチとの対話が、あなたの思考と行動を変えます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 font-bold rounded-full text-white text-center transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)", boxShadow: "0 8px 30px rgba(34,197,94,0.4)" }}
              >
                無料相談を予約する
              </a>
              <a href="#programs" className="px-8 py-4 font-bold rounded-full text-white text-center border border-white/30 hover:bg-white/10 transition-colors">
                プログラムを見る
              </a>
            </div>
            <p className="text-green-300/60 text-sm mt-4">📅 体験セッション（45分）完全無料</p>
          </div>
          <div className="relative hidden md:block">
            <div className="relative rounded-3xl overflow-hidden aspect-square max-w-sm mx-auto" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div className="p-8 flex flex-col gap-4">
                <div className="text-5xl text-center mb-4">🎯</div>
                {["目標の明確化", "行動計画の策定", "習慣の定着", "成果の測定"].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: "rgba(74,222,128,0.3)", border: "1px solid rgba(74,222,128,0.5)" }}>
                      {i + 1}
                    </div>
                    <p className="text-white font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }`}</style>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gray-50">
        <div
          ref={stats_sec.ref}
          className={`max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700 ${
            stats_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: 230, suffix: "名+", label: "コーチング実績" },
            { value: 94, suffix: "%", label: "目標達成率" },
            { value: 8, suffix: "年", label: "コーチ経験" },
            { value: 4.9, suffix: "/5", label: "満足度スコア" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-black text-green-600">
                <CountUp end={Math.floor(stat.value)} suffix={stat.suffix} />
              </p>
              <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div
          ref={testimonial_sec.ref}
          className={`max-w-5xl mx-auto transition-all duration-700 ${testimonial_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <p className="text-green-600 text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-black">受講者の声</h2>
          </div>

          {/* Active testimonial */}
          <div className="rounded-3xl p-8 mb-8 transition-all duration-500" style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">{testimonials[activeTestimonial].avatar}</div>
              <div>
                <p className="font-bold">{testimonials[activeTestimonial].name}</p>
                <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].role}</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <div className="ml-auto px-3 py-1 rounded-full text-xs font-bold text-green-700 bg-green-100">
                {testimonials[activeTestimonial].result}
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              &ldquo;{testimonials[activeTestimonial].text}&rdquo;
            </p>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`p-4 rounded-2xl text-left transition-all border-2 ${
                  i === activeTestimonial ? "border-green-500 bg-green-50" : "border-gray-100 bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="text-2xl mb-2">{t.avatar}</div>
                <p className="text-xs font-bold text-gray-800">{t.name}</p>
                <p className="text-xs text-gray-500 truncate">{t.role}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div
            ref={programs_sec.ref}
            className={`text-center mb-16 transition-all duration-700 ${programs_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-green-600 text-sm font-semibold tracking-widest uppercase mb-3">Programs</p>
            <h2 className="text-3xl md:text-4xl font-black">プログラム一覧</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <ProgramCard key={i} prog={prog} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div
            ref={faq_sec.ref}
            className={`text-center mb-12 transition-all duration-700 ${faq_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-green-600 text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-3xl font-black">よくある質問</h2>
          </div>
          <div className="space-y-3">
            {faqs_data.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={activeTab === i}
                onToggle={() => setActiveTab(activeTab === i ? null : i)}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 px-6" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d6a4f 100%)" }}>
        <div
          ref={contact_sec.ref}
          className={`max-w-2xl mx-auto transition-all duration-700 ${contact_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <p className="text-green-300 text-sm font-semibold tracking-widest uppercase mb-3">Free Session</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">無料体験セッション</h2>
            <p className="text-gray-300">45分のセッションで、コーチングの効果を体感してください。<br />プレッシャーなし・勧誘なし。</p>
          </div>

          {sent ? (
            <div className="rounded-3xl p-10 text-center text-white" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">お申し込みありがとうございます！</h3>
              <p className="text-gray-300">24時間以内にご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl p-8 space-y-5" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">お名前 <span className="text-green-400">*</span></label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="山田 太郎"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                  />
                  {errors.name && <p className="text-green-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">メールアドレス <span className="text-green-400">*</span></label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                  />
                  {errors.email && <p className="text-green-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">達成したい目標 <span className="text-green-400">*</span></label>
                <input
                  type="text"
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  placeholder="例：半年以内に副業で月10万円を達成したい"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                />
                {errors.goal && <p className="text-green-400 text-xs mt-1">{errors.goal}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">現在の課題や悩み</label>
                <textarea
                  value={form.challenge}
                  onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                  placeholder="現状の課題、うまくいっていないこと、サポートしてほしいことなど"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-black rounded-xl text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)", boxShadow: "0 8px 30px rgba(34,197,94,0.4)" }}
              >
                無料体験セッションを予約する
              </button>
              <p className="text-gray-400 text-xs text-center">個人情報は厳重に管理いたします。無断での第三者提供は行いません。</p>
            </form>
          )}
        </div>
      </section>

      <footer className="py-8 px-6 bg-gray-950 text-center text-gray-600 text-sm">
        <p>© 2024 Business Coaching — このページはポートフォリオ用デモです</p>
      </footer>
    </div>
  );
}

function ProgramCard({ prog, delay }: { prog: typeof programs[0]; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`relative rounded-3xl p-6 border-2 transition-all duration-500 ${prog.highlight ? "scale-105 shadow-2xl" : "hover:shadow-md"} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background: prog.highlight ? "linear-gradient(135deg,#f0fdf4,#dcfce7)" : "white",
        borderColor: prog.highlight ? "#22c55e" : "#e5e7eb",
        transitionDelay: `${delay}ms`,
      }}
    >
      {prog.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white bg-green-500">
          最人気
        </div>
      )}
      <h3 className="text-xl font-bold mb-1">{prog.name}</h3>
      <p className="text-gray-500 text-sm mb-1">{prog.duration} / {prog.sessions}</p>
      <p className="text-3xl font-black text-green-600 mb-4">{prog.price}</p>
      <ul className="space-y-2 mb-6">
        {prog.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-green-500 mt-0.5">✓</span> {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="block text-center py-3 rounded-xl font-bold transition-all hover:opacity-90"
        style={
          prog.highlight
            ? { background: "linear-gradient(135deg,#22c55e,#16a34a)", color: "white" }
            : { background: "#f3f4f6", color: "#374151" }
        }
      >
        {prog.cta}
      </a>
    </div>
  );
}

function FaqItem({ faq, isOpen, onToggle, delay }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`rounded-2xl border overflow-hidden transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
        <span className={`text-green-500 text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <p className="px-6 pb-4 pt-2 text-gray-600 text-sm leading-relaxed bg-white border-t border-gray-100">
          {faq.a}
        </p>
      </div>
    </div>
  );
}
