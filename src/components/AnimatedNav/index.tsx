'use client'

import { useEffect, useState, useRef } from 'react'
import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'
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
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (isMenuOpen) return // pause scroll detection while menu open

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 100) {
        setIsScrolled(true)
      } else if (currentScrollY < 50) {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="page-wrapper flex items-center">
        {/* Logo */}
        <div
          className={`z-10 transition-all duration-300 ${
            isMenuOpen ? 'pointer-events-none opacity-50' : ''
          }`}
        >
          <div style={{ filter: 'invert(1)' }}>
            <PremiumTransitionLink url="/" appearance="inline" transitionType="logoWipe">
              <Image
                src="/images/cc-logo-black-full.svg"
                alt="C&C IDEA LAB Logo"
                width={160}
                height={64}
                className="h-16 w-auto"
              />
            </PremiumTransitionLink>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="flex items-center space-x-8 mx-auto">
          {navItems.slice(0, -1).map((item, index) => (
            <div
              key={item.href}
              className={`transform transition-all duration-700 ease-out ${
                isScrolled || isMenuOpen
                  ? 'translate-y-[-100px] opacity-0 pointer-events-none'
                  : 'translate-y-0 opacity-100'
              }`}
              style={{
                transitionDelay: isScrolled || isMenuOpen ? `${index * 50}ms` : `${index * 150}ms`,
              }}
            >
              <div style={{ filter: 'invert(1)' }}>
                <PremiumTransitionLink
                  url={item.href}
                  label={item.label}
                  appearance="inline"
                  transitionType={item.transitionType}
                  transitionColor={item.transitionColor}
                  className="text-black hover:text-gray-600 transition-colors text-lg font-medium"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="relative flex items-center min-w-[80px]">
          {/* Contact */}
          <div
            className={`absolute right-0 transition-all ${
              isScrolled
                ? 'transform -translate-x-[80px] opacity-100 duration-300'
                : 'transform translate-x-0 opacity-100 duration-700'
            } ${isMenuOpen ? 'opacity-0 pointer-events-none' : ''}`}
            style={{
              transitionTimingFunction: isScrolled
                ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                : 'cubic-bezier(0.85, 0, 0.15, 0.8)',
              transitionDelay: isScrolled ? '0ms' : '200ms',
            }}
          >
            <div style={{ filter: 'invert(1)' }}>
              <PremiumTransitionLink
                url="/contact"
                label="Contact"
                appearance="inline"
                transitionType="logoWipe"
                transitionColor="#666666ff"
                className="text-black hover:text-gray-600 transition-colors text-lg font-medium"
              />
            </div>
          </div>

          {/* Hamburger */}
          <div
            className={`absolute right-0 transition-opacity ${
              isScrolled ? 'opacity-100 duration-200' : 'opacity-0 pointer-events-none duration-300'
            }`}
            style={{
              transitionDelay: isScrolled ? '100ms' : '0ms',
            }}
          >
            <HamburgerMenu isOpen={isMenuOpen} onClick={onToggleMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}
