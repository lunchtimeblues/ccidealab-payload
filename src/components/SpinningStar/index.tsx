'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { useMarqueeSpeed } from '@/components/ScrollMarquee'

interface SpinningStarProps {
  className?: string
  size?: number
  speed?: number // rotation speed in seconds per full rotation (overrides marquee speed)
  syncWithMarquee?: boolean // Whether to sync with parent marquee speed
}

export const SpinningStar: React.FC<SpinningStarProps> = ({
  className = '',
  size = 24,
  speed, // No default - will use marquee speed if not provided
  syncWithMarquee = true,
}) => {
  const starRef = useRef<SVGSVGElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const currentTimeScaleRef = useRef(1)

  // Always call the hook - it will return default values if not in context
  const marqueeSpeed = useMarqueeSpeed()

  // Determine the actual speed to use
  const actualSpeed = speed !== undefined ? speed : (marqueeSpeed?.baseSpinSpeed ?? 2)

  // Determine rotation direction based on marquee direction
  const getRotationDirection = useCallback(() => {
    const star = starRef.current
    if (!star) return -360

    let currentElement = star.parentElement
    let marqueeDirection = 'left' // Default direction

    // Walk up the DOM to find marquee direction
    while (currentElement) {
      if (currentElement.parentElement?.classList.contains('relative') &&
          currentElement.parentElement?.classList.contains('overflow-hidden')) {
        // Found a marquee line container
        const marqueeContainer = currentElement.parentElement.parentElement
        if (marqueeContainer) {
          // Try to detect marquee direction from data attribute or context
          let directionElement: HTMLElement | null = marqueeContainer
          while (directionElement) {
            if (directionElement.dataset?.direction) {
              marqueeDirection = directionElement.dataset.direction
              break
            }
            directionElement = directionElement.parentElement
          }
        }
        break
      }
      currentElement = currentElement.parentElement
    }

    // Always match the marquee scroll direction for all lines
    return marqueeDirection === 'right' ? 360 : -360
  }, [])

  const rotationDirection = getRotationDirection()

  // Create the base spinning animation
  useEffect(() => {
    const star = starRef.current
    if (!star) return

    // If speed is 0, don't create animation (static star)
    if (actualSpeed === 0) {
      // Kill any existing animation
      if (animationRef.current) {
        animationRef.current.kill()
        animationRef.current = null
      }
      return
    }

    // Direction is now determined by getRotationDirection function

    // Create continuous rotation animation
    animationRef.current = gsap.to(star, {
      rotation: rotationDirection,
      duration: actualSpeed,
      ease: 'none',
      repeat: -1,
      transformOrigin: 'center center',
      paused: false, // Ensure it starts playing
    })

    // Set initial timeScale to 1
    if (animationRef.current) {
      animationRef.current.timeScale(1)
      currentTimeScaleRef.current = 1
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, [actualSpeed])

  // Expose a method to update speed from parent
  const updateSpeed = useCallback((speedMultiplier: number) => {
    // If base speed is 0, don't update (star should remain static)
    if (actualSpeed === 0 || !animationRef.current || !syncWithMarquee) return

    // Avoid unnecessary updates with a small threshold
    if (Math.abs(speedMultiplier - currentTimeScaleRef.current) < 0.05) return

    currentTimeScaleRef.current = speedMultiplier

    // Kill the current animation and create a new one with adjusted duration
    if (animationRef.current) {
      const currentRotation = gsap.getProperty(starRef.current, 'rotation') as number
      animationRef.current.kill()

      // Create new animation with adjusted speed
      const newDuration = actualSpeed / speedMultiplier
      animationRef.current = gsap.fromTo(starRef.current,
        { rotation: currentRotation },
        {
          rotation: currentRotation + (rotationDirection > 0 ? 360 : -360),
          duration: newDuration,
          ease: 'none',
          repeat: -1,
          transformOrigin: 'center center',
        }
      )
    }
  }, [syncWithMarquee, actualSpeed, rotationDirection])

  // Store the update function on the element for parent access
  useEffect(() => {
    const star = starRef.current
    if (star && syncWithMarquee) {
      // @ts-expect-error - Adding custom property for parent access
      star._updateSpeed = updateSpeed
    }
  }, [updateSpeed, syncWithMarquee])

  return (
    <svg
      ref={starRef}
      width={size}
      height={size}
      viewBox="0 0 112 112"
      className={`inline-block ${className}`}
      style={{ willChange: 'transform' }}
    >
      <path
        className="fill-current"
        d="m111.547 59.968-50.391-1.406 36.64 34.531-5.155 5.157L58.11 61.61 59.516 112h-7.188l1.407-50.39-34.532 36.64-5.156-5.157 36.64-34.53-50.39 1.405v-7.187l50.39 1.641-36.64-34.61 5.156-5.078 34.532 36.641L52.328.985h7.188l-1.406 50.39 34.53-36.64 5.157 5.077-36.641 34.61 50.39-1.407z"
        fillRule="nonzero"
      />
    </svg>
  )
}
