import { cn } from "@/lib/utils";
import React from 'react'
import AlternateTimeline from './ui/timeline'
import Marquee from './ui/marquee'
import { skills } from "@/lib/data";

function EducationSection() {
    return (
        <section className='container w-screen mx-auto py-12'>
            <h1 className="text-3xl font-bold text-center mb-4 md:mb-8">Education</h1>
            <AlternateTimeline />
            <h1 className='my-20' />
            {MarqueeDemo()}
        </section>
    )
}

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

const SkillsCard = ({
    name,
}: {
    name: string;
}) => {
    return (
        <figure
            className={cn(
                "w-fit overflow-hidden rounded-xl py-4 px-6 md:px-10",
                "bg-gray-100 dark:bg-white/10"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                {/* {img} */}
                <div className="text-xs md:text-base font-medium text-secondary-foreground/70 text-center">
                    {name}
                </div>
            </div>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <Marquee className="[--duration:20s]">
                {
                    firstRow.map((skill) => (
                        <SkillsCard key={skill} name={skill} />
                    ))
                }
            </Marquee>
            <Marquee reverse className="[--duration:20s]">
                {
                    secondRow.map((skill) => (
                        <SkillsCard key={skill} name={skill} />
                    ))
                }
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}


export default EducationSection
