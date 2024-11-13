import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

function AboutSection() {
  return (
    <section id='about' className="p-4 md:p-0 min-h-screen w-screen container mx-auto flex flex-col gap-4 md:gap-0 items-center justify-center md:flex-row">
        <div className="flex-1 items-center justify-center flex">
              <Image width={1024} height={1024} src="/personcoding.jpg" alt='personcoding-image' className='w-1/2 rounded-md overflow-hidden'/>
        </div>
        <div className="flex-1 flex justify-center items-center flex-col gap-4">
              <h1 className='text-4xl md:text-5xl md:place-self-start'>About Me <span className='hidden md:block text-xl text-primary/80'>{" - "}Harsh S Shah</span></h1>
              <p className='text-primary/70 font-mono '>
                  Hello I'm Harsh Sandeep Shah. I'm a software developer with a passion for building innovative and user-friendly applications. With a strong foundation in Java for android applications and frameworks like NextJS for websites.
                  I have knowledge in various domains like Coding Android Applicatons, Websites, Desktop Applications. I always look forward to contribute in open source repositories.
                  I have spent 2+ years in freelancing and these days i am more focused towards in building personal projects. <br /><br />
                  I believe in creating applications that are not only visually appealing but also strategically aligned with my clients' goals. <br /> <br />
                  If you're looking for a creative partner for your next project, feel free to reach out! Let’s create something amazing together.
              </p>
              <Button variant="default" className='place-self-start font-bold'> Contact Me</Button>
        </div>
    </section>
  )
}

export default AboutSection
