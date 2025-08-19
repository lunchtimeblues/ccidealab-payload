import { Container } from '@/components/Container'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ParallaxImage } from '@/components/ParallaxImage'
import Image from 'next/image'
import { ScrollVideo } from '@/components/ScrollVideo'

export default function Comm100Page() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <ParallaxImage
        src="/images/comm100/comm100_hero_bg.jpg"
        alt="Comm100 Customer Service Platform"
        size="full"
        overlay={true}
        overlayOpacity={0.15}
        parallaxSpeed={0.5}
      >
        <Container size="xxl" className="h-full flex flex-col justify-center">
          <ScrollRevealText>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Comm100</h1>
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
      <section className="py-16 lg:py-24 bg-grey-100">
        <Container size="xxl" className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h3 className="text-xl font-semibold mb-6">Project Overview</h3>
            <ul className="space-y-6 text-gray-700 text-base">
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

          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
              Every channel.
              <br />
              One platform.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Powered by AI and automation, Comm100 platform unifies communication across every
              touchpoint, from live chat to social media, to deliver seamless, personalized support.
            </p>
          </div>
        </Container>
      </section>

      {/* Scroll Video Section */}
      <ScrollVideo
        src="https://player.vimeo.com/progressive_redirect/playback/1111163690/rendition/1080p/file.mp4?loc=external&signature=736322fd08c3faf0a0d4de2dea4f8c54673d794cc788f604f3e5962448d66a4e"
        autoPlay={true}
        muted={true}
        loop={true}
        className="relative"
      />

      {/* Section: Clean Confident Cohesive */}
      <section className="py-16">
        <Container size="xxl">
          <ScrollRevealText>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">Clean. Confident. Cohesive.</h3>
          </ScrollRevealText>
          <div className="grid sm:grid-cols-2 gap-8">
            <Image
              src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=800&fit=crop&crop=center"
              alt="Comm100 Branded Materials"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=800&fit=crop&crop=center"
              alt="Platform Interface Design"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Billboard Section */}
      <section className="py-16">
        <Container size="xxl">
          <Image
            src="https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=1600&h=900&fit=crop&crop=center"
            alt="Billboard Design"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      {/* Bus Stop Advertising */}
      <section className="py-16">
        <Container size="xxl">
          <ScrollRevealText>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">
              Design That Builds Recognition
            </h3>
          </ScrollRevealText>
          <Image
            src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&h=900&fit=crop&crop=center"
            alt="Bus Stop Ads"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </Container>
      </section>

      {/* Final Grid */}
      <section className="py-16">
        <Container size="xxl">
          <div className="grid sm:grid-cols-2 gap-8">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=800&fit=crop&crop=center"
              alt="Signage Design"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=800&fit=crop&crop=center"
              alt="Mobile View"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-8">
            <Image
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1600&h=900&fit=crop&crop=center"
              alt="Business Cards"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </Container>
      </section>
    </div>
  )
}
