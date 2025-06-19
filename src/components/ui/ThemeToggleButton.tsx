'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

function ThemeToggleButton() {
    const { theme, setTheme } = useTheme();
    return (
        <button
            onClick={() => { setTheme(theme === 'light' ? "dark" : "light") }}
            className='rounded p-2 transition-colors duration-300 cursor-pointer hover:bg-muted/50 flex items-center gap-2 '>
            {
                theme === 'light' ? <Moon className='size-5' /> : <Sun className='size-5' />
            }
        </button>
    )
}

export default ThemeToggleButton
