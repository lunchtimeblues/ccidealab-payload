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

    // Listen for force scroll to top events
    const handleForceScrollToTop = () => {
      console.log('Force scroll to top event received')

      // Try multiple Lenis methods
      lenis.scrollTo(0, { immediate: true })
      lenis.scrollTo(0, { duration: 0 })
      lenis.scrollTo(0, { immediate: true, force: true })

      // Also try stopping and restarting
      lenis.stop()
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        lenis.start()
        lenis.scrollTo(0, { immediate: true })
      }, 50)
    }

    window.addEventListener('force-scroll-to-top', handleForceScrollToTop)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('force-scroll-to-top', handleForceScrollToTop)
      // Clean up global reference
      ;(window as any).lenis = null
      lenis.destroy()
    }
  }, [])

  // Scroll to top on route change using Lenis API
  useEffect(() => {
    if (lenisRef.current) {
      console.log('Pathname changed, forcing scroll to top via useEffect')

      // Try multiple approaches
      const lenis = lenisRef.current

      // Method 1: Stop Lenis, scroll natively, restart
      lenis.stop()
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0

      // Method 2: Use Lenis API
      lenis.scrollTo(0, { immediate: true })
      lenis.scrollTo(0, { duration: 0 })

      // Method 3: Restart Lenis
      setTimeout(() => {
        lenis.start()
        lenis.scrollTo(0, { immediate: true })
      }, 100)
    }
  }, [pathname])

  return <>{children}</>
}
