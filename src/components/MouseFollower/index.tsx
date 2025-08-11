'use client'

import { useEffect, useRef, useState } from 'react'

interface MouseFollowerProps {
  children: React.ReactNode
  className?: string
}

export const MouseFollower: React.FC<MouseFollowerProps> = ({
  children,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const positionRef = useRef({ x: 0, y: 0 })
  const followerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateFollowerPosition = () => {
    const follower = followerRef.current
    if (!follower) return

    const { x, y } = positionRef.current
    follower.style.transform = `translate(${x - 55}px, ${y - 55}px)`
  }

  useEffect(() => {
    const container = containerRef.current
    const follower = followerRef.current
    if (!container || !follower) return

    const handleMouseEnter = (e: MouseEvent) => {
      // Set initial position immediately on enter to prevent top-left flash
      const rect = container.getBoundingClientRect()
      positionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }

      // Set position immediately without transition
      follower.style.transform = `translate(${positionRef.current.x - 55}px, ${positionRef.current.y - 55}px)`
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      positionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
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
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
      <div
        ref={followerRef}
        className="absolute top-0 left-0 pointer-events-none z-10"
        style={{
          transform: 'translate(-55px, -55px)' // Initial position off-screen
        }}
      >
        <div
          className={`w-28 h-28 bg-white rounded-full flex items-center justify-center text-black text-2xl font-bold transition-all duration-300 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        >
          →
        </div>
      </div>
    </div>
  )
}
