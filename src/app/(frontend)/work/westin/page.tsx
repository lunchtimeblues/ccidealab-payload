import { Container } from '@/components/Container'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ParallaxImage } from '@/components/ParallaxImage'
import Image from 'next/image'
import { QuickVideo } from '@/components/QuickVideo'

export default function Comm100Page() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <ParallaxImage
        src="/images/comm100/comm100_hero_bg.jpg"
        alt="Comm100 Customer Service Platform"
        size="full"
        overlay={true}
        overlayOpacity={0.15}
        parallaxSpeed={0.5}
      >
        <Container size="full" className="h-full flex flex-col justify-center">
          <ScrollRevealText>
            <h1 className="text-fluid-7xl font-medium mb-4 text-white">Comm100</h1>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-white">
              Comm100 is a leading customer service platform that helps businesses deliver
              exceptional customer experiences through omnichannel communication solutions.
            </p>
          </ScrollRevealText>
        </Container>
      </ParallaxImage>

      {/* Project Overview */}
      <section className="relative bg-gray-100 py-32 sm:py-48 overflow-hidden">
        <Container size="full" className="grid sm:grid-cols-12 gap-8">
          <div className="col-span-12 sm:col-span-4">
            <h3 className="text-fluid-xl font-medium mb-6">Project Overview</h3>
            <ul className="space-y-6 text-gray-500 text-fluid-base">
              <li className="flex flex-col">
                <span className="border-t border-gray-300 pt-2">Year</span>
              </li>
              <li className="flex flex-col">
                <span className="border-t border-gray-300 pt-2">Scope</span>
              </li>
              <li className="flex flex-col">
                <span className="border-t border-gray-300 pt-2">Industry</span>
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 sm:col-start-7">
            <h2 className="text-fluid-4xl font-medium mb-4 leading-snug">
              Every channel.
              <br />
              One platform.
            </h2>
            <p className="text-fluid-lg text-gray-500 leading-relaxed max-w-2xl">
              Powered by AI and automation, Comm100 platform unifies communication across every
              touchpoint, from live chat to social media, to deliver seamless, personalized support.
            </p>
          </div>
        </Container>
      </section>

      {/* Video Section */}
      <section className="relative bg-gray-100  overflow-hidden">
        <Container size="full">
          <QuickVideo
            src="https://player.vimeo.com/progressive_redirect/playback/1111163690/rendition/1080p/file.mp4?loc=external&signature=736322fd08c3faf0a0d4de2dea4f8c54673d794cc788f604f3e5962448d66a4e"
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
                <h3 className="text-4xl md:text-5xl font-semi-bold text-black mb-8 leading-tight">
                  Comprehensive Brand Refresh & Marketing transformation
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-lg text-gray-500 leading-relaxed mb-8 md:pr-16">
                  <p>
                    Our goal was to reposition Comm100 as a future-ready tech company without losing
                    its human touch. This meant a full brand refresh, from visual identity and
                    messaging to marketing tools, that reflected their innovation, scale, and global
                    reach.
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
            src="https://player.vimeo.com/progressive_redirect/playback/1111163686/rendition/1080p/file.mp4?loc=external&signature=ad283143480862bde9fff9c4473e1a9954b752cd681dafdea132d8f0aa047963"
            autoPlay={true}
            muted={true}
            loop={true}
            className="relative"
          />
        </Container>
      </section>

      {/* Video Section */}
      <section className="relative bg-gray-100  overflow-hidden">
        <Container size="full">
          <QuickVideo
            src="https://player.vimeo.com/progressive_redirect/playback/1111163698/rendition/1080p/file.mp4?loc=external&signature=031f296266782662c99115de6712ed04ac7412837404da4120da4a1a88c20383"
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
            <div className="lg:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-4xl lg:text-5xl font-semi-bold text-black mb-8 leading-tight">
                  AI-powered, yet human-centered.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-lg text-gray-500 leading-relaxed mb-8 lg:pr-16">
                  <p>
                    We built a brand system that balances cutting-edge technology with empathy and
                    clarity. The design emphasizes accessibility and confidence, while messaging
                    highlights the real-world impact of AI-driven support, proving that smart tech
                    can still feel personal.
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
            src="https://player.vimeo.com/progressive_redirect/playback/1111163703/rendition/1080p/file.mp4?loc=external&signature=c7f06db38c1fa306d454ba1eec4d93da627c217a2fff4947db6b455ae34eb14e"
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
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">Brand Application</p>
              </ScrollRevealText>
            </div>
            <div className="md:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-4xl md:text-5xl font-semi-bold text-black mb-8 leading-tight">
                  Supporting
                  <br />
                  Higher Education Engagement
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-fluid-lg text-gray-500 leading-relaxed mb-8 md:pr-16">
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

      {/* Section: Clean Confident Cohesive */}
      <section className="relative bg-gray-100 py-32 lg:py-48 overflow-hidden">
        <Container size="full">
          <div className="grid sm:grid-cols-2 gap-8">
            <Image
              src="/images/work/comm100/comm100-id-card.jpg"
              alt="Comm100 Branded Materials"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/work/comm100/comm100-waterbottle.jpg"
              alt="Platform Interface Design"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Billboard Section */}
      <section className="relative bg-gray-100 py-32 lg:py-48 overflow-hidden">
        <Container size="full">
          <Image
            src="/images/work/comm100/comm100-conference.jpg"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>
    </div>
  )
}
