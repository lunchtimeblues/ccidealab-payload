'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from '@studio-freight/lenis' // You're still using the old package

interface SmoothScrollProps {
  children: React.ReactNode
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
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

    // Listen for Lenis re-initialization events
    const handleReinitLenis = () => {
      console.log('🔄 Reinit Lenis event received, creating new instance...')

      // Create new Lenis instance
      const newLenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
      })

      // Update refs and global reference
      lenisRef.current = newLenis
      ;(window as any).lenis = newLenis

      // Set up scroll event
      newLenis.on('scroll', (e: { scroll: number; velocity: number }) => {
        window.dispatchEvent(
          new CustomEvent('lenis-scroll', {
            detail: { scroll: e.scroll, velocity: e.velocity },
          }),
        )
      })

      // Start the animation loop
      function raf(time: number) {
        newLenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      // Force scroll to top
      setTimeout(() => {
        newLenis.scrollTo(0, { immediate: true })
      }, 50)
    }

    window.addEventListener('reinit-lenis', handleReinitLenis)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('reinit-lenis', handleReinitLenis)
      // Clean up global reference
      ;(window as any).lenis = null
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
    }
  }, [])

  // Scroll to top on route change - simplified since we handle this in transitions
  useEffect(() => {
    if (lenisRef.current) {
      console.log('📍 Pathname changed, ensuring scroll is at top')
      // Simple scroll to top since Lenis should be fresh after reinit
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return <>{children}</>
}
