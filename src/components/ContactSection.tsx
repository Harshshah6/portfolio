'use client'
import { AtSign, Github, InstagramIcon, LinkedinIcon, Mail, MapPin, Phone, Sun, YoutubeIcon } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { sendEmail } from '../../util/send-mail'
import { Toaster, toast } from 'sonner'

export type FormData = {
    name: string
    email: string
    message: string
}

function ContactSection() {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<FormData>();

    const onSubmit = handleSubmit(async (data) => {
        const result = await sendEmail(data);
        if (result) {
            reset();
            toast.success('Email sent successfully');
        } else
            toast.error('Failed to send email');
    })

    return (
        <section id='contact' className='container mx-auto min-h-screen py-6 flex flex-col gap-4'>
            <Toaster richColors/>
            <h2 className='text-3xl text-center'>Get in touch</h2>
            <div className='border flex-1 flex flex-col xl:flex-row mx-4 xl:mx-0 xl:p-20 bg-secondary/50 rounded-2xl'>
                <div className='flex-1 flex flex-col p-6 xl:p-20 gap-10 xl:gap-0'>
                    <div className='flex-1'>
                        <h1 className='text-4xl font-semibold'>Contact Me</h1>
                        <p className='text-base font-[300] mt-3 xl:mt-0'>Leave your email and we will get back to you within 24 hours</p>
                    </div>
                    <div className='flex-1 flex flex-col justify-center gap-4'>
                        {itemComponent(<AtSign />, "Email", "harshsandeep23@gmail.com")}
                        {itemComponent(<Phone />, "Phone", "(--)")}
                        {itemComponent(<MapPin />, "Address", "Karnataka, India")}
                        {itemComponent(<Sun />, "Working hours", "3 p.m - 11 p.m")}
                    </div>
                    <div className='flex-1 pt-6 flex gap-4 justify-start items-center'>
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
                </div>
                <div className='flex-1 flex justify-center items-center p-2 xl:p-20'>
                    <form onSubmit={onSubmit} className='h-full flex-1 border bg-gray-100 dark:bg-white/10 p-2 xl:p-10 rounded-xl flex flex-col justify-evenly'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input {...register("name")}  type="text" id="name" placeholder="Name" className='mt-2 outline outline-secondary-foreground outline-1' required />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input {...register("email")} type="email" id="email" placeholder="Email" className='mt-2 outline outline-secondary-foreground outline-1' required />
                            </div>
                            <div>
                                <Label htmlFor="text">Your Message</Label>
                                <Textarea {...register("message")} id="message" placeholder="" className='mt-2 outline outline-secondary-foreground outline-1 min-h-20' required />
                            </div>
                        </div>
                        <Button variant='default' type="submit" className="font-sans mt-6 place-self-end">Send Message</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

function itemComponent(icon: React.JSX.Element, title: string, message: string) {
    return (
        <div className="flex gap-6 items-center">
            <div className='size-6'>
                {icon}
            </div>
            <div className=''>
                <p className="text-xs">{title}</p>
                <p className="text-base">{message}</p>
            </div>
        </div>
    )
}

export default ContactSection

