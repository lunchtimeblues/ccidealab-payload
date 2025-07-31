# TransitionLink Component

A drop-in replacement for the CMSLink component that adds smooth page transitions using next-view-transitions.

## Features

- **Automatic transition detection**: Only applies transitions to internal links
- **External link handling**: External links and new tab links work normally without transitions
- **Same API as CMSLink**: Drop-in replacement with identical props
- **Customizable**: Can disable transitions per link if needed

## Usage

### Basic Usage

```tsx
import { TransitionLink } from '@/components/TransitionLink'

// Simple internal link with transition
<TransitionLink url="/about" label="About Us" />

// Reference-based link (CMS content)
<TransitionLink 
  type="reference"
  reference={{
    relationTo: 'pages',
    value: pageData
  }}
  appearance="default"
/>

// External link (no transition applied automatically)
<TransitionLink 
  url="https://external-site.com" 
  label="External Link" 
  newTab={true}
/>
```

### Migration from CMSLink

Simply replace `CMSLink` imports with `TransitionLink`:

```tsx
// Before
import { CMSLink } from '@/components/Link'

// After  
import { TransitionLink } from '@/components/TransitionLink'
```

All existing props work exactly the same!

### Advanced Usage

```tsx
// Disable transition for specific link
<TransitionLink 
  url="/no-transition-page"
  label="No Transition"
  disableTransition={true}
/>

// Button appearance with transition
<TransitionLink
  url="/contact"
  label="Contact Us"
  appearance="default"
  size="lg"
/>
```

## Props

All CMSLink props are supported, plus:

- `disableTransition?: boolean` - Disable transition for this specific link

## How it works

1. **Internal links** (`/about`, `/contact`, etc.) → Applies smooth transition
2. **External links** (`https://...`) → Normal navigation, no transition
3. **New tab links** (`newTab={true}`) → Normal navigation, no transition
4. **Hash links** (`#section`) → Normal navigation, no transition

The component automatically detects the link type and applies transitions only when appropriate.
