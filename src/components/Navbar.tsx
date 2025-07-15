import { BriefcaseBusiness, Home, Mail } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import ThemeToggleButton from './ui/ThemeToggleButton';

export default function Navbar() {
  return (
    <nav className='bg-card shadow z-10 border rounded px-6 py-3 flex flex-col md:flex-row items-center justify-between mb-7 sticky top-5'>
      <div className='flex gap-3'>
        <div className='size-10 border rounded-full bg-accent'></div>
        <Link
          href={"https://github.com/harshshah6"}
          className='border rounded p-2 transition-colors duration-300 font-medium hover:bg-accent/50'
          target='_blank'
        >
          @HarshShah6
        </Link>
      </div>
      <div className='hidden md:flex flex-col md:flex-row items-center gap-3'>
        <NavItem
          Icon={<Home />}
          text="Home"
          href="#"
        />
        <NavItem
          Icon={<BriefcaseBusiness />}
          text="Projects"
          href="#"
        />
        <NavItem
          Icon={<Mail />}
          text="Contact"
          href="#"
        />
        <ThemeToggleButton />
      </div>
    </nav>
  )
}
type NavItemProps = React.ComponentProps<typeof Link> & {
  text: string;
  Icon: React.ReactElement<Element>;
};

function NavItem({ text, Icon, ...props }: NavItemProps) {
  return (
    <Link {...props} className={`rounded p-2 transition-colors duration-300 cursor-pointer hover:bg-primary/10 flex items-center gap-2 ${props.className ?? ''}`}>
      {React.cloneElement(Icon, { ...Icon.props, className: `${Icon.props.className ?? ''} size-5` })}
      {text}
    </Link>
  );
}
