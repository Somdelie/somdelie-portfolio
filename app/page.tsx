import { AboutSection } from "@/components/home-page/AboutSection";
import { ContactSection } from "@/components/home-page/ContactSection";
import { HeroSection } from "@/components/home-page/HeroSection";
import { Projects } from "@/components/home-page/ProjectsSection";
import { ServicesSection } from "@/components/home-page/ServicesSection";

export default function Home() {
  return (
    <div className="">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
