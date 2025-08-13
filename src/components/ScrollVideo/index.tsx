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

    // Set initial state - video loads immediately, no opening animation
    gsap.set(video, {
      scale: 1,
      transformOrigin: 'center center'
    })

    // Set initial state for side overlays - start hidden (video full width)
    gsap.set(leftOverlay, {
      scaleX: 0, // Start with no overlay (full width video)
      transformOrigin: 'left center' // Left overlay grows from left edge
    })

    gsap.set(rightOverlay, {
      scaleX: 0, // Start with no overlay (full width video)
      transformOrigin: 'right center' // Right overlay grows from right edge
    })

    // Create scroll-triggered side-closing animation
    ScrollTrigger.create({
      trigger: container,
      start: 'top bottom', // Start when video enters viewport
      end: 'center center', // End when video is centered in viewport
      scrub: 1, // Smooth scrubbing tied to scroll position
      onUpdate: (self) => {
        // Calculate progress (0 to 1) as user scrolls toward center
        const progress = self.progress

        // Calculate the target width based on page-wrapper constraints
        // page-wrapper uses: padding-inline: calc(var(--spacing) * 4) on mobile (32px)
        // page-wrapper uses: padding-inline: calc(var(--spacing) * 6) on desktop (48px)
        const viewportWidth = window.innerWidth
        const isMobile = viewportWidth < 768 // 48rem breakpoint
        const sideSpacing = isMobile ? 32 : 48 // Match page-wrapper spacing

        // Calculate overlay width needed to create page-wrapper alignment
        // At progress 0: no overlays (full width video)
        // At progress 1: overlays create page-wrapper spacing on each side
        const targetOverlayWidth = sideSpacing
        const currentOverlayWidth = targetOverlayWidth * progress
        const scaleX = currentOverlayWidth / (viewportWidth / 2)

        // Apply the scaling to both overlays
        gsap.set([leftOverlay, rightOverlay], {
          scaleX: Math.min(scaleX, 1), // Cap at 1 to prevent over-scaling
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative w-full almost-full-height overflow-hidden ${className}`}>
      {/* Video Element - loads immediately with no animation */}
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

      {/* Left side overlay - grows from left edge inward */}
      <div
        ref={leftOverlayRef}
        className="absolute top-0 left-0 w-1/2 h-full bg-gray-100 z-10"
        style={{
          transformOrigin: 'left center' // Grows from left edge inward
        }}
      />

      {/* Right side overlay - grows from right edge inward */}
      <div
        ref={rightOverlayRef}
        className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 z-10"
        style={{
          transformOrigin: 'right center' // Grows from right edge inward
        }}
      />
    </div>
  )
}
