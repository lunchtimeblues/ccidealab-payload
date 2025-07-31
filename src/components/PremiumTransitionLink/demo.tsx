import { 
  PremiumTransitionLink, 
  CurtainLink, 
  ScaleLink, 
  WipeLink, 
  FadeLink 
} from '@/components/PremiumTransitionLink'

export const PremiumTransitionDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Premium Page Transitions
        </h1>
        <p className="text-gray-300 text-center mb-12 text-lg">
          Inspired by high-end agency websites like wearemotto.com
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Slide Transition */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Slide Transition</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Your original slide-up with clip-path reveal
            </p>
            <PremiumTransitionLink
              url="/about"
              label="Try Slide"
              appearance="default"
              transitionType="slide"
              className="w-full"
            />
          </div>

          {/* Curtain Transition */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Curtain Transition</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Smooth horizontal slide, premium agency style
            </p>
            <CurtainLink
              url="/contact"
              label="Try Curtain"
              appearance="default"
              className="w-full"
            />
          </div>

          {/* Scale Transition */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Scale Transition</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Zoom in/out effect with smooth scaling
            </p>
            <ScaleLink
              url="/projects"
              label="Try Scale"
              appearance="default"
              className="w-full"
            />
          </div>

          {/* Wipe Transition */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Wipe Transition</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Horizontal reveal with clip-path animation
            </p>
            <WipeLink
              url="/services"
              label="Try Wipe"
              appearance="default"
              className="w-full"
            />
          </div>

          {/* Fade Transition */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Fade Transition</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Clean crossfade between pages
            </p>
            <FadeLink
              url="/blog"
              label="Try Fade"
              appearance="default"
              className="w-full"
            />
          </div>

          {/* Mixed Usage */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Mixed Usage</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Different transitions for different contexts
            </p>
            <div className="space-y-2">
              <PremiumTransitionLink
                url="/"
                label="Home (Curtain)"
                appearance="outline"
                transitionType="curtain"
                className="w-full text-sm"
              />
              <PremiumTransitionLink
                url="/portfolio"
                label="Portfolio (Scale)"
                appearance="ghost"
                transitionType="scale"
                className="w-full text-sm"
              />
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-16 bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Usage Examples</h2>
          
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-green-400 mb-2">Basic Usage:</h4>
              <pre className="bg-gray-900 p-3 rounded text-gray-300 overflow-x-auto">
{`<PremiumTransitionLink 
  url="/about" 
  label="About Us" 
  transitionType="curtain" 
/>`}
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-green-400 mb-2">Shorthand Components:</h4>
              <pre className="bg-gray-900 p-3 rounded text-gray-300 overflow-x-auto">
{`<CurtainLink url="/contact" label="Contact" />
<ScaleLink url="/projects" label="Projects" />
<WipeLink url="/services" label="Services" />`}
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-green-400 mb-2">With CMS References:</h4>
              <pre className="bg-gray-900 p-3 rounded text-gray-300 overflow-x-auto">
{`<PremiumTransitionLink
  type="reference"
  reference={{ relationTo: 'pages', value: pageData }}
  transitionType="scale"
  appearance="default"
/>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <PremiumTransitionLink
            url="/"
            label="← Back to Home"
            appearance="ghost"
            transitionType="fade"
            className="text-gray-400 hover:text-white"
          />
        </div>
      </div>
    </div>
  )
}
