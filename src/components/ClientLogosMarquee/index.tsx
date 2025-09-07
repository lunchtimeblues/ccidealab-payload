'use client'

import Image from 'next/image'
import React from 'react'

interface ClientLogosMarqueeProps {
  speed?: number // seconds for one full loop of one set
  direction?: 'left' | 'right'
  className?: string
  logoClassName?: string
}

export const ClientLogosMarquee: React.FC<ClientLogosMarqueeProps> = ({
  speed = 27, // Reduced from 30 to 27 (10% faster)
  direction = 'left',
  className = '',
  logoClassName = '',
}) => {
  const clientLogos = [
    {
      src: '/images/clients/250822 C&C SVG Grey-13.svg',
      alt: 'Client Logo 13',
      width: 200,
      height: 100,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-14.svg',
      alt: 'Client Logo 14',
      width: 200,
      height: 100,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-15.svg',
      alt: 'Client Logo 15',
      width: 200,
      height: 100,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-16.svg',
      alt: 'Client Logo 16',
      width: 200,
      height: 100,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-17.svg',
      alt: 'Client Logo 17',
      width: 200,
      height: 100,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-18.svg',
      alt: 'Client Logo 18',
      width: 200,
      height: 100,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-19.svg',
      alt: 'Client Logo 19',
      width: 200,
      height: 100,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-20.svg',
      alt: 'Client Logo 20',
      width: 200,
      height: 100,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-21.svg',
      alt: 'Client Logo 21',
      width: 200,
      height: 100,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-22.svg',
      alt: 'Client Logo 22',
      width: 200,
      height: 100,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-23.svg',
      alt: 'Client Logo 23',
      width: 200,
      height: 100,
    },
    {
      src: '/images/clients/250822 C&C SVG Grey-24.svg',
      alt: 'Client Logo 24',
      width: 200,
      height: 100,
    },
  ]

  // Build the track once and duplicate it for the seamless loop
  const run = (
    <>
      {clientLogos.map((logo, index) => (
        <div
          key={`${logo.alt}-${index}`}
          className={`flex items-center justify-center flex-shrink-0 ${logoClassName}`}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="!h-28 sm:!h-32 w-auto max-w-[280px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            style={{ filter: 'brightness(0.8) contrast(1.2)' }}
          />
        </div>
      ))}
    </>
  )

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="marquee-track flex items-center gap-16 h-32 sm:h-36"
        style={
          {
            // CSS custom properties so duration/direction can't be stomped by !important utilities
            ['--marquee-duration' as any]: `${speed}s`,
            ['--marquee-direction' as any]: direction === 'right' ? 'reverse' : 'normal',
          } as React.CSSProperties
        }
        aria-label="Client logos marquee"
      >
        {run}
        <span aria-hidden="true">{run}</span>
      </div>

      {/* Keyframes + animation styles local to the component */}
      <style jsx>{`
        .marquee-track {
          width: max-content;
          will-change: transform;
          animation-name: marquee-x;
          animation-duration: var(--marquee-duration, 30s);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: var(--marquee-direction, normal);
        }

        /* With two copies in the track, shifting by -50% equals exactly one full set width */
        @keyframes marquee-x {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}
