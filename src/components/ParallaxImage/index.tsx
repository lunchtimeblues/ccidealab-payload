'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ParallaxImageProps {
  src: string
  alt: string
  size?: 'full' | '80vh' // full = 100vh, 80vh = 80% viewport height
  className?: string
  imageClassName?: string
  parallaxSpeed?: number // How fast the parallax effect moves (0.5 = half speed, 2 = double speed)
  overlay?: boolean // Add dark overlay for text readability
  overlayOpacity?: number // Overlay opacity (0-1)
  children?: React.ReactNode // Content to overlay on the image
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  size = 'full',
  className = '',
  imageClassName = '',
  parallaxSpeed = 0.5,
  overlay = false,
  overlayOpacity = 0.4,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current

    if (!container || !image) return

    // Create parallax effect
    const parallaxTween = gsap.fromTo(
      image,
      {
        yPercent: -20, // Start position (image moves up from this point)
      },
      {
        yPercent: 20, // End position (image moves down to this point)
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom', // Start when top of container hits bottom of viewport
          end: 'bottom top', // End when bottom of container hits top of viewport
          scrub: true, // Smooth scrubbing effect
          invalidateOnRefresh: true, // Recalculate on window resize
        },
      }
    )

    // Apply speed multiplier
    if (parallaxSpeed !== 1) {
      parallaxTween.timeScale(parallaxSpeed)
    }

    return () => {
      parallaxTween.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [parallaxSpeed])

  const heightClass = size === 'full' ? 'h-screen' : 'h-[80vh]'

  return (
    <div
      ref={containerRef}
      className={`relative ${heightClass} overflow-hidden ${className}`}
    >
      {/* Parallax Image Container */}
      <div
        ref={imageRef}
        className={`absolute inset-0 w-full h-[120%] ${imageClassName}`}
        style={{
          // Start with the image slightly larger and positioned to allow for parallax movement
          top: '-10%',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={size === 'full'} // Prioritize full-height images
        />
      </div>

      {/* Optional Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content Overlay */}
      {children && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )
}
