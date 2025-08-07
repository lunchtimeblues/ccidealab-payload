'use client'

import { useEffect, useRef, useState } from 'react'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

interface ServiceItem {
  title: string
  description: any
  features?: Array<{ feature: string }>
  backgroundColor: string
  textColor: string
  image?: any
}

interface StackingSectionsProps {
  services: ServiceItem[]
  title?: string
  subtitle?: string
}

export const StackingSections: React.FC<StackingSectionsProps> = ({
  services,
  title,
  subtitle
}) => {
  const [scrollY, setScrollY] = useState(0)

  // Simple scroll detection that definitely works
  useEffect(() => {
    const updateScroll = () => {
      setScrollY(window.scrollY)
    }

    // Set initial scroll
    updateScroll()

    // Listen for scroll events
    window.addEventListener('scroll', updateScroll, { passive: true })
    
    // Also listen for Lenis events
    const handleLenis = (e: CustomEvent) => {
      if (e.detail?.scroll) {
        setScrollY(e.detail.scroll)
      }
    }
    window.addEventListener('lenis-scroll', handleLenis as EventListener)

    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('lenis-scroll', handleLenis as EventListener)
    }
  }, [])

  const getBackgroundColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      'white': 'bg-white',
      'gray-50': 'bg-gray-50',
      'gray-100': 'bg-gray-100',
      'black': 'bg-black',
      'blue-50': 'bg-blue-50',
      'green-50': 'bg-green-50',
      'purple-50': 'bg-purple-50',
    }
    return colorMap[color] || 'bg-white'
  }

  const getTextColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      'black': 'text-black',
      'white': 'text-white',
      'gray-600': 'text-gray-600',
      'gray-800': 'text-gray-800',
    }
    return colorMap[color] || 'text-black'
  }

  return (
    <div className="relative">
      {/* Header Section */}
      {(title || subtitle) && (
        <div className="py-32 px-6 bg-white">
          <div className="max-w-screen-2xl mx-auto text-center">
            {title && (
              <ScrollRevealText>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-black">
                  {title}
                </h2>
              </ScrollRevealText>
            )}
            {subtitle && (
              <ScrollRevealText delay={200}>
                <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
                  {subtitle}
                </p>
              </ScrollRevealText>
            )}
          </div>
        </div>
      )}

      {/* Simple Scrolling Sections */}
      <div className="relative">
        {services.map((service, index) => {
          // Calculate fade intensity based on scroll position
          // Fade starts when next section begins to overlap, reaches max at 50% overlap
          const sectionStart = index * window.innerHeight
          const nextSectionStart = (index + 1) * window.innerHeight
          const halfOverlap = nextSectionStart + (window.innerHeight * 0.5)

          // Calculate fade opacity (0 to 0.5 for 50% black maximum)
          let fadeOpacity = 0
          if (scrollY > nextSectionStart && index < services.length - 1) {
            const fadeProgress = Math.min(1, (scrollY - nextSectionStart) / (window.innerHeight * 0.5))
            fadeOpacity = fadeProgress * 0.5 // Max 50% black
          }

          return (
            <div
              key={index}
              className={`relative w-full h-screen flex items-center justify-center ${getBackgroundColorClass(service.backgroundColor)}`}
              style={{
                // Simple stacking effect based on scroll
                transform: scrollY > sectionStart + 200 ? 'scale(0.95)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
            >
              {/* Fade to black overlay - Motto style */}
              <div
                className="absolute inset-0 bg-black pointer-events-none z-10 transition-opacity duration-300 ease-out"
                style={{
                  opacity: fadeOpacity
                }}
              />

            <div className="relative z-20 max-w-screen-2xl mx-auto px-6 py-32 w-full">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Content */}
                <div className={`space-y-8 ${getTextColorClass(service.textColor)}`}>
                  <div className="overflow-hidden">
                    <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <div className="text-lg lg:text-xl leading-relaxed">
                    <RichText data={service.description} enableGutter={false} />
                  </div>

                  {service.features && service.features.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-current rounded-full flex-shrink-0" />
                            <span>{feature.feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Image */}
                {service.image && (
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <Media
                        resource={service.image}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Debug info */}
            <div className="fixed top-4 right-4 bg-black/50 text-white p-2 rounded text-xs z-50">
              Section {index + 1} | ScrollY: {scrollY} | Fade: {(fadeOpacity * 100).toFixed(1)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
