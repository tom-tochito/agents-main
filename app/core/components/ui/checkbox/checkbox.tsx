import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

const checkboxVariants = cva(
  "peer shrink-0 rounded-md border border-border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
  {
    variants: {
      size: {
        sm: "h-4 w-4 rounded",
        md: "h-5 w-5 rounded-md",
        lg: "h-6 w-6 rounded-md",
      },
      variant: {
        default:
          "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:text-primary-foreground",
        secondary:
          "data-[state=checked]:bg-secondary data-[state=checked]:border-secondary data-[state=checked]:text-secondary-foreground data-[state=indeterminate]:bg-secondary data-[state=indeterminate]:border-secondary data-[state=indeterminate]:text-secondary-foreground",
        destructive:
          "data-[state=checked]:bg-destructive data-[state=checked]:border-destructive data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-destructive data-[state=indeterminate]:border-destructive data-[state=indeterminate]:text-primary-foreground",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
)

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  indeterminate?: boolean
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, size, variant, indeterminate = false, checked, ...props }, ref) => {
    const checkedState = indeterminate ? "indeterminate" : checked

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(checkboxVariants({ size, variant }), className)}
        checked={checkedState}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
        >
          {indeterminate ? (
            <Minus
              className={cn(
                size === "sm" && "h-3 w-3",
                size === "md" && "h-3.5 w-3.5",
                size === "lg" && "h-4 w-4",
              )}
            />
          ) : (
            <Check
              className={cn(
                size === "sm" && "h-3 w-3",
                size === "md" && "h-3.5 w-3.5",
                size === "lg" && "h-4 w-4",
              )}
            />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )
  },
)
Checkbox.displayName = CheckboxPrimitive.Root.displayName

// Checkbox with label component
interface CheckboxWithLabelProps extends CheckboxProps {
  label: React.ReactNode
  description?: React.ReactNode
  id?: string
}

const CheckboxWithLabel = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxWithLabelProps
>(({ label, description, id, className, ...props }, ref) => {
  const generatedId = React.useId()
  const checkboxId = id || generatedId

  return (
    <div className="flex items-start space-x-3">
      <Checkbox ref={ref} id={checkboxId} {...props} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={checkboxId}
          className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>
    </div>
  )
})
CheckboxWithLabel.displayName = "CheckboxWithLabel"

// Checkbox group component
interface CheckboxGroupProps {
  children: React.ReactNode
  orientation?: "horizontal" | "vertical"
  className?: string
}

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ children, orientation = "vertical", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        className={cn(
          "flex gap-3",
          orientation === "vertical" && "flex-col",
          orientation === "horizontal" && "flex-row flex-wrap",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
CheckboxGroup.displayName = "CheckboxGroup"

// Checkbox card component (checkbox with card-style container)
interface CheckboxCardProps extends CheckboxProps {
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  id?: string
}

const CheckboxCard = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxCardProps
>(({ title, description, icon, id, className, ...props }, ref) => {
  const generatedId = React.useId()
  const checkboxId = id || generatedId
  const [isChecked, setIsChecked] = React.useState(props.checked || false)

  return (
    <label
      htmlFor={checkboxId}
      className={cn(
        "relative flex cursor-pointer rounded-lg border p-4 shadow-sm transition-all hover:shadow-md",
        isChecked && "border-primary bg-primary/5",
        !isChecked && "border-border",
        props.disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <div className="flex flex-1 items-start">
        {icon && <div className="mr-3 flex-shrink-0">{icon}</div>}
        <div className="flex-1">
          <h4 className="text-sm leading-none font-medium">{title}</h4>
          {description && <p className="text-muted-foreground mt-1.5 text-sm">{description}</p>}
        </div>
      </div>
      <Checkbox
        ref={ref}
        id={checkboxId}
        className="mt-1"
        checked={isChecked}
        onCheckedChange={(checked) => {
          setIsChecked(checked as boolean)
          props.onCheckedChange?.(checked)
        }}
        {...props}
      />
    </label>
  )
})
CheckboxCard.displayName = "CheckboxCard"

export { Checkbox, CheckboxWithLabel, CheckboxGroup, CheckboxCard, checkboxVariants }
