import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { WorksSection } from "@/components/portfolio/WorksSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { FaqSection } from "@/components/portfolio/FaqSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Github, Twitter, PenLine } from "lucide-react";

const socials = [
  { href: "https://github.com/mukai-work", label: "GitHub", icon: Github },
  { href: "https://x.com/m333studio", label: "X", icon: Twitter },
  { href: "https://note.com/m333_studio", label: "Note", icon: PenLine },
];

export default function Home() {
  return (
    <main className="relative flex flex-col w-full">
      {/* ページ全体を貫く縦のヘアライン（コンテナの左右端） */}
      <div
        className="pointer-events-none fixed inset-y-0 left-1/2 z-40 hidden w-full max-w-[1200px] -translate-x-1/2 border-x border-hair md:block"
        aria-hidden
      />

      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <WorksSection />
      <SkillsSection />
      <FaqSection />
      <ContactSection />

      <footer className="bg-navy-deep border-t border-hair text-white/55">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="font-mono text-xs tracking-[0.2em] text-white/80">MUKAI / FULLSTACK ENGINEER</p>
            <div className="flex items-center gap-4">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </a>
              ))}
            </div>
            <a
              href="https://x.com/m333studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent-soft hover:text-white transition-colors"
            >
              稼働相談・スカウトは X(DM)へ →
            </a>
          </div>
          <div className="font-mono text-[0.7rem] leading-relaxed text-white/45 md:text-right">
            <p>Built with Next.js 16 · Tailwind CSS v4 · No animation libraries</p>
            <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
