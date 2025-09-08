/**
 * Smooth scroll utility functions
 */

export const smoothScrollToSection = (sectionId: string, offset: number = 0) => {
  const element = document.getElementById(sectionId)
  if (!element) {
    console.warn(`Section with id "${sectionId}" not found`)
    return
  }

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  // Debug logging
  console.log('Smooth scroll debug:', {
    sectionId,
    elementPosition,
    offset,
    offsetPosition,
    currentScroll: window.pageYOffset,
  })

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

export const smoothScrollToNextSection = (offset: number = 100) => {
  const currentScrollY = window.scrollY
  const windowHeight = window.innerHeight
  const nextSectionY = currentScrollY + windowHeight - offset

  window.scrollTo({
    top: nextSectionY,
    behavior: 'smooth',
  })
}

// Alternative: Find the actual next section element
export const smoothScrollToNextSectionElement = (
  currentSectionId?: string,
  offset: number = 100,
) => {
  if (currentSectionId) {
    const currentSection = document.getElementById(currentSectionId)
    if (currentSection) {
      const nextSection = currentSection.nextElementSibling as HTMLElement
      if (nextSection) {
        const elementPosition = nextSection.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
        return
      }
    }
  }

  // Fallback to viewport-based scrolling
  smoothScrollToNextSection(offset)
}
