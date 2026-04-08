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

// カウントダウンタイマー
function Countdown() {
  const target = new Date("2025-08-16T12:00:00");
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      {[
        { value: time.days, label: "DAYS" },
        { value: time.hours, label: "HRS" },
        { value: time.minutes, label: "MIN" },
        { value: time.seconds, label: "SEC" },
      ].map((unit, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-xl relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
          >
            <span
              className="text-3xl md:text-5xl font-black"
              style={{ color: "#faff00" }}
            >
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs tracking-widest mt-2 text-white/50">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

// Glitch text
function GlitchText({ text }: { text: string }) {
  return (
    <span className="relative inline-block" style={{ fontFamily: "inherit" }}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute inset-0 opacity-70"
        aria-hidden
        style={{
          color: "#ff0080",
          animation: "glitch1 3s infinite",
          clipPath: "polygon(0 30%, 100% 30%, 100% 50%, 0 50%)",
        }}
      >
        {text}
      </span>
      <span
        className="absolute inset-0 opacity-70"
        aria-hidden
        style={{
          color: "#00ffff",
          animation: "glitch2 3s infinite",
          clipPath: "polygon(0 60%, 100% 60%, 100% 80%, 0 80%)",
        }}
      >
        {text}
      </span>
      <style>{`
        @keyframes glitch1 {
          0%,90%,100% { transform: translateX(0); }
          91% { transform: translateX(-4px); }
          93% { transform: translateX(4px); }
          95% { transform: translateX(-2px); }
        }
        @keyframes glitch2 {
          0%,90%,100% { transform: translateX(0); }
          92% { transform: translateX(4px); }
          94% { transform: translateX(-4px); }
          96% { transform: translateX(2px); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes float-particle {
          0%,100% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-80vh) rotate(720deg); opacity: 0; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </span>
  );
}

const artists = [
  {
    name: "DIGITAL GHOST",
    genre: "Electronic / Techno",
    time: "DAY 1 / 22:00",
    headliner: true,
    color: "#ff0080",
    emoji: "👾",
  },
  {
    name: "NEON PULSE",
    genre: "Synth Pop / Wave",
    time: "DAY 1 / 20:00",
    headliner: false,
    color: "#faff00",
    emoji: "⚡",
  },
  {
    name: "VOID CIRCUIT",
    genre: "Industrial / Dark Ambient",
    time: "DAY 2 / 23:30",
    headliner: true,
    color: "#00ffff",
    emoji: "🔊",
  },
  {
    name: "CRYSTAL MAZE",
    genre: "House / Melodic",
    time: "DAY 2 / 21:00",
    headliner: false,
    color: "#7c3aed",
    emoji: "💎",
  },
  {
    name: "SOLAR WIND",
    genre: "Ambient / Chill",
    time: "DAY 1 / 18:00",
    headliner: false,
    color: "#f97316",
    emoji: "🌊",
  },
  {
    name: "BINARY STAR",
    genre: "Drum & Bass",
    time: "DAY 2 / 19:00",
    headliner: false,
    color: "#22c55e",
    emoji: "🌟",
  },
];

const tickets = [
  {
    type: "DAY PASS",
    price: "¥6,800",
    desc: "1日入場券（DAY1 or DAY2 選択）",
    perks: ["当日全ステージ入場", "ドリンクチケット1枚"],
    available: true,
    color: "#faff00",
  },
  {
    type: "2 DAY PASS",
    price: "¥11,800",
    desc: "2日通し入場券（最もお得）",
    perks: ["両日全ステージ入場", "ドリンクチケット3枚", "限定Tシャツ付き", "ラウンジエリア入場可"],
    available: true,
    color: "#ff0080",
    popular: true,
  },
  {
    type: "VIP PASS",
    price: "¥28,000",
    desc: "VIPエリア・特典フルパッケージ",
    perks: ["両日VIPエリア入場", "無制限ドリンク", "アーティストミートアップ", "限定グッズセット", "専用駐車場"],
    available: true,
    color: "#00ffff",
  },
];

export default function FestivalLP() {
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);
  const [day, setDay] = useState<string>("");
  const [qty, setQty] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", tel: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [particles] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${6 + Math.random() * 8}s`,
      size: `${4 + Math.random() * 8}px`,
      color: ["#faff00", "#ff0080", "#00ffff", "#7c3aed"][Math.floor(Math.random() * 4)],
    }))
  );

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "必須項目です";
    if (!form.email.trim()) e.email = "必須項目です";
    if (selectedTicket === null) e.ticket = "チケットを選択してください";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSent(true);
  };

  const hero_sec = { ref: useRef<HTMLDivElement>(null), inView: true };
  const lineup_sec = useInView();
  const ticket_sec = useInView();

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: "#050008" }}>
      {/* Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              background: p.color,
              animation: `float-particle ${p.duration} ${p.delay} infinite`,
              boxShadow: `0 0 10px ${p.color}`,
            }}
          />
        ))}
      </div>

      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-5">
        <div
          className="w-full h-8"
          style={{
            background: "linear-gradient(transparent, rgba(255,255,255,0.3), transparent)",
            animation: "scanline 4s linear infinite",
          }}
        />
      </div>

      {/* Back */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="text-xs tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-white/30">
          ← PORTFOLIO
        </Link>
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Background rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[300, 500, 700, 900].map((size, i) => (
            <div
              key={i}
              className="absolute rounded-full border"
              style={{
                width: size,
                height: size,
                borderColor: `rgba(250,255,0,${0.05 - i * 0.01})`,
                animation: `pulse-ring ${4 + i * 2}s ease-out infinite ${i * 1}s`,
              }}
            />
          ))}
        </div>

        {/* Logo / Title */}
        <div className="relative z-10 text-center">
          <p className="text-xs tracking-[0.6em] uppercase mb-6" style={{ color: "rgba(250,255,0,0.6)" }}>
            JAPAN ELECTRONIC MUSIC FESTIVAL 2025
          </p>
          <div className="mb-2">
            <h1
              className="text-[18vw] md:text-[14vw] font-black leading-none"
              style={{
                letterSpacing: "-0.03em",
                textShadow: "0 0 80px rgba(250,255,0,0.3), 0 0 160px rgba(250,255,0,0.1)",
                color: "#faff00",
              }}
            >
              <GlitchText text="FLUX" />
            </h1>
          </div>
          <div className="flex justify-center gap-4 mb-2 text-sm tracking-[0.4em] uppercase text-white/50">
            <span>Aug 15</span>
            <span style={{ color: "#faff00" }}>—</span>
            <span>Aug 16</span>
            <span style={{ color: "#faff00" }}>·</span>
            <span>Makuhari Messe</span>
          </div>
          <p className="text-4xl md:text-6xl font-black tracking-tight mb-12" style={{ color: "rgba(255,255,255,0.08)" }}>
            2025
          </p>

          {/* Countdown */}
          <div className="mb-12">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-6">開催まで</p>
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#tickets"
              className="px-10 py-4 font-black tracking-widest uppercase text-black transition-all hover:scale-105"
              style={{ background: "#faff00", boxShadow: "0 0 40px rgba(250,255,0,0.4)" }}
            >
              チケット購入
            </a>
            <a
              href="#lineup"
              className="px-10 py-4 font-black tracking-widest uppercase text-white border transition-all hover:border-yellow-300/50"
              style={{ borderColor: "rgba(250,255,0,0.3)" }}
            >
              ラインナップ
            </a>
          </div>
        </div>
      </section>

      {/* Lineup */}
      <section id="lineup" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            ref={lineup_sec.ref}
            className={`mb-16 transition-all duration-700 ${lineup_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-xs tracking-[0.5em] uppercase mb-2" style={{ color: "rgba(250,255,0,0.7)" }}>Line Up</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">ARTISTS</h2>
          </div>
          <div className="space-y-2">
            {artists.map((artist, i) => (
              <ArtistRow key={i} artist={artist} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Stage info */}
      <section className="py-16 px-6 relative z-10" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: "🎪", title: "3 STAGES", desc: "MAIN / ARENA / UNDERGROUND の3ステージ同時開催" },
            { icon: "📍", title: "幕張メッセ", desc: "〒261-0023 千葉市美浜区中瀬2-1 / JR海浜幕張駅 徒歩5分" },
            { icon: "🎟️", title: "全席立見", desc: "総収容人数 15,000名 / 18歳以上対象のイベントです" },
          ].map((info, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-3xl">{info.icon}</span>
              <div>
                <p className="font-black tracking-widest text-sm mb-1" style={{ color: "#faff00" }}>{info.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{info.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tickets */}
      <section id="tickets" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            ref={ticket_sec.ref}
            className={`mb-16 transition-all duration-700 ${ticket_sec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-xs tracking-[0.5em] uppercase mb-2" style={{ color: "rgba(250,255,0,0.7)" }}>Tickets</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">GET IN.</h2>
          </div>

          {sent ? (
            <div className="text-center py-20">
              <p className="text-6xl font-black mb-4" style={{ color: "#faff00" }}>CONFIRMED.</p>
              <p className="text-gray-400">購入ありがとうございます！確認メールをご確認ください。</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-5 gap-8">
              {/* Ticket selection */}
              <div className="md:col-span-3 space-y-4">
                {tickets.map((ticket, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedTicket(i)}
                    className="w-full text-left p-6 border-2 transition-all duration-200 relative"
                    style={{
                      borderColor: selectedTicket === i ? ticket.color : "rgba(255,255,255,0.1)",
                      background: selectedTicket === i ? `rgba(${ticket.color === "#faff00" ? "250,255,0" : ticket.color === "#ff0080" ? "255,0,128" : "0,255,255"},0.08)` : "rgba(255,255,255,0.02)",
                    }}
                  >
                    {ticket.popular && (
                      <span className="absolute -top-3 right-4 px-3 py-0.5 text-xs font-black tracking-widest text-black" style={{ background: "#ff0080" }}>
                        POPULAR
                      </span>
                    )}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-black tracking-widest text-lg" style={{ color: ticket.color }}>{ticket.type}</p>
                        <p className="text-gray-500 text-sm">{ticket.desc}</p>
                      </div>
                      <p className="text-2xl font-black">{ticket.price}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ticket.perks.map((perk, j) => (
                        <span key={j} className="text-xs px-2 py-0.5" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}>
                          ✓ {perk}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
                {errors.ticket && <p className="text-pink-400 text-xs">{errors.ticket}</p>}
              </div>

              {/* Order form */}
              <form onSubmit={handleSubmit} className="md:col-span-2 space-y-4 p-6 border border-white/10" style={{ background: "rgba(255,255,255,0.03)" }}>
                <h3 className="font-black tracking-widest text-sm uppercase" style={{ color: "#faff00" }}>購入フォーム</h3>

                <div>
                  <label className="block text-xs text-gray-600 uppercase tracking-widest mb-1">氏名 *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="山田 太郎"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 text-sm"
                  />
                  {errors.name && <p className="text-pink-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs text-gray-600 uppercase tracking-widest mb-1">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="example@email.com"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 text-sm"
                  />
                  {errors.email && <p className="text-pink-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {selectedTicket === 0 && (
                  <div>
                    <label className="block text-xs text-gray-600 uppercase tracking-widest mb-1">参加日</label>
                    <select
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-yellow-400 text-sm"
                    >
                      <option value="">選択</option>
                      <option value="day1">DAY 1（Aug 15）</option>
                      <option value="day2">DAY 2（Aug 16）</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-xs text-gray-600 uppercase tracking-widest mb-1">枚数</label>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 border border-white/20 hover:border-yellow-400 flex items-center justify-center text-white">−</button>
                    <span className="text-xl font-black w-8 text-center">{qty}</span>
                    <button type="button" onClick={() => setQty(Math.min(8, qty + 1))} className="w-8 h-8 border border-white/20 hover:border-yellow-400 flex items-center justify-center text-white">+</button>
                  </div>
                </div>

                {selectedTicket !== null && (
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">{tickets[selectedTicket].type} × {qty}</span>
                      <span>
                        ¥{(parseInt(tickets[selectedTicket].price.replace(/[^0-9]/g, "")) * qty).toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 font-black tracking-widest uppercase text-black transition-all hover:opacity-90 text-sm"
                  style={{ background: "#faff00", boxShadow: "0 0 20px rgba(250,255,0,0.3)" }}
                >
                  購入する
                </button>
                <p className="text-gray-700 text-xs text-center">デモサイトのため実際の決済は発生しません</p>
              </form>
            </div>
          )}
        </div>
      </section>

      <footer className="py-8 px-6 text-center text-xs text-gray-800 border-t border-white/5 relative z-10">
        <p>© 2024 FLUX FESTIVAL — このページはポートフォリオ用デモです</p>
      </footer>
    </div>
  );
}

function ArtistRow({ artist, delay }: { artist: typeof artists[0]; delay: number }) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      className={`flex items-center justify-between p-5 border transition-all duration-500 cursor-pointer ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
      style={{
        borderColor: hovered ? artist.color : "rgba(255,255,255,0.06)",
        background: hovered ? `rgba(${artist.color === "#faff00" ? "250,255,0" : artist.color === "#ff0080" ? "255,0,128" : artist.color === "#00ffff" ? "0,255,255" : artist.color === "#7c3aed" ? "124,58,237" : artist.color === "#f97316" ? "249,115,22" : "34,197,94"},0.05)` : "rgba(255,255,255,0.02)",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl">{artist.emoji}</span>
        <div>
          <div className="flex items-center gap-3">
            <h3 className={`font-black text-lg md:text-2xl tracking-tight ${artist.headliner ? "text-2xl md:text-3xl" : ""}`} style={{ color: hovered ? artist.color : "white" }}>
              {artist.name}
            </h3>
            {artist.headliner && (
              <span className="text-xs px-2 py-0.5 font-bold tracking-widest" style={{ background: artist.color, color: "#050008" }}>
                HEADLINER
              </span>
            )}
          </div>
          <p className="text-gray-600 text-xs tracking-widest uppercase mt-0.5">{artist.genre}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs tracking-widest" style={{ color: artist.color }}>{artist.time}</p>
      </div>
    </div>
  );
}
