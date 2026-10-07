import { ArrowUpRight, PenLine, Twitter } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const assurances = [
  "初回30分カジュアル面談歓迎",
  "面談時にコード・設計詳細をご確認いただけます",
  "NDA締結対応可",
];

export function ContactSection() {
  return (
    <Section id="contact" tone="dark" className="overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 [background-image:radial-gradient(oklch(100%_0_0/0.12)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_70%_at_20%_60%,black,transparent)] pointer-events-none"
        aria-hidden
      />
      <div className="relative grid gap-14 md:grid-cols-12 md:gap-10 items-end">
        <Reveal className="min-w-0 md:col-span-7">
          <p className="label-mono text-white/55">
            <span className="text-accent-soft">07</span>
            <span className="mx-2 opacity-50">/</span>
            Contact
          </p>
          <h2 className="heading-ja mt-6 text-display text-white">稼働相談・スカウト</h2>
          <p className="lead-ja mt-8 text-[1rem] text-white/70">
            エンド企業・開発会社のCTO・PM、エージェント担当者からのご相談を歓迎しています。
            動画編集・台本・Web制作・ツール開発などのスポットのご依頼もお気軽にどうぞ。
            <br />
            X（Twitter）のDMからお気軽にご連絡ください。
          </p>
        </Reveal>

        <Reveal className="min-w-0 md:col-span-5" delay={120}>
          <ul className="border-t border-white/15">
            {assurances.map((a) => (
              <li
                key={a}
                className="flex items-center gap-3 py-3.5 border-b border-white/15 text-[0.875rem] text-white/75"
              >
                <span className="font-mono text-accent-soft text-xs" aria-hidden>
                  ✓
                </span>
                {a}
              </li>
            ))}
          </ul>

          <a
            href="https://x.com/m333studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex items-center justify-between gap-3 h-14 px-6 bg-accent hover:bg-[oklch(60%_0.24_262)] text-white font-medium rounded-[4px] transition-colors"
          >
            <span className="flex items-center gap-3">
              <Twitter size={19} />
              @m333studio にDMする
            </span>
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <p className="mt-5 text-[0.875rem] text-white/60">
            または note{" "}
            <a
              href="https://note.com/m333_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent-soft hover:text-white transition-colors"
            >
              <PenLine size={14} />
              @m333_studio
            </a>{" "}
            からでも
          </p>

          <p className="mt-4 font-mono text-[0.7rem] leading-relaxed text-white/50">
            副業・スポット相談は今すぐ可 · 本格参画は2026年12月〜相談可 · 月額70万円〜（応相談）
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
