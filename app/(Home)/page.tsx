"use client";
import CardServices from "./components/CardServices";
import CardFindMe from "./components/CardFindMe";
import Header from "./components/Header";

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
