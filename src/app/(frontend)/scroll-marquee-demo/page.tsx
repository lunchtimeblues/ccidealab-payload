import { ScrollMarquee } from '@/components/ScrollMarquee'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { Container } from '@/components/Container'

export default function ScrollMarqueeDemo() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white">
        <Container className="text-center">
          <ScrollRevealText>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-black">
              Scroll Marquee
            </h1>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A scroll-responsive marquee component with opposing directions.
              Scroll down to see the effect in action.
            </p>
          </ScrollRevealText>
        </Container>
      </section>

      {/* Spacer content to enable scrolling */}
      <section className="py-32 bg-gray-50">
        <Container size="sm" className="text-center">
          <ScrollRevealText>
            <h2 className="text-4xl font-bold mb-8 text-black">
              Keep Scrolling
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-lg text-gray-600 leading-relaxed">
              The marquee below will speed up based on your scroll velocity.
              Try scrolling at different speeds to see the effect.
            </p>
          </ScrollRevealText>
        </Container>
      </section>

      {/* Main ScrollMarquee Demo */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <Container className="mb-16 text-center">
          <ScrollRevealText>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Ideas Worth Rallying Around®
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Experience our philosophy in motion. The faster you scroll, the faster our ideas move—
              <br className="hidden md:block" />
              two streams of thought flowing in perfect opposition.
            </p>
          </ScrollRevealText>
        </Container>
        
        <ScrollMarquee
          baseSpeed={120}
          maxSpeedMultiplier={5}
          sensitivity={75}
          smoothing={0.9}
          className="space-y-12"
          lineClassName="text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider"
        >
          <span className="mx-16">IDEAS WORTH RALLYING AROUND</span>
          <span className="mx-16 text-gray-500">•</span>
          <span className="mx-16">STRATEGY & INNOVATION</span>
          <span className="mx-16 text-gray-500">•</span>
          <span className="mx-16">DESIGN THAT MATTERS</span>
          <span className="mx-16 text-gray-500">•</span>
          <span className="mx-16">BRANDS THAT INSPIRE</span>
          <span className="mx-16 text-gray-500">•</span>
        </ScrollMarquee>

        <Container className="mt-16 text-center">
          <ScrollRevealText delay={400}>
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              Scroll to accelerate
            </p>
          </ScrollRevealText>
        </Container>
      </section>

      {/* Alternative Demo with Different Settings */}
      <section className="py-32 bg-white overflow-hidden">
        <Container className="mb-16 text-center">
          <ScrollRevealText>
            <h2 className="text-4xl font-bold mb-6 text-black">
              Alternative Configuration
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Same component with different sensitivity and speed settings.
            </p>
          </ScrollRevealText>
        </Container>
        
        <ScrollMarquee
          baseSpeed={100}
          maxSpeedMultiplier={8}
          sensitivity={100}
          smoothing={0.85}
          className="space-y-8"
          lineClassName="text-3xl md:text-5xl font-bold text-black"
        >
          <span className="mx-12">CREATIVE SOLUTIONS</span>
          <span className="mx-12 text-gray-400">×</span>
          <span className="mx-12">DIGITAL INNOVATION</span>
          <span className="mx-12 text-gray-400">×</span>
          <span className="mx-12">BRAND EXCELLENCE</span>
          <span className="mx-12 text-gray-400">×</span>
        </ScrollMarquee>
      </section>

      {/* More spacer content */}
      <section className="py-32 bg-gray-100">
        <Container size="sm" className="text-center">
          <ScrollRevealText>
            <h2 className="text-4xl font-bold mb-8 text-black">
              Component Features
            </h2>
          </ScrollRevealText>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <ScrollRevealText delay={200}>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-bold mb-4">Scroll Responsive</h3>
                <p className="text-gray-600">
                  Animation speed increases based on scroll velocity for an interactive experience.
                </p>
              </div>
            </ScrollRevealText>
            <ScrollRevealText delay={300}>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-bold mb-4">Opposing Directions</h3>
                <p className="text-gray-600">
                  Two marquee lines move in opposite directions creating visual tension.
                </p>
              </div>
            </ScrollRevealText>
            <ScrollRevealText delay={400}>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-bold mb-4">Smooth Transitions</h3>
                <p className="text-gray-600">
                  GSAP-powered animations ensure smooth speed transitions and performance.
                </p>
              </div>
            </ScrollRevealText>
            <ScrollRevealText delay={500}>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-bold mb-4">Highly Customizable</h3>
                <p className="text-gray-600">
                  Multiple props allow fine-tuning of speed, sensitivity, and behavior.
                </p>
              </div>
            </ScrollRevealText>
          </div>
        </Container>
      </section>

      {/* Final spacer */}
      <section className="py-32 bg-gray-900 text-white">
        <Container className="text-center">
          <ScrollRevealText>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Implement?
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Check the component documentation and integrate it into your project.
            </p>
          </ScrollRevealText>
        </Container>
      </section>
    </div>
  )
}
