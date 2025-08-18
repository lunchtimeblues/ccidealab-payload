'use client'

import { useState, useEffect, useRef } from 'react'

export const useNavigationTheme = () => {
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const checkBackgroundBrightness = () => {
      if (!navRef.current) return

      try {
        // Temporarily hide the navigation to sample what's behind it
        const nav = navRef.current
        const originalVisibility = nav.style.visibility
        nav.style.visibility = 'hidden'

        // Get the navigation element's position
        const navRect = nav.getBoundingClientRect()
        const centerX = navRect.left + navRect.width / 2
        const centerY = navRect.top + navRect.height / 2

        // Sample multiple points for better accuracy
        const samplePoints = [
          { x: centerX, y: centerY },
          { x: centerX - 50, y: centerY },
          { x: centerX + 50, y: centerY },
          { x: centerX, y: centerY + 20 },
        ]

        let totalBrightness = 0
        let validSamples = 0

        for (const point of samplePoints) {
          const element = document.elementFromPoint(point.x, point.y)
          if (element) {
            // Walk up the DOM tree to find a background color
            let currentElement = element
            let backgroundColor = 'transparent'

            while (currentElement && backgroundColor === 'transparent') {
              const computedStyle = window.getComputedStyle(currentElement)
              backgroundColor = computedStyle.backgroundColor

              if (backgroundColor && backgroundColor !== 'transparent' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
                break
              }
              currentElement = currentElement.parentElement
            }

            // If still transparent, check body background
            if (backgroundColor === 'transparent' || backgroundColor === 'rgba(0, 0, 0, 0)') {
              backgroundColor = window.getComputedStyle(document.body).backgroundColor
            }

            // Parse RGB values
            const rgbMatch = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)

            if (rgbMatch) {
              const r = parseInt(rgbMatch[1])
              const g = parseInt(rgbMatch[2])
              const b = parseInt(rgbMatch[3])

              // Calculate brightness using luminance formula
              const brightness = (r * 299 + g * 587 + b * 114) / 1000
              totalBrightness += brightness
              validSamples++
            }
          }
        }

        // Restore navigation visibility
        nav.style.visibility = originalVisibility

        if (validSamples > 0) {
          const averageBrightness = totalBrightness / validSamples
          const isDark = averageBrightness < 140

          // Debug logging
          console.log('🎨 Background detection:', {
            averageBrightness: Math.round(averageBrightness),
            isDark,
            validSamples,
            threshold: 140
          })

          setIsDarkBackground(isDark)
        }
      } catch (error) {
        // Restore navigation visibility in case of error
        if (navRef.current) {
          navRef.current.style.visibility = ''
        }
        console.warn('Background detection error:', error)
      }
    }

    // Check on mount
    checkBackgroundBrightness()

    // Throttle scroll checks to avoid too frequent updates
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(checkBackgroundBrightness, 100)
    }

    // Check on resize
    const handleResize = () => {
      checkBackgroundBrightness()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    // Check less frequently - every 2 seconds
    const interval = setInterval(checkBackgroundBrightness, 2000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      clearInterval(interval)
    }
  }, [])

  return { isDarkBackground, navRef }
}
