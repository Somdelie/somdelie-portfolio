"use client";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RecentProjects from "@/components/ui/RecentProjects";
import { useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(true);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  return (
    <main className="flex min-h-screen flex-col max-w-[80%] mx-auto ">
      <Hero />
      <Services />
      <About />
      <RecentProjects />
      <Experience />
      <Approach />
    </main>
  );
}
