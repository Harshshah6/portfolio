import { cn } from "@/lib/utils";
import React from 'react'
import AlternateTimeline from './ui/timeline'
import Marquee from './ui/marquee'
import {
    JavaSVG,
    pythonSVG,
    cSVG,
    cppSVG,
    javascriptSVG,
    phpSVG,
    KotlinSVG,
    nodeSVG,
    expressSVG,
    reactSVG,
    nextSVG,
    mongoSVG,
    firebaseSVG,
    appwriteSVG,
    bootstrapSVG,
    tailwindSVG,
    typescriptSVG
} from "../../util/svg-constants";

function EducationSection() {
    return (
        <section className='container w-screen mx-auto py-12'>
            <h1 className="text-3xl font-bold text-center mb-4 md:mb-8">Education</h1>
            <AlternateTimeline />
            <h1 className='my-12' />
            {MarqueeDemo()}
        </section>
    )
}


const reviews = [
    {
        name: "Java",
        img: JavaSVG,
    },
    {
        name: "Kotlin",
        img: KotlinSVG,
    },
    {
        name: "php",
        img: phpSVG,
    },
    {
        name: "C++",
        img: cppSVG,
    },
    {
        name: "Python",
        img: pythonSVG,
    },
    {
        name: "Javascript",
        img: javascriptSVG,
    },
    {
        name: "Typescript",
        img: typescriptSVG,
    },
    {
        name: "C",
        img: cSVG,
    },
    {
        name: "Tailwind",
        img: tailwindSVG,
    },
    {
        name: "Bootstrap",
        img: bootstrapSVG,
    },
    {
        name: "Node JS",
        img: nodeSVG,
    },
    {
        name: "React JS",
        img: reactSVG,
    },
    {
        name: "Next JS",
        img: nextSVG,
    },
    {
        name: "Express JS",
        img: expressSVG,
    },
    {
        name: "MongoDB",
        img: mongoSVG,
    },
    {
        name: "Firebase",
        img: firebaseSVG,
    },
    {
        name: "Appwrite",
        img: appwriteSVG,
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
}: {
    img: React.JSX.Element;
    name: string;
    }) => {
    return (
        <figure
            className={cn(
                "relative min-w-40 w-fit cursor-pointer overflow-hidden rounded-xl p-4",
                "bg-secondary/10"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                {img}
                <div className="flex flex-col">
                    <figcaption className="text-base font-medium text-secondary-foreground/70">
                        {name}
                    </figcaption>
                </div>
            </div>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <Marquee className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <Marquee reverse className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}


export default EducationSection
