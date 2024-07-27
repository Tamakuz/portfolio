"use client";
import Typer from "./components/Typer";
import { SiBuymeacoffee } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import CardServices from "./components/CardServices";
import CardFindMe from "./components/CardFindMe";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="relative">
      <main className="space-y-5 text-neutral-800 dark:text-neutral-300 relative z-10">
        <Header />
        <CardServices />
        <Separator />
        <div className="space-y-2">
          <div className="flex items-center gap-1 text-xl font-medium">
            <SiBuymeacoffee />
            <h2 className="capitalize">Find Me</h2>
          </div>
          <div className="flex flex-col justify-between gap-2 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center">
            <p className="dark:text-neutral-400">
              Find me on the following platforms: GitHub, Instagram, Facebook,
              and more
            </p>
          </div>
          <CardFindMe />
        </div>
      </main>
    </div>
  );
}
