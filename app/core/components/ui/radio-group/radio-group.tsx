import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/core/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const radioGroupItemVariants = cva(
  "aspect-square h-4 w-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-primary text-primary",
        secondary: "border-secondary text-secondary",
        destructive: "border-destructive text-destructive",
        success: "border-green-500 text-green-500",
        warning: "border-yellow-500 text-yellow-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, variant, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioGroupItemVariants({ variant }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

// Radio Group with Label
interface RadioGroupWithLabelsProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  label?: string
  description?: string
  error?: string
  required?: boolean
}

const RadioGroupWithLabels = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupWithLabelsProps
>(({ label, description, error, required, className, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}
      {description && <p className="text-muted-foreground text-sm">{description}</p>}
      <RadioGroup ref={ref} className={className} {...props} />
      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  )
})
RadioGroupWithLabels.displayName = "RadioGroupWithLabels"

// Radio Card component for rich radio options
interface RadioCardProps {
  value: string
  title: string
  description?: string
  icon?: React.ReactNode
  disabled?: boolean
  className?: string
}

const RadioCard = React.forwardRef<HTMLButtonElement, RadioCardProps>(
  ({ value, title, description, icon, disabled, className }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        value={value}
        disabled={disabled}
        className={cn(
          "border-muted bg-popover hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary relative flex cursor-pointer flex-col rounded-lg border-2 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <div className="flex items-start gap-3">
          <RadioGroupPrimitive.Indicator className="mt-0.5">
            <div className="border-primary flex h-4 w-4 items-center justify-center rounded-full border-2">
              <Circle className="fill-primary text-primary h-2.5 w-2.5" />
            </div>
          </RadioGroupPrimitive.Indicator>
          <div className="border-muted mt-0.5 h-4 w-4 rounded-full border-2 data-[state=checked]:hidden" />
          {icon && <div className="mt-0.5">{icon}</div>}
          <div className="flex-1 space-y-1">
            <div className="leading-none font-medium">{title}</div>
            {description && <p className="text-muted-foreground text-sm">{description}</p>}
          </div>
        </div>
      </RadioGroupPrimitive.Item>
    )
  },
)
RadioCard.displayName = "RadioCard"

// Horizontal Radio Group
const HorizontalRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex flex-wrap gap-4", className)}
      {...props}
      ref={ref}
    />
  )
})
HorizontalRadioGroup.displayName = "HorizontalRadioGroup"

// Button Radio Group (like toggle group but single selection)
interface ButtonRadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  options: Array<{ value: string; label: string; icon?: React.ReactNode }>
  size?: "sm" | "default" | "lg"
}

const ButtonRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  ButtonRadioGroupProps
>(({ options, size = "default", className, ...props }, ref) => {
  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    default: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  }

  return (
    <RadioGroupPrimitive.Root
      className={cn("bg-muted inline-flex rounded-lg p-1", className)}
      {...props}
      ref={ref}
    >
      {options.map((option) => (
        <RadioGroupPrimitive.Item
          key={option.value}
          value={option.value}
          className={cn(
            "ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-background data-[state=checked]:text-foreground inline-flex items-center justify-center rounded-md font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:shadow-sm",
            sizeClasses[size],
          )}
        >
          {option.icon && <span className="mr-2">{option.icon}</span>}
          {option.label}
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  )
})
ButtonRadioGroup.displayName = "ButtonRadioGroup"

export {
  RadioGroup,
  RadioGroupItem,
  RadioGroupWithLabels,
  RadioCard,
  HorizontalRadioGroup,
  ButtonRadioGroup,
  radioGroupItemVariants,
}
