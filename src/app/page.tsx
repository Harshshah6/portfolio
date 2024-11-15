import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {

  return (
    <main className="flex flex-col ">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection/>
    </main>
  );
}
