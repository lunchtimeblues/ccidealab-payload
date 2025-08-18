'use client'

import { useState, useEffect, useRef } from 'react'

export const useNavigationTheme = () => {
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const checkBackgroundBrightness = () => {
      if (!navRef.current) return

      try {
        // Get the navigation element's position
        const nav = navRef.current
        const navRect = nav.getBoundingClientRect()
        const centerX = navRect.left + navRect.width / 2
        const centerY = navRect.top + navRect.height / 2

        // Sample points below the navigation (where content would be)
        const samplePoints = [
          { x: centerX, y: centerY + 100 }, // Directly below nav center
          { x: centerX - 100, y: centerY + 100 }, // Below and left
          { x: centerX + 100, y: centerY + 100 }, // Below and right
          { x: centerX, y: centerY + 150 }, // Further below
        ]

        console.log('📍 Navigation rect:', navRect)
        console.log('🎯 Sample points:', samplePoints)

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

            // Parse RGB values with better debugging
            const rgbMatch = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)

            console.log('🔍 Sampling point:', point, 'element:', element.tagName, 'backgroundColor:', backgroundColor)

            if (rgbMatch) {
              const r = parseInt(rgbMatch[1])
              const g = parseInt(rgbMatch[2])
              const b = parseInt(rgbMatch[3])

              console.log('✅ RGB values:', { r, g, b })

              // Calculate brightness using luminance formula
              const brightness = (r * 299 + g * 587 + b * 114) / 1000
              totalBrightness += brightness
              validSamples++

              console.log('💡 Brightness:', brightness)
            } else {
              console.log('❌ Failed to parse RGB from:', backgroundColor)
            }
          }
        }

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
        } else {
          // Fallback: check body background color
          const bodyStyle = window.getComputedStyle(document.body)
          const bodyBg = bodyStyle.backgroundColor
          console.log('🔄 Fallback to body background:', bodyBg)

          const rgbMatch = bodyBg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
          if (rgbMatch) {
            const r = parseInt(rgbMatch[1])
            const g = parseInt(rgbMatch[2])
            const b = parseInt(rgbMatch[3])
            const brightness = (r * 299 + g * 587 + b * 114) / 1000
            setIsDarkBackground(brightness < 140)
            console.log('🔄 Fallback brightness:', brightness)
          }
        }
      } catch (error) {
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
