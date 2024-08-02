"use client";
import CardServices from "./components/CardServices";
import CardFindMe from "./components/CardFindMe";
import HeaderComponent from "./components/HeaderComponent";

export default function Home() {
  return (
    <div className="relative pb-10">
      <main className="space-y-5 text-neutral-800 dark:text-neutral-300 relative z-10">
        <HeaderComponent />
        <CardServices />
        <CardFindMe />
      </main>
    </div>
  );
}
