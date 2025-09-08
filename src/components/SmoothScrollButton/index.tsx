'use client'

import { smoothScrollToSection, smoothScrollToNextSection } from '@/utils/smoothScroll'

interface SmoothScrollButtonProps {
  children: React.ReactNode
  targetSectionId?: string
  offset?: number
  className?: string
  onClick?: () => void
}

export const SmoothScrollButton: React.FC<SmoothScrollButtonProps> = ({
  children,
  targetSectionId,
  offset = 100,
  className = '',
  onClick
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Call custom onClick if provided
    onClick?.()
    
    if (targetSectionId) {
      // Scroll to specific section
      smoothScrollToSection(targetSectionId, offset)
    } else {
      // Scroll to next section (viewport height)
      smoothScrollToNextSection(offset)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
      type="button"
    >
      {children}
    </button>
  )
}
