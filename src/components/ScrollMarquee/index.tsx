'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollMarqueeProps {
  children: React.ReactNode
  baseSpeed?: number
  maxSpeedMultiplier?: number
  className?: string
  lineClassName?: string
  sensitivity?: number
  smoothing?: number
}

export const ScrollMarquee: React.FC<ScrollMarqueeProps> = ({
  children,
  baseSpeed = 50,
  maxSpeedMultiplier = 3,
  className = '',
  lineClassName = '',
  sensitivity = 50,
  smoothing = 0.92,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const scrollVelocityRef = useRef(0)
  const animationsRef = useRef<{ line1: gsap.core.Tween | null; line2: gsap.core.Tween | null }>({
    line1: null,
    line2: null,
  })

  useEffect(() => {
    const container = containerRef.current
    const line1 = line1Ref.current
    const line2 = line2Ref.current
    // Copy the ref value to a local variable for use in cleanup
    const animations = animationsRef.current

    if (!container || !line1 || !line2) return

    // Create continuous marquee effect using the classic approach
    const createAnimation = (element: HTMLElement, direction: 'left' | 'right') => {
      if (direction === 'left') {
        // Move left: start at 0%, move to -50% (half width since content is duplicated)
        gsap.set(element, { xPercent: 0 })
        return gsap.to(element, {
          xPercent: -50,
          duration: baseSpeed,
          ease: 'none',
          repeat: -1,
          repeatDelay: 0,
        })
      } else {
        // Move right: start at -50%, move to 0% (creates opposite direction)
        gsap.set(element, { xPercent: -50 })
        return gsap.to(element, {
          xPercent: 0,
          duration: baseSpeed,
          ease: 'none',
          repeat: -1,
          repeatDelay: 0,
        })
      }
    }

    // Initialize animations with a small delay to ensure DOM is ready
    const initAnimations = () => {
      if (line1 && line2) {
        animationsRef.current.line1 = createAnimation(line1, 'left')
        animationsRef.current.line2 = createAnimation(line2, 'right')
      }
    }

    // Use requestAnimationFrame to ensure DOM is fully rendered
    requestAnimationFrame(initAnimations)

    // Enhanced scroll velocity tracking
    let lastScrollY = window.scrollY
    let lastTime = Date.now()
    const velocityHistory: number[] = []
    const maxHistoryLength = 5

    const updateScrollVelocity = () => {
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

      if (animationsRef.current.line1) {
        gsap.to(animationsRef.current.line1, {
          timeScale: speedMultiplier,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
      if (animationsRef.current.line2) {
        gsap.to(animationsRef.current.line2, {
          timeScale: speedMultiplier,
          duration: 0.3,
          ease: 'power2.out',
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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      clearInterval(decayInterval)
    }
  }, [baseSpeed, maxSpeedMultiplier, sensitivity, smoothing])

  // Create the marquee content element
  const MarqueeContent = () => (
    <>
      {children}
      {/* Duplicate for seamless looping */}
      {children}
    </>
  )

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {/* Line 1 - Moving Left */}
      <div className="relative overflow-hidden">
        <div
          ref={line1Ref}
          className={`inline-flex whitespace-nowrap will-change-transform ${lineClassName}`}
        >
          <MarqueeContent />
        </div>
      </div>

      {/* Line 2 - Moving Right */}
      <div className="relative overflow-hidden">
        <div
          ref={line2Ref}
          className={`inline-flex whitespace-nowrap will-change-transform ${lineClassName}`}
        >
          <MarqueeContent />
        </div>
      </div>
    </div>
  )
}
