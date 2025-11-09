"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";

const cards = [
  {
    title: "5+ Years",
    description: "Experience",
    icon: "💼",
    gradient: "from-blue-500/20 to-blue-600/10",
  },
  {
    title: "50+ Projects",
    description: "Completed",
    icon: "🚀",
    gradient: "from-purple-500/20 to-purple-600/10",
  },
  {
    title: "30+ Clients",
    description: "Worldwide",
    icon: "🌍",
    gradient: "from-green-500/20 to-green-600/10",
  },
  {
    title: "100%",
    description: "Satisfaction",
    icon: "⭐",
    gradient: "from-orange-500/20 to-orange-600/10",
  },
];

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Crafting Scalable Web Experiences with Modern Technology";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden  py-14 pt-20">
      {/* Hexagonal Pattern Background */}
      <div className="absolute inset-0 bg-hexagon-pattern" />

      {/* Gradient overlay to fade left side */}
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 max-w-7xl mx-auto min-h-screen">
          <div className="flex-1 space-y-6 text-center md:text-left md:pl-12 animate-fade-in-up">
            <Badge className="bg-[#ff6b35]/20 backdrop-blur-sm border-[#ff6b35]/30 text-[#ff6b35] hover:bg-[#ff6b35]/30 transition-all duration-300">
              Dynamic Web Magic with Next.js
            </Badge>
            <h1 className="scroll-m-20 text-2xl md:text-5xl font-extrabold tracking-tight animate-fade-in-up delay-200 text-center">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground via-[#ff6b35] to-foreground animate-gradient">
                {displayedText}
              </span>
              <span className="inline-block w-1 h-8 md:h-12 bg-[#ff6b35] ml-1 animate-blink" />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up delay-300">
              Hi! I&apos;m Cautious, a full-stack developer based in South
              Africa specializing in web and mobile applications. With expertise
              in React, Next.js, and modern development tools, I transform ideas
              into polished, production-ready applications that users enjoy and
              businesses rely on.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
              <a href="/cautious-cv.pdf" download="Cautious-Ndlovu-CV.pdf">
                <button className="button" type="button">
                  <span className="button__text">Get My Cv</span>
                  <span className="button__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 35 35"
                      id="bdd05811-e15d-428c-bb53-8661459f9307"
                      data-name="Layer 2"
                      className="svg"
                    >
                      <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                      <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                      <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                    </svg>
                  </span>
                </button>
              </a>
              <button className="c-button">
                <span> Contact Me </span>
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-center w-full justify-center animate-fade-in-up delay-400 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              {/* Large Central Circle */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#ff6b35] via-[#ff8c5a] to-[#ffa87d] opacity-90 shadow-2xl animate-pulse-slow" />

              {/* Decorative rings */}
              <div className="absolute -inset-5 rounded-full border-2 md:border-4 border-[#ff6b35]/20 animate-spin-slow" />
              <div className="absolute -inset-8 md:-inset-10 rounded-full border border-[#ff6b35]/10" />

              {/* Center Icon/Image */}
              <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <Image
                  src="/coding.svg"
                  alt="Coding Illustration"
                  fill
                  className="drop-shadow-2xl object-contain"
                  priority
                />
              </div>

              {/* Floating Skill Badges */}
              <Badge
                className="absolute top-4 md:top-8 right-8 md:right-12 text-xs md:text-sm bg-[#008061] text-white hover:scale-110 transition-transform duration-300 shadow-lg animate-float-badge"
                style={{ animationDelay: "0s" }}
              >
                UI/UX Design
              </Badge>

              <Badge
                className="absolute bottom-8 md:bottom-12 left-4 md:left-8 text-xs md:text-sm bg-[#008061] text-white hover:scale-110 transition-transform duration-300 shadow-lg animate-float-badge"
                style={{ animationDelay: "1s" }}
              >
                Product Design
              </Badge>

              <Badge
                className="absolute top-1/4 -left-4 md:-left-5 text-xs md:text-sm bg-[#008061] text-white hover:scale-110 transition-transform duration-300 shadow-lg animate-float-badge"
                style={{ animationDelay: "2s" }}
              >
                Web Development
              </Badge>

              <Badge
                className="absolute bottom-1/4 -right-4 md:-right-5 text-xs md:text-sm bg-[#008061] text-white hover:scale-110 transition-transform duration-300 shadow-lg animate-float-badge"
                style={{ animationDelay: "1.5s" }}
              >
                Mobile Apps
              </Badge>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="relative z-20 max-w-[90%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`bg-linear-to-br ${card.gradient} backdrop-blur-md border border-border/50 dark:border-border/40 hover:border-primary/60 dark:hover:border-primary/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/20 group cursor-pointer overflow-hidden relative`}
            >
              <CardContent className="flex items-center">
                <span>{card.icon}</span>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
