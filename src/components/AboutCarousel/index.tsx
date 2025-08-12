'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { ScrollRevealText } from '@/components/ScrollRevealText'

interface CarouselItem {
  id: number
  image: string
  title: string
  subtitle: string
  description: string
}

interface AboutCarouselProps {
  items: CarouselItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
  onNavigationReady?: (nav: { next: () => void; prev: () => void }) => void
}

export const AboutCarousel: React.FC<AboutCarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 4000,
  onNavigationReady,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Create extended items array for seamless loop
  const extendedItems = [...items, ...items.slice(0, 2)]

  const goToSlide = useCallback(
    (index: number, smooth = true) => {
      if (isTransitioning) return

      setIsTransitioning(true)
      setCurrentIndex(index)

      if (carouselRef.current) {
        const slideWidth = carouselRef.current.children[0]?.clientWidth || 0
        const gap = 32 // 2rem gap
        const translateX = index * (slideWidth + gap)

        carouselRef.current.style.transition = smooth
          ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          : 'none'
        carouselRef.current.style.transform = `translateX(-${translateX}px)`
      }

      setTimeout(() => {
        setIsTransitioning(false)

        // Jump to beginning if we've reached the end
        if (index >= items.length) {
          const actualIndex = index - items.length
          setCurrentIndex(actualIndex)

          if (carouselRef.current) {
            const slideWidth = carouselRef.current.children[0]?.clientWidth || 0
            const gap = 32
            const translateX = actualIndex * (slideWidth + gap)

            carouselRef.current.style.transition = 'none'
            carouselRef.current.style.transform = `translateX(-${translateX}px)`
          }
        }
      }, 600)
    },
    [isTransitioning, items.length],
  )

  const nextSlide = useCallback(() => {
    const nextIndex = currentIndex + 1
    goToSlide(nextIndex)
  }, [currentIndex, goToSlide])

  const prevSlide = useCallback(() => {
    if (currentIndex === 0) {
      // Jump to the end without animation, then animate to the previous slide
      const lastIndex = items.length - 1
      goToSlide(items.length + lastIndex, false)
      setTimeout(() => goToSlide(lastIndex), 50)
    } else {
      goToSlide(currentIndex - 1)
    }
  }, [currentIndex, items.length, goToSlide])

  // Expose navigation methods to parent
  useEffect(() => {
    if (onNavigationReady) {
      onNavigationReady({
        next: nextSlide,
        prev: prevSlide,
      })
    }
  }, [onNavigationReady, nextSlide, prevSlide])

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, autoPlayInterval)

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current)
        }
      }
    }
  }, [currentIndex, autoPlay, autoPlayInterval, nextSlide])

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  const handleMouseLeave = () => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, autoPlayInterval)
    }
  }

  return (
    <div className="relative">
      {/* Carousel Container - extends off page to the right */}
      <div
        className="overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={carouselRef}
          className="flex gap-8 transition-transform duration-500 ease-out"
          style={{ width: `${extendedItems.length * 400 + (extendedItems.length - 1) * 32}px` }}
        >
          {extendedItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex-shrink-0 w-[400px]">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">{item.title}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="text-sm font-medium tracking-wide uppercase text-gray-600">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex % items.length ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
