'use client'

import React, { useEffect, useRef, useState, useCallback, useMemo, Children } from 'react'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export const Carousel: React.FC<CarouselProps> = ({ children, className = '', size = 'md' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const positionRef = useRef({ x: -100, y: -100 }) // Start off-screen
  const followerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const sizeConfig = {
    sm: 'h-80',
    md: 'h-96',
    lg: 'h-104',
    xl: 'h-[36rem]',
    xxl: 'h-[69rem]',
  }

  const childrenArray = Children.toArray(children).filter((child) => React.isValidElement(child))
  const totalSlides = childrenArray.length

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

  const getCarouselStyles = useCallback(() => {
    return { marginLeft: '0', width: '100vw' }
  }, [])

  const getMaxIndex = useCallback(() => {
    if (!carouselRef.current || totalSlides <= 1) {
      return 0
    }
    const constraints = getPageWrapperConstraints()
    const totalWidth = carouselRef.current.scrollWidth
    if (totalWidth <= constraints.contentWidth) {
      return 0
    }
    const maxTranslateX = totalWidth - constraints.contentWidth

    // Calculate actual slide width from first child
    const firstChild = carouselRef.current.children[0] as HTMLElement
    const slideWidth = firstChild ? firstChild.offsetWidth + 32 : 332 // 32px gap
    const maxIndex = Math.floor(maxTranslateX / slideWidth)
    const finalMaxIndex = Math.min(maxIndex, totalSlides - 1)

    // Temporary fix: if we have multiple slides but maxIndex is 0, force it to allow scrolling
    if (finalMaxIndex === 0 && totalSlides > 1) {
      return totalSlides - 1
    }

    return finalMaxIndex
  }, [totalSlides, getPageWrapperConstraints])

  const constraints = useMemo(() => getPageWrapperConstraints(), [getPageWrapperConstraints])
  const [maxIndex, setMaxIndex] = useState(0)

  // Recalculate maxIndex when component mounts and when dependencies change
  useEffect(() => {
    const calculateMaxIndex = () => {
      const result = getMaxIndex()
      setMaxIndex(result)
    }

    // Calculate immediately
    calculateMaxIndex()

    // Also calculate after delays to ensure DOM is ready
    const timeout1 = setTimeout(calculateMaxIndex, 100)
    const timeout2 = setTimeout(calculateMaxIndex, 500)
    const timeout3 = setTimeout(calculateMaxIndex, 1000)

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
    }
  }, [getMaxIndex, totalSlides])

  // Also recalculate when carousel becomes available
  useEffect(() => {
    const checkAndRecalculate = () => {
      if (carouselRef.current) {
        const result = getMaxIndex()
        setMaxIndex(result)
      }
    }

    // Check periodically until carousel is ready
    const interval = setInterval(() => {
      if (carouselRef.current) {
        checkAndRecalculate()
        clearInterval(interval)
      }
    }, 100)

    // Clear interval after 5 seconds to prevent infinite checking
    const timeout = setTimeout(() => clearInterval(interval), 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [getMaxIndex])

  const updateCarouselPosition = useCallback(
    (index: number, offset: number = 0, immediate: boolean = false) => {
      if (!carouselRef.current) {
        return
      }
      const clampedIndex = Math.min(index, maxIndex)

      // Calculate actual slide width from first child
      const firstChild = carouselRef.current.children[0] as HTMLElement
      const slideWidth = firstChild ? firstChild.offsetWidth + 32 : 332 // 32px gap

      if (clampedIndex === maxIndex && maxIndex > 0) {
        const totalWidth = carouselRef.current.scrollWidth
        const exactTranslateX = totalWidth - constraints.contentWidth
        const finalTranslateX = constraints.leftEdge - exactTranslateX + offset
        carouselRef.current.style.transform = `translateX(${finalTranslateX}px)`
      } else {
        const slideTranslateX = clampedIndex * slideWidth
        const finalTranslateX = constraints.leftEdge - slideTranslateX + offset
        carouselRef.current.style.transform = `translateX(${finalTranslateX}px)`
      }
      carouselRef.current.style.transitionDuration = immediate ? '0ms' : '500ms'
    },
    [maxIndex, constraints],
  )

  useEffect(() => {
    updateCarouselPosition(currentIndex)
  }, [currentIndex, updateCarouselPosition])

  const updateFollowerPosition = useCallback(() => {
    const follower = followerRef.current
    if (!follower) return
    const { x, y } = positionRef.current
    const offset = 48
    follower.style.transform = `translate(${x - offset}px, ${y - offset}px)`
  }, [])

  const determineDirection = (e: MouseEvent, rect: DOMRect) => {
    const centerX = rect.left + rect.width / 2
    return e.clientX < centerX ? 'left' : 'right'
  }

  const handleMouseEnter = useCallback(
    (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      setDirection(determineDirection(e, rect))
      positionRef.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)
      updateFollowerPosition()
      if (containerRef.current) containerRef.current.style.cursor = 'none'
    },
    [updateFollowerPosition],
  )

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
    if (containerRef.current) containerRef.current.style.cursor = 'auto'
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isVisible) return
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      setDirection(determineDirection(e, rect))
      positionRef.current = { x: e.clientX, y: e.clientY }
      updateFollowerPosition()
    },
    [updateFollowerPosition, isVisible],
  )

  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault()
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const clickDirection = determineDirection(e, rect)
      if (clickDirection === 'left') {
        const newIndex = Math.max(0, currentIndex - 1)
        setCurrentIndex(newIndex)
      } else {
        const newIndex = Math.min(maxIndex, currentIndex + 1)
        setCurrentIndex(newIndex)
      }
    },
    [maxIndex, currentIndex],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let touchStartX = 0
    let touchStartY = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY
      const deltaX = touchEndX - touchStartX
      const deltaY = touchEndY - touchStartY
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) setCurrentIndex((prev) => Math.max(0, prev - 1))
        else setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
      }
    }

    // Use addEventListener with proper typing
    const mouseEnterHandler = (e: Event) => handleMouseEnter(e as MouseEvent)
    const mouseLeaveHandler = () => handleMouseLeave()
    const mouseMoveHandler = (e: Event) => handleMouseMove(e as MouseEvent)
    const clickHandler = (e: Event) => handleClick(e as MouseEvent)

    container.addEventListener('mouseenter', mouseEnterHandler)
    container.addEventListener('mouseleave', mouseLeaveHandler)
    container.addEventListener('mousemove', mouseMoveHandler)
    container.addEventListener('click', clickHandler)
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      container.removeEventListener('mouseenter', mouseEnterHandler)
      container.removeEventListener('mouseleave', mouseLeaveHandler)
      container.removeEventListener('mousemove', mouseMoveHandler)
      container.removeEventListener('click', clickHandler)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove, handleClick, maxIndex])

  useEffect(() => {
    const handleResize = () => {
      try {
        const newMaxIndex = getMaxIndex()
        setCurrentIndex((prev) => Math.min(prev, newMaxIndex))
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
      } catch (error) {
        console.warn('Carousel resize error:', error)
      }
    }

    // Debounce resize events
    let resizeTimeout: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(handleResize, 100)
    }

    window.addEventListener('resize', debouncedResize)
    return () => {
      window.removeEventListener('resize', debouncedResize)
      clearTimeout(resizeTimeout)
    }
  }, [getMaxIndex, getCarouselStyles])

  return (
    <div ref={containerRef} className={`relative ${className} ${isVisible ? 'cursor-none' : ''}`}>
      <div className={`overflow-hidden ${sizeConfig[size]}`} style={getCarouselStyles()}>
        <div
          ref={carouselRef}
          className="flex gap-8 transition-transform duration-500 ease-out h-full items-center"
        >
          {childrenArray.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: '100%' }}
            >
              {React.isValidElement(child) ? (
                <div className="h-full w-auto flex items-center justify-center carousel-item-wrapper">
                  {child}
                </div>
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
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate(-48px, -48px)`,
          willChange: 'transform',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        <div className="w-24 h-24 bg-white/90 backdrop-blur-md border border-gray-200/30 rounded-full flex items-center justify-center shadow-lg">
          <div className="flex items-center justify-center">
            {direction === 'left' ? (
              <svg
                key="left"
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
                key="right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-black"
              >
                <path
                  d="M5 12H19M19 12L14 7M19 12L14 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
