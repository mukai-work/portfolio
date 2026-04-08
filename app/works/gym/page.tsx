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

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
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

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const plans = [
  {
    name: "ライト",
    price: "¥3,980",
    period: "/月",
    features: ["施設利用 平日のみ", "マシンエリア使用可", "ロッカー使用可", "スタジオ 月4回まで"],
    popular: false,
    color: "border-gray-200",
  },
  {
    name: "スタンダード",
    price: "¥6,980",
    period: "/月",
    features: ["施設利用 全日", "マシンエリア使用可", "ロッカー使用可", "スタジオ 無制限", "プール利用可"],
    popular: true,
    color: "border-orange-500",
  },
  {
    name: "プレミアム",
    price: "¥12,800",
    period: "/月",
    features: ["施設利用 全日24h", "パーソナルトレーニング月2回", "ロッカー専用割当", "スタジオ 無制限", "プール・サウナ利用可", "栄養指導サービス"],
    popular: false,
    color: "border-gray-200",
  },
];

const programs = [
  { icon: "🏋️", name: "ウェイトトレーニング", time: "随時", level: "全レベル" },
  { icon: "🧘", name: "ヨガ＆ストレッチ", time: "毎日 9:00/19:00", level: "初心者歓迎" },
  { icon: "🚴", name: "スピンバイク", time: "月水金 18:30", level: "中〜上級" },
  { icon: "🥊", name: "ボクシングFIT", time: "火木 19:00/土 11:00", level: "全レベル" },
  { icon: "🏃", name: "HIITサーキット", time: "週3回", level: "中〜上級" },
  { icon: "🤸", name: "ピラティス", time: "月水金 10:00", level: "初心者歓迎" },
];

