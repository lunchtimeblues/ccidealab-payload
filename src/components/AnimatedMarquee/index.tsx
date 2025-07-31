'use client'

import { useEffect, useRef } from 'react'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  direction?: 'left' | 'right'
  className?: string
}

export const AnimatedMarquee: React.FC<MarqueeProps> = ({
  children,
  speed = 50,
  direction = 'left',
  className = ''
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const animation = marquee.animate(
      [
        { transform: direction === 'left' ? 'translateX(0%)' : 'translateX(-100%)' },
        { transform: direction === 'left' ? 'translateX(-100%)' : 'translateX(0%)' }
      ],
      {
        duration: speed * 1000,
        iterations: Infinity,
        easing: 'linear'
      }
    )

    return () => animation.cancel()
  }, [speed, direction])

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  )
}
