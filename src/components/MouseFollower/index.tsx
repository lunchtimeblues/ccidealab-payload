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

  // Unique ID for text path (prevents conflicts with multiple components)
  const idRef = useRef(`circle-path-${Math.random().toString(36).slice(2, 9)}`)

  // Calculate fluid size based on text length and viewport
  const getFluidSize = useCallback(() => {
    if (typeof window === 'undefined') return { width: 176, height: 176 }

    const vw = window.innerWidth
    const textLength = text.length

    // Base size calculation
    const baseSize = Math.max(120, Math.min(200, 120 + textLength * 4))

    // Viewport scaling
    let scaleFactor = 1
    if (vw < 768) scaleFactor = 0.8
    else if (vw < 1440) scaleFactor = 0.9

    const finalSize = Math.round(baseSize * scaleFactor)
    return { width: finalSize, height: finalSize }
  }, [text])

  // Responsive offset
  const getResponsiveOffset = useCallback((size: { width: number; height: number }) => {
    return size.width / 2
  }, [])

  const [size, setSize] = useState({ width: 176, height: 176 })
  const [offset, setOffset] = useState(88)

  // Configuration object for better maintainability
  const config = {
    bg: 'bg-white/90 backdrop-blur-md rounded-full',
    text: 'text-black',
    border: 'border border-gray-200/30',
    shadow: 'shadow-lg',
    transitions: 'transition-all duration-400 ease-out',
    size,
    offset,
  }

  const updateFollowerPosition = useCallback(() => {
    const follower = followerRef.current
    if (!follower) return
    const { x, y } = positionRef.current
    follower.style.transform = `translate(${x - offset}px, ${y - offset}px)`
  }, [offset])

  // Update size/offset on mount and resize
  useEffect(() => {
    const updateSizeAndOffset = () => {
      const newSize = getFluidSize()
      setSize(newSize)
      setOffset(getResponsiveOffset(newSize))
    }
    updateSizeAndOffset()
    window.addEventListener('resize', updateSizeAndOffset)
    return () => window.removeEventListener('resize', updateSizeAndOffset)
  }, [getFluidSize, getResponsiveOffset])

  useEffect(() => {
    const container = containerRef.current
    const follower = followerRef.current
    if (!container || !follower) return

    let animationFrame: number | null = null

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      positionRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      follower.style.transform = `translate(${positionRef.current.x - offset}px, ${positionRef.current.y - offset}px)`
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      positionRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(() => {
          updateFollowerPosition()
          animationFrame = null
        })
      }
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mousemove', handleMouseMove)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [offset, updateFollowerPosition])

  return (
    <div ref={containerRef} className={`relative ${className} ${isVisible ? 'cursor-none' : ''}`}>
      {children}

      <div
        ref={followerRef}
        aria-hidden="true"
        className="hidden md:block absolute top-0 left-0 pointer-events-none z-50"
        style={{ transform: `translate(-${offset}px, -${offset}px)` }}
      >
        <div
          className={`
            ${config.bg} ${config.text} ${config.border} ${config.shadow}
            flex items-center justify-center relative overflow-hidden
            ${config.transitions}
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
          `}
          style={
            {
              '--circle-size': `${size.width}px`,
              width: 'var(--circle-size)',
              height: 'var(--circle-size)',
            } as React.CSSProperties
          }
        >
          {/* Rotating text */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin-slow"
            viewBox={`0 0 ${size.width} ${size.height}`}
          >
            <defs>
              <path
                id={idRef.current}
                d={`M ${size.width / 2},${size.height / 2}
                   m -${size.width / 2 - 20},0
                   a ${size.width / 2 - 20},${size.height / 2 - 20} 0 1,1 ${size.width - 40},0
                   a ${size.width / 2 - 20},${size.height / 2 - 20} 0 1,1 -${size.width - 40},0`}
              />
            </defs>
            {[0, 50].map((textOffset, i) => (
              <text key={i} className="text-sm font-medium tracking-[0.2em] fill-current">
                <textPath href={`#${idRef.current}`} startOffset={`${textOffset}%`}>
                  {text}
                </textPath>
              </text>
            ))}
          </svg>

          {/* Center arrow */}
          <div className="relative z-10 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
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
