import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ParallaxImage } from '@/components/ParallaxImage'
import Image from 'next/image'
import { QuickVideo } from '@/components/QuickVideo'
import { TransitionLink } from '@/components/TransitionLink'

export default function MarcoPoloPage() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-100 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/images/work/marcopolo/MarcoPolo_Banner.png"
            alt="Affinity Hero Background"
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
              lineClassName="text-[12vw] text-white font-normal uppercase tracking-tight leading-none"
            >
              <span className="mx-8">MARCO POLO</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">MARCO POLO</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">MARCO POLO</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
            </ScrollMarquee>

            {/* Content */}
            <Container size="full">
              <div className="max-w-3xl mt-12 md:mt-18">
                <p className="text-fluid-xl leading-snug text-white">
                  Perched at the pinnacle of the Cambie Corridor, Marco Polo redefines the way we
                  work and live.
                </p>
              </div>
            </Container>
          </div>

          {/* Hero Footer */}
          <Container size="full" className="w-full">
            <div className="flex justify-between items-end w-full py-6 text-fluid-sm">
              <a
                href="#about"
                className="text-white border-b border-white hover:opacity-70 transition"
              >
                Learn more about our company <span className="inline-block ml-1">↓</span>
              </a>
              <span className="text-white">(SCROLL)</span>
            </div>
          </Container>
        </div>
      </section>

      {/* Project Overview */}
      <section
        id="affinity-overview"
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
                      <p className="text-fluid-sm text-black font-medium">Real Estate</p>
                    </ScrollRevealText>
                  </div>
                </div>
              </div>
            </ScrollRevealText>
          </div>

          <div className="col-span-12 sm:col-span-7 sm:col-start-6">
            <ScrollRevealText delay={200}>
              <h2 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                Redefining Work & Elevating Life
              </h2>
            </ScrollRevealText>
            <ScrollRevealText delay={400}>
              <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                <p>
                  Located at the highest point of Vancouver’s Cambie Corridor, Marco Polo is a bold
                  new vision for modern living and working. Set in the rapidly evolving Oakridge
                  District, it offers forward-thinking spaces designed for entrepreneurs, creatives,
                  and professionals seeking a smarter, more connected way of life.
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
            src="https://player.vimeo.com/progressive_redirect/playback/1111163710/rendition/1080p/file.mp4?loc=external&signature=748efab8acefab5d2920e36729f96e6af3c3316d8ab4390a791e3c4794067ca8"
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
                  Crafting a Landmark Identity for a Landmark Location
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    Our goal was to create a brand presence as ambitious and aspirational as Marco
                    Polo itself, one that speaks to innovation and opportunity. The identity needed
                    to resonate with both business owners and future residents in this dynamic,
                    mixed-use community.
                  </p>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Double Image Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <div className="grid sm:grid-cols-2 gap-8">
            <Image
              src="/images/work/marcopolo/MarcoPolo_1.png"
              alt="Platform Interface Design"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/work/marcopolo/MarcoPolo_tote mockup 1.jpg"
              alt="Platform Interface Design"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Image Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/marcopolo/MarcoPolo_2.png"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      {/* Double Image Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <div className="grid sm:grid-cols-2 gap-8">
            <Image
              src="/images/work/marcopolo/MarcoPolo_brochure mockup 1.jpg"
              alt="Platform Interface Design"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/work/marcopolo/MarcoPolo_box mockup 1.jpg"
              alt="Platform Interface Design"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Image Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/marcopolo/marco-polo-8 1.png"
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
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">Strategy</p>
              </ScrollRevealText>
            </div>
            <div className="md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                  Sophisticated and Scalable
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    We developed a design system that balances elegance with impact - crafted to
                    support everything from sales materials to experiential marketing. Through
                    considered typography, refined layout, and elevated visual cues, the brand
                    reflects the architectural ambition of the project.
                  </p>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Image Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/marcopolo/marco-polo-3 1.png"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      {/* Double Image Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <div className="grid sm:grid-cols-2 gap-8">
            <Image
              src="/images/work/marcopolo/marco-polo bus stop mockup 1.jpg"
              alt="Comm100 Branded Materials"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/work/marcopolo/marco-polo signage mockup 1.jpg"
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
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">
                  Brand Application
                </p>
              </ScrollRevealText>
            </div>
            <div className="md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                  From Street Presence to Takeaway Touchpoints
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    We created a diverse suite of brand assets including large-scale signage, custom
                    merchandise, and print brochures. Every element was designed to maintain visual
                    consistency while amplifying the presence of Marco Polo across touchpoints.
                  </p>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Image Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/marcopolo/marco-polo-7 1.png"
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
