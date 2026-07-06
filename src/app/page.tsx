import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { WorksSection } from "@/components/portfolio/WorksSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { FaqSection } from "@/components/portfolio/FaqSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Github, Twitter, PenLine } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <SkillsSection />
      <FaqSection />
      <ContactSection />

      <footer className="bg-navy-deep border-t border-white/10 text-white/50 py-12 px-6 text-center">
        <p className="font-mono tracking-[0.3em] text-accent-soft text-xs mb-4">
          MUKAI / FULLSTACK ENGINEER
        </p>
        <div className="flex items-center justify-center gap-5 mb-4">
          <a href="https://github.com/mukai-work" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://x.com/m333studio" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white/70 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://note.com/m333_studio" target="_blank" rel="noopener noreferrer" aria-label="Note" className="text-white/70 hover:text-white transition-colors">
            <PenLine size={20} />
          </a>
        </div>
        <a
          href="https://x.com/m333studio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs text-accent-soft hover:text-white transition-colors mb-4"
        >
          稼働相談・スカウトは X(DM)へ →
        </a>
        <p className="font-mono text-xs text-white/30">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
