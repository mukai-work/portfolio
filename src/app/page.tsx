import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Block } from "@/components/site/Block";
import { ContactOptions } from "@/components/site/ContactOptions";
import { cases } from "@/data/cases";
import { samples } from "@/data/samples";

/*
 * トップページ。受託開発の記録を主役にし、相談の窓口は後ろに置く。
 * 「約束」「実績の数字パネル」「口コミの大きな数字」は販売ページの型に見えるので置かない
 */

const consults = [
  {
    trouble: "毎日の転記や集計に時間を取られている。Excelが増えすぎて、どれが正しいか分からない",
    help: "今の道具を活かした自動化、二重入力をなくす仕組み、既存の業務システムへの機能追加",
  },
  {
    trouble: "新しい事業のシステムを作りたいが、何から決めればいいか分からない。見積りが妥当かも判断できない",
    help: "構成の比較、要件定義、開発会社の見積りの読み解き。必要なら設計から開発まで",
  },
  {
    trouble: "AIを業務に使いたいが、どこに使えるか分からない。社内の情報を外部に渡すのが心配",
    help: "使いどころの整理、情報を外に出さない構成の検討、小さく試す試作",
  },
];

const steps = [
  { title: "伺う", body: "困っていること、使っている道具、変えたくない運用を伺います。", sample: "hearing-sheet" },
  { title: "選択肢を出す", body: "既存のExcelや既製サービスで足りる案も含めて比べ、費用の内訳を添えて提案します。", sample: "proposal" },
  { title: "決めてから作る", body: "何を作り、何を作らないかを文書で合意してから設計・開発に入ります。", sample: "requirements" },
  { title: "引き継ぐ", body: "操作手順書と構成の説明を添えて納品します。", sample: "manual" },
];

const pricing = [
  { item: "初回のご相談（30分・オンライン）", price: "無料", note: "状況を伺い、進め方の方向性をお伝えします" },
  { item: "設計サポート", price: "30,000円〜", note: "構成案の比較、要件定義の骨子、進め方のロードマップを資料にまとめます" },
  { item: "開発・導入", price: "お見積り", note: "作業時間 × 6,000円〜。見積書に作業ごとの内訳を書きます" },
  { item: "継続のご相談（月額）", price: "ご相談", note: "定例での相談、改善、開発会社とのやり取りの技術面のサポートなど" },
];

const history = [
  ["2021年", "会社員として業務システムの開発を始める"],
  ["2022年", "ECの決済・外部サービス連携の開発。新卒8名の育成リーダー"],
  ["2023年", "官公庁向け人事管理システムの開発。約20名のチームで標準化・画面設計のリーダー"],
  ["2024年", "独立。医療系システム、ECサイト刷新（テックリード）、15万行超のTypeScript移行"],
  ["2025年〜", "建築系の業務Webシステムにエンド企業直で参画中。ファイル保管のクラウド移行を要件定義から担当、約3分の処理を約20秒に短縮"],
];

const policies = [
  "既存のExcelや既製サービスで足りる場合は、その旨を提案書に書きます",
  "説明は、専門用語を言い換えた資料でお渡しします",
  "AIは下書きと調査に使い、出力は自分で確認します。お預かりした資料を、了承なく外部のAIサービスに入力することはありません",
];

