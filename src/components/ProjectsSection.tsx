import { projectsData } from '@/lib/data'
import React from 'react'
import Project from './ui/project'

function ProjectsSection() {
    return (
        <section id='projects' className='py-12 container mx-auto w-screen min-h-screen flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold text-center mb-4 md:mb-8'>Projects</h1>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection
