import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'
import { AnimatedMarquee } from '@/components/AnimatedMarquee'
import { MouseFollower } from '@/components/MouseFollower'
import { ScrollRevealText } from '@/components/ScrollRevealText'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          <div className="relative flex items-center justify-center min-h-screen">
            <div className="relative w-full">
              <h1
                className="text-6xl sm:text-8xl lg:text-[12rem] xl:text-[16rem] leading-none font-bold uppercase tracking-tight"
                aria-label="Ideas worth rallying around"
              >
                <ScrollRevealText>
                  <div>Ideas Worth</div>
                </ScrollRevealText>
                <ScrollRevealText delay={200}>
                  <div className="sm:text-right -mr-1">Rallying</div>
                </ScrollRevealText>
                <div className="flex justify-between items-center sm:-ml-40">
                  <ScrollRevealText delay={400}>
                    <div className="w-16 h-60 hidden sm:block">
                      <svg className="w-full h-full" viewBox="0 0 90 112" version="1.1">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g
                            transform="translate(-87.000000, -582.000000)"
                            fill="#ffffff"
                            fillRule="nonzero"
                          >
                            <g transform="translate(87.400000, 582.840000)">
                              <polygon points="89.28 69.28 80.32 59.68 51.2 87.2 51.2 0 38.08 0 38.08 87.2 8.96 59.68 0 69.28 44.64 110.56" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </ScrollRevealText>
                  <ScrollRevealText delay={600}>
                    <div className="sm:text-center">Around</div>
                  </ScrollRevealText>
                  <div className="hidden sm:block w-40"></div>
                </div>
              </h1>

              <div className="relative sm:absolute sm:top-1/2 sm:left-[-2rem] sm:-translate-y-1/2 mt-12 sm:mt-0 sm:w-80 lg:w-96">
                <ScrollRevealText delay={800}>
                  <p className="text-sm sm:text-sm lg:text-lg font-light leading-relaxed text-gray-300 tracking-wide">
                    <span className="block mb-2">Motto® is a global strategy and design</span>
                    <span className="block mb-2">
                      firm for positioning, scaling, and reinventing
                    </span>
                    <span className="block">companies in the tech and innovation space.</span>
                  </p>
                </ScrollRevealText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-gray-100 py-32 lg:py-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollRevealText>
                <p className="text-lg font-medium text-gray-600 mb-8 lg:mb-0">Think big with us.</p>
              </ScrollRevealText>
            </div>
            <div className="lg:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Great brands are more than famous names, they&apos;re Ideas Worth Rallying
                  Around®.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-lg text-gray-700 leading-relaxed mb-8 lg:pr-16">
                  <p>
                    Motto® is a brand strategy and design firm that partners with tech and
                    innovation companies to create impactful, future-ready brands. We collaborate
                    with visionary teams and design-led companies who need their brand to stand out,
                    matter more, drive growth, and amplify brand impact within modern culture.
                  </p>
                </div>
              </ScrollRevealText>
              <ScrollRevealText delay={600}>
                <div className="text-sm font-medium text-gray-500 mb-8 lg:pr-16">
                  (CHOOSE YOUR PURPOSE)
                </div>
              </ScrollRevealText>
              <div className="space-y-4">
                <ScrollRevealText delay={800}>
                  <div>
                    <PremiumTransitionLink
                      url="/services"
                      label="Explore our services →"
                      appearance="inline"
                      transitionType="curtain"
                      className="text-black hover:text-gray-600 border-b-2 border-black hover:border-gray-600 transition-colors pb-1"
                    />
                  </div>
                </ScrollRevealText>
                <ScrollRevealText delay={900}>
                  <div>
                    <PremiumTransitionLink
                      url="/work"
                      label="See our case studies →"
                      appearance="inline"
                      transitionType="scale"
                      className="text-black hover:text-gray-600 border-b-2 border-black hover:border-gray-600 transition-colors pb-1"
                    />
                  </div>
                </ScrollRevealText>
                <ScrollRevealText delay={1000}>
                  <div>
                    <PremiumTransitionLink
                      url="/methodology"
                      label="Discover our methodology →"
                      appearance="inline"
                      transitionType="wipe"
                      className="text-black hover:text-gray-600 border-b-2 border-black hover:border-gray-600 transition-colors pb-1"
                    />
                  </div>
                </ScrollRevealText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Marquee Section */}
      <section className="py-16 bg-black">
        <AnimatedMarquee speed={30} className="text-6xl font-bold">
          <span className="mx-8">STRATEGY</span>
          <span className="mx-8">•</span>
          <span className="mx-8">DESIGN</span>
          <span className="mx-8">•</span>
          <span className="mx-8">INNOVATION</span>
          <span className="mx-8">•</span>
          <span className="mx-8">BRANDING</span>
          <span className="mx-8">•</span>
        </AnimatedMarquee>
      </section>

      {/* Featured Work Section with Mouse Follower */}
      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Featured Work</h2>
          </ScrollRevealText>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <MouseFollower key={item}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/3] bg-gray-800 rounded-lg mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 group-hover:scale-105 transition-transform duration-500"></div>
                  </div>
                  <ScrollRevealText delay={item * 100}>
                    <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                    <p className="text-gray-400">Brand Identity & Web Development</p>
                  </ScrollRevealText>
                </div>
              </MouseFollower>
            ))}
          </div>

          <div className="text-center mt-16">
            <ScrollRevealText delay={600}>
              <PremiumTransitionLink
                url="/demo"
                label="View All Work"
                appearance="outline"
                transitionType="wipe"
                className="px-8 py-4 text-lg"
              />
            </ScrollRevealText>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollRevealText>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Let&apos;s Create Something Amazing
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Ready to elevate your digital presence? We&apos;d love to hear about your project.
            </p>
          </ScrollRevealText>

          <ScrollRevealText delay={400}>
            <PremiumTransitionLink
              url="/contact"
              label="Start a Project"
              appearance="default"
              transitionType="fade"
              className="px-12 py-6 text-xl bg-white text-black hover:bg-gray-200 transition-colors"
            />
          </ScrollRevealText>
        </div>
      </section>
    </div>
  )
}
