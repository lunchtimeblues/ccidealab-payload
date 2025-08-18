'use client'

import { useState, useEffect, useRef } from 'react'

export const useNavigationTheme = () => {
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const checkBackgroundBrightness = () => {
      if (!navRef.current) return

      // Get the navigation element's position
      const navRect = navRef.current.getBoundingClientRect()
      const centerX = navRect.left + navRect.width / 2
      const centerY = navRect.top + navRect.height / 2

      // Create a temporary canvas to sample the background color
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      if (!ctx) return

      // Set canvas size
      canvas.width = 1
      canvas.height = 1

      // Try to get the computed background color of the body or elements behind nav
      const elementBehind = document.elementFromPoint(centerX, centerY + 100) // Look below nav
      
      if (elementBehind) {
        const computedStyle = window.getComputedStyle(elementBehind)
        const backgroundColor = computedStyle.backgroundColor
        
        // Parse RGB values from background color
        const rgbMatch = backgroundColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
        const rgbaMatch = backgroundColor.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/)
        
        let r = 255, g = 255, b = 255 // Default to white
        
        if (rgbMatch) {
          r = parseInt(rgbMatch[1])
          g = parseInt(rgbMatch[2])
          b = parseInt(rgbMatch[3])
        } else if (rgbaMatch) {
          r = parseInt(rgbaMatch[1])
          g = parseInt(rgbaMatch[2])
          b = parseInt(rgbaMatch[3])
        }
        
        // Calculate brightness using luminance formula
        const brightness = (r * 299 + g * 587 + b * 114) / 1000
        
        // If brightness is less than 128 (out of 255), consider it dark
        setIsDarkBackground(brightness < 128)
      }
    }

    // Check on mount
    checkBackgroundBrightness()

    // Check on scroll
    const handleScroll = () => {
      checkBackgroundBrightness()
    }

    // Check on resize
    const handleResize = () => {
      checkBackgroundBrightness()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    // Also check periodically in case background changes
    const interval = setInterval(checkBackgroundBrightness, 1000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      clearInterval(interval)
    }
  }, [])

  return { isDarkBackground, navRef }
}
