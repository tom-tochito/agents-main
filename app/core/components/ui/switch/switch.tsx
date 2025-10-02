import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

const switchVariants = cva(
  "peer inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        md: "h-[1.15rem] w-8",
        lg: "h-6 w-11",
      },
      variant: {
        default: "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        secondary: "data-[state=checked]:bg-secondary-foreground data-[state=unchecked]:bg-input",
        destructive: "data-[state=checked]:bg-destructive data-[state=unchecked]:bg-input",
        success: "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-input",
        warning: "data-[state=checked]:bg-yellow-500 data-[state=unchecked]:bg-input",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
)

const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-background ring-0 transition-transform",
  {
    variants: {
      size: {
        sm: "size-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0",
        md: "size-4 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
        lg: "size-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

export interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, size, variant, ...props }, ref) => (
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(switchVariants({ size, variant }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb className={cn(switchThumbVariants({ size }))} />
    </SwitchPrimitive.Root>
  ),
)
Switch.displayName = SwitchPrimitive.Root.displayName

// Switch with label
interface SwitchWithLabelProps extends SwitchProps {
  label: string
  description?: string
  labelPosition?: "left" | "right"
}

const SwitchWithLabel = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchWithLabelProps
>(({ label, description, labelPosition = "right", id, ...props }, ref) => {
  const generatedId = React.useId()
  const switchId = id || generatedId

  const labelContent = (
    <div className="flex flex-col">
      <label
        htmlFor={switchId}
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      {description && <span className="text-muted-foreground text-xs">{description}</span>}
    </div>
  )

  return (
    <div className="flex items-center space-x-3">
      {labelPosition === "left" && labelContent}
      <Switch ref={ref} id={switchId} {...props} />
      {labelPosition === "right" && labelContent}
    </div>
  )
})
SwitchWithLabel.displayName = "SwitchWithLabel"

// Switch with icons
interface SwitchWithIconsProps extends SwitchProps {
  onIcon?: React.ReactNode
  offIcon?: React.ReactNode
}

const SwitchWithIcons = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchWithIconsProps
>(({ className, size, variant, onIcon, offIcon, ...props }, ref) => {
  const [checked, setChecked] = React.useState(props.checked || props.defaultChecked || false)

  return (
    <div className="relative inline-flex items-center">
      <SwitchPrimitive.Root
        ref={ref}
        checked={props.checked !== undefined ? props.checked : checked}
        onCheckedChange={(value) => {
          setChecked(value)
          props.onCheckedChange?.(value)
        }}
        className={cn(switchVariants({ size, variant }), className)}
        {...props}
      >
        <SwitchPrimitive.Thumb className={cn(switchThumbVariants({ size }))} />
        {onIcon && (
          <span
            className={cn(
              "absolute left-1 transition-opacity",
              size === "sm" && "left-0.5",
              size === "lg" && "left-1.5",
              checked ? "opacity-100" : "opacity-0",
            )}
          >
            {onIcon}
          </span>
        )}
        {offIcon && (
          <span
            className={cn(
              "absolute right-1 transition-opacity",
              size === "sm" && "right-0.5",
              size === "lg" && "right-1.5",
              !checked ? "opacity-100" : "opacity-0",
            )}
          >
            {offIcon}
          </span>
        )}
      </SwitchPrimitive.Root>
    </div>
  )
})
SwitchWithIcons.displayName = "SwitchWithIcons"

// Switch group
interface SwitchGroupProps {
  children: React.ReactNode
  orientation?: "horizontal" | "vertical"
  className?: string
}

const SwitchGroup = React.forwardRef<HTMLDivElement, SwitchGroupProps>(
  ({ children, orientation = "vertical", className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "vertical" ? "flex-col space-y-4" : "flex-row space-x-6",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)
SwitchGroup.displayName = "SwitchGroup"

// Switch card (for settings)
interface SwitchCardProps extends SwitchProps {
  title: string
  description?: string
  icon?: React.ReactNode
}

const SwitchCard = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchCardProps>(
  ({ title, description, icon, ...props }, ref) => {
    return (
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="flex items-start space-x-3">
          {icon && <div className="mt-0.5">{icon}</div>}
          <div className="space-y-1">
            <p className="text-sm leading-none font-medium">{title}</p>
            {description && <p className="text-muted-foreground text-sm">{description}</p>}
          </div>
        </div>
        <Switch ref={ref} {...props} />
      </div>
    )
  },
)
SwitchCard.displayName = "SwitchCard"

export {
  Switch,
  SwitchWithLabel,
  SwitchWithIcons,
  SwitchGroup,
  SwitchCard,
  switchVariants,
  switchThumbVariants,
}
