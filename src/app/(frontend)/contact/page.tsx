import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'
import { Container } from '@/components/Container'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { ScrollMarquee } from '@/components/ScrollMarquee'

export default function ContactPage() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-100">
        <Container size="xxl" className="relative z-10">
          <div className="relative flex items-center justify-center min-h-screen">
            <div className="relative w-full text-center">
              <ScrollRevealText>
                <h1 className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[7rem] leading-none font-medium uppercase tracking-tight mb-8">
                  Let&apos;s Create Together
                </h1>
              </ScrollRevealText>
              <ScrollRevealText delay={200}>
                <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Ready to rally around your next big idea?
                  <span className="font-medium text-black"> We&apos;d love to hear from you.</span>
                </p>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 lg:py-48 bg-white">
        <Container size="xl">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-5">
              <ScrollRevealText>
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
                  Get in Touch
                </h2>
              </ScrollRevealText>
              <ScrollRevealText delay={200}>
                <h3 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Start a conversation that matters.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <p className="text-lg text-gray-700 leading-relaxed mb-12">
                  Whether you&apos;re launching a new venture, transforming an existing brand, or
                  exploring possibilities, we&apos;re here to help you create something
                  extraordinary.
                </p>
              </ScrollRevealText>

              <div className="space-y-8">
                <ScrollRevealText delay={600}>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-black">Email</h4>
                    <p className="text-lg text-gray-600">hello@ccidealab.com</p>
                  </div>
                </ScrollRevealText>

                <ScrollRevealText delay={700}>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-black">Phone</h4>
                    <p className="text-lg text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </ScrollRevealText>

                <ScrollRevealText delay={800}>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-black">Office Hours</h4>
                    <div className="text-lg text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </ScrollRevealText>

                <ScrollRevealText delay={900}>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-black">Response Time</h4>
                    <p className="text-lg text-gray-600">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </ScrollRevealText>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ScrollRevealText delay={400}>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors bg-white"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors bg-white"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors bg-white"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors bg-white"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors bg-white"
                    >
                      <option value="">Select a project type</option>
                      <option value="brand-strategy">Brand Strategy</option>
                      <option value="visual-identity">Visual Identity</option>
                      <option value="web-design">Web Design & Development</option>
                      <option value="brand-refresh">Brand Refresh</option>
                      <option value="full-rebrand">Complete Rebrand</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-25k">Under $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-plus">$100,000+</option>
                      <option value="discuss">Let&apos;s discuss</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors bg-white resize-vertical"
                      placeholder="Share your vision, challenges, and goals. The more details you provide, the better we can understand how to help you."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="mt-1 mr-3 h-4 w-4 text-black focus:ring-black border-gray-300 rounded-none"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      I&apos;d like to receive updates about C/C IDEA LAB&apos;s work and insights.
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full md:w-auto px-12 py-4 bg-black text-white font-medium text-lg hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Scroll Marquee Section */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="mb-16 text-center">
          <ScrollRevealText>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Let&apos;s Work Together
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto px-6 leading-relaxed">
              Great partnerships create extraordinary results—
              <br className="hidden md:block" />
              let&apos;s build something remarkable together.
            </p>
          </ScrollRevealText>
        </div>

        <ScrollMarquee
          baseSpeed={120}
          maxSpeedMultiplier={5}
          sensitivity={25}
          smoothing={0.9}
          lines="dual"
          className="space-y-12"
          lineClassName="text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider"
        >
          <span className="mx-16">LET&apos;S COLLABORATE</span>
          <span className="mx-16 text-gray-500">•</span>
          <span className="mx-16">CREATE TOGETHER</span>
          <span className="mx-16 text-gray-500">•</span>
          <span className="mx-16">BUILD SOMETHING GREAT</span>
          <span className="mx-16 text-gray-500">•</span>
          <span className="mx-16">MAKE AN IMPACT</span>
          <span className="mx-16 text-gray-500">•</span>
        </ScrollMarquee>

        <div className="mt-16 text-center">
          <ScrollRevealText delay={400}>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Ready when you are</p>
          </ScrollRevealText>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-32 lg:py-48 bg-gray-100">
        <Container size="xl">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <ScrollRevealText delay={200}>
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-black rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Quick Response</h3>
                <p className="text-gray-600 leading-relaxed">
                  We value your time and typically respond to all inquiries within 24 hours during
                  business days.
                </p>
              </div>
            </ScrollRevealText>

            <ScrollRevealText delay={400}>
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-black rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Free Consultation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every project starts with a complimentary strategy session to understand your
                  goals and explore possibilities.
                </p>
              </div>
            </ScrollRevealText>

            <ScrollRevealText delay={600}>
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-black rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Rapid Turnaround</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand the pace of business and work efficiently to deliver exceptional
                  results on time.
                </p>
              </div>
            </ScrollRevealText>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 lg:py-48 bg-gray-100">
        <Container size="lg" className="text-center">
          <ScrollRevealText>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-black">
              Your Next Big Idea Starts Here
            </h2>
          </ScrollRevealText>
          <ScrollRevealText delay={200}>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Don&apos;t let great ideas remain just ideas. Take the first step toward creating
              something extraordinary that people will rally around.
            </p>
          </ScrollRevealText>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <ScrollRevealText delay={400}>
              <PremiumTransitionLink
                url="/about"
                label="Learn About Us"
                appearance="outline"
                transitionType="logoWipe"
                transitionColor="#7c3aed"
                className="px-12 py-6 text-xl border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
              />
            </ScrollRevealText>
            <ScrollRevealText delay={600}>
              <PremiumTransitionLink
                url="/services"
                label="Our Services"
                appearance="outline"
                transitionType="logoWipe"
                transitionColor="#059669"
                className="px-12 py-6 text-xl border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
              />
            </ScrollRevealText>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200">
            <ScrollRevealText delay={800}>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                <PremiumTransitionLink
                  url="/"
                  label="← Home"
                  appearance="inline"
                  transitionType="logoWipe"
                  className="hover:text-black transition-colors"
                />
                <PremiumTransitionLink
                  url="/work"
                  label="View Our Work"
                  appearance="inline"
                  transitionType="logoWipe"
                  className="hover:text-black transition-colors"
                />
                <PremiumTransitionLink
                  url="/scroll-marquee-demo"
                  label="See Demo"
                  appearance="inline"
                  transitionType="logoWipe"
                  className="hover:text-black transition-colors"
                />
              </div>
            </ScrollRevealText>
          </div>
        </Container>
      </section>
    </div>
  )
}
