'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { useMarqueeSpeed } from '@/components/ScrollMarquee'
import Image from 'next/image'

interface SpinningStarProps {
  className?: string
  size?: number
  speed?: number // rotation speed in seconds per full rotation (overrides marquee speed)
  syncWithMarquee?: boolean // Whether to sync with parent marquee speed
}

export const SpinningStar: React.FC<SpinningStarProps> = ({
  className = '',
  size = 24,
  speed,
  syncWithMarquee = true,
}) => {
  const starRef = useRef<HTMLDivElement | SVGSVGElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const currentTimeScaleRef = useRef(1)

  const marqueeSpeed = useMarqueeSpeed()
  const actualSpeed = speed !== undefined ? speed : (marqueeSpeed?.baseSpinSpeed ?? 2)

  const getRotationDirection = useCallback(() => {
    const star = starRef.current as HTMLElement | null
    if (!star) return -360

    let currentElement = star.parentElement
    let marqueeDirection = 'left'
    let marqueeContainer = null

    while (currentElement) {
      if (currentElement.dataset?.direction) {
        marqueeContainer = currentElement
        marqueeDirection = currentElement.dataset.direction
        break
      }
      currentElement = currentElement.parentElement
    }

    if (marqueeContainer) {
      const lines = marqueeContainer.children
      if (lines.length === 2) {
        const starLine = star.closest('.relative.overflow-hidden')
        if (starLine === lines[0]) marqueeDirection = 'left'
        else if (starLine === lines[1]) marqueeDirection = 'right'
      }
    }

    return marqueeDirection === 'right' ? 360 : -360
  }, [])

  useEffect(() => {
    const star = starRef.current
    if (!star) return

    if (actualSpeed === 0) {
      if (animationRef.current) {
        animationRef.current.kill()
        animationRef.current = null
      }
      return
    }

    const rotationDirection = getRotationDirection()
    const targetRotation = rotationDirection > 0 ? '+=360' : '-=360'

    animationRef.current = gsap.to(star, {
      rotation: targetRotation,
      duration: actualSpeed,
      ease: 'none',
      repeat: -1,
      transformOrigin: 'center center',
    })

    if (animationRef.current) {
      animationRef.current.timeScale(1)
      currentTimeScaleRef.current = 1
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, [actualSpeed, getRotationDirection])

  const updateSpeed = useCallback(
    (speedMultiplier: number) => {
      if (actualSpeed === 0 || !animationRef.current || !syncWithMarquee) return
      currentTimeScaleRef.current = speedMultiplier
      animationRef.current?.timeScale(speedMultiplier)
    },
    [syncWithMarquee, actualSpeed],
  )

  useEffect(() => {
    const star = starRef.current as any
    if (star && syncWithMarquee) {
      star._updateSpeed = updateSpeed
    }
  }, [updateSpeed, syncWithMarquee])

  return (
    <>
      {/* --- LOGO VARIANT --- */}
      {/* <div
        ref={starRef as React.RefObject<HTMLDivElement>}
        className={`inline-block ${className}`}
        style={{ willChange: 'transform', width: size, height: size }}
      >
        <Image
          src="/images/cc-logo-black-minimal.svg"
          alt="CC Logo"
          width={size}
          height={size}
          className="w-full h-full"
        />
      </div> */}

      {/* --- STAR VARIANT --- */}

      <svg
        ref={starRef as React.RefObject<SVGSVGElement>}
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
    </>
  )
}
