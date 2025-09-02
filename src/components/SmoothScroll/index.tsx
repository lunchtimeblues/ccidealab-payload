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

    lenis.on('scroll', (e: { scroll: number; velocity: number }) => {
      window.dispatchEvent(
        new CustomEvent('lenis-scroll', {
          detail: { scroll: e.scroll, velocity: e.velocity },
        }),
      )
    })

    // Listen for custom scroll-to-top events from page transitions
    const handleScrollToTop = () => {
      lenis.scrollTo(0, { immediate: true })
    }

    window.addEventListener('lenis-scroll-to-top', handleScrollToTop)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('lenis-scroll-to-top', handleScrollToTop)
      lenis.destroy()
    }
  }, [])

  // Scroll to top on route change using Lenis with multiple attempts
  useEffect(() => {
    if (lenisRef.current) {
      // Multiple immediate scroll attempts for reliability
      const scrollToTop = () => {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true })
        }
        // Also use native scroll as backup
        window.scrollTo({ top: 0, behavior: 'instant' })
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }

      // Immediate scroll
      scrollToTop()

      // Additional attempts with delays
      setTimeout(scrollToTop, 0)
      setTimeout(scrollToTop, 50)
      setTimeout(scrollToTop, 100)
      setTimeout(scrollToTop, 200)
    }
  }, [pathname])

  return <>{children}</>
}
