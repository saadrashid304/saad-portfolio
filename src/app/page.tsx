import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </main>
  );
}
