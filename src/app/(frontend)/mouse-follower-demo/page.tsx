import { Container } from '@/components/Container'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { MouseFollower } from '@/components/MouseFollower'
import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'

export default function MouseFollowerDemo() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white">
        <Container className="text-center">
          <ScrollRevealText>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-black">
              MouseFollower Demo
            </h1>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clean mouse follower with curved text, semi-transparent background,
              and simple grow animation. Hover over the elements below to see the effect!
            </p>
          </ScrollRevealText>
        </Container>
      </section>

      {/* Clean Style Demo */}
      <section className="py-32 bg-gray-50">
        <Container>
          <ScrollRevealText>
            <h2 className="text-4xl font-bold mb-12 text-center text-black">
              Clean Mouse Follower
            </h2>
          </ScrollRevealText>

          <div className="grid md:grid-cols-2 gap-12">
            <MouseFollower text="VIEW PROJECT">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition-shadow">
                <ScrollRevealText delay={200}>
                  <h3 className="text-2xl font-bold mb-4 text-black">Simple & Clean</h3>
                  <p className="text-gray-600">White/transparent background with curved text around the perimeter</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="EXPLORE WORK">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition-shadow">
                <ScrollRevealText delay={400}>
                  <h3 className="text-2xl font-bold mb-4 text-black">Custom Text</h3>
                  <p className="text-gray-600">Customizable curved text with smooth grow animation</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>
          </div>
        </Container>
      </section>

      {/* Custom Text Demo */}
      <section className="py-32 bg-gray-50">
        <Container>
          <ScrollRevealText>
            <h2 className="text-4xl font-bold mb-12 text-center text-black">
              Custom Text Examples
            </h2>
          </ScrollRevealText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MouseFollower text="VIEW PROJECT">
              <div className="bg-white p-6 rounded-lg shadow text-center cursor-pointer hover:shadow-lg transition-shadow">
                <ScrollRevealText delay={100}>
                  <div className="text-lg font-bold mb-2 text-black">Project View</div>
                  <p className="text-sm text-gray-600">"VIEW PROJECT"</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="LEARN MORE">
              <div className="bg-white p-6 rounded-lg shadow text-center cursor-pointer hover:shadow-lg transition-shadow">
                <ScrollRevealText delay={200}>
                  <div className="text-lg font-bold mb-2 text-black">Information</div>
                  <p className="text-sm text-gray-600">"LEARN MORE"</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="GET STARTED">
              <div className="bg-white p-6 rounded-lg shadow text-center cursor-pointer hover:shadow-lg transition-shadow">
                <ScrollRevealText delay={300}>
                  <div className="text-lg font-bold mb-2 text-black">Call to Action</div>
                  <p className="text-sm text-gray-600">"GET STARTED"</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="EXPLORE WORK">
              <div className="bg-white p-6 rounded-lg shadow text-center cursor-pointer hover:shadow-lg transition-shadow">
                <ScrollRevealText delay={400}>
                  <div className="text-lg font-bold mb-2 text-black">Portfolio</div>
                  <p className="text-sm text-gray-600">"EXPLORE WORK"</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="CONTACT US">
              <div className="bg-white p-6 rounded-lg shadow text-center cursor-pointer hover:shadow-lg transition-shadow">
                <ScrollRevealText delay={500}>
                  <div className="text-lg font-bold mb-2 text-black">Contact</div>
                  <p className="text-sm text-gray-600">"CONTACT US"</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="READ STORY">
              <div className="bg-white p-6 rounded-lg shadow text-center cursor-pointer hover:shadow-lg transition-shadow">
                <ScrollRevealText delay={600}>
                  <div className="text-lg font-bold mb-2 text-black">Content</div>
                  <p className="text-sm text-gray-600">"READ STORY"</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="DISCOVER">
              <div className="bg-white p-6 rounded-lg shadow text-center cursor-pointer hover:shadow-lg transition-shadow">
                <ScrollRevealText delay={700}>
                  <div className="text-lg font-bold mb-2 text-black">Discovery</div>
                  <p className="text-sm text-gray-600">"DISCOVER"</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>

            <MouseFollower text="JOIN US">
              <div className="bg-white p-6 rounded-lg shadow text-center cursor-pointer hover:shadow-lg transition-shadow">
                <ScrollRevealText delay={800}>
                  <div className="text-lg font-bold mb-2 text-black">Community</div>
                  <p className="text-sm text-gray-600">"JOIN US"</p>
                </ScrollRevealText>
              </div>
            </MouseFollower>
          </div>
        </Container>
      </section>

      {/* Animation Features */}
      <section className="py-32 bg-black text-white">
        <Container className="text-center">
          <ScrollRevealText>
            <h2 className="text-4xl font-bold mb-8">
              Animation Features
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              The MouseFollower includes sophisticated animations and interactions
            </p>
          </ScrollRevealText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ScrollRevealText delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold">🎯</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Cursor Hiding</h3>
                <p className="text-gray-400 text-sm">Cursor disappears when follower is active</p>
              </div>
            </ScrollRevealText>

            <ScrollRevealText delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold">🔄</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Curved Text</h3>
                <p className="text-gray-400 text-sm">Text follows the circle's curvature perfectly</p>
              </div>
            </ScrollRevealText>

            <ScrollRevealText delay={500}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold">✨</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Backdrop Blur</h3>
                <p className="text-gray-400 text-sm">Semi-transparent with glassmorphism effect</p>
              </div>
            </ScrollRevealText>

            <ScrollRevealText delay={600}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold">📈</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Simple Grow</h3>
                <p className="text-gray-400 text-sm">Clean scale animation without bounce</p>
              </div>
            </ScrollRevealText>
          </div>

          <MouseFollower text="EXPERIENCE MAGIC">
            <div className="bg-white text-black p-12 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors inline-block">
              <ScrollRevealText delay={700}>
                <h3 className="text-2xl font-bold mb-4">Try the Clean Style!</h3>
                <p className="text-gray-600">Hover over this card to see the curved text and simple grow animation</p>
              </ScrollRevealText>
            </div>
          </MouseFollower>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-100">
        <Container className="text-center">
          <ScrollRevealText>
            <h2 className="text-5xl font-bold mb-8 text-black">
              Ready to Enhance Your UI?
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-xl text-gray-600 mb-12">
              Integrate the MouseFollower component into your project for delightful interactions
            </p>
          </ScrollRevealText>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ScrollRevealText delay={400}>
              <PremiumTransitionLink
                url="/"
                label="← Back to Home"
                appearance="outline"
                transitionType="logoWipe"
                className="px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
              />
            </ScrollRevealText>
            <ScrollRevealText delay={600}>
              <PremiumTransitionLink
                url="/scroll-marquee-demo"
                label="View More Demos"
                appearance="default"
                transitionType="logoWipe"
                className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors"
              />
            </ScrollRevealText>
          </div>
        </Container>
      </section>
    </div>
  )
}
