import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

const Tabs = TabsPrimitive.Root

// TabsList variants
const tabsListVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      default: "h-10 rounded-md bg-muted p-1 text-muted-foreground",
      underline: "h-10 border-b bg-transparent p-0",
      pills: "h-10 gap-1 bg-transparent p-0",
      ghost: "h-10 gap-1 bg-transparent p-0",
    },
    size: {
      sm: "h-8 text-sm",
      md: "h-10 text-sm",
      lg: "h-12 text-base",
    },
    fullWidth: {
      true: "w-full",
      false: "w-fit",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    fullWidth: false,
  },
})

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(tabsListVariants({ variant, size, fullWidth }), className)}
      {...props}
    />
  ),
)
TabsList.displayName = TabsPrimitive.List.displayName

// TabsTrigger variants
const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-sm px-3 py-1.5 text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        underline:
          "rounded-none border-b-2 border-transparent px-3 pb-3 pt-2 text-sm data-[state=active]:border-primary data-[state=active]:text-foreground",
        pills:
          "rounded-md px-3 py-1.5 text-sm hover:bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
        ghost:
          "rounded-md px-3 py-1.5 text-sm hover:bg-muted hover:text-foreground data-[state=active]:bg-muted data-[state=active]:text-foreground",
      },
      size: {
        sm: "h-7 text-xs",
        md: "h-9 text-sm",
        lg: "h-11 text-base",
      },
      fullWidth: {
        true: "flex-1",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: false,
    },
    compoundVariants: [
      {
        variant: "underline",
        size: "sm",
        className: "pb-2 pt-1.5",
      },
      {
        variant: "underline",
        size: "lg",
        className: "pb-4 pt-2.5",
      },
    ],
  },
)

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, size, fullWidth, ...props }, ref) => {
  // Get the variant from parent context if available
  const listVariant = variant || "default"

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabsTriggerVariants({ variant: listVariant, size, fullWidth }), className)}
      {...props}
    />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// Vertical tabs container
const VerticalTabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn("flex gap-4", className)}
    orientation="vertical"
    {...props}
  />
))
VerticalTabs.displayName = "VerticalTabs"

// Vertical tabs list
const VerticalTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "bg-muted text-muted-foreground flex h-auto flex-col items-stretch space-y-1 rounded-md p-1",
      className,
    )}
    {...props}
  />
))
VerticalTabsList.displayName = "VerticalTabsList"

// Vertical tabs trigger
const VerticalTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "ring-offset-background hover:bg-background hover:text-foreground focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground justify-start rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
      className,
    )}
    {...props}
  />
))
VerticalTabsTrigger.displayName = "VerticalTabsTrigger"

// Icon tabs for icon-only triggers
const IconTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1",
      className,
    )}
    {...props}
  />
))
IconTabsList.displayName = "IconTabsList"

const IconTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "ring-offset-background hover:bg-background hover:text-foreground focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex h-8 w-8 items-center justify-center rounded-sm text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:h-4 [&_svg]:w-4",
      className,
    )}
    {...props}
  />
))
IconTabsTrigger.displayName = "IconTabsTrigger"

// Scrollable tabs container
const ScrollableTabs = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("w-full overflow-x-auto", className)} {...props}>
      <div className="inline-flex min-w-full">{children}</div>
    </div>
  ),
)
ScrollableTabs.displayName = "ScrollableTabs"

// Closable tab trigger
interface ClosableTabTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  onClose?: () => void
}

const ClosableTabTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  ClosableTabTriggerProps
>(({ className, children, onClose, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "group ring-offset-background hover:bg-background hover:text-foreground focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center gap-2 rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
      className,
    )}
    {...props}
  >
    {children}
    {onClose && (
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="ring-offset-background focus:ring-ring ml-1 h-4 w-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </button>
    )}
  </TabsPrimitive.Trigger>
))
ClosableTabTrigger.displayName = "ClosableTabTrigger"

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  VerticalTabs,
  VerticalTabsList,
  VerticalTabsTrigger,
  IconTabsList,
  IconTabsTrigger,
  ScrollableTabs,
  ClosableTabTrigger,
  tabsListVariants,
  tabsTriggerVariants,
}
