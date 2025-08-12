'use client'

import { useEffect, useRef, useState } from 'react'

interface DirectionalMouseFollowerProps {
  children: React.ReactNode
  className?: string
  onLeftClick?: () => void
  onRightClick?: () => void
}

export const DirectionalMouseFollower: React.FC<DirectionalMouseFollowerProps> = ({
  children,
  className = '',
  onLeftClick,
  onRightClick
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [_mousePosition, _setMousePosition] = useState({ x: 0, y: 0 })
  const positionRef = useRef({ x: 0, y: 0 })
  const followerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateFollowerPosition = () => {
    const follower = followerRef.current
    if (!follower) return

    const { x, y } = positionRef.current
    const offset = 48 // Half of 96px (w-24 h-24)
    follower.style.transform = `translate(${x - offset}px, ${y - offset}px)`
  }

  const determineDirection = (e: MouseEvent, containerRect: DOMRect) => {
    const centerX = containerRect.left + containerRect.width / 2
    const mouseX = e.clientX
    return mouseX < centerX ? 'left' : 'right'
  }

  useEffect(() => {
    const container = containerRef.current
    const follower = followerRef.current
    if (!container || !follower) return

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const newDirection = determineDirection(e, rect)
      
      positionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }

      // Set position immediately
      const offset = 48
      follower.style.transform = `translate(${positionRef.current.x - offset}px, ${positionRef.current.y - offset}px)`
      
      setDirection(newDirection)
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
      const newDirection = determineDirection(e, rect)
      
      positionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
      
      setDirection(newDirection)
      _setMousePosition({ x: e.clientX, y: e.clientY })
      updateFollowerPosition()
    }

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const clickDirection = determineDirection(e, rect)
      
      if (clickDirection === 'left' && onLeftClick) {
        onLeftClick()
      } else if (clickDirection === 'right' && onRightClick) {
        onRightClick()
      }
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('click', handleClick)

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('click', handleClick)
    }
  }, [onLeftClick, onRightClick])

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className} ${isVisible ? 'cursor-none' : ''}`}
    >
      {children}
      <div
        ref={followerRef}
        className="absolute top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate(-48px, -48px)` // Initial position off-screen
        }}
      >
        <div
          className={`
            w-24 h-24 bg-white/90 backdrop-blur-md border border-gray-200/30
            rounded-full flex items-center justify-center
            shadow-lg relative overflow-hidden
            transition-all duration-300 ease-out
            ${isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-75'
            }
          `}
        >
          {/* Direction indicator */}
          <div className="flex items-center justify-center">
            {direction === 'left' ? (
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-black"
              >
                <path 
                  d="M19 12H5M5 12L12 19M5 12L12 5" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-black"
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>

          {/* Direction text */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <span className="text-xs font-medium text-black uppercase tracking-wider">
              {direction}
            </span>
          </div>

          {/* Subtle inner glow effect */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
