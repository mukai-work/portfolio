/**
 * 成果物サンプル。すべて架空の会社「サンプル商事」の受発注IT化を題材にした一続きの資料。
 * 元のHTMLは D:\crowdworks\brand\templates\ にあり、build.sh でPDF化して public/samples/ に置く
 */
export type Sample = {
  slug: string;
  step: string;
  title: string;
  pages: number;
  summary: string;
  /** これを見て何が分かるか（安心材料としての意味） */
  why: string;
};

export const samples: Sample[] = [
  {
    slug: "hearing-sheet",
    step: "01 相談の前",
    title: "IT導入のご相談シート",
    pages: 2,
    summary: "困りごと・今の道具・体制・守りたいことを、事前に書いていただくシートです。",
    why: "技術の話より先に、業務と人の話を聞くことから始めます。",
  },
  {
    slug: "proposal",
    step: "02 ご提案",
    title: "ご提案書",
    pages: 6,
    summary: "伺った内容の整理、作らない案を含む3つの選択肢、進め方と見積りの根拠をまとめた資料です。",
    why: "なぜその案を勧めるのか、金額が何から決まっているのかが分かります。",
  },
  {
    slug: "requirements",
    step: "03 要件定義",
    title: "要件定義書",
    pages: 5,
    summary: "目的・対象範囲・やらないこと・機能一覧・運用の条件・リスク・納品物と検収・変更時の扱いを合意するための文書です。",
    why: "作り始めてから「思っていたのと違う」とならないよう、先に言葉で揃えます。",
  },
  {
    slug: "architecture",
    step: "04 設計",
    title: "構成図（経営者向け／技術者向け）",
    pages: 2,
    summary: "同じ仕組みを、経営者の方向けと技術担当の方向けの2枚で描き分けています。",
    why: "専門用語を使わずに説明できること、技術的な判断の理由も残すことの両方を見ていただけます。",
  },
  {
    slug: "manual",
    step: "05 引き継ぎ",
    title: "操作手順書",
    pages: 2,
    summary: "画面のどこを押すか、間違えたときどうするかまで書いた、現場向けの手順書です。",
    why: "作って終わりにせず、使う人が困らない状態までお渡しします。",
  },
];
