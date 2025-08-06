'use client'

import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'
import { usePageTransition } from '@/hooks/usePageTransition'

import type { Page } from '@/payload-types'

type TransitionLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages'
    value: Page | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
  // New prop to disable transitions if needed
  disableTransition?: boolean
}

const isExternalUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url, window.location.origin)
    return urlObj.origin !== window.location.origin
  } catch {
    // If URL parsing fails, assume it's internal
    return false
  }
}

const isInternalLink = (href: string): boolean => {
  // Check if it's a relative path or same origin
  return href.startsWith('/') || href.startsWith('#') || !isExternalUrl(href)
}

export const TransitionLink: React.FC<TransitionLinkType> = (props) => {
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
    disableTransition = false,
  } = props

  const { navigateWithTransition } = usePageTransition()

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
      navigateWithTransition(href)
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
