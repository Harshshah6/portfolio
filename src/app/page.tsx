import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection/>
    </main>
  );
}
