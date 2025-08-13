'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const exitAnimationTime = 700 // ms — match your CSS transition

  const navigateWithMenuTransition = (url: string) => {
    console.log('🔗 Navigating to:', url)

    // Trigger exit animation
    setIsNavigating(true)

    // Wait for animation to complete, then navigate
    setTimeout(() => {
      console.log('⏰ Animation complete, starting navigation')
      router.push(url)

      // Wait longer for page to actually load before closing menu
      setTimeout(() => {
        console.log('📄 Page should be loaded, closing menu')
        setIsMenuOpen(false)
        setIsNavigating(false)
      }, 1500) // Additional delay for page load
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
        onNavigate={navigateWithMenuTransition}
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
