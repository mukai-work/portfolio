"use client";

import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function currentTheme(): Theme {
  const forced = document.documentElement.dataset.theme;
  return forced === "light" || forced === "dark" ? forced : systemTheme();
}

/** OS と同じ側を選んだら手動指定を解除し、以後は OS の設定変更に追従させる */
function applyTheme(next: Theme) {
  const root = document.documentElement;
  try {
    if (next === systemTheme()) {
      delete root.dataset.theme;
      localStorage.removeItem(STORAGE_KEY);
    } else {
      root.dataset.theme = next;
      localStorage.setItem(STORAGE_KEY, next);
    }
  } catch {
    root.dataset.theme = next;
  }
}

export function ThemeToggle() {
  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduce) {
      applyTheme(next);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const root = document.documentElement;

    root.classList.add("theme-switching");
    const transition = document.startViewTransition(() => flushSync(() => applyTheme(next)));
    // 描画が止まっていて遷移が始まらない場合でも、配色の切替自体は必ず実行する
    const fallback = window.setTimeout(() => transition.skipTransition(), 1000);
    transition.updateCallbackDone.finally(() => window.clearTimeout(fallback));
    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        {
          duration: 550,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    }).catch(() => {});
    transition.finished.finally(() => root.classList.remove("theme-switching"));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="ライト表示とダーク表示を切り替え"
      title="ライト／ダーク切替"
      className="inline-flex items-center justify-center w-9 h-9 rounded-[4px] border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors"
    >
      <Moon size={16} strokeWidth={1.75} className="light-only" aria-hidden />
      <Sun size={16} strokeWidth={1.75} className="dark-only" aria-hidden />
    </button>
  );
}
