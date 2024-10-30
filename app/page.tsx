"use client";
import CardFindMe from "../components/home/CardFindMe";
import HeaderComponent from "../components/home/HeaderComponent";
import SkillsSection from "@/components/home/SkillsSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectSection from "@/components/home/ProjectSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/reusable/navbar/navbar";

export default function Home() {
  return (
    <main className="relative h-fit">
      <Navbar />
      <main
        className="text-neutral-800 space-y-10 dark:text-neutral-300 relative z-10"
      >
        <HeaderComponent />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <CardFindMe />
        <ContactSection />
        <Footer />
      </main>
    </main>
  );
}
