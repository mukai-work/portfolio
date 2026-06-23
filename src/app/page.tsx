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
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <SkillsSection />
      <FaqSection />
      <ContactSection />

      <footer className="bg-gray-900 text-gray-400 py-10 px-6 text-center">
        <p className="font-display tracking-[0.3em] text-blue-300 text-sm mb-3">
          MUKAI / FULLSTACK ENGINEER
        </p>
        <div className="flex items-center justify-center gap-5 mb-4">
          <a href="https://github.com/mukai-work" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://x.com/m333studio" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-500 hover:text-white transition-colors">
            <Twitter size={18} />
          </a>
          <a href="https://note.com/m333_studio" target="_blank" rel="noopener noreferrer" aria-label="Note" className="text-gray-500 hover:text-white transition-colors">
            <PenLine size={18} />
          </a>
        </div>
        <a
          href="https://note.com/m333_studio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs text-blue-400 hover:text-blue-300 transition-colors mb-4"
        >
          稼働相談・スカウトは note へ →
        </a>
        <p className="text-xs">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
