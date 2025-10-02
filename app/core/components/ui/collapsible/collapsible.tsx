import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { ChevronDown } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

const Collapsible = CollapsiblePrimitive.Root

const { CollapsibleTrigger } = CollapsiblePrimitive

const { CollapsibleContent } = CollapsiblePrimitive

const collapsibleVariants = cva("w-full", {
  variants: {
    variant: {
      default: "border rounded-lg",
      ghost: "border-0",
      card: "border rounded-lg shadow-sm bg-card",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const collapsibleTriggerVariants = cva(
  "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      size: {
        sm: "text-sm px-3 py-2",
        md: "text-base px-4 py-3",
        lg: "text-lg px-5 py-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

export interface CollapsibleItemProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>,
    VariantProps<typeof collapsibleVariants>,
    VariantProps<typeof collapsibleTriggerVariants> {
  title: React.ReactNode
  children: React.ReactNode
  icon?: React.ReactNode
  chevron?: boolean
}

const CollapsibleItem = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleItemProps
>(({ className, variant, size, title, children, icon, chevron = true, ...props }, ref) => {
  return (
    <Collapsible ref={ref} className={cn(collapsibleVariants({ variant }), className)} {...props}>
      <CollapsibleTrigger className={cn(collapsibleTriggerVariants({ size }))}>
        <div className="flex items-center gap-2">
          {icon && <span className="flex-shrink-0">{icon}</span>}
          <span>{title}</span>
        </div>
        {chevron && <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
        <div
          className={cn(
            size === "sm" && "px-3 pb-2",
            size === "md" && "px-4 pb-3",
            size === "lg" && "px-5 pb-4",
          )}
        >
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
})
CollapsibleItem.displayName = "CollapsibleItem"

// Accordion-style collapsible group
interface CollapsibleGroupProps {
  children: React.ReactNode
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  className?: string
}

const CollapsibleGroup = React.forwardRef<HTMLDivElement, CollapsibleGroupProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {children}
      </div>
    )
  },
)
CollapsibleGroup.displayName = "CollapsibleGroup"

// Collapsible card component
interface CollapsibleCardProps extends CollapsibleItemProps {
  description?: React.ReactNode
  badge?: React.ReactNode
}

const CollapsibleCard = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleCardProps
>(({ title, description, badge, children, className, ...props }, ref) => {
  return (
    <CollapsibleItem
      ref={ref}
      variant="card"
      title={
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-sm font-semibold">{title}</h4>
              {description && <p className="text-muted-foreground mt-1 text-sm">{description}</p>}
            </div>
            {badge && <div className="ml-2">{badge}</div>}
          </div>
        </div>
      }
      className={cn("transition-shadow hover:shadow-md", className)}
      {...props}
    >
      {children}
    </CollapsibleItem>
  )
})
CollapsibleCard.displayName = "CollapsibleCard"

// Simple collapsible with custom trigger
interface SimpleCollapsibleProps {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const SimpleCollapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  SimpleCollapsibleProps
>(({ trigger, children, className, ...props }, ref) => {
  return (
    <Collapsible ref={ref} className={className} {...props}>
      <CollapsibleTrigger asChild>{trigger}</CollapsibleTrigger>
      <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
})
SimpleCollapsible.displayName = "SimpleCollapsible"

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleItem,
  CollapsibleGroup,
  CollapsibleCard,
  SimpleCollapsible,
  collapsibleVariants,
  collapsibleTriggerVariants,
}
