'use client'

import { Container } from '@/components/Container'
import { ScrollMarquee } from '@/components/ScrollMarquee'
import { SpinningStar } from '@/components/SpinningStar'
import { ScrollRevealText } from '@/components/ScrollRevealText'
import { SmoothScrollButton } from '@/components/SmoothScrollButton'
import Image from 'next/image'

export default function ContactPage() {
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
              lineClassName="text-[12vw] font-normal uppercase tracking-tight leading-none"
            >
              <span className="mx-8">CONTACT</span>
              <span className="mx-8 flex items-center">
                <SpinningStar size={64} className="text-current" />
              </span>
            </ScrollMarquee>

            {/* Content */}
            <Container size="full">
              <div className="max-w-3xl mt-12 md:mt-18">
                <p className="text-fluid-xl leading-snug text-black">
                  Every great collaboration starts with a conversation. Whether you have a project
                  in mind, a question to ask, or just want to explore possibilities, we’d love to
                  hear from you. Drop us a message and let’s create something remarkable together.
                </p>
              </div>
            </Container>
          </div>

          {/* Hero Footer */}
          <Container size="full" className="w-full">
            <div className="flex justify-between items-end w-full py-6 text-fluid-sm">
              <SmoothScrollButton
                targetSectionId="contact"
                offset={80}
                className="border-b border-black hover:opacity-70 transition"
              >
                We won&apos;t bite <span className="inline-block ml-1">↓</span>
              </SmoothScrollButton>
              <span className="text-black/60">(SCROLL)</span>
            </div>
          </Container>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 sm:py-48">
        <Container size="full">
          <div className="grid lg:grid-cols-7 gap-12 lg:gap-16 items-center">
            {/* Contact Information - 40% width */}
            <div className="lg:col-span-4 space-y-8">
              <ScrollRevealText delay={200}>
                <h2 className="text-fluid-3xl font-medium leading-tight text-black mb-6">
                  Interested in working together?
                </h2>
              </ScrollRevealText>

              <ScrollRevealText delay={300}>
                <p className="text-fluid-lg text-gray-700 mb-4">Contact us today.</p>
              </ScrollRevealText>

              <ScrollRevealText delay={400}>
                <div className="space-y-1 text-fluid-base">
                  <p className="font-medium text-black">C&C IDEA LAB</p>
                  <p className="text-gray-600">6060 Silver Dr, 3rd Floor</p>
                  <p className="text-gray-600">Burnaby, BC</p>
                  <p className="text-gray-600">V5H 0H5</p>
                </div>
              </ScrollRevealText>

              <ScrollRevealText delay={500}>
                <div className="space-y-2 text-fluid-base">
                  <p className="text-gray-600">(778) 742-5003</p>
                  <a
                    href="mailto:hello@ccidealab.com"
                    className="text-gray-600 border-b border-gray-300 hover:text-black hover:border-black transition-all duration-300"
                  >
                    hello@ccidealab.com
                  </a>
                </div>
              </ScrollRevealText>
            </div>

            {/* Office Image - 60% width */}
            <div className="lg:col-span-3">
              <ScrollRevealText delay={600}>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                  <Image
                    src="/images/contact/cc-wework-burnaby.jpg"
                    alt="C&C Idea Lab Office - WeWork Burnaby"
                    width={600}
                    height={750}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </ScrollRevealText>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
