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

  // Calculate fluid size based on text length and viewport
  const getFluidSize = useCallback(() => {
    if (typeof window === 'undefined') return { width: 176, height: 176 }

    const vw = window.innerWidth
    const textLength = text.length

    // Base size calculation
    const baseSize = Math.max(120, Math.min(200, 120 + textLength * 4))

    // Viewport scaling
    let scaleFactor = 1
    if (vw < 768) {
      scaleFactor = 0.8 // Smaller on mobile
    } else if (vw < 1440) {
      scaleFactor = 0.9 // Medium on tablet/small desktop
    } else {
      scaleFactor = 1 // Full size on large desktop
    }

    const finalSize = Math.round(baseSize * scaleFactor)
    return { width: finalSize, height: finalSize }
  }, [text])

  // Calculate responsive offset based on current size
  const getResponsiveOffset = useCallback((size: { width: number; height: number }) => {
    return size.width / 2
  }, [])

  const [size, setSize] = useState({ width: 176, height: 176 })
  const [offset, setOffset] = useState(88)

  const config = {
    bg: 'bg-white/90 backdrop-blur-md rounded-full',
    text: 'text-black',
    border: 'border border-gray-200/30',
    size,
    offset,
  }

  const updateFollowerPosition = useCallback(() => {
    const follower = followerRef.current
    if (!follower) return

    const { x, y } = positionRef.current
    follower.style.transform = `translate(${x - offset}px, ${y - offset}px)`
  }, [offset])

  // Update size and offset on mount and resize
  useEffect(() => {
    const updateSizeAndOffset = () => {
      const newSize = getFluidSize()
      const newOffset = getResponsiveOffset(newSize)
      setSize(newSize)
      setOffset(newOffset)
    }

    // Set initial size and offset
    updateSizeAndOffset()

    // Update on resize
    window.addEventListener('resize', updateSizeAndOffset)
    return () => window.removeEventListener('resize', updateSizeAndOffset)
  }, [getFluidSize, getResponsiveOffset])

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
            ${config.bg} ${config.text} ${config.border} flex items-center justify-center
            shadow-lg relative overflow-hidden rounded-full
            transition-all duration-400 ease-out
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
          `}
          style={{
            width: `${config.size.width}px`,
            height: `${config.size.height}px`,
          }}
        >
          {/* Split text around the circle using SVG - distributed evenly on opposite sides */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin-slow"
            viewBox={`0 0 ${config.size.width} ${config.size.height}`}
          >
            <defs>
              <path
                id="circle-path"
                d={`M ${config.size.width / 2},${config.size.height / 2} m -${config.size.width / 2 - 20},0 a ${config.size.width / 2 - 20},${config.size.height / 2 - 20} 0 1,1 ${config.size.width - 40},0 a ${config.size.width / 2 - 20},${config.size.height / 2 - 20} 0 1,1 -${config.size.width - 40},0`}
              />
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

          {/* Central arrow - larger to better fill the 192px space */}
          <div className="relative z-10 flex items-center justify-center">
            <svg
              width="32"
              height="32"
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
