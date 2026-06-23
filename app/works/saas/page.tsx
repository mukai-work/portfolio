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

const features = [
  { icon: "🤖", title: "AI自動分析", desc: "AIがデータをリアルタイムで分析し、ビジネスの改善ポイントを自動提案します。" },
  { icon: "📊", title: "ダッシュボード", desc: "売上・顧客・在庫を一画面で把握。モバイルでもリアルタイムに確認できます。" },
  { icon: "🔗", title: "外部連携", desc: "Slack・Notion・kintone等、使い慣れたツールとシームレスに連携できます。" },
  { icon: "🔒", title: "エンタープライズ対応", desc: "ISO27001取得済み。SOC2 Type II準拠でセキュリティ要件の厳しい企業にも対応。" },
  { icon: "⚡", title: "99.9% SLA", desc: "冗長化されたインフラで高い可用性を実現。メンテナンスはゼロダウンタイムで実施。" },
  { icon: "🌍", title: "多言語対応", desc: "日本語・英語・中国語など12言語に対応。グローバル展開もこれ一つで。" },
];

const plans = [
  {
    name: "Free",
    price: "¥0",
    period: "永久無料",
    users: "〜3名",
    storage: "1GB",
    features: ["基本ダッシュボード", "データエクスポート（CSV）", "メールサポート", "コミュニティアクセス"],
    cta: "無料で始める",
    highlight: false,
    tag: null,
  },
  {
    name: "Pro",
    price: "¥4,980",
    period: "/月・1名あたり",
    users: "無制限",
    storage: "100GB",
    features: ["高度な分析レポート", "AI分析機能（基本）", "外部連携（5サービス）", "優先メールサポート", "チームコラボレーション", "カスタムダッシュボード"],
    cta: "14日間無料で試す",
    highlight: true,
    tag: "最も人気",
  },
  {
    name: "Enterprise",
    price: "お問い合わせ",
    period: "",
    users: "無制限",
    storage: "無制限",
    features: ["Pro機能すべて＋", "AI分析機能（フル）", "外部連携 無制限", "専任サポートマネージャー", "SLA 99.99% 保証", "オンプレミス選択可", "カスタム開発対応"],
    cta: "営業に相談する",
    highlight: false,
    tag: null,
  },
];

const faqs = [
  { q: "無料プランに制限はありますか？", a: "無料プランでも基本的なダッシュボード・データエクスポートが永久無料でご利用いただけます。ユーザー数3名・ストレージ1GBの制限がありますが、小規模チームや個人利用には十分な機能を提供しています。" },
  { q: "クレジットカードなしで試せますか？", a: "はい、Proプランの14日間無料トライアルはカード登録不要で開始できます。期間中に解約すれば一切費用はかかりません。" },
  { q: "途中でプランを変更できますか？", a: "いつでも可能です。アップグレードは即日反映。ダウングレードは次の請求サイクルから適用されます。" },
  { q: "データの引き継ぎはできますか？", a: "もちろんです。CSVやJSON形式でいつでもデータをエクスポートできます。解約後30日間はデータをお預かりします。" },
  { q: "セキュリティ対策について教えてください", a: "データはAES-256で暗号化。ISO27001取得済み、SOC2 Type II準拠。通信はすべてTLS 1.3を使用しています。定期的な第三者セキュリティ監査も実施しています。" },
];

const companies = ["Acme Corp", "TechFlow", "NexusBiz", "DataPeak", "CloudBase", "PivotAI"];

