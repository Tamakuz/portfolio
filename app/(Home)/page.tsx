"use client";
import Typer from "./components/Typer";
import { SiBuymeacoffee } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import CardServices from "./components/CardServices";
import ParticlesProvider from "@/providers/particle-provider";

export default function Home() {
  return (
    <div className="relative">
      <ParticlesProvider />
      <main className="container px-5 lg:px-[20%] mt-10 space-y-5 text-neutral-800 dark:text-neutral-300 pt-20 relative z-10">
        <div className="flex justify-between items-center">
          <Typer />
          <a
            href="http://saweria.co/JovanTama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiBuymeacoffee className="text-2xl -rotate-12" />
          </a>
        </div>
        <h2 className="text-[16px] leading-7">
          I am Jovan Panji Pratama, a Full Stack Developer with expertise in
          frontend and backend development using JavaScript, particularly
          Next.js 14. I have experience in building efficient, responsive, and
          SEO-friendly web applications. I am ready to contribute to your web
          development projects.
        </h2>
        <Separator />
        <div className="space-y-2">
          <div className="flex items-center gap-1 text-xl font-medium">
            <MdOutlineMiscellaneousServices />
            <h2 className="capitalize">Services</h2>
          </div>
          <div className="flex flex-col justify-between gap-2 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center">
            <p className="dark:text-neutral-400">
              Here are the outstanding services I am ready to deliver to you
            </p>
          </div>
          <CardServices />
        </div>
      </main>
    </div>
  );
}
