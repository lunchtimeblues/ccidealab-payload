'use client'

import { Container } from '@/components/Container'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { MouseFollower } from '@/components/MouseFollower'
import { QuickVideo } from '@/components/QuickVideo'
import { TransitionLink } from '@/components/TransitionLink'
import { SmoothScrollButton } from '@/components/SmoothScrollButton'

export default function WorkPage() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-100">
        <div className="flex flex-col justify-between pt-44 pb-8 min-h-screen">
          <div>
            {/* Marquee */}
            <ScrollMarquee
              baseSpeed={0.8}
              maxSpeedMultiplier={2}
              starSpinSpeed={4}
              lines="single"
              direction="left"
              lineClassName="text-[12vw] font-normal tracking-tight leading-none"
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
                  Discover how we partner with companies to build brands that align with their
                  vision.
                </p>
              </div>
            </Container>
          </div>

          {/* Hero Footer */}
          <Container size="full" className="w-full">
            <div className="flex justify-between items-end w-full py-6 text-fluid-sm">
              <SmoothScrollButton
                targetSectionId="work-grid"
                className="border-b border-black hover:opacity-70 transition"
              >
                Learn more <span className="inline-block ml-1">↓</span>
              </SmoothScrollButton>
              <span className="text-black/60">(SCROLL)</span>
            </div>
          </Container>
        </div>
      </section>

      {/* Featured Work Section with Mouse Follower */}
      <section id="work-grid" className="py-32 bg-gray-100">
        <Container size="full">
          <ScrollRevealText>
            <h2 className="text-fluid-6xl font-medium leading-none text-black">SELECTED</h2>
          </ScrollRevealText>
          <ScrollRevealText>
            <h2 className="text-fluid-6xl font-medium leading-none mb-16 text-black">WORKS</h2>
          </ScrollRevealText>

          <div className="grid md:grid-cols-2 gap-8">
            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/comm100" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1116637264/rendition/720p/file.mp4?loc=external&signature=460acec5dc87e59ddec7c2ac8ae7c4828b9873706a802d8780cc540226e76ddd"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={500}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Comm100</h3>
                    <span className="text-fluid-sm text-black tracking-wide">SaaS</span>
                  </div>
                  <p className="text-black text-fluid-sm">Product Design & Development</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/ubereats" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163843/rendition/720p/file.mp4?loc=external&signature=5736286ae852071f83522c8f1b56525f0b1ddbbec68f4c114f11d8f2f1973599"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={200}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">UberEats</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Food & Beverage</span>
                  </div>
                  <p className="text-black text-fluid-sm mb-4">Creative Production</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/affinity" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163775/rendition/720p/file.mp4?loc=external&signature=4344c4cfaa7fb678934fc61169a4ce4e52dbfe0c1155cfc09961d2d22253ac24"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={100}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Affinity Group</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Technology</span>
                  </div>
                  <p className="text-black text-fluid-sm mb-4">Full-Scope Marketing & Design</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/westin" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163848/rendition/720p/file.mp4?loc=external&signature=5f975b67db50cc966fc2306084904cab5799b96c3f79599eb49b15ff55065868"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={200}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Westin</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Hospitality</span>
                  </div>
                  <p className="text-black text-fluid-sm mb-4">Creative Production</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/pokebar" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163834/rendition/720p/file.mp4?loc=external&signature=1fa3257a59a7c8d0f89d0c7f1ed1142dfdd734b46a1996d29d7b8ec7a9870b64"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={200}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Pokebar</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Food & Beverage</span>
                  </div>
                  <p className="text-black text-fluid-sm mb-4">Full-Scope Marketing & Design</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/marco-polo" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163809/rendition/720p/file.mp4?loc=external&signature=da7a4a367d0de4ac391daf7d4210a1837316f62f271e1c550830a26b37fd0fa5"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={300}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Marco Polo</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Communication</span>
                  </div>
                  <p className="text-black text-fluid-sm mb-4">
                    Brand Strategy, Creative Production
                  </p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/metrotown-notary" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163826/rendition/720p/file.mp4?loc=external&signature=bd81197e79dc6f4f0f5bfd2bfd3cd22863dcac683c645eac59006cbf1e835063"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={400}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Metrotown Notary</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Legal Services</span>
                  </div>
                  <p className="text-black text-fluid-sm mb-4">Full-Scope Marketing & Design</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/citycolor" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163782/rendition/720p/file.mp4?loc=external&signature=61123620b6f46de8747f177286e18f7d4829001162050cc6c4bbaa4b3752372e"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={600}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">CityColor Cosmetics</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Health & Beauty</span>
                  </div>
                  <p className="text-black text-fluid-sm">Full-Scope Marketing & Design</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/foodbyfanta" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1111163799/rendition/720p/file.mp4?loc=external&signature=640b5c1a96021dbff9b8de4f12a9f01c1a67e601e39bd1bba7529c96a3de6361"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={200}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Food by Fanta</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Food & Beverage</span>
                  </div>
                  <p className="text-black text-fluid-sm mb-4">Full-Scope Marketing & Design</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>

            <MouseFollower text="CASE STUDIES">
              <TransitionLink url="/work/nice" className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <QuickVideo
                    src="https://player.vimeo.com/progressive_redirect/playback/1116619394/rendition/1080p/file.mp4?loc=external&signature=cf540f33053887fd40162800e7ba837e9ac785d30a376c6e405020a7dab1f05c"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <ScrollRevealText delay={200}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-fluid-sm font-medium text-black">Nice Cleaning Company</h3>
                    <span className="text-fluid-sm text-black tracking-wide">Service</span>
                  </div>
                  <p className="text-black text-fluid-sm mb-4">Full-Scope Marketing & Design</p>
                </ScrollRevealText>
              </TransitionLink>
            </MouseFollower>
          </div>
        </Container>
      </section>
    </div>
  )
}
