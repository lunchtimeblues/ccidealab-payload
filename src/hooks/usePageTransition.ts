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

        // Disable Lenis completely before navigation
        const lenis = (window as any).lenis
        if (lenis && typeof lenis.destroy === 'function') {
          console.log('🚫 Destroying Lenis before navigation...')
          lenis.destroy()
          ;(window as any).lenis = null
        }

        // Force scroll to top with native methods BEFORE navigation
        window.scrollTo({ top: 0, behavior: 'instant' })
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0

        // Navigate
        router.push(href)

        // Aggressive scroll reset after navigation with multiple attempts
        const forceScrollReset = () => {
          console.log('🔄 Force scroll reset attempt...')
          window.scrollTo({ top: 0, behavior: 'instant' })
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0

          // Also try scrolling the html element directly
          const html = document.documentElement
          if (html) {
            html.scrollTop = 0
            if (html.scrollTo) {
              html.scrollTo({ top: 0, behavior: 'instant' })
            }
          }

          // And the body
          const body = document.body
          if (body) {
            body.scrollTop = 0
            if (body.scrollTo) {
              body.scrollTo({ top: 0, behavior: 'instant' })
            }
          }
        }

        // Multiple scroll reset attempts
        setTimeout(forceScrollReset, 100)
        setTimeout(forceScrollReset, 300)
        setTimeout(forceScrollReset, 500)
        setTimeout(forceScrollReset, 800)

        // Re-initialize Lenis after navigation completes
        setTimeout(() => {
          console.log('🔄 Re-initializing Lenis after navigation...')
          window.dispatchEvent(new CustomEvent('reinit-lenis'))

          // Wait for Lenis to be fully reinitialized, then reset scroll
          setTimeout(() => {
            const lenis = (window as any).lenis
            if (lenis && typeof lenis.scrollTo === 'function') {
              console.log('🎯 Lenis fully reinitialized, resetting scroll to top')
              lenis.scrollTo(0, { immediate: true })
            } else {
              console.log('⚠️ Lenis not available, falling back to window.scrollTo')
              window.scrollTo({ top: 0, behavior: 'instant' })
            }

            // Remove transitioning class
            document.documentElement.classList.remove('transitioning')
            console.log('✅ Transition complete, scroll reset via Lenis')
          }, 300) // Give Lenis time to fully initialize
        }, 1200)
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
