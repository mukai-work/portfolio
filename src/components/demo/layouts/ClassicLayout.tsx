import type { DemoConfig } from "@/data/demos";
import { DemoHero } from "@/components/demo/DemoHero";
import { DemoServices } from "@/components/demo/DemoServices";
import { DemoGallery } from "@/components/demo/DemoGallery";
import { DemoTestimonials } from "@/components/demo/DemoTestimonials";
import { DemoAccess } from "@/components/demo/DemoAccess";
import { DemoFooter } from "@/components/demo/DemoFooter";

export function ClassicLayout({ config }: { config: DemoConfig }) {
  return (
    <>
      <DemoHero config={config} />
      <DemoServices config={config} />
      <DemoGallery config={config} />
      <DemoTestimonials config={config} />
      <DemoAccess config={config} />
      <DemoFooter config={config} />
    </>
  );
}
