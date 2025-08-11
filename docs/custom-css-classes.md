# Custom CSS Classes

This document outlines the custom CSS classes available in the project for common layout patterns.

## Almost Full Height Classes

These classes create sections that take up most of the viewport height while ensuring content below remains visible "above the fold" to encourage scrolling.

### `.almost-full-height`

The main almost-full-height class with responsive behavior:

- **Desktop (769px+)**: `calc(100vh - 120px)` - leaves 120px for next section preview
- **Mobile (≤768px)**: `calc(100vh - 80px)` - leaves 80px for next section preview  
- **Large screens (1440px+)**: `calc(100vh - 150px)` - leaves 150px for better proportion

### Variants

#### `.almost-full-height-sm`
- **Height**: `calc(100vh - 60px)`
- **Use case**: Minimal preview of next section
- **Best for**: Dense layouts where you want maximum space

#### `.almost-full-height-lg`
- **Height**: `calc(100vh - 200px)`
- **Use case**: Large preview of next section
- **Best for**: When you want to clearly show there's more content below

## Usage Examples

### Hero Sections
```html
<section class="almost-full-height bg-gray-100 flex items-center justify-center">
  <div class="text-center">
    <h1>Hero Title</h1>
    <p>Hero description</p>
  </div>
</section>
```

### Video Sections
```html
<div class="almost-full-height relative overflow-hidden">
  <video class="absolute inset-0 w-full h-full object-cover">
    <!-- Video content -->
  </video>
</div>
```

### Full-Screen Components
```tsx
// React component
<div className="almost-full-height relative">
  {/* Component content */}
</div>
```

## Benefits

### User Experience
- **Encourages Scrolling**: Visible content below suggests more to explore
- **No Guessing**: Users know there's more content without having to guess
- **Better Flow**: Creates natural scroll rhythm between sections

### Design
- **Professional Look**: Avoids the "cut-off" feeling of exact full height
- **Responsive**: Adapts to different screen sizes appropriately
- **Flexible**: Multiple variants for different design needs

### Technical
- **Cross-Browser**: Uses calc() which has excellent browser support
- **Performance**: Pure CSS solution, no JavaScript required
- **Maintainable**: Centralized in CSS utilities layer

## Best Practices

### When to Use
- ✅ Hero sections
- ✅ Video backgrounds
- ✅ Full-screen galleries
- ✅ Landing page sections
- ✅ Splash screens

### When NOT to Use
- ❌ Content-heavy sections (text, forms)
- ❌ Navigation areas
- ❌ Footer sections
- ❌ Sections with dynamic content height

### Responsive Considerations
- **Mobile**: Smaller preview (80px) accounts for limited screen space
- **Desktop**: Larger preview (120px) provides better visual balance
- **Large screens**: Even larger preview (150px) maintains proportions

## Implementation Notes

The classes are defined in `src/app/(frontend)/globals.css` in the `@layer utilities` section, making them available throughout the application with proper CSS cascade priority.

```css
@layer utilities {
  .almost-full-height {
    height: calc(100vh - 120px);
  }
  
  @media (max-width: 768px) {
    .almost-full-height {
      height: calc(100vh - 80px);
    }
  }
  
  @media (min-width: 1440px) {
    .almost-full-height {
      height: calc(100vh - 150px);
    }
  }
}
```
