'use client'

import React from 'react'
import Image from 'next/image'

import { TransitionLink } from '@/components/TransitionLink'
import { QuickVideo } from '@/components/QuickVideo'
// import { AnimatedMarquee } from '@/components/AnimatedMarquee'
import { ClientLogosMarquee } from '@/components/ClientLogosMarquee'
import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollVideo } from '@/components/ScrollVideo'
import { MouseFollower } from '@/components/MouseFollower'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { Carousel } from '@/components/Carousel'

export default function HomePage(): React.JSX.Element {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative almost-full-height">
        <Container size="full" className="relative z-10">
          <div className="relative flex items-center justify-center almost-full-height px-4 sm:px-6 lg:px-8">
            <div className="relative w-full max-w-none pt-24 md:pt-0">
              <h1
                className="text-fluid-9xl leading-tight md:leading-none font-medium uppercase tracking-tight"
                aria-label="Ideas worth rallying around"
              >
                <ScrollRevealText>
                  <div>Ideas Worth</div>
                </ScrollRevealText>
                <ScrollRevealText delay={200}>
                  <div className="sm:text-right -mr-1">Rallying</div>
                </ScrollRevealText>
                <div className="flex justify-between items-center">
                  <ScrollRevealText delay={400}>
                    <div className="w-16 sm:w-20 md:w-20 xl:w-28 2xl:w-32 hidden sm:block">
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
                    <div className="sm:text-center flex-1 px-4">Around</div>
                  </ScrollRevealText>
                  <div className="hidden sm:block w-16 sm:w-20 md:w-24 xl:w-28 2xl:w-32"></div>
                </div>
              </h1>

              <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:right-0 mt-12 md:mt-0 md:w-1/2 pr-4">
                <p className="text-fluid-xl leading-relaxed tracking-wide">
                  <span className="block">
                    C/C IDEA LAB is a global strategy and design firm for positioning, scaling, and
                    reinventing companies in the tech and innovation space.
                  </span>
                </p>
              </div>
            </div>
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
      <section className="relative bg-gray-100 py-32 lg:py-48 overflow-hidden">
        <Container size="xxl">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <ScrollRevealText>
                <p className="text-fluid-lg font-medium text-gray-600 mb-8 md:mb-0">
                  Think big with us.
                </p>
              </ScrollRevealText>
            </div>
            <div className="md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-5xl font-bold text-black mb-8 leading-tight">
                  Great brands are more than famous names, they&apos;re Ideas Worth Rallying
                  Around®.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-lg text-gray-700 leading-relaxed mb-8 md:pr-16">
                  <p>
                    C/C IDEA LAB is a brand strategy and design firm that partners with tech and
                    innovation companies to create impactful, future-ready brands. We collaborate
                    with visionary teams and design-led companies who need their brand to stand out,
                    matter more, drive growth, and amplify brand impact within modern culture.
                  </p>
                </div>
              </ScrollRevealText>
              <ScrollRevealText delay={600}>
                <div className="text-fluid-sm font-medium text-gray-500 mb-8 md:pr-16">
                  (CHOOSE YOUR PURPOSE)
                </div>
              </ScrollRevealText>
              <div className="space-y-4">
                <ScrollRevealText delay={800}>
                  <div>
                    <TransitionLink
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
                    <TransitionLink
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
                    <TransitionLink
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

      {/* Featured Work Section with Mouse Follower */}
      <section className="py-32 bg-gray-100">
        <Container size="xxl">
          <ScrollRevealText>
            <h2 className="text-fluid-6xl font-bold mb-16 text-black">Select Works</h2>
          </ScrollRevealText>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <MouseFollower text="COMING SOON">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163775/rendition/1080p/file.mp4?loc=external&signature=a4f82a401110df04c78a21d68e0a53b92198a859b1a14b0eabaa60bdf69fa37c"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={100}>
                  <h3 className="text-fluid-xl font-semibold mb-2 text-black">Affinity Group</h3>
                  <p className="text-gray-600">Brand Identity & Web Development</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="COMING SOON">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163834/rendition/1080p/file.mp4?loc=external&signature=1d394a50f40749523873c42ec92b0b9177a3827d888000c24d688993f47ee793"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={200}>
                  <h3 className="text-fluid-xl font-semibold mb-2 text-black">Pokebar</h3>
                  <p className="text-gray-600">Digital Strategy & UX Design</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="COMING SOON">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163809/rendition/1080p/file.mp4?loc=external&signature=9c62d16e134344639b26289eae9f721f646692945979ed5a8f4f2647aaeec55c"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={300}>
                  <h3 className="text-fluid-xl font-semibold mb-2 text-black">Marco Polo</h3>
                  <p className="text-gray-600">Creative Direction & Branding</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="COMING SOON">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163826/rendition/1080p/file.mp4?loc=external&signature=26aef7e436f91aa3408dded6efdb69542ea5e337ae73ca3c03f29454067755ba"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={400}>
                  <h3 className="text-fluid-xl font-semibold mb-2 text-black">Metrotown Notary</h3>
                  <p className="text-gray-600">Investment Platform & Identity</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="VIEW PROJECT">
              <TransitionLink url="/work/comm100" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163790/rendition/1080p/file.mp4?loc=external&signature=54c579983b73bdb221c6bb53c48f0df0b57d84265c3f0d2107c29cebb979337e"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={500}>
                  <h3 className="text-fluid-xl font-semibold mb-2 text-black">Comm100</h3>
                  <p className="text-gray-600">Product Design & Development</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="COMING SOON">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163782/rendition/1080p/file.mp4?loc=external&signature=57e4abd75ba0a501a702c52df8c7be01d2dea6097c192f481de11f147aaa85f8"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={600}>
                  <h3 className="text-fluid-xl font-semibold mb-2 text-black">CityColor</h3>
                  <p className="text-gray-600">Brand Strategy & Visual Identity</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>
          </div>
        </Container>
      </section>

      {/* Method Section */}
      <section className="relative bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ScrollMarquee
            baseSpeed={0.8}
            maxSpeedMultiplier={2}
            starSpinSpeed={4}
            lines="dual"
            lineClassName="text-[8vw] font-light uppercase tracking-tight leading-none"
          >
            <span className="mx-8">METHOD</span>
            <span className="mx-8 flex items-center">
              <SpinningStar size={64} className="text-current" />
            </span>
            <span className="mx-8">METHOD</span>
            <span className="mx-8 flex items-center">
              <SpinningStar size={64} className="text-current" />
            </span>
            <span className="mx-8">METHOD</span>
            <span className="mx-8 flex items-center">
              <SpinningStar size={64} className="text-current" />
            </span>
          </ScrollMarquee>
        </div>

        <Container size="xxl" className="relative z-10 py-24 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollRevealText>
                <h2 className="text-fluid-5xl font-bold mb-8">
                  Turning bold vision
                  <br />
                  into brand impact.
                </h2>
              </ScrollRevealText>
              <ScrollRevealText delay={200}>
                <p className="text-fluid-lg text-gray-700 leading-relaxed mb-8 max-w-lg">
                  Brand transformations fall short because they stop at the surface— logos,
                  taglines, campaigns. We go deeper, aligning your business around an Idea Worth
                  Rallying Around®. The result? A brand your people will champion and your audience
                  will love.
                </p>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <TransitionLink
                  url="/method"
                  label="Learn the C/C method"
                  appearance="inline"
                  transitionType="logoWipe"
                  className="text-black border-b border-black hover:border-gray-500 hover:text-gray-500 transition-colors"
                />
              </ScrollRevealText>
            </div>

            <ScrollRevealText delay={300}>
              <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center hover:from-gray-300 hover:to-gray-400 transition-all duration-700 ease-out">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Placeholder</p>
                  </div>
                </div>
                {/* Optional subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
            </ScrollRevealText>
          </div>
        </Container>
      </section>

      {/* About Section with Carousel */}
      <section className="bg-gray-100">
        <div className="py-24 lg:py-40">
          {/* Carousel - aligned to page-wrapper constraints with overflow */}
          <div className="mb-16">
            <Carousel size="lg">
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

          <Container size="xxl">
            <div className="grid grid-cols-12 items-start pb-16">
              {/* This empty spacer ensures the paragraph starts aligned at the 7th column on lg+ */}
              <div className="hidden lg:block lg:col-span-6" />

              {/* Paragraph column: full width on small, right half on large */}
              <div className="col-span-12 lg:col-start-5 lg:col-span-8">
                <ScrollRevealText>
                  <p className="text-fluid-4xl font-medium leading-tight lg:leading-snug">
                    CCIDEALAB® brings together a richly multicultural team with balanced
                    perspectives and shared creativity.
                  </p>
                </ScrollRevealText>

                <ScrollRevealText delay={200}>
                  <div className="mt-8">
                    <TransitionLink
                      url="/about"
                      label="Learn more about C/C IDEA LAB"
                      appearance="inline"
                      transitionType="logoWipe"
                      className="text-black border-b border-black hover:border-gray-600 hover:text-gray-600 transition-colors pb-1"
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
