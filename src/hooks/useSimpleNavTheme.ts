'use client'

import { useEffect, useState } from 'react'

export const useSimpleNavTheme = () => {
  const [isDarkSection, setIsDarkSection] = useState(false)

  useEffect(() => {
    const checkSection = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      
      // Simple logic: if we're in the top portion of the page (hero sections)
      // consider it a dark section. Adjust these values based on your page structure.
      
      // For most pages, hero sections are in the first 100vh
      const isInHeroSection = scrollY < viewportHeight * 0.8
      
      // You can customize this logic per page or make it more sophisticated
      setIsDarkSection(isInHeroSection)
    }

    // Check on mount
    checkSection()

    // Check on scroll with throttling
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkSection()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isDarkSection
}