const faqs = [
  {
    q: "ITに詳しくないのですが、相談できますか？",
    a: "はい。専門用語は資料で言い換えてお渡しします。判断に必要な材料を並べ、決めていただくのはお客様です。",
  },
  {
    q: "別のお仕事もされていますが、対応できますか？",
    a: "現在、業務システム開発の案件に参画しながらお受けしています。お受けしたご相談は、完了と引き継ぎまで私が担当します。同時にお受けする件数は絞っています。",
  },
  {
    q: "打ち合わせはどのように行いますか？",
    a: "オンライン（Zoom・Google Meet など）で、顔を出してお話しします。大阪在住です。",
  },
  {
    q: "納品したあと、困ったときはどうなりますか？",
    a: "納品後の不具合への対応の範囲と期間は、お見積りと契約書に明記してからお受けします。その後の改修は、作業時間に応じたお見積りか月額でお受けします。Googleアカウントなどは御社の名義で用意していただくので、契約が終わっても仕組みとデータはそのまま使えます。",
  },
  {
    q: "お受けしていないことはありますか？",
    a: "法令に反するおそれのあるお仕事はお受けしていません。",
  },
  {
    q: "契約・秘密保持・請求はどうなりますか？",
    a: "業務委託契約でお受けし、秘密保持契約（NDA）にも対応します。契約書は御社の書式でも、こちらのひな形でも構いません。クラウドワークス経由のご依頼では、報酬はいったんクラウドワークスに預けられ、検収のあとに支払われます。消費税は免税事業者のため加算せず、適格請求書（インボイス）は発行できません。本名はご契約の際にお伝えします。",
  },
  {
    q: "AIを使って作ると、品質は大丈夫ですか？",
    a: "AIは下書きや調査を速くするために使い、出てきたものは必ず自分で確認・検証してから納品します。お預かりした資料を外部のAIサービスに入れる場合は、どの情報をどのサービスに入れるかを事前にお伝えし、了承をいただいてからにします。",
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
        "https://coconala.com/users/4366947",
        "https://www.lancers.jp/profile/mkmukai333",
        "https://x.com/m333studio",
        "https://qiita.com/mukai3",
        "https://github.com/mukai-work",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://mukai.works/#service",
      name: "mukai.works",
      description: "業務システムの設計と開発。中小企業の業務システムの相談・設計・開発もお受けしています。",
      url: "https://mukai.works",
      areaServed: "JP",
      founder: { "@id": "https://mukai.works/#person" },
    },
  ],
};

const link = "text-green underline underline-offset-4 hover:text-[#24493f]";

