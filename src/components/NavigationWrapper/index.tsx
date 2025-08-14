'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { usePremiumPageTransition } from '@/hooks/usePremiumPageTransition'
import { AnimatedNav } from '@/components/AnimatedNav'
import { FullScreenMenu } from '@/components/FullScreenMenu'

interface NavItem {
  label: string
  href: string
  transitionType?: 'logoWipe'
  transitionColor?: string
}

const navItems: NavItem[] = [
  { label: 'Work', href: '/work', transitionType: 'logoWipe', transitionColor: '#059669' },
  { label: 'About', href: '/about', transitionType: 'logoWipe', transitionColor: '#7c3aed' },
  { label: 'Services', href: '/services', transitionType: 'logoWipe', transitionColor: '#dc2626' },
  { label: 'Contact', href: '/contact', transitionType: 'logoWipe', transitionColor: '#666666ff' },
]

export const NavigationWrapper = () => {

  const pathname = usePathname()
  const { navigateWithTransition } = usePremiumPageTransition()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const previousPathnameRef = useRef(pathname)
  const exitAnimationTime = 700 // ms — match your CSS transition

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

  const navigateWithMenuTransition = (url: string) => {
    console.log('🔗 Navigating to:', url)

    // Don't navigate if we're already on this page
    if (pathname === url) {
      console.log('🚫 Already on this page, just closing menu')
      setIsMenuOpen(false)
      return
    }

    // Find the nav item to get its transition color
    const navItem = navItems.find(item => item.href === url)
    const transitionColor = navItem?.transitionColor || '#000'

    // Trigger exit animation
    setIsNavigating(true)

    // Wait for animation to complete, then start logo wipe transition
    setTimeout(() => {
      console.log('⏰ Animation complete, starting logo wipe navigation')

      // Use the premium transition with the item's color
      navigateWithTransition(url, 'logoWipe', transitionColor)

      // Set a fallback timeout in case pathname change detection fails
      navigationTimeoutRef.current = setTimeout(() => {
        console.log('⚠️ Fallback timeout reached, closing menu')
        setIsMenuOpen(false)
        setIsNavigating(false)
      }, 3000) // 3 second fallback
    }, exitAnimationTime)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <AnimatedNav
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
        navItems={navItems}
      />

      <FullScreenMenu
        isOpen={isMenuOpen}
        isNavigating={isNavigating}
        onClose={closeMenu}
        onNavigate={navigateWithMenuTransition}
        navItems={navItems}
      />
    </>
  )
}
