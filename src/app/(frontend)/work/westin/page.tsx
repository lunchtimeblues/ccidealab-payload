import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ParallaxImage } from '@/components/ParallaxImage'
import { SmoothScrollButton } from '@/components/SmoothScrollButton'
import Image from 'next/image'
import { QuickVideo } from '@/components/QuickVideo'
import { TransitionLink } from '@/components/TransitionLink'

export default function WestinPage() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-100 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/images/work/westin/Westin_Banner.png"
            alt="Westin Hero Background"
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
              <span className="mx-8">WESTIN</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">WESTIN</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">WESTIN</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
            </ScrollMarquee>

            {/* Content */}
            <Container size="full">
              <div className="max-w-3xl mt-12 md:mt-18">
                <p className="text-fluid-xl leading-snug text-white">
                  The Westin Bayshore Hotel is a waterfront retreat in downtown Vancouver, BC,
                  offering panoramic views of the marina, mountains, and Stanley Park. Combining
                  resort-style amenities with urban sophistication, it’s a destination for both
                  relaxation and connection to the city.
                </p>
              </div>
            </Container>
          </div>

          {/* Hero Footer */}
          <Container size="full" className="w-full">
            <div className="flex justify-between items-end w-full py-6 text-fluid-sm">
              <SmoothScrollButton
                targetSectionId="westin-overview"
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
      <section id="westin-overview" className="relative bg-gray-100 py-32 sm:py-48 overflow-hidden">
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
                      <p className="text-fluid-sm text-black font-medium">Hospitality</p>
                    </ScrollRevealText>
                  </div>
                </div>
              </div>
            </ScrollRevealText>
          </div>

          <div className="col-span-12 sm:col-span-7 sm:col-start-6">
            <ScrollRevealText delay={200}>
              <h2 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                Elevating Wellness Through Storytelling
              </h2>
            </ScrollRevealText>
            <ScrollRevealText delay={400}>
              <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                <p>
                  The high production quality and serene pacing of the video enhances the guest
                  experience by immersing visitors in the brand’s wellness ethos from the moment
                  they enter the hotel environment, reinforcing Westin’s positioning as a leader in
                  hospitality centered on wellbeing.
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
            src="https://player.vimeo.com/progressive_redirect/playback/1116634463/rendition/1080p/file.mp4?loc=external&signature=37aae1ac8920d4e17c5640c93554abf713162124c60bdcb1225acc12180476ed"
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
                  Sanctuary of Calm
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    The video highlights the tranquil poolside area and luxurious sauna facilities,
                    capturing the serene ambiance that invites guests to unwind and rejuvenate.
                    Through warm lighting and fluid camera movements, these scenes convey a
                    sanctuary of relaxation and wellness, emphasizing Westin’s focus on holistic
                    self-care and mindful rest.
                  </p>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Video Section */}
      <section className="relative bg-gray-100  overflow-hidden">
        <Container size="full">
          <QuickVideo
            src="https://player.vimeo.com/progressive_redirect/playback/1116612502/rendition/1080p/file.mp4?loc=external&signature=4bd75cb59573abff94e5648c61a8afbe2eefc73b79c2a843dd3393ad86e253b4"
            autoPlay={true}
            muted={true}
            loop={true}
            className="relative"
          />
        </Container>
      </section>

      {/* Double Image Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <div className="grid sm:grid-cols-2 gap-8">
            <Image
              src="/images/work/westin/Westin_2.png"
              alt="Comm100 Branded Materials"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/work/westin/Westin_3.png"
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
                  Showcasing Westin’s Social Spirit
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    The film’s compelling visual storytelling not only communicates the brand’s
                    wellness values but also highlights Westin’s vibrant social atmosphere. Elegant
                    scenes from the winter gala, the stylish bar, and expertly crafted cocktails
                    showcase the sophisticated yet inviting environment Westin offers for
                    celebration and connection, enhancing engagement and broadening audience reach
                    across digital touchpoints.
                  </p>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Video Section */}
      <section className="relative bg-gray-100  overflow-hidden">
        <Container size="full">
          <QuickVideo
            src="https://player.vimeo.com/progressive_redirect/playback/1116612493/rendition/1080p/file.mp4?loc=external&signature=d97cb22e464bc59da4a27687956d7214e0e90a8532abf3f45dd3abf3b68bc0bf"
            autoPlay={true}
            muted={true}
            loop={true}
            className="relative"
          />
        </Container>
      </section>

      {/* Double Video Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <div className="grid sm:grid-cols-2 gap-8">
            <QuickVideo
              src="https://player.vimeo.com/progressive_redirect/playback/1116612507/rendition/720p/file.mp4?loc=external&signature=5308d8870e382be09695aaa4d84c6615dbc1affae5aeebd8ad47ed4b6b3b3df3"
              autoPlay={true}
              muted={true}
              loop={true}
              className="relative"
            />
            <QuickVideo
              src="https://player.vimeo.com/progressive_redirect/playback/1116612480/rendition/720p/file.mp4?loc=external&signature=bc92a157f5b0a6df9deb6d54ee0c3e13de7f5533f2645d78c6f7be32f04438ec"
              autoPlay={true}
              muted={true}
              loop={true}
              className="relative"
            />
          </div>
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
