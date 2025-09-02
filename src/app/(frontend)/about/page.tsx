'use client'

import { useEffect } from 'react'
import { Container } from '@/components/Container'
import { TransitionLink } from '@/components'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ParallaxImage } from '@/components/ParallaxImage'
import { Carousel } from '@/components/Carousel'
import Image from 'next/image'

export default function AboutPage() {
  // Simple scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
              <span className="mx-8">ABOUT</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">ABOUT</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">ABOUT</span>
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

      {/* Parallax Image Section */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        alt="Modern office workspace"
        size="80vh"
        overlay={true}
        overlayOpacity={0.3}
        parallaxSpeed={0.6}
      >
        {/* <Container className="text-center text-white">
          <ScrollRevealText>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Ideas Worth
              <br />
              Rallying Around®
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              We believe in the power of bold ideas that bring people together
            </p>
          </ScrollRevealText>
        </Container> */}
      </ParallaxImage>

      <section className="pt-12 pb-2 md:pt-24 md:pb-4 bg-grey-100">
        <ScrollMarquee
          baseSpeed={0.8}
          maxSpeedMultiplier={2}
          lines="dual"
          starSpinSpeed={4}
          lineClassName="text-[10vw] font-semi-bold uppercase tracking-tight leading-none"
        >
          <span className="mx-8">OUR TEAM</span>
          <span className="mx-8 flex items-center">
            <SpinningStar size={64} className="text-current" />
          </span>
          <span className="mx-8">OUR TEAM</span>
          <span className="mx-8 flex items-center">
            <SpinningStar size={64} className="text-current" />
          </span>
        </ScrollMarquee>
      </section>

      {/* Story Section */}
      <section className="py-32 sm:py-48 bg-grey-100">
        <Container size="full">
          <div className="grid sm:grid-cols-12 gap-8 sm:gap-16">
            <div className="col-span-12 sm:col-span-4">
              <ScrollRevealText>
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">Our Story</p>
              </ScrollRevealText>
            </div>
            <div className="col-span-12 sm:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-5xl font-base text-black mb-8 leading-tight">
                  Founded on the belief that great brands are more than logos—they&apos;re
                  movements.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-lg text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    Here inside Motto®, diversity is critical to extracting insanely strategic and
                    creative outcomes. Every person on our team comes together to amplify our
                    individual and collective talents, so you can experience high-functioning
                    diversity at work, delivering massive value for your company.
                  </p>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>

        <div className="mt-16">
          <Carousel size="xxl">
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
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=500&fit=crop&crop=center"
              alt="Brand Strategy - C/C IDEA LAB Strategy"
              width={400}
              height={500}
              className="object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=400&fit=crop&crop=center"
              alt="Global Impact - C/C IDEA LAB Worldwide"
              width={500}
              height={400}
              className="object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=700&fit=crop&crop=center"
              alt="Future Forward - C/C IDEA LAB Tomorrow"
              width={400}
              height={700}
              className="object-cover"
            />
          </Carousel>
        </div>
      </section>

      <section className="bg-gray-100 py-32 sm:py-48">
        <Container size="full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12">
            <div>
              <span className="block text-fluid-6xl font-medium text-black mb-4">01.</span>
              <h3 className="font-semibold text-fluid-lg text-black mb-2">Do Big Things®</h3>
              <p className="text-gray-500 text-fluid-base">
                We dare to do big things, create big ideas, make big leaps, and take big risks.
              </p>
            </div>

            <div>
              <span className="block text-fluid-6xl font-medium text-black mb-4">02.</span>
              <h3 className="font-semibold text-fluid-xl text-black mb-2">We Before Me</h3>
              <p className="text-gray-500 text-fluid-lg">
                We work as a team to get the best from each other. No one can move a mountain alone.
              </p>
            </div>

            <div>
              <span className="block text-fluid-6xl font-medium text-black mb-4">03.</span>
              <h3 className="font-semibold text-fluid-xl text-black mb-2">Great Not Good</h3>
              <p className="text-gray-500 text-fluid-lg">
                We are obsessed with excellence and refuse to accept mediocrity or good enough.
              </p>
            </div>

            <div>
              <span className="block text-fluid-6xl font-medium text-black mb-4">04.</span>
              <h3 className="font-semibold text-fluid-xl text-black mb-2">Radical Candor</h3>
              <p className="text-gray-500 text-fluid-lg">
                We recognize conflict as a healthy and valuable tool that makes us more innovative
                and collaborative.
              </p>
            </div>

            <div>
              <span className="block text-fluid-6xl font-medium text-black mb-4">05.</span>
              <h3 className="font-semibold text-fluid-xl text-black mb-2">Play Offense</h3>
              <p className="text-gray-500 text-fluid-lg">
                We spend as much time as possible doing and as little time as possible talking about
                doing.
              </p>
            </div>

            <div>
              <span className="block text-fluid-6xl font-medium text-black mb-4">06.</span>
              <h3 className="font-semibold text-fluid-xl text-black mb-2">Glass Half Full</h3>
              <p className="text-gray-500 text-fluid-lg">
                Positivity creates opportunity; pessimism kills it. We are optimistic about the
                future, and in turn, promote creativity and new ideas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Parallax Image Section */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        alt="Modern office workspace"
        size="80vh"
        overlay={true}
        overlayOpacity={0.3}
        parallaxSpeed={0.6}
      >
        {/* <Container className="text-center text-white">
          <ScrollRevealText>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Ideas Worth
              <br />
              Rallying Around®
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              We believe in the power of bold ideas that bring people together
            </p>
          </ScrollRevealText>
        </Container> */}
      </ParallaxImage>

      {/* Join Us Section */}
      <section className="relative bg-gray-100 overflow-hidden">
        <Container size="full" className="relative z-10 py-24 sm:py-40">
          <div className="grid sm:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollRevealText>
                <h2 className="text-fluid-5xl font-bold mb-8">
                  Turning bold vision
                  <br />
                  into brand impact.
                </h2>
              </ScrollRevealText>
              <ScrollRevealText delay={200}>
                <p className="text-fluid-lg text-black leading-relaxed mb-8 max-w-2xl">
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
                    <p className="text-fluid-sm text-gray-500">Placeholder</p>
                  </div>
                </div>
                {/* Optional subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
            </ScrollRevealText>
          </div>
        </Container>
      </section>
    </div>
  )
}
