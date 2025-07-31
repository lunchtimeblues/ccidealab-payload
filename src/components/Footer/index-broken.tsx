'use client'

import { useEffect, useRef, useState } from 'react'
import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'
import { ScrollRevealText } from '@/components/ScrollRevealText'

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const footerRef = useRef<HTMLElement>(null)

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Scroll-based parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Spacer to create the reveal effect */}
      <div className="h-screen bg-white relative z-10" />
      
      {/* Footer with parallax effect */}
      <footer 
        ref={footerRef}
        className="fixed bottom-0 left-0 right-0 bg-black text-white overflow-hidden min-h-screen flex items-center z-0"
        style={{
          transform: `translateY(${Math.max(0, scrollY * 0.3)}px)`,
        }}
      >
        {/* Main Footer Content */}
        <div className="relative z-10 px-6 py-24 lg:py-32 w-full">
          <div className="max-w-7xl mx-auto">
            
            {/* Large CTA Section */}
            <div className="mb-24 lg:mb-32 text-center">
              <div className="overflow-hidden">
                <ScrollRevealText>
                  <h2 className="text-7xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-bold leading-none tracking-tight mb-4 transform hover:scale-105 transition-transform duration-700 cursor-default">
                    Let's Work
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
                  Ready to create something extraordinary? We'd love to hear about your vision 
                  and explore how we can bring it to life together.
                </p>
              </ScrollRevealText>
              
              <ScrollRevealText delay={600}>
                <div className="group">
                  <PremiumTransitionLink
                    url="/contact"
                    label="Start a Project"
                    appearance="default"
                    transitionType="motto-wipe"
                    transitionColor="#dc2626"
                    className="px-16 py-8 text-2xl bg-white text-black hover:bg-gray-200 transition-all duration-300 inline-block rounded-full group-hover:scale-105 transform"
                  />
                </div>
              </ScrollRevealText>
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
                    <a href="#" className="hover:text-white transition-all duration-300 hover:translate-y-[-2px]">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-all duration-300 hover:translate-y-[-2px]">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-all duration-300 hover:translate-y-[-2px]">Cookies</a>
                    <span className="text-white font-mono tabular-nums">{currentTime}</span>
                  </div>
                </ScrollRevealText>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
