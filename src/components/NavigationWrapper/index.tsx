'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

import { AnimatedNav } from '@/components/AnimatedNav'
import { FullScreenMenu } from '@/components/FullScreenMenu'

interface NavItem {
  label: string
  href: string
  transitionType?: 'logoWipe'
  transitionColor?: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/', transitionType: 'logoWipe', transitionColor: '#000000' },
  { label: 'About', href: '/about', transitionType: 'logoWipe', transitionColor: '#edefa2' },
  { label: 'Work', href: '/work', transitionType: 'logoWipe', transitionColor: '#c9cfd1' },
  { label: 'Services', href: '/services', transitionType: 'logoWipe', transitionColor: '#CFC9BC' },
  { label: 'Contact', href: '/contact', transitionType: 'logoWipe', transitionColor: '#000000' },
]

export const NavigationWrapper = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const previousPathnameRef = useRef(pathname)

  // Listen for pathname changes to detect when navigation is complete
  useEffect(() => {
    // If pathname changed and we're navigating, the page has loaded
    if (isNavigating && pathname !== previousPathnameRef.current) {
      console.log('📄 Page loaded, pathname changed to:', pathname)

      // Clear any existing timeout
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current)
        navigationTimeoutRef.current = null
      }

      // Close menu after page load
      console.log('🎯 Closing menu after page load')
      setIsMenuOpen(false)
      setIsNavigating(false)
    }

    // Update the previous pathname reference
    previousPathnameRef.current = pathname
  }, [pathname, isNavigating])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current)
      }
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <AnimatedNav isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} navItems={navItems} />

      <FullScreenMenu
        isOpen={isMenuOpen}
        isNavigating={isNavigating}
        onClose={closeMenu}
        navItems={navItems}
      />
    </>
  )
}
