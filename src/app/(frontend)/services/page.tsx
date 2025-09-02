'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollVideo } from '@/components/ScrollVideo'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { TransitionLink } from '@/components/TransitionLink'
import { ClientLogosMarquee } from '@/components/ClientLogosMarquee'

export default function ServicesPage() {
  const pathname = usePathname()

  // Scroll to top whenever this page is navigated to
  useEffect(() => {
    console.log('🏠 Services page pathname changed, scrolling to top')

    // Aggressive scroll reset with multiple methods and delays
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0

      // Also try to override Lenis if it exists
      const lenis = (window as any).lenis
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(0, { immediate: true })
      }
    }

    // Multiple attempts with different delays
    scrollToTop() // Immediate
    setTimeout(scrollToTop, 50)
    setTimeout(scrollToTop, 200)
    setTimeout(scrollToTop, 500)
    setTimeout(scrollToTop, 1000)
    setTimeout(scrollToTop, 1500)
  }, [pathname])

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
        <div className="flex flex-col justify-between pt-44 sm:pt-64 pb-8 min-h-screen">
          <div>
            {/* Marquee */}
            <ScrollMarquee
              baseSpeed={0.8}
              maxSpeedMultiplier={2}
              starSpinSpeed={4}
              lines="single"
              direction="left"
              lineClassName="text-[10vw] font-normal uppercase tracking-tight leading-none"
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
                  Motto® is more than our name, it&apos;s a symbol of who we are. Historically,
                  mottos were war cries of sentiment, hope, and purpose. Today, we create bold brand
                  mottos for clients to serve as their Idea Worth Rallying Around®.
                </p>
              </div>
            </Container>
          </div>

          {/* Hero Footer */}
          <Container size="full" className="w-full">
            <div className="flex justify-between items-end w-full py-6 text-fluid-xs">
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
      <section className="relative bg-gray-100 py-32 sm:py-48 overflow-hidden">
        <Container size="full">
          <div className="grid sm:grid-cols-12 gap-8 sm:gap-16">
            <div className="col-span-12 sm:col-span-4">
              <ScrollRevealText>
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">(What we do)</p>
              </ScrollRevealText>
            </div>
            <div className="col-span-12 sm:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-4xl font-bold text-black mb-8 leading-tight">
                  Brand strategy and brand systems built to unlock what&#39;s next for your
                  organization.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-xl text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    When you’re navigating pivotal moments of growth, evolution, or reinvention,
                    what you do now will shape your future. Whether it’s scaling fast, entering new
                    markets, preparing for your next funding round, or launching a new innovation,
                    we define what makes your brand matter and develop the ideas and systems that
                    carry your vision forward.
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
            className={`md:sticky md:top-0 flex flex-wrap justify-between bg-gray-100 z-[${index}] text-black relative`}
          >
            {/* Fade overlay covers ALL content including videos - highest z-index */}
            <div
              className="hidden sm:block absolute inset-0 bg-black pointer-events-none z-50 transition-opacity duration-300 ease-out"
              style={{ opacity: fadeOpacity }}
            />

            {/* Container moved inside to constrain content, not the fade effect */}
            <Container size="full" className="w-full">
              <div className="h-screen flex flex-col justify-center py-8 md:py-12">
                <div className="relative z-20">
                  {/* Header Section */}
                  <div className="flex justify-between items-start mb-8 md:mb-12">
                    <h2 className="uppercase text-fluid-5xl font-medium">{service.title}</h2>
                    <span className="uppercase hidden sm:block text-fluid-5xl font-medium">
                      {service.number}
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="border-t border-[#CFD5D7] pt-8 md:pt-12">
                    <div className="grid grid-cols-12 gap-6 md:gap-8">
                      {/* Text Content */}
                      <div className="col-span-12 lg:col-span-8">
                        <p className="text-fluid-lg leading-relaxed mb-8 md:mb-10">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
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
                      <div className="col-span-12 lg:col-span-4">
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
