'use client'

import React from 'react'
import Image from 'next/image'

import { TransitionLink } from '@/components/TransitionLink'
import { QuickVideo } from '@/components/QuickVideo'
// import { AnimatedMarquee } from '@/components/AnimatedMarquee'
import { ClientLogosMarquee } from '@/components/ClientLogosMarquee'
import { Container } from '@/components/Container'
import { ScrollVideo } from '@/components/ScrollVideo'
import { MouseFollower } from '@/components/MouseFollower'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { Carousel } from '@/components/Carousel'

export default function HomePage(): React.JSX.Element {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative almost-full-height flex flex-col justify-between">
        {/* Top/Center content - this will be centered in the available space */}
        <div className="flex-1 flex items-center justify-center">
          <Container size="xxl" className="relative z-10 w-full">
            <div className="relative w-full max-w-none">
              <h1
                className="text-fluid-9xl leading-snug md:leading-none font-semibold md:font-normal uppercase tracking-tighter text-left md:text-center"
                aria-label="Ideas worth rallying around"
              >
                <ScrollRevealText>
                  <div className="logo-before flex justify-start md:justify-center align-center">
                    Ideas
                  </div>
                </ScrollRevealText>
                <ScrollRevealText delay={200}>
                  <div className="text-left md:text-right -mr-1">People</div>
                </ScrollRevealText>
                <div className="flex items-center justify-between">
                  <ScrollRevealText delay={400}>
                    <div
                      className="hidden md:block flex-shrink-0 mr-4"
                      style={{ width: 'clamp(5rem, 8vw, 8rem)' }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 90 112" version="1.1">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g
                            transform="translate(-87.000000, -582.000000)"
                            fill="#000000"
                            fillRule="nonzero"
                          >
                            <g transform="translate(87.400000, 582.840000)">
                              <polygon points="89.28 69.28 80.32 59.68 51.2 87.2 51.2 0 38.08 0 38.08 87.2 8.96 59.68 0 69.28 44.64 110.56" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </ScrollRevealText>
                  <ScrollRevealText delay={600}>
                    <div className="flex-1 text-left md:text-left">Champion</div>
                  </ScrollRevealText>
                  <div className="hidden md:block w-10"></div>
                </div>
              </h1>

              <div className="relative lg:absolute left-0 lg:left-12 lg:top-1/2 lg:-translate-y-1/2 lg:w-2/5 pr-4">
                <p className="text-fluid-sm font-medium lg:font-base leading-normal tracking-wide text-left lg:text-right">
                  <span className="block">
                    C&C IDEA LAB partners with companies worldwide to drive growth, grounded in one
                    belief: creating ideas people champion.
                  </span>
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* Bottom content - this will stick to the bottom */}
        <Container size="full" className="w-full">
          <div className="flex justify-between items-end w-full py-6 text-fluid-sm">
            <a href="#about" className="border-b border-black hover:opacity-70 transition">
              Learn more about our company <span className="inline-block ml-1">↓</span>
            </a>
            <span className="text-black/60">(SCROLL)</span>
          </div>
        </Container>
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
      <section id="services" className="relative bg-gray-100 py-32 md:py-48 overflow-hidden">
        <Container size="full">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-4">
              <ScrollRevealText>
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">
                  Think big with us.
                </p>
              </ScrollRevealText>
            </div>
            <div className="col-span-12 md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-3xl font-base text-black mb-8  tracking-tight leading-tight">
                  Great brands are distinguished by the ideas they inspire people to champion.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    For more than 13 years, C&C IDEA LAB has collaborated with some of the
                    world&apos;s leading companies, driving measurable growth with brand strategy,
                    content marketing, integrated campaigns, and ongoing CMO services. At every
                    stage, our work is anchored in one guiding principle: creating ideas that people
                    champion.
                  </p>
                </div>
              </ScrollRevealText>
              <div className="space-y-4">
                <ScrollRevealText delay={800}>
                  <div className="text-fluid-base">
                    <TransitionLink
                      url="/services"
                      label="Explore our services →"
                      appearance="inline"
                      transitionType="logoWipe"
                      transitionColor="#059669"
                      className="pb-1 font-medium text-black border-b-2 border-black hover:underline"
                    />
                  </div>
                </ScrollRevealText>
                <ScrollRevealText delay={900}>
                  <div className="text-fluid-base">
                    <TransitionLink
                      url="/work"
                      label="See our case studies →"
                      appearance="inline"
                      transitionType="logoWipe"
                      className="pb-1 font-medium text-black border-b-2 border-black hover:underline"
                    />
                  </div>
                </ScrollRevealText>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Client Logos Marquee Section */}
      <section className="py-8 bg-grey-100">
        <ClientLogosMarquee speed={60} direction="left" />
      </section>

      {/* Featured Work Section with Mouse Follower */}
      <section className="py-32 bg-gray-100">
        <Container size="full">
          <ScrollRevealText>
            <h2 className="text-fluid-6xl font-medium leading-none text-black">SELECTED</h2>
          </ScrollRevealText>
          <ScrollRevealText>
            <h2 className="text-fluid-6xl font-medium leading-none mb-16 text-black">WORKS</h2>
          </ScrollRevealText>

          <div className="grid md:grid-cols-2 gap-8">
            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/ubereats" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163843/rendition/1080p/file.mp4?loc=external&signature=1b1ffb8118fe986d40cddc013ef0f6f94d3bb1c59af635c0d285195e95d02d7d"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={100}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Uber</h3>
                    <span className="text-fluid-sm text-black uppercase tracking-wide">
                      Food & Beverage
                    </span>
                  </div>
                  <p className="text-black text-fluid-sm">Digital Strategy & UX Design</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/affinity" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163775/rendition/1080p/file.mp4?loc=external&signature=a4f82a401110df04c78a21d68e0a53b92198a859b1a14b0eabaa60bdf69fa37c"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={200}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Affinity</h3>
                    <span className="text-fluid-sm text-black uppercase tracking-wide">
                      Technology
                    </span>
                  </div>
                  <p className="text-black text-fluid-sm">Brand Identity & Web Development</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/citycolor" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163782/rendition/1080p/file.mp4?loc=external&signature=57e4abd75ba0a501a702c52df8c7be01d2dea6097c192f481de11f147aaa85f8"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={300}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">CityColor Cosmetics</h3>
                    <span className="text-fluid-sm text-black uppercase tracking-wide">
                      Beauty & Cosmetics
                    </span>
                  </div>
                  <p className="text-black text-fluid-sm">Brand Strategy & Visual Identity</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/foodbyfanta" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163799/rendition/1080p/file.mp4?loc=external&signature=fc35a26bfc529911c7dc6b03f4278954c69a52c4e8c75c059cf3d13ea73809df"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={400}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Fanta Restaurant</h3>
                    <span className="text-fluid-sm text-black uppercase tracking-wide">
                      Food & Beverage
                    </span>
                  </div>
                  <p className="text-black text-fluid-sm">
                    Restaurant Branding & Digital Experience
                  </p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>
          </div>
        </Container>
      </section>

      {/* About Section with Carousel */}
      <section className="bg-gray-100">
        <div className="py-24">
          {/* Carousel - aligned to page-wrapper constraints with overflow */}
          <div className="mb-16">
            <Carousel size="xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=600&fit=crop&crop=center"
                alt="Creative Vision - C/C IDEA LAB Studio"
                width={400}
                height={600}
                className="object-cover"
                priority
              />
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
                alt="Digital Innovation - C/C IDEA LAB Tech"
                width={600}
                height={400}
                className="object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=600&fit=crop&crop=center"
                alt="Urban Aesthetics"
                width={400}
                height={600}
                className="object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&h=400&fit=crop&crop=center"
                alt="Coastal Horizon"
                width={600}
                height={400}
                className="object-cover"
              />
            </Carousel>
          </div>

          <Container size="full">
            <div className="grid grid-cols-12 items-start pb-16">
              {/* This empty spacer ensures the paragraph starts aligned at the 7th column on lg+ */}
              <div className="hidden md:block md:col-span-6" />

              {/* Paragraph column: full width on small, right half on large */}
              <div className="col-span-12 md:col-start-5 md:col-span-8">
                <ScrollRevealText>
                  <p className="text-fluid-3xl font-medium leading-tight md:leading-snug">
                    Our strength lies in our people. The C&C team is a collective of brand builders
                    with expertise spanning design, technology, and strategy.
                  </p>
                </ScrollRevealText>

                <ScrollRevealText delay={200}>
                  <div className="text-fluid-base mt-16">
                    <TransitionLink
                      url="/about"
                      label="Learn more about C/C IDEA LAB"
                      appearance="inline"
                      transitionType="logoWipe"
                      className="text-black border-b border-black hover:border-gray-600 hover:text-gray-600 transition-colors"
                    />
                  </div>
                </ScrollRevealText>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  )
}
