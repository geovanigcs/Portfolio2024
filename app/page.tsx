import { Header } from "./components/ui/Header";
import React from "react";
import { Hero } from "./components/ui/Hero";
import { About } from "./components/ui/About";
import { WorkExperience } from "./components/ui/WorkExperience";
import { Skills } from "./components/ui/Skills";
import { Projects } from "./components/ui/Projects";
import { Contact } from "./components/ui/Contact";

export default function Home() {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 ">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
