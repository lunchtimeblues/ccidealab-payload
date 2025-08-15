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
    let marqueeContainer = null

    // Walk up the DOM to find marquee direction
    while (currentElement) {
      // Look for the ScrollMarquee container with data-direction attribute
      if (currentElement.dataset?.direction) {
        marqueeContainer = currentElement
        marqueeDirection = currentElement.dataset.direction
        break
      }
      currentElement = currentElement.parentElement
    }

    // For dual-line marquees, determine which line this star is in
    if (marqueeContainer) {
      const lines = marqueeContainer.children
      if (lines.length === 2) {
        // This is a dual-line marquee
        // Find which line contains this star
        let starLine = star.closest('.relative.overflow-hidden')
        if (starLine === lines[0]) {
          // First line always moves left in dual mode
          marqueeDirection = 'left'
        } else if (starLine === lines[1]) {
          // Second line always moves right in dual mode
          marqueeDirection = 'right'
        }
      }
      // For single-line marquees, use the data-direction attribute as-is
    }

    // Always match the marquee scroll direction for all lines
    // Right scroll = clockwise (positive), Left scroll = counter-clockwise (negative)
    console.log('🌟 SpinningStar direction detected:', marqueeDirection, '→', marqueeDirection === 'right' ? 'clockwise' : 'counter-clockwise')
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
    // Use a large rotation value to ensure continuous spinning
    const targetRotation = rotationDirection > 0 ? '+=360' : '-=360'

    animationRef.current = gsap.to(star, {
      rotation: targetRotation,
      duration: actualSpeed,
      ease: 'none',
      repeat: -1,
      transformOrigin: 'center center',
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
  }, [actualSpeed, rotationDirection])

  // Expose a method to update speed from parent
  const updateSpeed = useCallback(
    (speedMultiplier: number) => {
      // If base speed is 0, don't update (star should remain static)
      if (actualSpeed === 0 || !animationRef.current || !syncWithMarquee) return

      currentTimeScaleRef.current = speedMultiplier

      // Simple, direct timeScale update - no tweening, no killing
      if (animationRef.current && animationRef.current.timeScale) {
        animationRef.current.timeScale(speedMultiplier)
      }
    },
    [syncWithMarquee, actualSpeed],
  )

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
