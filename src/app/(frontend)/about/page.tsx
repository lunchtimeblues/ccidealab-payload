'use client'

import { Container } from '@/components/Container'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ParallaxImage } from '@/components/ParallaxImage'
import { Carousel } from '@/components/Carousel'
import Image from 'next/image'

export default function AboutPage() {
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
                  In 2012, we began with a simple camera, a laptop, and a desire to create. From
                  those early experiments grew a collective of strategists and creators devoted to
                  help shaping brands.
                </p>
              </div>
            </Container>
          </div>

          {/* Hero Footer */}
          <Container size="full" className="w-full">
            <div className="flex justify-between items-end w-full py-6 text-fluid-sm">
              <a href="#about" className="border-b border-black hover:opacity-70 transition">
                Learn more <span className="inline-block ml-1">↓</span>
              </a>
              <span className="text-black/60">(SCROLL)</span>
            </div>
          </Container>
        </div>
      </section>

      {/* Parallax Image Section */}
      <ParallaxImage
        src="/images/about/lobby-large.jpg"
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
      {/*
      <section className="pt-12 pb-2 md:pt-24 md:pb-4 bg-grey-100">
        <ScrollMarquee
          baseSpeed={0.8}
          maxSpeedMultiplier={2}
          lines="dual"
          starSpinSpeed={4}
          lineClassName="text-[12vw] font-semi-bold uppercase tracking-tight leading-none"
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
      </section> */}

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
                <h3 className="text-fluid-3xl font-base text-black mb-8 leading-tight">
                  We blend global perspectives with local insight to create ideas that resonate
                  across cultures and communities.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-lg text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    We are a team shaped by many cultures and perspectives, each bringing a unique
                    lens to how we see the world. This diversity is more than who we are — it is how
                    we work. It pushes us to challenge assumptions and spark new ideas.
                  </p>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>

        <div className="mt-16">
          <Carousel size="xl">
            <div className="text-center">
              <Image
                src="/images/about/team/1-wayne.jpg"
                alt=""
                width={400}
                height={500}
                className="object-cover rounded-lg mb-4"
                priority
              />
              <div className="text-black">
                <h4 className="text-fluid-base font-medium">Wayne Kuo</h4>
                <p className="text-fluid-sm text-gray-600">Principal</p>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/images/about/team/2-anna.jpg"
                alt=""
                width={400}
                height={500}
                className="object-cover rounded-lg mb-4"
              />
              <div className="text-black">
                <h4 className="text-fluid-base font-medium">Anna Morozova</h4>
                <p className="text-fluid-sm text-gray-600">Director, Brand Strategy</p>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/images/about/team/3-doug.jpg"
                alt=""
                width={400}
                height={500}
                className="object-cover rounded-lg mb-4"
              />
              <div className="text-black">
                <h4 className="text-fluid-base font-medium">Douglas Hsieh</h4>
                <p className="text-fluid-sm text-gray-600">Director, Technology</p>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/images/about/team/4-mara.jpg"
                alt=""
                width={400}
                height={500}
                className="object-cover rounded-lg mb-4"
              />
              <div className="text-black">
                <h4 className="text-fluid-base font-medium">Mara Zillums</h4>
                <p className="text-fluid-sm text-gray-600">Art Director, Photography</p>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/images/about/team/5-ugyen.jpg"
                alt=""
                width={400}
                height={500}
                className="object-cover rounded-lg mb-4"
              />
              <div className="text-black">
                <h4 className="text-fluid-base font-medium">Ugyen Wangchuk</h4>
                <p className="text-fluid-sm text-gray-600">Art Director, Videography</p>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/images/about/team/6-joyce.jpg"
                alt=""
                width={400}
                height={500}
                className="object-cover rounded-lg mb-4"
              />
              <div className="text-black">
                <h4 className="text-fluid-base font-medium">Joyce Peng</h4>
                <p className="text-fluid-sm text-gray-600">Art Director, Graphic Design</p>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/images/about/team/7-yvonne.jpg"
                alt=""
                width={400}
                height={500}
                className="object-cover rounded-lg mb-4"
              />
              <div className="text-black">
                <h4 className="text-fluid-base font-medium">Yvonne Zhao</h4>
                <p className="text-fluid-sm text-gray-600">Art Director, Motion Graphics</p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <section className="bg-gray-100 pt-16 sm:pt-24 pb-32 sm:pb-48">
        <Container size="full">
          <ScrollRevealText>
            <p className="text-fluid-lg font-medium text-black mb-8 md:mb-16">Our Principles</p>
          </ScrollRevealText>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12">
            <div>
              <span className="block text-fluid-6xl font-medium text-black mb-4">01.</span>
              <h3 className="font-semibold text-fluid-lg text-black mb-2">Think Big</h3>
              <p className="text-gray-500 text-fluid-base">
                We dare to dream boldly, build ambitious ideas, take transformative leaps, and
                embrace meaningful risks.
              </p>
            </div>

            <div>
              <span className="block text-fluid-6xl font-medium text-black mb-4">02.</span>
              <h3 className="font-semibold text-fluid-xl text-black mb-2">Together First</h3>
              <p className="text-gray-500 text-fluid-lg">
                We thrive as a team, drawing the best from one another—because no one moves
                mountains alone.
              </p>
            </div>

            <div>
              <span className="block text-fluid-6xl font-medium text-black mb-4">03.</span>
              <h3 className="font-semibold text-fluid-xl text-black mb-2">Be Great</h3>
              <p className="text-gray-500 text-fluid-lg">
                We pursue excellence relentlessly, rejecting mediocrity and never settling for “good
                enough.”
              </p>
            </div>

            <div>
              <span className="block text-fluid-6xl font-medium text-black mb-4">04.</span>
              <h3 className="font-semibold text-fluid-xl text-black mb-2">Honest Voices</h3>
              <p className="text-gray-500 text-fluid-lg">
                We see conflict as a healthy force—fueling innovation, strengthening collaboration,
                and sharpening ideas.
              </p>
            </div>

            <div>
              <span className="block text-fluid-6xl font-medium text-black mb-4">05.</span>
              <h3 className="font-semibold text-fluid-xl text-black mb-2">Act Boldly</h3>
              <p className="text-gray-500 text-fluid-lg">
                We prioritize action over talk, focusing our energy on creating rather than just
                discussing.
              </p>
            </div>

            <div>
              <span className="block text-fluid-6xl font-medium text-black mb-4">06.</span>
              <h3 className="font-semibold text-fluid-xl text-black mb-2">Choose Optimism</h3>
              <p className="text-gray-500 text-fluid-lg">
                We believe positivity opens doors while pessimism closes them. Optimism fuels
                creativity, possibility, and new ideas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Parallax Image Section */}
      {/* <ParallaxImage
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        alt="Modern office workspace"
        size="80vh"
        overlay={true}
        overlayOpacity={0.3}
        parallaxSpeed={0.6}
      > */}
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
      {/* </ParallaxImage> */}

      {/* Method Section */}
      {/* <section className="relative bg-gray-100 overflow-hidden">
        <div className="relative md:absolute inset-0 z-0">
          <ScrollMarquee
            baseSpeed={0.8}
            maxSpeedMultiplier={2}
            starSpinSpeed={4}
            lines="dual"
            lineClassName="text-[8vw] font-light uppercase tracking-tight leading-none"
          >
            <span className="mx-8">JOIN US</span>
            <span className="mx-8 flex items-center">
              <SpinningStar size={64} className="text-current" />
            </span>
            <span className="mx-8">JOIN US</span>
            <span className="mx-8 flex items-center">
              <SpinningStar size={64} className="text-current" />
            </span>
            <span className="mx-8">JOIN US</span>
            <span className="mx-8 flex items-center">
              <SpinningStar size={64} className="text-current" />
            </span>
          </ScrollMarquee>
        </div>

        <Container size="full" className="relative z-10 py-24 md:py-40">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollRevealText>
                <h2 className="text-fluid-4xl font-bold mb-8">
                  Turning bold vision
                  <br />
                  into brand impact.
                </h2>
              </ScrollRevealText>
              <ScrollRevealText delay={200} className="flex align-center justify-center">
                <p className="text-fluid-base text-black leading-relaxed mb-8 max-w-2xl">
                  Brand transformations fall short because they stop at the surface— logos,
                  taglines, campaigns. We go deeper, aligning your business around an Idea Worth
                  Rallying Around®. The result? A brand your people will champion and your audience
                  will love.
                </p>
              </ScrollRevealText>
            </div>

            <ScrollRevealText delay={300}>
              <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center hover:from-gray-300 hover:to-gray-400 transition-all duration-700 ease-out">
                  <div className="text-center">
                    <p className="text-fluid-sm text-gray-500">Placeholder</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
            </ScrollRevealText>
          </div>
        </Container>
      </section> */}
    </div>
  )
}
