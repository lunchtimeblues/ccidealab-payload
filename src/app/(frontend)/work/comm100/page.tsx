import { Container } from '@/components/Container'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ParallaxImage } from '@/components/ParallaxImage'
import Image from 'next/image'

export default function Comm100Page() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <ParallaxImage
        src="/images/comm100/hero.jpg" // replace with actual hero image path
        alt="Comm100 Customer Service Platform"
        size="100vh"
        overlay={true}
        overlayOpacity={0.3}
        parallaxSpeed={0.5}
      >
        <Container size="xxl" className="h-full flex flex-col justify-center">
          <ScrollRevealText>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Comm100</h1>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed">
              Comm100 is a leading customer service platform that helps businesses deliver 
              exceptional customer experiences through omnichannel communication solutions.
            </p>
          </ScrollRevealText>
        </Container>
      </ParallaxImage>

      {/* Project Overview */}
      <section className="py-16 lg:py-24">
        <Container size="xxl">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left column */}
            <div className="lg:col-span-4 space-y-2 text-sm">
              <p>Project Overview</p>
              <ul className="space-y-1 text-gray-500">
                <li>Client</li>
                <li>Year</li>
                <li>Services</li>
              </ul>
            </div>

            {/* Right column */}
            <div className="lg:col-span-8">
              <ScrollRevealText>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Elevating Customer Experience Through Design.
                </h2>
              </ScrollRevealText>
              <ScrollRevealText delay={200}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In the competitive customer service technology space, we crafted a modern 
                  brand identity for Comm100 that communicates reliability, innovation, and 
                  human connection. The result bridges technology with empathy, creating 
                  lasting customer relationships.
                </p>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Large Image */}
      <section>
        <Image
          src="/images/comm100/branding-1.jpg"
          alt="Branding Presentation"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
      </section>

      {/* Section: Clean Confident Cohesive */}
      <section className="py-16">
        <Container size="xxl">
          <ScrollRevealText>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">
              Clean. Confident. Cohesive.
            </h3>
          </ScrollRevealText>
          <div className="grid sm:grid-cols-2 gap-8">
            <Image
              src="/images/comm100/item-1.jpg"
              alt="Comm100 Branded Materials"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/comm100/item-2.jpg"
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
            src="/images/comm100/billboard.jpg"
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
            src="/images/comm100/bus-stop.jpg"
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
              src="/images/comm100/signage.jpg"
              alt="Signage Design"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/comm100/phone.jpg"
              alt="Mobile View"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-8">
            <Image
              src="/images/comm100/business-cards.jpg"
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
