# Container Component

A responsive container component that provides consistent content width and spacing across your website. It ensures all content is properly contained within defined maximum widths and includes responsive padding.

## Features

- **Responsive Design**: Automatically adjusts to different screen sizes
- **Multiple Sizes**: Choose from predefined container sizes
- **Consistent Spacing**: Standardized padding and margins
- **Flexible**: Can be used with or without padding
- **Centered Content**: Automatically centers content horizontally

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Content to be contained (required) |
| `className` | `string` | `''` | Additional CSS classes |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'full'` | `'xl'` | Container size |
| `noPadding` | `boolean` | `false` | Remove default horizontal padding |

## Container Sizes

| Size | Max Width | Use Case |
|------|-----------|----------|
| `sm` | `max-w-4xl` (~896px) | Forms, narrow content, single column text |
| `md` | `max-w-6xl` (~1152px) | Medium content, blog posts |
| `lg` | `max-w-7xl` (~1280px) | Large content, contact sections |
| `xl` | `max-w-[1600px]` (~1600px) | Main content, hero sections |
| `xxl` | `max-w-[2000px]` (~2000px) | **Ultra-wide** (Motto-style), premium layouts |
| `full` | `max-w-full` | Full width, special layouts |

## Usage

```tsx
import { Container } from '@/components/Container'

// Basic usage
<Container>
  <h1>Your content here</h1>
</Container>

// Different sizes
<Container size="sm">
  <p>Narrow content for reading</p>
</Container>

<Container size="lg">
  <div>Large content area</div>
</Container>

// Without padding (for custom spacing)
<Container noPadding>
  <div className="px-4">Custom padding</div>
</Container>

// With additional classes
<Container className="bg-white shadow-lg" size="md">
  <div>Styled container</div>
</Container>
```

## Default Styling

- **Horizontal Centering**: `mx-auto` centers the container
- **Enhanced Responsive Padding**: Premium agency-style padding that scales with screen size:
  - Mobile: `px-6` (24px)
  - Medium: `md:px-8` (32px)
  - Large: `lg:px-12` (48px)
  - XL: `xl:px-16` (64px)
  - 2XL: `2xl:px-20` (80px)
- **Ultra-Wide Support**: Handles very large screens like Motto and other premium agencies

## Best Practices

1. **Use Consistently**: Apply Container to all main content sections
2. **Choose Appropriate Size**: 
   - `xl` for most main content
   - `lg` for contact/CTA sections
   - `sm` for forms and narrow text
3. **Avoid Nesting**: Don't nest containers inside each other
4. **Full-Width Elements**: Use `noPadding` when you need edge-to-edge content within a container

## Examples

### Hero Section
```tsx
<section className="py-32 bg-gray-100">
  <Container>
    <h1>Hero Title</h1>
    <p>Hero description</p>
  </Container>
</section>
```

### Contact Form
```tsx
<section className="py-16">
  <Container size="sm">
    <form>
      {/* Form fields */}
    </form>
  </Container>
</section>
```

### Full-Width with Custom Padding
```tsx
<Container noPadding className="bg-black">
  <div className="px-4 py-8">
    <h2>Custom spaced content</h2>
  </div>
</Container>
```
