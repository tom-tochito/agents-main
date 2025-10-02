import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

const avatarVariants = cva("relative flex shrink-0 overflow-hidden rounded-full", {
  variants: {
    size: {
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-14 w-14",
      "2xl": "h-16 w-16",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const avatarImageVariants = cva("aspect-square h-full w-full object-cover", {
  variants: {
    fit: {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
    },
  },
  defaultVariants: {
    fit: "cover",
  },
})

const avatarFallbackVariants = cva(
  "flex h-full w-full items-center justify-center bg-muted font-medium",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg",
        "2xl": "text-xl",
      },
      variant: {
        default: "bg-muted text-muted-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-green-100 text-green-700",
        warning: "bg-amber-100 text-amber-700",
        destructive: "bg-red-100 text-red-700",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
)

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  className?: string
}

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, size, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  ),
)
Avatar.displayName = AvatarPrimitive.Root.displayName

interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>,
    VariantProps<typeof avatarImageVariants> {}

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, fit, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(avatarImageVariants({ fit }), className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
    VariantProps<typeof avatarFallbackVariants> {}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, size, variant, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(avatarFallbackVariants({ size, variant }), className)}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

// Avatar Group Component
interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  limit?: number
  size?: VariantProps<typeof avatarVariants>["size"]
  children: React.ReactNode
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, limit = 3, size = "md", children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children)
    const displayedChildren = limit ? childrenArray.slice(0, limit) : childrenArray
    const remainingCount = childrenArray.length - displayedChildren.length

    return (
      <div ref={ref} className={cn("flex -space-x-3", className)} {...props}>
        {displayedChildren.map((child, index) => (
          <div
            key={index}
            className="ring-background relative inline-block rounded-full ring-2"
            style={{ zIndex: displayedChildren.length - index }}
          >
            {React.isValidElement(child) &&
              React.cloneElement(child as React.ReactElement<any>, { size })}
          </div>
        ))}
        {remainingCount > 0 && (
          <div
            className="ring-background relative inline-block rounded-full ring-2"
            style={{ zIndex: 0 }}
          >
            <Avatar size={size}>
              <AvatarFallback size={size} variant="default">
                +{remainingCount}
              </AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    )
  },
)
AvatarGroup.displayName = "AvatarGroup"

// Status Indicator Component
interface AvatarStatusProps {
  status: "online" | "offline" | "away" | "busy"
  size?: VariantProps<typeof avatarVariants>["size"]
}

const statusColors = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  away: "bg-amber-500",
  busy: "bg-red-500",
}

const statusSizes = {
  xs: "h-1.5 w-1.5 border",
  sm: "h-2 w-2 border",
  md: "h-2.5 w-2.5 border-2",
  lg: "h-3 w-3 border-2",
  xl: "h-3.5 w-3.5 border-2",
  "2xl": "h-4 w-4 border-2",
}

const AvatarStatus: React.FC<AvatarStatusProps> = ({ status, size = "md" }) => (
  <span
    className={cn(
      "border-background absolute right-0 bottom-0 block rounded-full",
      statusColors[status],
      statusSizes[size as keyof typeof statusSizes],
    )}
  />
)
AvatarStatus.displayName = "AvatarStatus"

// Avatar with status wrapper
interface AvatarWithStatusProps extends AvatarProps {
  status?: "online" | "offline" | "away" | "busy"
  children: React.ReactNode
}

const AvatarWithStatus = React.forwardRef<HTMLDivElement, AvatarWithStatusProps>(
  ({ status, size, children, className, ...props }, ref) => (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <Avatar size={size} {...props}>
        {children}
      </Avatar>
      {status && <AvatarStatus status={status} size={size} />}
    </div>
  ),
)
AvatarWithStatus.displayName = "AvatarWithStatus"

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarWithStatus,
  avatarVariants,
  avatarImageVariants,
  avatarFallbackVariants,
}
