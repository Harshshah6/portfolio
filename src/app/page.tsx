import Navbar from "@/components/Navbar";
import { OrbitingCirclesDemo } from "@/components/OrbitingCircle";

export default function Home() {

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen flex flex-row justify-center items-center">
        <div className="flex-1 size-full">

        </div>
        <div className="flex-1 size-full items-center justify-center flex">
          <OrbitingCirclesDemo />
        </div>
      </div>
    </>
  );
}
