"use client"

import { useTheme } from "next-themes";

export const ThemeUtil = () => {
    const {theme} = useTheme()
    const isDarkMode = theme === 'dark'
  return isDarkMode
}