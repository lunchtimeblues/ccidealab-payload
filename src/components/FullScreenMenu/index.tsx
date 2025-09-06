'use client'

import { useEffect, useRef, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TransitionLink } from '@/components/TransitionLink'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

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
    <div
      className={`grid`}
      style={{
        gridTemplateRows: `repeat(${navItems.length}, 1fr)`,
      }}
    >
      {navItems.map((item, index) => (
        <div
          key={`${item.href}-${copyIndex}-${index}`}
          className="flex items-center group cursor-pointer"
        >
          <span className="text-white/50 text-lg font-light mr-6 min-w-[3rem] group-hover:text-white/70 transition-colors duration-300">
            ({String(index + 1).padStart(2, '0')})
          </span>
          <div className="text-fluid-5xl">
            <TransitionLink
              url={item.href}
              onClick={onClose}
              className="font-semi-bold text-white/20 group-hover:text-white transition-colors duration-300 uppercase tracking-tight flex items-center h-full w-full bg-transparent border-none cursor-pointer"
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
        window.scrollTo(0, originalScrollY)
      }
    }
  }, [isOpen])

  // ESC key closes menu
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

      {/* Menu layout */}
      <div
        className={`relative z-10 flex flex-col transition-transform duration-700 ease-out bg-black ${
          isNavigating ? '-translate-y-full' : isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Header */}
        <div className="flex-shrink-0 z-30">
          <div className="page-wrapper flex justify-between items-center py-8">
            <div className="flex items-center justify-start">
              <Image
                src="/images/cc-logo-white-minimal.svg"
                alt="C&C IDEA LAB Logo"
                width={120}
                height={48}
                className="!h-8 sm:!h-12 md:!h-16 w-auto max-w-[165px]"
              />
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors text-fluid-sm md:text-fluid-base font-medium bg-transparent border-none cursor-pointer"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
        </div>

        {/* Menu items with grid */}
        <div className="flex-1">
          <div className="page-wrapper w-full">
            <MenuGroup navItems={navItems} copyIndex={0} onClose={onClose} />
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
