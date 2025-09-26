'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

interface SmoothScrollProps {
  children: React.ReactNode
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    const isMobile = window.innerWidth < 768

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2, // Faster on mobile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: isMobile ? 1 : 2,
      infinite: false,
    })

    lenisRef.current = lenis
    ;(window as any).lenis = lenis

    const onScroll = (e: { scroll: number; velocity: number }) => {
      window.dispatchEvent(
        new CustomEvent('lenis-scroll', {
          detail: { scroll: e.scroll, velocity: e.velocity },
        }),
      )
    }

    lenis.on('scroll', onScroll)

    const raf = (time: number) => {
      lenis.raf(time)
      rafId.current = requestAnimationFrame(raf)
    }

    rafId.current = requestAnimationFrame(raf)

    return () => {
      // Cleanup
      ;(window as any).lenis = null
      lenis.off('scroll', onScroll)
      lenis.destroy()

      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  return <>{children}</>
}
