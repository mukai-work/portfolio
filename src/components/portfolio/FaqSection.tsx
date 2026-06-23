const faqs = [
  {
    q: "現在の稼働状況は？",
    a: "週1〜3日の副業案件は今すぐご対応可能です。フルタイム（週4〜5日）参画は2026年10月〜となります。まずはカジュアル面談でご相談ください。",
  },
  {
    q: "同時に何社まで受けますか？",
    a: "副業・スポット案件は2〜3社まで対応しています。品質を担保するため、フルタイム案件は1社専属での参画を基本としています。",
  },
  {
    q: "得意な案件・プロジェクトのタイプは？",
    a: "ゼロイチのSaaS・Webアプリ開発が最も得意です。要件定義〜設計〜実装〜本番リリースまで一人称で完走するプロジェクト、AI機能の組み込み、スピードが求められるMVP開発などは特に力を発揮します。",
  },
  {
    q: "単価・料金の目安を教えてください",
    a: "稼働形態によって異なりますが、月額60〜100万円が多いレンジです。案件規模・稼働日数・技術要件によって変動しますので、まずはお気軽にご相談ください。",
  },
  {
    q: "コードや設計を確認できますか？",
    a: "面談時にGitHubリポジトリをご共有します。設計ドキュメント・実装コードをご確認いただいたうえでご判断いただけます。NDA締結も対応可能です。",
  },
  {
    q: "チーム開発・既存プロジェクトへの参画も可能ですか？",
    a: "もちろん可能です。既存コードベースへのキャッチアップ・技術的負債の解消・チームの開発速度向上など、スタートアップのフェーズに合わせて柔軟に対応します。",
  },
];

export function FaqSection() {
  return (
    <section className="py-20 md:py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display tracking-[0.3em] text-xs text-blue-500 uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            よくある質問
          </h2>
        </div>
        <div className="divide-y divide-gray-100">
          {faqs.map(({ q, a }) => (
            <div key={q} className="py-6">
              <p className="text-base font-semibold text-gray-900 mb-2">Q. {q}</p>
              <p className="text-sm text-gray-600 leading-relaxed">A. {a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
