'use client'

import { useTransitionRouter } from 'next-view-transitions'
import { useCallback } from 'react'

export type TransitionType = 'logoWipe' | 'curtain' | 'scale' | 'wipe' | 'fade'

export const usePageTransition = () => {
  const router = useTransitionRouter()

  // Main logoWipe transition with custom colors
  const mottoWipeTransition = useCallback((color: string = '#000') => {
    // Create colored background overlay
    const backgroundOverlay = document.createElement('div')
    backgroundOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${color};
      z-index: 9999;
      pointer-events: none;
    `
    document.body.appendChild(backgroundOverlay)

    // Stage 1: Wipe up from bottom (faster)
    const stage1 = backgroundOverlay.animate(
      [{ transform: 'translateY(100%)' }, { transform: 'translateY(0%)' }],
      {
        duration: 500, // Reduced from 800ms
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fill: 'forwards',
      },
    )

    // Stage 2: Pause and then wipe up to top (faster)
    stage1.addEventListener('finish', () => {
      setTimeout(() => {
        const stage2 = backgroundOverlay.animate(
          [{ transform: 'translateY(0%)' }, { transform: 'translateY(-100%)' }],
          {
            duration: 500, // Reduced from 800ms
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fill: 'forwards',
          },
        )

        stage2.addEventListener('finish', () => {
          backgroundOverlay.remove()
        })
      }, 200) // Reduced pause from 400ms
    })

    // Add logo overlay
    const logoOverlay = document.createElement('div')
    logoOverlay.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10000;
      pointer-events: none;
      opacity: 0;
    `

    // Create SVG logo element
    const logoImg = document.createElement('img')
    logoImg.src = '/images/cc-logo-black-minimal.svg'
    logoImg.alt = 'C/C IDEA LAB Logo'
    logoImg.style.cssText = `
      width: 80px;
      height: auto;
      filter: ${color === '#000' || color === 'black' ? 'brightness(0) invert(1)' : 'brightness(0)'};
    `

    logoOverlay.appendChild(logoImg)
    document.body.appendChild(logoOverlay)

    // Animate logo with coordinated timing (faster)
    setTimeout(() => {
      // Logo fades in
      logoOverlay.animate(
        [
          { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
          { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        ],
        {
          duration: 200, // Faster logo animation
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          fill: 'forwards',
        },
      )
    }, 250) // Show logo after first stage (adjusted for faster timing)

    // Logo fades out
    setTimeout(() => {
      logoOverlay
        .animate(
          [
            { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
            { opacity: 0, transform: 'translate(-50%, -50%) scale(1.1)' },
          ],
          {
            duration: 200, // Faster logo animation
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fill: 'forwards',
          },
        )
        .addEventListener('finish', () => {
          logoOverlay.remove()
        })
    }, 800) // Hide logo before second stage completes (adjusted for faster timing)
  }, [])

  // Navigation version that handles routing
  const mottoWipeWithNavigation = useCallback(
    (href: string, color: string = '#000') => {
      // Create colored background overlay
      const backgroundOverlay = document.createElement('div')
      backgroundOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${color};
      z-index: 9999;
      pointer-events: none;
    `
      document.body.appendChild(backgroundOverlay)

      // Stage 1: Wipe up from bottom (faster)
      const stage1 = backgroundOverlay.animate(
        [{ transform: 'translateY(100%)' }, { transform: 'translateY(0%)' }],
        {
          duration: 500, // Reduced from 800ms
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          fill: 'forwards',
        },
      )

      // Stage 2: Pause and then wipe up to top (faster)
      stage1.addEventListener('finish', () => {
        setTimeout(() => {
          const stage2 = backgroundOverlay.animate(
            [{ transform: 'translateY(0%)' }, { transform: 'translateY(-100%)' }],
            {
              duration: 500, // Reduced from 800ms
              easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              fill: 'forwards',
            },
          )

          stage2.addEventListener('finish', () => {
            backgroundOverlay.remove()
          })
        }, 200) // Reduced pause from 400ms
      })

      // Add logo overlay
      const logoOverlay = document.createElement('div')
      logoOverlay.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10000;
      pointer-events: none;
      opacity: 0;
    `

      // Create SVG logo element
      const logoImg = document.createElement('img')
      logoImg.src = '/images/cc-logo-black-minimal.svg'
      logoImg.alt = 'C/C IDEA LAB Logo'
      logoImg.style.cssText = `
        width: 80px;
        height: auto;
        filter: ${color === '#000' || color === 'black' ? 'brightness(0) invert(1)' : 'brightness(0)'};
      `

      logoOverlay.appendChild(logoImg)
      document.body.appendChild(logoOverlay)

      // Animate logo with coordinated timing (faster)
      setTimeout(() => {
        // Logo fades in
        logoOverlay.animate(
          [
            { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
            { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          ],
          {
            duration: 200, // Faster logo animation
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fill: 'forwards',
          },
        )
      }, 250) // Show logo after first stage (adjusted for faster timing)

      // Logo fades out
      setTimeout(() => {
        logoOverlay
          .animate(
            [
              { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
              { opacity: 0, transform: 'translate(-50%, -50%) scale(1.1)' },
            ],
            {
              duration: 200, // Faster logo animation
              easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              fill: 'forwards',
            },
          )
          .addEventListener('finish', () => {
            logoOverlay.remove()
          })
      }, 800) // Hide logo before second stage completes (adjusted for faster timing)

      // Navigate at the perfect moment (faster)
      setTimeout(() => {
        // Disable browser scroll restoration before navigation
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual'
        }

        // Add transitioning class to force scroll behavior
        document.documentElement.classList.add('transitioning')

        // Don't destroy Lenis - just reset scroll position
        const lenis = (window as any).lenis
        if (lenis && typeof lenis.scrollTo === 'function') {
          console.log('🎯 Resetting Lenis scroll before navigation')
          lenis.scrollTo(0, { immediate: true })
        }

        // Also force native scroll reset as backup
        window.scrollTo({ top: 0, behavior: 'instant' })
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0

        // Navigate
        router.push(href).then(() => {
          console.log('🔄 Navigation completed, starting scroll reset process')

          // Multiple attempts to ensure scroll reset works
          const resetScroll = () => {
            const lenis = (window as any).lenis
            if (lenis && typeof lenis.scrollTo === 'function') {
              console.log('🎯 Post-navigation: Using Lenis API to reset scroll')
              lenis.scrollTo(0, { immediate: true })
            }
            window.scrollTo({ top: 0, behavior: 'instant' })
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
          }

          // Immediate reset
          resetScroll()

          // Delayed resets to ensure it sticks
          setTimeout(resetScroll, 50)
          setTimeout(resetScroll, 200)
          setTimeout(() => {
            resetScroll()
            // Remove transitioning class
            document.documentElement.classList.remove('transitioning')
            console.log('✅ Final scroll reset complete')
          }, 500)
        })
      }, 500) // Navigate when overlay is covering the screen (adjusted for faster timing)
    },
    [router],
  )

  // Main navigation function
  const navigateWithTransition = useCallback(
    (href: string, _transitionType: TransitionType = 'logoWipe', color?: string) => {
      // Always use logoWipe with navigation
      mottoWipeWithNavigation(href, color)
    },
    [mottoWipeWithNavigation],
  )

  return {
    navigateWithTransition,
    mottoWipeTransition,
    mottoWipeWithNavigation,
  }
}
