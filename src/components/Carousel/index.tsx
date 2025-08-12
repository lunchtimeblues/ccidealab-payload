'use client'

import React, { useEffect, useRef, useState, useCallback, Children, cloneElement } from 'react'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  autoPlay?: boolean
  autoPlayInterval?: number
}

interface ImageProps {
  className?: string
  style?: React.CSSProperties
  [key: string]: unknown
}

interface ReactElementWithProps extends React.ReactElement {
  props: ImageProps
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  className = '',
  size = 'md',
  autoPlay = true,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const positionRef = useRef({ x: 0, y: 0 })
  const followerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Convert children to array for easier handling
  const childrenArray = Children.toArray(children).filter(child => React.isValidElement(child))
  const totalSlides = childrenArray.length

  // Size configurations for carousel height
  const sizeConfig = {
    sm: 'h-64',    // 256px
    md: 'h-80',    // 320px
    lg: 'h-96',    // 384px
    xl: 'h-[32rem]' // 512px
  }

  const slideWidth = 400 // Fixed slide width
  const gap = 32 // Gap between slides

  // Simple navigation functions (keeping for potential future use)
  const _nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalSlides)
  }

  const _prevSlide = () => {
    setCurrentIndex(prev => prev === 0 ? totalSlides - 1 : prev - 1)
  }

  // Update carousel position when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const translateX = currentIndex * (slideWidth + gap)
      carouselRef.current.style.transform = `translateX(-${translateX}px)`
    }
  }, [currentIndex])

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && totalSlides > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalSlides)
      }, autoPlayInterval)

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current)
        }
      }
    }
  }, [autoPlay, autoPlayInterval, totalSlides])

  // Mouse follower functionality
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

  // Mouse event handlers
  const handleMouseEnter = useCallback((e: MouseEvent) => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const newDirection = determineDirection(e, rect)

    positionRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }

    const offset = 48
    if (followerRef.current) {
      followerRef.current.style.transform = `translate(${positionRef.current.x - offset}px, ${positionRef.current.y - offset}px)`
    }

    setDirection(newDirection)
    setIsVisible(true)

    if (containerRef.current) {
      containerRef.current.style.cursor = 'none'
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (autoPlay && totalSlides > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalSlides)
      }, autoPlayInterval)
    }

    setIsVisible(false)

    if (containerRef.current) {
      containerRef.current.style.cursor = 'auto'
    }
  }, [autoPlay, totalSlides, autoPlayInterval])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const newDirection = determineDirection(e, rect)

    positionRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }

    setDirection(newDirection)
    updateFollowerPosition()
  }, [])

  const handleClick = useCallback((e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const clickDirection = determineDirection(e, rect)

    if (clickDirection === 'left') {
      setCurrentIndex(prev => prev === 0 ? totalSlides - 1 : prev - 1)
    } else {
      setCurrentIndex(prev => (prev + 1) % totalSlides)
    }
  }, [totalSlides])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

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
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove, handleClick])

  return (
    <div 
      ref={containerRef}
      className={`relative ${className} ${isVisible ? 'cursor-none' : ''}`}
    >
      {/* Carousel Container - extends off page to the right */}
      <div className={`overflow-hidden ${sizeConfig[size]}`}>
        <div
          ref={carouselRef}
          className="flex gap-8 transition-transform duration-500 ease-out h-full"
          style={{ width: `${totalSlides * slideWidth + (totalSlides - 1) * gap}px` }}
        >
          {childrenArray.map((child, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${sizeConfig[size]} overflow-hidden rounded-lg`}
              style={{ width: `${slideWidth}px` }}
            >
              {React.isValidElement(child) && (child.type === 'img' || (child.type as React.ComponentType)?.displayName === 'Image') ? (
                cloneElement(child as ReactElementWithProps, {
                  className: `w-full h-full object-cover ${child.props.className || ''}`,
                  style: { ...child.props.style }
                })
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Invalid content</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Integrated Mouse Follower */}
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

          {/* Subtle inner glow effect */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
