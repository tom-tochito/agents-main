import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

// Toggle variants
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        solid:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
      },
      size: {
        sm: "h-8 px-2",
        md: "h-9 px-3",
        lg: "h-10 px-4",
        icon: "h-9 w-9",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  ),
)

Toggle.displayName = TogglePrimitive.Root.displayName

// Toggle Group context and components
const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "md",
  variant: "default",
})

// Toggle Group variants
const toggleGroupVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      default: "rounded-md",
      outline: "rounded-md border border-input",
      separated: "gap-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface ToggleGroupProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>,
    VariantProps<typeof toggleVariants>,
    VariantProps<typeof toggleGroupVariants> {
  groupVariant?: "default" | "outline" | "separated"
}

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, variant, size, groupVariant = "default", children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(toggleGroupVariants({ variant: groupVariant }), className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

// Toggle Group Item
const toggleGroupItemVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent first:rounded-l-md last:rounded-r-md",
        outline: "border-r last:border-r-0 first:rounded-l-md last:rounded-r-md",
        separated: "rounded-md border border-input",
      },
      size: {
        sm: "h-8 px-2",
        md: "h-9 px-3",
        lg: "h-10 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

export interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
    VariantProps<typeof toggleGroupItemVariants> {}

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleGroupItemVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

// Toggle with label
interface ToggleWithLabelProps extends ToggleProps {
  label: string
  labelPosition?: "left" | "right"
}

const ToggleWithLabel = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleWithLabelProps
>(({ label, labelPosition = "right", className, ...props }, ref) => (
  <div className={cn("flex items-center gap-2", className)}>
    {labelPosition === "left" && <label className="text-sm font-medium">{label}</label>}
    <Toggle ref={ref} {...props} />
    {labelPosition === "right" && <label className="text-sm font-medium">{label}</label>}
  </div>
))

ToggleWithLabel.displayName = "ToggleWithLabel"

// Icon Toggle (optimized for icon-only content)
const IconToggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
  ({ className, size = "icon", ...props }, ref) => (
    <Toggle ref={ref} size={size} className={cn("[&_svg]:h-4 [&_svg]:w-4", className)} {...props} />
  ),
)

IconToggle.displayName = "IconToggle"

// Toggle Card (larger toggle with card-like appearance)
interface ToggleCardProps extends ToggleProps {
  title: string
  description?: string
  icon?: React.ReactNode
}

const ToggleCard = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleCardProps>(
  ({ title, description, icon, className, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(
        "hover:bg-accent data-[state=on]:border-primary data-[state=on]:bg-accent flex items-start gap-3 rounded-lg border p-4 text-left transition-colors",
        className,
      )}
      {...props}
    >
      {icon && <div className="mt-0.5">{icon}</div>}
      <div className="space-y-1">
        <div className="font-medium">{title}</div>
        {description && <div className="text-muted-foreground text-sm">{description}</div>}
      </div>
    </TogglePrimitive.Root>
  ),
)

ToggleCard.displayName = "ToggleCard"

// Animated Toggle (with smooth transitions)
const AnimatedToggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
  ({ className, ...props }, ref) => (
    <Toggle
      ref={ref}
      className={cn("transition-all duration-200 data-[state=on]:scale-95", className)}
      {...props}
    />
  ),
)

AnimatedToggle.displayName = "AnimatedToggle"

export {
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  ToggleWithLabel,
  IconToggle,
  ToggleCard,
  AnimatedToggle,
  toggleVariants,
  toggleGroupVariants,
  toggleGroupItemVariants,
}
