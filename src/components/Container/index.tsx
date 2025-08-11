import React from 'react'

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
  const sizeClasses = {
    sm: 'max-w-4xl', // ~896px - Forms, narrow content
    md: 'max-w-6xl', // ~1152px - Medium content
    lg: 'max-w-7xl', // ~1280px - Large content
    xl: 'max-w-[1600px]', // ~1600px - Main content (Motto-style)
    xxl: 'max-w-[2000px]', // ~2000px - Ultra-wide (like Motto)
    full: 'max-w-full', // 100% - Full width
  }

  const paddingClasses = noPadding ? '' : 'px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20'

  return (
    <div className={`mx-auto ${sizeClasses[size]} ${paddingClasses} ${className}`}>{children}</div>
  )
}
