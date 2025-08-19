'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface NavItem {
  label: string
  href: string
  transitionType?: 'logoWipe'
  transitionColor?: string
}

interface FullScreenMenuProps {
  isOpen: boolean
  isNavigating: boolean
  onClose: () => void
  onNavigate: (url: string) => void
  navItems: NavItem[]
}

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({
  isOpen,
  isNavigating,
  onClose,
  onNavigate,
  navItems,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  const itemHeight = 120 // Height per menu item
  const totalHeight = navItems.length * itemHeight

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Store original scroll position
      const originalScrollY = window.scrollY

      // Prevent body scroll with multiple methods
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${originalScrollY}px`
      document.body.style.width = '100%'

      // Prevent touch scrolling on mobile
      const preventTouchMove = (e: TouchEvent) => {
        e.preventDefault()
      }

      document.addEventListener('touchmove', preventTouchMove, { passive: false })

      return () => {
        // Restore body scroll
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''

        // Restore scroll position
        window.scrollTo(0, originalScrollY)

        // Remove touch event listener
        document.removeEventListener('touchmove', preventTouchMove)
      }
    }
  }, [isOpen])

  // Optimized scroll and keyboard handling with performance improvements
  useEffect(() => {
    if (!isOpen || !scrollContainerRef.current) return

    const container = scrollContainerRef.current

    // Throttled scroll handler for better performance
    let scrollTimeout: NodeJS.Timeout
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      // Clear previous timeout
      if (scrollTimeout) clearTimeout(scrollTimeout)

      // Throttle scroll updates for better performance
      scrollTimeout = setTimeout(() => {
        setScrollY((prevScrollY) => {
          let newScrollY = prevScrollY + e.deltaY * 0.6 // Reduced sensitivity for smoother feel

          // Normalize scroll position to create infinite loop
          while (newScrollY >= totalHeight) {
            newScrollY -= totalHeight
          }
          while (newScrollY < 0) {
            newScrollY += totalHeight
          }

          return newScrollY
        })
      }, 8) // 8ms throttle for ~120fps max update rate
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          e.preventDefault()
          onClose()
          break
        case 'ArrowUp':
          e.preventDefault()
          setScrollY((prevScrollY) => {
            let newScrollY = prevScrollY - 40 // Reduced step for smoother movement
            if (newScrollY < 0) newScrollY += totalHeight
            return newScrollY
          })
          break
        case 'ArrowDown':
          e.preventDefault()
          setScrollY((prevScrollY) => {
            let newScrollY = prevScrollY + 40 // Reduced step for smoother movement
            if (newScrollY >= totalHeight) newScrollY -= totalHeight
            return newScrollY
          })
          break
      }
    }

    // Use passive: false for wheel to allow preventDefault
    container.addEventListener('wheel', handleWheel, { passive: false })
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      container.removeEventListener('wheel', handleWheel)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, totalHeight, onClose])

  const handleLinkClick = (url: string) => {
    onNavigate(url)
  }

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-700 ease-out ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Optimized single-layer blur background */}
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-out ${
          isNavigating
            ? '-translate-y-full' // Slide up when navigating
            : isOpen
              ? 'translate-y-0' // Normal open state
              : '-translate-y-full' // Closed state
        }`}
        onClick={onClose}
      >
        {/* Single optimized blur layer for better Windows/PC performance */}
        <div
          className="absolute inset-0 bg-black/40"
          style={{
            backdropFilter: 'blur(16px) saturate(150%)',
            WebkitBackdropFilter: 'blur(16px) saturate(150%)',
            transform: 'translateZ(0)', // Force hardware acceleration
            willChange: 'backdrop-filter',
          }}
        />
      </div>

      {/* Menu content */}
      <div
        className={`relative z-10 h-full flex items-center justify-center transition-transform duration-700 ease-out ${
          isNavigating
            ? '-translate-y-full' // Slide up when navigating
            : isOpen
              ? 'translate-y-0' // Normal open state
              : '-translate-y-full' // Closed state
        }`}
      >
        <div ref={scrollContainerRef} className="h-full w-full overflow-hidden" tabIndex={0}>
          {/* Page wrapper alignment for consistent layout */}
          <div className="page-wrapper h-full flex flex-col relative">
            {/* Header with Logo and Close Button */}
            <div className="flex-shrink-0 pt-8 pb-4 flex justify-between items-start relative z-30">
              {/* Logo section */}
              <div className="flex items-center justify-start">
                <Image
                  src="/images/cc-logo-white-minimal.svg"
                  alt="C&C IDEA LAB Logo"
                  width={160}
                  height={64}
                  className="h-16 w-auto"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="text-white hover:text-gray-300 transition-colors text-lg font-medium bg-transparent border-none cursor-pointer p-2 -m-2"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            {/* Optimized infinite scroll container with performance improvements */}
            <div
              className="flex-1 flex flex-col justify-center"
              style={{
                transform: `translateY(-${scrollY}px)`,
                willChange: 'transform', // Optimize for transform animations
              }}
            >
              {/* Render optimized copies for seamless infinite scroll */}
              {Array.from({ length: 3 }, (_, copyIndex) => (
                <div key={copyIndex} className="flex flex-col">
                  {navItems.map((item, index) => (
                    <div
                      key={`${item.href}-${copyIndex}-${index}`}
                      className="text-left w-full flex items-center group cursor-pointer"
                      style={{
                        height: `${itemHeight}px`,
                        // Use transform3d for hardware acceleration
                        transform: 'translate3d(0, 0, 0)',
                      }}
                    >
                      {/* Number */}
                      <span className="text-white/50 text-lg font-light mr-6 min-w-[3rem] group-hover:text-white/70 transition-colors duration-300">
                        ({String(index + 1).padStart(2, '0')})
                      </span>

                      {/* Menu item */}
                      <button
                        onClick={() => handleLinkClick(item.href)}
                        className="text-4xl md:text-8xl lg:text-9xl font-semi-bold text-white/50 group-hover:text-white transition-colors duration-300 uppercase tracking-tight flex items-center h-full text-left w-full bg-transparent border-none cursor-pointer"
                        style={{
                          // Optimize text rendering
                          textRendering: 'optimizeSpeed',
                          fontDisplay: 'swap',
                        }}
                      >
                        {item.label.toUpperCase()}
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ESC instruction */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div
          className={`absolute top-1/2 right-8 transform -translate-y-1/2 text-white text-sm transition-all duration-500 ease-out ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
          style={{
            transitionDelay: isOpen ? '900ms' : '0ms',
          }}
        >
          <div className="writing-mode-vertical-rl text-orientation-mixed">Press ESC to close</div>
        </div>
      </div>
    </div>
  )
}
