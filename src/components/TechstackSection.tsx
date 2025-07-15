import React from 'react'

import {
    SiExpress,
    SiFirebase,
    SiGit,
    SiGithub,
    SiJavascript,
    SiKotlin,
    SiLinux,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiTypescript,
} from 'react-icons/si';
import { FaJava, FaDocker, FaFlutter, FaPhp } from 'react-icons/fa6';

const techStack = [
    {
        text: "Java",
        icon: <FaJava />
    },
    {
        text: "Kotlin",
        icon: <SiKotlin />
    },
    {
        text: "Typescript",
        icon: <SiTypescript />
    },
    {
        text: "Javascript",
        icon: <SiJavascript />
    },
    {
        text: "Python",
        icon: <SiPython />
    },
    {
        text: "MongoDB",
        icon: <SiMongodb />
    },
    {
        text: "Firebase",
        icon: <SiFirebase />
    },
    {
        text: "NextJS",
        icon: <SiNextdotjs />
    },
    {
        text: "NodeJS",
        icon: <SiNodedotjs />
    },
    {
        text: "ExpressJS",
        icon: <SiExpress />
    },
    {
        text: "Linux",
        icon: <SiLinux />
    },
    {
        text: "GIT",
        icon: <SiGit />
    },
    {
        text: "Github",
        icon: <SiGithub />
    },
    {
        text: "Docker",
        icon: <FaDocker />
    },
    {
        text: "Flutter",
        icon: <FaFlutter />
    },
    {
        text: "PhP",
        icon: <FaPhp />
    },
];

export default function TechstackSection() {
    return (
        <div className='bg-card border rounded p-5 shadow'>
            <h2 className='text-xl font-bold'>Tech Stack</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
                {
                    techStack.map((tech, index) => (
                        <div key={index} className='flex cursor-pointer items-center justify-center gap-2 p-3 border border-primary/10 rounded bg-accent/20 text-accent-foreground hover:bg-accent/50 transition-all duration-300'>
                            <div className=''>{tech.icon}</div>
                            <span className='text-sm font-medium'>{tech.text}</span>
                        </div>
                    ))
                }
            </div>
            <p className='text-end text-foreground/50'>... much more</p>
        </div>
    )
}
