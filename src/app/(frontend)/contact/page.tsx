'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollRevealText } from '@/components/ScrollRevealText'

export default function ContactPage() {
  const pathname = usePathname()

  // Scroll to top whenever this page is navigated to
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      const lenis = (window as any).lenis
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(0, { immediate: true })
      }
    }
    scrollToTop()
    setTimeout(scrollToTop, 50)
    setTimeout(scrollToTop, 200)
    setTimeout(scrollToTop, 500)
    setTimeout(scrollToTop, 1000)
    setTimeout(scrollToTop, 1500)
  }, [pathname])
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
              <span className="mx-8">CONTACT</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
            </ScrollMarquee>

            {/* Content */}
            <Container size="full">
              <div className="max-w-3xl mt-12 md:mt-18">
                <ScrollRevealText>
                  <p className="text-fluid-2xl leading-snug text-black">
                    Motto® is more than our name, it&apos;s a symbol of who we are. Historically,
                    mottos were war cries of sentiment, hope, and purpose. Today, we create bold
                    brand mottos for clients to serve as their Idea Worth Rallying Around®.
                  </p>
                </ScrollRevealText>
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

      {/* Contact Form Section */}
      <section className="py-32 sm:py-48 bg-grey-100">
        <Container size="full">
          <div className="grid sm:grid-cols-12 gap-8 sm:gap-16">
            {/* Contact Information */}
            <div className="col-span-12 sm:col-span-5">
              <ScrollRevealText>
                <p className="text-fluid-lg font-medium text-black mb-8 md:mb-0">Get in Touch</p>
              </ScrollRevealText>
              <ScrollRevealText delay={200}>
                <h3 className="text-fluid-5xl font-medium text-black mb-8 leading-tight">
                  Start a conversation that matters.
                </h3>
              </ScrollRevealText>
              <ScrollRevealText delay={400}>
                <p className="text-fluid-lg text-black leading-relaxed mb-8 md:pr-16">
                  Whether you&apos;re launching a new venture, transforming an existing brand, or
                  exploring possibilities, we&apos;re here to help you create something
                  extraordinary.
                </p>
              </ScrollRevealText>

              <div className="space-y-8">
                <ScrollRevealText delay={600}>
                  <div>
                    <h4 className="text-fluid-xl font-medium mb-2 text-black">Email</h4>
                    <p className="text-fluid-lg text-gray-500">hello@ccidealab.com</p>
                  </div>
                </ScrollRevealText>

                <ScrollRevealText delay={700}>
                  <div>
                    <h4 className="text-fluid-xl font-medium mb-2 text-black">Phone</h4>
                    <p className="text-fluid-lg text-gray-500">+1 (555) 123-4567</p>
                  </div>
                </ScrollRevealText>

                <ScrollRevealText delay={800}>
                  <div>
                    <h4 className="text-fluid-xl font-medium mb-2 text-black">Office Hours</h4>
                    <div className="text-fluid-lg text-gray-500 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </ScrollRevealText>

                <ScrollRevealText delay={900}>
                  <div>
                    <h4 className="text-fluid-xl font-medium mb-2 text-black">Response Time</h4>
                    <p className="text-fluid-lg text-gray-500">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </ScrollRevealText>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-span-12 sm:col-span-7">
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
                        className="block text-fluid-sm font-medium text-gray-700 mb-2"
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
                    <label
                      htmlFor="email"
                      className="block text-fluid-sm font-medium text-gray-700 mb-2"
                    >
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
                      className="block text-fluid-sm font-medium text-gray-700 mb-2"
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
                      className="block text-fluid-sm font-medium text-gray-700 mb-2"
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
                      className="block text-fluid-sm font-medium text-gray-700 mb-2"
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
                      className="block text-fluid-sm font-medium text-gray-700 mb-2"
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
                    <label htmlFor="newsletter" className="text-fluid-sm text-gray-600">
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

      <section className="py-32 sm:py-48">
        <Container size="full">
          <ScrollRevealText>
            <h2 className="text-fluid-7xl font-medium leading-none text-black">OFFICES</h2>
          </ScrollRevealText>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
            {/* USA */}
            <ScrollRevealText delay={200}>
              <div>
                <h3 className="font-medium text-fluid-lg mb-6">USA</h3>
                <div className="space-y-8 text-gray-500">
                  <div>
                    <p className="font-medium">Motto® NYC</p>
                    <p>199 Water Street</p>
                    <p>New York, NYC 10038</p>
                  </div>
                  <div>
                    <p className="font-medium">Motto® DAL</p>
                    <p>2919 Commerce Street</p>
                    <p>Dallas, TX 75226</p>
                  </div>
                </div>
                <a
                  href="mailto:hello@motto.com"
                  className="inline-block mt-6 border-b border-black hover:text-gray-500 hover:border-gray-500 transition-colors"
                >
                  Email us
                </a>
              </div>
            </ScrollRevealText>

            {/* Europe */}
            <ScrollRevealText delay={400}>
              <div>
                <h3 className="font-medium text-fluid-lg mb-6">Europe</h3>
                <div className="space-y-8 text-gray-500">
                  <div>
                    <p className="font-medium">Motto® LND</p>
                    <p>High Bridge Works</p>
                    <p>Newcastle upon Tyne, UK</p>
                  </div>
                  <div>
                    <p className="font-medium">Motto® BER</p>
                    <p>Kurfürstendamm 11</p>
                    <p>Berlin, BE 10719</p>
                  </div>
                </div>
                <a
                  href="mailto:hello@motto.com"
                  className="inline-block mt-6 border-b border-black hover:text-gray-500 hover:border-gray-500 transition-colors"
                >
                  Email us
                </a>
              </div>
            </ScrollRevealText>
          </div>
        </Container>
      </section>
    </div>
  )
}