export default function Home() {
  const clientCases = cases.filter((c) => c.kind !== "自社開発");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="flex flex-col">
        {/* ===== ヒーロー ===== */}
        <section>
          <div className="mx-auto grid max-w-[1080px] items-start gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[7fr_5fr]">
            <div>
              <p className="label-gold">大阪の個人事業主 ／ 業務システム開発6年目</p>
              <h1 className="heading-ja mt-3 text-display text-ink">
                業務システムの設計と開発。
                <br />
                相談から引き継ぎまで担当します。
              </h1>
              <p className="lead-ja mt-6 text-[1.02rem] text-ink-2">
                C#／ASP.NETを中心に、建築・医療・官公庁・ECの業務システムを6年つくってきました。今も開発の現場に参画しています。中小企業の「Excelが増えすぎた」「見積りが妥当か分からない」といったご相談も、設計からお受けしています。
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="#work"
                  className="inline-flex h-11 items-center rounded-[4px] bg-green px-6 text-[0.95rem] font-semibold text-white hover:bg-[#24493f]"
                >
                  これまでの仕事を見る
                </Link>
                <Link href="#contact" className={`text-[0.95rem] ${link}`}>
                  相談する
                </Link>
              </div>
              <dl className="mt-10 grid max-w-[560px] grid-cols-[7.5em_1fr] border-t border-line text-[0.88rem]">
                {[
                  ["経験", "2021年10月から業務システムの開発（6年目）"],
                  ["資格", "応用情報技術者／情報セキュリティマネジメント／基本情報技術者"],
                  ["契約", "業務委託・NDA対応／オンライン（顔出し）"],
                ].map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="border-b border-line py-2.5 text-ink-3">{k}</dt>
                    <dd className="border-b border-line py-2.5">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:mt-1">
              <div className="border border-line p-6">
                <p className="text-[0.95rem] font-bold text-ink">ご相談の受付</p>
                <dl className="mt-4 grid grid-cols-[6em_1fr] text-[0.88rem]">
                  {[
                    ["受付", "受付中（2026年10月時点）"],
                    ["お返事", "営業日24時間以内"],
                    ["初回", "30分・オンライン・無料"],
                    ["メール", "info@mukai.works"],
                  ].map(([k, v]) => (
                    <div key={k} className="contents">
                      <dt className="border-t border-line py-2.5 text-ink-3">{k}</dt>
                      <dd className="border-t border-line py-2.5">
                        {k === "メール" ? (
                          <a href={`mailto:${v}`} className={link}>
                            {v}
                          </a>
                        ) : (
                          v
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[0.82rem] leading-relaxed text-ink-3">
                  クラウドワークス・ココナラ・ランサーズからのご依頼もお受けしています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== これまでの仕事 ===== */}
        <Block
          id="work"
          title="これまでの仕事"
          lead="守秘のため会社名は伏せ、業種と規模までを書いています。数字は実際に確認できたものだけです。"
        >
          <ul className="divide-y divide-line border-y border-line">
            {clientCases.map((c) => (
              <li key={c.slug}>
                <Link href={`/cases/${c.slug}`} className="group grid gap-1 py-4 md:grid-cols-[11em_1fr] md:gap-6">
                  <span className="text-[0.82rem] text-ink-3 md:pt-0.5">{c.period.replace(/（.*?）/, "")}</span>
                  <span>
                    <span className="block text-[1rem] font-bold leading-snug text-ink group-hover:text-green">{c.headline}</span>
                    <span className="mt-1 block text-[0.82rem] text-ink-3">{c.client}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.9rem]">
            <Link href="/cases" className={link}>
              事例をくわしく読む
            </Link>
            <span className="mx-3 text-line-strong">|</span>
            <Link href="/works" className={link}>
              自分で作ったもの（販売中のChrome拡張、業務用ツール、地域情報サイト など）
            </Link>
          </p>
        </Block>

        {/* ===== ご相談の例 ===== */}
        <Block id="consult" title="ご相談の例">
          <div className="border-b border-line">
            <div className="hidden grid-cols-2 border-y border-line bg-surface text-[0.82rem] font-bold text-ink-2 md:grid">
              <p className="px-4 py-3">困っていること</p>
              <p className="px-4 py-3">お手伝いできること</p>
            </div>
            {consults.map((c) => (
              <div key={c.trouble} className="grid border-t border-line md:grid-cols-2">
                <p className="px-4 py-4 text-[0.92rem] leading-relaxed">{c.trouble}</p>
                <p className="px-4 pb-4 text-[0.92rem] leading-relaxed text-ink-2 md:py-4">{c.help}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* ===== 進め方 ===== */}
        <Block
          id="process"
          title="進め方"
          lead="各段階の終わりに確認の場を設け、合意してから次に進みます。各段階でお渡しする資料の見本を公開しています。"
        >
          <ol className="grid border-y border-line md:grid-cols-4 md:divide-x md:divide-line">
            {steps.map((s, i) => {
              const sample = samples.find((x) => x.slug === s.sample);
              return (
                <li key={s.title} className="flex flex-col border-t border-line px-4 py-5 first:border-t-0 md:border-t-0">
                  <p className="text-[0.82rem] text-ink-3">{`ステップ${i + 1}`}</p>
                  <h3 className="mt-1 text-[1rem] font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-2">{s.body}</p>
                  {sample && (
                    <a href={`/samples/${sample.slug}.pdf`} className={`mt-auto pt-4 text-[0.85rem] whitespace-nowrap ${link}`}>
                      見本：{sample.title}
                    </a>
                  )}
                </li>
              );
            })}
          </ol>
        </Block>

        {/* ===== 資料の見本 ===== */}
        <Block
          id="samples"
          title="資料の見本"
          lead="架空の会社の「受発注の手作業を減らしたい」という相談を題材に、相談から引き継ぎまでの資料を作りました。"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {samples.map((s) => (
              <a key={s.slug} href={`/samples/${s.slug}.pdf`} className="group block">
                <div className="overflow-hidden rounded-[2px] border border-line">
                  <Image src={`/samples/${s.slug}-p1.webp`} alt={`${s.title}の1ページ目`} width={640} height={905} className="h-auto w-full" />
                </div>
                <p className="mt-2 text-[0.85rem] font-bold text-ink group-hover:text-green">{s.title}</p>
              </a>
            ))}
          </div>
          <p className="mt-5 text-[0.9rem]">
            <Link href="/samples" className={link}>
              各資料の説明を見る
            </Link>
          </p>
        </Block>

        {/* ===== 料金 ===== */}
        <Block id="pricing" title="料金の目安" lead="作業に入る前に金額をお伝えし、合意をいただいてから始めます。作業が増えそうなときも先にご相談します。">
          <table className="w-full border-collapse text-left text-[0.92rem]">
            <thead className="hidden md:table-header-group">
              <tr className="border-y border-line bg-surface text-[0.82rem] text-ink-2">
                <th className="px-4 py-3 font-bold">内容</th>
                <th className="px-4 py-3 text-right font-bold">金額</th>
                <th className="px-4 py-3 font-bold">含まれるもの</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((p) => (
                <tr key={p.item} className="block border-b border-line py-3 md:table-row md:py-0">
                  <td className="block px-4 py-1 font-bold md:table-cell md:py-3.5">{p.item}</td>
                  <td className="block px-4 py-1 font-semibold tabular-nums text-ink md:table-cell md:py-3.5 md:text-right md:whitespace-nowrap">{p.price}</td>
                  <td className="block px-4 py-1 text-ink-2 md:table-cell md:py-3.5">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-[0.8rem] text-ink-3">
            消費税は加算しません（免税事業者）。開発会社・エージェント経由の長期参画の条件は
            <Link href="/engineer" className={link}>
              こちら
            </Link>
            。
          </p>
        </Block>

        {/* ===== プロフィール ===== */}
        <Block id="profile" title="プロフィール">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="flex items-center gap-4">
                <Image src="/avatar-brand.png" alt="ムカイ（似顔絵）" width={64} height={64} className="rounded-full" />
                <div>
                  <p className="text-[1.1rem] font-bold text-ink">ムカイ</p>
                  <p className="text-[0.82rem] text-ink-3">システムエンジニア（個人事業主）／大阪</p>
                </div>
              </div>
              <dl className="mt-6 grid grid-cols-[6em_1fr] border-t border-line text-[0.88rem]">
                {history.map(([y, t]) => (
                  <div key={y} className="contents">
                    <dt className="border-b border-line py-3 text-ink-3">{y}</dt>
                    <dd className="border-b border-line py-3 leading-relaxed">{t}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[0.88rem] text-ink-2">
                資格：応用情報技術者／情報セキュリティマネジメント／基本情報技術者
              </p>
              <p className="mt-2 text-[0.88rem]">
                <Link href="/engineer" className={link}>
                  使ってきた技術と詳しい経歴
                </Link>
              </p>
            </div>
            <div>
              <h3 className="text-[0.95rem] font-bold text-ink">仕事の進め方で決めていること</h3>
              <ul className="mt-3 divide-y divide-line border-y border-line text-[0.9rem] leading-relaxed">
                {policies.map((p) => (
                  <li key={p} className="py-3">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Block>

        {/* ===== FAQ ===== */}
        <Block id="faq" title="よくあるご質問">
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold">
                  <span>{f.q}</span>
                  <span className="text-ink-3 transition-transform group-open:rotate-45" aria-hidden>
                    ＋
                  </span>
                </summary>
                <p className="mt-3 max-w-[46em] text-[0.92rem] leading-relaxed text-ink-2">{f.a}</p>
              </details>
            ))}
          </div>
        </Block>

        {/* ===== 連絡 ===== */}
        <Block id="contact" title="ご相談・お問い合わせ">
          <ContactOptions />
        </Block>
      </main>
      <SiteFooter />
    </>
  );
}
