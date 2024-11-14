import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection/>
    </main>
  );
}
