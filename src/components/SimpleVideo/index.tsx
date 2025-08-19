'use client'

import { useRef, useEffect } from 'react'

interface SimpleVideoProps {
  src: string
  className?: string
  poster?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  width?: 'full' | 'container' | 'auto'
  height?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  objectPosition?: string
  preload?: 'auto' | 'metadata' | 'none'
  onLoadedData?: () => void
  onError?: () => void
}

export const SimpleVideo: React.FC<SimpleVideoProps> = ({
  src,
  className = '',
  poster,
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  width = 'full',
  height = 'auto',
  objectFit = 'cover',
  objectPosition = 'center center',
  preload = 'metadata',
  onLoadedData,
  onError,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Optimize video loading
    video.preload = preload

    // Handle autoplay with error fallback
    if (autoPlay) {
      const playVideo = async () => {
        try {
          await video.play()
        } catch (error) {
          console.warn('Video autoplay failed:', error)
          // Fallback: show controls if autoplay fails
          video.controls = true
        }
      }

      if (video.readyState >= 3) {
        playVideo()
      } else {
        video.addEventListener('canplay', playVideo, { once: true })
      }
    }

    // Event listeners
    const handleLoadedData = () => {
      onLoadedData?.()
    }

    const handleError = () => {
      console.error('Video failed to load:', src)
      onError?.()
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
    }
  }, [src, autoPlay, preload, onLoadedData, onError])

  // Width classes
  const widthClass = {
    full: 'w-full',
    container: 'w-full max-w-7xl mx-auto',
    auto: 'w-auto',
  }[width]

  // Height styles
  const heightStyle = height === 'auto' ? {} : { height }

  return (
    <div className={`relative ${widthClass} ${className}`} style={heightStyle}>
      <video
        ref={videoRef}
        className="w-full h-full"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        style={{
          objectFit,
          objectPosition,
        }}
      />
    </div>
  )
}

// Preset configurations for common use cases
export const HeroVideo: React.FC<Omit<SimpleVideoProps, 'width' | 'height' | 'objectFit'>> = (
  props,
) => (
  <SimpleVideo
    {...props}
    width="full"
    height="100vh"
    objectFit="cover"
    className={`${props.className || ''}`}
  />
)

export const ContentVideo: React.FC<Omit<SimpleVideoProps, 'width' | 'controls'>> = (props) => (
  <SimpleVideo
    {...props}
    width="container"
    controls={true}
    autoPlay={false}
    className={`${props.className || ''} rounded-lg overflow-hidden`}
  />
)

export const BackgroundVideo: React.FC<Omit<SimpleVideoProps, 'controls' | 'muted' | 'loop'>> = (
  props,
) => (
  <SimpleVideo
    {...props}
    controls={false}
    muted={true}
    loop={true}
    className={`${props.className || ''} absolute inset-0 -z-10`}
  />
)
