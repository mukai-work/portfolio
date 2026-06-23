import { Twitter } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-display tracking-[0.3em] text-xs text-blue-300 uppercase mb-4">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          稼働相談・スカウト
        </h2>
        <p className="text-gray-300 mb-8">
          スタートアップのCTO・PM・エージェント担当者からのご相談を歓迎しています。
          <br />
          X（Twitter）のDMからお気軽にご連絡ください。
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10 text-xs text-gray-400">
          <span>✓ 初回30分カジュアル面談歓迎</span>
          <span>✓ 面談時にコード・設計詳細をご確認いただけます</span>
          <span>✓ NDA締結対応可</span>
        </div>

        <a
          href="https://x.com/m333studio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-black hover:bg-gray-800 text-white font-medium rounded-xl transition-colors border border-white/10 shadow-lg text-base"
        >
          <Twitter size={20} />
          @m333studio にDMする
        </a>

        <p className="mt-6 text-xs text-gray-500">
          副業・スポット相談は今すぐ可 · フルタイム参画は2026年10月〜
        </p>
      </div>
    </section>
  );
}
