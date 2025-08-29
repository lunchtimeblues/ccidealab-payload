'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface MouseFollowerProps {
  children: React.ReactNode
  className?: string
  text?: string
}

export const MouseFollower: React.FC<MouseFollowerProps> = ({
  children,
  className = '',
  text = 'VIEW PROJECT',
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const positionRef = useRef({ x: 0, y: 0 })
  const followerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate responsive offset to match our new clamp() typography system
  const getResponsiveOffset = useCallback(() => {
    if (typeof window === 'undefined') return 96

    const vw = window.innerWidth

    // Simple scaling that works with our clamp() system
    // MouseFollower size is 192px (w-48 h-48), so offset should be half = 96px
    // Scale slightly with viewport for better proportions
    if (vw < 768) {
      return 80  // Slightly smaller offset for mobile/tablet
    } else if (vw < 1440) {
      return 88  // Medium offset for small desktop
    } else {
      return 96  // Perfect center offset for large desktop
    }
  }, [])

  const [offset, setOffset] = useState(96)

  const config = {
    bg: 'bg-white/90 backdrop-blur-md rounded-full',
    text: 'text-black',
    border: 'border border-gray-200/30',
    size: 'w-48 h-48',
    offset,
  }

  const updateFollowerPosition = useCallback(() => {
    const follower = followerRef.current
    if (!follower) return

    const { x, y } = positionRef.current
    follower.style.transform = `translate(${x - offset}px, ${y - offset}px)`
  }, [offset])

  // Update offset on mount and resize to match fluid typography scaling
  useEffect(() => {
    const updateOffset = () => {
      setOffset(getResponsiveOffset())
    }

    // Set initial offset
    updateOffset()

    // Update offset on resize
    window.addEventListener('resize', updateOffset)
    return () => window.removeEventListener('resize', updateOffset)
  }, [getResponsiveOffset])

  useEffect(() => {
    const container = containerRef.current
    const follower = followerRef.current
    if (!container || !follower) return

    const handleMouseEnter = (e: MouseEvent) => {
      // Set initial position immediately on enter to prevent top-left flash
      const rect = container.getBoundingClientRect()
      positionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }

      // Set position immediately without transition
      follower.style.transform = `translate(${positionRef.current.x - offset}px, ${positionRef.current.y - offset}px)`

      // Simple entrance - just show
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      positionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
      updateFollowerPosition()
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [offset, updateFollowerPosition])

  return (
    <div ref={containerRef} className={`relative ${className} ${isVisible ? 'cursor-none' : ''}`}>
      {children}
      <div
        ref={followerRef}
        className="hidden md:block absolute top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate(-${offset}px, -${offset}px)`, // Initial position off-screen
        }}
      >
        <div
          className={`
            ${config.size} ${config.bg} ${config.text} ${config.border} flex items-center justify-center
            shadow-lg relative overflow-hidden
            transition-all duration-400 ease-out
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
          `}
        >
          {/* Split text around the circle using SVG - distributed evenly on opposite sides */}
          <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 144 144">
            <defs>
              <path id="circle-path" d="M 72,72 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
            </defs>
            {/* First half of text starting at top */}
            <text className="text-sm font-medium tracking-[0.2em] fill-current">
              <textPath href="#circle-path" startOffset="0%">
                {text}
              </textPath>
            </text>
            {/* Second half of text starting at bottom (50% around the circle) */}
            <text className="text-sm font-medium tracking-[0.2em] fill-current">
              <textPath href="#circle-path" startOffset="50%">
                {text}
              </textPath>
            </text>
          </svg>

          {/* Central arrow */}
          <div className="relative z-10 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-all duration-400 ease-out"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
