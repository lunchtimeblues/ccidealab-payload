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

  // Single configuration - white/transparent look
  const config = {
    bg: 'bg-white/90 backdrop-blur-md rounded-full',
    text: 'text-black',
    border: 'border border-gray-200/30',
    size: 'w-36 h-36',
    offset: 72,
  }

  const updateFollowerPosition = useCallback(() => {
    const follower = followerRef.current
    if (!follower) return

    const { x, y } = positionRef.current
    const offset = config.offset
    follower.style.transform = `translate(${x - offset}px, ${y - offset}px)`
  }, [config.offset])

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
      const offset = config.offset
      follower.style.transform = `translate(${positionRef.current.x - offset}px, ${positionRef.current.y - offset}px)`

      // Simple entrance - just show
      setIsVisible(true)

      // Hide cursor
      container.style.cursor = 'none'
    }

    const handleMouseLeave = () => {
      setIsVisible(false)

      // Restore cursor
      container.style.cursor = 'auto'
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
  }, [config.offset, updateFollowerPosition])

  return (
    <div ref={containerRef} className={`relative ${className} ${isVisible ? 'cursor-none' : ''}`}>
      {children}
      <div
        ref={followerRef}
        className="absolute top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate(-${config.offset}px, -${config.offset}px)`, // Initial position off-screen
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
          {/* Curved text around the circle using SVG */}
          <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 144 144">
            <defs>
              <path id="circle-path" d="M 72,72 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
            </defs>
            <text className="text-xs font-medium tracking-[0.2em] fill-current">
              <textPath href="#circle-path" startOffset="0%">
                {text} • {text} •
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
