import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});

// 見出しと名前だけに使う。資料PDFの明朝見出しと揃えるため
const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
  preload: false,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://mukai.works";
const description =
  "大阪のシステムエンジニア・ムカイ。業務の手作業を減らす仕組みづくり、新規事業のシステム設計、AI活用の相談に、設計から実装・引き継ぎまで伴走します。作らずに済むものは作らない提案をします。開発6年目・応用情報技術者。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ムカイ | つくれるエンジニアが、ITの判断に伴走します",
    template: "%s | ムカイ（mukai.works）",
  },
  description,
  keywords: [
    "IT導入支援",
    "業務効率化",
    "システム設計",
    "要件定義",
    "AI活用 相談",
    "フリーランスエンジニア",
    "大阪",
    "C#",
    "ASP.NET",
  ],
  openGraph: {
    title: "ムカイ | つくれるエンジニアが、ITの判断に伴走します",
    description,
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "mukai.works",
  },
  twitter: {
    card: "summary_large_image",
    title: "ムカイ | つくれるエンジニアが、ITの判断に伴走します",
    description,
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
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var d=document.documentElement;d.classList.add('js');setTimeout(function(){if(!d.dataset.revealReady)d.classList.remove('js')},4000);",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
