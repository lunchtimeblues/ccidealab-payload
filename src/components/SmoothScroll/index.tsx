'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis' // You're still using the old package

interface SmoothScrollProps {
  children: React.ReactNode
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    // Detect mobile for optimized settings
    const isMobile = window.innerWidth < 768

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2, // Faster on mobile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: isMobile ? 1 : 2, // Less aggressive on mobile
      infinite: false,
    })

    lenisRef.current = lenis

    // Expose Lenis instance globally for page transitions
    ;(window as any).lenis = lenis

    lenis.on('scroll', (e: { scroll: number; velocity: number }) => {
      window.dispatchEvent(
        new CustomEvent('lenis-scroll', {
          detail: { scroll: e.scroll, velocity: e.velocity },
        }),
      )
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle window resize to update mobile settings
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768
      if (newIsMobile !== isMobile && lenisRef.current) {
        // Update Lenis settings on viewport change
        lenisRef.current.options.duration = newIsMobile ? 0.8 : 1.2
        lenisRef.current.options.touchMultiplier = newIsMobile ? 1 : 2
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      // Clean up global reference
      ;(window as any).lenis = null
      window.removeEventListener('resize', handleResize)
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
    }
  }, [])

  return <>{children}</>
}
