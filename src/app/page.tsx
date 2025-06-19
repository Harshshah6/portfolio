import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main className="p-3 container mx-auto min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}