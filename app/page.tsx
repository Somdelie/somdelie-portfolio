"use client";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ShowCase from "@/components/ShowCase";
import RecentProjects from "@/components/ui/RecentProjects";
import { testimonials } from "@/data";
import { useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(true);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  return (
    <main className="flex min-h-screen pt-8 flex-col max-w-[80%] mx-auto ">
      <Hero />
      <div className="card7">
        <div className="shadow">⚠ Always follow traffic rules.</div>
      </div>
      <Services />
      <About />
      <RecentProjects />
      {/* <Clients items={testimonials} /> */}
      <Experience />
      <Approach />
      <ShowCase />
    </main>
  );
}
