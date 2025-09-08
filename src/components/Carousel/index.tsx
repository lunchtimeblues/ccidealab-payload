'use client'

import React, { useEffect, useRef, useState, useCallback, Children, cloneElement } from 'react'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

interface ImageProps {
  className?: string
  style?: React.CSSProperties
  [key: string]: unknown
}

interface ReactElementWithProps extends React.ReactElement {
  props: ImageProps
}

export const Carousel: React.FC<CarouselProps> = ({ children, className = '', size = 'md' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const positionRef = useRef({ x: 0, y: 0 })
  const followerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)

  const sizeConfig = {
    sm: 'h-80',
    md: 'h-96',
    lg: 'h-104',
    xl: 'h-[32rem]',
    xxl: 'h-[69rem]',
  }

  const childrenArray = Children.toArray(children).filter((child) => React.isValidElement(child))
  const totalSlides = childrenArray.length

  // Layout constraints
  const getPageWrapperConstraints = useCallback(() => {
    if (typeof window === 'undefined') {
      return { leftEdge: 48, rightEdge: 1200, contentWidth: 1104 }
    }
    const viewportWidth = window.innerWidth
    const isMobile = viewportWidth < 768
    const sideSpacing = isMobile ? 32 : 48
    return {
      leftEdge: sideSpacing,
      rightEdge: viewportWidth - sideSpacing,
      contentWidth: viewportWidth - sideSpacing * 2,
    }
  }, [])

  const getMaxIndex = useCallback(() => {
    if (!carouselRef.current || totalSlides <= 1) return 0
    const constraints = getPageWrapperConstraints()
    const totalWidth = carouselRef.current.scrollWidth
    if (totalWidth <= constraints.contentWidth) return 0
    const averageSlideWidth = 300
    const maxTranslateX = totalWidth - constraints.contentWidth
    return Math.min(Math.floor(maxTranslateX / averageSlideWidth), totalSlides - 1)
  }, [totalSlides, getPageWrapperConstraints])

  // Update carousel position when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const constraints = getPageWrapperConstraints()
      const maxIndex = getMaxIndex()
      const clampedIndex = Math.min(currentIndex, maxIndex)

      // For the last slide, calculate exact position to align with right edge
      if (clampedIndex === maxIndex && maxIndex > 0) {
        const totalWidth = carouselRef.current.scrollWidth
        const exactTranslateX = totalWidth - constraints.contentWidth
        const finalTranslateX = constraints.leftEdge - exactTranslateX
        carouselRef.current.style.transform = `translateX(${finalTranslateX}px)`
      } else {
        // Simple slide-based positioning for other slides
        const averageSlideWidth = 300
        const slideTranslateX = clampedIndex * averageSlideWidth
        const finalTranslateX = constraints.leftEdge - slideTranslateX
        carouselRef.current.style.transform = `translateX(${finalTranslateX}px)`
      }
    }
  }, [currentIndex, getMaxIndex, getPageWrapperConstraints])

  // Mouse follower
  const updateFollower = useCallback(() => {
    const follower = followerRef.current
    if (!follower) return
    const { x, y } = positionRef.current
    const offset = 48
    follower.style.transform = `translate(${x - offset}px, ${y - offset}px)`
  }, [])

  const determineDirection = (x: number, rect: DOMRect) =>
    x < rect.left + rect.width / 2 ? 'left' : 'right'

  // Handlers
  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setDirection(determineDirection(e.clientX, rect))
    positionRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    updateFollower()
    setIsVisible(true)
    if (containerRef.current) {
      containerRef.current.style.cursor = 'none'
    }
  }

  const handleMouseLeave = () => {
    setIsVisible(false)
    if (containerRef.current) {
      containerRef.current.style.cursor = 'auto'
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setDirection(determineDirection(e.clientX, rect))
    positionRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    updateFollower()
  }

  const handleClick = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const clickDirection = determineDirection(e.clientX, rect)
    const maxIndex = getMaxIndex()
    if (clickDirection === 'left') {
      setCurrentIndex((prev) => Math.max(0, prev - 1))
    } else {
      setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
    }
  }

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 50
    const maxIndex = getMaxIndex()

    if (deltaX > threshold) {
      setCurrentIndex((prev) => Math.max(0, prev - 1))
    } else if (deltaX < -threshold) {
      setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
    }
    touchStartX.current = null
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const maxIndex = getMaxIndex()
    if (e.key === 'ArrowLeft') {
      setCurrentIndex((prev) => Math.max(0, prev - 1))
    }
    if (e.key === 'ArrowRight') {
      setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0} // enables keyboard focus
    >
      {/* Carousel Container */}
      <div
        className={`overflow-hidden ${sizeConfig[size]}`}
        style={{ marginLeft: 0, width: '100vw' }}
      >
        <div
          ref={carouselRef}
          className="flex gap-8 transition-transform duration-500 ease-out h-full items-center"
        >
          {childrenArray.map((child, index) => (
            <div key={index} className="flex-shrink-0 h-full flex items-center justify-center">
              {React.isValidElement(child) ? (
                cloneElement(child as ReactElementWithProps, {
                  className: `h-full w-auto object-contain rounded-lg ${(child as ReactElementWithProps).props.className || ''}`,
                  style: {
                    maxHeight: '100%',
                    width: 'auto',
                    ...(child as ReactElementWithProps).props.style,
                  },
                })
              ) : (
                <div className="h-full aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">Invalid content</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        ref={followerRef}
        className="absolute top-0 left-0 pointer-events-none z-50"
        style={{ transform: `translate(-48px, -48px)` }}
      >
        <div
          className={`w-24 h-24 bg-white/90 backdrop-blur-md border border-gray-200/30 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden transition-all duration-300 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          {/* Direction indicator */}
          <div className="flex items-center justify-center">
            {direction === 'left' ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
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
