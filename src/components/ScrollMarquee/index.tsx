'use client'

import { useEffect, useRef, createContext, useContext, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Context for sharing base spin speed with child components
const MarqueeSpeedContext = createContext<{
  baseSpinSpeed: number
}>({
  baseSpinSpeed: 2,
})

export const useMarqueeSpeed = () => useContext(MarqueeSpeedContext)

interface ScrollMarqueeProps {
  children: React.ReactNode
  baseSpeed?: number // Base animation speed (higher = faster, 50 = medium, 100 = fast)
  maxSpeedMultiplier?: number
  className?: string
  lineClassName?: string
  sensitivity?: number
  smoothing?: number
  starSpinSpeed?: number // Speed for spinning stars in seconds per rotation
  lines?: 'single' | 'dual' // Choose between single line or dual opposing lines
  direction?: 'left' | 'right' // Direction for single line mode
}

export const ScrollMarquee: React.FC<ScrollMarqueeProps> = ({
  children,
  baseSpeed = 50,
  maxSpeedMultiplier = 3,
  className = '',
  lineClassName = '',
  sensitivity = 50,
  smoothing = 0.92,
  starSpinSpeed = 2,
  lines = 'dual',
  direction = 'left',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const scrollVelocityRef = useRef(0)
  const [isMounted, setIsMounted] = useState(false)
  const animationsRef = useRef<{ line1: gsap.core.Tween | null; line2: gsap.core.Tween | null }>({
    line1: null,
    line2: null,
  })

  // Set mounted state on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return // Don't run on server

    const container = containerRef.current
    const line1 = line1Ref.current
    const line2 = line2Ref.current
    // Copy the ref value to a local variable for use in cleanup
    const animations = animationsRef.current

    if (!container || !line1) return
    if (lines === 'dual' && !line2) return

    // Kill any existing animations first
    if (animations.line1) {
      animations.line1.kill()
      animations.line1 = null
    }
    if (animations.line2) {
      animations.line2.kill()
      animations.line2 = null
    }

    // Create continuous marquee effect using the classic approach
    const createAnimation = (element: HTMLElement, direction: 'left' | 'right') => {
      // Get the element width to normalize speed
      const elementWidth = element.offsetWidth

      // Calculate duration based on content width for consistent visual speed
      // We want consistent pixels per second across all marquees
      // Formula: duration = (elementWidth / 2) / (baseSpeed * 10)
      // This makes baseSpeed represent "pixels per 10ms" roughly
      const pixelsToMove = elementWidth / 2 // We move 50% of the width
      const pixelsPerSecond = baseSpeed * 100 // baseSpeed 5 = 500px/s, baseSpeed 1 = 100px/s
      const duration = pixelsToMove / pixelsPerSecond

      if (direction === 'left') {
        // Move left: start at 0%, move to -50% (half width since content is duplicated)
        gsap.set(element, { xPercent: 0 })
        return gsap.to(element, {
          xPercent: -50,
          duration: duration,
          ease: 'none',
          repeat: -1,
          repeatDelay: 0,
        })
      } else {
        // Move right: start at -50%, move to 0% (creates opposite direction)
        gsap.set(element, { xPercent: -50 })
        return gsap.to(element, {
          xPercent: 0,
          duration: duration,
          ease: 'none',
          repeat: -1,
          repeatDelay: 0,
        })
      }
    }

    // Initialize animations with a small delay to ensure DOM is ready
    const initAnimations = () => {
      if (lines === 'single') {
        // Single line mode - only animate line1
        if (line1) {
          animationsRef.current.line1 = createAnimation(line1, direction)
        }
      } else {
        // Dual line mode - animate both lines in opposite directions
        if (line1 && line2) {
          animationsRef.current.line1 = createAnimation(line1, 'left')
          animationsRef.current.line2 = createAnimation(line2, 'right')
        }
      }
    }

    // Use requestAnimationFrame to ensure DOM is fully rendered
    requestAnimationFrame(initAnimations)

    // Enhanced scroll velocity tracking
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0
    let lastTime = Date.now()
    const velocityHistory: number[] = []
    const maxHistoryLength = 5

    const updateScrollVelocity = () => {
      if (typeof window === 'undefined') return

      const currentScrollY = window.scrollY
      const currentTime = Date.now()
      const deltaY = Math.abs(currentScrollY - lastScrollY)
      const deltaTime = Math.max(currentTime - lastTime, 1)

      // Calculate velocity (pixels per millisecond)
      const instantVelocity = deltaY / deltaTime

      // Add to history and maintain max length
      velocityHistory.push(instantVelocity)
      if (velocityHistory.length > maxHistoryLength) {
        velocityHistory.shift()
      }

      // Calculate smoothed velocity (average of recent values)
      const smoothedVelocity =
        velocityHistory.reduce((sum, v) => sum + v, 0) / velocityHistory.length
      scrollVelocityRef.current = smoothedVelocity

      lastScrollY = currentScrollY
      lastTime = currentTime
    }

    // Update animation speeds based on scroll velocity
    const updateAnimationSpeeds = () => {
      const velocity = scrollVelocityRef.current
      // More responsive speed calculation using the sensitivity prop
      const speedMultiplier = Math.min(1 + velocity * sensitivity, maxSpeedMultiplier)

      // Update marquee animations
      if (animationsRef.current.line1) {
        gsap.to(animationsRef.current.line1, {
          timeScale: speedMultiplier,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
      if (lines === 'dual' && animationsRef.current.line2) {
        gsap.to(animationsRef.current.line2, {
          timeScale: speedMultiplier,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      // Update spinning stars
      if (container) {
        const stars = container.querySelectorAll('svg')
        stars.forEach((star) => {
          // @ts-expect-error - Custom property added by SpinningStar component
          if (star._updateSpeed) {
            // @ts-expect-error - Custom property added by SpinningStar component
            star._updateSpeed(speedMultiplier)
          }
        })
      }
    }

    // Set up scroll trigger for the container
    ScrollTrigger.create({
      trigger: container,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: () => {
        updateScrollVelocity()
        updateAnimationSpeeds()
      },
    })

    // Decay scroll velocity when not scrolling
    const decayInterval = setInterval(() => {
      scrollVelocityRef.current *= smoothing
      updateAnimationSpeeds()
    }, 50)

    return () => {
      if (animations.line1) {
        animations.line1.kill()
      }
      if (animations.line2) {
        animations.line2.kill()
      }
      // Only kill ScrollTriggers that belong to this container
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
      clearInterval(decayInterval)
    }
  }, [baseSpeed, maxSpeedMultiplier, sensitivity, smoothing, starSpinSpeed, lines, direction, isMounted])

  // Create the marquee content element
  const MarqueeContent = () => (
    <>
      {children}
      {/* Duplicate for seamless looping */}
      {children}
    </>
  )

  return (
    <MarqueeSpeedContext.Provider value={{ baseSpinSpeed: starSpinSpeed }}>
      <div ref={containerRef} className={`overflow-hidden ${className}`} data-direction={direction}>
        {/* Line 1 - Always present */}
        <div className="relative overflow-hidden">
          <div
            ref={line1Ref}
            className={`inline-flex whitespace-nowrap will-change-transform ${lineClassName}`}
          >
            <MarqueeContent />
          </div>
        </div>

        {/* Line 2 - Only in dual mode */}
        {lines === 'dual' && (
          <div className="relative overflow-hidden">
            <div
              ref={line2Ref}
              className={`inline-flex whitespace-nowrap will-change-transform ${lineClassName}`}
            >
              <MarqueeContent />
            </div>
          </div>
        )}
      </div>
    </MarqueeSpeedContext.Provider>
  )
}
