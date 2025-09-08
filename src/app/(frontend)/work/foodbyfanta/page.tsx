import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ParallaxImage } from '@/components/ParallaxImage'
import { SmoothScrollButton } from '@/components/SmoothScrollButton'
import Image from 'next/image'
import { QuickVideo } from '@/components/QuickVideo'
import { TransitionLink } from '@/components/TransitionLink'

export default function FoodByFantaPage() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-100 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/images/work/fanta/Fanta_Banner.png"
            alt="Food By Fanta Hero Background"
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
              <span className="mx-8">FOOD BY FANTA</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">FOOD BY FANTA</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">FOOD BY FANTA</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
            </ScrollMarquee>

            {/* Content */}
            <Container size="full">
              <div className="max-w-3xl mt-12 md:mt-18">
                <p className="text-fluid-xl leading-snug text-white">
                  Food by Fanta is a culinary gem nestled in the heart of Langley, BC. This stylish
                  restaurant offers a contemporary dining experience that transcends traditional
                  boundaries.
                </p>
              </div>
            </Container>
          </div>

          {/* Hero Footer */}
          <Container size="full" className="w-full">
            <div className="flex justify-between items-end w-full py-6 text-fluid-sm">
              <SmoothScrollButton
                targetSectionId="foodbyfanta-overview"
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
        id="foodbyfanta-overview"
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
                      <p className="text-fluid-sm text-black font-medium">Food & Beverage</p>
                    </ScrollRevealText>
                  </div>
                </div>
              </div>
            </ScrollRevealText>
          </div>

          <div className="col-span-12 sm:col-span-7 sm:col-start-6">
            <ScrollRevealText delay={200}>
              <h2 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                Bold Flavours. <br />
                Beautifully Branded.
              </h2>
            </ScrollRevealText>
            <ScrollRevealText delay={400}>
              <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                <p>
                  With a vibrant colour palette and a modern serif typeface, we crafted a visual
                  identity that feels elegant yet full of personality, just like the dishes on the
                  menu.
                </p>
              </div>
            </ScrollRevealText>
          </div>
        </Container>
      </section>

      {/* Video Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <QuickVideo
            src="https://player.vimeo.com/progressive_redirect/playback/1116650591/rendition/1080p/file.mp4?loc=external&signature=ff278549788aa8c2cf3866c9608790ac4473e54d148985a62518cd951a31611c"
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
                  A Visual Feast to Match the Menu
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    Our mission was to create a brand that captured the sensory experience of dining
                    at Fanta. We wanted the identity to feel as fresh, exciting, and unforgettable
                    as the food itself — standing out in a competitive dining scene while staying
                    true to the restaurant&apos;s stylish roots.
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
            src="/images/work/fanta/Fanta_img1.jpg"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      {/* Double Video Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <div className="grid sm:grid-cols-2 gap-8">
            <QuickVideo
              src="https://player.vimeo.com/progressive_redirect/playback/1116642819/rendition/720p/file.mp4?loc=external&signature=2af08955d5af7ead148b6203ccc2e755931fc47bbad82093879639844b42914a"
              autoPlay={true}
              muted={true}
              loop={true}
              className="relative"
            />
            <QuickVideo
              src="https://player.vimeo.com/progressive_redirect/playback/1116642843/rendition/720p/file.mp4?loc=external&signature=cf066d629a840e259614ed5414f02b157b8bcb75a7c451ead7d17e01d1496a21"
              autoPlay={true}
              muted={true}
              loop={true}
              className="relative"
            />
          </div>
        </Container>
      </section>

      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/fanta/Fanta_img2.jpg"
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
              src="/images/work/fanta/Fanta_img3.jpg"
              alt="Comm100 Branded Materials"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/work/fanta/Fanta_img4.jpg"
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
                  Elevated and Full of Flair
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    The brand design fuses sophistication with playful details. We used expressive
                    typography, lush colour pairings, and curated print materials to create a
                    polished yet welcoming identity. The visual language invites diners into a space
                    that feels both refined and full of creative spark.
                  </p>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Double Video Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <div className="grid sm:grid-cols-2 gap-8">
            <QuickVideo
              src="https://player.vimeo.com/progressive_redirect/playback/1111163476/rendition/1080p/file.mp4?loc=external&signature=2ebac6d6b95ba114863f4edbb384f2ae7322f5118921227f91b76bd3fb210b7e"
              autoPlay={true}
              muted={true}
              loop={true}
              className="relative"
            />
            <QuickVideo
              src="https://player.vimeo.com/progressive_redirect/playback/1111163462/rendition/1080p/file.mp4?loc=external&signature=3a6a71c0fa1c8b831ceac548f1e7c80608a43ed1f29e0385600f2c280dd14237"
              autoPlay={true}
              muted={true}
              loop={true}
              className="relative"
            />
          </div>
        </Container>
      </section>

      {/* Video Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <QuickVideo
            src="https://player.vimeo.com/progressive_redirect/playback/1111163480/rendition/1080p/file.mp4?loc=external&signature=007a8dba0319967f02d3450a70c908d2ac40f3ed2503c4b1765614c943ae8284"
            autoPlay={true}
            muted={true}
            loop={true}
            className="relative"
          />
        </Container>
      </section>

      {/* Video Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <QuickVideo
            src="https://player.vimeo.com/progressive_redirect/playback/1111163487/rendition/1080p/file.mp4?loc=external&signature=6830801b55b740b2ba9723670ac3b6e0cdb105c62f88689cc5863bc228da0795"
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
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">
                  Brand Application
                </p>
              </ScrollRevealText>
            </div>
            <div className="md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                  Supporting Higher <br />
                  Education Engagement
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    To help Comm100 stand out at major higher-ed conferences, we developed engaging
                    graphics, and presentations, as well as Comm100 merch. Each asset spoke directly
                    to the challenges and priorities of post-secondary institutions—clear,
                    compelling, and conversion-focused.
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
            src="/images/work/fanta/Fanta_Email_mock1 1.png"
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
            src="/images/work/fanta/Fanta_menu mockup 1.jpg"
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
