'use client'

import { useEffect, useRef, useState } from 'react'
import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { Container } from '@/components/Container'

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const footerRef = useRef<HTMLElement>(null)
  // const backgroundRef = useRef<HTMLDivElement>(null) // Unused ref
  // const textRef = useRef<HTMLDivElement>(null) // Unused ref

  // Update time every second
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

  // Scroll-based parallax effect (like wearemotto)
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      setScrollY(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse tracking for subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
      }
    }

    const footer = footerRef.current
    if (footer) {
      footer.addEventListener('mousemove', handleMouseMove)
      return () => footer.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative">
      {/* Create overlap effect */}
      <div className="h-screen bg-white relative z-10" />

      <footer
        ref={footerRef}
        className="fixed bottom-0 left-0 right-0 bg-black text-white overflow-hidden min-h-screen flex items-center z-0"
        style={{
          transform: `translateY(${Math.max(0, scrollY * 0.3)}px)`,
        }}
      >
        {/* Wearemotto-style Parallax Background */}
        <div className="absolute inset-0">
          {/* Wearemotto-style layered parallax */}
          <div
            className="absolute inset-0 opacity-8"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <div className="absolute top-1/4 left-1/6 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-[40rem] font-bold text-white select-none pointer-events-none leading-none">
                M
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-6"
            style={{
              transform: `translateY(${scrollY * 0.2}px) translateX(${mousePosition.x * 15}px)`,
            }}
          >
            <div className="absolute top-1/2 right-1/5 transform translate-x-1/2 -translate-y-1/2">
              <div className="text-[35rem] font-bold text-white select-none pointer-events-none leading-none">
                O
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-4"
            style={{
              transform: `translateY(${scrollY * 0.15}px) translateX(${mousePosition.y * 10}px)`,
            }}
          >
            <div className="absolute bottom-1/6 left-1/3 transform -translate-x-1/2 translate-y-1/2">
              <div className="text-[30rem] font-bold text-white select-none pointer-events-none leading-none">
                T
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-5"
            style={{
              transform: `translateY(${scrollY * 0.25}px)`,
            }}
          >
            <div className="absolute top-3/4 right-1/3 transform translate-x-1/2 -translate-y-1/2">
              <div className="text-[28rem] font-bold text-white select-none pointer-events-none leading-none">
                T
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-7"
            style={{
              transform: `translateY(${scrollY * 0.05}px) translateX(${mousePosition.x * 20}px)`,
            }}
          >
            <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-[32rem] font-bold text-white select-none pointer-events-none leading-none">
                O
              </div>
            </div>
          </div>

          {/* Floating elements with different speeds */}
          <div
            className="absolute top-1/5 right-1/4 w-40 h-40 border border-white/5 rounded-full"
            style={{
              transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.02}deg)`,
            }}
          />

          <div
            className="absolute bottom-1/4 left-1/6 w-32 h-32 border border-white/3"
            style={{
              transform: `translateY(${scrollY * -0.12}px) rotate(${scrollY * 0.03}deg)`,
            }}
          />

          <div
            className="absolute top-2/3 right-1/6 w-24 h-24 border border-white/4 rounded-full"
            style={{
              transform: `translateY(${scrollY * 0.18}px) translateX(${mousePosition.y * 5}px)`,
            }}
          />
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 px-6 py-24 lg:py-32 w-full">
          <Container size="lg">
            {/* Large CTA Section with Motto-style Animation */}
            <div className="mb-24 lg:mb-32 text-center">
              <div className="overflow-hidden">
                <ScrollRevealText>
                  <h2 className="text-7xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-bold leading-none tracking-tight mb-4 transform hover:scale-105 transition-transform duration-700 cursor-default">
                    Let&apos;s Work
                  </h2>
                </ScrollRevealText>
              </div>
              <div className="overflow-hidden">
                <ScrollRevealText delay={200}>
                  <h2 className="text-7xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-bold leading-none tracking-tight mb-16 transform hover:scale-105 transition-transform duration-700 cursor-default">
                    Together
                  </h2>
                </ScrollRevealText>
              </div>

              <ScrollRevealText delay={400}>
                <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                  Ready to create something extraordinary? We&apos;d love to hear about your vision and
                  explore how we can bring it to life together.
                </p>
              </ScrollRevealText>

              <ScrollRevealText delay={600}>
                <div className="group">
                  <PremiumTransitionLink
                    url="/contact"
                    label="Start a Project"
                    appearance="default"
                    transitionType="logoWipe"
                    transitionColor="#dc2626"
                    className="px-16 py-8 text-2xl bg-white text-black hover:bg-gray-200 transition-all duration-300 inline-block rounded-full group-hover:scale-105 transform"
                  />
                </div>
              </ScrollRevealText>
            </div>

            {/* Floating Navigation Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24">
              {/* Navigation */}
              <div className="group">
                <ScrollRevealText delay={200}>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                      Navigation
                    </h3>
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
                              transitionType="logoWipe"
                              transitionColor={item.color}
                              className="text-lg text-white hover:text-gray-300 transition-all duration-300 hover:translate-x-2 inline-block"
                            />
                          </ScrollRevealText>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollRevealText>
              </div>

              {/* Services */}
              <div className="group">
                <ScrollRevealText delay={400}>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                      Services
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'Brand Strategy',
                        'Visual Identity',
                        'Web Development',
                        'Digital Marketing',
                      ].map((service, index) => (
                        <li key={service}>
                          <ScrollRevealText delay={500 + index * 50}>
                            <span className="text-lg text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-2 inline-block">
                              {service}
                            </span>
                          </ScrollRevealText>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollRevealText>
              </div>

              {/* Contact Info */}
              <div className="group">
                <ScrollRevealText delay={600}>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                      Get in Touch
                    </h3>
                    <div className="space-y-4">
                      <ScrollRevealText delay={700}>
                        <a
                          href="mailto:hello@motto.com"
                          className="text-lg text-white hover:text-gray-300 transition-all duration-300 block hover:translate-x-2"
                        >
                          hello@motto.com
                        </a>
                      </ScrollRevealText>
                      <ScrollRevealText delay={750}>
                        <a
                          href="tel:+1234567890"
                          className="text-lg text-gray-300 hover:text-white transition-all duration-300 block hover:translate-x-2"
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
                </ScrollRevealText>
              </div>

              {/* Social & Time */}
              <div className="group">
                <ScrollRevealText delay={800}>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                      Connect
                    </h3>
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
                              className="text-lg text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                            >
                              {social.name}
                            </a>
                          ))}
                        </div>
                      </ScrollRevealText>

                      {/* Live Time */}
                      <ScrollRevealText delay={1000}>
                        <div className="pt-6 border-t border-gray-700">
                          <p className="text-sm text-gray-400 mb-1">New York Time</p>
                          <p className="text-xl font-mono text-white tabular-nums">{currentTime}</p>
                        </div>
                      </ScrollRevealText>
                    </div>
                  </div>
                </ScrollRevealText>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800/50 pt-12 mt-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <ScrollRevealText delay={400}>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                    <span className="text-3xl font-bold tracking-tight">MOTTO®</span>
                    <span className="text-gray-400 text-lg">© 2024 All rights reserved</span>
                  </div>
                </ScrollRevealText>

                <ScrollRevealText delay={600}>
                  <div className="flex flex-wrap items-center gap-6 lg:gap-8 text-gray-400">
                    <a
                      href="#"
                      className="hover:text-white transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="#"
                      className="hover:text-white transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      Terms of Service
                    </a>
                    <a
                      href="#"
                      className="hover:text-white transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      Cookies
                    </a>
                  </div>
                </ScrollRevealText>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </div>
  )
}
