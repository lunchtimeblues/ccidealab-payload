# Container Component

A hybrid container component that combines traditional responsive design with the modern soulidealab.com approach. This component provides consistent content width and spacing using both traditional Tailwind classes and modern CSS custom properties.

## Features

- **Hybrid Approach**: Traditional sizes (sm, md, lg) + Modern soulidealab.com approach (xl, xxl, full)
- **Modern CSS**: Uses CSS custom properties and `padding-inline` for xl+ sizes
- **Responsive Design**: Automatically adjusts to different screen sizes
- **Multiple Sizes**: Choose from predefined container sizes
- **Flexible**: Can be used with or without padding
- **Centered Content**: Automatically centers content horizontally

## Props

| Prop        | Type                                              | Default | Description                        |
| ----------- | ------------------------------------------------- | ------- | ---------------------------------- |
| `children`  | `React.ReactNode`                                 | -       | Content to be contained (required) |
| `className` | `string`                                          | `''`    | Additional CSS classes             |
| `size`      | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'full'` | `'xl'`  | Container size                     |
| `noPadding` | `boolean`                                         | `false` | Remove default horizontal padding  |

## Container Sizes

| Size   | Max Width             | Approach            | Use Case                        |
| ------ | --------------------- | ------------------- | ------------------------------- |
| `sm`   | `1200px`              | **soulidealab.com** | Forms, narrow content, reading  |
| `md`   | `max-w-6xl` (~1152px) | Traditional         | Medium content, blog posts      |
| `lg`   | `max-w-7xl` (~1280px) | Traditional         | Large content, contact sections |
| `xl`   | `none`                | **soulidealab.com** | Main content, hero sections     |
| `xxl`  | `1600px`              | **soulidealab.com** | Ultra-wide layouts, galleries   |
| `full` | `none`                | **soulidealab.com** | Full width, special layouts     |

## Implementation Details

### Traditional Sizes (md, lg)

Uses traditional Tailwind responsive padding:

```css
px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
```

### Modern Sizes (sm, xl, xxl, full)

Uses soulidealab.com approach with CSS custom properties:

```css
padding-inline: calc(var(--spacing) * 4); /* 32px mobile */
padding-inline: calc(var(--spacing) * 6); /* 48px desktop */
```

## Usage

```tsx
import { Container } from '@/components/Container'

// Basic usage - uses soulidealab.com approach
<Container>
  <h1>Your content here</h1>
</Container>

// Different sizes
<Container size="sm">
  <p>Narrow content for reading (soulidealab.com style)</p>
</Container>

<Container size="md">
  <div>Medium content (traditional Tailwind)</div>
</Container>

<Container size="full">
  <div>Ultra-wide content (soulidealab.com style)</div>
</Container>

// Without padding (for custom spacing)
<Container noPadding>
  <div className="px-4">Custom padding</div>
</Container>

// With additional classes
<Container className="bg-white shadow-lg" size="xl">
  <div>Styled container</div>
</Container>
```

## Styling Approaches

### Modern Sizes (sm, xl, xxl, full) - soulidealab.com Style

- **CSS Custom Properties**: Uses `--spacing: 0.5rem` for scalable design
- **Modern CSS**: `padding-inline` for horizontal padding
- **Simple Breakpoints**: 32px mobile, 48px desktop
- **Position Relative**: Provides stacking context

### Traditional Sizes (md, lg) - Tailwind Style

- **Responsive Padding**: `px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20`
- **Progressive Scaling**: 24px → 80px across breakpoints
- **Familiar Approach**: Standard Tailwind responsive design

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
    <form>{/* Form fields */}</form>
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