export default function GymLP() {
  const [form, setForm] = useState({ name: "", email: "", tel: "", plan: "", date: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "お名前を入力してください";
    if (!form.email.trim()) e.email = "メールアドレスを入力してください";
    if (!form.tel.trim()) e.tel = "電話番号を入力してください";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSent(true);
  };

  const heroParallax = scrollY * 0.4;
  const textParallax = scrollY * 0.15;

  const stats = useInView(0.3);
  const programs_sec = useInView(0.1);
  const plans_sec = useInView(0.1);
  const booking_sec = useInView(0.1);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Back link */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full hover:bg-black/70 transition-colors border border-white/20">
          ← ポートフォリオに戻る
        </Link>
      </div>

      {/* Hero */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80")`,
            transform: `translateY(${heroParallax}px)`,
            filter: "brightness(0.35)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-gray-950" />

        <div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          style={{ transform: `translateY(-${textParallax}px)` }}
        >
          <p className="text-orange-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            IRON PEAK GYM
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6" style={{ textShadow: "0 0 40px rgba(0,0,0,0.5)" }}>
            限界を
            <span style={{ color: "#f97316" }}>超えろ</span>
            。<br />
            本物を
            <span style={{ color: "#f97316" }}>目指せ</span>
            。
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            最新設備と経験豊富なトレーナーが、あなたの理想の体づくりをサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="px-8 py-4 font-bold rounded-full text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#f97316,#ef4444)", boxShadow: "0 8px 30px rgba(249,115,22,0.4)" }}
            >
              無料体験を申し込む
            </a>
            <a href="#plans" className="px-8 py-4 font-bold rounded-full text-white border border-white/30 hover:bg-white/10 transition-colors">
              料金プランを見る
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span className="tracking-widest">SCROLL</span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(249,115,22,0.6), transparent)", animation: "pulse 2s infinite" }} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gray-900">
        <div
          ref={stats.ref}
          className={`max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700 ${
            stats.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: 3200, suffix: "+", label: "会員数" },
            { value: 15, suffix: "年", label: "運営実績" },
            { value: 98, suffix: "%", label: "継続率" },
            { value: 24, suffix: "h", label: "365日営業" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-black" style={{ color: "#f97316" }}>
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div
            ref={programs_sec.ref}
            className={`text-center mb-16 transition-all duration-700 ${programs_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">Programs</p>
            <h2 className="text-3xl md:text-4xl font-black">充実のプログラム</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((prog, i) => (
              <ProgramCard key={i} prog={prog} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div
            ref={plans_sec.ref}
            className={`text-center mb-16 transition-all duration-700 ${plans_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">Plans</p>
            <h2 className="text-3xl md:text-4xl font-black">料金プラン</h2>
            <p className="text-gray-400 mt-4">すべてのプランに入会金無料キャンペーン適用中（〜4月末）</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <PlanCard key={i} plan={plan} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-24 px-6 bg-gray-950">
        <div
          ref={booking_sec.ref}
          className={`max-w-2xl mx-auto transition-all duration-700 ${booking_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">Free Trial</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">無料体験を申し込む</h2>
            <p className="text-gray-400">体験は1時間。施設見学・プログラム体験・カウンセリングが含まれます。</p>
          </div>

          {sent ? (
            <div className="rounded-3xl p-10 text-center border" style={{ background: "rgba(249,115,22,0.1)", borderColor: "rgba(249,115,22,0.3)" }}>
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">申し込みを受け付けました！</h3>
              <p className="text-gray-400">担当スタッフより2日以内にご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl p-8 space-y-5 border" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">お名前 <span className="text-orange-400">*</span></label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="山田 太郎"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                  {errors.name && <p className="text-orange-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">電話番号 <span className="text-orange-400">*</span></label>
                  <input
                    type="tel"
                    value={form.tel}
                    onChange={(e) => setForm({ ...form, tel: e.target.value })}
                    placeholder="090-1234-5678"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                  {errors.tel && <p className="text-orange-400 text-xs mt-1">{errors.tel}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">メールアドレス <span className="text-orange-400">*</span></label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                />
                {errors.email && <p className="text-orange-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">希望プラン</label>
                  <select
                    value={form.plan}
                    onChange={(e) => setForm({ ...form, plan: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 text-white focus:outline-none focus:border-orange-400 transition-colors"
                    style={{ background: "rgba(20,20,30,0.9)" }}
                  >
                    <option value="">未定</option>
                    <option value="light">ライト</option>
                    <option value="standard">スタンダード</option>
                    <option value="premium">プレミアム</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">希望日</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">ご要望・ご質問</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="目標・現在の運動頻度・気になることなど"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-black rounded-xl text-white transition-all hover:opacity-90 hover:-translate-y-0.5 text-lg"
                style={{ background: "linear-gradient(135deg,#f97316,#ef4444)", boxShadow: "0 8px 30px rgba(249,115,22,0.4)" }}
              >
                無料体験を申し込む 🔥
              </button>
              <p className="text-gray-500 text-xs text-center">入会金・体験費用は一切不要です。しつこい勧誘はいたしません。</p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-center text-gray-600 text-sm border-t border-white/10">
        <p>© 2024 IRON PEAK GYM — このページはポートフォリオ用デモです</p>
      </footer>
    </div>
  );
}

function ProgramCard({ prog, delay }: { prog: typeof programs[0]; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`rounded-2xl p-5 border transition-all duration-500 hover:border-orange-500/50 hover:-translate-y-1 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl mb-3">{prog.icon}</div>
      <h3 className="font-bold text-lg mb-1">{prog.name}</h3>
      <p className="text-gray-400 text-sm mb-1">⏰ {prog.time}</p>
      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(249,115,22,0.2)", color: "#fb923c" }}>
        {prog.level}
      </span>
    </div>
  );
}

function PlanCard({ plan, delay }: { plan: typeof plans[0]; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`relative rounded-2xl p-6 border-2 transition-all duration-500 ${plan.popular ? "scale-105 shadow-2xl" : ""} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background: plan.popular ? "linear-gradient(135deg,rgba(249,115,22,0.15),rgba(239,68,68,0.15))" : "rgba(255,255,255,0.05)",
        borderColor: plan.popular ? "#f97316" : "rgba(255,255,255,0.1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ background: "linear-gradient(135deg,#f97316,#ef4444)" }}>
          人気No.1
        </div>
      )}
      <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
      <p className="text-4xl font-black mb-1" style={{ color: "#f97316" }}>{plan.price}</p>
      <p className="text-gray-400 text-sm mb-6">{plan.period}（税込）</p>
      <ul className="space-y-2 mb-6">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <span style={{ color: "#f97316" }}>✓</span> {f}
          </li>
        ))}
      </ul>
      <a
        href="#booking"
        className="block text-center py-3 rounded-xl font-bold transition-all hover:opacity-90"
        style={
          plan.popular
            ? { background: "linear-gradient(135deg,#f97316,#ef4444)", color: "white" }
            : { background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }
        }
      >
        このプランで体験
      </a>
    </div>
  );
}
