'use client'

import { useEffect, useState } from 'react'

interface MainContentProps {
  children: React.ReactNode
}

export const MainContent = ({ children }: MainContentProps) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Listen for Lenis scroll events
    const handleLenisScroll = (e: CustomEvent) => {
      setScrollY(e.detail.scroll)
    }

    // Listen for custom Lenis scroll event
    window.addEventListener('lenis-scroll', handleLenisScroll as EventListener)

    // Fallback to regular scroll for compatibility
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('lenis-scroll', handleLenisScroll as EventListener)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main
      className="relative z-20 bg-white"
      style={{
        transform: `translateY(${scrollY * -0.2}px)`,
      }}
    >
      {children}
    </main>
  )
}
