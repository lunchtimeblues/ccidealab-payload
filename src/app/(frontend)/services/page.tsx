'use client'

import { useEffect, useState } from 'react'
import { Container } from '@/components/Container'

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const updateScroll = () => setScrollY(window.scrollY)

    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])
  const services = [
    {
      title: 'Brand Strategy',
      number: '01',
      description:
        "Define your edge and steer your company into the future with positioning that clearly defines who you are, what you do, why you matter, and how you'll win.",
      features1: ['Research & Insights', 'Brand Positioning', 'Strategic Workshops'],
      features2: ['Vision & Purpose', 'Strategic Narrative', 'Brand Architecture'],
      videoSrc:
        'https://player.vimeo.com/progressive_redirect/playback/946746335/rendition/1080p/file.mp4?loc=external&log_user=0&signature=7e69eb1e218636d3cec013200df6f40427c61fad83474509d7091ecdcc3e65df',
    },
    {
      title: 'Brand Culture',
      number: '02',
      description:
        'Operationalize your brand and rally your people with tools and culture strategies that embed your brand’s essence into the organization.',
      features1: ['Culture Strategy', 'Core Values & Behaviors', 'Rituals & Rewards'],
      features2: ['Employee Experience Design', 'Internal Launch Events', 'Brand Trainings'],
      videoSrc:
        'https://player.vimeo.com/progressive_redirect/playback/946746316/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9f40db7e8d62275fd15b0536b4e8c6b43d6585ed897816c490a099c85d717a45',
    },
    {
      title: 'Brand Identity',
      number: '03',
      description:
        'Bring your brand to life with adaptable, scalable design systems that connect strategy to visuals with clarity and impact.',
      features1: ['Verbal Identity & Naming', 'Visual Identity', 'Design Systems'],
      features2: ['Art Direction', 'Visual Assets', 'Brand Guidelines'],
      videoSrc:
        'https://player.vimeo.com/progressive_redirect/playback/946746304/rendition/1080p/file.mp4?loc=external&log_user=0&signature=345cd0867222271407bdecc16186c41de703cef9e1c7a088c9f753b88b88fb11',
    },
    {
      title: 'Brand Experience',
      number: '04',
      description:
        'Cutting-edge brand and digital experiences to captivate modern audiences in a fast-paced world.',
      features1: ['Comms & Collateral', 'UI/UX Design', 'Motion Design'],
      features2: ['Product Design', 'Interaction Design', 'Campaign Design'],
      videoSrc:
        'https://player.vimeo.com/progressive_redirect/playback/1028621242/rendition/2160p/file.mp4?loc=external&log_user=0&signature=1366c22c5c6960f18502839850cc6e6e875dcee68f7eccb8031f54db6ec07089',
    },
  ]

  return (
    <div className="bg-gray-100 text-black">
      {services.map((service, index) => {
        // Individual section fade: each section fades when the next section starts covering it
        // This creates individual fade effects, not one large fade across all sections

        const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800

        // Calculate when this specific section should start fading
        // Each section starts fading when we scroll enough for the next section to begin covering it
        const sectionTriggerPoint = index * viewportHeight * 0.8 // Sections are roughly 80vh apart in scroll
        const fadeStartPoint = sectionTriggerPoint + viewportHeight * 0.3 // Start fade 30vh after trigger
        const fadeEndPoint = fadeStartPoint + viewportHeight * 0.5 // Complete fade over 50vh of scroll

        let fadeOpacity = 0

        // Only fade this section if we've scrolled past its fade start point
        // and this isn't the last section (last section never fades)
        if (scrollY > fadeStartPoint && index < services.length - 1) {
          const fadeProgress = Math.min(
            1,
            (scrollY - fadeStartPoint) / (fadeEndPoint - fadeStartPoint),
          )
          fadeOpacity = fadeProgress * 0.5 // Max 50% black
        }

        return (
          <section
            key={index}
            className={`border-t border-[#CFD5D7] sticky top-0 flex flex-wrap justify-between bg-gray-100 z-[${index}] text-black relative`}
          >
            {/* Fade overlay now covers full section width */}
            <div
              className="hidden sm:block absolute inset-0 bg-black pointer-events-none z-10 transition-opacity duration-300 ease-out"
              style={{ opacity: fadeOpacity }}
            />

            {/* Container moved inside to constrain content, not the fade effect */}
            <Container size="xxl">
              <div className="almost-full-height flex flex-col justify-center relative z-20">
                <div>
                  <div className="w-full grid grid-cols-12 gap-x-6 px-6 sm:px-16 pt-40 sm:pb-20 mb-auto">
                    <div className="col-span-12 pb-10 flex justify-between items-start">
                      <h2 className="uppercase text-3xl sm:text-5xl font-bold">{service.title}</h2>
                      <span className="uppercase hidden sm:block text-5xl font-bold">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  <div className="w-full border-t border-[#CFD5D7] mt-auto">
                    <div className="grid grid-cols-12 gap-x-6 px-6 sm:px-16 pt-20 sm:pt-20">
                      <div className="flex flex-col justify-between col-span-12 sm:col-span-9">
                        <p className="text-lg sm:text-xl leading-relaxed max-w-5xl mb-10 sm:mb-12">
                          {service.description}
                        </p>

                        <div className="flex flex-col sm:flex-row justify-between max-w-4xl pb-16 sm:pb-18">
                          <ul className="mt-auto space-y-2 text-lg">
                            {service.features1.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                          <ul className="mt-auto space-y-2 text-lg">
                            {service.features2.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="col-span-12 sm:col-span-3 mb-10 sm:mb-0">
                        <div className="relative w-full pt-[122%]">
                          <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src={service.videoSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        )
      })}
    </div>
  )
}
