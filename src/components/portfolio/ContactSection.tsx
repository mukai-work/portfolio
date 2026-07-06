import { PenLine, Twitter } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 px-6 bg-navy overflow-hidden"
    >
      <div className="absolute inset-0 bg-blueprint" aria-hidden />
      <div
        className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[640px] h-[400px] rounded-full bg-accent/15 blur-[140px]"
        aria-hidden
      />
      <div className="relative max-w-2xl mx-auto text-center">
        <SectionHeading index="05" label="Contact" title="稼働相談・スカウト" dark />

        <Reveal>
          <p className="text-white/70 mb-8 -mt-8">
            スタートアップのCTO・PM・エージェント担当者からのご相談を歓迎しています。
            <br />
            X（Twitter）のDMからお気軽にご連絡ください。
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 font-mono text-xs text-white/50">
            <span>✓ 初回30分カジュアル面談歓迎</span>
            <span>✓ 面談時にコード・設計詳細をご確認いただけます</span>
            <span>✓ NDA締結対応可</span>
          </div>

          <a
            href="https://x.com/m333studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-[#3d74ff] text-white font-medium rounded transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5 text-base"
          >
            <Twitter size={20} />
            @m333studio にDMする
          </a>

          <p className="mt-6 text-sm text-white/60">
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

          <p className="mt-4 font-mono text-xs text-white/40">
            副業・スポット相談は今すぐ可 · フルタイム参画は2026年10月〜
          </p>
        </Reveal>
      </div>
    </section>
  );
}
