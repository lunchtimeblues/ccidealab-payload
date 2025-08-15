'use client'

import { useEffect, useState, useRef } from 'react'
import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollVideo } from '@/components/ScrollVideo'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'
import { ClientLogosMarquee } from '@/components/ClientLogosMarquee'

export default function ServicesPage() {
  // Use Intersection Observer for fade effects instead of scroll listeners
  // This won't interfere with ScrollMarquee's scroll handling
  const [sectionVisibility, setSectionVisibility] = useState<{ [key: number]: number }>({})
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  // Set up Intersection Observer for fade effects
  // References the old scroll-based fade logic but uses Intersection Observer
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionRefs.current.forEach((section, index) => {
      if (!section) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const rect = entry.boundingClientRect
            const viewportHeight = window.innerHeight

            // Calculate fade based on when next section starts to overlap
            let fadeOpacity = 0

            // Only fade if this isn't the last section and check for next section overlap
            if (entry.isIntersecting && index < sectionRefs.current.length - 1) {
              // Check if the next section exists and is starting to overlap
              const nextSection = sectionRefs.current[index + 1]
              if (nextSection) {
                const nextSectionRect = nextSection.getBoundingClientRect()
                const nextSectionTop = nextSectionRect.top

                // Start fade when next section is close to viewport (about to overlap)
                // Complete fade when next section fully covers this section
                if (nextSectionTop < viewportHeight) {
                  // Calculate how much the next section is overlapping
                  const overlapDistance = viewportHeight - nextSectionTop
                  const maxOverlap = viewportHeight * 0.8 // Fade completes over 80vh of overlap

                  const fadeProgress = Math.min(overlapDistance / maxOverlap, 1)
                  // 🎯 FADE PERCENTAGE CONTROL: Change 0.3 to adjust max fade opacity
                  fadeOpacity = fadeProgress * 0.3 // Max 30% black opacity
                }
              }
            }

            setSectionVisibility((prev) => ({
              ...prev,
              [index]: fadeOpacity,
            }))
          })
        },
        {
          threshold: Array.from({ length: 51 }, (_, i) => i / 50), // More granular detection
          rootMargin: '0px 0px 0px 0px', // No margin for precise detection
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
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-100">
        <div className="flex flex-col justify-between pt-28 pb-8 min-h-screen">
          <div>
            {/* Isolated Marquee Container */}
            <div className="isolate" style={{ isolation: 'isolate' }}>
              <ScrollMarquee
                baseSpeed={0.8}
                maxSpeedMultiplier={2}
                starSpinSpeed={4}
                lines="single"
                direction="right"
                lineClassName="text-[8vw] font-normal uppercase tracking-tight leading-none"
              >
                <span className="mx-8">OUR</span>
                <span className="mx-8 flex items-center">
                  <SpinningStar size={64} className="text-current" />
                </span>
                <span className="mx-8">SERVICES</span>
                <span className="mx-8 flex items-center">
                  <SpinningStar size={64} className="text-current" />
                </span>
              </ScrollMarquee>
            </div>

            {/* Content */}
            <Container size="xxl">
              <div className="max-w-3xl mt-12 md:mt-18">
                <p className="text-2xl md:text-3xl leading-snug text-black">
                  Motto® is more than our name, it&apos;s a symbol of who we are. Historically,
                  mottos were war cries of sentiment, hope, and purpose. Today, we create bold brand
                  mottos for clients to serve as their Idea Worth Rallying Around®.
                </p>
              </div>
            </Container>
          </div>

          {/* Hero Footer */}
          <Container size="xl">
            <div className="flex justify-between items-end w-full py-6 text-sm">
              <a href="#about" className="border-b border-black hover:opacity-70 transition">
                Learn more about our company <span className="inline-block ml-1">↓</span>
              </a>
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
      <section className="relative bg-gray-100 py-32 lg:py-48 overflow-hidden">
        <Container size="xxl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollRevealText>
                <p className="text-lg font-medium text-gray-600 mb-8 lg:mb-0">Think big with us.</p>
              </ScrollRevealText>
            </div>
            <div className="lg:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Great brands are more than famous names, they&apos;re Ideas Worth Rallying
                  Around®.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-lg text-gray-700 leading-relaxed mb-8 lg:pr-16">
                  <p>
                    C/C IDEA LAB is a brand strategy and design firm that partners with tech and
                    innovation companies to create impactful, future-ready brands. We collaborate
                    with visionary teams and design-led companies who need their brand to stand out,
                    matter more, drive growth, and amplify brand impact within modern culture.
                  </p>
                </div>
              </ScrollRevealText>
              <ScrollRevealText delay={600}>
                <div className="text-sm font-medium text-gray-500 mb-8 lg:pr-16">
                  (CHOOSE YOUR PURPOSE)
                </div>
              </ScrollRevealText>
              <div className="space-y-4">
                <ScrollRevealText delay={800}>
                  <div>
                    <PremiumTransitionLink
                      url="/services"
                      label="Explore our services →"
                      appearance="inline"
                      transitionType="logoWipe"
                      transitionColor="#059669"
                      className="text-black hover:text-gray-600 border-b-2 border-black hover:border-gray-600 transition-colors pb-1"
                    />
                  </div>
                </ScrollRevealText>
                <ScrollRevealText delay={900}>
                  <div>
                    <PremiumTransitionLink
                      url="/work"
                      label="See our case studies →"
                      appearance="inline"
                      transitionType="logoWipe"
                      className="text-black hover:text-gray-600 border-b-2 border-black hover:border-gray-600 transition-colors pb-1"
                    />
                  </div>
                </ScrollRevealText>
                <ScrollRevealText delay={1000}>
                  <div>
                    <PremiumTransitionLink
                      url="/methodology"
                      label="Discover our methodology →"
                      appearance="inline"
                      transitionType="logoWipe"
                      className="text-black hover:text-gray-600 border-b-2 border-black hover:border-gray-600 transition-colors pb-1"
                    />
                  </div>
                </ScrollRevealText>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Client Logos Marquee Section */}
      <section className="py-12 bg-grey-100">
        <ClientLogosMarquee
          speed={80}
          direction="left"
          className="py-4"
          logoClassName="min-w-[140px]"
        />
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
            className={`border-t border-[#CFD5D7] sticky top-0 flex flex-wrap justify-between bg-gray-100 z-[${index}] text-black relative`}
          >
            {/* Fade overlay covers ALL content including videos - highest z-index */}
            <div
              className="hidden sm:block absolute inset-0 bg-black pointer-events-none z-50 transition-opacity duration-300 ease-out"
              style={{ opacity: fadeOpacity }}
            />

            {/* Container moved inside to constrain content, not the fade effect */}
            <Container size="lg">
              <div className="almost-full-height flex flex-col justify-center relative z-20">
                <div>
                  <div className="w-full grid grid-cols-12 gap-x-6 px-6 sm:px-16 pt-40 sm:pb-20 mb-auto max-w-none">
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
