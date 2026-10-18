import type { Metadata } from "next";
import { Noto_Sans_JP, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
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
  "大阪の個人事業主・システムエンジニア、ムカイ。C#／ASP.NETを中心に、建築・医療・官公庁・ECの業務システムを6年つくってきました。中小企業の業務システムの相談・設計・開発もお受けしています。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ムカイ | 業務システムの設計と開発（大阪）",
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
    title: "ムカイ | 業務システムの設計と開発（大阪）",
    description,
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "mukai.works",
  },
  twitter: {
    card: "summary_large_image",
    title: "ムカイ | 業務システムの設計と開発（大阪）",
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
      className={`${notoSansJP.variable} ${geistMono.variable} h-full antialiased`}
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
