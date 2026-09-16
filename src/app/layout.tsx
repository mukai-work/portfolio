import type { Metadata } from "next";
import { Noto_Sans_JP, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ムカイ | フルスタックエンジニア × AI開発 — 要件定義から本番リリースまで",
  description:
    "フルスタックエンジニア・ムカイのポートフォリオ。C#／ASP.NETの業務系Webシステム開発に約5年従事（Vue.js・Oracle・Azure）。個人開発ではNext.js / TypeScript × AI活用（Claude Code）で自社SaaSを設計から本番リリースまで独力構築。エンド企業・開発会社のCTO・PM、エージェント担当者からのご相談を歓迎。",
  keywords: [
    "フルスタックエンジニア",
    "フリーランスエンジニア",
    "C#",
    "ASP.NET",
    "Vue.js",
    "Oracle",
    "Azure",
    "Next.js",
    "TypeScript",
    "SaaS開発",
    "AI開発",
    "Claude Code",
    "ポートフォリオ",
  ],
  openGraph: {
    title: "ムカイ | フルスタックエンジニア × AI開発",
    description:
      "C#/.NET業務システム実務 約5年 × Next.js個人開発 × AI活用。調査・設計から実装・リリースまで一気通貫。副業は今すぐ、本格参画は2026年12月〜相談可。",
    type: "website",
    locale: "ja_JP",
    url: "https://portfolio-three-blond-25spxsuyxc.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "ムカイ | フルスタックエンジニア × AI開発",
    description:
      "C#/.NET業務システム実務 約5年 × Next.js個人開発 × AI活用。Oracleチューニング約3分→約20秒、100GB超のAzure Blob移行を要件定義から完遂。エンド企業・開発会社・エージェント担当者からのご相談を歓迎。",
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
      className={`${notoSansJP.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
