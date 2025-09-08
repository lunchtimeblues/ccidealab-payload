import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ParallaxImage } from '@/components/ParallaxImage'
import Image from 'next/image'
import { QuickVideo } from '@/components/QuickVideo'
import { TransitionLink } from '@/components/TransitionLink'

export default function NicePage() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-100 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/images/work/nice/Nice_Banner.png"
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
              <span className="mx-8">NICE CLEANING</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">NICE CLEANING</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">NICE CLEANING</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
            </ScrollMarquee>

            {/* Content */}
            <Container size="full">
              <div className="max-w-3xl mt-12 md:mt-18">
                <p className="text-fluid-xl leading-snug text-white">
                  Nice Home Cleaning + Maintenance is dedicated to helping homeowners maintain
                  clean, comfortable, and well-kept living spaces.
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
                Make cleaning feel nice.
              </h2>
            </ScrollRevealText>
            <ScrollRevealText delay={400}>
              <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                <p>
                  Nice is a home cleaning and maintenance brand built to take the stress out of
                  everyday upkeep. With a clean, modern look and a touch of playfulness, the brand
                  makes professional service feel approachable and easy—because cleaning should feel
                  less like a chore, and more like a fresh start.
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
            src="https://player.vimeo.com/progressive_redirect/playback/1116619394/rendition/1080p/file.mp4?loc=external&signature=cf540f33053887fd40162800e7ba837e9ac785d30a376c6e405020a7dab1f05c"
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
                  When home care is simple and stress-free.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    Our goal was to build a brand that makes home care feel easy, approachable, and
                    a little fun. Nice needed to stand out from the sea of generic cleaning services
                    by blending trust and professionalism with a lighthearted personality that makes
                    people smile.
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
            <QuickVideo
              src="https://player.vimeo.com/progressive_redirect/playback/1116619410/rendition/1080p/file.mp4?loc=external&signature=1e52f3d5f266d08870d53070cb62c4e752e08ad909a40b3f6a268668a8a86976"
              autoPlay={true}
              muted={true}
              loop={true}
              className="relative"
            />
            <QuickVideo
              src="https://player.vimeo.com/progressive_redirect/playback/1116619401/rendition/1080p/file.mp4?loc=external&signature=f074a3eab6aeab91b73e459a926a223111996566529c62c1e491453434b32537"
              autoPlay={true}
              muted={true}
              loop={true}
              className="relative"
            />
          </div>
        </Container>
      </section>

      {/* Image Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/nice/Nice_Slides-img-1.jpg"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      {/* Video Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <QuickVideo
            src="https://player.vimeo.com/progressive_redirect/playback/1116619405/rendition/1080p/file.mp4?loc=external&signature=0269a7c092965318040bb2baf4d2d62483ccc0c828028da66c416057fd89768a"
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
            src="https://player.vimeo.com/progressive_redirect/playback/1116619388/rendition/1080p/file.mp4?loc=external&signature=f5adfa6dd131ab11285f485534fe016efccd5ccb96970d9e903cd2157fe23b66"
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
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">Strategy</p>
              </ScrollRevealText>
            </div>
            <div className="md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-3xl font-base text-black mb-8 tracking-tight leading-tight">
                  Fresh, friendly & flexible.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    We shaped the identity around clarity and warmth, supported by a playful edge.
                    Clean typography and a vibrant colour palette balance with cheerful
                    illustrations and sticker-like icons—bringing in moments of delight while
                    keeping the overall look polished and professional.
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
            src="/images/work/nice/Nice_1.png"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      {/* Video Section */}
      <section className="relative bg-gray-100 py-2 lg:py-8 overflow-hidden">
        <Container size="full">
          <QuickVideo
            src="https://player.vimeo.com/progressive_redirect/playback/1116619422/rendition/1080p/file.mp4?loc=external&signature=64fab8b4803b4f307e52466a61cb83742e3f3a891b6324f70ad3082b9ff01001"
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
                  Nice is serious about clean, yet playful in style.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-base text-black leading-relaxed mb-8 md:pr-16">
                  <p>
                    From the website and digital campaigns to client touchpoints and branded
                    stickers, the Nice identity feels both modern and approachable. Friendly copy
                    paired with expressive, emoji-inspired graphics adds charm to the brand
                    experience, reminding clients that home care doesn’t have to feel like a chore.
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
            src="/images/work/nice/Nice_2.png"
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
              src="/images/work/nice/Nice_Stickers-1 1.jpg"
              alt="Comm100 Branded Materials"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/work/nice/Nice_T-shirt-1.jpg"
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
            src="/images/work/nice/Nice_T-shirt-2.jpg"
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
