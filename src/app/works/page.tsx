import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageIntro } from "@/components/site/PageIntro";
import { WorksSection } from "@/components/portfolio/WorksSection";

export const metadata: Metadata = {
  title: "制作物・Webデモ",
  description:
    "販売中のChrome拡張、業務ツール、自動化の仕組み、業種別のWebサイトデモなど、自分で作ってきたものの一覧です。",
};

export default function WorksPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro label="WORKS" title="制作物・Webデモ">
          お仕事とは別に、自分で企画して作ってきたものです。販売中のツールから試作まで、手を動かして確かめてきた記録として載せています。
        </PageIntro>
        <WorksSection bare />
      </main>
      <SiteFooter />
    </>
  );
}
