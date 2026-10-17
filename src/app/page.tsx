import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Block } from "@/components/site/Block";
import { ContactOptions } from "@/components/site/ContactOptions";
import { cases, featuredCaseSlugs } from "@/data/cases";
import { samples } from "@/data/samples";
import { notes } from "@/data/notes";

const consults = [
  {
    title: "毎日の手作業を減らしたい",
    voice: "注文の転記や集計に毎晩時間を取られている。Excelが増えすぎて、どれが正しいか分からない。",
    help: "今の道具を活かした自動化、二重入力をなくす仕組みづくり、既存の業務システムへの機能追加",
  },
  {
    title: "新しい事業の仕組みを相談したい",
    voice: "アプリやサービスを作りたいが、何から決めればいいか分からない。見積りが妥当かも判断できない。",
    help: "構成の比較、要件定義、開発会社の見積りの読み解き、必要に応じて設計から開発まで",
  },
  {
    title: "AIを業務に使いたい",
    voice: "どの業務に使えるのか分からない。社内の情報を外部のAIに渡して大丈夫なのか心配。",
    help: "使いどころの整理、情報を外に出さない構成の検討、小さく試して効果を確かめる試作",
  },
];

const steps = [
  {
    no: "01",
    title: "伺う",
    body: "いま困っていること、使っている道具、守りたいことを伺います。事前にご相談シートを書いていただくと、当日は確認だけで済みます。",
    sample: "hearing-sheet",
  },
  {
    no: "02",
    title: "整理して、選択肢を出す",
    body: "本当の課題がどこにあるかを整理し、作らない案も含めて選択肢を比べます。おすすめの理由と、費用の根拠も書きます。",
    sample: "proposal",
  },
  {
    no: "03",
    title: "決めてから、つくる",
    body: "何を作り、何を作らないかを文書で合意してから設計・開発に入ります。同じ仕組みを、経営者向けと技術者向けの両方の言葉で説明します。",
    sample: "requirements",
  },
  {
    no: "04",
    title: "引き継ぐ",
    body: "操作手順書と仕組みの説明を添えてお渡しします。担当の方が変わっても使い続けられる状態をゴールにします。",
    sample: "manual",
  },
];

const promises = [
  {
    title: "作らずに済むものは、作りません",
    body: "既製のサービスや今のExcelで足りるなら、そうお伝えします。ツールを売る立場ではありません。",
  },
  {
    title: "自分で設計して、自分で作ります",
    body: "指示を出すだけの立場ではなく、今も現場でコードを書いています。だから、できること・かかる時間を現実的にお伝えできます。",
  },
  {
    title: "専門用語を使わずに説明します",
    body: "判断に必要な材料を分かる言葉で並べ、決めていただくのはお客様です。",
  },
  {
    title: "AIの出力も、データの扱いも自分で確かめます",
    body: "AIで作ったものはそのまま出さず、必ず確認してからお渡しします。情報セキュリティマネジメント試験の知識をもとに、データの置き場所と権限にも気を配ります。",
  },
];

const pricing = [
  { item: "初回のご相談（30分・オンライン）", price: "無料", note: "お話を伺い、進め方の方向性をお伝えします" },
  { item: "設計サポート", price: "30,000円〜", note: "ヒアリングをもとに、構成案の比較（作らない案を含む）、要件定義の骨子、進め方のロードマップを資料にまとめてお渡しします" },
  { item: "開発・導入", price: "お見積り", note: "作業時間 × 6,000円〜で算出し、見積書に作業ごとの内訳を書きます" },
  { item: "継続の伴走（月額）", price: "ご相談", note: "定例での相談、改善、開発会社とのやり取りの技術面のサポートなど" },
];

