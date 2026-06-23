"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// カスタムカーソル追従
function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };
    window.addEventListener("mousemove", move);

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (cursorRef.current) {
        const size = isHovering ? 80 : 40;
        cursorRef.current.style.transform = `translate(${pos.current.x - size / 2}px, ${pos.current.y - size / 2}px)`;
        cursorRef.current.style.width = `${size}px`;
        cursorRef.current.style.height = `${size}px`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    const addHover = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true);
          setLabel((el as HTMLElement).dataset.cursor || "");
        });
        el.addEventListener("mouseleave", () => {
          setIsHovering(false);
          setLabel("");
        });
      });
    };
    addHover();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current);
    };
  }, [isHovering]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center transition-all duration-200"
        style={{
          border: "1.5px solid rgba(255,0,60,0.8)",
          backgroundColor: isHovering ? "rgba(255,0,60,0.15)" : "transparent",
          mixBlendMode: "difference",
        }}
      >
        {label && <span className="text-white text-xs font-bold">{label}</span>}
      </div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{ background: "rgb(255,0,60)" }}
      />
    </>
  );
}

// テキストスクランブル
function ScrambleText({ text, trigger }: { text: string; trigger: boolean }) {
  const [displayed, setDisplayed] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rafRef = useRef<number>(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    let iteration = 0;
    const totalFrames = text.length * 3;

    const update = () => {
      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration / 3) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration++;
      if (iteration < totalFrames) {
        rafRef.current = requestAnimationFrame(update);
      } else {
        setDisplayed(text);
      }
    };
    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, text, chars]);

  return <>{displayed}</>;
}

