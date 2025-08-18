import { Container } from '@/components/Container'
import { PremiumTransitionLink } from '@/components'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ParallaxImage } from '@/components/ParallaxImage'
import { Carousel } from '@/components/Carousel'
import { MouseFollower } from '@/components/MouseFollower'
import Image from 'next/image'

export default function WorkPage() {
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
              direction="left"
              lineClassName="text-[8vw] font-normal uppercase tracking-tight leading-none"
            >
              <span className="mx-8">WORK</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">WORK</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
              <span className="mx-8">WORK</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
            </ScrollMarquee>

            {/* Content */}
            <Container size="xxl">
              <div className="max-w-3xl mt-12 md:mt-18">
                <p className="text-2xl md:text-3xl leading-snug text-black">
                  See how we partner with visionary teams to build brands that stand out and push
                  the boundaries of innovation.
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

      {/* Featured Work Section with Mouse Follower */}
      <section className="py-32 bg-gray-100">
        <Container size="xxl">
          <ScrollRevealText>
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-black">
              Featured Work
            </h2>
          </ScrollRevealText>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <MouseFollower text="COMING SOON">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <ScrollRevealText delay={100}>
                  <h3 className="text-xl font-semibold mb-2 text-black">Affinity Group</h3>
                  <p className="text-gray-600">Brand Identity & Web Development</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="COMING SOON">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <ScrollRevealText delay={200}>
                  <h3 className="text-xl font-semibold mb-2 text-black">Pokebar</h3>
                  <p className="text-gray-600">Digital Strategy & UX Design</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="COMING SOON">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <ScrollRevealText delay={300}>
                  <h3 className="text-xl font-semibold mb-2 text-black">Marco Polo</h3>
                  <p className="text-gray-600">Creative Direction & Branding</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="COMING SOON">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <ScrollRevealText delay={400}>
                  <h3 className="text-xl font-semibold mb-2 text-black">Metrotown Notary</h3>
                  <p className="text-gray-600">Investment Platform & Identity</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="COMING SOON">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <ScrollRevealText delay={500}>
                  <h3 className="text-xl font-semibold mb-2 text-black">Comm100</h3>
                  <p className="text-gray-600">Product Design & Development</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="COMING SOON">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <ScrollRevealText delay={600}>
                  <h3 className="text-xl font-semibold mb-2 text-black">CityColor</h3>
                  <p className="text-gray-600">Brand Strategy & Visual Identity</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>
          </div>
        </Container>
      </section>
    </div>
  )
}
