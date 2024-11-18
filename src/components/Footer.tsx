import { Github, LinkedinIcon, Mail, YoutubeIcon, InstagramIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='bg-transparent border-t mt-20 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-evenly py-4 md:py-8'>
            <div>
                <h1 className='text-xl'>© Harsh Sandeep Shah</h1>
            </div>
            <div className='flex gap-6'>
                <Link target='_blank' href="https://github.com/harshshah6">
                    <Github size="24px" className='hover:size-7 transistion duration-300 cursor-pointer' />
                </Link>
                <Link target='_blank' href="https://www.linkedin.com/in/harsh-sandeep-shah-07a79b335/">
                    <LinkedinIcon size="24px" className='hover:size-7 transistion duration-300 cursor-pointer' />
                </Link>
                <Link target='_blank' href="mailto:harshsandeep23@gmail.com">
                    <Mail size="24px" className='hover:size-7 transistion duration-300 cursor-pointer' />
                </Link>
                <Link target='_blank' href="https://www.youtube.com/legendarystreamer">
                    <YoutubeIcon size="24px" className='hover:size-7 transistion duration-300 cursor-pointer' />
                </Link>
                <Link target='_blank' href="https://www.instagram.com/harsh_.s._shah/">
                    <InstagramIcon size="24px" className='hover:size-7 transistion duration-300 cursor-pointer' />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
