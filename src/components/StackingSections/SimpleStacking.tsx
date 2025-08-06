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

interface SimpleStackingProps {
  services: ServiceItem[]
  title?: string
  subtitle?: string
}

export const SimpleStacking: React.FC<SimpleStackingProps> = ({
  services,
  title,
  subtitle
}) => {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  // Debug: Log the services data
  console.log('SimpleStacking received:', { services, title, subtitle })

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionRefs.current.forEach((section, index) => {
      if (!section) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set(prev).add(index))
            } else {
              setVisibleSections(prev => {
                const newSet = new Set(prev)
                newSet.delete(index)
                return newSet
              })
            }
          })
        },
        {
          threshold: 0.3,
          rootMargin: '-10% 0px -10% 0px'
        }
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
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

      {/* Sections with Intersection Observer animations */}
      <div className="relative">
        {services.map((service, index) => {
          const isVisible = visibleSections.has(index)
          const hasPassedThrough = Array.from(visibleSections).some(i => i > index)
          
          return (
            <div
              key={index}
              ref={(el) => { sectionRefs.current[index] = el }}
              className={`w-full h-screen flex items-center justify-center ${getBackgroundColorClass(service.backgroundColor)} transition-all duration-700 ease-out`}
              style={{
                transform: isVisible ? 'scale(1)' : hasPassedThrough ? 'scale(0.95)' : 'scale(1)',
                filter: hasPassedThrough && index < services.length - 1 
                  ? 'grayscale(0.7) brightness(0.7)' 
                  : 'none',
              }}
            >
              <div className="max-w-screen-2xl mx-auto px-6 py-32 w-full">
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
              <div className="fixed top-4 right-4 bg-green-500 text-white p-2 rounded text-xs z-50">
                Section {index + 1} | Visible: {isVisible ? 'Yes' : 'No'} | Passed: {hasPassedThrough ? 'Yes' : 'No'}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SimpleStacking
