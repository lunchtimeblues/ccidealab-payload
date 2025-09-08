import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ParallaxImage } from '@/components/ParallaxImage'
import { SmoothScrollButton } from '@/components/SmoothScrollButton'
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
            src="/images/work/ubereats/UberEats_Banner.png"
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
              lineClassName="text-[23vw] md:text-[12vw] text-white font-normal uppercase tracking-tight leading-none"
            >
              <span className="mx-8">UBEREATS</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">UBEREATS</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">UBEREATS</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
            </ScrollMarquee>

            {/* Content */}
            <Container size="full">
              <div className="max-w-3xl mt-12 md:mt-18">
                <p className="text-fluid-xl leading-snug text-white">
                  Uber Eats is the food delivery platform that brings your favorite meals from local
                  restaurants straight to your door — fast, fresh, and just a tap away. It turns
                  everyday moments into effortless dining experiences.
                </p>
              </div>
            </Container>
          </div>

          {/* Hero Footer */}
          <Container size="full" className="w-full">
            <div className="flex justify-between items-end w-full py-6 text-fluid-sm">
              <SmoothScrollButton
                targetSectionId="ubereats-overview"
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
        id="ubereats-overview"
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
                      <p className="text-fluid-sm text-black font-medium">Creative Production</p>
                    </ScrollRevealText>
                  </div>

                  <div className="border-b border-gray-300 pb-4">
                    <ScrollRevealText delay={300}>
                      <p className="text-fluid-sm text-gray-600 mb-2">Industry</p>
                      <p className="text-fluid-sm text-black font-medium">Technology</p>
                    </ScrollRevealText>
                  </div>
                </div>
              </div>
            </ScrollRevealText>
          </div>

          <div className="col-span-12 sm:col-span-7 sm:col-start-6">
            <ScrollRevealText delay={200}>
              <h2 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                Turning cravings into clicks.
              </h2>
            </ScrollRevealText>
            <ScrollRevealText delay={400}>
              <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                <p>
                  Every photo on Uber Eats is a moment of decision-making. We helped the platform
                  strengthen those moments by elevating over 1,500 dishes into imagery that was both
                  authentic to each restaurant and consistent with Uber Eats’ standards. The impact
                  was immediate: clearer choices, stronger restaurant presence, and a smoother path
                  from craving to conversion.
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
            src="https://player.vimeo.com/progressive_redirect/playback/1116633338/rendition/1080p/file.mp4?loc=external&signature=73b4ec24a320db6d318922e608ccef03ef9c0b08fefcaf4d43e4710e4ebe338f"
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
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">Applications</p>
              </ScrollRevealText>
            </div>
            <div className="md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                  Where localized content drives big impact.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    We created localized assets that felt personal while aligning with Uber Eats’
                    global brand. These images are seamlessly across menus, geo-targeted ads,
                    outdoor campaigns, and national promotions. These local contents are designed to
                    fuel advertising campaigns with global consistency.
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
            src="/images/work/ubereats/UberEats_1.jpg"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      {/* Image Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/ubereats/UberEats_2.png"
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
                  Consistency across digital platforms.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    All final images were delivered for use within the Uber Eats ecosystem to
                    enhance restaurant listings. Our work helped improve the visual consistency of
                    menus and gave restaurant partners a polished, professional edge in a highly
                    competitive platform.
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
              src="/images/work/ubereats/UberEats_3.png"
              alt="Comm100 Branded Materials"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/work/ubereats/UberEats_4.png"
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
            src="/images/work/ubereats/UberEats_5.png"
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
                  Food Photography
                </p>
              </ScrollRevealText>
            </div>
            <div className="md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                  Staying true to UberEat’s visual guidelines.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    Each shot was styled and composed to highlight the food’s best features while
                    staying true to Uber Eats’ visual guidelines. Working on-location, we stylized
                    and used clean angles to create consistent, in-app–ready imagery across a wide
                    range of cuisines.
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
              src="/images/work/ubereats/UberEats_6.png"
              alt="Comm100 Branded Materials"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/work/ubereats/UberEats_7.png"
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
            src="/images/work/ubereats/UberEats_8.png"
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
              src="/images/work/ubereats/UberEats_9.png"
              alt="Comm100 Branded Materials"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/work/ubereats/UberEats_10.png"
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
            src="/images/work/ubereats/UberEats_11.png"
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
