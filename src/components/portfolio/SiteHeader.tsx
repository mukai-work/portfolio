"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#skills", label: "Skills" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 24);
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-deep/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* 読了プログレスバー */}
      <span
        className="absolute top-0 left-0 h-[2px] w-full bg-accent origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="font-mono text-sm font-bold tracking-widest text-white"
          aria-label="ページ先頭へ"
        >
          MUKAI<span className="cursor-blink text-accent-soft">_</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="ページ内ナビゲーション">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-xs tracking-wider text-white/60 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="inline-flex items-center px-4 py-2 bg-accent hover:bg-[#3d74ff] text-white text-xs font-medium rounded transition-colors"
        >
          稼働相談する
        </Link>
      </div>
    </header>
  );
}