const faqs = [
  {
    q: "ITに詳しくないのですが、相談しても大丈夫ですか？",
    a: "大丈夫です。むしろそういう方のためにこの仕事をしています。専門用語を使わずにお話しし、必要な判断材料は資料にまとめてお渡しします。",
  },
  {
    q: "別のお仕事もされていると思いますが、対応できますか？",
    a: "現在、業務システム開発の案件に参画しながら、こちらのご相談をお受けしています。品質を保つため、同時にお受けする件数を絞っています。ご連絡には営業日24時間以内にお返事します。",
  },
  {
    q: "打ち合わせはどのように行いますか？",
    a: "オンライン（Zoom・Google Meet など）で行います。顔を出してお話しします。大阪在住です。",
  },
  {
    q: "お受けしていないことはありますか？",
    a: "会議に出て指示を出すだけの進行管理、画面を共有しながら操作を付き添う研修やメンター、法令に反するおそれのあるお仕事はお受けしていません。私の仕事は、自分で考えて、設計して、つくることです。",
  },
  {
    q: "契約や秘密保持はどうなりますか？",
    a: "業務委託契約でお受けします。秘密保持契約（NDA）にも対応します。クラウドワークスなどの仲介サービスを通したご依頼も可能です。なお、適格請求書発行事業者の登録はしていないため、適格請求書（インボイス）は発行できません。消費税の扱いは、お見積りの段階で明記します。",
  },
  {
    q: "AIを使って作ると、品質は大丈夫ですか？",
    a: "AIは下書きや調査を速くするために使い、出てきたものは必ず自分で確認・検証してからお渡しします。お預かりした資料を外部のAIサービスに入れてよいかは、事前にご相談して決めます。",
  },
];


// 検索結果とAI検索に「誰が・どこで・何をしているか」を正しく伝えるための構造化データ
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mukai.works/#person",
      name: "ムカイ",
      jobTitle: "システムエンジニア",
      url: "https://mukai.works",
      image: "https://mukai.works/avatar-brand.png",
      address: { "@type": "PostalAddress", addressRegion: "大阪府", addressCountry: "JP" },
      hasCredential: ["応用情報技術者", "情報セキュリティマネジメント", "基本情報技術者"].map((name) => ({
        "@type": "EducationalOccupationalCredential",
        name,
      })),
      sameAs: [
        "https://crowdworks.jp/public/employees/5455090",
        "https://x.com/m333studio",
        "https://qiita.com/mukai3",
        "https://github.com/mukai-work",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://mukai.works/#service",
      name: "mukai.works",
      description: "業務の手作業を減らす仕組みづくり、新規事業のシステム設計、AI活用の相談に、設計から実装・引き継ぎまで伴走します。",
      url: "https://mukai.works",
      areaServed: "JP",
      founder: { "@id": "https://mukai.works/#person" },
    },
  ],
};

