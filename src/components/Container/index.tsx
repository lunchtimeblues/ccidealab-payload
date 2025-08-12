import React from 'react'
import { cn } from '@/utilities/ui'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full'
  noPadding?: boolean
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'xl',
  noPadding = false,
}) => {
  const getContainerClass = () => {
    if (noPadding) {
      // Return base container without padding - just max-width and centering
      const sizeClasses = {
        sm: 'max-w-4xl mx-auto relative', // ~896px - Forms, narrow content
        md: 'max-w-6xl mx-auto relative', // ~1152px - Medium content
        lg: 'max-w-7xl mx-auto relative', // ~1280px - Large content
        xl: 'mx-auto relative', // soulidealab.com style - no max-width
        xxl: 'max-w-[2000px] mx-auto relative', // ~2000px - Ultra-wide
        full: 'max-w-none mx-auto relative', // 100% - Full width
      }
      return sizeClasses[size]
    }

    // Return container with soulidealab.com-style padding for xl, traditional for others
    const sizeClasses = {
      sm: 'page-wrapper-narrow', // Uses soulidealab.com approach with 1200px max-width
      md: 'max-w-6xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative', // Traditional responsive padding
      lg: 'max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative', // Traditional responsive padding
      xl: 'page-wrapper', // soulidealab.com approach - modern CSS with custom properties
      xxl: 'page-wrapper-wide', // soulidealab.com approach with 1600px max-width
      full: 'page-wrapper-full', // soulidealab.com approach with no max-width
    }
    return sizeClasses[size]
  }

  return (
    <div className={cn(getContainerClass(), className)}>
      {children}
    </div>
  )
}
