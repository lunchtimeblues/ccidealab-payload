import { Container } from '@/components/Container'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ParallaxImage } from '@/components/ParallaxImage'
import { Carousel } from '@/components/Carousel'
import Image from 'next/image'

// import { AnimatedMarquee } from '@/components/AnimatedMarquee'

export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-100">
        <div className="flex flex-col justify-between pt-28 pb-8 min-h-screen">
          <div>
            {/* Marquee */}
            <ScrollMarquee
              baseSpeed={0.8}
              maxSpeedMultiplier={2}
              starSpinSpeed={4}
              lines="single"
              direction="right"
              lineClassName="text-[8vw] font-normal uppercase tracking-tight leading-none"
            >
              <span className="mx-8">ABOUT</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">C&C</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">IDEA LAB</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
            </ScrollMarquee>

            {/* Content */}
            <Container size="xl">
              <div className="max-w-3xl mt-12 md:mt-18">
                <p className="text-2xl md:text-3xl leading-snug text-gray-400">
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

      <section className="pt-12 pb-2 lg:pt-24 lg:pb-4 bg-grey-100">
        <ScrollMarquee
          baseSpeed={0.8}
          maxSpeedMultiplier={2}
          lines="dual"
          starSpinSpeed={4}
          lineClassName="text-[12vw] font-semi-bold uppercase tracking-tight leading-none"
        >
          <span className="mx-8">MEET THE TEAM</span>
          <span className="mx-8 flex items-center">
            <SpinningStar size={64} className="text-current" />
          </span>
          <span className="mx-8">MEET THE TEAM</span>
          <span className="mx-8 flex items-center">
            <SpinningStar size={64} className="text-current" />
          </span>
        </ScrollMarquee>
      </section>

      {/* Story Section */}
      <section className="py-12 lg:py-24 bg-grey-100">
        <Container size="xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollRevealText>
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
                  Our Story
                </h2>
              </ScrollRevealText>
            </div>
            <div className="lg:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-2xl lg:text-3xl font-semi-bold text-black mb-8 leading-tight">
                  Founded on the belief that great brands are more than logos—they&apos;re
                  movements.
                </h3>
              </ScrollRevealText>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <ScrollRevealText delay={400}>
                  <p>
                    C/C IDEA LAB was born from a simple observation: in a world saturated with
                    noise, only the most compelling ideas break through. We don&apos;t just create
                    brands; we craft rallying points that inspire action, drive change, and build
                    lasting connections.
                  </p>
                </ScrollRevealText>
                <ScrollRevealText delay={600}>
                  <p>
                    Our approach combines strategic thinking with creative excellence, ensuring
                    every brand we touch becomes a beacon for its community. We work with visionary
                    leaders and innovative companies who understand that great design isn&apos;t
                    just about looking good—it&apos;s about making a difference.
                  </p>
                </ScrollRevealText>
                <ScrollRevealText delay={800}>
                  <p>
                    From startups disrupting industries to established companies reinventing
                    themselves, we partner with organizations ready to stand for something bigger
                    than themselves.
                  </p>
                </ScrollRevealText>
              </div>
            </div>
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

          <Container size="xxl">
            <div className="grid grid-cols-12 items-start pb-16">
              {/* This empty spacer ensures the paragraph starts aligned at the 7th column on lg+ */}
              <div className="hidden lg:block lg:col-span-6" />

              {/* Paragraph column: full width on small, right half on large */}
              <div className="col-span-12 lg:col-start-5 lg:col-span-8">
                <ScrollRevealText>
                  <p className="text-xl md:text-3xl lg:text-4xl font-medium leading-tight lg:leading-snug">
                    CCIDEALAB® brings together a richly multicultural team with balanced
                    perspectives and shared creativity.
                  </p>
                </ScrollRevealText>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <Container size="xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            <div>
              <span className="block text-6xl font-bold text-black mb-4">01.</span>
              <h3 className="font-semibold text-lg text-black mb-2">Do Big Things®</h3>
              <p className="text-gray-500 text-base">
                We dare to do big things, create big ideas, make big leaps, and take big risks.
              </p>
            </div>

            <div>
              <span className="block text-6xl font-bold text-black mb-4">02.</span>
              <h3 className="font-semibold text-lg text-black mb-2">We Before Me</h3>
              <p className="text-gray-500 text-base">
                We work as a team to get the best from each other. No one can move a mountain alone.
              </p>
            </div>

            <div>
              <span className="block text-6xl font-bold text-black mb-4">03.</span>
              <h3 className="font-semibold text-lg text-black mb-2">Great Not Good</h3>
              <p className="text-gray-500 text-base">
                We are obsessed with excellence and refuse to accept mediocrity or good enough.
              </p>
            </div>

            <div>
              <span className="block text-6xl font-bold text-black mb-4">04.</span>
              <h3 className="font-semibold text-lg text-black mb-2">Radical Candor</h3>
              <p className="text-gray-500 text-base">
                We recognize conflict as a healthy and valuable tool that makes us more innovative
                and collaborative.
              </p>
            </div>

            <div>
              <span className="block text-6xl font-bold text-black mb-4">05.</span>
              <h3 className="font-semibold text-lg text-black mb-2">Play Offense</h3>
              <p className="text-gray-500 text-base">
                We spend as much time as possible doing and as little time as possible talking about
                doing.
              </p>
            </div>

            <div>
              <span className="block text-6xl font-bold text-black mb-4">06.</span>
              <h3 className="font-semibold text-lg text-black mb-2">Glass Half Full</h3>
              <p className="text-gray-500 text-base">
                Positivity creates opportunity; pessimism kills it. We are optimistic about the
                future, and in turn, promote creativity and new ideas.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
