import { projectsData } from "@/lib/data";
import {Button} from './button'

type ProjectData = (typeof projectsData)[number];

type ProjectProps = ProjectData & { index: number };

export default function Project({
  title,
  description,
  tags,
}: ProjectProps) {

  return (
    <div className="w-fit flex-1 p-3 flex flex-col h-full bg-gray-100 border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
        {description}
      </p>
      <ul className="flex flex-wrap mt-4 gap-2">
        {tags.map((tag: string, index: number) => (
          <li
            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="w-full flex gap-3 mt-4">
        <Button className="w-full">VIEW LIVE</Button>
        <Button className="w-full">GITHUB</Button>
      </div>
    </div>
  );
}
