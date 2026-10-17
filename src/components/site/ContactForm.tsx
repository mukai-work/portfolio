"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

/** Formspree 互換の送信先へ JSON で送る。送信先URLは環境変数で渡す */
export function ContactForm({ endpoint }: { endpoint: string }) {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <p className="text-paper">
        送信しました。1営業日以内にお返事します。届かない場合は、お手数ですがXのDMでお知らせください。
      </p>
    );
  }

  const field =
    "mt-1 w-full rounded-[4px] border border-paper/20 bg-paper/95 px-3 py-2 text-[0.95rem] text-ink outline-none focus:border-accent-soft";
  return (
    <form onSubmit={onSubmit} className="space-y-4 text-[0.85rem] text-paper/80">
      <label className="block">
        お名前（会社名）
        <input name="name" required className={field} autoComplete="name" />
      </label>
      <label className="block">
        メールアドレス
        <input name="email" type="email" required className={field} autoComplete="email" />
      </label>
      <label className="block">
        ご相談の内容
        <textarea name="message" required rows={5} className={field} placeholder="いま困っていること、使っている道具、いつ頃までに など" />
      </label>
      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex h-11 items-center rounded-[4px] bg-paper px-6 font-medium text-green transition-colors hover:bg-gold-soft disabled:opacity-60"
      >
        {state === "sending" ? "送信中…" : "送信する"}
      </button>
      {state === "error" && <p className="text-accent-soft">送信できませんでした。XのDMからご連絡ください。</p>}
    </form>
  );
}
