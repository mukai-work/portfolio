export type DemoConfig = {
  slug: string;
  layout?: "classic" | "editorial" | "bold";
  isDark?: boolean;
  name: string;
  tagline: string;
  designConcept: string;
  highlights: string[];
  tech: string[];
  colors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
    textLight: string;
  };
  hero: {
    heading: string;
    subheading: string;
    cta: string;
    imageUrl: string;
  };
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  gallery: {
    src: string;
    alt: string;
  }[];
  testimonials: {
    name: string;
    text: string;
    rating: number;
  }[];
  access: {
    address: string;
    hours: string;
    phone: string;
  };
};

const UNSPLASH = "https://images.unsplash.com/photo-";

export const demos: DemoConfig[] = [
  // 1. レストラン
  {
    slug: "restaurant",
    layout: "classic",
    name: "レストラン",
    tagline: "素材の声を聴く、一皿の芸術",
    designConcept: "ダークネイビーとシャンパンゴールドの組み合わせで上質感を演出。Playfair Displayの英文と日本語明朝のコントラストで料理を引き立てる。",
    highlights: ["ネット予約連携", "メニュー更新可", "高級感デザイン"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "MicroCMS"],
    colors: { primary: "#1A1A2E", accent: "#C9A96E", background: "#F9F6F0", text: "#1A1A2E", textLight: "#6B6B5E" },
    hero: {
      heading: "素材の声を聴く、一皿の芸術",
      subheading: "季節の素材を、料理人の手で。誠実な仕事から生まれる一皿を、特別な時間とともに。",
      cta: "ご予約はこちら",
      imageUrl: `${UNSPLASH}1467003909585-2f8a72700288?w=1920&q=80`,
    },
    services: [
      { title: "シェフズコース", description: "季節の食材を最大限に活かした、シェフ渾身の全7皿コース。", icon: "ChefHat" },
      { title: "ワインペアリング", description: "ソムリエが料理に寄り添うワインを一杯ずつご提案します。", icon: "Wine" },
      { title: "個室・半個室", description: "接待や記念日に。落ち着いた個室を3室ご用意しています。", icon: "DoorClosed" },
      { title: "記念日プラン", description: "メッセージプレートやお花のご手配も承ります。", icon: "Gift" },
    ],
    gallery: [
      { src: `${UNSPLASH}1467003909585-2f8a72700288?w=800&q=80`, alt: "店内の様子" },
      { src: `${UNSPLASH}1546069901-ba9599a7e63c?w=800&q=80`, alt: "メイン料理" },
      { src: `${UNSPLASH}1551183053-bf91a1d81141?w=800&q=80`, alt: "前菜の盛り合わせ" },
      { src: `${UNSPLASH}1559339352-11d035aa65de?w=800&q=80`, alt: "デザートプレート" },
      { src: `${UNSPLASH}1510812431401-41d2bd2722f3?w=800&q=80`, alt: "ワインセラー" },
      { src: `${UNSPLASH}1544025162-d76694265947?w=800&q=80`, alt: "ステーキ" },
    ],
    testimonials: [
      { name: "K.M 様", text: "記念日のお祝いに利用しました。お料理はもちろん、サービスのきめ細やかさに感動しました。", rating: 5 },
      { name: "T.S 様", text: "接待で利用。落ち着いた個室と上質なお料理で、商談もスムーズに進みました。", rating: 5 },
      { name: "Y.A 様", text: "ワインペアリングが圧巻。料理との相性を丁寧に説明していただき、勉強にもなりました。", rating: 4 },
    ],
    access: { address: "東京都港区南青山1-2-3 サンプルビル1F", hours: "ランチ 12:00-15:00 / ディナー 18:00-23:00（月曜定休）", phone: "03-1234-5678" },
  },

  // 2. 美容室
  {
    slug: "beauty-salon",
    layout: "editorial",
    name: "美容室",
    tagline: "あなたの美しさを、引き出す",
    designConcept: "やわらかなピンクとモノトーンで上品さを演出。ゆとりのある余白と細い書体で女性らしさを表現。",
    highlights: ["予約システム連携", "Instagram連携", "女性向けデザイン"],
    tech: ["Next.js", "Tailwind CSS", "予約システム連携", "Instagram API"],
    colors: { primary: "#2D2D2D", accent: "#D4A5C9", background: "#FAFAFA", text: "#2D2D2D", textLight: "#888888" },
    hero: {
      heading: "あなたの美しさを、引き出す",
      subheading: "ライフスタイルに合わせて、一人ひとりに似合うスタイルを丁寧にご提案します。",
      cta: "ご予約はこちら",
      imageUrl: `${UNSPLASH}1560869713-7d0a29430803?w=1920&q=80`,
    },
    services: [
      { title: "カット", description: "骨格と髪質を見極め、扱いやすく可愛らしいスタイルをデザインします。", icon: "Scissors" },
      { title: "カラー", description: "ダメージを抑えながら、お肌に合わせた透明感のあるカラーをご提案。", icon: "Palette" },
      { title: "パーマ", description: "デジタルパーマでくせ毛風や柔らかなウェーブを思いのままに。", icon: "Sparkles" },
      { title: "ヘッドスパ", description: "頭皮ケアと癒しのリラクゼーション。日々の疲れをリセット。", icon: "Flower2" },
    ],
    gallery: [
      { src: `${UNSPLASH}1560869713-7d0a29430803?w=800&q=80`, alt: "店内インテリア" },
      { src: `${UNSPLASH}1521590832167-7bcbfaa6381f?w=800&q=80`, alt: "カット施術" },
      { src: `${UNSPLASH}1522337360788-8b13dee7a37e?w=800&q=80`, alt: "ヘアスタイル" },
      { src: `${UNSPLASH}1487412947147-5cebf100ffc2?w=800&q=80`, alt: "カラーリング" },
      { src: `${UNSPLASH}1560869713-7d0a29430803?w=800&q=80`, alt: "施術風景" },
      { src: `${UNSPLASH}1580618672591-eb180b1a973f?w=800&q=80`, alt: "スタイリング" },
    ],
    testimonials: [
      { name: "Y.K 様", text: "丁寧なカウンセリングで、思い通りのスタイルになりました。リピート決定です。", rating: 5 },
      { name: "M.S 様", text: "ヘッドスパが本当に気持ちよく、家でも髪の調子が良くなりました。", rating: 5 },
      { name: "A.T 様", text: "落ち着いた雰囲気で、長時間でもリラックスして過ごせます。", rating: 4 },
    ],
    access: { address: "東京都渋谷区神宮前4-5-6 ヒルズ2F", hours: "10:00-20:00（火曜定休）", phone: "03-2345-6789" },
  },

  // 3. ジム
  {
    slug: "gym",
    layout: "bold",
    isDark: true,
    name: "ジム・フィットネス",
    tagline: "限界を超えろ。",
    designConcept: "ブラックと鮮烈なオレンジで力強さを表現。大胆なタイポグラフィと低照度の写真で本気度を伝える。",
    highlights: ["Stripe決済対応", "無料体験LP", "体験予約フォーム"],
    tech: ["Next.js", "Tailwind CSS", "アニメーション", "Stripe決済"],
    colors: { primary: "#0A0A0A", accent: "#FF4500", background: "#111111", text: "#FFFFFF", textLight: "#AAAAAA" },
    hero: {
      heading: "限界を超えろ。",
      subheading: "妥協のないトレーニングと、結果にコミットするパーソナル指導。本気のあなたを待っている。",
      cta: "無料体験を予約する",
      imageUrl: `${UNSPLASH}1534438327276-14e5300c3a48?w=1920&q=80`,
    },
    services: [
      { title: "パーソナルトレーニング", description: "経験豊富なトレーナーがマンツーマンで目標達成までサポートします。", icon: "Dumbbell" },
      { title: "グループレッスン", description: "HIIT・ヨガ・ボクササイズなど多彩なプログラムを開催。", icon: "Users" },
      { title: "栄養指導", description: "体づくりに直結する食事を、管理栄養士がプランニング。", icon: "Apple" },
      { title: "24時間利用", description: "あなたのライフスタイルに合わせて、いつでもトレーニング可能。", icon: "Clock" },
    ],
    gallery: [
      { src: `${UNSPLASH}1534438327276-14e5300c3a48?w=800&q=80`, alt: "ジム内観" },
      { src: `${UNSPLASH}1571019613454-1cb2f99b2d8b?w=800&q=80`, alt: "トレーニング風景" },
      { src: `${UNSPLASH}1581009146145-b5ef050c2e1e?w=800&q=80`, alt: "ウェイトエリア" },
      { src: `${UNSPLASH}1517836357463-d25dfeac3438?w=800&q=80`, alt: "パーソナル指導" },
      { src: `${UNSPLASH}1538805060514-97d9cc17730c?w=800&q=80`, alt: "有酸素マシン" },
      { src: `${UNSPLASH}1574680096145-d05b474e2155?w=800&q=80`, alt: "トレーニング器具" },
    ],
    testimonials: [
      { name: "R.H 様", text: "3ヶ月で-8kg。トレーナーさんが本当に親身に向き合ってくれました。", rating: 5 },
      { name: "S.O 様", text: "本格的なマシンが揃っていて、本気でトレーニングしたい人におすすめ。", rating: 5 },
      { name: "T.K 様", text: "24時間使えるので仕事終わりでも通えて、習慣化できました。", rating: 4 },
    ],
    access: { address: "東京都新宿区西新宿7-8-9 タワービルB1F", hours: "24時間営業（スタッフ常駐 9:00-22:00）", phone: "03-3456-7890" },
  },

  // 4. カフェ
  {
    slug: "cafe",
    layout: "classic",
    name: "カフェ",
    tagline: "一杯のコーヒーが、一日を変える",
    designConcept: "ウォームブラウンとクリームベージュで温もりを演出。手書き風アクセントと木目素材の写真で居心地の良さを表現。",
    highlights: ["メニュー更新可", "Instagram連携", "テイクアウト対応"],
    tech: ["Next.js", "Tailwind CSS", "MicroCMS", "Instagram連携"],
    colors: { primary: "#5C4033", accent: "#E8C99A", background: "#FDF8F3", text: "#5C4033", textLight: "#8B7355" },
    hero: {
      heading: "一杯のコーヒーが、一日を変える",
      subheading: "厳選された豆を、丁寧に焙煎。あなたのお気に入りの一杯がきっと見つかる空間です。",
      cta: "メニューを見る",
      imageUrl: `${UNSPLASH}1501339847302-ac426a4a7cbb?w=1920&q=80`,
    },
    services: [
      { title: "スペシャルティコーヒー", description: "世界各地の農園から、品質の高いシングルオリジンを取り揃えています。", icon: "Coffee" },
      { title: "自家製スイーツ", description: "毎朝焼き上げる季節のケーキとパン。コーヒーのお供にどうぞ。", icon: "CakeSlice" },
      { title: "テイクアウト", description: "オフィスやおうちでも、お店の味をそのままお楽しみいただけます。", icon: "ShoppingBag" },
      { title: "コーヒー豆販売", description: "店頭・オンラインで、ご自宅用の豆をご購入いただけます。", icon: "Package" },
    ],
    gallery: [
      { src: `${UNSPLASH}1501339847302-ac426a4a7cbb?w=800&q=80`, alt: "店内の雰囲気" },
      { src: `${UNSPLASH}1495474472287-4d71bcdd2085?w=800&q=80`, alt: "ラテアート" },
      { src: `${UNSPLASH}1509042239860-f550ce710b93?w=800&q=80`, alt: "ドリップコーヒー" },
      { src: `${UNSPLASH}1554118811-1e0d58224f24?w=800&q=80`, alt: "ケーキとコーヒー" },
      { src: `${UNSPLASH}1521017432531-fbd92d768814?w=800&q=80`, alt: "カウンター" },
      { src: `${UNSPLASH}1559925393-8be0ec4767c8?w=800&q=80`, alt: "テラス席" },
    ],
    testimonials: [
      { name: "N.Y 様", text: "落ち着いた雰囲気で、ノマドワークに最適。コーヒーも美味しい。", rating: 5 },
      { name: "C.M 様", text: "ケーキが本当に絶品。週末のご褒美に通っています。", rating: 5 },
      { name: "H.I 様", text: "豆の販売もあって、家でも同じ味を楽しめるのが嬉しい。", rating: 4 },
    ],
    access: { address: "東京都目黒区中目黒2-3-4 ガーデンビル1F", hours: "8:00-20:00（年中無休）", phone: "03-4567-8901" },
  },

  // 5. ネイルサロン
  {
    slug: "nail-salon",
    layout: "bold",
    name: "ネイルサロン",
    tagline: "指先から、あなたらしく",
    designConcept: "ボルドーとピンクの組み合わせで上品な可愛さを表現。曲線的なレイアウトと装飾的な書体で華やかさを演出。",
    highlights: ["作品ギャラリー", "ネット予約連携", "ブライダル訴求"],
    tech: ["Next.js", "Tailwind CSS", "予約システム", "ギャラリー機能"],
    colors: { primary: "#4A1942", accent: "#F7AECB", background: "#FFF5F8", text: "#4A1942", textLight: "#9B7B98" },
    hero: {
      heading: "指先から、あなたらしく",
      subheading: "トレンドからシンプルまで、あなたの個性を引き出すデザインをご提案します。",
      cta: "ご予約はこちら",
      imageUrl: `${UNSPLASH}1604654894610-df63bc536371?w=1920&q=80`,
    },
    services: [
      { title: "ジェルネイル", description: "持ちが良く、艶やかな仕上がり。豊富なカラーと最新トレンドをご用意。", icon: "Sparkles" },
      { title: "ネイルケア", description: "甘皮処理と保湿で、素爪を健康的に美しく整えます。", icon: "Hand" },
      { title: "ネイルアート", description: "ストーン・ホロ・3Dなど、こだわりのデザインを実現します。", icon: "Gem" },
      { title: "ブライダルネイル", description: "結婚式や前撮りに合わせて、特別な一日を彩るネイルを。", icon: "Heart" },
    ],
    gallery: [
      { src: `${UNSPLASH}1604654894610-df63bc536371?w=800&q=80`, alt: "ネイルアート" },
      { src: `${UNSPLASH}1607779097040-26e80aa78e66?w=800&q=80`, alt: "ジェルネイル" },
      { src: `${UNSPLASH}1610992015732-2449b76344bc?w=800&q=80`, alt: "デザインサンプル" },
      { src: `${UNSPLASH}1632345031435-8727f6897d53?w=800&q=80`, alt: "ネイル施術" },
      { src: `${UNSPLASH}1604902396830-aca29e19b067?w=800&q=80`, alt: "店内ディスプレイ" },
      { src: `${UNSPLASH}1490481651871-ab68de25d43d?w=800&q=80`, alt: "施術風景" },
    ],
    testimonials: [
      { name: "E.N 様", text: "デザインの引き出しが多く、毎回新しい発見があって楽しいです。", rating: 5 },
      { name: "R.S 様", text: "結婚式前にお願いしました。当日まで持ちもよく大満足でした。", rating: 5 },
      { name: "K.W 様", text: "ケアが丁寧で、爪が以前より丈夫になった気がします。", rating: 4 },
    ],
    access: { address: "東京都港区表参道5-6-7 ローズコート3F", hours: "10:00-21:00（不定休）", phone: "03-5678-9012" },
  },

  // 6. 歯科医院
  {
    slug: "dental",
    layout: "classic",
    name: "歯科医院",
    tagline: "笑顔で生きる。その力を、一緒に守る",
    designConcept: "清潔感のあるブルーと白を基調に、安心感と信頼感を演出。読みやすい書体と整然としたレイアウト。",
    highlights: ["WEB予約対応", "清潔感デザイン", "アクセスマップ組み込み"],
    tech: ["Next.js", "Tailwind CSS", "予約システム", "アクセスマップ"],
    colors: { primary: "#1B5E8E", accent: "#4FC3F7", background: "#F0F8FF", text: "#1B3A5C", textLight: "#5A7A9A" },
    hero: {
      heading: "笑顔で生きる。その力を、一緒に守る",
      subheading: "丁寧なカウンセリングと痛みの少ない治療で、患者さま一人ひとりに寄り添います。",
      cta: "WEB予約はこちら",
      imageUrl: `${UNSPLASH}1609840114035-3c981b782dfe?w=1920&q=80`,
    },
    services: [
      { title: "一般歯科", description: "むし歯・歯周病の予防と治療を、患者さまの負担を抑えて行います。", icon: "Stethoscope" },
      { title: "矯正歯科", description: "マウスピース矯正・ワイヤー矯正の両方に対応しています。", icon: "Smile" },
      { title: "ホワイトニング", description: "オフィス・ホームの両方に対応。安全に白い歯を実現します。", icon: "Sparkles" },
      { title: "小児歯科", description: "お子さまが歯医者を好きになる、楽しい雰囲気づくりを心がけています。", icon: "Baby" },
    ],
    gallery: [
      { src: `${UNSPLASH}1609840114035-3c981b782dfe?w=800&q=80`, alt: "診療室" },
      { src: `${UNSPLASH}1606811971618-4486d14f3f99?w=800&q=80`, alt: "待合室" },
      { src: `${UNSPLASH}1588776814546-1ffcf47267a5?w=800&q=80`, alt: "受付" },
      { src: `${UNSPLASH}1631815588090-d4bfec5b1ccb?w=800&q=80`, alt: "治療風景" },
      { src: `${UNSPLASH}1606811841689-23dfddce3e95?w=800&q=80`, alt: "歯科設備" },
      { src: `${UNSPLASH}1606811971618-4486d14f3f99?w=800&q=80`, alt: "院内" },
    ],
    testimonials: [
      { name: "T.H 様", text: "痛みに弱い私でも、麻酔の刺し方から丁寧で安心できました。", rating: 5 },
      { name: "Y.M 様", text: "子どもが歯医者好きに。先生方が優しくて本当に助かっています。", rating: 5 },
      { name: "S.A 様", text: "WEB予約が便利で、急な痛みでも当日対応してもらえました。", rating: 4 },
    ],
    access: { address: "東京都世田谷区三軒茶屋1-2-3 デンタルビル2F", hours: "平日 9:30-13:00 / 14:30-19:00、土 9:30-17:00（日祝休診）", phone: "03-6789-0123" },
  },

  // 7. 不動産
  {
    slug: "real-estate",
    layout: "classic",
    name: "不動産",
    tagline: "理想の住まいが、ここにある",
    designConcept: "ディープグリーンとブラスゴールドで信頼感と上質さを演出。グリッドベースのレイアウトで物件情報を整理。",
    highlights: ["物件検索機能", "地図API組み込み", "信頼感デザイン"],
    tech: ["Next.js", "Tailwind CSS", "物件検索", "地図API"],
    colors: { primary: "#1C3A2E", accent: "#C5A55A", background: "#F5F5F0", text: "#1C3A2E", textLight: "#6B7B6E" },
    hero: {
      heading: "理想の住まいが、ここにある",
      subheading: "売買・賃貸・リノベーション。お客さまのライフスタイルに寄り添う住まい探しを。",
      cta: "物件を探す",
      imageUrl: `${UNSPLASH}1564013799919-ab600027ffc6?w=1920&q=80`,
    },
    services: [
      { title: "売買仲介", description: "戸建て・マンション・土地など、豊富な物件情報からご提案します。", icon: "Home" },
      { title: "賃貸", description: "都心から郊外まで、ライフスタイルに合わせた物件を。", icon: "Key" },
      { title: "リノベーション", description: "中古物件を理想の住まいへ。設計から施工までトータルで対応。", icon: "Hammer" },
      { title: "資産管理", description: "不動産投資・賃貸経営のサポート。長期的な資産価値を一緒に。", icon: "TrendingUp" },
    ],
    gallery: [
      { src: `${UNSPLASH}1564013799919-ab600027ffc6?w=800&q=80`, alt: "高級住宅" },
      { src: `${UNSPLASH}1568605114967-8130f3a36994?w=800&q=80`, alt: "モダンハウス" },
      { src: `${UNSPLASH}1570129477492-45c003edd2be?w=800&q=80`, alt: "リビング" },
      { src: `${UNSPLASH}1505691938895-1758d7feb511?w=800&q=80`, alt: "キッチン" },
      { src: `${UNSPLASH}1600585154340-be6161a56a0c?w=800&q=80`, alt: "外観" },
      { src: `${UNSPLASH}1493809842364-78817add7ffb?w=800&q=80`, alt: "マンション" },
    ],
    testimonials: [
      { name: "T.N 様", text: "初めての住宅購入で不安でしたが、最後まで丁寧にサポートしていただきました。", rating: 5 },
      { name: "M.H 様", text: "リノベーション提案が秀逸。中古とは思えない住まいになりました。", rating: 5 },
      { name: "K.I 様", text: "資産運用の観点でも親身に相談に乗ってくれて頼りになります。", rating: 4 },
    ],
    access: { address: "東京都千代田区丸の内3-4-5 マルノウチビル5F", hours: "平日 9:00-19:00 / 土日 10:00-18:00（水曜定休）", phone: "03-7890-1234" },
  },

  // 8. ヨガスタジオ
  {
    slug: "yoga",
    layout: "editorial",
    name: "ヨガスタジオ",
    tagline: "呼吸を整え、自分を取り戻す",
    designConcept: "セージグリーンとアースカラーで自然と調和を表現。ゆったりとした余白と柔らかな写真で穏やかさを演出。",
    highlights: ["体験予約LP", "オンラインクラス対応", "落ち着きデザイン"],
    tech: ["Next.js", "Tailwind CSS", "予約システム", "オンラインクラス"],
    colors: { primary: "#4A6741", accent: "#D4A574", background: "#F8F6F1", text: "#3A4A38", textLight: "#7A8A78" },
    hero: {
      heading: "呼吸を整え、自分を取り戻す",
      subheading: "日常から少しだけ離れて。心と体に向き合う時間を、私たちと一緒に。",
      cta: "体験レッスンを予約",
      imageUrl: `${UNSPLASH}1599901860904-17e6ed7083a0?w=1920&q=80`,
    },
    services: [
      { title: "ハタヨガ", description: "基本ポーズと呼吸法を丁寧に。初心者の方にもおすすめのクラスです。", icon: "Sun" },
      { title: "流動ヨガ", description: "呼吸とポーズをリズミカルに繋ぎ、心身を活性化します。", icon: "Wind" },
      { title: "瞑想", description: "マインドフルネス瞑想で、思考を整え本来の自分を取り戻す。", icon: "Brain" },
      { title: "マタニティヨガ", description: "妊娠中の体調管理とリラックスを目的とした優しいクラス。", icon: "Heart" },
    ],
    gallery: [
      { src: `${UNSPLASH}1599901860904-17e6ed7083a0?w=800&q=80`, alt: "ヨガレッスン" },
      { src: `${UNSPLASH}1545205597-3d9d02c29597?w=800&q=80`, alt: "瞑想" },
      { src: `${UNSPLASH}1506126613408-eca07ce68773?w=800&q=80`, alt: "スタジオ内観" },
      { src: `${UNSPLASH}1588286840104-8957b019727f?w=800&q=80`, alt: "ヨガポーズ" },
      { src: `${UNSPLASH}1593810450967-f9c42742e326?w=800&q=80`, alt: "リラックス" },
      { src: `${UNSPLASH}1518611012118-696072aa579a?w=800&q=80`, alt: "ストレッチ" },
    ],
    testimonials: [
      { name: "M.K 様", text: "通い始めてから肩こりが軽減。ヨガのある暮らしが定着しました。", rating: 5 },
      { name: "S.T 様", text: "インストラクターの方々が穏やかで、初心者でも安心して参加できます。", rating: 5 },
      { name: "A.O 様", text: "マタニティクラスでお世話になりました。心身ともに整って出産に臨めました。", rating: 4 },
    ],
    access: { address: "東京都品川区上大崎2-3-4 リバーサイドビル4F", hours: "平日 7:00-22:00 / 土日 9:00-19:00（年末年始休）", phone: "03-8901-2345" },
  },

  // 9. ラーメン（カスタムデザインページ）
  {
    slug: "ramen",
    layout: "bold",
    name: "ラーメン店",
    tagline: "一杯に、魂を込める。",
    designConcept: "漆黒の背景に深紅アクセントで、こだわりの一杯が持つ力強さと哲学を表現。大胆なタイポグラフィとミニマル構成で高級感を演出。",
    highlights: ["メニュー更新可", "こだわり訴求", "SNS映えデザイン"],
    tech: ["Next.js", "Tailwind CSS", "アニメーション", "CMS連携"],
    colors: { primary: "#0D0D0D", accent: "#C8392B", background: "#0D0D0D", text: "#F5F0E8", textLight: "#A09080" },
    hero: {
      heading: "一杯に、魂を込める。",
      subheading: "素材と向き合い、スープを煮詰め、麺を打つ。その先にだけ、本物がある。",
      cta: "メニューを見る",
      imageUrl: `${UNSPLASH}1623341214825-9f4f963727da?w=1920&q=80`,
    },
    services: [
      { title: "醤油らーめん", description: "鶏・豚・昆布の丁寧なブレンドスープ。醤油の香りが食欲をそそる定番の一杯。", icon: "Soup" },
      { title: "濃厚鶏白湯", description: "長時間炊き出した白濁スープ。まろやかなコクと旨みが口いっぱいに広がる。", icon: "Flame" },
      { title: "辛味噌らーめん", description: "秘伝の辛味噌が溶け込む、スパイシーで深みのある一杯。辛さ3段階対応。", icon: "Zap" },
      { title: "季節限定麺", description: "旬の食材を活かした期間限定メニュー。毎月変わる一杯をお楽しみに。", icon: "Leaf" },
    ],
    gallery: [
      { src: `${UNSPLASH}1623341214825-9f4f963727da?w=800&q=80`, alt: "らーめん" },
      { src: `${UNSPLASH}1546069901-ba9599a7e63c?w=800&q=80`, alt: "スープアップ" },
      { src: `${UNSPLASH}1544025162-d76694265947?w=800&q=80`, alt: "チャーシュー" },
      { src: `${UNSPLASH}1467003909585-2f8a72700288?w=800&q=80`, alt: "店内" },
      { src: `${UNSPLASH}1551183053-bf91a1d81141?w=800&q=80`, alt: "仕込み" },
      { src: `${UNSPLASH}1559339352-11d035aa65de?w=800&q=80`, alt: "トッピング" },
    ],
    testimonials: [
      { name: "K.T 様", text: "スープが本当に奥深い。一口飲んだ瞬間、また来ようと決めました。", rating: 5 },
      { name: "M.Y 様", text: "濃厚鶏白湯が絶品。チャーシューもとろとろで最高でした。", rating: 5 },
      { name: "R.O 様", text: "行列ができる理由がよく分かる。この一杯のためだけに通いたい。", rating: 5 },
    ],
    access: { address: "東京都渋谷区〇〇町 1-2-3", hours: "11:00〜22:00（LO 21:30）月曜定休", phone: "03-XXXX-XXXX" },
  },

  // 10. 整体院
  {
    slug: "seitai",
    layout: "editorial",
    name: "整体院",
    tagline: "体の歪みを整え、本来の自分へ",
    designConcept: "ティールとネイビーの組み合わせで安心感と専門性を表現。柔らかな曲線と白い余白で癒しの雰囲気を演出。",
    highlights: ["WEB予約対応", "症状別メニュー", "初回割引LP"],
    tech: ["Next.js", "Tailwind CSS", "予約システム", "LINE連携"],
    colors: { primary: "#1E3A4A", accent: "#5BB8A0", background: "#F5F9F8", text: "#1E3A4A", textLight: "#5A7A88" },
    hero: {
      heading: "体の歪みを整え、本来の自分へ",
      subheading: "肩こり・腰痛・姿勢の乱れに。丁寧なカウンセリングと的確な施術で、不調の根本からアプローチします。",
      cta: "WEB予約はこちら",
      imageUrl: `${UNSPLASH}1518611012118-696072aa579a?w=1920&q=80`,
    },
    services: [
      { title: "全身整体", description: "骨格・筋肉・関節のバランスを整え、体全体の歪みをリセットします。", icon: "Activity" },
      { title: "腰痛・肩こりケア", description: "長年の慢性痛にも対応。原因から丁寧に施術します。", icon: "Zap" },
      { title: "骨盤矯正", description: "産後の骨盤ケアから姿勢改善まで。インナーマッスルも同時にアプローチ。", icon: "Target" },
      { title: "ヘッドスパ整体", description: "頭蓋骨・頚椎の調整で頭痛・眼精疲労を和らげる特別メニュー。", icon: "Brain" },
    ],
    gallery: [
      { src: `${UNSPLASH}1518611012118-696072aa579a?w=800&q=80`, alt: "施術風景" },
      { src: `${UNSPLASH}1506126613408-eca07ce68773?w=800&q=80`, alt: "待合室" },
      { src: `${UNSPLASH}1593810450967-f9c42742e326?w=800&q=80`, alt: "リラクゼーション" },
      { src: `${UNSPLASH}1545205597-3d9d02c29597?w=800&q=80`, alt: "施術ベッド" },
      { src: `${UNSPLASH}1588286840104-8957b019727f?w=800&q=80`, alt: "ストレッチ" },
      { src: `${UNSPLASH}1599901860904-17e6ed7083a0?w=800&q=80`, alt: "施術後" },
    ],
    testimonials: [
      { name: "H.S 様", text: "10年来の腰痛がみるみる改善。施術の丁寧さと的確な説明に信頼がおけます。", rating: 5 },
      { name: "Y.W 様", text: "産後の骨盤矯正でお世話になりました。体が軽くなり、育児もラクになりました。", rating: 5 },
      { name: "T.M 様", text: "肩こりがひどくて通い始めましたが、姿勢まで変わってきた気がします。", rating: 4 },
    ],
    access: { address: "東京都杉並区高円寺北3-4-5 ウェルネスビル1F", hours: "平日 10:00-21:00 / 土日 9:00-18:00（木曜定休）", phone: "03-0123-4567" },
  },

  // 11. 居酒屋
  {
    slug: "izakaya",
    layout: "bold",
    isDark: true,
    name: "居酒屋",
    tagline: "今夜は、ここで語り合おう",
    designConcept: "ダークウッドブラウンとアンバーゴールドで温かみのある夜の空間を表現。手書き風テクスチャと暖色照明で気軽さと風情を演出。",
    highlights: ["コース予約対応", "宴会プラン訴求", "テイクアウトメニュー"],
    tech: ["Next.js", "Tailwind CSS", "ネット予約", "MicroCMS"],
    colors: { primary: "#2D1A00", accent: "#E8851A", background: "#1A1008", text: "#F5E8D0", textLight: "#B89A70" },
    hero: {
      heading: "今夜は、ここで語り合おう",
      subheading: "旬の食材と厳選した地酒。仕事終わりの一杯から、大切な人との宴会まで。肩ひじ張らない、本物の味がここにある。",
      cta: "席を予約する",
      imageUrl: `${UNSPLASH}1519671482749-fd09be7ccebf?w=1920&q=80`,
    },
    services: [
      { title: "おまかせコース", description: "その日の仕入れで決まる旬のコース料理。お酒との相性も抜群。", icon: "Utensils" },
      { title: "地酒・クラフトビール", description: "全国の蔵元から厳選した日本酒と、地元醸造所のクラフトビール。", icon: "Beer" },
      { title: "宴会・貸切プラン", description: "歓送迎会・忘年会に。最大30名の貸切プランもご用意。", icon: "Users" },
      { title: "テイクアウト", description: "人気の唐揚げ・刺身盛りはお持ち帰りも対応しています。", icon: "ShoppingBag" },
    ],
    gallery: [
      { src: `${UNSPLASH}1519671482749-fd09be7ccebf?w=800&q=80`, alt: "店内雰囲気" },
      { src: `${UNSPLASH}1601050690597-df0568f70950?w=800&q=80`, alt: "料理" },
      { src: `${UNSPLASH}1510812431401-41d2bd2722f3?w=800&q=80`, alt: "お酒" },
      { src: `${UNSPLASH}1546069901-ba9599a7e63c?w=800&q=80`, alt: "刺身" },
      { src: `${UNSPLASH}1544025162-d76694265947?w=800&q=80`, alt: "炭火料理" },
      { src: `${UNSPLASH}1559339352-11d035aa65de?w=800&q=80`, alt: "締め料理" },
    ],
    testimonials: [
      { name: "K.O 様", text: "おまかせコースが毎回違って飽きない。料理のレベルが高い割にコスパが良い。", rating: 5 },
      { name: "S.H 様", text: "部署の忘年会で貸切しました。スタッフさんの対応も料理も最高でした。", rating: 5 },
      { name: "M.T 様", text: "地酒のラインナップが充実していて、飲み比べが楽しい。", rating: 4 },
    ],
    access: { address: "東京都新宿区歌舞伎町1-2-3 居酒屋横丁B1F", hours: "18:00-翌2:00（日曜定休）", phone: "03-1234-9876" },
  },

  // 12. ペットサロン
  {
    slug: "pet-salon",
    layout: "bold",
    name: "ペットサロン",
    tagline: "大切な家族を、プロの手で",
    designConcept: "フォレストグリーンとウォームオレンジで自然と温かさを表現。丸みのあるデザインと動物の写真でやさしさを演出。",
    highlights: ["カット実績ギャラリー", "ネット予約対応", "小型〜大型犬対応"],
    tech: ["Next.js", "Tailwind CSS", "予約システム", "インスタ連携"],
    colors: { primary: "#2A4A30", accent: "#F5A040", background: "#F5F8F0", text: "#2A3A28", textLight: "#6A8A68" },
    hero: {
      heading: "大切な家族を、プロの手で",
      subheading: "ワンちゃん・ネコちゃんの個性を大切に。ストレスの少ない環境でプロのグルーミングをご提供します。",
      cta: "ご予約はこちら",
      imageUrl: `${UNSPLASH}1587300003388-59208cc962cb?w=1920&q=80`,
    },
    services: [
      { title: "トリミング", description: "犬種・毛質に合わせたカットで、愛犬をより可愛く・清潔に仕上げます。", icon: "Scissors" },
      { title: "シャンプー・ブロー", description: "低刺激シャンプーを使用。被毛の健康を守りながら清潔に。", icon: "Droplets" },
      { title: "爪切り・耳掃除", description: "健康管理のために欠かせないケアを丁寧に行います。", icon: "Heart" },
      { title: "ネコのグルーミング", description: "猫専用の落ち着いた個室で、ストレスを最小限に。", icon: "Cat" },
    ],
    gallery: [
      { src: `${UNSPLASH}1587300003388-59208cc962cb?w=800&q=80`, alt: "トリミング後" },
      { src: `${UNSPLASH}1450778869180-41d0601e046e?w=800&q=80`, alt: "愛犬" },
      { src: `${UNSPLASH}1548199973-03cce0bbc87b?w=800&q=80`, alt: "ネコちゃん" },
      { src: `${UNSPLASH}1558618666-fcd25c85cd64?w=800&q=80`, alt: "サロン内観" },
      { src: `${UNSPLASH}1559925393-8be0ec4767c8?w=800&q=80`, alt: "待合スペース" },
      { src: `${UNSPLASH}1487530811176-3780de880c2d?w=800&q=80`, alt: "グルーミング" },
    ],
    testimonials: [
      { name: "N.K 様", text: "臆病な子でも嫌がらずに通えています。トリマーさんの接し方が本当に優しい。", rating: 5 },
      { name: "A.M 様", text: "仕上がりがいつも可愛くて大満足。インスタに載せたら反響が多かったです。", rating: 5 },
      { name: "R.F 様", text: "猫専用個室があるので、ストレスなく施術してもらえて安心です。", rating: 4 },
    ],
    access: { address: "東京都世田谷区豪徳寺2-3-4 ペットビル1F", hours: "10:00-19:00（水曜定休）", phone: "03-2345-0987" },
  },

  // 13. フラワーショップ
  {
    slug: "flower-shop",
    layout: "editorial",
    name: "フラワーショップ",
    tagline: "言葉より先に、花が伝える",
    designConcept: "ベリーとブラッシュピンクの組み合わせで上品な華やかさを表現。余白を活かした構成で花の美しさを引き立てる。",
    highlights: ["オンライン注文対応", "ギフトラッピング", "定期便サービス"],
    tech: ["Next.js", "Tailwind CSS", "ECサイト連携", "予約システム"],
    colors: { primary: "#5C2D4A", accent: "#F5A0C0", background: "#FFF5F8", text: "#4A2040", textLight: "#A07090" },
    hero: {
      heading: "言葉より先に、花が伝える",
      subheading: "誕生日・記念日・お祝い・弔事。花屋は人生の節目に寄り添います。旬の花を使った一点物のアレンジメントを。",
      cta: "フラワーを注文する",
      imageUrl: `${UNSPLASH}1487530811176-3780de880c2d?w=1920&q=80`,
    },
    services: [
      { title: "フラワーアレンジメント", description: "ご予算・用途・好みに合わせてオーダーメイドでお作りします。", icon: "Flower2" },
      { title: "ウェディング装花", description: "ブーケから会場装飾まで。二人の大切な日を花で彩ります。", icon: "Heart" },
      { title: "プリザーブドフラワー", description: "枯れない花で、大切な思い出をいつまでも手元に。", icon: "Gift" },
      { title: "定期便サービス", description: "週1・隔週で旬の花をお届け。暮らしに花のある習慣を。", icon: "Repeat" },
    ],
    gallery: [
      { src: `${UNSPLASH}1487530811176-3780de880c2d?w=800&q=80`, alt: "フラワーアレンジメント" },
      { src: `${UNSPLASH}1558618666-fcd25c85cd64?w=800&q=80`, alt: "ブーケ" },
      { src: `${UNSPLASH}1583939003579-730e3918a45a?w=800&q=80`, alt: "ウェディング花" },
      { src: `${UNSPLASH}1604654894610-df63bc536371?w=800&q=80`, alt: "店内ディスプレイ" },
      { src: `${UNSPLASH}1521017432531-fbd92d768814?w=800&q=80`, alt: "カウンター" },
      { src: `${UNSPLASH}1559339352-11d035aa65de?w=800&q=80`, alt: "季節の花" },
    ],
    testimonials: [
      { name: "E.T 様", text: "結婚式のブーケをお願いしました。イメージ以上の出来栄えで感動しました。", rating: 5 },
      { name: "M.I 様", text: "定期便を利用中。毎週届く花で部屋が明るくなり、生活が豊かになりました。", rating: 5 },
      { name: "K.N 様", text: "母の日の贈り物に。ラッピングも丁寧で喜ばれました。", rating: 4 },
    ],
    access: { address: "東京都文京区本郷4-5-6 フラワーコート1F", hours: "10:00-19:00（月曜定休）", phone: "03-3456-0987" },
  },

  // 14. ウェディング
  {
    slug: "wedding",
    layout: "editorial",
    name: "ウェディング",
    tagline: "ふたりの物語が、はじまる",
    designConcept: "アイボリーとシャンパンゴールドで純白の特別感を表現。Playfair Displayの英文タイトルと繊細な装飾で格調高い雰囲気に。",
    highlights: ["ブライダルフェア訴求", "式場見学予約", "実例ギャラリー"],
    tech: ["Next.js", "Tailwind CSS", "予約フォーム", "動画背景"],
    colors: { primary: "#3D3028", accent: "#D4B896", background: "#FDFAF5", text: "#3D3028", textLight: "#8A7A68" },
    hero: {
      heading: "ふたりの物語が、はじまる",
      subheading: "あなたたちにしか作れない、一日がある。こだわりのすべてを叶える、特別なウェディングを。",
      cta: "式場見学を予約する",
      imageUrl: `${UNSPLASH}1530103862676-de8c9debad1d?w=1920&q=80`,
    },
    services: [
      { title: "チャペル挙式", description: "ステンドグラスが輝くチャペルで、誓いの言葉を交わす感動のセレモニー。", icon: "Heart" },
      { title: "披露宴", description: "ゲスト全員が主役。おもてなしの料理と演出でおふたりの想いを伝えます。", icon: "Utensils" },
      { title: "フォトウェディング", description: "挙式なしで、写真と思い出だけを残したい方に。ロケ撮影も対応。", icon: "Camera" },
      { title: "1.5次会・レストランウェディング", description: "アットホームに、気兼ねなく。ご友人中心のパーティースタイルに。", icon: "Users" },
    ],
    gallery: [
      { src: `${UNSPLASH}1530103862676-de8c9debad1d?w=800&q=80`, alt: "チャペル" },
      { src: `${UNSPLASH}1465495976277-4387d4b0b4c6?w=800&q=80`, alt: "披露宴会場" },
      { src: `${UNSPLASH}1583939003579-730e3918a45a?w=800&q=80`, alt: "ウェディングケーキ" },
      { src: `${UNSPLASH}1487530811176-3780de880c2d?w=800&q=80`, alt: "フラワー装飾" },
      { src: `${UNSPLASH}1558618666-fcd25c85cd64?w=800&q=80`, alt: "ブーケ" },
      { src: `${UNSPLASH}1495474472287-4d71bcdd2085?w=800&q=80`, alt: "パーティー" },
    ],
    testimonials: [
      { name: "M&K 様", text: "細かいこだわりをすべて聞いてくれて、夢だった結婚式が実現しました。", rating: 5 },
      { name: "A&T 様", text: "料理がとにかく美味しく、ゲストから大好評でした。感謝しかないです。", rating: 5 },
      { name: "Y&S 様", text: "フォトウェディングのロケ撮影がとても素敵な思い出になりました。", rating: 4 },
    ],
    access: { address: "東京都港区芝公園2-3-4 ウェディングパレス", hours: "見学 10:00-18:00（年中無休）", phone: "03-4567-1234" },
  },

  // 15. 学習塾
  {
    slug: "juku",
    layout: "classic",
    name: "学習塾",
    tagline: "可能性を、引き出す",
    designConcept: "ダークネイビーとロイヤルブルーで信頼感と知性を表現。データや実績を前面に出し、保護者への安心感を最大化するレイアウト。",
    highlights: ["合格実績掲載", "無料体験授業", "保護者向け説明"],
    tech: ["Next.js", "Tailwind CSS", "お問い合わせフォーム", "CMS連携"],
    colors: { primary: "#1A2E5E", accent: "#4A90D9", background: "#F5F8FF", text: "#1A2E5E", textLight: "#5A7AAA" },
    hero: {
      heading: "可能性を、引き出す",
      subheading: "一人ひとりの「わかった！」を大切に。目標から逆算した学習計画で、志望校合格を全力でサポートします。",
      cta: "無料体験授業を申込む",
      imageUrl: `${UNSPLASH}1503676260728-1c00da094a0b?w=1920&q=80`,
    },
    services: [
      { title: "個別指導", description: "講師1対1〜1対2の完全個別授業。苦手科目を集中的に克服します。", icon: "GraduationCap" },
      { title: "集団授業", description: "切磋琢磨できる環境で、受験本番に向けた実践力を養います。", icon: "Users" },
      { title: "映像授業", description: "有名講師の授業をいつでも視聴。繰り返し学べる映像コンテンツ。", icon: "Monitor" },
      { title: "進路指導", description: "受験情報・学校選びから出願戦略まで、プロが徹底サポート。", icon: "TrendingUp" },
    ],
    gallery: [
      { src: `${UNSPLASH}1503676260728-1c00da094a0b?w=800&q=80`, alt: "自習室" },
      { src: `${UNSPLASH}1456513080510-7bf3a84b82f8?w=800&q=80`, alt: "参考書" },
      { src: `${UNSPLASH}1571019613454-1cb2f99b2d8b?w=800&q=80`, alt: "授業風景" },
      { src: `${UNSPLASH}1538805060514-97d9cc17730c?w=800&q=80`, alt: "個別指導" },
      { src: `${UNSPLASH}1574680096145-d05b474e2155?w=800&q=80`, alt: "模試対策" },
      { src: `${UNSPLASH}1517836357463-d25dfeac3438?w=800&q=80`, alt: "合格発表" },
    ],
    testimonials: [
      { name: "T.H保護者様", text: "第一志望に合格できました。個別で苦手を徹底的に潰してもらえた結果だと思います。", rating: 5 },
      { name: "S.Y保護者様", text: "進路指導が的確で、子供が自信を持って受験に臨めました。", rating: 5 },
      { name: "M.O 様（本人）", text: "先生が分かるまで教えてくれるので、授業についていけるようになりました。", rating: 4 },
    ],
    access: { address: "東京都江戸川区西葛西5-6-7 アカデミービル3F", hours: "平日 14:00-22:00 / 土 10:00-20:00（日曜定休）", phone: "03-5678-2345" },
  },

  // 16. フォトスタジオ
  {
    slug: "photo-studio",
    layout: "editorial",
    name: "フォトスタジオ",
    tagline: "その瞬間を、永遠に",
    designConcept: "スレートブラックとゴールドで洗練されたプロフェッショナル感を表現。写真を最大限に引き立てるミニマルなレイアウト。",
    highlights: ["作品ポートフォリオ", "オンライン予約", "データ即日渡し"],
    tech: ["Next.js", "Tailwind CSS", "ギャラリー機能", "予約システム"],
    colors: { primary: "#1A1A1A", accent: "#D4A830", background: "#F8F8F8", text: "#1A1A1A", textLight: "#888888" },
    hero: {
      heading: "その瞬間を、永遠に",
      subheading: "家族の記念日から就活・ビジネスポートレートまで。あなたの大切な一枚を、丁寧な光と構図で残します。",
      cta: "撮影を予約する",
      imageUrl: `${UNSPLASH}1554080353-a576cf803bda?w=1920&q=80`,
    },
    services: [
      { title: "家族・記念写真", description: "七五三・お宮参り・成人式。家族の節目を形に残す大切な一枚。", icon: "Users" },
      { title: "ビジネスポートレート", description: "LinkedInや名刺・HPに使えるプロフェッショナルな証明写真・ポートレート。", icon: "Briefcase" },
      { title: "マタニティ・ニューボーン", description: "命の輝きを優しい光でとらえる。特別な時期の特別な一枚を。", icon: "Heart" },
      { title: "レンタルスタジオ", description: "機材完備の撮影スタジオを時間単位でレンタル。背景・照明多数。", icon: "Camera" },
    ],
    gallery: [
      { src: `${UNSPLASH}1554080353-a576cf803bda?w=800&q=80`, alt: "スタジオ" },
      { src: `${UNSPLASH}1452587925148-ce544e77e70d?w=800&q=80`, alt: "撮影機材" },
      { src: `${UNSPLASH}1522337360788-8b13dee7a37e?w=800&q=80`, alt: "ポートレート" },
      { src: `${UNSPLASH}1580618672591-eb180b1a973f?w=800&q=80`, alt: "家族写真" },
      { src: `${UNSPLASH}1521590832167-7bcbfaa6381f?w=800&q=80`, alt: "記念撮影" },
      { src: `${UNSPLASH}1487412947147-5cebf100ffc2?w=800&q=80`, alt: "ビジネス撮影" },
    ],
    testimonials: [
      { name: "K.R 様", text: "七五三の写真をお願いしました。子供の自然な表情を引き出してくれて大満足。", rating: 5 },
      { name: "T.Y 様", text: "ビジネスポートレートの撮影でした。プロの仕上がりで転職活動に大活躍。", rating: 5 },
      { name: "S.N 様", text: "マタニティフォトが想像以上に素敵でした。大切な宝物になりました。", rating: 4 },
    ],
    access: { address: "東京都渋谷区恵比寿3-4-5 スタジオビル2F", hours: "10:00-20:00（火曜定休）", phone: "03-6789-3456" },
  },

  // 17. 寿司
  {
    slug: "sushi",
    layout: "bold",
    isDark: true,
    name: "寿司",
    tagline: "職人の技と、旬の素材",
    designConcept: "漆黒と深紅で和の緊張感と職人の誇りを表現。極限まで削ぎ落とした構成で、寿司そのものの美しさを前景に。",
    highlights: ["おまかせコース", "ネット予約対応", "高級感デザイン"],
    tech: ["Next.js", "Tailwind CSS", "予約システム", "CMS連携"],
    colors: { primary: "#0D0808", accent: "#CC3333", background: "#0D0808", text: "#F5F0E8", textLight: "#A09080" },
    hero: {
      heading: "職人の技と、旬の素材",
      subheading: "毎朝市場で仕入れる旬のネタ。シャリの温度・酢合わせにまでこだわる、一貫入魂の仕事。",
      cta: "ご予約はこちら",
      imageUrl: `${UNSPLASH}1611143669185-af224c5e3252?w=1920&q=80`,
    },
    services: [
      { title: "おまかせコース", description: "その日最高のネタをご用意する、大将おまかせの全10貫コース。", icon: "ChefHat" },
      { title: "握り寿司", description: "定番の握りから珍しいネタまで。一貫からでもお楽しみいただけます。", icon: "Utensils" },
      { title: "会席・特別コース", description: "記念日・接待に。前菜・造り・茶碗蒸しを添えた会席スタイル。", icon: "Star" },
      { title: "テイクアウト", description: "ご自宅でも本格寿司を。前日予約で折詰をご用意します。", icon: "Package" },
    ],
    gallery: [
      { src: `${UNSPLASH}1611143669185-af224c5e3252?w=800&q=80`, alt: "にぎり寿司" },
      { src: `${UNSPLASH}1534482421-64566f976cfa?w=800&q=80`, alt: "特上盛り" },
      { src: `${UNSPLASH}1546069901-ba9599a7e63c?w=800&q=80`, alt: "新鮮なネタ" },
      { src: `${UNSPLASH}1544025162-d76694265947?w=800&q=80`, alt: "職人の技" },
      { src: `${UNSPLASH}1467003909585-2f8a72700288?w=800&q=80`, alt: "カウンター席" },
      { src: `${UNSPLASH}1559339352-11d035aa65de?w=800&q=80`, alt: "〆の一貫" },
    ],
    testimonials: [
      { name: "H.W 様", text: "おまかせで頼んだら、どれも絶品。大将との会話も含めて最高の時間でした。", rating: 5 },
      { name: "T.E 様", text: "接待で利用しました。カウンターで見せる職人の仕事ぶりに取引先も感動。", rating: 5 },
      { name: "Y.S 様", text: "シャリの旨みが際立っていて、ネタとのバランスが絶妙です。", rating: 5 },
    ],
    access: { address: "東京都中央区銀座7-8-9 銀座小路地下1F", hours: "18:00-23:00（日月定休）", phone: "03-7890-4567" },
  },

  // 18. エステ・スパ
  {
    slug: "esthetic",
    layout: "classic",
    name: "エステ・スパ",
    tagline: "本来の美しさを、目覚めさせる",
    designConcept: "ディープモーブとローズゴールドで上品な癒しの世界観を表現。ラグジュアリー感のある余白と柔らかい光の写真で非日常を演出。",
    highlights: ["初回体験コース", "痩身・フェイシャル", "メンバーズ制度"],
    tech: ["Next.js", "Tailwind CSS", "予約システム", "会員管理"],
    colors: { primary: "#3A2038", accent: "#D4A0B8", background: "#FDF5F8", text: "#3A2038", textLight: "#9A7090" },
    hero: {
      heading: "本来の美しさを、目覚めさせる",
      subheading: "肌・体・心。すべてにアプローチする本格エステで、あなたの内側から輝きを引き出します。",
      cta: "体験コースを予約する",
      imageUrl: `${UNSPLASH}1519823551278-64ac92734fb1?w=1920&q=80`,
    },
    services: [
      { title: "フェイシャルエステ", description: "毛穴・くすみ・シワにアプローチ。素肌の透明感を引き出す本格ケア。", icon: "Sparkles" },
      { title: "痩身・ボディケア", description: "最新機器とハンドトリートメントを組み合わせた、効果実感コース。", icon: "Zap" },
      { title: "リンパドレナージュ", description: "滞ったリンパを流し、むくみ・老廃物を排出。内側からすっきり。", icon: "Droplets" },
      { title: "ブライダルエステ", description: "挙式に向けた特別プラン。肌の仕上がりにこだわる花嫁さまへ。", icon: "Heart" },
    ],
    gallery: [
      { src: `${UNSPLASH}1519823551278-64ac92734fb1?w=800&q=80`, alt: "施術室" },
      { src: `${UNSPLASH}1515377905703-c4788e51af15?w=800&q=80`, alt: "エステ施術" },
      { src: `${UNSPLASH}1506126613408-eca07ce68773?w=800&q=80`, alt: "リラクゼーション" },
      { src: `${UNSPLASH}1593810450967-f9c42742e326?w=800&q=80`, alt: "スパ" },
      { src: `${UNSPLASH}1545205597-3d9d02c29597?w=800&q=80`, alt: "瞑想" },
      { src: `${UNSPLASH}1518611012118-696072aa579a?w=800&q=80`, alt: "ボディケア" },
    ],
    testimonials: [
      { name: "A.H 様", text: "フェイシャルを3回受けてから、肌のトーンが明らかに変わりました。", rating: 5 },
      { name: "C.K 様", text: "痩身コースで-4cm。スタッフの方のモチベーション管理も嬉しかったです。", rating: 5 },
      { name: "M.A 様", text: "結婚式前のブライダルエステ、大満足でした。当日の肌が今まで最高でした。", rating: 4 },
    ],
    access: { address: "東京都港区赤坂4-5-6 ビューティーテラス3F", hours: "11:00-21:00（月曜定休）", phone: "03-8901-5678" },
  },

  // 19. パン屋
  {
    slug: "bakery",
    layout: "classic",
    name: "パン屋",
    tagline: "焼きたての幸せを、毎朝",
    designConcept: "ウォームブラウンと小麦ゴールドで朝の幸福感を表現。素朴でやさしいフォントと食欲をそそる写真で毎日通いたくなる雰囲気を演出。",
    highlights: ["メニュー更新可", "予約取り置き", "オンライン注文"],
    tech: ["Next.js", "Tailwind CSS", "CMS連携", "ECサイト"],
    colors: { primary: "#4A3020", accent: "#E8A840", background: "#FDF8F0", text: "#4A3020", textLight: "#8A6840" },
    hero: {
      heading: "焼きたての幸せを、毎朝",
      subheading: "小麦粉・酵母・塩・水。シンプルな素材から生まれる、毎朝の美味しい時間。国産小麦と自家製酵母にこだわった本物のパンを。",
      cta: "メニューを見る",
      imageUrl: `${UNSPLASH}1509440159596-0249088772ff?w=1920&q=80`,
    },
    services: [
      { title: "食事パン", description: "バゲット・カンパーニュ・角食。毎日の食卓に寄り添う定番ラインナップ。", icon: "Wheat" },
      { title: "惣菜パン・調理パン", description: "クロワッサン・サンドウィッチなど、昼食にもぴったりのラインナップ。", icon: "Sandwich" },
      { title: "スイーツパン", description: "あんぱん・メロンパン・デニッシュ。おやつや手土産に喜ばれる一品。", icon: "CakeSlice" },
      { title: "お取り寄せ・ギフト", description: "オンラインショップで全国配送。ギフトラッピング対応。", icon: "Gift" },
    ],
    gallery: [
      { src: `${UNSPLASH}1509440159596-0249088772ff?w=800&q=80`, alt: "焼きたてパン" },
      { src: `${UNSPLASH}1568254183919-78a4f43a2877?w=800&q=80`, alt: "パンの陳列" },
      { src: `${UNSPLASH}1554118811-1e0d58224f24?w=800&q=80`, alt: "スイーツパン" },
      { src: `${UNSPLASH}1501339847302-ac426a4a7cbb?w=800&q=80`, alt: "店内" },
      { src: `${UNSPLASH}1495474472287-4d71bcdd2085?w=800&q=80`, alt: "コーヒーと一緒に" },
      { src: `${UNSPLASH}1521017432531-fbd92d768814?w=800&q=80`, alt: "職人の仕事" },
    ],
    testimonials: [
      { name: "Y.T 様", text: "バゲットが本格的すぎてびっくり。毎週末の楽しみになっています。", rating: 5 },
      { name: "K.H 様", text: "手土産に持っていくと毎回喜ばれます。ギフトラッピングも素敵。", rating: 5 },
      { name: "A.I 様", text: "お取り寄せで初めて注文。クロワッサンのサクサク感に感動しました。", rating: 4 },
    ],
    access: { address: "東京都目黒区自由が丘1-2-3 パンの路地1F", hours: "7:00-19:00（月曜定休）", phone: "03-9012-6789" },
  },

  // 20. インテリアショップ
  {
    slug: "interior",
    layout: "bold",
    name: "インテリアショップ",
    tagline: "暮らしに、選び抜いた一品を",
    designConcept: "ウォームグレーとタンで上質な住空間を表現。余白をたっぷり使い、商品の魅力を最大限に引き出すクリーンなレイアウト。",
    highlights: ["ECサイト連携", "コーディネート提案", "オーダー家具対応"],
    tech: ["Next.js", "Tailwind CSS", "ECサイト", "3Dシミュレーター"],
    colors: { primary: "#3A3530", accent: "#9B8B6E", background: "#F8F6F2", text: "#3A3530", textLight: "#7A7060" },
    hero: {
      heading: "暮らしに、選び抜いた一品を",
      subheading: "北欧・和・インダストリアル。こだわりの住空間を作るための、素材と機能にこだわったセレクトショップ。",
      cta: "商品を見る",
      imageUrl: `${UNSPLASH}1555041469-a586c61ea9bc?w=1920&q=80`,
    },
    services: [
      { title: "家具・ソファ", description: "座り心地と耐久性にこだわるソファ・チェアから、本物の木材の家具まで。", icon: "Sofa" },
      { title: "照明・ランプ", description: "部屋のムードを決める照明を、スタイル別に豊富にご用意。", icon: "Lamp" },
      { title: "テキスタイル", description: "クッション・ラグ・カーテン。肌触りと色合いにこだわったファブリック。", icon: "Layers" },
      { title: "インテリアコーディネート", description: "部屋全体のバランスをプロが提案。オーダー家具の制作も承ります。", icon: "Layout" },
    ],
    gallery: [
      { src: `${UNSPLASH}1555041469-a586c61ea9bc?w=800&q=80`, alt: "リビングスタイリング" },
      { src: `${UNSPLASH}1618219908412-a29a1bb7b86e?w=800&q=80`, alt: "家具ディスプレイ" },
      { src: `${UNSPLASH}1570129477492-45c003edd2be?w=800&q=80`, alt: "リビング" },
      { src: `${UNSPLASH}1505691938895-1758d7feb511?w=800&q=80`, alt: "キッチン" },
      { src: `${UNSPLASH}1568605114967-8130f3a36994?w=800&q=80`, alt: "ダイニング" },
      { src: `${UNSPLASH}1564013799919-ab600027ffc6?w=800&q=80`, alt: "インテリア全景" },
    ],
    testimonials: [
      { name: "T.A 様", text: "新居のコーディネートをお願いしました。提案力が高く、理想の部屋に。", rating: 5 },
      { name: "N.S 様", text: "オーダーソファが届いた日から生活の質が上がりました。本当に良い買い物でした。", rating: 5 },
      { name: "H.M 様", text: "照明をこちらで変えただけで部屋の雰囲気が劇的に変わりました。", rating: 4 },
    ],
    access: { address: "東京都世田谷区三軒茶屋3-4-5 インテリアコート2F", hours: "11:00-20:00（火曜定休）", phone: "03-0123-7890" },
  },
];
