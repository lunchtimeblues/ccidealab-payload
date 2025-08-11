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
  autoPlay = false,
  muted = true,
  loop = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    const overlay = overlayRef.current

    if (!container || !video || !overlay) return

    // Set initial state - overlay covering, video scaled down
    gsap.set(overlay, {
      opacity: 1
    })
    gsap.set(video, {
      scale: 0.8,
      transformOrigin: 'center center'
    })

    // Create one-time reveal animation
    ScrollTrigger.create({
      trigger: container,
      start: 'top 80%', // Start when top of video is 80% down the viewport
      once: true, // Fire only once
      onEnter: () => {
        // Create timeline for smooth reveal
        const tl = gsap.timeline()

        // Animate overlay fade out and video scale up simultaneously
        tl.to(overlay, {
          opacity: 0,
          duration: 1.2,
          ease: 'power2.inOut'
        })
        .to(video, {
          scale: 1,
          duration: 1.2,
          ease: 'power2.inOut'
        }, 0) // Start at the same time (0 seconds offset)
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative w-full almost-full-height overflow-hidden ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
      />

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 w-full h-full bg-gray-100 z-10"
      />
    </div>
  )
}
