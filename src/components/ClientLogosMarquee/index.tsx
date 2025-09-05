'use client'

import Image from 'next/image'

interface ClientLogosMarqueeProps {
  speed?: number
  direction?: 'left' | 'right'
  className?: string
  logoClassName?: string
}

export const ClientLogosMarquee: React.FC<ClientLogosMarqueeProps> = ({
  speed = 60, // Much slower speed for smoother animation
  direction = 'left',
  className = '',
  logoClassName = '',
}) => {
  // Client logos data - only using the SVG series from the folder
  const clientLogos = [
    {
      src: '/images/clients/250822 C&C SVG Grey-13.svg',
      alt: 'Client Logo 13',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-14.svg',
      alt: 'Client Logo 14',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-15.svg',
      alt: 'Client Logo 15',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-16.svg',
      alt: 'Client Logo 16',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-17.svg',
      alt: 'Client Logo 17',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-18.svg',
      alt: 'Client Logo 18',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-19.svg',
      alt: 'Client Logo 19',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-20.svg',
      alt: 'Client Logo 20',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-21.svg',
      alt: 'Client Logo 21',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-22.svg',
      alt: 'Client Logo 22',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-23.svg',
      alt: 'Client Logo 23',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-24.svg',
      alt: 'Client Logo 24',
      width: 120,
      height: 60,
    },
  ]

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {/* First set of logos */}
        {clientLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className={`flex items-center justify-center mx-16 flex-shrink-0 ${logoClassName}`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="!h-16 sm:!h-36 w-auto max-w-[165px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              style={{
                filter: 'brightness(0.8) contrast(1.2)',
              }}
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {clientLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-duplicate-${index}`}
            className={`flex items-center justify-center mx-16 flex-shrink-0 ${logoClassName}`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="!h-16 sm:!h-36 w-auto max-w-[165px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              style={{
                filter: 'brightness(0.8) contrast(1.2)',
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee linear infinite;
          width: max-content;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
