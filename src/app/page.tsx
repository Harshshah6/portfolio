import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {

  return (
    <main className="flex flex-col font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer/>
    </main>
  );
}
