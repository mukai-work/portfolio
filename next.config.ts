import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  // 自作製品の静的ページ（public/<製品>/index.html）を /<製品> で開けるようにする。
  // Next は末尾の / を外すので、/hakaru/ ではなく /hakaru に振り分ける（部品は /hakaru/... の絶対パスで読む）
  async rewrites() {
    return [{ source: "/hakaru", destination: "/hakaru/index.html" }];
  },
};

export default nextConfig;
