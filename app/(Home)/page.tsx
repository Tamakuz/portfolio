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
    <div className="relative pb-10">
      <main className="space-y-5 text-neutral-800 dark:text-neutral-300 relative z-10">
        <Header />
        <CardServices />
        <CardFindMe />
      </main>
    </div>
  );
}
