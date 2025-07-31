import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">About Us</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl mb-6">
            This is the About page - perfect for testing page transitions!
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris.
          </p>
          <p className="mb-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <PremiumTransitionLink
            url="/"
            label="← Home"
            appearance="outline"
            transitionType="curtain"
          />
          <PremiumTransitionLink
            url="/contact"
            label="Contact →"
            appearance="default"
            transitionType="scale"
          />
          <PremiumTransitionLink
            url="/demo"
            label="View Demo"
            appearance="ghost"
            transitionType="wipe"
          />
        </div>
      </div>
    </div>
  )
}
