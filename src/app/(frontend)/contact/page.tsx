import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-teal-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl mb-6">
            Get in touch with us - this page demonstrates smooth transitions!
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-4">
                We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as
                possible.
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> hello@example.com
                </p>
                <p>
                  <strong>Phone:</strong> (555) 123-4567
                </p>
                <p>
                  <strong>Address:</strong> 123 Main St, City, State 12345
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2">
                <p>
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                </p>
                <p>
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                </p>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <PremiumTransitionLink
            url="/"
            label="← Home"
            appearance="outline"
            transitionType="logoWipe"
          />
          <PremiumTransitionLink
            url="/about"
            label="About Us"
            appearance="default"
            transitionType="logoWipe"
          />
          <PremiumTransitionLink
            url="/demo"
            label="View Demo"
            appearance="ghost"
            transitionType="logoWipe"
          />
        </div>
      </div>
    </div>
  )
}
