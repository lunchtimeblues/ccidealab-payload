'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { TransitionLink } from '@/components/TransitionLink'
import { HamburgerMenu } from '@/components/HamburgerMenu'
import Image from 'next/image'

interface NavItem {
  label: string
  href: string
  transitionType?: 'logoWipe'
  transitionColor?: string
}

interface AnimatedNavProps {
  navItems: NavItem[]
  isMenuOpen: boolean
  onToggleMenu: () => void
}

export const AnimatedNav: React.FC<AnimatedNavProps> = ({ navItems, isMenuOpen, onToggleMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isInHeroSection, setIsInHeroSection] = useState(true)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  // Check if we're on a project page under /work/
  const isProjectPage = pathname?.startsWith('/work/') && pathname !== '/work'

  // Determine navigation style based on page type and scroll position
  const shouldUseBlendMode = isProjectPage
    ? !isInHeroSection // On project pages: blend mode only after hero section
    : true // On other pages: always use blend mode

  const navStyle = shouldUseBlendMode
    ? { mixBlendMode: 'difference' as const }
    : { mixBlendMode: 'normal' as const }

  useEffect(() => {
    if (isMenuOpen) return // pause scroll detection while menu open

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 100) {
        setIsScrolled(true)
      } else if (currentScrollY < 50) {
        setIsScrolled(false)
      }

      // On project pages, detect if we're still in the hero section
      if (isProjectPage) {
        // Hero sections are typically viewport height (100vh)
        // Consider we're out of hero when scrolled more than 80% of viewport height
        const heroThreshold = window.innerHeight * 0.8
        setIsInHeroSection(currentScrollY < heroThreshold)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen, isProjectPage])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 py-2" style={navStyle}>
      <div className="page-wrapper flex items-center justify-between">
        {/* Logo */}
        <div
          className={`z-10 transition-all duration-300 ${
            isMenuOpen ? 'pointer-events-none opacity-50' : ''
          }`}
        >
          <TransitionLink url="/" appearance="inline" transitionType="logoWipe">
            <Image
              src="/images/cc-logo-white-medium.svg"
              alt="C&C IDEA LAB Logo"
              width={160}
              height={64}
              className="!h-16 sm:!h-36 w-auto max-w-[165px]"
            />
          </TransitionLink>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 mx-auto">
          {navItems.slice(0, -1).map((item, index) => (
            <div
              key={item.href}
              className={`text-white font-base transform transition-all duration-700 ease-out ${
                isScrolled || isMenuOpen
                  ? 'translate-y-[-100px] opacity-0 pointer-events-none'
                  : 'translate-y-0 opacity-100'
              }`}
              style={{
                transitionDelay: isScrolled || isMenuOpen ? `${index * 50}ms` : `${index * 150}ms`,
              }}
            >
              <TransitionLink
                url={item.href}
                label={item.label}
                appearance="inline"
                transitionType={item.transitionType}
                transitionColor={item.transitionColor}
                className="text-fluid-sm"
              />
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="relative flex items-center justify-end min-w-[160px]">
          {/* Desktop: Animated Contact and Menu */}
          <div className="hidden md:block relative">
            {/* Contact */}
            <div
              className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all text-white font-base ${
                isScrolled
                  ? 'transform -translate-x-[80px] -translate-y-1/2 opacity-100 duration-300'
                  : 'transform translate-x-0 -translate-y-1/2 opacity-100 duration-700'
              } ${isMenuOpen ? 'opacity-0 pointer-events-none' : ''}`}
              style={{
                transitionTimingFunction: isScrolled
                  ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  : 'cubic-bezier(0.85, 0, 0.15, 0.8)',
                transitionDelay: isScrolled ? '0ms' : '200ms',
              }}
            >
              <TransitionLink
                url="/contact"
                label="Contact"
                appearance="inline"
                transitionType="logoWipe"
                transitionColor="#666666ff"
                className="text-fluid-sm animated-underline"
              />
            </div>

            <div
              className={`absolute right-0 top-1/2 -translate-y-1/2 transition-opacity ${
                isScrolled
                  ? 'opacity-100 duration-200'
                  : 'opacity-0 pointer-events-none duration-300'
              }`}
              style={{
                transitionDelay: isScrolled ? '100ms' : '0ms',
              }}
            >
              <HamburgerMenu isOpen={isMenuOpen} onClick={onToggleMenu} />
            </div>
          </div>

          {/* Mobile: Both Contact and Menu always visible */}
          <div className="flex md:hidden items-center space-x-6">
            <div className={`text-white font-base ${isMenuOpen ? 'opacity-50' : ''}`}>
              <TransitionLink
                url="/contact"
                label="Contact"
                appearance="inline"
                transitionType="logoWipe"
                transitionColor="#666666ff"
                className="text-fluid-sm animated-underline"
              />
            </div>
            <HamburgerMenu isOpen={isMenuOpen} onClick={onToggleMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}
