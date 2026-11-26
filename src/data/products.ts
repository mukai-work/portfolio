/** 自分で作って公開している製品（ムカイクリエイトスタジオ）。実測の数字だけを書く */
export type Product = {
  slug: string;
  name: string;
  reading: string;
  tagline: string;
  summary: string;
  points: string[];
  stack: string;
  demoUrl: string;
  codeUrl: string;
  status: string;
};

export const products: Product[] = [
  {
    slug: "hakaru",
    name: "ハカル",
    reading: "HAKARU",
    tagline: "AI機能を入れる前に、正答率とコストを数字で出す",
    summary:
      "同じ質問集を、モデル・プロンプト・文書の渡し方を変えた構成で答えさせ、正答率・文書に無いことを言い切る割合・1問あたりの費用・応答時間を並べます。架空の社内ヘルプAIで30問×3構成を実際に測った結果を公開しています。",
    points: [
      "架空の社内FAQ 30問で、文書を渡さないローカルLLM（Qwen3.6）は正答率13.3%、渡すと96.7%（2026-11-26 実測・人が判定を確認した後の値）",
      "採点はキーワード照合とAI審判の二重。今回は審判が2問を誤判定し、人が直した理由を結果に残している",
      "改修前後を比べて、悪くなった問題を一覧にする（CIで回せる）",
      "データを社外に出さない構成（ローカルLLM）でも実施できる",
    ],
    stack: "C#（.NET 10）・Vue 3・TypeScript・LM Studio",
    demoUrl: "/hakaru",
    codeUrl: "https://github.com/mukai-work/hakaru",
    status: "公開中",
  },
  {
    slug: "helpia",
    name: "ヘルピア",
    reading: "HELPIA",
    tagline: "AIが書いたコードが、チームの負担になっていないかを数字で見る",
    summary:
      "Gitの履歴から、AIが関わったコミット（Co-Authored-By などの印）を見分け、人のコミットと並べて「テストも一緒に変えているか」「7日以内に直し直していないか」「1回の変更が大きすぎないか」を数えます。リポジトリがAIに任せられる状態か（指示書・テスト・CIなど）も点検します。",
    points: [
      "判定にAIを使わず、決まった規則で数える（誰が回しても同じ数字・コードを外に送らない）",
      "作者のサイト mukai.works では、40コミット中36件にAIの印があり、テストを一緒に変えたコミットは0件だった（2026-11-27 点検）",
      "印を付けない運用のコミットは見分けられないので、AIの割合は下限値として表示する",
      "点数は付けず、足すとよいもの（AGENTS.md・CI・テストなど）を項目ごとに示す",
    ],
    stack: "C#（.NET 10）・Vue 3・TypeScript・Git",
    demoUrl: "/helpia",
    codeUrl: "https://github.com/mukai-work/helpia",
    status: "公開中",
  },
];
