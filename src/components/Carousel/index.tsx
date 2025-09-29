'use client'

import React, { useEffect, useRef, useState, useCallback, Children, cloneElement } from 'react'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

interface ChildProps {
  className?: string
  style?: React.CSSProperties
  [key: string]: unknown
}

export const Carousel: React.FC<CarouselProps> = ({ children, className = '', size = 'md' }) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const positionRef = useRef({ x: 0, y: 0 })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const sizeConfig = {
    sm: 'h-80',
    md: 'h-96',
    lg: 'h-104',
    xl: 'h-[32rem]',
    xxl: 'h-[69rem]',
  }

  // Measure slide width + gap dynamically
  const measureSlideWidth = useCallback(() => {
    if (!carouselRef.current) return
    const firstSlide = carouselRef.current.querySelector('div')
    if (firstSlide) {
      const gap = parseInt(getComputedStyle(carouselRef.current).gap || '0', 10)
      setSlideWidth((firstSlide as HTMLElement).offsetWidth + gap)
    }
  }, [])

  const getMaxIndex = useCallback(() => {
    if (!carouselRef.current || slideWidth === 0) return 0
    const totalWidth = carouselRef.current.scrollWidth
    const visibleWidth = carouselRef.current.offsetWidth
    return Math.max(0, Math.ceil((totalWidth - visibleWidth) / slideWidth))
  }, [slideWidth])

  const updateCarouselPosition = useCallback(() => {
    if (!carouselRef.current || slideWidth === 0) return
    const maxIndex = getMaxIndex()
    const clampedIndex = Math.max(0, Math.min(currentIndex, maxIndex))
    const finalTranslateX = -(clampedIndex * slideWidth)
    carouselRef.current.style.transform = `translateX(${finalTranslateX}px)`
  }, [currentIndex, slideWidth, getMaxIndex])

  // Initial measure & resize handling
  useEffect(() => {
    measureSlideWidth()
    window.addEventListener('resize', measureSlideWidth)
    return () => window.removeEventListener('resize', measureSlideWidth)
  }, [measureSlideWidth])

  // Update position on index change
  useEffect(() => {
    updateCarouselPosition()
  }, [currentIndex, updateCarouselPosition])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, getMaxIndex()))
  }, [getMaxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }, [])

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
    if (clickDirection === 'left') {
      prevSlide()
    } else {
      nextSlide()
    }
  }

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 50
    if (deltaX > threshold) prevSlide()
    else if (deltaX < -threshold) nextSlide()
    touchStartX.current = null
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
  }

  const childrenArray = Children.toArray(children)

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
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      {/* Carousel Container */}
      <div className={`overflow-hidden ${sizeConfig[size]}`}>
        <div
          ref={carouselRef}
          className="flex gap-8 transition-transform duration-500 ease-out h-full items-center"
          style={{ willChange: 'transform' }}
        >
          {childrenArray.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-full flex items-center justify-center"
              aria-hidden={index !== currentIndex}
            >
              {React.isValidElement(child)
                ? cloneElement(child as React.ReactElement<ChildProps>, {
                    className: `h-full w-auto object-contain rounded-lg ${(child as React.ReactElement<ChildProps>).props.className || ''}`,
                    style: {
                      maxHeight: '100%',
                      width: 'auto',
                      ...(child as React.ReactElement<ChildProps>).props.style,
                    },
                  })
                : null}
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

      {/* Simple Button Controls */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-all"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        disabled={currentIndex >= getMaxIndex()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-all"
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  )
}
