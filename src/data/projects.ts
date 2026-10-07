export type ProjectCategory = "video" | "web" | "ai" | "app" | "creative";

export const projectCategories: { key: ProjectCategory; label: string }[] = [
  { key: "video", label: "動画・映像" },
  { key: "web", label: "Web制作" },
  { key: "ai", label: "AI・自動化" },
  { key: "app", label: "アプリ・ツール" },
  { key: "creative", label: "ゲーム・デザイン" },
];

export type Project = {
  slug: string;
  title: string;
  kind: string;
  categories: ProjectCategory[];
  summary: string;
  tech: string[];
  status: string;
  /** 公開中のものだけ。クライアント・提携先が特定される案件にはリンクを付けない */
  links?: { label: string; href: string }[];
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "zoomreel",
    title: "ZoomReel",
    kind: "Chrome拡張・販売中",
    categories: ["app", "video"],
    summary:
      "クリックや入力の位置へ自動でズームしながら画面を録画するChrome拡張。編集なしで「編集済みのような」製品デモ動画が作れる。Chrome ウェブストアで公開し、決済は Polar（Pro 29ドル買い切り・4K書き出し）。紹介ページ・ストア掲載物まで一人で用意した。",
    tech: ["Chrome Extension MV3", "JavaScript", "Polar", "FSR"],
    status: "公開中（2026.10〜）",
    links: [
      {
        label: "Chrome ウェブストア",
        href: "https://chromewebstore.google.com/detail/zoomreel/ahfalpagfccljmljgekgidbhkcmdepgp",
      },
      { label: "紹介ページ", href: "https://zoomreel-app.pages.dev" },
    ],
    image: "/works/zoomreel.webp",
  },
  {
    slug: "short-auto-edit",
    title: "ショート動画の自動編集パイプライン",
    kind: "動画編集・自動化",
    categories: ["video", "ai"],
    summary:
      "配信アーカイブから見どころを抜き出し、字幕・高速カット・ズーム・効果音入りのショート動画を自動で編集して投稿する仕組み。文字起こし→見どころ抽出→編集計画→レンダリング→品質チェック11項目→公式API経由の投稿までを無人で回し、TikTok・YouTubeで運用している。",
    tech: ["Python", "Whisper系 文字起こし", "ローカルLLM", "FFmpeg（NVENC・ASS字幕）", "SQLite"],
    status: "運用中（2026.9〜）",
  },
  {
    slug: "yt-script",
    title: "YouTube動画の台本制作",
    kind: "受託・継続案件",
    categories: ["video"],
    summary:
      "海外の事件映像（警察のボディカメラ等）を扱うYouTubeチャンネルで、切り抜き動画の台本を継続受託。字幕入り動画から構成とナレーション台本を作り、スプレッドシートで納品している。クライアントの指摘を120項目超のチェックリストに整理し、検算は機械化して品質を安定させた。",
    tech: ["台本・構成", "字幕の書き起こし", "Python（検算）", "Google スプレッドシート"],
    status: "継続受託（2026.8〜・30本以上）",
  },
  {
    slug: "ai-reels",
    title: "AI縦型動画の制作パイプライン",
    kind: "動画制作・生成AI",
    categories: ["video", "ai"],
    summary:
      "画像生成→動画生成→FFmpeg合成で、POV視点の縦型ショート動画を自動制作する仕組み。AI映像にありがちな手の不自然な動きを避けるプロンプトの型（3原則）を検証して確立し、テロップ・BGM・ループ処理まで自動化した。",
    tech: ["ComfyUI", "Kling", "FFmpeg", "Pillow"],
    status: "パイプライン完成",
  },
  {
    slug: "video-upscale",
    title: "動画の高画質化ツール",
    kind: "Androidアプリ／PCツール",
    categories: ["video", "app"],
    summary:
      "スマホ動画を端末内だけで高画質化するAndroidアプリ。AMD FSR 1.0（EASU＋RCAS）をGLSLで自前実装し、実時間の約2倍の速さで書き出す。暗所補正・明るさ・ガンマ・再生速度を調整できるプレイヤーも内蔵。PC向けには超解像モデルで動画をリマスターするツールも試作した。",
    tech: ["Kotlin", "GLSL ES 3.0", "MediaCodec", "ExoPlayer", "ComfyUI"],
    status: "実機検証済み",
  },
  {
    slug: "local-sites",
    title: "地域特化の情報サイト（2サイト）",
    kind: "Webサイト制作・SEO",
    categories: ["web"],
    summary:
      "葬儀分野の地域情報サイトを企画・制作・公開・SEO運用まで担当。高齢の読者がスマホで読む前提で、文字サイズ・表組み・電話導線を設計した。構造化データ（JSON-LD）と llms.txt に対応し、Lighthouse は全項目99〜100。Search Console・Bing に登録して運用中。",
    tech: ["Astro 5", "TypeScript", "Cloudflare Workers", "JSON-LD"],
    status: "公開・運用中",
  },
  {
    slug: "trueref",
    title: "TrueRef（Unityエディタ拡張）",
    kind: "ゲーム開発者向けツール",
    categories: ["app"],
    summary:
      "Unityプロジェクト内のアセットの参照先を検索し、使われていないアセットを安全に削除できるエディタ拡張。Unity 6 以降に対応し、Unity Asset Store へ販売申請した（20ドル）。",
    tech: ["C#", "Unity Editor API"],
    status: "Asset Store 審査中",
  },
  {
    slug: "android-apps",
    title: "Androidアプリ（個人開発）",
    kind: "モバイルアプリ",
    categories: ["app"],
    summary:
      "ライブ壁紙と透明ウィジェットでホーム画面・ロック画面を統一する「墨（SUMI）」、買い物リスト、習慣化RPGなど。Jetpack Composeで実装し、Android 16 の実機で動作を検証している。",
    tech: ["Kotlin", "Jetpack Compose", "Room", "Open-Meteo API"],
    status: "実機検証済み（自分用）",
  },
  {
    slug: "pdf-editor",
    title: "ローカルPDF編集ツール",
    kind: "業務ツール",
    categories: ["app"],
    summary:
      "PDF内の既存の文字をその場で書き換えられる編集ツール（有料サービスの代わりとして作成）。元のフォントを照合して再利用し、無い文字は近い書体で補う。自動テスト62項目。",
    tech: ["Python", "PyMuPDF", "FastAPI"],
    status: "実用中（自分用）",
  },
  {
    slug: "browser-game",
    title: "3Dブラウザゲームの試作",
    kind: "ゲーム開発",
    categories: ["creative"],
    summary:
      "Three.jsで3Dのインクリメンタルゲームを試作。到達時間などのバランスはボットで回帰検証し、英語化してゲーム配信サイト（CrazyGames）に提出した。",
    tech: ["Three.js", "TypeScript", "GLSL"],
    status: "配信サイト審査中",
  },
  {
    slug: "line-kisekae",
    title: "LINE着せかえ（7セット）",
    kind: "デザイン",
    categories: ["creative"],
    summary:
      "LINE着せかえを7セット制作して申請。商用利用できる画像生成モデルで素材を作り、審査ガイドラインに合わせてデザインを調整した。",
    tech: ["画像生成AI", "デザイン"],
    status: "申請済み",
  },
  {
    slug: "kaggle-ptcg",
    title: "カードゲームAIコンペ（Kaggle）",
    kind: "ゲームAI",
    categories: ["ai", "creative"],
    summary:
      "The Pokémon Company × Kaggle のカードゲームAIコンペに参加。ルールベースのAIとデッキ構成を自動対戦で評価し、本番環境を再現した提出前の検証基盤を作った。",
    tech: ["Python", "シミュレーション"],
    status: "参加（2026.6〜8）",
  },
];
