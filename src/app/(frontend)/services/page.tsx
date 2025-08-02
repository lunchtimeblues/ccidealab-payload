import { ScrollRevealText } from '@/components/ScrollRevealText'
import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'

export default function ServicesPage() {
  const services = [
    {
      number: '01',
      title: 'Brand Strategy',
      description: 'We develop comprehensive brand strategies that define your unique position in the market, create meaningful connections with your audience, and drive sustainable growth.',
      capabilities: [
        'Brand Positioning',
        'Market Research',
        'Competitive Analysis',
        'Brand Architecture',
        'Messaging Strategy'
      ],
      color: '#1f2937'
    },
    {
      number: '02',
      title: 'Visual Identity',
      description: 'Our visual identity systems bring your brand to life through thoughtful design that communicates your values and resonates with your target audience.',
      capabilities: [
        'Logo Design',
        'Typography Systems',
        'Color Palettes',
        'Brand Guidelines',
        'Asset Creation'
      ],
      color: '#7c3aed'
    },
    {
      number: '03',
      title: 'Digital Experience',
      description: 'We craft digital experiences that engage, inspire, and convert. From websites to applications, every touchpoint is designed with purpose.',
      capabilities: [
        'Web Design',
        'UI/UX Design',
        'Responsive Development',
        'E-commerce Solutions',
        'Digital Platforms'
      ],
      color: '#059669'
    },
    {
      number: '04',
      title: 'Creative Direction',
      description: 'Our creative direction ensures consistency across all brand touchpoints while pushing creative boundaries to make your brand stand out.',
      capabilities: [
        'Art Direction',
        'Photography Direction',
        'Campaign Development',
        'Content Strategy',
        'Creative Concepts'
      ],
      color: '#dc2626'
    },
    {
      number: '05',
      title: 'Digital Marketing',
      description: 'We develop and execute digital marketing strategies that amplify your brand presence and drive measurable results across all channels.',
      capabilities: [
        'Social Media Strategy',
        'Content Marketing',
        'SEO Optimization',
        'Paid Advertising',
        'Analytics & Reporting'
      ],
      color: '#ea580c'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <ScrollRevealText>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-8">
              Services
            </h1>
          </ScrollRevealText>
          
          <ScrollRevealText delay={200}>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl leading-relaxed">
              We partner with ambitious brands to create meaningful experiences that drive growth, 
              build lasting connections, and shape the future of business.
            </p>
          </ScrollRevealText>
        </div>
      </section>

      {/* Overlapping Accordion Services Section */}
      <section className="relative">
        {services.map((service, index) => (
          <div
            key={service.number}
            className="sticky top-0 min-h-screen flex items-center"
            style={{
              zIndex: services.length - index,
              backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb'
            }}
          >
            <div className="w-full px-6 py-20">
              <div className="max-w-screen-2xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                  {/* Service Number & Title */}
                  <div className="lg:col-span-5">
                    <ScrollRevealText delay={0}>
                      <div className="flex items-baseline space-x-6 mb-8">
                        <span
                          className="text-8xl lg:text-9xl font-bold opacity-20"
                          style={{ color: service.color }}
                        >
                          {service.number}
                        </span>
                        <div>
                          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                            {service.title}
                          </h2>
                          <div
                            className="w-16 h-1 rounded-full"
                            style={{ backgroundColor: service.color }}
                          />
                        </div>
                      </div>
                    </ScrollRevealText>
                  </div>

                  {/* Service Description & CTA */}
                  <div className="lg:col-span-4">
                    <ScrollRevealText delay={100}>
                      <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
                        {service.description}
                      </p>
                    </ScrollRevealText>

                    <ScrollRevealText delay={200}>
                      <PremiumTransitionLink
                        url="/contact"
                        label="Discuss This Service"
                        appearance="default"
                        transitionType="motto-wipe"
                        transitionColor={service.color}
                        className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full"
                      >
                        <span className="font-medium">Discuss This Service</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </PremiumTransitionLink>
                    </ScrollRevealText>
                  </div>

                  {/* Service Capabilities */}
                  <div className="lg:col-span-3">
                    <ScrollRevealText delay={150}>
                      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                        Capabilities
                      </h3>
                    </ScrollRevealText>

                    <ul className="space-y-4">
                      {service.capabilities.map((capability, capIndex) => (
                        <li key={capability}>
                          <ScrollRevealText delay={200 + capIndex * 50}>
                            <div className="flex items-center space-x-3">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: service.color }}
                              />
                              <span className="text-lg text-gray-700">
                                {capability}
                              </span>
                            </div>
                          </ScrollRevealText>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom shadow for depth */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollRevealText>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-black">
              Ready to Get Started?
            </h2>
          </ScrollRevealText>
          
          <ScrollRevealText delay={200}>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let&apos;s discuss how we can help bring your vision to life and create 
              something extraordinary together.
            </p>
          </ScrollRevealText>
          
          <ScrollRevealText delay={400}>
            <PremiumTransitionLink
              url="/contact"
              label="Start a Project"
              appearance="default"
              transitionType="motto-wipe"
              transitionColor="#dc2626"
              className="px-12 py-6 text-xl bg-black text-white hover:bg-gray-800 transition-colors rounded-full"
            />
          </ScrollRevealText>
        </div>
      </section>
    </div>
  )
}
