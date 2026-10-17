import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "./ContactForm";

/**
 * 連絡手段。
 * 仲介サービス経由の依頼は支払いが守られるので、法人・初めての方にはそちらを先に案内する。
 * フォームは送信先（NEXT_PUBLIC_CONTACT_ENDPOINT）が設定されている時だけ出す
 */
const channels = [
  {
    name: "クラウドワークス",
    note: "契約とお支払いをクラウドワークス上で行えます。評価4.9（34件）・本人確認済み。",
    href: "https://crowdworks.jp/public/employees/5455090",
    cta: "プロフィールを見る",
  },
  {
    name: "ココナラ",
    note: "出品サービスからの購入のほか、見積り相談から依頼内容を決めることもできます。",
    href: "https://coconala.com/users/4366947",
    cta: "プロフィールを見る",
  },
  {
    name: "ランサーズ",
    note: "ランサーズでのご依頼もお受けしています。",
    href: "https://www.lancers.jp/profile/mkmukai333",
    cta: "プロフィールを見る",
  },
  {
    name: "X（旧Twitter）のDM",
    note: "「サイトを見た」と一言添えて、お気軽にどうぞ。",
    href: "https://x.com/m333studio",
    cta: "@m333studio",
  },
];

export function ContactOptions() {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
  // 転送設定が届くことを確認してから環境変数に入れる。未設定のうちは表示しない
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const list = email
    ? [
        {
          name: "メール",
          note: "法人の方はこちらが便利です。営業日24時間以内にお返事します。",
          href: `mailto:${email}`,
          cta: email,
        },
        ...channels,
      ]
    : channels;
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-4">
        {list.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 rounded-[6px] border border-paper/15 bg-paper/5 p-5 transition-colors hover:bg-paper/10"
          >
            <div>
              <p className="font-medium text-paper">{c.name}</p>
              <p className="mt-1 text-[0.85rem] text-paper/70">{c.note}</p>
              <p className="mt-3 text-[0.85rem] text-accent-soft">{c.cta}</p>
            </div>
            <ArrowUpRight className="mt-1 shrink-0 text-paper/50 transition-colors group-hover:text-paper" size={18} />
          </a>
        ))}
        <p className="text-[0.8rem] leading-relaxed text-paper/60">
          ココナラでご相談中の方は、ココナラのトークルームでそのままご連絡ください（規約上、外部での直接のやり取りはできません）。
        </p>
      </div>
      <div className="rounded-[6px] border border-paper/15 bg-paper/5 p-6">
        {endpoint ? (
          <ContactForm endpoint={endpoint} />
        ) : (
          <div className="space-y-3 text-[0.9rem] text-paper/80">
            <p className="font-serif text-lg text-paper">ご連絡のときに書いていただけると助かること</p>
            <ul className="list-disc space-y-1.5 pl-5 marker:text-accent-soft">
              <li>いま困っていること（箇条書きで構いません）</li>
              <li>使っている道具（Excel・紙・業務システムなど）</li>
              <li>いつ頃までに、どうなっていたいか</li>
            </ul>
            <p className="pt-2 text-[0.85rem] text-paper/65">
              事前に整理したい方は、
              <a href="/samples/hearing-sheet.pdf" className="text-accent-soft underline underline-offset-4">
                ご相談シート（PDF）
              </a>
              もお使いください。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
