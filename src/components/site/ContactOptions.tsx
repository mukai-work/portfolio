import { ContactForm } from "./ContactForm";

/**
 * 連絡手段。メールを主にし、仲介サービスは補助の一覧にする。
 * フォームは送信先（NEXT_PUBLIC_CONTACT_ENDPOINT）、メールは NEXT_PUBLIC_CONTACT_EMAIL が設定されている時だけ出す
 */
const channels = [
  {
    name: "クラウドワークス",
    note: "評価4.9（34件・2026年10月時点。制作やライティングのご依頼が中心）・本人確認済み",
    href: "https://crowdworks.jp/public/employees/5455090",
  },
  {
    name: "ココナラ",
    note: "出品サービスの購入、または見積り相談から",
    href: "https://coconala.com/users/4366947",
  },
  {
    name: "ランサーズ",
    note: "ランサーズでのご依頼もお受けしています",
    href: "https://www.lancers.jp/profile/mkmukai333",
  },
  {
    name: "X（旧Twitter）",
    note: "@m333studio へのDM",
    href: "https://x.com/m333studio",
  },
];

export function ContactOptions() {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
      <div>
        <p className="text-[0.85rem] font-bold text-ink">メールで</p>
        {email && (
          <>
            <a
              href={`mailto:${email}`}
              className="mt-3 inline-flex h-11 items-center rounded-[4px] bg-green px-6 text-[0.95rem] font-semibold text-white hover:bg-[#24493f]"
            >
              メールで相談する
            </a>
            <p className="mt-3 text-[0.9rem] text-ink-2">
              {email}（営業日24時間以内にお返事します）
            </p>
          </>
        )}
        <p className="mt-6 text-[0.9rem] leading-relaxed text-ink-2">
          書いていただけると助かること：いま困っていること、使っている道具（Excel・紙・業務システムなど）、いつ頃までにどうなっていたいか。箇条書きで構いません。事前に整理したい方は
          <a href="/samples/hearing-sheet.pdf" className="text-green underline underline-offset-4">
            ご相談シート（PDF）
          </a>
          もお使いください。
        </p>
        {endpoint && (
          <div className="mt-8 border-t border-line pt-8">
            <ContactForm endpoint={endpoint} />
          </div>
        )}
      </div>
      <div>
        <p className="text-[0.85rem] font-bold text-ink">仲介サービス・SNSから</p>
        <ul className="mt-3 divide-y divide-line border-y border-line">
          {channels.map((c) => (
            <li key={c.name} className="py-3.5">
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-[0.95rem] text-green underline underline-offset-4">
                {c.name}
              </a>
              <p className="mt-0.5 text-[0.82rem] text-ink-3">{c.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[0.8rem] leading-relaxed text-ink-3">
          ココナラでご相談中の方は、ココナラのトークルームでそのままご連絡ください（規約上、外部での直接のやり取りはできません）。
        </p>
      </div>
    </div>
  );
}