// マーキー
function Marquee({ text, speed = 30 }: { text: string; speed?: number }) {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 border-y-2 border-white/10">
      <div
        className="inline-flex gap-12 text-6xl font-black tracking-tight opacity-10"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

const worksList = [
  { num: "01", title: "KURE COSMETICS", type: "Brand Identity / Web", year: "2024", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80" },
  { num: "02", title: "NOVA ARCHITECTURE", type: "Web Design / 3D", year: "2024", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80" },
  { num: "03", title: "BEAT MUSIC FESTIVAL", type: "Campaign / Motion", year: "2023", img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80" },
  { num: "04", title: "FLUX RESTAURANT", type: "Branding / Web", year: "2023", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" },
  { num: "05", title: "APEX TECH VENTURE", type: "Product Design / Dev", year: "2023", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" },
];

export default function AgencyLP() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrambleTrigger, setScrambleTrigger] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", budget: "", detail: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 200);
    setTimeout(() => setScrambleTrigger(true), 600);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white cursor-none" onMouseMove={handleMouseMove}>
      <Cursor />

      {/* Back */}
      <div className="fixed top-6 right-6 z-50">
        <Link href="/" className="text-xs tracking-widest text-gray-500 hover:text-white transition-colors cursor-none" data-cursor="BACK">
          ← PORTFOLIO
        </Link>
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter cursor-none">VOID.</a>
          <div className="flex gap-8 text-xs tracking-[0.2em] uppercase text-gray-400">
            <a href="#works" className="hover:text-white transition-colors cursor-none">Works</a>
            <a href="#about" className="hover:text-white transition-colors cursor-none">About</a>
            <button onClick={() => setFormOpen(true)} className="hover:text-white transition-colors cursor-none" data-cursor="CONTACT">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gray-950" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

        {/* Big number */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black leading-none select-none transition-opacity duration-1000"
          style={{ color: "rgba(255,255,255,0.02)", letterSpacing: "-0.05em" }}
        >
          VOID
        </div>

        <div
          className={`relative z-10 transition-all duration-1000 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-4">
            <span className="text-xs tracking-[0.4em] text-gray-500 uppercase">Creative Studio — Tokyo, Japan</span>
          </div>
          <h1 className="text-[12vw] md:text-[10vw] font-black leading-none tracking-tighter mb-0">
            <ScrambleText text="WE BUILD" trigger={scrambleTrigger} />
          </h1>
          <h1 className="text-[12vw] md:text-[10vw] font-black leading-none tracking-tighter" style={{ color: "rgb(255,0,60)", WebkitTextStroke: "0px" }}>
            <ScrambleText text="DIGITAL" trigger={scrambleTrigger} />
          </h1>
          <h1 className="text-[12vw] md:text-[10vw] font-black leading-none tracking-tighter mb-8">
            <ScrambleText text="WORLDS." trigger={scrambleTrigger} />
          </h1>
          <div className="flex items-end justify-between">
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Brand identity, web experiences, and motion design for brands that refuse to be ordinary.
            </p>
            <button
              onClick={() => setFormOpen(true)}
              className="group flex items-center gap-3 cursor-none"
              data-cursor="GO"
            >
              <span className="text-sm tracking-widest uppercase">Start a Project</span>
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                →
              </div>
            </button>
          </div>
        </div>
      </section>

      <Marquee text="BRANDING · WEB · MOTION · IDENTITY · PRODUCT · CAMPAIGN ·" speed={25} />

      {/* Works */}
      <section id="works" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-16 border-b border-white/10 pb-6">
            <h2 className="text-xs tracking-[0.4em] uppercase text-gray-500">Selected Work</h2>
            <span className="text-xs text-gray-600">{worksList.length} projects</span>
          </div>
          <div className="space-y-0">
            {worksList.map((work, i) => (
              <div
                key={i}
                className="group flex items-center justify-between py-8 border-b border-white/5 hover:border-white/20 transition-all duration-300 cursor-none"
                data-cursor="VIEW"
                onMouseEnter={() => setHoveredWork(i)}
                onMouseLeave={() => setHoveredWork(null)}
              >
                <div className="flex items-baseline gap-8">
                  <span className="text-gray-700 text-sm w-8">{work.num}</span>
                  <h3 className="text-2xl md:text-4xl font-black tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {work.title}
                  </h3>
                </div>
                <div className="flex items-center gap-8 text-sm text-gray-600">
                  <span className="hidden md:block">{work.type}</span>
                  <span>{work.year}</span>
                  <div className="w-4 h-4 rounded-full border border-white/20 group-hover:border-red-500 group-hover:bg-red-500 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hover image that follows cursor */}
        {hoveredWork !== null && (
          <div
            className="fixed pointer-events-none z-30 w-64 h-40 overflow-hidden transition-opacity duration-200"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 80,
              opacity: hoveredWork !== null ? 1 : 0,
            }}
          >
            <img
              src={worksList[hoveredWork].img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </section>

      <Marquee text="SINCE 2019 · AWARD WINNING · GLOBAL CLIENTS · TOKYO BASED ·" speed={35} />

      {/* About */}
      <section id="about" className="py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-12">About</h2>
            <p className="text-4xl font-black leading-tight mb-8">
              We don't follow trends.<br />
              <span style={{ color: "rgb(255,0,60)" }}>We set them.</span>
            </p>
            <p className="text-gray-400 leading-relaxed">
              VOIDはデザインと技術の境界を壊すクリエイティブスタジオです。ブランドアイデンティティからWebエクスペリエンス、モーションデザインまで、あなたのブランドを次のレベルへ押し上げます。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 content-start pt-12">
            {[
              { num: "50+", label: "Projects" },
              { num: "30+", label: "Clients" },
              { num: "5", label: "Awards" },
              { num: "4", label: "Team Size" },
            ].map((stat, i) => (
              <div key={i} className="p-6 border border-white/10 hover:border-red-500/50 transition-colors">
                <p className="text-5xl font-black" style={{ color: "rgb(255,0,60)" }}>{stat.num}</p>
                <p className="text-gray-500 text-sm mt-2 tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {formOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6" onClick={() => setFormOpen(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg p-8 border border-white/20"
            style={{ background: "#0a0a0a" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-white text-2xl cursor-none"
              onClick={() => setFormOpen(false)}
            >
              ×
            </button>
            {sent ? (
              <div className="text-center py-8">
                <p className="text-4xl font-black mb-4">RECEIVED.</p>
                <p className="text-gray-500">We'll be in touch within 48 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-black mb-8 tracking-tighter">START A PROJECT</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-0 py-2 bg-transparent border-b border-white/20 focus:border-red-500 focus:outline-none text-white transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-0 py-2 bg-transparent border-b border-white/20 focus:border-red-500 focus:outline-none text-white transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Budget</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full px-0 py-2 bg-transparent border-b border-white/20 focus:border-red-500 focus:outline-none text-white transition-colors"
                    >
                      <option value="" className="bg-gray-900">Select range</option>
                      <option value="under500k" className="bg-gray-900">〜¥500,000</option>
                      <option value="1m" className="bg-gray-900">¥500,000〜¥1,000,000</option>
                      <option value="3m" className="bg-gray-900">¥1,000,000〜¥3,000,000</option>
                      <option value="over3m" className="bg-gray-900">¥3,000,000〜</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Project Detail</label>
                    <textarea
                      value={form.detail}
                      onChange={(e) => setForm({ ...form, detail: e.target.value })}
                      rows={3}
                      className="w-full px-0 py-2 bg-transparent border-b border-white/20 focus:border-red-500 focus:outline-none text-white transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-black tracking-widest uppercase transition-all hover:opacity-80 mt-4 cursor-none"
                    style={{ background: "rgb(255,0,60)" }}
                  >
                    Send →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <footer className="py-8 px-8 border-t border-white/10 flex justify-between items-center text-xs text-gray-700">
        <span>© 2024 VOID. Creative Studio</span>
        <span>このページはポートフォリオ用デモです</span>
      </footer>
    </div>
  );
}
