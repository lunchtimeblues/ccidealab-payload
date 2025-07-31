import { TransitionLink } from '@/components/TransitionLink'

// Example usage of TransitionLink component
export const TransitionLinkExamples = () => {
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold">TransitionLink Examples</h2>
      
      {/* Basic internal link with transition */}
      <div>
        <h3 className="text-lg font-semibold">Internal Links (with transition)</h3>
        <div className="space-x-4">
          <TransitionLink url="/" label="Home" appearance="inline" />
          <TransitionLink url="/about" label="About" appearance="default" />
          <TransitionLink url="/contact" label="Contact" appearance="outline" />
        </div>
      </div>

      {/* External links (no transition) */}
      <div>
        <h3 className="text-lg font-semibold">External Links (no transition)</h3>
        <div className="space-x-4">
          <TransitionLink 
            url="https://github.com" 
            label="GitHub" 
            appearance="inline" 
          />
          <TransitionLink 
            url="https://nextjs.org" 
            label="Next.js" 
            appearance="default"
            newTab={true}
          />
        </div>
      </div>

      {/* Disabled transition */}
      <div>
        <h3 className="text-lg font-semibold">Internal Link (transition disabled)</h3>
        <TransitionLink 
          url="/no-transition" 
          label="No Transition Page" 
          appearance="outline"
          disableTransition={true}
        />
      </div>

      {/* Reference-based link (CMS content) */}
      <div>
        <h3 className="text-lg font-semibold">CMS Reference Link</h3>
        <TransitionLink
          type="reference"
          reference={{
            relationTo: 'pages',
            value: { slug: 'example-page' } // This would be actual page data
          }}
          label="CMS Page"
          appearance="default"
        />
      </div>
    </div>
  )
}
