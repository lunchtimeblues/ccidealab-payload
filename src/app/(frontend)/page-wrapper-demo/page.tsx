import { Container } from '@/components/Container'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'

export default function PageWrapperDemo() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section - Default Container (soulidealab.com style) */}
      <section className="min-h-screen flex items-center justify-center bg-white">
        <Container>
          <div className="text-center">
            <ScrollRevealText>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-black">
                Container Demo
              </h1>
            </ScrollRevealText>
            <ScrollRevealText delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Now powered by soulidealab.com approach - Modern CSS with traditional flexibility
              </p>
            </ScrollRevealText>
            <ScrollRevealText delay={400}>
              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-500 font-mono">
                  Current container: <span className="font-bold">size="xl" (soulidealab.com style)</span>
                  <br />
                  Padding: <span className="font-bold">32px mobile, 48px desktop</span>
                </p>
              </div>
            </ScrollRevealText>
          </div>
        </Container>
      </section>

      {/* Narrow Container Demo */}
      <section className="py-32 bg-gray-50">
        <Container size="sm">
          <ScrollRevealText>
            <h2 className="text-4xl font-bold mb-8 text-center text-black">
              Small Container (1200px)
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This section uses the small container size, perfect for reading content like blog posts,
                articles, and forms. The reduced width creates better readability by preventing lines
                from becoming too long.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Notice how the content feels more comfortable to read compared to wider layouts.
                This follows typography best practices for optimal reading experience.
              </p>
              <div className="mt-8 p-4 bg-white rounded-lg border">
                <p className="text-sm text-gray-500 font-mono mb-0">
                  Current container: <span className="font-bold">size="sm" (soulidealab.com style, 1200px max-width)</span>
                </p>
              </div>
            </div>
          </ScrollRevealText>
        </Container>
      </section>

      {/* Wide Container Demo */}
      <section className="py-32 bg-white">
        <Container size="xxl">
          <ScrollRevealText>
            <h2 className="text-4xl font-bold mb-8 text-center text-black">
              XXL Container (1600px)
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-xl text-gray-600 text-center mb-12">
              Perfect for galleries, portfolios, and visual-heavy content
            </p>
          </ScrollRevealText>

          {/* Mock gallery grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <ScrollRevealText key={item} delay={item * 100}>
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">Image {item}</span>
                </div>
              </ScrollRevealText>
            ))}
          </div>

          <ScrollRevealText delay={600}>
            <div className="text-center">
              <div className="p-4 bg-gray-100 rounded-lg inline-block">
                <p className="text-sm text-gray-500 font-mono">
                  Current container: <span className="font-bold">size="xxl" (soulidealab.com style, 1600px max-width)</span>
                </p>
              </div>
            </div>
          </ScrollRevealText>
        </Container>
      </section>

      {/* Full Width Background with Constrained Content */}
      <section className="py-32 bg-black text-white">
        <Container>
          <ScrollRevealText>
            <h2 className="text-4xl font-bold mb-8 text-center">
              Full-Width Background
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-xl text-gray-400 text-center mb-8">
              Content is constrained while background extends full width
            </p>
          </ScrollRevealText>
          <ScrollRevealText delay={400}>
            <div className="text-center">
              <div className="p-4 bg-gray-800 rounded-lg inline-block">
                <p className="text-sm text-gray-400 font-mono">
                  Background: <span className="font-bold">Full width</span> |
                  Content: <span className="font-bold">Constrained (soulidealab.com style)</span>
                </p>
              </div>
            </div>
          </ScrollRevealText>
        </Container>
      </section>

      {/* No Padding Demo */}
      <section className="py-32 bg-gray-100">
        <Container noPadding>
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="px-6 md:px-12 py-12">
              <ScrollRevealText>
                <h2 className="text-4xl font-bold mb-8 text-center text-black">
                  No Padding Container
                </h2>
              </ScrollRevealText>
              <ScrollRevealText delay={200}>
                <p className="text-xl text-gray-600 text-center mb-8">
                  When you need custom padding or edge-to-edge content
                </p>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <div className="text-center">
                  <div className="p-4 bg-gray-100 rounded-lg inline-block">
                    <p className="text-sm text-gray-500 font-mono">
                      Container: <span className="font-bold">noPadding=true</span> |
                      Custom padding: <span className="font-bold">px-6 md:px-12</span>
                    </p>
                  </div>
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-white">
        <Container>
          <ScrollRevealText>
            <h2 className="text-4xl font-bold mb-12 text-center text-black">
              How soulidealab.com Does It
            </h2>
          </ScrollRevealText>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollRevealText delay={200}>
              <div className="p-8 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Key Principles</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>CSS Custom Properties:</strong> Uses --spacing variable for scalable design system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Modern CSS:</strong> Uses padding-inline and modern media query syntax</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Simple Breakpoints:</strong> Only two padding values: 32px mobile, 48px desktop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Position Relative:</strong> Provides stacking context for child elements</span>
                  </li>
                </ul>
              </div>
            </ScrollRevealText>

            <ScrollRevealText delay={400}>
              <div className="p-8 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Implementation</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded border font-mono text-sm">
                    <div className="text-gray-500 mb-2">CSS Variable:</div>
                    <div className="text-black">--spacing: 0.5rem</div>
                  </div>
                  <div className="p-4 bg-white rounded border font-mono text-sm">
                    <div className="text-gray-500 mb-2">Mobile Padding:</div>
                    <div className="text-black">calc(var(--spacing) * 4) = 32px</div>
                  </div>
                  <div className="p-4 bg-white rounded border font-mono text-sm">
                    <div className="text-gray-500 mb-2">Desktop Padding:</div>
                    <div className="text-black">calc(var(--spacing) * 6) = 48px</div>
                  </div>
                  <div className="p-4 bg-white rounded border font-mono text-sm">
                    <div className="text-gray-500 mb-2">Breakpoint:</div>
                    <div className="text-black">@media (width >= 48rem)</div>
                  </div>
                </div>
              </div>
            </ScrollRevealText>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-100">
        <Container>
          <div className="text-center">
            <ScrollRevealText>
              <h2 className="text-5xl font-bold mb-8 text-black">
                Ready to Use Container?
              </h2>
            </ScrollRevealText>
            <ScrollRevealText delay={200}>
              <p className="text-xl text-gray-600 mb-12">
                Start implementing consistent, premium layouts with soulidealab.com approach
              </p>
            </ScrollRevealText>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ScrollRevealText delay={400}>
                <PremiumTransitionLink
                  url="/about"
                  label="See About Page"
                  appearance="default"
                  transitionType="logoWipe"
                  className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors"
                />
              </ScrollRevealText>
              <ScrollRevealText delay={600}>
                <PremiumTransitionLink
                  url="/contact"
                  label="See Contact Page"
                  appearance="outline"
                  transitionType="logoWipe"
                  className="px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
                />
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
