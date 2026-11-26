import type { FlowStep } from "@/components/site/FlowDiagram";

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
  /** public/products/ のスクリーンショット（scripts/shoot_products.py で撮る） */
  shots: { src: string; alt: string; caption: string }[];
  /** 仕組みの図の手順。実際の処理と一致させる */
  flow: FlowStep[];
  flowCaption: string;
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
    shots: [
      {
        src: "/products/hakaru-overview.png",
        alt: "ハカルの画面: 3つの構成ごとの30問の判定内訳（積み上げ棒）と比較表",
        caption: "構成ごとの判定の内訳。文書を渡さないと赤（間違い・でっちあげ）が増える",
      },
      {
        src: "/products/hakaru-diff.png",
        alt: "ハカルの画面: 構成を変えたときに判定が変わった問題を1問ずつ見比べる",
        caption: "構成を変えて判定が変わった問題を、回答と採点の理由つきで1問ずつ見比べる",
      },
    ],
    flow: [
      { title: "質問集を用意する", body: "質問・期待する答え・キーワードを1行1問で書く。答えの無い質問も混ぜる", chips: ["JSONL"] },
      { title: "構成を変えて答えさせる", body: "モデル・プロンプト・文書の渡し方を変えて、同じ質問に答えさせる", chips: ["ローカルLLM", "Claude", "文書あり／なし"] },
      { title: "二重に採点する", body: "キーワード照合とAI審判で採点し、食い違った問題に印を付ける", key: true },
      { title: "人が確かめる", body: "AI審判の誤りを人が直し、元の判定と理由を記録に残す", key: true },
      { title: "比べて見る", body: "正答率・でっちあげ率・費用・応答時間と、悪くなった問題の一覧", chips: ["改修のたびに再実行"] },
    ],
    flowCaption: "画面からAIは呼ばない。測った結果のJSONを表示するだけなので、データを外に出さない構成（ローカルLLM）でも同じ流れで測れる。",
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
    shots: [
      {
        src: "/products/helpia-overview.png",
        alt: "ヘルピアの画面: AIが関わったコミットの割合と点検したリポジトリの切り替え",
        caption: "AIが関わったコミットの割合。印を付けない運用の分は数えられないので下限値として出す",
      },
      {
        src: "/products/helpia-bars.png",
        alt: "ヘルピアの画面: AIのコミットと人のコミットのテスト同伴率・手戻り率・変更行数を並べた棒グラフ",
        caption: "AIのコミットと人のコミットを、テスト同伴率・手戻り率・変更の大きさで並べる",
      },
    ],
    flow: [
      { title: "Gitの履歴を読む", body: "手元のリポジトリの履歴を読む。コードは外に送らない", chips: ["git log"] },
      { title: "AIの印で分ける", body: "Co-Authored-By などの印で、AIが関わったコミットと人のコミットに分ける", key: true, chips: ["Claude", "Copilot", "Cursor", "Codex"] },
      { title: "3つの指標を数える", body: "テストも一緒に変えたか・7日以内の手戻り・1回の変更の大きさ", key: true },
      { title: "任せられる状態か点検", body: "AIへの指示書・テスト・CI・秘密情報など8項目", chips: ["点数は付けない"] },
      { title: "改善案を出す", body: "足すとよいもの（AGENTS.md・CI・テストなど）を項目ごとに示す" },
    ],
    flowCaption: "判定にAIは使わず、決まった規則で数える。誰が回しても同じ数字になる。",
  },
];
