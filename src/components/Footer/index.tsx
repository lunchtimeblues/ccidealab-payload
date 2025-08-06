'use client'

import { useEffect, useState, useRef } from 'react'
import { ScrollRevealText } from '@/components/ScrollRevealText'

export const Footer = () => {
  const [_currentTime, setCurrentTime] = useState('')
  const [year, setYear] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      // Vancouver timezone
      const timeString = now.toLocaleTimeString('en-CA', {
        timeZone: 'America/Vancouver',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })

      const yearString = now.toLocaleDateString('en-CA', {
        timeZone: 'America/Vancouver',
        year: 'numeric',
      })

      setCurrentTime(timeString)
      setYear(yearString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Footer animation based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return

      const footer = footerRef.current
      const footerTop = footer.offsetTop
      const windowHeight = window.innerHeight
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight
      const maxScroll = documentHeight - windowHeight

      // Calculate when footer should start animating
      const triggerPoint = footerTop - windowHeight

      // Improved calculation that ensures we reach 1.0 at the bottom
      let scrollProgress
      if (scrollTop <= triggerPoint) {
        scrollProgress = 0
      } else if (scrollTop >= maxScroll) {
        // Ensure we reach exactly 1.0 when at the bottom of the page
        scrollProgress = 1
      } else {
        // Calculate progress between trigger point and max scroll
        const availableScrollDistance = maxScroll - triggerPoint
        scrollProgress = Math.max(0, Math.min(1, (scrollTop - triggerPoint) / availableScrollDistance))
      }

      setScrollY(scrollProgress)
    }

    // Listen for both regular scroll and Lenis scroll events
    const handleLenisScroll = (_e: CustomEvent) => {
      handleScroll()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('lenis-scroll', handleLenisScroll as EventListener)

    // Initial calculation
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('lenis-scroll', handleLenisScroll as EventListener)
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className="bg-[#151515] text-white px-6 md:px-12 pt-24 pb-10 text-sm relative"
      style={{
        // Wearemotto-style footer animation: starts at -35% and moves to +5% for full visibility
        transform: `translate3d(0px, ${-35 + (scrollY * 40)}%, 0px)`,
      }}
    >
      {/* Logo & Newsletter */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16">
        {/* Logo + Name */}
        <div className="flex items-center gap-4 mb-8 md:mb-0">
          <div className="w-6 h-6 bg-white" /> {/* Replace with your logo */}
          <h1 className="text-4xl font-bold">
            <sup className="text-xs align-super">®</sup>
          </h1>
        </div>

        {/* Email Signup */}
        <div className="max-w-md w-full">
          <ScrollRevealText delay={0}>
            <p className="text-gray-400 mb-3">
              Get valuable strategy, culture, and brand insights straight to your inbox.
            </p>
          </ScrollRevealText>

          <form className="flex items-center border-b border-gray-600">
            <input
              type="email"
              placeholder="Your email here"
              className="bg-transparent flex-1 py-2 placeholder-gray-500 text-white outline-none"
            />
            <button type="submit" className="text-white text-xl px-2">
              →
            </button>
          </form>

          <p className="text-gray-500 text-xs mt-2">
            By signing up to receive emails from Motto, you agree to our{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            . We treat your info responsibly.
          </p>
        </div>
      </div>

      <hr className="border-gray-700 mb-16" />

      {/* Footer Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div>
          <ScrollRevealText>
            <h4 className="font-semibold text-white mb-4">Company</h4>
          </ScrollRevealText>
          <ul className="space-y-1 text-gray-400">
            {['Home', 'What We Do', 'About', 'Method', 'Work', 'Contact'].map((item, idx) => (
              <li key={item}>
                <ScrollRevealText delay={100 + idx * 50}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </ScrollRevealText>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ScrollRevealText>
            <h4 className="font-semibold text-white mb-4">Discover</h4>
          </ScrollRevealText>
          <ul className="space-y-1 text-gray-400">
            {['Engagements', 'Speaking', 'VisionCamp®', 'Our Book', 'Shop', 'Shows'].map(
              (item, idx) => (
                <li key={item}>
                  <ScrollRevealText delay={100 + idx * 50}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </ScrollRevealText>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <ScrollRevealText>
            <h4 className="font-semibold text-white mb-4">Learn</h4>
          </ScrollRevealText>
          <ul className="space-y-1 text-gray-400">
            {['Blog', 'Press & Media', 'Clients', 'Testimonials', 'FAQs', 'Careers'].map(
              (item, idx) => (
                <li key={item}>
                  <ScrollRevealText delay={100 + idx * 50}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </ScrollRevealText>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-500 text-xs">
        <ScrollRevealText delay={0}>
          <p>© 2005—{year} C/CIDEALAB® | NYC | DAL | LDN</p>
        </ScrollRevealText>

        <ScrollRevealText delay={200}>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Replace with real icons */}
            <a href="#" className="hover:text-white">
              in
            </a>
            <a href="#" className="hover:text-white">
              ig
            </a>
            <a href="#" className="hover:text-white">
              yt
            </a>
          </div>
        </ScrollRevealText>

        <ScrollRevealText delay={400}>
          <a href="#" className="mt-4 md:mt-0 hover:text-white">
            Back to top ↑
          </a>
        </ScrollRevealText>
      </div>
    </footer>
  )
}
