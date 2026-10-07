"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** アニメーション開始の遅延（ms）。カードの時間差表示に使う */
  delay?: number;
  className?: string;
};

/**
 * ビューポート到達時に一度だけ .is-visible を付与するラッパー。
 * 初期の非表示は html.js 配下でのみ効く（globals.css）ため、JS無効時も本文は読める。
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // head のスクリプトが 4 秒後にこれを確認し、未設定なら初期非表示ごと解除する
    document.documentElement.dataset.revealReady = "1";
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
