'use client'

import { useTransitionRouter } from 'next-view-transitions'
import { useCallback } from 'react'

export const usePageTransition = () => {
  const router = useTransitionRouter()

  const slideInOut = useCallback(() => {
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

  const navigateWithTransition = useCallback(
    (href: string) => {
      router.push(href, {
        onTransitionReady: slideInOut,
      })
    },
    [router, slideInOut],
  )

  return { navigateWithTransition }
}
