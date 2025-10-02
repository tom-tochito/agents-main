import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

// Tooltip content variants
const tooltipContentVariants = cva(
  "z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border bg-background text-foreground",
        light: "bg-white text-gray-900 shadow-lg border",
        dark: "bg-gray-900 text-white",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-xs",
        lg: "px-4 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContentVariants> {
  showArrow?: boolean
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, variant, size, showArrow = true, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(tooltipContentVariants({ variant, size }), className)}
    {...props}
  >
    {props.children}
    {showArrow && (
      <TooltipPrimitive.Arrow
        className={cn(
          "fill-current",
          variant === "default" && "text-primary",
          variant === "secondary" && "text-secondary",
          variant === "destructive" && "text-destructive",
          variant === "outline" && "text-border",
          variant === "light" && "text-white drop-shadow",
          variant === "dark" && "text-gray-900",
        )}
      />
    )}
  </TooltipPrimitive.Content>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

// Simple tooltip wrapper for common use cases
interface SimpleTooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  delayDuration?: number
  variant?: VariantProps<typeof tooltipContentVariants>["variant"]
  size?: VariantProps<typeof tooltipContentVariants>["size"]
  showArrow?: boolean
  className?: string
  asChild?: boolean
}

const SimpleTooltip = React.forwardRef<HTMLElement, SimpleTooltipProps>(
  (
    {
      content,
      children,
      side = "top",
      align = "center",
      delayDuration = 200,
      variant,
      size,
      showArrow,
      className,
      asChild = false,
    },
    ref,
  ) => {
    return (
      <TooltipProvider delayDuration={delayDuration}>
        <Tooltip>
          <TooltipTrigger asChild={asChild} ref={ref}>
            {children}
          </TooltipTrigger>
          <TooltipPrimitive.Portal>
            <TooltipContent
              side={side}
              align={align}
              variant={variant}
              size={size}
              showArrow={showArrow}
              className={className}
            >
              {content}
            </TooltipContent>
          </TooltipPrimitive.Portal>
        </Tooltip>
      </TooltipProvider>
    )
  },
)
SimpleTooltip.displayName = "SimpleTooltip"

// Rich tooltip with title and description
interface RichTooltipProps extends Omit<SimpleTooltipProps, "content"> {
  title: string
  description?: string
  icon?: React.ReactNode
}

const RichTooltip = React.forwardRef<HTMLElement, RichTooltipProps>(
  ({ title, description, icon, children, ...props }, ref) => {
    return (
      <SimpleTooltip
        {...props}
        ref={ref}
        content={
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {icon && <span className="flex-shrink-0">{icon}</span>}
              <p className="font-semibold">{title}</p>
            </div>
            {description && <p className="text-xs opacity-90">{description}</p>}
          </div>
        }
        size="lg"
      >
        {children}
      </SimpleTooltip>
    )
  },
)
RichTooltip.displayName = "RichTooltip"

// Keyboard shortcut tooltip
interface KeyboardTooltipProps extends Omit<SimpleTooltipProps, "content"> {
  text: string
  keys: string[]
}

const KeyboardTooltip = React.forwardRef<HTMLElement, KeyboardTooltipProps>(
  ({ text, keys, children, ...props }, ref) => {
    return (
      <SimpleTooltip
        {...props}
        ref={ref}
        content={
          <div className="flex items-center gap-2">
            <span>{text}</span>
            <div className="flex gap-1">
              {keys.map((key, index) => (
                <kbd
                  key={index}
                  className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none"
                >
                  {key}
                </kbd>
              ))}
            </div>
          </div>
        }
      >
        {children}
      </SimpleTooltip>
    )
  },
)
KeyboardTooltip.displayName = "KeyboardTooltip"

// Delayed tooltip (shows after longer hover)
interface DelayedTooltipProps extends SimpleTooltipProps {
  delay?: number
}

const DelayedTooltip = React.forwardRef<HTMLElement, DelayedTooltipProps>(
  ({ delay = 700, ...props }, ref) => {
    return <SimpleTooltip {...props} ref={ref} delayDuration={delay} />
  },
)
DelayedTooltip.displayName = "DelayedTooltip"

// Interactive tooltip (stays open when hovering content)
const InteractiveTooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps & {
    children: React.ReactNode
    trigger: React.ReactNode
  }
>(({ children, trigger, ...props }, ref) => {
  const [open, setOpen] = React.useState(false)

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipPrimitive.Portal>
          <TooltipContent
            ref={ref}
            onPointerEnter={() => setOpen(true)}
            onPointerLeave={() => setOpen(false)}
            {...props}
          >
            {children}
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </Tooltip>
    </TooltipProvider>
  )
})
InteractiveTooltip.displayName = "InteractiveTooltip"

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  SimpleTooltip,
  RichTooltip,
  KeyboardTooltip,
  DelayedTooltip,
  InteractiveTooltip,
  tooltipContentVariants,
}
