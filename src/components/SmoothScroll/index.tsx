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
      lenis.scrollTo(0, { immediate: true })
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
      // Use Lenis API to scroll to top immediately
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return <>{children}</>
}
