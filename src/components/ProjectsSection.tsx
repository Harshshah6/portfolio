import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./ui/project";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-12 container mx-auto w-screen min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl font-bold text-center mb-4 md:mb-8">Projects</h1>
      <div className="p-4 md:p-0 ">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} index={index}/>
          </React.Fragment>
        ))}
      </div>

      {/* <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">bash</p>
        </div>
        <div className="mt-4">
          <p className="text-green-400">$ npm install next</p>
          <p className="text-white">+ next@10.2.3</p>
          <p className="text-white">
            added 1 package, and audited 2 packages in 3s
          </p>
          <p className="text-green-400">$</p>
        </div>
      </aside> */}
    </section>
  );
}

export default ProjectsSection;
