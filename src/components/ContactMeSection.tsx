import Link from 'next/link'
import React from 'react'

export default function ContactMeSection() {
    return (
        <div id='contact' className='bg-card border rounded p-5 shadow'>
            <h2 className='text-xl font-bold border-0 mb-2.5 flex items-center justify-between'>Contact Me</h2>
            <p className='text-center text-card-foreground/50'>Best way to reach me is through: <Link href="mailto:i@amharsh.com" className='hover:underline text-nowrap'>i@amharsh.com</Link></p>
        </div>
    )
}
