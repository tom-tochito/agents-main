import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "bg-destructive text-primary-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent text-foreground hover:bg-muted",
        success: "bg-green-100 text-green-700 hover:bg-green-200",
        warning: "bg-amber-100 text-amber-700 hover:bg-amber-200",
        info: "bg-blue-100 text-blue-700 hover:bg-blue-200",
        subtle: "bg-muted text-muted-foreground hover:bg-muted/80",
      },
      size: {
        sm: "h-5 px-2 text-xs rounded-md",
        md: "h-6 px-2.5 text-xs rounded-md",
        lg: "h-7 px-3 text-sm rounded-lg",
      },
      rounded: {
        default: "",
        full: "rounded-full",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, rounded, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, rounded }), className)}
        {...props}
      />
    )
  },
)
Badge.displayName = "Badge"

// Dot Badge Component for status indicators
interface DotBadgeProps extends Omit<BadgeProps, "children"> {
  dot?: boolean
  dotPosition?: "left" | "right"
  children?: React.ReactNode
}

const DotBadge = React.forwardRef<HTMLDivElement, DotBadgeProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      dot = true,
      dotPosition = "left",
      children,
      ...props
    },
    ref,
  ) => {
    const dotSizes = {
      sm: "h-1.5 w-1.5",
      md: "h-2 w-2",
      lg: "h-2.5 w-2.5",
    }

    const dotColors = {
      default: "bg-primary-foreground",
      secondary: "bg-secondary-foreground",
      destructive: "bg-primary-foreground",
      outline: "bg-foreground",
      success: "bg-green-700",
      warning: "bg-amber-700",
      info: "bg-blue-700",
      subtle: "bg-muted-foreground",
    }

    return (
      <Badge
        ref={ref}
        variant={variant}
        size={size}
        className={cn("gap-1.5", className)}
        {...props}
      >
        {dot && dotPosition === "left" && (
          <span
            className={cn("rounded-full", dotSizes[size || "md"], dotColors[variant || "default"])}
          />
        )}
        {children}
        {dot && dotPosition === "right" && (
          <span
            className={cn("rounded-full", dotSizes[size || "md"], dotColors[variant || "default"])}
          />
        )}
      </Badge>
    )
  },
)
DotBadge.displayName = "DotBadge"

// Icon Badge Component
interface IconBadgeProps extends BadgeProps {
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const IconBadge = React.forwardRef<HTMLDivElement, IconBadgeProps>(
  ({ className, icon, iconPosition = "left", children, ...props }, ref) => {
    return (
      <Badge ref={ref} className={cn("gap-1", className)} {...props}>
        {icon && iconPosition === "left" && <span className="[&_svg]:h-3 [&_svg]:w-3">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && (
          <span className="[&_svg]:h-3 [&_svg]:w-3">{icon}</span>
        )}
      </Badge>
    )
  },
)
IconBadge.displayName = "IconBadge"

// Notification Badge Component (for showing counts)
interface NotificationBadgeProps extends Omit<BadgeProps, "children"> {
  count: number | string
  max?: number
  showZero?: boolean
  dot?: boolean
}

const NotificationBadge = React.forwardRef<HTMLDivElement, NotificationBadgeProps>(
  ({ className, count, max = 99, showZero = false, dot = false, size = "sm", ...props }, ref) => {
    const displayCount = React.useMemo(() => {
      if (dot) return null
      const numCount = typeof count === "string" ? parseInt(count) : count
      if (isNaN(numCount)) return count
      if (numCount === 0 && !showZero) return null
      return numCount > max ? `${max}+` : numCount
    }, [count, max, showZero, dot])

    if (displayCount === null && !dot) return null

    return (
      <Badge
        ref={ref}
        size={size}
        rounded={dot ? "full" : "full"}
        className={cn("min-w-[20px] px-1.5", dot && "h-2 w-2 min-w-0 p-0", className)}
        {...props}
      >
        {!dot && displayCount}
      </Badge>
    )
  },
)
NotificationBadge.displayName = "NotificationBadge"

// Badge with close button
interface ClosableBadgeProps extends BadgeProps {
  onClose?: () => void
}

const ClosableBadge = React.forwardRef<HTMLDivElement, ClosableBadgeProps>(
  ({ className, onClose, children, ...props }, ref) => {
    return (
      <Badge ref={ref} className={cn("gap-1 pr-1", className)} {...props}>
        {children}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="ring-offset-background focus:ring-ring ml-1 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 2.5L2.5 7.5M2.5 2.5L7.5 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">Remove</span>
          </button>
        )}
      </Badge>
    )
  },
)
ClosableBadge.displayName = "ClosableBadge"

export { Badge, DotBadge, IconBadge, NotificationBadge, ClosableBadge, badgeVariants }
