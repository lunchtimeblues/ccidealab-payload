'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { SmoothScrollButton } from '@/components/SmoothScrollButton'
import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa'

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
        scrollProgress = Math.max(
          0,
          Math.min(1, (scrollTop - triggerPoint) / availableScrollDistance),
        )
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
      className="bg-[#151515] text-white px-6 md:px-12 pt-32 sm:pt-32 pb-12 sm:pb-16 md:pb-20 text-fluid-xs relative flex flex-col justify-center"
      style={{
        // Very minimal transform to ensure bottom content stays visible
        transform: `translate3d(0px, ${-25 + scrollY * 25}%, 0px)`,
      }}
    >
      {/* Logo & Contact Information */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16 sm:mb-24">
        {/* Logo + Name */}
        <ScrollRevealText>
          <div className="flex items-center gap-4 mb-8 md:mb-0">
            <Image
              src="/images/cc-logo-white-minimal.svg"
              alt="C&C IDEA LAB Logo"
              width={100}
              height={30}
              className="!h-16 sm:!h-36 w-auto max-w-[165px]"
            />
          </div>
        </ScrollRevealText>

        {/* Contact Information */}
        <ScrollRevealText delay={200}>
          <div className="text-white space-y-2 text-right">
            <div className="space-y-1">
              <p className="text-sm font-medium">C&C IDEA LAB</p>
              <p className="text-sm text-gray-300">6060 Silver Dr, 3rd Floor</p>
              <p className="text-sm text-gray-300">Burnaby, BC V5H 0H5</p>
            </div>
            <div className="space-y-1 pt-2">
              <p className="text-sm text-gray-300">(778) 742-5003</p>
              <a
                href="mailto:hello@ccidealab.com"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                hello@ccidealab.com
              </a>
            </div>
          </div>
        </ScrollRevealText>
      </div>

      <hr className="border-gray-700 mb-8 sm:mb-12" />

      {/* Footer Links Grid */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-16 mb-16 sm:mb-24">
        <div>
          <ScrollRevealText>
            <h4 className="text-fluid-xs font-medium text-white mb-6">Company</h4>
          </ScrollRevealText>
          <ul className="space-y-3 text-fluid-lg text-gray-400">
            {['Home', 'Work', 'About', 'Services', 'Contact'].map((item, idx) => (
              <li key={item}>
                <ScrollRevealText delay={100 + idx * 50}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </ScrollRevealText>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ScrollRevealText delay={200}>
            <h4 className="text-fluid-xs font-medium text-white mb-6">Services</h4>
          </ScrollRevealText>
          <ul className="space-y-3 text-fluid-lg text-gray-400">
            {['Brand Strategy', 'Brand Culture', 'Brand Identity', 'Brand Experience'].map(
              (item, idx) => (
                <li key={item}>
                  <ScrollRevealText delay={300 + idx * 50}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </ScrollRevealText>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <ScrollRevealText delay={400}>
            <h4 className="text-fluid-xs font-medium text-white mb-6">Connect</h4>
          </ScrollRevealText>
          <ul className="space-y-3 text-fluid-lg text-gray-400">
            {['LinkedIn', 'Instagram', 'YouTube', 'Email'].map((item, idx) => (
              <li key={item}>
                <ScrollRevealText delay={500 + idx * 50}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </ScrollRevealText>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ScrollRevealText delay={600}>
            <h4 className="text-fluid-xs font-medium text-white mb-6">Location</h4>
          </ScrollRevealText>
          <div className="space-y-3 text-fluid-lg text-gray-400">
            <ScrollRevealText delay={700}>
              <p>Vancouver, BC</p>
            </ScrollRevealText>
            <ScrollRevealText delay={750}>
              <p>hello@ccidealab.com</p>
            </ScrollRevealText>
            <ScrollRevealText delay={800}>
              <p>+1 (555) 123-4567</p>
            </ScrollRevealText>
          </div>
        </div>
      </div> */}

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-500 text-fluid-xs pt-8">
        <ScrollRevealText delay={0}>
          <p>© 2012—{year} C&C IDEA LAB®</p>
        </ScrollRevealText>

        <ScrollRevealText delay={200}>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/3212577/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-2xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/ccidealab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </ScrollRevealText>

        <ScrollRevealText delay={400}>
          <SmoothScrollButton
            targetSectionId="top"
            className="mt-4 md:mt-0 hover:text-white transition-colors text-fluid-xs"
          >
            Back to top ↑
          </SmoothScrollButton>
        </ScrollRevealText>
      </div>
    </footer>
  )
}
