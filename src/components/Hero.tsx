import { CheckCircle, Github, Linkedin } from 'lucide-react'
import React from 'react'

export default function Hero() {
    return (
        <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='lg:flex-[.6]'>
                <div className='sticky top-27 border rounded p-8 flex flex-col gap-3'>
                    <h1 className='font-bold text-xl'>Harsh S Shah</h1>
                    <p className="text-primary/70 text-sm">
                        {"Hello I'm Harsh Sandeep Shah. I'm a software developer with a passion for building innovative and user-friendly applications. With a strong foundation in Java for android applications and frameworks like NextJS for websites. I have knowledge in various domains like Coding Android Applicatons, Websites, Desktop Applications. I always look forward to contribute in open source repositories. I have spent 2+ years in freelancing and these days i am more focused towards in building personal projects. "}
                        <br /><br />
                        {"I believe in creating applications that are not only visually appealing but also strategically aligned with my clients' goals."}
                        <br /> <br />
                        {"If you're looking for a creative partner for your next project, feel free to reach out! Let's create something amazing together."}
                    </p>
                    <div className='flex items-center justify-center gap-1'>
                        <div className='p-3 transition-all duration-300 rounded-full hover:bg-muted/50 cursor-pointer hover:scale-110'>
                            <Github className='size-5' />
                        </div>
                        <div className='p-3 transition-all duration-300 rounded-full hover:bg-muted/50 cursor-pointer hover:scale-110'>
                            <Linkedin className='size-5' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        {/* <div className='flex items-center justify-between'>
                            <div>
                                <h3 className="font-medium text-lg">2 years</h3>
                                <p className='text-primary/60 text-sm leading-4'>Experience</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">Mumbai, India</h3>
                                <p className='text-primary/60 text-sm leading-4 text-end'>Location</p>
                            </div>
                        </div> */}
                        <button className='cursor-pointer transition-colors duration-300 hover:bg-primary/90 flex items-center justify-center gap-2 p-2 rounded-lg bg-primary text-primary-foreground text-lg'>
                            <CheckCircle className='size-5' /> Hire Me
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex-1 h-[9999px] border rounded'>
                scrollable div
            </div>
        </div>
    )
}
