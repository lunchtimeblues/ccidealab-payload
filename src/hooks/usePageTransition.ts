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

        // Navigate first
        router.push(href)

        // Reset scroll using multiple approaches after navigation
        const resetScroll = () => {
          console.log('Attempting scroll reset...')

          const lenis = (window as any).lenis
          if (lenis) {
            console.log('Lenis found, trying different methods...')

            // Method 1: Try to stop Lenis temporarily
            if (typeof lenis.stop === 'function') {
              console.log('Stopping Lenis...')
              lenis.stop()
            }

            // Method 2: Force native scroll while Lenis is stopped
            window.scrollTo({ top: 0, behavior: 'instant' })
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0

            // Method 3: Try Lenis scrollTo with different options
            if (typeof lenis.scrollTo === 'function') {
              console.log('Using Lenis scrollTo with force...')
              lenis.scrollTo(0, { immediate: true, force: true })
              lenis.scrollTo(0, { duration: 0 })
              lenis.scrollTo(0)
            }

            // Method 4: Restart Lenis
            setTimeout(() => {
              if (typeof lenis.start === 'function') {
                console.log('Restarting Lenis...')
                lenis.start()
              }
            }, 100)

          } else {
            console.log('Lenis not available, using fallback methods')
          }

          // Method 5: Dispatch custom event for Lenis
          window.dispatchEvent(new CustomEvent('force-scroll-to-top'))

          // Method 6: Aggressive native scroll
          window.scrollTo({ top: 0, behavior: 'instant' })
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0

          // Method 7: Try document.documentElement.scrollTo
          if (document.documentElement.scrollTo) {
            document.documentElement.scrollTo({ top: 0, behavior: 'instant' })
          }

          // Method 8: Force scroll on body
          if (document.body.scrollTo) {
            document.body.scrollTo({ top: 0, behavior: 'instant' })
          }
        }

        // Use longer delays to ensure page has loaded
        setTimeout(resetScroll, 100)
        setTimeout(resetScroll, 300)
        setTimeout(resetScroll, 500)
        setTimeout(resetScroll, 800)
        setTimeout(resetScroll, 1000)
        setTimeout(resetScroll, 1500)
        setTimeout(resetScroll, 2000)
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
