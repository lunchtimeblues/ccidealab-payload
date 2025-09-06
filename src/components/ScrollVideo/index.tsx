'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollVideoProps {
  src: string
  className?: string
  poster?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  aspectRatio?: string // e.g., "16/9", "4/3", "21/9"
  maintainAspectRatio?: boolean
}

export const ScrollVideo: React.FC<ScrollVideoProps> = ({
  src,
  className = '',
  poster,
  autoPlay = true,
  muted = true,
  loop = true,
  aspectRatio = '16/9',
  maintainAspectRatio = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current

    if (!container || !video) return

    // Calculate page-wrapper-xxl constraints (matches Container size="xxl")
    const getPageConstraints = () => {
      const viewportWidth = window.innerWidth
      // Container xxl max-width is typically 1440px with some padding
      const maxContainerWidth = 1440
      const containerPadding = viewportWidth < 768 ? 32 : 48 // Mobile vs desktop padding
      const effectiveContainerWidth = Math.min(
        maxContainerWidth,
        viewportWidth - containerPadding * 2,
      )

      return { viewportWidth, effectiveContainerWidth }
    }

    const { effectiveContainerWidth } = getPageConstraints()

    // Set initial state - video starts at page-wrapper-xxl width
    gsap.set(video, {
      width: `${effectiveContainerWidth}px`,
      transformOrigin: 'center center',
    })

    // Create scroll-triggered expansion animation
    ScrollTrigger.create({
      trigger: container,
      start: 'top 80%', // Start when video enters viewport
      end: 'center 50%', // End when video is centered in viewport
      scrub: 1.5, // Smooth scrubbing tied to scroll position
      onUpdate: (self) => {
        // Calculate progress (0 to 1) as user scrolls
        const progress = self.progress

        // Recalculate constraints in case of resize
        const {
          viewportWidth: currentViewportWidth,
          effectiveContainerWidth: currentContainerWidth,
        } = getPageConstraints()

        // Calculate video width for expansion effect
        // At progress 0: video at page-wrapper-xxl width
        // At progress 1: video at full viewport width
        const currentWidth =
          currentContainerWidth + (currentViewportWidth - currentContainerWidth) * progress

        // Apply the width animation to video
        gsap.set(video, {
          width: `${currentWidth}px`,
          ease: 'power2.out',
        })
      },
    })

    // Handle window resize to recalculate constraints
    const handleResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        // Use aspect ratio if maintainAspectRatio is true, otherwise use almost-full-height
        ...(maintainAspectRatio ? { aspectRatio: aspectRatio } : { height: '90vh' }),
      }}
    >
      {/* Video Element - animates from page-wrapper-xxl width to full width */}
      <video
        ref={videoRef}
        className="h-full mx-auto"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        style={{
          // Choose object-fit based on maintainAspectRatio setting
          objectFit: maintainAspectRatio ? 'cover' : 'cover',
          objectPosition: 'center center',
          height: '100%',
          // Width will be animated by GSAP
        }}
      />
    </div>
  )
}
