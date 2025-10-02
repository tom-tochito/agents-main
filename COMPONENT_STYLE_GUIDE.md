# Component Style Guide

This guide ensures consistency across all UI components in the Midgard project.

## Core Principles

### 1. CSS Variables Usage

All components MUST use CSS variables defined in `app/app.css` instead of hardcoded color values.

```tsx
// ✅ Good
className = "bg-primary text-primary-foreground"

// ❌ Bad
className = "bg-[#fc6737] text-white"
```

### 2. Color System

#### Brand Colors

- `primary`: Main brand orange (#fc6737)
- `primary-foreground`: Text on primary backgrounds
- `secondary`: Light brand background (#fff0eb)
- `secondary-foreground`: Text on secondary backgrounds

#### Semantic Colors

- `destructive`: Error/danger actions (#e83333)
- `success`: Success states (green)
- `warning`: Warning states (amber)
- `muted`: Muted backgrounds and text
- `border`: Default border color (#ede7e0)

#### Base Colors

- `background`: Page background
- `foreground`: Default text color
- `card`: Card backgrounds
- `popover`: Popover backgrounds

### 3. Component Structure

All components should follow this pattern:

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

const componentVariants = cva(
  "base-classes", // Common classes
  {
    variants: {
      variant: {
        primary: "variant-specific-classes",
        secondary: "variant-specific-classes",
      },
      size: {
        sm: "size-specific-classes",
        md: "size-specific-classes",
        lg: "size-specific-classes",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  // Additional props
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(componentVariants({ variant, size }), className)}
        {...props}
      />
    )
  },
)
Component.displayName = "Component"

export { Component, componentVariants }
```

### 4. Styling Guidelines

#### Spacing

- Use Tailwind spacing utilities: `p-4`, `m-2`, `gap-3`
- Consistent padding: `px-4 py-3` for cards/alerts
- Button padding by size:
  - Small: `px-3 py-1`
  - Medium: `px-4 py-2`
  - Large: `px-6 py-3`

#### Border Radius

- Buttons: `rounded-lg` (default)
- Cards/Alerts: `rounded-xl`
- Small elements: `rounded-md`
- Pills/badges: `rounded-full`

#### Typography

- Font weight: Use `font-bold` for buttons, `font-medium` for titles
- Text sizes:
  - `text-xs`: 12px (small buttons, captions)
  - `text-sm`: 14px (default buttons, body text)
  - `text-base`: 16px (large buttons, paragraphs)
  - `text-lg`: 18px (headings)

#### Transitions

- Always include `transition-all` or `transition-colors` for interactive elements
- Focus states: `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary`
- Hover opacity: Use `/90` for hover states (e.g., `hover:bg-primary/90`)

### 5. Interactive States

All interactive components must handle:

- **Hover**: Slightly darker/lighter background
- **Active**: More pronounced color change
- **Focus**: Visible ring outline
- **Disabled**: `disabled:opacity-50 disabled:pointer-events-none`
- **Loading**: Show spinner with loading text

### 6. Icon Usage

- Icon size should match text size:
  - Small text: `h-3 w-3`
  - Default text: `h-4 w-4`
  - Large text: `h-5 w-5`
- Use `[&_svg]:size-4` to control all child SVG sizes

### 7. Storybook Requirements

Every component must have:

1. Individual stories for each variant
2. Size variations story
3. Interactive states story (hover, disabled, loading)
4. Real-world usage examples
5. Comprehensive props documentation

### 8. File Organization

```
app/core/components/ui/
├── component-name.tsx       # Component implementation
├── component-name.stories.tsx   # Storybook stories
└── component-name.test.tsx  # Tests (when applicable)
```

## File Organization Structure

Every new component MUST follow this directory structure:

```
app/core/components/ui/
└── component-name/
    ├── component-name.tsx       # Main component implementation
    ├── component-name.stories.tsx   # Storybook stories
    └── index.ts                 # Export file
```

### Index File Pattern

Each component's `index.ts` should export all public APIs:

```typescript
export { ComponentName, componentVariants } from "./component-name"
export type { ComponentNameProps } from "./component-name"
```

### Story File Pattern

All stories MUST use consistent category naming:

```typescript
const meta = {
  title: "UI/ComponentName", // Always use 'UI/' prefix
  component: ComponentName,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ComponentName>
```

### Import Patterns

Within component directories, use relative imports:

```typescript
// In stories file, importing from sibling components
import { Button } from "../button"
import { Badge } from "../badge"

// In component file, importing utilities
import { cn } from "~/core/lib/utils"
```

## Example Implementation

See the following for reference implementations:

- `button/` directory structure
- `alert-dialog/` for complex component with multiple exports
- `badge/` for component with specialized variants

## Checklist for New Components

- [ ] Component in its own directory (e.g., `ui/component-name/`)
- [ ] Main component file named `component-name.tsx`
- [ ] Stories file named `component-name.stories.tsx`
- [ ] Index file for exports (`index.ts`)
- [ ] Story title uses `'UI/ComponentName'` format
- [ ] Uses CSS variables for all colors
- [ ] Implements cva for variants
- [ ] Includes TypeScript interfaces
- [ ] Uses React.forwardRef
- [ ] Handles all interactive states
- [ ] Includes comprehensive Storybook stories
- [ ] Follows spacing and typography guidelines
- [ ] Uses `cn()` utility for className merging
- [ ] Exports both component and variants
- [ ] Inter-component imports use relative paths (`../component`)
