'use client'

import { Container } from '@/components/Container'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { MouseFollower } from '@/components/MouseFollower'
import { QuickVideo } from '@/components/QuickVideo'
import { TransitionLink } from '@/components/TransitionLink'

export default function WorkPage() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-100">
        <div className="flex flex-col justify-between pt-44 sm:pt-64 pb-8 min-h-screen">
          <div>
            {/* Marquee */}
            <ScrollMarquee
              baseSpeed={0.8}
              maxSpeedMultiplier={2}
              starSpinSpeed={4}
              lines="single"
              direction="left"
              lineClassName="text-[10vw] font-normal uppercase tracking-tight leading-none"
            >
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
            <Container size="full">
              <div className="max-w-3xl mt-12 md:mt-18">
                <p className="text-fluid-xl leading-snug text-black">
                  See how we partner with visionary teams to build brands that stand out and push
                  the boundaries of innovation.
                </p>
              </div>
            </Container>
          </div>

          {/* Hero Footer */}
          <Container size="full" className="w-full">
            <div className="flex justify-between items-end w-full py-6 text-fluid-xs">
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
        <Container size="full">
          <ScrollRevealText>
            <h2 className="text-fluid-7xl font-medium leading-none text-black">SELECTED</h2>
          </ScrollRevealText>
          <ScrollRevealText>
            <h2 className="text-fluid-7xl font-medium leading-none mb-16 text-black">WORKS</h2>
          </ScrollRevealText>

          <div className="grid md:grid-cols-2 gap-8">
            <MouseFollower text="CASE STUDIES">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163775/rendition/1080p/file.mp4?loc=external&signature=a4f82a401110df04c78a21d68e0a53b92198a859b1a14b0eabaa60bdf69fa37c"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={100}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-lg font-medium text-black">Affinity Group</h3>
                    <span className="text-fluid-xs text-gray-500 uppercase tracking-wide">
                      Technology
                    </span>
                  </div>
                  <p className="text-gray-500 text-fluid-base">Brand Identity & Web Development</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163834/rendition/1080p/file.mp4?loc=external&signature=1d394a50f40749523873c42ec92b0b9177a3827d888000c24d688993f47ee793"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={200}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-lg font-medium text-black">Pokebar</h3>
                    <span className="text-fluid-xs text-gray-500 uppercase tracking-wide">
                      Food & Beverage
                    </span>
                  </div>
                  <p className="text-gray-500 text-fluid-base">Digital Strategy & UX Design</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163809/rendition/1080p/file.mp4?loc=external&signature=9c62d16e134344639b26289eae9f721f646692945979ed5a8f4f2647aaeec55c"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={300}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-lg font-medium text-black">Marco Polo</h3>
                    <span className="text-fluid-xs text-gray-500 uppercase tracking-wide">
                      Communication
                    </span>
                  </div>
                  <p className="text-gray-500 text-fluid-base">Creative Direction & Branding</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163826/rendition/1080p/file.mp4?loc=external&signature=26aef7e436f91aa3408dded6efdb69542ea5e337ae73ca3c03f29454067755ba"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={400}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-lg font-medium text-black">Metrotown Notary</h3>
                    <span className="text-fluid-xs text-gray-500 uppercase tracking-wide">
                      Legal Services
                    </span>
                  </div>
                  <p className="text-gray-500 text-fluid-base">Investment Platform & Identity</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/comm100" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163790/rendition/1080p/file.mp4?loc=external&signature=54c579983b73bdb221c6bb53c48f0df0b57d84265c3f0d2107c29cebb979337e"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={500}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-lg font-medium text-black">Comm100</h3>
                    <span className="text-fluid-xs text-gray-500 uppercase tracking-wide">
                      SaaS
                    </span>
                  </div>
                  <p className="text-gray-500 text-fluid-base">Product Design & Development</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163782/rendition/1080p/file.mp4?loc=external&signature=57e4abd75ba0a501a702c52df8c7be01d2dea6097c192f481de11f147aaa85f8"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={600}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-lg font-medium text-black">CityColor</h3>
                    <span className="text-fluid-xs text-gray-500 uppercase tracking-wide">
                      Real Estate
                    </span>
                  </div>
                  <p className="text-gray-500 text-fluid-base">Brand Strategy & Visual Identity</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>
          </div>
        </Container>
      </section>
    </div>
  )
}
