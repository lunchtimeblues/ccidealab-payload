'use client'

import { useEffect, useState } from 'react'
import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'
import { ScrollRevealText } from '@/components/ScrollRevealText'

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState('')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Listen for Lenis scroll events
    const handleLenisScroll = (e: CustomEvent) => {
      setScrollY(e.detail.scroll)
    }

    // Listen for custom Lenis scroll event
    window.addEventListener('lenis-scroll', handleLenisScroll as EventListener)

    // Fallback to regular scroll for compatibility
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('lenis-scroll', handleLenisScroll as EventListener)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <footer
      className="bg-black text-white overflow-hidden min-h-screen relative z-0"
      style={{
        marginTop: `-100vh`,
        transform: `translateY(${scrollY * 0.1}px)`,
      }}
    >
      <div className="relative z-10 px-6 py-12 lg:py-16 w-full h-full flex flex-col justify-center">
        <div className="max-w-screen-2xl mx-auto">
          {/* Footer Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Navigation */}
            <div>
              <ScrollRevealText delay={200}>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                  Navigation
                </h3>
              </ScrollRevealText>
              <ul className="space-y-4">
                {[
                  { label: 'Work', href: '/work', color: '#1f2937' },
                  { label: 'About', href: '/about', color: '#7c3aed' },
                  { label: 'Services', href: '/services', color: '#059669' },
                  { label: 'Contact', href: '/contact', color: '#dc2626' },
                ].map((item, index) => (
                  <li key={item.href}>
                    <ScrollRevealText delay={300 + index * 50}>
                      <PremiumTransitionLink
                        url={item.href}
                        label={item.label}
                        appearance="inline"
                        transitionType="motto-wipe"
                        transitionColor={item.color}
                        className="text-lg text-white hover:text-gray-300 transition-colors"
                      />
                    </ScrollRevealText>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <ScrollRevealText delay={400}>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                  Services
                </h3>
              </ScrollRevealText>
              <ul className="space-y-4">
                {[
                  'Brand Strategy',
                  'Visual Identity',
                  'Web Development',
                  'Digital Marketing',
                  'Creative Direction',
                ].map((service, index) => (
                  <li key={service}>
                    <ScrollRevealText delay={500 + index * 50}>
                      <span className="text-lg text-gray-300 hover:text-white transition-colors cursor-pointer">
                        {service}
                      </span>
                    </ScrollRevealText>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <ScrollRevealText delay={600}>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                  Get in Touch
                </h3>
              </ScrollRevealText>
              <div className="space-y-4">
                <ScrollRevealText delay={700}>
                  <a
                    href="mailto:hello@motto.com"
                    className="text-lg text-white hover:text-gray-300 transition-colors block"
                  >
                    hello@motto.com
                  </a>
                </ScrollRevealText>
                <ScrollRevealText delay={750}>
                  <a
                    href="tel:+1234567890"
                    className="text-lg text-gray-300 hover:text-white transition-colors block"
                  >
                    +1 (234) 567-890
                  </a>
                </ScrollRevealText>
                <ScrollRevealText delay={800}>
                  <address className="text-lg text-gray-300 not-italic leading-relaxed">
                    123 Design Street
                    <br />
                    Creative District
                    <br />
                    New York, NY 10001
                  </address>
                </ScrollRevealText>
              </div>
            </div>

            {/* Social & Time */}
            <div>
              <ScrollRevealText delay={800}>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                  Connect
                </h3>
              </ScrollRevealText>
              <div className="space-y-4">
                <ScrollRevealText delay={900}>
                  <div className="flex flex-col space-y-3">
                    {[
                      { name: 'Instagram', url: '#' },
                      { name: 'Twitter', url: '#' },
                      { name: 'LinkedIn', url: '#' },
                      { name: 'Dribbble', url: '#' },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="text-lg text-gray-300 hover:text-white transition-colors"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </ScrollRevealText>

                {/* Live Time */}
                <ScrollRevealText delay={1000}>
                  <div className="pt-6 border-t border-gray-800">
                    <p className="text-sm text-gray-400 mb-1">New York Time</p>
                    <p className="text-xl font-mono text-white tabular-nums">{currentTime}</p>
                  </div>
                </ScrollRevealText>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Back to Top */}
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <ScrollRevealText delay={400}>
                <div className="flex items-center space-x-8">
                  <span className="text-2xl font-bold">MOTTO®</span>
                  <span className="text-gray-400">© 2024 All rights reserved</span>
                </div>
              </ScrollRevealText>

              <ScrollRevealText delay={600}>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-8 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      Cookies
                    </a>
                  </div>

                  {/* Back to Top Button */}
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 text-sm text-white hover:text-gray-200"
                  >
                    <span>Back to Top</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </button>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
