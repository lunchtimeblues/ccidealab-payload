# Premium Page Transitions

High-end page transitions inspired by premium agency websites like wearemotto.com, using next-view-transitions.

## 🎨 Available Transition Types

### 1. **Slide** (Your Original)
- Slides up with clip-path reveal
- Duration: 1500ms
- Easing: `cubic-bezier(0.87, 0, 0.13, 1)`

### 2. **Curtain** (Agency Style)
- Horizontal slide transition
- Old page slides left, new page slides in from right
- Duration: 800ms
- Easing: `cubic-bezier(0.77, 0, 0.175, 1)`

### 3. **Scale** (Zoom Effect)
- Old page scales down and fades out
- New page scales up and fades in
- Duration: 600ms
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`

### 4. **Wipe** (Horizontal Reveal)
- New page wipes in from left using clip-path
- Duration: 1000ms
- Easing: `cubic-bezier(0.87, 0, 0.13, 1)`

### 5. **Fade** (Clean Crossfade)
- Simple opacity transition
- Duration: 400ms
- Easing: `ease-out` / `ease-in`

## 🚀 Usage

### Basic Usage
```tsx
import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'

<PremiumTransitionLink
  url="/about"
  label="About Us"
  transitionType="curtain"
  appearance="default"
/>
```

### Shorthand Components
```tsx
import { 
  CurtainLink, 
  ScaleLink, 
  WipeLink, 
  FadeLink 
} from '@/components/PremiumTransitionLink'

<CurtainLink url="/contact" label="Contact" />
<ScaleLink url="/projects" label="Projects" />
<WipeLink url="/services" label="Services" />
<FadeLink url="/blog" label="Blog" />
```

### With CMS References
```tsx
<PremiumTransitionLink
  type="reference"
  reference={{
    relationTo: 'pages',
    value: pageData
  }}
  transitionType="scale"
  appearance="default"
/>
```

## 🎯 Recommended Usage by Context

- **Navigation Links**: `curtain` or `fade`
- **Call-to-Action Buttons**: `scale` or `wipe`
- **Portfolio/Gallery**: `scale`
- **Blog/Content**: `fade` or `slide`
- **Landing Page CTAs**: `wipe` or `curtain`

## 🔧 Props

All CMSLink props are supported, plus:

- `transitionType?: 'slide' | 'curtain' | 'scale' | 'wipe' | 'fade'`
- `disableTransition?: boolean`

## 🎨 Customization

To create your own transition, extend the `usePremiumPageTransition` hook:

```tsx
const customTransition = useCallback(() => {
  // Old page animation
  document.documentElement.animate([
    { /* start state */ },
    { /* end state */ }
  ], {
    duration: 800,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fill: 'forwards',
    pseudoElement: '::view-transition-old(root)',
  })

  // New page animation
  document.documentElement.animate([
    { /* start state */ },
    { /* end state */ }
  ], {
    duration: 800,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fill: 'forwards',
    pseudoElement: '::view-transition-new(root)',
  })
}, [])
```

## 🌟 Demo

Import and use the demo component to see all transitions in action:

```tsx
import { PremiumTransitionDemo } from '@/components/PremiumTransitionLink/demo'

<PremiumTransitionDemo />
```

## 🔄 Migration from TransitionLink

Simply replace imports:

```tsx
// Before
import { TransitionLink } from '@/components/TransitionLink'

// After
import { PremiumTransitionLink } from '@/components/PremiumTransitionLink'
// or use shorthand components
import { CurtainLink } from '@/components/PremiumTransitionLink'
```
