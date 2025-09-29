'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin once globally
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
  aspectRatio?: string // e.g., "16/9"
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

    // Helper to calculate effective container width
    const getEffectiveWidth = () => {
      const viewportWidth = window.innerWidth
      const maxContainerWidth = 1440
      const containerPadding = viewportWidth < 768 ? 32 : 48
      return Math.min(maxContainerWidth, viewportWidth - containerPadding * 2)
    }

    // Set initial width
    const initialWidth = getEffectiveWidth()
    gsap.set(video, {
      width: `${initialWidth}px`,
      transformOrigin: 'center center',
    })

    // Trigger animation when video top enters viewport
    ScrollTrigger.create({
      trigger: container,
      start: 'top center',
      onEnter: () => {
        const viewportWidth = window.innerWidth
        gsap.to(video, {
          width: viewportWidth,
          duration: 0.8,
          ease: 'power4.out',
        })
      },
      once: true,
    })

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh()
      const newWidth = getEffectiveWidth()
      gsap.set(video, { width: `${newWidth}px` })
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
      style={maintainAspectRatio ? { aspectRatio } : { height: '90vh' }}
    >
      <video
        ref={videoRef}
        className="h-full mx-auto"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        preload="metadata"
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
          height: '100%',
        }}
      />
    </div>
  )
}
