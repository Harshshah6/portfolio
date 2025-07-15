import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { MdOpenInNew } from 'react-icons/md'

const projectsData: ProjectItemProps[] = [
    {
        title: "Melotune",
        description: "A clean, ad-free Android music streaming app powered by the unofficial JioSaavn API. Inspired by Spotify's minimal interface, this app enables users to search, stream, and enjoy music seamlessly — all without login or tracking.",
        url: "",
        liveUrl: "https://github.com/Harshshah6/SaavnMp3-Android/releases/latest",
        githubUrl: "https://github.com/Harshshah6/SaavnMp3-Android"
    },
    {
        title: "SMM ASHU",
        description: "Social Media Marketing panel. It is a web-based platform that allows individuals or businesses to purchase social media services such as likes, followers, comments, and views for their social media accounts.",
        url: "",
        liveUrl: "https://smmashu.com",
        githubUrl: ""
    },
    // {
    //     title: "",
    //     description: "",
    //     url: "",
    //     liveUrl: "",
    //     githubUrl: ""
    // },
    // {
    //     title: "",
    //     description: "",
    //     url: "",
    //     liveUrl: "",
    //     githubUrl: ""
    // },
];

export default function ProjectsSection() {
    return (
        <div className='bg-card border rounded p-5 shadow'>
            <h2 className='text-xl font-bold border-0 mb-2.5 flex items-center justify-between'>Projects <span className='text-sm text-primary cursor-pointer hover:underline'>see all</span></h2>
            <div className='flex flex-col gap-3'>
                {projectsData.map((item, idx) => <ProjectItem {...item} key={idx} />)}
            </div>
        </div>
    )
}

type ProjectItemProps = {
    url: string;
    liveUrl: string;
    githubUrl: string;
    title: string;
    description: string;
};

function ProjectItem({ liveUrl, githubUrl, title, description }: ProjectItemProps) {
    return (
        <div className='p-4 shadow border cursor-pointer rounded-lg hover:bg-primary/4 transition-all duration-300'>
            <h3 className='text-lg'>{title}</h3>
            <p className='mt-[2px] text-card-foreground/50'>{description}</p>
            <div className='flex gap-3 mt-4'>
                <a href={liveUrl} rel='noreferrer' target='_blank' className={`flex items-center gap-1 cursor-pointer hover:underline ${liveUrl.length === 0 ? "text-foreground/20 cursor-not-allowed!" : ""} `}><MdOpenInNew />Live Demo</a>
                <a href={githubUrl} rel='noreferrer' target='_blank' className={`flex items-center gap-1 cursor-pointer hover:underline ${githubUrl.length === 0 ? "text-foreground/20 cursor-not-allowed!" : ""} `}><FaGithub />GitHub</a>
            </div>
        </div>
    )
}
