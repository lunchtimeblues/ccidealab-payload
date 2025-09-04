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

    // Listen for pathname changes and reset scroll
    const handlePathnameChange = () => {
      console.log('🔄 Pathname changed, resetting Lenis scroll')
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true })
      }
    }

    // Reset scroll on pathname change
    handlePathnameChange()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      // Clean up global reference
      ;(window as any).lenis = null
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
    }
  }, [])

  // Aggressive scroll to top on route change
  useEffect(() => {
    console.log('📍 Pathname changed, aggressively resetting scroll')

    const resetScroll = () => {
      // Try Lenis first
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true })
        console.log('🎯 SmoothScroll: Lenis scroll reset')
      }

      // Also force native scroll reset
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      console.log('🔄 SmoothScroll: Native scroll reset')
    }

    // Multiple attempts to ensure it works
    resetScroll()
    setTimeout(resetScroll, 10)
    setTimeout(resetScroll, 50)
    setTimeout(resetScroll, 100)
    setTimeout(resetScroll, 200)
  }, [pathname])

  return <>{children}</>
}
