'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollRevealText } from '@/components/ScrollRevealText'

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'press' | 'careers'>('press')

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
          </div>

          {/* Hero Footer */}
          <Container size="full" className="w-full">
            <div className="flex justify-between items-end w-full py-6 text-fluid-xs">
              <a href="#form" className="border-b border-black hover:opacity-70 transition">
                Skip to form <span className="inline-block ml-1">↓</span>
              </a>
              <span className="text-black/60">(SCROLL)</span>
            </div>
          </Container>
        </div>
      </section>

      {/* Contact Form Section with Tabs */}
      <section id="form" className="py-32 sm:py-48 bg-gray-100">
        <Container size="full">
          <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-12">
            <h2 className="text-fluid-3xl font-medium">Project inquire form</h2>

            {/* Tabs */}
            <div className="flex space-x-8 text-fluid-sm font-medium">
              <button
                className={`transition-colors ${
                  activeTab === 'press' ? 'text-black' : 'text-gray-500 hover:text-black'
                }`}
                onClick={() => setActiveTab('press')}
              >
                Press ↓
              </button>
              <button
                className={`transition-colors ${
                  activeTab === 'careers' ? 'text-black' : 'text-gray-500 hover:text-black'
                }`}
                onClick={() => setActiveTab('careers')}
              >
                Careers ↓
              </button>
            </div>
          </div>

          {/* Form Wrapper */}
          <div className="max-w-4xl">
            {activeTab === 'press' && (
              <ScrollRevealText>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-fluid-sm font-medium text-gray-700 mb-2"
                      >
                        First Name:*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-fluid-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name:*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-fluid-sm font-medium text-gray-700 mb-2"
                      >
                        Company Email:*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="example@domain.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-fluid-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name:*
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-fluid-sm font-medium text-gray-700 mb-2"
                    >
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="https://www.website.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-fluid-sm font-medium text-gray-700 mb-2"
                    >
                      Tell Us About The Project (Scope, Timeline, Budget):*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-black focus:border-transparent resize-vertical"
                    />
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
            )}

            {activeTab === 'careers' && (
              <ScrollRevealText>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-fluid-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name:*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-fluid-sm font-medium text-gray-700 mb-2"
                      >
                        Email:*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="example@domain.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block text-fluid-sm font-medium text-gray-700 mb-2"
                    >
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="resume"
                      className="block text-fluid-sm font-medium text-gray-700 mb-2"
                    >
                      Resume (PDF)
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept="application/pdf"
                      className="block w-full text-fluid-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="coverLetter"
                      className="block text-fluid-sm font-medium text-gray-700 mb-2"
                    >
                      Cover Letter
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-black focus:border-transparent resize-vertical"
                      placeholder="Why do you want to work with us?"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full md:w-auto px-12 py-4 bg-black text-white font-medium text-fluid-lg hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </ScrollRevealText>
            )}
          </div>
        </Container>
      </section>
    </div>
  )
}
