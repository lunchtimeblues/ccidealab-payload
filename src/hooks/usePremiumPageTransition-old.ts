'use client'

import { useTransitionRouter } from 'next-view-transitions'
import { useCallback } from 'react'

export type TransitionType = 'slide' | 'curtain' | 'scale' | 'wipe' | 'fade' | 'motto-wipe'

export interface TransitionOptions {
  type: TransitionType
  color?: string
}

export const usePremiumPageTransition = () => {
  const router = useTransitionRouter()

  // Original slide transition (your current one)
  const slideTransition = useCallback(() => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0.2, transform: 'translateY(-35%)' },
      ],
      {
        duration: 1500,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
      },
    )

    document.documentElement.animate(
      [
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
      ],
      {
        duration: 1500,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  }, [])

  // Premium curtain transition (like high-end agencies)
  const curtainTransition = useCallback(() => {
    // Old page slides out to the left
    document.documentElement.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-100%)' },
      ],
      {
        duration: 800,
        easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
      },
    )

    // New page slides in from the right
    document.documentElement.animate(
      [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(0)' },
      ],
      {
        duration: 800,
        easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  }, [])

  // Scale transition (zoom effect)
  const scaleTransition = useCallback(() => {
    // Old page scales down and fades
    document.documentElement.animate(
      [
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(0.8)', opacity: 0 },
      ],
      {
        duration: 600,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
      },
    )

    // New page scales up and fades in
    document.documentElement.animate(
      [
        { transform: 'scale(1.1)', opacity: 0 },
        { transform: 'scale(1)', opacity: 1 },
      ],
      {
        duration: 600,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  }, [])

  // Wipe transition (horizontal reveal)
  const wipeTransition = useCallback(() => {
    // Old page stays in place
    document.documentElement.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(0)' },
      ],
      {
        duration: 1000,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
      },
    )

    // New page wipes in with clip-path
    document.documentElement.animate(
      [
        {
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        },
      ],
      {
        duration: 1000,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  }, [])

  // Smooth fade transition
  const fadeTransition = useCallback(() => {
    // Old page fades out
    document.documentElement.animate(
      [
        { opacity: 1 },
        { opacity: 0 },
      ],
      {
        duration: 400,
        easing: 'ease-out',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
      },
    )

    // New page fades in
    document.documentElement.animate(
      [
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        duration: 400,
        easing: 'ease-in',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  }, [])

  // Smooth motto-wipe using View Transitions API (like demo transitions)
  const mottoWipeTransition = useCallback((color: string = '#000') => {
    // Use the same smooth approach as demo transitions
    // Old page wipes up and out
    document.documentElement.animate(
      [
        { transform: 'translateY(0%)', opacity: 1 },
        { transform: 'translateY(-100%)', opacity: 0 },
      ],
      {
        duration: 800,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
      },
    )

    // New page wipes up from bottom
    document.documentElement.animate(
      [
        { transform: 'translateY(100%)', opacity: 0 },
        { transform: 'translateY(0%)', opacity: 1 },
      ],
      {
        duration: 800,
        delay: 400,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      },
    )

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

    // Animate background overlay
    backgroundOverlay.animate(
      [
        { transform: 'translateY(100%)', opacity: 1 },
        { transform: 'translateY(0%)', opacity: 1 },
        { transform: 'translateY(0%)', opacity: 1 },
        { transform: 'translateY(-100%)', opacity: 1 },
      ],
      {
        duration: 900,
        easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
        fill: 'forwards',
      },
    ).addEventListener('finish', () => {
      backgroundOverlay.remove()
    })

    // Add logo overlay for branding
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
    logoOverlay.textContent = 'MOTTO®'
    document.body.appendChild(logoOverlay)

    // Animate logo
    logoOverlay.animate(
      [
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        { opacity: 0, transform: 'translate(-50%, -50%) scale(1.1)' },
      ],
      {
        duration: 1200,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fill: 'forwards',
      },
    ).addEventListener('finish', () => {
      logoOverlay.remove()
    })
  }, [])

  // Ultra-smooth motto-wipe with navigation and custom colors
  const mottoWipeTransitionWithNavigation = useCallback((href: string, color: string = '#000') => {

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


    // Animate background overlay with smoother timing and better keyframes
    backgroundOverlay.animate(
      [
        { transform: 'translateY(100%)', opacity: 1, offset: 0 },
        { transform: 'translateY(0%)', opacity: 1, offset: 0.4 },
        { transform: 'translateY(0%)', opacity: 1, offset: 0.6 },
        { transform: 'translateY(-100%)', opacity: 1, offset: 1 },
      ],
      {
        duration: 1600,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fill: 'forwards',
      },
    ).addEventListener('finish', () => {
      backgroundOverlay.remove()
    })

    // Add logo overlay for branding
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
    logoOverlay.textContent = 'MOTTO®'
    document.body.appendChild(logoOverlay)

    // Animate logo with smoother timing and better keyframes
    logoOverlay.animate(
      [
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)', offset: 0 },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)', offset: 0.3 },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)', offset: 0.7 },
        { opacity: 0, transform: 'translate(-50%, -50%) scale(1.1)', offset: 1 },
      ],
      {
        duration: 1600,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fill: 'forwards',
      },
    ).addEventListener('finish', () => {
      logoOverlay.remove()
    })

    // Navigate at the perfect moment (during overlay coverage)
    setTimeout(() => {
      router.push(href)
    }, 800) // Navigate when overlay is covering the screen (50% of 1600ms)
  }, [router])

  const getTransitionFunction = useCallback((type: TransitionType, color?: string) => {
    switch (type) {
      case 'slide':
        return slideTransition
      case 'curtain':
        return curtainTransition
      case 'scale':
        return scaleTransition
      case 'wipe':
        return wipeTransition
      case 'fade':
        return fadeTransition
      case 'motto-wipe':
        return () => mottoWipeTransition(color)
      default:
        return () => mottoWipeTransition(color) // Use motto-wipe as default
    }
  }, [slideTransition, curtainTransition, scaleTransition, wipeTransition, fadeTransition, mottoWipeTransition])

  const navigateWithTransition = useCallback(
    (href: string, transitionType: TransitionType = 'motto-wipe', color?: string) => {
      if (transitionType === 'motto-wipe') {
        // For motto-wipe, start animation first, then navigate
        mottoWipeTransitionWithNavigation(href, color)
      } else {
        // For other transitions, use the standard approach
        const transitionFn = getTransitionFunction(transitionType, color)
        router.push(href, {
          onTransitionReady: transitionFn,
        })
      }
    },
    [router, getTransitionFunction, mottoWipeTransitionWithNavigation],
  )

  return {
    navigateWithTransition,
    slideTransition,
    curtainTransition,
    scaleTransition,
    wipeTransition,
    fadeTransition,
    mottoWipeTransition
  }
}
