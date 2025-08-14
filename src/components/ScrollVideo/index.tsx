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
}

export const ScrollVideo: React.FC<ScrollVideoProps> = ({
  src,
  className = '',
  poster,
  autoPlay = true,
  muted = true,
  loop = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const leftOverlayRef = useRef<HTMLDivElement>(null)
  const rightOverlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    const leftOverlay = leftOverlayRef.current
    const rightOverlay = rightOverlayRef.current

    if (!container || !video || !leftOverlay || !rightOverlay) return

    // Calculate page-wrapper constraints
    const getPageConstraints = () => {
      const viewportWidth = window.innerWidth
      const isMobile = viewportWidth < 768 // 48rem breakpoint
      const sideSpacing = isMobile ? 32 : 48 // Match page-wrapper spacing
      return { viewportWidth, sideSpacing }
    }

    const { viewportWidth, sideSpacing } = getPageConstraints()

    // Set initial state - video starts at page-wrapper width
    gsap.set(video, {
      scale: 1,
      transformOrigin: 'center center'
    })

    // Set initial state for side overlays - start visible (page-wrapper width)
    const initialOverlayWidth = sideSpacing
    const initialScaleX = initialOverlayWidth / (viewportWidth / 2)

    gsap.set(leftOverlay, {
      scaleX: Math.min(initialScaleX, 1), // Start with overlays visible (page-wrapper width)
      transformOrigin: 'left center'
    })

    gsap.set(rightOverlay, {
      scaleX: Math.min(initialScaleX, 1), // Start with overlays visible (page-wrapper width)
      transformOrigin: 'right center'
    })

    // Create scroll-triggered expansion animation
    ScrollTrigger.create({
      trigger: container,
      start: 'top bottom', // Start when video enters viewport
      end: 'center center', // End when video is centered in viewport
      scrub: 1, // Smooth scrubbing tied to scroll position
      onUpdate: (self) => {
        // Calculate progress (0 to 1) as user scrolls toward center
        const progress = self.progress

        // Recalculate constraints in case of resize
        const { viewportWidth: currentViewportWidth, sideSpacing: currentSideSpacing } = getPageConstraints()

        // Calculate overlay scaling for expansion effect
        // At progress 0: overlays visible (page-wrapper width)
        // At progress 1: overlays hidden (full width video)
        const targetOverlayWidth = currentSideSpacing
        const currentOverlayWidth = targetOverlayWidth * (1 - progress) // Reverse the progress
        const scaleX = currentOverlayWidth / (currentViewportWidth / 2)

        // Apply the scaling to both overlays
        gsap.set([leftOverlay, rightOverlay], {
          scaleX: Math.max(0, Math.min(scaleX, 1)), // Ensure scale stays between 0 and 1
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative w-full almost-full-height overflow-hidden ${className}`}>
      {/* Video Element - starts at page-wrapper width, expands to full width */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        style={{
          // Preserve aspect ratio while covering the container
          objectFit: 'cover',
          objectPosition: 'center center'
        }}
      />

      {/* Left side overlay - starts visible, shrinks to reveal full width */}
      <div
        ref={leftOverlayRef}
        className="absolute top-0 left-0 w-1/2 h-full bg-white z-10"
        style={{
          transformOrigin: 'left center' // Shrinks from left edge inward
        }}
      />

      {/* Right side overlay - starts visible, shrinks to reveal full width */}
      <div
        ref={rightOverlayRef}
        className="absolute top-0 right-0 w-1/2 h-full bg-white z-10"
        style={{
          transformOrigin: 'right center' // Shrinks from right edge inward
        }}
      />
    </div>
  )
}
