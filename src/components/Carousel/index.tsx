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
  const [_isMounted, setIsMounted] = useState(false)
  const positionRef = useRef({ x: 0, y: 0 })
  const followerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Size configurations for carousel height
  const sizeConfig = {
    sm: 'h-80', // 256px
    md: 'h-96', // 320px
    lg: 'h-104', // 384px
    xl: 'h-[36rem]', // 576px - increased to accommodate text
    xxl: 'h-[69rem]',
  }

  const _gap = 32 // Gap between slides (used in CSS classes)

  // Convert children to array for easier handling
  const childrenArray = Children.toArray(children).filter((child) => React.isValidElement(child))
  const totalSlides = childrenArray.length

  // For simplicity, we'll let CSS handle the sizing automatically
  // Each image will be height-constrained and width will adjust naturally

  // Set mounted state on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Simple navigation functions (keeping for potential future use)
  const _nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const _prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  // Calculate page-wrapper constraints
  const getPageWrapperConstraints = useCallback(() => {
    if (typeof window === 'undefined') {
      // Return default values for SSR
      return {
        leftEdge: 48,
        rightEdge: 1200,
        contentWidth: 1104,
      }
    }

    const viewportWidth = window.innerWidth
    const isMobile = viewportWidth < 768 // 48rem breakpoint from page-wrapper
    const sideSpacing = isMobile ? 32 : 48 // Match page-wrapper spacing

    return {
      leftEdge: sideSpacing,
      rightEdge: viewportWidth - sideSpacing,
      contentWidth: viewportWidth - sideSpacing * 2,
    }
  }, [])

  // Calculate positioning styles for page-wrapper alignment with overflow on both sides
  const getCarouselStyles = useCallback(() => {
    return {
      // Full width container to allow overflow on both sides
      marginLeft: '0',
      width: '100vw',
      // No padding - we'll handle positioning with transforms
    }
  }, [])

  // Calculate maximum slides that can be shown
  const getMaxIndex = useCallback(() => {
    if (!carouselRef.current || !containerRef.current || totalSlides <= 1) return 0

    const constraints = getPageWrapperConstraints()
    const carouselContainer = carouselRef.current
    const totalWidth = carouselContainer.scrollWidth

    // If all content fits within the visible area, don't allow scrolling
    if (totalWidth <= constraints.contentWidth) return 0

    // Calculate the maximum translation needed so the rightmost content
    // aligns with the right edge of the page-wrapper content area
    const maxTranslateX = totalWidth - constraints.contentWidth

    // Convert this to slide index using average slide width
    const averageSlideWidth = 300 // Same as used in positioning
    const maxIndex = Math.floor(maxTranslateX / averageSlideWidth)

    return Math.min(maxIndex, totalSlides - 1)
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
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const newDirection = determineDirection(e, rect)

    positionRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
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
    setIsVisible(false)

    if (containerRef.current) {
      containerRef.current.style.cursor = 'auto'
    }
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const newDirection = determineDirection(e, rect)

    positionRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }

    setDirection(newDirection)
    updateFollowerPosition()
  }, [])

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return

      const clickDirection = determineDirection(e, rect)
      const maxIndex = getMaxIndex()

      if (clickDirection === 'left') {
        setCurrentIndex((prev) => Math.max(0, prev - 1))
      } else {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
      }
    },
    [getMaxIndex],
  )

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

  // Handle window resize to recalculate boundaries and positioning
  useEffect(() => {
    const handleResize = () => {
      // Clamp current index to new boundaries
      const maxIndex = getMaxIndex()
      setCurrentIndex((prev) => Math.min(prev, maxIndex))

      // Force re-render to update positioning styles
      if (containerRef.current) {
        const styles = getCarouselStyles()
        const carouselContainer = containerRef.current.querySelector(
          '.overflow-hidden',
        ) as HTMLElement
        if (carouselContainer) {
          carouselContainer.style.marginLeft = styles.marginLeft
          carouselContainer.style.width = styles.width
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getMaxIndex, getCarouselStyles])

  return (
    <div ref={containerRef} className={`relative ${className} ${isVisible ? 'cursor-none' : ''}`}>
      {/* Carousel Container - aligned to page-wrapper constraints */}
      <div className={`overflow-hidden ${sizeConfig[size]}`} style={getCarouselStyles()}>
        <div
          ref={carouselRef}
          className="flex gap-8 transition-transform duration-500 ease-out h-full items-center"
        >
          {childrenArray.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-start justify-center"
              style={{ height: '100%' }}
            >
              {React.isValidElement(child) ? (
                // Check if child is a div (team member card) or an Image
                child.type === 'div' ? (
                  // Render team member card with proper spacing
                  cloneElement(child as ReactElementWithProps, {
                    className: `flex flex-col justify-start ${(child as ReactElementWithProps).props.className || ''}`,
                    style: {
                      height: 'auto',
                      maxHeight: '100%',
                    },
                  })
                ) : (
                  // Render image with original styling
                  cloneElement(child as ReactElementWithProps, {
                    className: `h-full w-auto object-contain rounded-lg ${(child as ReactElementWithProps).props.className || ''}`,
                    style: {
                      maxHeight: '100%',
                      width: 'auto',
                      ...(child as ReactElementWithProps).props.style,
                    },
                  })
                )
              ) : (
                <div className="h-full aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-lg">
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
          transform: `translate(-48px, -48px)`, // Initial position off-screen
        }}
      >
        <div
          className={`
            w-24 h-24 bg-white/90 backdrop-blur-md border border-gray-200/30
            rounded-full flex items-center justify-center
            shadow-lg relative overflow-hidden
            transition-all duration-300 ease-out
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
          `}
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
