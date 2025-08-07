import { CheckCircle } from 'lucide-react'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Button } from './ui/button';
import TechstackSection from './TechstackSection';
import ProjectsSection from './ProjectsSection';
import Link from 'next/link';
import ContactMeSection from './ContactMeSection';
import DownloadCVButton from './ui/DownloadCVButton';

export default function Hero() {
    return (
        <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='lg:flex-[.6]'>
                <div className='sticky shadow top-27 border rounded p-8 flex flex-col gap-3 bg-card'>
                    <div className='flex items-center gap-2 justify-between'>
                        <h1 className='text-start text-xl tracking-normal font-medium'>Harsh S Shah</h1>
                        <div className='flex items-center justify-around gap-1'>
                            <Link aria-label='github-url' target='_blank' href={"https://github.com/harshshah6"} className='p-3 transition-all duration-300 rounded-full hover:bg-primary/10 cursor-pointer hover:scale-110'>
                                <FaGithub className='size-5' />
                            </Link>
                            <Link aria-label='linkedin-url' href="" className='p-3 transition-all duration-300 rounded-full hover:bg-primary/10 cursor-pointer hover:scale-110'>
                                <FaLinkedin className='size-5' />
                            </Link>
                        </div>
                    </div>
                    <p className="text-foreground/70 text-sm mt-0">
                        {"Hello I'm Harsh Sandeep Shah. I'm a software developer with a passion for building innovative and user-friendly applications."}
                    </p>

                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center justify-between mt-5'>
                            <div>
                                <p className="font-medium text-lg">4+ years</p>
                                <p className='text-foreground/60 text-sm leading-4 mt-0'>Experience</p>
                            </div>
                            <div>
                                <p className="font-medium text-lg">Banglore, India</p>
                                <p className='text-foreground/60 text-sm leading-4 text-end mt-0'>Location</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <Link href={"#contact"}>
                                <Button size={"lg"} className='w-full cursor-pointer p-2 flex-1 flex items-center justify-center gap-2 text-md'>
                                    <CheckCircle className='size-4' /> Contact Me
                                </Button>
                            </Link>
                            <DownloadCVButton />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-5'>
                <TechstackSection />
                <ProjectsSection />
                <ContactMeSection />
            </div>
        </div>
    )
}
