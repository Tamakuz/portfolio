"use client";
import RunningSkills from "@/components/home/RuningSkills";
import CardFindMe from "../components/home/CardFindMe";
import HeaderComponent from "../components/home/HeaderComponent";
import SkillsSection from "@/components/home/SkillsSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectSection from "@/components/home/ProjectSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="relative pb-10">
      <main className="text-neutral-800 space-y-10 dark:text-neutral-300 relative z-10">
        <HeaderComponent />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <CardFindMe />
        <ContactSection />
      </main>
    </div>
  );
}
