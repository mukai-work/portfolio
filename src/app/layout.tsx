import type { Metadata } from "next";
import { Noto_Sans_JP, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ムカイ | フルスタックエンジニア × AI開発 — 要件定義から本番リリースまで",
  description:
    "フルスタックエンジニア・ムカイのポートフォリオ。Next.js / TypeScript / Python / Supabase を軸に、SaaS・Webアプリの設計から開発・インフラ構築・納品まで一気通貫で対応。AI活用（Claude Code・Cursor）により通常の3〜5倍のスピードで開発を実現。スタートアップのCTO・PM・エージェント担当者からのご相談を歓迎。",
  keywords: [
    "フルスタックエンジニア",
    "フリーランスエンジニア",
    "Next.js",
    "TypeScript",
    "Python",
    "Supabase",
    "SaaS開発",
    "AI開発",
    "Claude Code",
    "スタートアップ",
    "ポートフォリオ",
  ],
  openGraph: {
    title: "ムカイ | フルスタックエンジニア × AI開発",
    description:
      "要件定義から本番リリースまで一人称で完走。Next.js / TypeScript / Supabase × AI活用でスタートアップの開発を加速します。副業は今すぐ対応可。",
    type: "website",
    locale: "ja_JP",
    url: "https://portfolio-three-blond-25spxsuyxc.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "ムカイ | フルスタックエンジニア × AI開発",
    description:
      "要件定義から本番リリースまで一人称で完走。チーム半年分の開発を1〜3ヶ月に短縮した実績。スタートアップのCTO・PM・エージェント担当者からのご相談を歓迎。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
