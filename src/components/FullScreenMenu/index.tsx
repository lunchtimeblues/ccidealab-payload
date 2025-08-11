'use client'

import { useEffect } from 'react'
import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'

interface NavItem {
  label: string
  href: string
  transitionType?: 'logoWipe'
  transitionColor?: string
}

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose, navItems }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-700 ease-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-black transition-all duration-700 ease-out ${
          isOpen ? 'opacity-95' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Menu content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        {/* Main navigation */}
        <nav className="text-center">
          <ul className="space-y-8 md:space-y-12">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={`transform transition-all duration-700 ease-out ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 100 + 200}ms` : '0ms',
                }}
              >
                <PremiumTransitionLink
                  url={item.href}
                  label={item.label}
                  appearance="inline"
                  transitionType="logoWipe"
                  transitionColor={item.transitionColor}
                  className="text-2xl md:text-4xl lg:text-4xl font-bold text-white hover:text-gray-300 transition-colors duration-300 block"
                  onClick={handleLinkClick}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Additional menu items */}
        <div
          className={`mt-16 md:mt-24 text-center transform transition-all duration-700 ease-out ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{
            transitionDelay: isOpen ? `${navItems.length * 100 + 400}ms` : '0ms',
          }}
        >
          <div className="space-y-4 text-lg md:text-xl text-gray-300">
            <div>
              <a href="mailto:hello@motto.com" className="hover:text-white transition-colors">
                hello@ccidealab.com
              </a>
            </div>
            <div>
              <a href="tel:+1234567890" className="hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div
          className={`mt-12 md:mt-16 flex space-x-8 transform transition-all duration-700 ease-out ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{
            transitionDelay: isOpen ? `${navItems.length * 100 + 600}ms` : '0ms',
          }}
        >
          {['Instagram', 'Twitter', 'LinkedIn', 'Dribbble'].map((social) => (
            <a
              key={social}
              href={`#${social.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
            >
              {social}
            </a>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-8 right-8 text-white hover:text-gray-300 transition-all duration-700 ease-out text-lg font-medium ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{
            transitionDelay: isOpen ? '100ms' : '0ms',
          }}
        >
          Close
        </button>

        {/* ESC instruction */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm transition-all duration-700 ease-out ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{
            transitionDelay: isOpen ? `${navItems.length * 100 + 800}ms` : '0ms',
          }}
        >
          Press ESC to close
        </div>
      </div>
    </div>
  )
}
