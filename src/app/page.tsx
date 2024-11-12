import Navbar from "@/components/Navbar";
import { OrbitingCirclesDemo } from "@/components/OrbitingCircle";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen flex flex-row justify-center items-center">
        <div className="flex-1 size-full items-center justify-center flex flex-col gap-4">
          <h1 className="text-xl md:text-2xl text-foreground/75 text-center">Hello I'am</h1>
          <h1 className="text-4xl md:text-6xl text-center">Harsh S Shah</h1>
          <h1 className="text-2xl md:text-3xl text-foreground/90 text-center">Android App Developer</h1>
          <div className="space-x-5 items-center justify-evenly flex">
            <Button variant="secondary" className="border text-base">Download CV</Button>
            <Button variant="outline" className="text-base">Contact Me</Button>
          </div>
        </div>
        <div className="hidden md:flex flex-1 size-full items-center justify-center">
          <OrbitingCirclesDemo />
        </div>
      </div>
    </>
  );
}
