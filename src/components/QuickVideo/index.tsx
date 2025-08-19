'use client'

interface QuickVideoProps {
  src: string
  className?: string
  poster?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

export const QuickVideo: React.FC<QuickVideoProps> = ({
  src,
  className = '',
  poster,
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
}) => {
  return (
    <video
      className={`w-full h-full object-cover ${className}`}
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
    />
  )
}

// Ultra-minimal background video
export const QuickBgVideo: React.FC<{ src: string; className?: string }> = ({
  src,
  className = '',
}) => (
  <video
    className={`absolute inset-0 w-full h-full object-cover -z-10 ${className}`}
    src={src}
    autoPlay
    muted
    loop
    playsInline
  />
)

// Ultra-minimal hero video
export const QuickHeroVideo: React.FC<{ src: string; poster?: string; className?: string }> = ({
  src,
  poster,
  className = '',
}) => (
  <div className={`relative w-full h-screen overflow-hidden ${className}`}>
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
)
