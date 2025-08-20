import { Container } from '@/components/Container'
import { ScrollRevealText } from '@/components/ScrollRevealText'

export default function ContactPage() {
  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-100">
        <Container size="xxl" className="relative z-10">
          <div className="relative flex items-center justify-center min-h-screen">
            <div className="relative w-full text-center">
              <ScrollRevealText>
                <h1 className="text-fluid-8xl leading-none font-medium uppercase tracking-tight mb-8">
                  Let&apos;s Create Together
                </h1>
              </ScrollRevealText>
              <ScrollRevealText delay={200}>
                <p className="text-fluid-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Ready to rally around your next big idea?
                  <span className="font-medium text-black"> We&apos;d love to hear from you.</span>
                </p>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 md:py-48 bg-grey-100">
        <Container size="xl">
          <div className="grid md:grid-cols-12 gap-16">
            {/* Contact Information */}
            <div className="md:col-span-5">
              <ScrollRevealText>
                <h2 className="text-fluid-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
                  Get in Touch
                </h2>
              </ScrollRevealText>
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-5xl font-bold text-black mb-8 leading-tight">
                  Start a conversation that matters.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <p className="text-fluid-lg text-gray-700 leading-relaxed mb-12">
                  Whether you&apos;re launching a new venture, transforming an existing brand, or
                  exploring possibilities, we&apos;re here to help you create something
                  extraordinary.
                </p>
              </ScrollRevealText>

              <div className="space-y-8">
                <ScrollRevealText delay={600}>
                  <div>
                    <h4 className="text-fluid-xl font-bold mb-2 text-black">Email</h4>
                    <p className="text-fluid-lg text-gray-600">hello@ccidealab.com</p>
                  </div>
                </ScrollRevealText>

                <ScrollRevealText delay={700}>
                  <div>
                    <h4 className="text-fluid-xl font-bold mb-2 text-black">Phone</h4>
                    <p className="text-fluid-lg text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </ScrollRevealText>

                <ScrollRevealText delay={800}>
                  <div>
                    <h4 className="text-fluid-xl font-bold mb-2 text-black">Office Hours</h4>
                    <div className="text-fluid-lg text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </ScrollRevealText>

                <ScrollRevealText delay={900}>
                  <div>
                    <h4 className="text-fluid-xl font-bold mb-2 text-black">Response Time</h4>
                    <p className="text-fluid-lg text-gray-600">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </ScrollRevealText>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-7">
              <ScrollRevealText delay={400}>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-fluid-sm font-medium text-gray-700 mb-2"
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
                      className="w-full md:w-auto px-12 py-4 bg-black text-white font-medium text-fluid-lg hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-black focus:ring-offset-2"
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
        </Container>
      </section>
    </div>
  )
}
