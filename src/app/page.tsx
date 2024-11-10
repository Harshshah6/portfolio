import Navbar from "@/components/Navbar";
import { OrbitingCirclesDemo } from "@/components/OrbitingCircle";

export default function Home() {

  return (
    <>
      <Navbar/>
      <div className="h-screen w-screen flex justify-center items-center">
          <OrbitingCirclesDemo/>
      </div>
    </>
  );
}
