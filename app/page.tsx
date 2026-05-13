'use client';

import { ParticleBackground } from '@/components/ParticleBackground';
import { ScrollProgress } from '@/components/ScrollProgress';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { ContactSection } from '@/components/ContactSection';
import { FooterSection } from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="relative">
      {/* Particle background */}
      <ParticleBackground />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
