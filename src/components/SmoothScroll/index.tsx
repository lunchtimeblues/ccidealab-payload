'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

interface SmoothScrollProps {
  children: React.ReactNode
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Get scroll value and dispatch custom event for other components
    lenis.on('scroll', (e: any) => {
      // Dispatch custom event for parallax components
      window.dispatchEvent(new CustomEvent('lenis-scroll', {
        detail: { scroll: e.scroll, velocity: e.velocity }
      }))
    })

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
