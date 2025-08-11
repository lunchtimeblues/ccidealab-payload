'use client'

import { useTransitionRouter } from 'next-view-transitions'
import { useCallback } from 'react'

export type TransitionType = 'logoWipe' | 'curtain' | 'scale' | 'wipe' | 'fade'

export const usePremiumPageTransition = () => {
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
      color: ${color === '#000' || color === 'black' ? 'white' : color === '#fff' || color === 'white' ? 'black' : 'white'};
      font-size: 2rem;
      font-weight: bold;
      z-index: 10000;
      pointer-events: none;
      opacity: 0;
    `
    logoOverlay.textContent = 'C/C IDEA LAB'
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
      color: ${color === '#000' || color === 'black' ? 'white' : color === '#fff' || color === 'white' ? 'black' : 'white'};
      font-size: 2rem;
      font-weight: bold;
      z-index: 10000;
      pointer-events: none;
      opacity: 0;
    `
      logoOverlay.textContent = 'C/C IDEA LAB'
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
        router.push(href)
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
