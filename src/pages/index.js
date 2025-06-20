import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Hero />
      <Overview />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
