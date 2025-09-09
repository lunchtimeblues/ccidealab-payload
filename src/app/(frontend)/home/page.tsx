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
import { SmoothScrollButton } from '@/components/SmoothScrollButton'

export default function HomePage(): React.JSX.Element {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative almost-full-height flex flex-col justify-between">
        {/* Top/Center content - this will be centered in the available space */}
        <div className="flex-1 flex items-center justify-center mt-24">
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
                <div className="flex items-center justify-start md:justify-between">
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
            <SmoothScrollButton
              targetSectionId="services"
              offset={80}
              className="border-b border-black hover:opacity-70 transition"
            >
              Learn more <span className="inline-block ml-1">↓</span>
            </SmoothScrollButton>
            <span className="text-black/60">(SCROLL)</span>
          </div>
        </Container>
      </section>

      {/* Scroll Video Section */}
      <section id="scroll-video">
        <ScrollVideo
          src="https://player.vimeo.com/progressive_redirect/playback/1116629203/rendition/720p/file.mp4?loc=external&signature=37b164db9af861b751e02acab33b1633dd9f82510ac33cc559f8bc2e7cdd3a47"
          autoPlay={true}
          muted={true}
          loop={true}
          className="relative"
        />
      </section>

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
      <section id="featured-work" className="py-32 bg-gray-100">
        <Container size="full">
          <ScrollRevealText>
            <h2 className="text-fluid-6xl font-medium leading-none text-black">SELECT</h2>
          </ScrollRevealText>
          <ScrollRevealText>
            <h2 className="text-fluid-6xl font-medium leading-none mb-16 text-black">WORKS</h2>
          </ScrollRevealText>

          <div className="grid md:grid-cols-2 gap-8">
            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/ubereats" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163843/rendition/720p/file.mp4?loc=external&signature=5736286ae852071f83522c8f1b56525f0b1ddbbec68f4c114f11d8f2f1973599"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={100}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Uber</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Food & Beverage</span>
                  </div>
                  <p className="text-black text-fluid-sm">Creative Production</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/affinity" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163775/rendition/720p/file.mp4?loc=external&signature=4344c4cfaa7fb678934fc61169a4ce4e52dbfe0c1155cfc09961d2d22253ac24"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={200}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Affinity</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Technology</span>
                  </div>
                  <p className="text-black text-fluid-sm">Full-Scope Marketing & Design</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/citycolor" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163782/rendition/720p/file.mp4?loc=external&signature=61123620b6f46de8747f177286e18f7d4829001162050cc6c4bbaa4b3752372e"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={300}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">CityColor Cosmetics</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Health & Beauty</span>
                  </div>
                  <p className="text-black text-fluid-sm">Full-Scope Marketing & Design</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/foodbyfanta" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163799/rendition/720p/file.mp4?loc=external&signature=640b5c1a96021dbff9b8de4f12a9f01c1a67e601e39bd1bba7529c96a3de6361"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={400}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Food by Fanta</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Food & Beverage</span>
                  </div>
                  <p className="text-black text-fluid-sm">Full-Scope Marketing & Design</p>
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
                src="/images/home/1-Anna-Working.jpg"
                alt="Creative Vision - C&C IDEA LAB Studio"
                width={400}
                height={600}
                className="object-cover"
                priority
              />
              <Image
                src="/images/home/2-library.webp"
                alt="Digital Innovation - C&C IDEA LAB Tech"
                width={600}
                height={400}
                className="object-cover"
              />
              <Image
                src="/images/home/3-drawing-painting.jpg"
                alt="Urban Aesthetics"
                width={400}
                height={600}
                className="object-cover"
              />
              <Image
                src="/images/home/4-MaraWorking.jpg"
                alt="Coastal Horizon"
                width={600}
                height={400}
                className="object-cover"
              />
              <Image
                src="/images/home/5-logobook.jpg"
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
                      label="Learn more about C&C IDEA LAB"
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
