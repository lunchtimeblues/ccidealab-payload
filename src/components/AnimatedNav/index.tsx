'use client'

import { useEffect, useState, useRef } from 'react'
import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'
import { HamburgerMenu } from '@/components/HamburgerMenu'
import { FullScreenMenu } from '@/components/FullScreenMenu'

interface NavItem {
  label: string
  href: string
  transitionType?: 'logoWipe'
  transitionColor?: string
}

const navItems: NavItem[] = [
  { label: 'Work', href: '/work', transitionType: 'logoWipe', transitionColor: '#1f2937' },
  { label: 'About', href: '/about', transitionType: 'logoWipe', transitionColor: '#7c3aed' },
  {
    label: 'Services',
    href: '/services',
    transitionType: 'logoWipe',
    transitionColor: '#059669',
  },
  { label: 'Contact', href: '/contact', transitionType: 'logoWipe', transitionColor: '#dc2626' },
]

export const AnimatedNav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show hamburger when scrolled down, hide when at top
      if (currentScrollY > 100) {
        setIsScrolled(true)
      } else if (currentScrollY < 50) {
        setIsScrolled(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled ? 'backdrop-blur-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="relative z-10">
            <PremiumTransitionLink
              url="/"
              label="C/C IDEA LAB"
              appearance="inline"
              transitionType="logoWipe"
              className="text-2xl font-bold text-black hover:text-gray-600 transition-colors"
            />
          </div>

          {/* Desktop Navigation Items - Visible at top, hidden when scrolled */}
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className={`transform transition-all duration-700 ease-out ${
                  isScrolled
                    ? 'translate-y-[-100px] opacity-0 pointer-events-none'
                    : 'translate-y-0 opacity-100'
                }`}
                style={{
                  transitionDelay: isScrolled
                    ? `${index * 50}ms`
                    : `${(navItems.length - index - 1) * 150}ms`,
                }}
              >
                <PremiumTransitionLink
                  url={item.href}
                  label={item.label}
                  appearance="inline"
                  transitionType={item.transitionType}
                  transitionColor={item.transitionColor}
                  className="text-black hover:text-gray-600 transition-colors text-lg font-medium"
                />
              </div>
            ))}
          </div>

          {/* Right side - Hamburger menus */}
          <div className="flex items-center">
            {/* Mobile Hamburger - Only appears when scrolled down */}
            <div
              className={`lg:hidden transition-all duration-700 ease-out ${
                isScrolled
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-20px] pointer-events-none'
              }`}
            >
              <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
            </div>

            {/* Desktop Hamburger - Only appears when scrolled down */}
            <div
              className={`hidden lg:block transition-all duration-700 ease-out ${
                isScrolled
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[-20px] pointer-events-none'
              }`}
            >
              <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
      />
    </>
  )
}
