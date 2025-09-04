'use client'

import { useEffect, useRef, memo } from 'react'
import Image from 'next/image'
import { TransitionLink } from '@/components/TransitionLink'

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
  navItems: NavItem[]
}

const MenuGroup = memo(
  ({
    navItems,
    copyIndex,
    onClose,
  }: {
    navItems: NavItem[]
    copyIndex: number
    onClose: () => void
  }) => (
    <div className="flex flex-col">
      {navItems.map((item, index) => (
        <div
          key={`${item.href}-${copyIndex}-${index}`}
          className="text-left w-full flex items-center group cursor-pointer h-[150px] md:h-[175px]"
          style={{
            transform: 'translate3d(0,0,0)',
            willChange: 'transform',
          }}
        >
          {/* Number */}
          <span className="text-white/50 text-lg font-light mr-6 min-w-[3rem] group-hover:text-white/70 transition-colors duration-300">
            ({String(index + 1).padStart(2, '0')})
          </span>

          {/* Menu item */}
          <div className="text-fluid-8xl">
            <TransitionLink
              url={item.href}
              onClick={onClose}
              className="font-semi-bold text-white/20 group-hover:text-white transition-colors duration-300 uppercase tracking-tight flex items-center h-full text-left w-full bg-transparent border-none cursor-pointer"
              transitionType={item.transitionType || 'logoWipe'}
              transitionColor={item.transitionColor}
            >
              {item.label.toUpperCase()}
            </TransitionLink>
          </div>
        </div>
      ))}
    </div>
  ),
)
MenuGroup.displayName = 'MenuGroup'

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({
  isOpen,
  isNavigating,
  onClose,
  navItems,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  // Commented out for single menu group display
  // const [scrollY, setScrollY] = useState(0)
  // const itemHeight = 140
  // const totalHeight = navItems.length * itemHeight

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      const originalScrollY = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${originalScrollY}px`
      document.body.style.width = '100%'

      const preventTouchMove = (e: TouchEvent) => e.preventDefault()
      document.addEventListener('touchmove', preventTouchMove, { passive: false })

      return () => {
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.removeEventListener('touchmove', preventTouchMove)
      }
    }
  }, [isOpen])

  // Scroll & keyboard handling - COMMENTED OUT FOR SINGLE MENU GROUP
  // useEffect(() => {
  //   if (!isOpen || !scrollContainerRef.current) return
  //   const container = scrollContainerRef.current
  //   let rafId: number

  //   const updateScroll = (delta: number) => {
  //     setScrollY((prev) => {
  //       let newScrollY = prev + delta
  //       while (newScrollY >= totalHeight) newScrollY -= totalHeight
  //       while (newScrollY < 0) newScrollY += totalHeight
  //       return newScrollY
  //     })
  //   }

  //   const handleWheel = (e: WheelEvent) => {
  //     e.preventDefault()
  //     if (rafId) cancelAnimationFrame(rafId)
  //     rafId = requestAnimationFrame(() => updateScroll(e.deltaY * 0.6))
  //   }

  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (!isOpen) return
  //     switch (e.key) {
  //       case 'Escape':
  //         e.preventDefault()
  //         onClose()
  //         break
  //       case 'ArrowUp':
  //         e.preventDefault()
  //         updateScroll(-40)
  //         break
  //       case 'ArrowDown':
  //         e.preventDefault()
  //         updateScroll(40)
  //         break
  //     }
  //   }

  //   container.addEventListener('wheel', handleWheel, { passive: false })
  //   document.addEventListener('keydown', handleKeyDown)

  //   return () => {
  //     if (rafId) cancelAnimationFrame(rafId)
  //     container.removeEventListener('wheel', handleWheel)
  //     document.removeEventListener('keydown', handleKeyDown)
  //   }
  // }, [isOpen, totalHeight, onClose])

  // Simple keyboard handling for ESC key only
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-700 ease-out ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-out ${
          isNavigating ? '-translate-y-full' : isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black" />
      </div>

      {/* Menu */}
      <div
        className={`relative z-10 h-full flex items-center justify-center transition-transform duration-700 ease-out ${
          isNavigating ? '-translate-y-full' : isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div
          ref={scrollContainerRef}
          className="h-full w-full overflow-hidden relative"
          tabIndex={0}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-30">
            <div className="page-wrapper py-8 flex justify-between items-center">
              <div className="flex items-center justify-start">
                <Image
                  src="/images/cc-logo-white-minimal.svg"
                  alt="C&C IDEA LAB Logo"
                  width={160}
                  height={64}
                  className="!h-12 sm:!h-24 w-auto max-w-[165px]"
                />
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-300 transition-colors text-fluid-base font-medium bg-transparent border-none cursor-pointer"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
          </div>

          {/* Items */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="page-wrapper w-full">
              <div className="flex flex-col justify-center">
                {Array.from({ length: 1 }, (_, copyIndex) => (
                  <MenuGroup
                    key={copyIndex}
                    navItems={navItems}
                    copyIndex={copyIndex}
                    onClose={onClose}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ESC tip */}
      <div className="absolute inset-0 pointer-events-none z-40">
        <div
          className={`absolute top-1/2 right-16 transform -translate-y-1/2 text-white text-sm transition-all duration-500 ease-out ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
          style={{ transitionDelay: isOpen ? '900ms' : '0ms' }}
        >
          <div className="hidden md:block text-fluid-xs writing-mode-vertical-rl text-orientation-mixed">
            Press ESC to close
          </div>
        </div>
      </div>
    </div>
  )
}
