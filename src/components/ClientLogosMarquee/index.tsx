'use client'

import Image from 'next/image'
import { AnimatedMarquee } from '@/components/AnimatedMarquee'

interface ClientLogosMarqueeProps {
  speed?: number
  direction?: 'left' | 'right'
  className?: string
  logoClassName?: string
}

export const ClientLogosMarquee: React.FC<ClientLogosMarqueeProps> = ({
  speed = 150,
  direction = 'left',
  className = '',
  logoClassName = '',
}) => {
  // Client logos data
  const clientLogos = [
    {
      src: '/images/clients/210903 _Affinity-logo-layout1-grey.svg',
      alt: 'Affinity',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/CityColorLogo_Full_400x@2x (1).png',
      alt: 'City Color',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/Comm100_Full-Logo_Rev.svg',
      alt: 'Comm100',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/MarcoPolo_Proposed Logo.svg',
      alt: 'Marco Polo',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/MetrotownNotary_black.svg',
      alt: 'Metrotown Notary',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/fanta-logo-full.svg',
      alt: 'Fanta',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/nice-logo.svg',
      alt: 'Nice',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/pokebar.png',
      alt: 'Pokebar',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/uber-eats-logo.svg',
      alt: 'Uber Eats',
      width: 120,
      height: 60,
    },
    {
      src: '/images/clients/wi_logo_L.png',
      alt: 'WI Logo',
      width: 120,
      height: 60,
    },
  ]

  return (
    <AnimatedMarquee speed={speed} direction={direction} className={className}>
      {clientLogos.map((logo, index) => (
        <div
          key={`${logo.alt}-${index}`}
          className={`flex items-center justify-center mx-8 ${logoClassName}`}
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
    </AnimatedMarquee>
  )
}