export default function SaasLP() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [isAnnual, setIsAnnual] = useState(false);
  const [form, setForm] = useState({ email: "", company: "", size: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.email.trim()) e.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "正しいメールアドレスを入力してください";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSent(true);
  };

  const proPrice = isAnnual ? "¥3,984" : "¥4,980";
  const features_sec = useInView();
  const plans_sec = useInView();
  const faq_sec = useInView();
  const cta_sec = useInView();
  const companies_sec = useInView();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Back link */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors border border-white/20">
          ← ポートフォリオに戻る
        </Link>
      </div>

      {/* Fixed nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-950/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
              <span className="text-xs font-bold">S</span>
            </div>
            <span className="font-bold text-lg">SyncFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">機能</a>
            <a href="#plans" className="hover:text-white transition-colors">料金</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">ログイン</button>
            <a
              href="#cta"
              className="text-sm px-4 py-2 rounded-full font-bold transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
            >
              無料で始める
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle,#7c3aed,transparent)", transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle,#4f46e5,transparent)", transform: `translateY(-${scrollY * 0.15}px)` }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8" style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)", color: "#a78bfa" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            新機能: AI分析レポートv2.0 リリース
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            チームの生産性を
            <br />
            <span style={{ background: "linear-gradient(135deg,#a78bfa,#60a5fa,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              AIが10倍にする
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            データ分析・プロジェクト管理・チームコラボをひとつに。
            <br />
            SyncFlowが、あなたのビジネスの成長を加速させます。
          </p>

          {/* Quick signup */}
          <div className="max-w-md mx-auto mb-6">
            {sent ? (
              <div className="py-4 px-6 rounded-2xl text-center" style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)" }}>
                <p className="text-purple-300">✅ ご登録ありがとうございます！確認メールをお送りしました。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="メールアドレスを入力"
                  className="flex-1 px-4 py-3 rounded-full text-white placeholder-gray-500 focus:outline-none"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full font-bold text-white whitespace-nowrap transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
                >
                  無料で始める
                </button>
              </form>
            )}
            {errors.email && <p className="text-red-400 text-xs mt-2 text-left px-4">{errors.email}</p>}
          </div>

          <p className="text-gray-600 text-sm">クレジットカード不要 · 14日間無料 · いつでもキャンセル可</p>

          {/* Mock Dashboard Preview */}
          <div className="mt-16 max-w-4xl mx-auto rounded-2xl overflow-hidden border" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-60" />
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-60" />
              <span className="text-gray-600 text-xs ml-2">app.syncflow.io/dashboard</span>
            </div>
            <div className="p-6 grid grid-cols-3 gap-4">
              {[
                { label: "今月の売上", value: "¥3,248,000", change: "+18.2%", color: "#22c55e" },
                { label: "アクティブユーザー", value: "1,842", change: "+5.7%", color: "#60a5fa" },
                { label: "タスク完了率", value: "94.2%", change: "+2.1%", color: "#a78bfa" },
              ].map((metric, i) => (
                <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-gray-500 text-xs mb-2">{metric.label}</p>
                  <p className="text-xl font-bold">{metric.value}</p>
                  <p className="text-xs mt-1" style={{ color: metric.color }}>{metric.change}</p>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-gray-500 text-xs mb-3">売上トレンド（6ヶ月）</p>
                <div className="flex items-end gap-2 h-16">
                  {[40, 55, 45, 70, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all"
                      style={{ height: `${h}%`, background: `linear-gradient(to top, #7c3aed, #60a5fa)`, opacity: 0.7 + i * 0.05 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 px-6 border-y border-white/10">
        <div
          ref={companies_sec.ref}
          className={`max-w-5xl mx-auto text-center transition-all duration-700 ${companies_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <p className="text-gray-600 text-sm mb-8">世界2,000社以上が導入済み</p>
          <div className="flex flex-wrap justify-center gap-8">
            {companies.map((name, i) => (
              <span key={i} className="text-gray-600 font-bold text-lg">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            ref={features_sec.ref}
            className={`text-center mb-16 transition-all duration-700 ${features_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">すべての機能がひとつに</h2>
            <p className="text-gray-500 max-w-xl mx-auto">バラバラなツールをひとつに集約。情報の分断がなくなり、チームの生産性が大幅に向上します。</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-24 px-6" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-5xl mx-auto">
          <div
            ref={plans_sec.ref}
            className={`text-center mb-12 transition-all duration-700 ${plans_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-black mb-8">シンプルな料金プラン</h2>
            {/* Annual toggle */}
            <div className="inline-flex items-center gap-3 rounded-full p-1" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"}`}
              >
                月払い
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isAnnual ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"}`}
              >
                年払い（20%OFF）
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <PlanCard key={i} plan={plan} delay={i * 100} proPrice={proPrice} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            ref={faq_sec.ref}
            className={`text-center mb-12 transition-all duration-700 ${faq_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-3xl font-black">よくある質問</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} isOpen={activeTab === i} onToggle={() => setActiveTab(activeTab === i ? null : i)} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-24 px-6">
        <div
          ref={cta_sec.ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${cta_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="rounded-3xl p-12" style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(79,70,229,0.3))", border: "1px solid rgba(124,58,237,0.4)" }}>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              今日から始めよう
            </h2>
            <p className="text-gray-400 mb-8">14日間の無料トライアル。カード不要。いつでもキャンセル可。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-4 rounded-full font-bold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 8px 30px rgba(124,58,237,0.5)" }}
              >
                無料トライアルを始める
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                デモを見る →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/10 text-center text-gray-600 text-sm">
        <p>© 2024 SyncFlow Inc. — このページはポートフォリオ用デモです</p>
      </footer>
    </div>
  );
}

function FeatureCard({ feature, delay }: { feature: typeof features[0]; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`p-6 rounded-2xl border transition-all duration-500 hover:border-purple-500/50 hover:-translate-y-1 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)", transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl mb-4">{feature.icon}</div>
      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
    </div>
  );
}

function PlanCard({ plan, delay, proPrice }: { plan: typeof plans[0]; delay: number; proPrice: string }) {
  const { ref, inView } = useInView();
  const displayPrice = plan.name === "Pro" ? proPrice : plan.price;
  return (
    <div
      ref={ref}
      className={`relative rounded-3xl p-6 border-2 transition-all duration-500 ${plan.highlight ? "scale-105" : "hover:border-purple-500/30"} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background: plan.highlight ? "linear-gradient(135deg,rgba(124,58,237,0.2),rgba(79,70,229,0.2))" : "rgba(255,255,255,0.03)",
        borderColor: plan.highlight ? "#7c3aed" : "rgba(255,255,255,0.1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {plan.tag && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
          {plan.tag}
        </div>
      )}
      <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{plan.users} / {plan.storage}</p>
      <div className="mb-1">
        <span className="text-3xl font-black">{displayPrice}</span>
      </div>
      <p className="text-gray-600 text-xs mb-6">{plan.period}</p>
      <ul className="space-y-2.5 mb-6">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <span className="text-purple-400 flex-shrink-0">✓</span> {f}
          </li>
        ))}
      </ul>
      <button
        className="w-full py-3 rounded-xl font-bold transition-all hover:opacity-90"
        style={
          plan.highlight
            ? { background: "linear-gradient(135deg,#7c3aed,#4f46e5)", color: "white" }
            : { background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }
        }
      >
        {plan.cta}
      </button>
    </div>
  );
}

function FaqItem({ faq, isOpen, onToggle, delay }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`rounded-2xl overflow-hidden transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <span className="font-medium text-gray-200 pr-4">{faq.q}</span>
        <span className={`text-purple-400 text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <p className="px-6 pb-4 pt-2 text-gray-500 text-sm leading-relaxed border-t border-white/10">
          {faq.a}
        </p>
      </div>
    </div>
  );
}
