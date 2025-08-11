# ScrollMarquee Component

A scroll-responsive marquee component that creates two opposing text streams that speed up based on scroll velocity, inspired by the Motto website.

## Features

- **Dual Direction Animation**: Two marquee lines moving in opposite directions
- **Scroll-Responsive Speed**: Animation speed increases based on scroll velocity
- **Smooth Transitions**: Gradual speed changes with customizable smoothing
- **Performance Optimized**: Efficient scroll event handling with GSAP
- **Highly Customizable**: Multiple props for fine-tuning behavior

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Content to display in the marquee |
| `baseSpeed` | `number` | `50` | Base animation duration in seconds |
| `maxSpeedMultiplier` | `number` | `3` | Maximum speed multiplier when scrolling fast |
| `className` | `string` | `''` | CSS classes for the container |
| `lineClassName` | `string` | `''` | CSS classes for each marquee line |
| `sensitivity` | `number` | `50` | How responsive the speed is to scroll velocity |
| `smoothing` | `number` | `0.92` | Velocity decay rate (0-1, higher = slower decay) |

## Usage

```tsx
import { ScrollMarquee } from '@/components/ScrollMarquee'

// Basic usage - content automatically appears on both lines in opposing directions
<ScrollMarquee>
  <span className="mx-8">YOUR TEXT</span>
  <span className="mx-8">•</span>
  <span className="mx-8">MORE TEXT</span>
  <span className="mx-8">•</span>
</ScrollMarquee>

// Advanced usage with custom settings
<ScrollMarquee
  baseSpeed={35}
  maxSpeedMultiplier={5}
  sensitivity={75}
  smoothing={0.9}
  className="space-y-12"
  lineClassName="text-6xl font-bold"
>
  <span className="mx-16">IDEAS WORTH RALLYING AROUND</span>
  <span className="mx-16 text-gray-500">•</span>
  <span className="mx-16">STRATEGY & INNOVATION</span>
  <span className="mx-16 text-gray-500">•</span>
</ScrollMarquee>
```

**Note**: The same content automatically appears on both marquee lines - one moving left, one moving right.

## How It Works

1. **Base Animation**: Creates two infinite marquee animations moving in opposite directions
2. **Scroll Detection**: Uses GSAP ScrollTrigger to monitor scroll velocity
3. **Speed Calculation**: Converts scroll velocity to animation speed multiplier
4. **Smooth Transitions**: Uses GSAP to smoothly transition between speeds
5. **Velocity Decay**: Gradually reduces speed when scrolling stops

## Performance Notes

- Uses `requestAnimationFrame` for smooth 60fps updates
- Implements velocity smoothing to prevent jarring speed changes
- Automatically cleans up animations and event listeners
- Optimized for mobile and desktop scroll behaviors

## Dependencies

- GSAP (with ScrollTrigger plugin)
- React 18+
