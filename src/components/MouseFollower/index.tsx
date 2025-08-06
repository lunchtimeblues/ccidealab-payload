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
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const followerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseEnter = (e: MouseEvent) => {
      // Set initial position immediately on enter to prevent top-left flash
      const rect = container.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
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
        className={`absolute top-0 left-0 pointer-events-none z-10 transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        style={{
          transform: `translate(${position.x - 55}px, ${position.y - 55}px)`
        }}
      >
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center text-black text-2xl font-bold">
          →
        </div>
      </div>
    </div>
  )
}
