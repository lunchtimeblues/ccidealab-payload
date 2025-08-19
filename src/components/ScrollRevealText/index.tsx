'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px'
      }
    )

    observer.observe(element)

    return () => observer.unobserve(element)
  }, [delay])

  return (
    <div ref={elementRef} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-y-0' : 'translate-y-[120%]'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
