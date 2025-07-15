import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main className="p-3 container mx-auto min-h-screen max-w-[70rem]">
      <Navbar />
      <Hero />
    </main>
  );
}