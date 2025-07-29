'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="text-sm text-primary hover:underline bg-transparent border-none p-0 m-0 inline-flex items-center gap-1 cursor-pointer"
    >
      <Sun className="h-[1rem] w-[1rem] transition-all dark:-rotate-90 scale-150 dark:scale-0" />
      <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-150" />
    </button>
  )
}
