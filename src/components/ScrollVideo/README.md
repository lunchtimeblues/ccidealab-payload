# ScrollVideo Component

A clean video component with a one-time scroll-triggered reveal animation. When you scroll down to the video, a simple overlay fades out while the video scales up smoothly, creating an elegant reveal effect.

## Features

- **Full-Screen Video**: Takes up full viewport height
- **One-Time Animation**: Triggers once when scrolled into view
- **Smooth Reveal**: Clean fade and scale animation with ease-in-out timing
- **Smooth Scrubbing**: Uses GSAP ScrollTrigger for smooth scroll-based animations
- **Responsive**: Works on all screen sizes
- **Performance Optimized**: Uses hardware-accelerated transforms

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Video source URL (required) |
| `className` | `string` | `''` | Additional CSS classes for the container |
| `poster` | `string` | `undefined` | Video poster image URL |
| `autoPlay` | `boolean` | `true` | Whether video should autoplay |
| `muted` | `boolean` | `true` | Whether video should be muted |
| `loop` | `boolean` | `true` | Whether video should loop |

## Usage

```tsx
import { ScrollVideo } from '@/components/ScrollVideo'

// Basic usage
<ScrollVideo 
  src="https://your-video-url.mp4"
/>

// Advanced usage with custom settings
<ScrollVideo 
  src="https://your-video-url.mp4"
  poster="https://your-poster-image.jpg"
  autoPlay={true}
  muted={true}
  loop={true}
  className="custom-video-section"
/>
```

## How It Works

1. **Initial State**: Video displays scaled down (0.8) with gray overlay covering it
2. **Scroll Detection**: Uses GSAP ScrollTrigger starting when top of video is 80% down viewport
3. **One-Time Animation**: When triggered:
   - Overlay fades out (opacity 1 to 0)
   - Video scales up to full size (0.8 to 1.0 scale)
   - Both animations happen simultaneously with ease-in-out timing
4. **Duration**: 1.2 seconds with smooth power2.inOut easing

## Animation Details

- **Trigger**: `start: 'top 80%'` with `once: true` for one-time activation
- **Easing**: `power2.inOut` for smooth, natural animation
- **Easing**: Linear easing for consistent movement
- **Performance**: Uses `xPercent` transforms for hardware acceleration

## Styling

The component uses:
- **Container**: Full viewport height (`h-screen`)
- **Video**: Object-cover for proper aspect ratio
- **Overlays**: Gradient backgrounds that blend with your site's background
- **Z-index**: Proper layering (video: 0, overlays: 10, content: 20)

## Customization

You can customize the overlay colors by modifying the gradient backgrounds:

```tsx
// In the component, change these styles:
background: 'linear-gradient(to right, #your-color 0%, #your-color 80%, transparent 100%)'
```

## Dependencies

- GSAP (with ScrollTrigger plugin)
- React 18+

## Browser Support

- Modern browsers with video support
- Hardware acceleration for smooth animations
- Responsive design for mobile and desktop
