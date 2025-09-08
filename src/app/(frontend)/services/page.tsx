'use client'

import { useEffect, useState, useRef } from 'react'
import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollVideo } from '@/components/ScrollVideo'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ClientLogosMarquee } from '@/components/ClientLogosMarquee'
import { SmoothScrollButton } from '@/components/SmoothScrollButton'

export default function ServicesPage() {
  // Use Intersection Observer for fade effects instead of scroll listeners
  // This won't interfere with ScrollMarquee's scroll handling
  const [sectionVisibility, setSectionVisibility] = useState<{ [key: number]: number }>({})
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  // Set up Intersection Observer for fade effects
  // Observe each section and fade the PREVIOUS section when this one enters
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionRefs.current.forEach((section, index) => {
      if (!section) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const rect = entry.boundingClientRect
            const viewportHeight = window.innerHeight

            // When THIS section enters viewport, fade the PREVIOUS section
            if (index > 0) {
              // Skip first section (no previous section to fade)
              const prevSectionIndex = index - 1
              let fadeOpacity = 0

              // Calculate fade based on how much this section has entered the viewport
              if (entry.isIntersecting) {
                const sectionTop = rect.top

                // Start fade when this section starts entering viewport
                // Complete fade when this section is well into viewport
                if (sectionTop < viewportHeight) {
                  const entryDistance = viewportHeight - sectionTop
                  const maxEntry = viewportHeight * 0.8 // Fade completes over 80vh of entry

                  const fadeProgress = Math.min(entryDistance / maxEntry, 1)
                  // 🎯 FADE PERCENTAGE CONTROL: Change 0.3 to adjust max fade opacity
                  fadeOpacity = fadeProgress * 0.3 // Max 30% black opacity
                }
              }

              // Apply fade to the PREVIOUS section
              setSectionVisibility((prev) => ({
                ...prev,
                [prevSectionIndex]: fadeOpacity,
              }))
            }
          })
        },
        {
          threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Very granular detection
          rootMargin: '0px 0px -10% 0px', // Start detecting when section is 10% into viewport
        },
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])
  const services = [
    {
      title: 'Branding & Strategy',
      number: '01',
      description:
        'We align visions to build strong foundations through strategy and design across every touchpoint.',
      features1: ['Brand Strategy', 'Identity Design ', 'Graphic Design'],
      features2: ['Packaging Design', 'Environmental Design', 'Experiential Design'],
      videoSrc:
        'https://player.vimeo.com/progressive_redirect/playback/1116630620/rendition/540p/file.mp4?loc=external&signature=fad4cdc9a306c3e8a1e6ccf99b4a949be8c2864316eaa8406344f778143d00fb',
    },
    {
      title: 'Creative Production',
      number: '02',
      description:
        'With full production capability, we bring ideas to life with compelling video, photography, and content.',
      features1: ['Campaign Asset Development', 'Video Production', 'Photography'],
      features2: ['Motion Graphics', 'Drone & Aerial Videography', 'Event Coverage & Livestreams'],
      videoSrc:
        'https://player.vimeo.com/progressive_redirect/playback/1116630632/rendition/540p/file.mp4?loc=external&signature=b638336fd00491255464db2277b90ebc32cfb84e7e5b08f4b25879d400df18e0',
    },
    {
      title: 'Digital Experience',
      number: '03',
      description:
        'Create seamless digital platforms on the web or in-person that merge design, technology, and intelligence.',
      features1: ['Touchscreen Design', 'Interactive Media', 'Web Design & Development'],
      features2: ['E-Commerce ', 'Custom CRM Integrations', 'Website Optimization & Support'],
      videoSrc:
        'https://player.vimeo.com/progressive_redirect/playback/1116630645/rendition/540p/file.mp4?loc=external&signature=635390f9f4568f6bf421bb659f85e75777395ef6cdbb1525d17b209a36ac761b',
    },
    {
      title: 'Marketing & Growth',
      number: '04',
      description:
        'Amplify your brand through integrated strategies that drive measurable long-term growth.',
      features1: ['Brand Activations', 'Content Marketing', 'Social Media Management'],
      features2: [
        'SEO & SEM Campaigns',
        'Email Marketing & Automation',
        'Analytics, Reporting & Optimization',
      ],
      videoSrc:
        'https://player.vimeo.com/progressive_redirect/playback/1116630601/rendition/540p/file.mp4?loc=external&signature=b70f08c001140d8c66d3afefc5fbaf6baf0fab023ab5f7a3f18b32182407987e',
    },
  ]

  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-100">
        <div className="flex flex-col justify-between pt-44 pb-8 min-h-screen">
          <div>
            {/* Marquee */}
            <ScrollMarquee
              baseSpeed={0.8}
              maxSpeedMultiplier={2}
              starSpinSpeed={4}
              lines="single"
              direction="left"
              lineClassName="text-[12vw] font-normal uppercase tracking-tight leading-none"
            >
              <span className="mx-8">SERVICES</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>

              <span className="mx-8">SERVICES</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>

              <span className="mx-8">SERVICES</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
            </ScrollMarquee>

            {/* Content */}
            <Container size="full">
              <div className="max-w-3xl mt-12 md:mt-18">
                <p className="text-fluid-xl leading-snug text-black">
                  From brand foundations to growth campaigns, we deliver strategy, design, content,
                  and digital experiences that move people and accelerate business.
                </p>
              </div>
            </Container>
          </div>

          {/* Hero Footer */}
          <Container size="full" className="w-full">
            <div className="flex justify-between items-end w-full py-6 text-fluid-sm">
              <SmoothScrollButton
                targetSectionId="services-content"
                className="border-b border-black hover:opacity-70 transition"
              >
                Learn more <span className="inline-block ml-1">↓</span>
              </SmoothScrollButton>
              <span className="text-black/60">(SCROLL)</span>
            </div>
          </Container>
        </div>
      </section>

      {/* Scroll Video Section */}
      <ScrollVideo
        src="https://player.vimeo.com/progressive_redirect/playback/1107658120/rendition/1080p/file.mp4?loc=external&signature=5b4262eb299d2487592038466508758b4185bf8685deda59a21f735585a91e29"
        autoPlay={true}
        muted={true}
        loop={true}
        className="relative"
      />

      {/* Services Section */}
      <section
        id="services-content"
        className="relative bg-gray-100 py-32 md:py-48 overflow-hidden"
      >
        <Container size="full">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-4">
              <ScrollRevealText>
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">Grow with us.</p>
              </ScrollRevealText>
            </div>
            <div className="col-span-12 md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-3xl font-base text-black mb-8  tracking-tight leading-tight">
                  Our role goes beyond project delivery — we are your strategic partner dedicated to
                  growing your brand.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    We bring the creative and digital capabilities needed to thrive in a
                    fast-changing landscape. From branding and content production to websites,
                    digital experiences, and performance-driven campaigns, we provide consistency
                    across every touchpoint and the technology to keep your brand moving forward.
                  </p>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Client Logos Marquee Section */}
      <section className="py-12 bg-grey-100">
        <ClientLogosMarquee speed={20} direction="left" className="py-4" />
      </section>

      {/* Services Sections */}
      {services.map((service, index) => {
        const fadeOpacity = sectionVisibility[index] || 0

        return (
          <section
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el
            }}
            className={`lg:sticky lg:top-0 flex flex-wrap justify-between bg-gray-100 z-[${index}] text-black relative`}
          >
            {/* Fade overlay covers ALL content including videos - highest z-index */}
            <div
              className="hidden lg:block absolute inset-0 bg-black pointer-events-none z-50 transition-opacity duration-300 ease-out"
              style={{ opacity: fadeOpacity }}
            />

            {/* Container moved inside to constrain content, not the fade effect */}
            <Container size="full" className="w-full">
              <div className="min-h-screen lg:h-screen flex flex-col justify-center py-16 lg:py-12">
                <div className="relative z-20">
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 md:mb-12">
                    <h2 className="uppercase text-fluid-5xl font-medium mb-2 sm:mb-0">
                      {service.title}
                    </h2>
                    <span className="uppercase text-fluid-3xl sm:text-fluid-5xl font-medium text-gray-600 sm:text-black">
                      {service.number}
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="border-t border-[#CFD5D7] pt-6 md:pt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
                      {/* Text Content */}
                      <div className="lg:col-span-8">
                        <p className="text-fluid-lg leading-relaxed mb-6 md:mb-10">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                          <ul className="space-y-2 text-fluid-base">
                            {service.features1.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                          <ul className="space-y-2 text-fluid-base">
                            {service.features2.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Video Section */}
                      <div className="lg:col-span-4 mt-6 lg:mt-0">
                        <div className="relative w-full aspect-[3/4] max-w-xs mx-auto lg:mx-0">
                          <video
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
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
