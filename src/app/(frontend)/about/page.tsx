import { Container } from '@/components/Container'
import { ScrollRevealText } from '@/components/ScrollRevealText'

// import { AnimatedMarquee } from '@/components/AnimatedMarquee'

export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-100">
        <Container size="xxl" className="relative z-10">
          <div className="relative flex items-center justify-center min-h-screen">
            <div className="relative w-full text-center">
              <ScrollRevealText>
                <h1 className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[7rem] leading-none font-medium uppercase tracking-tight mb-8">
                  About C/C IDEA LAB
                </h1>
              </ScrollRevealText>
              <ScrollRevealText delay={200}>
                <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  We are a global strategy and design firm dedicated to creating
                  <span className="font-medium text-black"> Ideas Worth Rallying Around®</span>
                </p>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-32 lg:py-48 bg-white">
        <Container size="xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollRevealText>
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
                  Our Story
                </h2>
              </ScrollRevealText>
            </div>
            <div className="lg:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Founded on the belief that great brands are more than logos—they&apos;re
                  movements.
                </h3>
              </ScrollRevealText>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <ScrollRevealText delay={400}>
                  <p>
                    C/C IDEA LAB was born from a simple observation: in a world saturated with
                    noise, only the most compelling ideas break through. We don&apos;t just create
                    brands; we craft rallying points that inspire action, drive change, and build
                    lasting connections.
                  </p>
                </ScrollRevealText>
                <ScrollRevealText delay={600}>
                  <p>
                    Our approach combines strategic thinking with creative excellence, ensuring
                    every brand we touch becomes a beacon for its community. We work with visionary
                    leaders and innovative companies who understand that great design isn&apos;t
                    just about looking good—it&apos;s about making a difference.
                  </p>
                </ScrollRevealText>
                <ScrollRevealText delay={800}>
                  <p>
                    From startups disrupting industries to established companies reinventing
                    themselves, we partner with organizations ready to stand for something bigger
                    than themselves.
                  </p>
                </ScrollRevealText>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 lg:py-48 bg-gray-100">
        <Container size="xl">
          <div className="text-center mb-20">
            <ScrollRevealText>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">Our Philosophy</h2>
            </ScrollRevealText>
            <ScrollRevealText delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three core principles guide everything we do
              </p>
            </ScrollRevealText>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <ScrollRevealText delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Think Bigger</h3>
                <p className="text-gray-600 leading-relaxed">
                  We challenge conventional thinking and push boundaries to uncover breakthrough
                  ideas that truly matter.
                </p>
              </div>
            </ScrollRevealText>

            <ScrollRevealText delay={500}>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Design with Purpose</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every design decision serves a strategic purpose, creating meaningful connections
                  between brands and their audiences.
                </p>
              </div>
            </ScrollRevealText>

            <ScrollRevealText delay={700}>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Rally Together</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in the power of collaboration, bringing together diverse perspectives
                  to create something extraordinary.
                </p>
              </div>
            </ScrollRevealText>
          </div>
        </Container>
      </section>

      {/* Approach Section */}
      <section className="py-32 lg:py-48 bg-white">
        <Container size="xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollRevealText>
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
                  Our Approach
                </h2>
              </ScrollRevealText>
            </div>
            <div className="lg:col-span-8">
              <ScrollRevealText delay={200}>
                <h3 className="text-4xl lg:text-5xl font-bold text-black mb-12 leading-tight">
                  We don&apos;t just follow trends—we set them.
                </h3>
              </ScrollRevealText>

              <div className="space-y-12">
                <ScrollRevealText delay={400}>
                  <div className="border-l-4 border-black pl-8">
                    <h4 className="text-2xl font-bold mb-4 text-black">Discovery & Strategy</h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We dive deep into your industry, audience, and competitive landscape to
                      uncover unique opportunities and define a clear strategic direction.
                    </p>
                  </div>
                </ScrollRevealText>

                <ScrollRevealText delay={600}>
                  <div className="border-l-4 border-black pl-8">
                    <h4 className="text-2xl font-bold mb-4 text-black">Creative Development</h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our multidisciplinary team brings ideas to life through compelling visual
                      identity, engaging experiences, and memorable brand touchpoints.
                    </p>
                  </div>
                </ScrollRevealText>

                <ScrollRevealText delay={800}>
                  <div className="border-l-4 border-black pl-8">
                    <h4 className="text-2xl font-bold mb-4 text-black">Implementation & Growth</h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We ensure seamless execution across all channels and provide ongoing support
                      to help your brand evolve and thrive in the marketplace.
                    </p>
                  </div>
                </ScrollRevealText>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