export default function Home() {
  const featured = featuredCaseSlugs
    .map((slug) => cases.find((c) => c.slug === slug))
    .filter((c) => c !== undefined);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="flex flex-col">
        {/* ===== Hero ===== */}
        <section className="relative overflow-hidden">
          {/* 資料PDFの表紙と同じ「左端の縦帯（深緑＋金）」 */}
          <div className="absolute inset-y-0 left-0 w-2 bg-green md:w-3" aria-hidden />
          <div className="absolute inset-y-0 left-2 w-[3px] bg-gold md:left-3" aria-hidden />
          <div className="mx-auto grid max-w-[1120px] gap-12 px-7 py-[clamp(4rem,3rem+6vw,8rem)] md:px-12 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div className="rise">
              <p className="label-gold">SYSTEM ENGINEER ／ OSAKA</p>
              <h1 className="heading-ja mt-5 text-display text-green">
                つくれるエンジニアが、
                <br />
                ITの判断に伴走します。
              </h1>
              <p className="lead-ja mt-7 text-[1.02rem] text-ink-2">
                大阪のシステムエンジニア、ムカイです。業務システムの開発に携わって6年目、今も現場で設計とコードを書いています。
                だから、できること・できないこと・かかる費用を、現実的にお伝えできます。
                作らずに済むものは、作らない提案をします。
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center gap-2 rounded-[4px] bg-green px-6 font-medium text-paper transition-colors hover:bg-green-deep"
                >
                  まずは相談する（初回30分無料）
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/samples"
                  className="inline-flex h-12 items-center gap-2 rounded-[4px] border border-green/40 px-6 font-medium text-green transition-colors hover:bg-green-soft"
                >
                  成果物サンプルを見る
                </Link>
              </div>
            </div>
            <dl className="rise grid grid-cols-2 gap-px overflow-hidden rounded-[6px] border border-line bg-line [animation-delay:120ms]">
              {[
                ["開発の経験", "6年目"],
                ["携わった業務システム", "建築・医療・官公庁 ほか"],
                ["IT国家試験", "応用情報技術者 ほか2つ"],
                ["クラウドワークス 総合評価", "4.9"],
              ].map(([dt, dd]) => (
                <div key={dt} className="bg-card p-5">
                  <dt className="text-[0.75rem] text-ink-3">{dt}</dt>
                  <dd className="mt-1.5 font-serif text-[1.15rem] font-semibold leading-snug text-green">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ===== ご相談の例 ===== */}
        <Block
          id="consult"
          no="01"
          label="CONSULTATION"
          title="こんなご相談をお受けしています"
          lead="「何から聞けばいいか分からない」段階からで大丈夫です。"
          tone="surface"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {consults.map((c) => (
              <div key={c.title} className="flex flex-col rounded-[6px] border border-line bg-card p-6">
                <h3 className="font-serif text-[1.2rem] font-semibold text-green [word-break:auto-phrase] md:min-h-[3.4em]">{c.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-2">「{c.voice}」</p>
                <div className="mt-auto pt-5">
                  <p className="border-t border-line pt-4 text-[0.75rem] font-bold tracking-[0.15em] text-gold-ink">
                    お手伝いできること
                  </p>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed">{c.help}</p>
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* ===== 進め方 ===== */}
        <Block
          id="process"
          no="02"
          label="PROCESS"
          title="進め方"
          lead="各段階の終わりに確認の場を設け、合意してから次に進みます。それぞれの段階でお渡しする資料の見本を公開しています。"
        >
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => {
              const sample = samples.find((x) => x.slug === s.sample);
              return (
                <li key={s.no} className="flex flex-col border-t-2 border-green pt-5">
                  <p className="font-serif text-[1.4rem] text-gold">{s.no}</p>
                  <h3 className="mt-1 font-serif text-[1.15rem] font-semibold text-green">{s.title}</h3>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-2">{s.body}</p>
                  {sample && (
                    <a
                      href={`/samples/${sample.slug}.pdf`}
                      className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[0.85rem] text-green underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
                    >
                      <FileText size={15} />
                      見本：{sample.title}
                    </a>
                  )}
                </li>
              );
            })}
          </ol>
        </Block>

        {/* ===== 事例 ===== */}
        <Block
          id="cases"
          no="03"
          label="CASES"
          title="これまでの仕事から"
          lead="守秘のため会社名は伏せ、公開できる範囲で書いています。数字は実際に確認できたものだけを載せています。"
          tone="surface"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {featured.map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="group flex flex-col rounded-[6px] border border-line bg-card p-6 transition-colors hover:border-green/50"
              >
                <p className="text-[0.75rem] text-ink-3">{c.client}</p>
                <h3 className="mt-2 font-serif text-[1.12rem] font-semibold leading-snug text-green">{c.headline}</h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-ink-2">{c.takeaway}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-[0.85rem] text-green">
                  詳しく読む <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
          <Link href="/cases" className="mt-8 inline-flex items-center gap-1.5 text-green underline decoration-gold/60 underline-offset-4">
            事例をすべて見る（{cases.length}件） <ArrowRight size={15} />
          </Link>
          <div className="mt-14 rounded-[6px] border border-line bg-card p-7 md:p-9">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="label-gold">REVIEWS</p>
                <h3 className="mt-2 font-serif text-[1.25rem] font-semibold text-green">クラウドワークスでいただいた評価</h3>
                <p className="mt-1 text-[0.8rem] text-ink-3">2026年10月17日時点・評価34件</p>
              </div>
              <dl className="grid grid-cols-3 gap-6 text-center">
                {[
                  ["総合", "4.9"],
                  ["スケジュール", "5.0"],
                  ["コミュニケーション", "5.0"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[0.72rem] text-ink-3">{k}</dt>
                    <dd className="font-serif text-[1.8rem] font-semibold text-green">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-7 text-[0.88rem] text-ink-2">これまでの評価は制作系のご依頼が中心ですが、ご要望を伺って提案する姿勢は、ITのご相談でも同じです。</p>
            <div className="mt-5 grid gap-5">
              {[
                {
                  text: "依頼してからの対応が適切かつ迅速で安心できた。こちらの知識不足を提案力でカバーしてくれた。",
                  from: "イラスト制作のご依頼（2023年12月）",
                },
              ].map((r) => (
                <figure key={r.from} className="border-l-2 border-gold pl-5">
                  <blockquote className="text-[0.95rem] leading-relaxed">「{r.text}」</blockquote>
                  <figcaption className="mt-2 text-[0.78rem] text-ink-3">{r.from}・原文のまま</figcaption>
                </figure>
              ))}
            </div>
            <a
              href="https://crowdworks.jp/public/employees/5455090"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex text-[0.88rem] text-green underline decoration-gold/60 underline-offset-4"
            >
              すべての評価をクラウドワークスで見る
            </a>
          </div>
        </Block>

        {/* ===== サンプル ===== */}
        <Block
          id="samples"
          no="04"
          label="SAMPLES"
          title="お渡しする資料の見本"
          lead="架空の会社の「受発注の手作業を減らす」相談を題材に、最初の相談から引き継ぎまでの資料を一続きで作りました。PDFでそのままご覧いただけます。"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {samples.map((s) => (
              <a key={s.slug} href={`/samples/${s.slug}.pdf`} className="group block">
                <div className="overflow-hidden rounded-[4px] border border-line bg-card shadow-[0_1px_0_var(--color-line)] transition-transform group-hover:-translate-y-0.5">
                  <Image
                    src={`/samples/${s.slug}-p1.webp`}
                    alt={`${s.title}の1ページ目`}
                    width={640}
                    height={905}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-2 text-[0.7rem] tracking-[0.1em] text-gold-ink">{s.step}</p>
                <p className="text-[0.9rem] font-medium text-green">{s.title}</p>
              </a>
            ))}
          </div>
          <Link href="/samples" className="mt-8 inline-flex items-center gap-1.5 text-green underline decoration-gold/60 underline-offset-4">
            各資料で見ていただきたい点 <ArrowRight size={15} />
          </Link>
        </Block>

        {/* ===== 大切にしていること ===== */}
        <Block id="promise" no="05" label="PROMISE" title="お約束していること" tone="green">
          <div className="grid gap-px overflow-hidden rounded-[6px] bg-paper/25 md:grid-cols-2">
            {promises.map((p, i) => (
              <div key={p.title} className="bg-green-deep p-7">
                <p className="font-serif text-[1.5rem] text-accent-soft">{i + 1}</p>
                <h3 className="mt-1 font-serif text-[1.15rem] font-semibold text-paper">{p.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-paper/90">{p.body}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* ===== プロフィール ===== */}
        <Block id="profile" no="06" label="PROFILE" title="担当するのは、私です">
          <div className="grid gap-10 lg:grid-cols-[auto_1fr]">
            <div className="flex items-center gap-5 lg:flex-col lg:items-start">
              <Image src="/avatar-brand.png" alt="ムカイ（似顔絵）" width={120} height={120} className="rounded-full border border-line" />
              <div>
                <p className="font-serif text-[1.6rem] font-semibold tracking-[0.25em] text-green">ムカイ</p>
                <p className="text-[0.85rem] text-ink-3">システムエンジニア ／ 大阪</p>
                <p className="mt-2 text-[0.75rem] text-ink-3">本名はご契約の際にお伝えします</p>
              </div>
            </div>
            <div>
              <ol className="relative space-y-5 border-l-2 border-line pl-6">
                {[
                  ["2021年", "業務システムの開発を始める。ECの決済・外部サービス連携を担当し、新卒8名の育成リーダーも経験"],
                  ["2023年", "官公庁向け人事管理システムの開発。約20名規模のチームで、標準化・画面設計のリーダーを担当"],
                  ["2024年", "独立。医療系システムの開発支援、ECサイトの刷新（テックリード）、15万行超のTypeScript移行などを担当"],
                  ["2025年〜", "建築系の業務Webシステムにエンド企業直で参画中。ファイル保管のクラウド移行を要件定義から担当し、約3分かかっていたデータベース処理を約20秒に短縮"],
                ].map(([y, t]) => (
                  <li key={y} className="relative">
                    <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-paper" aria-hidden />
                    <p className="font-serif text-[0.95rem] font-semibold text-green">{y}</p>
                    <p className="mt-0.5 text-[0.92rem] leading-relaxed text-ink-2">{t}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-wrap gap-2">
                {["応用情報技術者", "情報セキュリティマネジメント", "基本情報技術者"].map((q) => (
                  <span key={q} className="rounded-full border border-green/30 bg-green-soft px-3 py-1 text-[0.8rem] text-green">
                    {q}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-[0.88rem] text-ink-2">
                使ってきた技術や詳しい経歴は、
                <Link href="/engineer" className="text-green underline decoration-gold/60 underline-offset-4">
                  開発会社・エージェントの方向けのページ
                </Link>
                にまとめています。
              </p>
            </div>
          </div>
        </Block>

        {/* ===== 料金 ===== */}
        <Block
          id="pricing"
          no="07"
          label="PRICING"
          title="料金の目安"
          lead="作業に入る前に、必ず金額をお伝えして合意をいただきます。途中で作業が増えそうなときも、先にご相談します。"
          tone="surface"
        >
          <div className="overflow-hidden rounded-[6px] border border-line bg-card">
            {pricing.map((p, i) => (
              <div
                key={p.item}
                className={`grid gap-1 p-5 md:grid-cols-[1.2fr_0.6fr_2fr] md:items-baseline md:gap-6 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <p className="font-medium">{p.item}</p>
                <p className="font-serif text-[1.25rem] font-semibold text-green">{p.price}</p>
                <p className="text-[0.88rem] text-ink-2">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[0.8rem] text-ink-3">※ 開発会社・エージェント経由の長期参画は別の条件になります（エージェント・開発会社の方向けページに記載）。</p>
        </Block>

        {/* ===== FAQ ===== */}
        <Block id="faq" no="08" label="FAQ" title="よくあるご質問">
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium">
                  <span>{f.q}</span>
                  <span className="mt-0.5 text-gold transition-transform group-open:rotate-45" aria-hidden>
                    ＋
                  </span>
                </summary>
                <p className="mt-3 max-w-[46em] text-[0.92rem] leading-relaxed text-ink-2">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12">
            <p className="label-gold">NOTES</p>
            <p className="mt-2 font-serif text-[1.15rem] font-semibold text-green">相談の前に読んでいただけるコラム</p>
            <ul className="mt-4 space-y-2">
              {notes.map((n) => (
                <li key={n.slug}>
                  <Link href={`/notes/${n.slug}`} className="text-[0.95rem] text-green underline decoration-gold/50 underline-offset-4 hover:decoration-gold">
                    {n.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Block>

        {/* ===== 連絡 ===== */}
        <Block
          id="contact"
          no="09"
          label="CONTACT"
          title="まずは、お気軽にご相談ください"
          lead="初回30分のご相談は無料です。相談したからといって、依頼していただく必要はありません。"
          tone="green"
        >
          <ContactOptions />
        </Block>
      </main>
      <SiteFooter />
    </>
  );
}
