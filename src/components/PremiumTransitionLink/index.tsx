'use client'

import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'
import { usePremiumPageTransition, type TransitionType } from '@/hooks/usePremiumPageTransition'

import type { Page, Post } from '@/payload-types'

type PremiumTransitionLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages'
    value: Page | Post | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
  // Enhanced transition options
  transitionType?: TransitionType
  transitionColor?: string
  disableTransition?: boolean
  onClick?: () => void
}

const isExternalUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url, window.location.origin)
    return urlObj.origin !== window.location.origin
  } catch {
    return false
  }
}

const isInternalLink = (href: string): boolean => {
  return href.startsWith('/') || href.startsWith('#') || !isExternalUrl(href)
}

export const PremiumTransitionLink: React.FC<PremiumTransitionLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
    transitionType = 'motto-wipe',
    transitionColor,
    disableTransition = false,
    onClick,
  } = props

  const { navigateWithTransition } = usePremiumPageTransition()

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  // Determine if we should use transitions
  const shouldUseTransition = 
    !disableTransition && 
    !newTab && 
    isInternalLink(href) && 
    typeof window !== 'undefined'

  const handleClick = (e: React.MouseEvent) => {
    if (shouldUseTransition) {
      e.preventDefault()
      onClick?.() // Call the onClick handler first (to close menu, etc.)
      navigateWithTransition(href, transitionType, transitionColor)
    } else {
      onClick?.() // Call onClick for external links too
    }
    // If not using transition, let the default Link behavior handle it
  }

  const linkContent = (
    <>
      {label && label}
      {children && children}
    </>
  )

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <Link 
        className={cn(className)} 
        href={href || url || ''} 
        onClick={handleClick}
        {...newTabProps}
      >
        {linkContent}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={appearance}>
      <Link 
        className={cn(className)} 
        href={href || url || ''} 
        onClick={handleClick}
        {...newTabProps}
      >
        {linkContent}
      </Link>
    </Button>
  )
}

// Export individual transition components for specific use cases
export const CurtainLink: React.FC<Omit<PremiumTransitionLinkType, 'transitionType'>> = (props) => (
  <PremiumTransitionLink {...props} transitionType="curtain" />
)

export const ScaleLink: React.FC<Omit<PremiumTransitionLinkType, 'transitionType'>> = (props) => (
  <PremiumTransitionLink {...props} transitionType="scale" />
)

export const WipeLink: React.FC<Omit<PremiumTransitionLinkType, 'transitionType'>> = (props) => (
  <PremiumTransitionLink {...props} transitionType="wipe" />
)

export const FadeLink: React.FC<Omit<PremiumTransitionLinkType, 'transitionType'>> = (props) => (
  <PremiumTransitionLink {...props} transitionType="fade" />
)
