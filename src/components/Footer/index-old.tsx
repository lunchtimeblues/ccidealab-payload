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
          {/* Large CTA Section */}
          <div className="mb-12 lg:mb-16 text-center">
            <ScrollRevealText>
              <h2 className="text-7xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-bold leading-none tracking-tight mb-4">
                Let&apos;s Work
              </h2>
            </ScrollRevealText>

            <ScrollRevealText delay={200}>
              <h2 className="text-7xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-bold leading-none tracking-tight mb-8">
                Together
              </h2>
            </ScrollRevealText>

            <ScrollRevealText delay={400}>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-6xl mx-auto leading-relaxed mb-8">
                Ready to create something extraordinary? We&apos;d love to hear about your vision
                and explore how we can bring it to life together.
              </p>
            </ScrollRevealText>

            <ScrollRevealText delay={600}>
              <PremiumTransitionLink
                url="/contact"
                label="Start a Project"
                appearance="default"
                transitionType="motto-wipe"
                transitionColor="#dc2626"
                className="px-16 py-8 text-2xl bg-white text-black hover:bg-gray-200 transition-all duration-300 inline-block rounded-full"
              />
            </ScrollRevealText>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800/50 pt-8 mt-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <ScrollRevealText delay={400}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                  <span className="text-3xl font-bold tracking-tight">MOTTO®</span>
                  <span className="text-gray-400 text-lg">© 2024 All rights reserved</span>
                </div>
              </ScrollRevealText>

              <ScrollRevealText delay={600}>
                <div className="flex flex-wrap items-center gap-6 lg:gap-8 text-gray-400">
                  <a href="#" className="hover:text-white transition-all duration-300">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-all duration-300">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-white transition-all duration-300">
                    Cookies
                  </a>
                  <span className="text-white font-mono tabular-nums">{currentTime}</span>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
