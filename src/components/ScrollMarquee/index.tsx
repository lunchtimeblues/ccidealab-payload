'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollMarqueeProps {
  topText: string[]
  bottomText: string[]
  className?: string
}

export const ScrollMarquee = ({ topText, bottomText, className = '' }: ScrollMarqueeProps) => {
  const [scrollVelocity, setScrollVelocity] = useState(0)
  const topMarqueeRef = useRef<HTMLDivElement>(null)
  const bottomMarqueeRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const velocityRef = useRef(0)
  const animationRef = useRef<number>()

  useEffect(() => {
    let lastTime = Date.now()
    
    const handleScroll = () => {
      const currentTime = Date.now()
      const currentScrollY = window.scrollY
      const deltaTime = currentTime - lastTime
      const deltaScroll = currentScrollY - lastScrollY.current

      // Calculate scroll velocity (pixels per millisecond)
      const velocity = deltaTime > 0 ? deltaScroll / deltaTime : 0
      
      // Smooth the velocity with exponential smoothing
      velocityRef.current = velocityRef.current * 0.8 + velocity * 0.2
      
      lastScrollY.current = currentScrollY
      lastTime = currentTime
      
      setScrollVelocity(velocityRef.current)
    }

    // Velocity decay - gradually reduce velocity when not scrolling
    const decayVelocity = () => {
      velocityRef.current *= 0.95
      setScrollVelocity(velocityRef.current)
      
      if (Math.abs(velocityRef.current) > 0.001) {
        animationRef.current = requestAnimationFrame(decayVelocity)
      }
    }

    const throttledScroll = () => {
      handleScroll()
      
      // Cancel previous decay animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      
      // Start decay animation
      animationRef.current = requestAnimationFrame(decayVelocity)
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Calculate animation speed based on scroll velocity
  const baseSpeed = 50 // Base animation duration in seconds
  const velocityMultiplier = Math.abs(scrollVelocity) * 100 // Amplify the effect
  const topSpeed = Math.max(5, baseSpeed - velocityMultiplier) // Faster when scrolling
  const bottomSpeed = Math.max(5, baseSpeed - velocityMultiplier)

  return (
    <div className={`py-16 bg-white overflow-hidden ${className}`}>
      {/* Top Marquee - Left to Right */}
      <div className="relative mb-8">
        <div
          ref={topMarqueeRef}
          className="flex whitespace-nowrap"
          style={{
            animation: `marqueeLeft ${topSpeed}s linear infinite`,
            animationDirection: scrollVelocity > 0 ? 'normal' : 'reverse'
          }}
        >
          {/* Duplicate content for seamless loop */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {topText.map((text, index) => (
                <span key={`${i}-${index}`} className="text-6xl md:text-8xl lg:text-9xl font-bold text-black mx-8">
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Marquee - Right to Left */}
      <div className="relative">
        <div
          ref={bottomMarqueeRef}
          className="flex whitespace-nowrap"
          style={{
            animation: `marqueeRight ${bottomSpeed}s linear infinite`,
            animationDirection: scrollVelocity > 0 ? 'reverse' : 'normal'
          }}
        >
          {/* Duplicate content for seamless loop */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {bottomText.map((text, index) => (
                <span key={`${i}-${index}`} className="text-6xl md:text-8xl lg:text-9xl font-bold text-black mx-8">
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}
