'use client'

import { useEffect, useRef, useState } from 'react'
import { Footer } from '@/components/Footer'

export const ParallaxFooter = () => {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* Footer with slower scroll speed */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Footer />
      </div>
      
      {/* Spacer to ensure proper scrolling */}
      <div className="h-screen" />
    </div>
  )
}
