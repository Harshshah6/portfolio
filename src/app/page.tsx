import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ContactSection />
      <Footer/>
    </main>
  );
}
