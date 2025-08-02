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
  const followerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const currentPos = useRef({ x: 0, y: 0 })
  const targetPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    const follower = followerRef.current
    if (!container || !follower) return

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Initialize both current and target positions to mouse position
      currentPos.current = { x, y }
      targetPos.current = { x, y }

      // Set initial position immediately
      follower.style.transform = `translate(${x - 56}px, ${y - 56}px)`

      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      targetPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }



    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible])

  // Start animation when visible
  useEffect(() => {
    if (isVisible) {
      const animate = () => {
        const follower = followerRef.current
        if (!follower) return

        // Lerp (linear interpolation) for smooth following
        const lerp = 0.15

        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerp
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerp

        // Update position (56px is half of 112px circle size for centering)
        follower.style.transform = `translate(${currentPos.current.x - 56}px, ${currentPos.current.y - 56}px)`

        if (isVisible) {
          animationRef.current = requestAnimationFrame(animate)
        }
      }
      animate()
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
      <div
        ref={followerRef}
        className={`absolute top-0 left-0 pointer-events-none z-10 transition-opacity duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translate(0px, 0px)', // Initial position, will be updated by RAF
          willChange: 'transform'
        }}
      >
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center text-black text-2xl font-bold shadow-lg">
          →
        </div>
      </div>
    </div>
  )
}
