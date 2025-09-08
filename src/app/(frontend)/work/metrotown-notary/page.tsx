import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ParallaxImage } from '@/components/ParallaxImage'
import { SmoothScrollButton } from '@/components/SmoothScrollButton'
import Image from 'next/image'
import { QuickVideo } from '@/components/QuickVideo'
import { TransitionLink } from '@/components/TransitionLink'

export default function MetrotownNotaryPage() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-100 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/images/work/metrotown-notary/mnotary_banner.jpg"
            alt="Metrotown Notary Hero Background"
            parallaxSpeed={0.5}
            size="full"
            overlay={true}
            overlayOpacity={0.3}
          />
        </div>

        <div className="relative z-20 flex flex-col justify-between pt-44 pb-8 min-h-screen">
          <div>
            {/* Marquee */}
            <ScrollMarquee
              baseSpeed={0.8}
              maxSpeedMultiplier={2}
              starSpinSpeed={4}
              lines="single"
              direction="left"
              lineClassName="text-[23vw] md:text-[12vw] text-white font-normal uppercase tracking-tight leading-none"
            >
              <span className="mx-8">METROTOWN NOTARY</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">METROTOWN NOTARY</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">METROTOWN NOTARY</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
            </ScrollMarquee>

            {/* Content */}
            <Container size="full">
              <div className="max-w-3xl mt-12 md:mt-18">
                <p className="text-fluid-xl leading-snug text-white">
                  Metrotown Notary is a real estate focused notary public practice located at
                  Station Square, and is within walking distance of Metrotown Metropolis Mall in
                  Burnaby.
                </p>
              </div>
            </Container>
          </div>

          {/* Hero Footer */}
          <Container size="full" className="w-full">
            <div className="flex justify-between items-end w-full py-6 text-fluid-sm">
              <SmoothScrollButton
                targetSectionId="metrotown-notary-overview"
                className="text-white border-b border-white hover:opacity-70 transition"
              >
                Learn more <span className="inline-block ml-1">↓</span>
              </SmoothScrollButton>
              <span className="text-white">(SCROLL)</span>
            </div>
          </Container>
        </div>
      </section>

      {/* Project Overview */}
      <section
        id="metrotown-notary-overview"
        className="relative bg-gray-100 py-32 sm:py-48 overflow-hidden"
      >
        <Container size="full" className="grid sm:grid-cols-12 gap-8">
          <div className="col-span-12 sm:col-span-4">
            <ScrollRevealText>
              <div className="mb-12">
                {/* Project Details */}
                <div className="space-y-6">
                  <div className="border-b border-gray-300 pb-4">
                    <ScrollRevealText delay={200}>
                      <p className="text-fluid-sm text-gray-600 mb-2">Scope</p>
                      <p className="text-fluid-sm text-black font-medium">
                        Brand Strategy, Creative Production, Digital Experience Design, Marketing &
                        Growth
                      </p>
                    </ScrollRevealText>
                  </div>

                  <div className="border-b border-gray-300 pb-4">
                    <ScrollRevealText delay={300}>
                      <p className="text-fluid-sm text-gray-600 mb-2">Industry</p>
                      <p className="text-fluid-sm text-black font-medium">Service</p>
                    </ScrollRevealText>
                  </div>
                </div>
              </div>
            </ScrollRevealText>
          </div>

          <div className="col-span-12 sm:col-span-7 sm:col-start-6">
            <ScrollRevealText delay={200}>
              <h2 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                Modern Practice & <br />
                Timeless Trust. One platform.
              </h2>
            </ScrollRevealText>
            <ScrollRevealText delay={400}>
              <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                <p>
                  In crafting this brand identity, we opted for a geometric sans-serif typeface
                  paired with a minimal, primarily greyscale colour palette. This deliberate design
                  choice resulted in a brand that reflects forward-thinking innovation, boldness,
                  and sophistication. We chose vibrant red as an accent colour for the brand.
                </p>
              </div>
            </ScrollRevealText>
          </div>
        </Container>
      </section>

      {/* Video Section */}
      <section className="relative bg-gray-100  overflow-hidden">
        <Container size="full">
          <QuickVideo
            src="https://player.vimeo.com/progressive_redirect/playback/1111163721/rendition/1080p/file.mp4?loc=external&signature=81bb08fa45622d74cd24dea62440c00cd795ee610fe856a621ff86dd12e6abf7"
            autoPlay={true}
            muted={true}
            loop={true}
            className="relative"
          />
        </Container>
      </section>

      <section className="relative bg-gray-100 py-32 md:py-48 overflow-hidden">
        <Container size="full">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <ScrollRevealText>
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">Objective</p>
              </ScrollRevealText>
            </div>
            <div className="md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                  A Contemporary Identity for a Growing Practice
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    Our goal was to establish a modern, trustworthy brand that sets Metrotown Notary
                    apart in a traditionally conservative industry. The identity needed to signal
                    credibility, while also resonating with a younger, real estate-savvy
                    demographic.
                  </p>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/metrotown-notary/mnotary_mock.png"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <div className="grid sm:grid-cols-2 gap-8">
            <Image
              src="/images/work/metrotown-notary/Mnotary_bottle mockup 1.jpg"
              alt="Metrotown Notary Branded Materials"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/work/metrotown-notary/Mnotary_sign mockup 1.jpg"
              alt="Platform Interface Design"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="relative bg-gray-100 py-32 md:py-48 overflow-hidden">
        <Container size="full">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <ScrollRevealText>
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">Strategy</p>
              </ScrollRevealText>
            </div>
            <div className="md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                  Clean. Confident. Cohesive.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    We created a cohesive system across brand, print, and digital touchpoints. From
                    business cards and signage to a streamlined website, every element reinforces
                    the brand&apos;s professional yet approachable tone. The new brand strikes a
                    balance between formality and freshness.
                  </p>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/metrotown-notary/mnotary-gif.jpg"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/metrotown-notary/metrotown-notary-3 1.png"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      <section className="relative bg-gray-100 py-32 md:py-48 overflow-hidden">
        <Container size="full">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <ScrollRevealText>
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">
                  Brand Application
                </p>
              </ScrollRevealText>
            </div>
            <div className="md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                  Design That Builds Recognition
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    Print collateral and a responsive website rounded out the identity, designed to
                    support day-to-day operations while elevating the client experience. Each piece
                    was crafted with consistency and clarity in mind.
                  </p>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/metrotown-notary/metrotown-notary-6 1.png"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <div className="grid sm:grid-cols-2 gap-8">
            <Image
              src="/images/work/metrotown-notary/Mnotary_sign mockup 2.jpg"
              alt="Metrotown Notary Branded Materials"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/work/metrotown-notary/Mnotary_phone mockup 1.jpg"
              alt="Platform Interface Design"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/metrotown-notary/metrotown-notary-7 1.png"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      {/* Back to Work Link */}
      <section className="bg-gray-100 py-16">
        <Container size="full">
          <div className="flex justify-end">
            <TransitionLink
              url="/work"
              className="text-black border-b border-black hover:opacity-70 transition text-fluid-sm"
            >
              Back to Work <span className="inline-block ml-1">↗</span>
            </TransitionLink>
          </div>
        </Container>
      </section>
    </div>
  )
}
