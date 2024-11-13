'use client'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { Sun, Moon } from 'lucide-react'
import React from 'react'
import { Button } from './button'
import { useTheme } from 'next-themes'

export function ThemeToggler() {

    const { setTheme } = useTheme()

    const menuItemClassName = 'w-24 text-center px-2 border py-1 hover:cursor-pointer transistion duration-300 overflow-hidden'

    return (
        <div className='pr-4 rounded-md overflow-hidden'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className='bg-primary-foreground'>
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='mt-1 bg-background overflow-hidden rounded-md border'>
                    <DropdownMenuItem className={menuItemClassName} onClick={() => setTheme("light")}>
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem className={menuItemClassName} onClick={() => setTheme("dark")}>
                        Dark
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
