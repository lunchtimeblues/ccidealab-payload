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
  const touchStartX = useRef<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const sizeConfig = {
    sm: 'h-80',
    md: 'h-96',
    lg: 'h-104',
    xl: 'h-[32rem]',
    xxl: 'h-[69rem]',
  }

  // Dynamically measure slide width
  const getSlideWidth = useCallback(() => {
    if (!carouselRef.current) return 300
    const firstSlide = carouselRef.current.querySelector('div')
    return firstSlide ? (firstSlide as HTMLElement).offsetWidth + 32 : 300
  }, [])

  const getMaxIndex = useCallback(() => {
    if (!carouselRef.current) return 0
    const totalWidth = carouselRef.current.scrollWidth
    const visibleWidth = carouselRef.current.offsetWidth
    const slideWidth = getSlideWidth()
    return Math.max(0, Math.ceil((totalWidth - visibleWidth) / slideWidth))
  }, [getSlideWidth])

  const updateCarouselPosition = useCallback(() => {
    if (!carouselRef.current) return

    const slideWidth = getSlideWidth()
    const maxIndex = getMaxIndex()
    const clampedIndex = Math.max(0, Math.min(currentIndex, maxIndex))

    const finalTranslateX = -(clampedIndex * slideWidth)
    carouselRef.current.style.transform = `translateX(${finalTranslateX}px)`
  }, [currentIndex, getSlideWidth, getMaxIndex])

  // Update position on index change
  useEffect(() => {
    updateCarouselPosition()
  }, [updateCarouselPosition])

  // Handle resize with cleanup
  useEffect(() => {
    const handleResize = () => updateCarouselPosition()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [updateCarouselPosition])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, getMaxIndex()))
  }, [getMaxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }, [])

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 50

    if (deltaX > threshold) {
      prevSlide()
    } else if (deltaX < -threshold) {
      nextSlide()
    }

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
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Carousel Container */}
      <div className={`overflow-hidden ${sizeConfig[size]}`}>
        <div
          ref={carouselRef}
          className="flex gap-8 transition-transform duration-500 ease-out h-full items-center"
          style={{ willChange: 'transform' }}
        >
          {childrenArray.map((child, index) => (
            <div key={index} className="flex-shrink-0 h-full flex items-center justify-center">
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
