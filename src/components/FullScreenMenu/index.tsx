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
  const [touchStartY, setTouchStartY] = useState(0)

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

  // Scroll and keyboard handling
  useEffect(() => {
    if (!isOpen || !scrollContainerRef.current) return

    const container = scrollContainerRef.current

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault() // Prevent default scroll behavior

      setScrollY((prevScrollY) => {
        let newScrollY = prevScrollY + e.deltaY * 0.5 // Slower, smoother scrolling

        // Simple modulo-based wrapping for smoother transitions
        newScrollY = ((newScrollY % totalHeight) + totalHeight) % totalHeight

        return newScrollY
      })
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
            let newScrollY = prevScrollY - itemHeight
            newScrollY = ((newScrollY % totalHeight) + totalHeight) % totalHeight
            return newScrollY
          })
          break
        case 'ArrowDown':
          e.preventDefault()
          setScrollY((prevScrollY) => {
            let newScrollY = prevScrollY + itemHeight
            newScrollY = ((newScrollY % totalHeight) + totalHeight) % totalHeight
            return newScrollY
          })
          break
      }
    }

    // Touch event handlers for mobile
    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault() // Prevent default scroll

      const touchY = e.touches[0].clientY
      const deltaY = touchStartY - touchY

      setScrollY((prevScrollY) => {
        let newScrollY = prevScrollY + deltaY * 0.3 // Slower scroll for touch

        // Simple modulo-based wrapping
        newScrollY = ((newScrollY % totalHeight) + totalHeight) % totalHeight

        return newScrollY
      })

      setTouchStartY(touchY)
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('touchstart', handleTouchStart, { passive: false })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, totalHeight, onClose, touchStartY])

  const handleLinkClick = (url: string) => {
    onNavigate(url)
  }

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-700 ease-out ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Multi-layer blur background */}
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
        {/* Enhanced blur background with multiple layers */}
        <div className="absolute inset-0 fullscreen-menu-blur bg-black/30" />

        {/* Additional blur layer for extra depth */}
        <div
          className="absolute inset-0 backdrop-blur-xl bg-black/20"
          style={{
            backdropFilter: 'blur(24px) saturate(200%) contrast(120%)',
            WebkitBackdropFilter: 'blur(24px) saturate(200%) contrast(120%)',
          }}
        />

        {/* Subtle gradient overlay for visual depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />
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
                className="text-white hover:text-white transition-colors text-lg font-medium bg-transparent border-none cursor-pointer p-2 -m-2"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            {/* Transform container for smooth infinite scroll */}
            <div
              className="flex-1 flex flex-col justify-center"
              style={{
                transform: `translateY(-${scrollY}px)`,
              }}
            >
              {/* Render multiple copies for seamless loop */}
              {Array.from({ length: 3 }, (_, copyIndex) => (
                <div
                  key={copyIndex}
                  className="flex flex-col"
                >
                  {navItems.map((item, index) => (
                    <div
                      key={`${item.href}-${copyIndex}-${index}`}
                      className="text-left w-full flex items-center group cursor-pointer"
                      style={{ height: `${itemHeight}px` }}
                    >
                      {/* Number */}
                      <span className="text-white/50 text-lg font-light mr-6 min-w-[3rem] group-hover:text-white/70 transition-colors duration-300">
                        ({String(index + 1).padStart(2, '0')})
                      </span>

                      {/* Menu item */}
                      <button
                        onClick={() => handleLinkClick(item.href)}
                        className="text-4xl md:text-8xl lg:text-9xl font-semi-bold text-white/50 group-hover:text-white transition-colors duration-300 uppercase tracking-tight flex items-center h-full text-left w-full bg-transparent border-none cursor-pointer"
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
