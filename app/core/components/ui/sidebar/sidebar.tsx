import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"
import { Button } from "../button"
import { Sheet, SheetContent } from "../sheet"
import { ScrollArea } from "../scroll-area/scroll-area"
import { Separator } from "../separator/separator"
import { ChevronLeft, ChevronRight, Menu } from "lucide-react"

const sidebarVariants = cva(
  "flex h-full flex-col border-r bg-background transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "w-64",
        compact: "w-16",
        wide: "w-80",
      },
      position: {
        left: "border-r",
        right: "border-l",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "left",
    },
  },
)

interface SidebarContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
  isMobile: boolean
  variant: "default" | "compact" | "wide"
  position: "left" | "right"
}

const SidebarContext = React.createContext<SidebarContextType | undefined>(undefined)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

interface SidebarProviderProps {
  children: React.ReactNode
  defaultOpen?: boolean
  defaultCollapsed?: boolean
  variant?: "default" | "compact" | "wide"
  position?: "left" | "right"
}

function SidebarProvider({
  children,
  defaultOpen = true,
  defaultCollapsed = false,
  variant = "default",
  position = "left",
}: SidebarProviderProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isCollapsed,
        setIsCollapsed,
        isMobile,
        variant,
        position,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  collapsible?: boolean
  showToggle?: boolean
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, children, collapsible = true, showToggle = true, ...props }, ref) => {
    const { isOpen, setIsOpen, isCollapsed, setIsCollapsed, isMobile, variant, position } =
      useSidebar()

    if (isMobile) {
      return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side={position} className="w-64 p-0">
            <div className="flex h-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    const width = isCollapsed ? "w-16" : variant === "wide" ? "w-80" : "w-64"

    return (
      <aside
        ref={ref}
        className={cn(
          "bg-background relative flex h-full flex-col border-r transition-all duration-300 ease-in-out",
          width,
          position === "right" && "border-r-0 border-l",
          !isOpen && "-ml-64 overflow-hidden md:-ml-0 md:w-0",
          className,
        )}
        {...props}
      >
        {children}
        {collapsible && showToggle && !isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "bg-background absolute top-4 -right-4 z-10 h-8 w-8 rounded-full border",
              position === "right" && "-left-4",
            )}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {position === "left" ? (
              isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )
            ) : isCollapsed ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        )}
      </aside>
    )
  },
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, ...props }, ref) => {
  const { setIsOpen, isMobile } = useSidebar()

  if (!isMobile) return null

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn("md:hidden", className)}
      onClick={() => setIsOpen(true)}
      {...props}
    >
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isCollapsed } = useSidebar()
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2 px-4 py-3", isCollapsed && "px-2", className)}
        {...props}
      />
    )
  },
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <ScrollArea className="flex-1">
        <div ref={ref} className={cn("flex flex-col gap-2 p-2", className)} {...props}>
          {children}
        </div>
      </ScrollArea>
    )
  },
)
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isCollapsed } = useSidebar()
    return (
      <div
        ref={ref}
        className={cn("mt-auto border-t px-4 py-3", isCollapsed && "px-2", className)}
        {...props}
      />
    )
  },
)
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props} />
  },
)
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { isCollapsed } = useSidebar()
  if (isCollapsed) return null
  return (
    <p
      ref={ref}
      className={cn("text-muted-foreground px-2 text-xs font-medium", className)}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const sidebarItemVariants = cva(
  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
  {
    variants: {
      isActive: {
        true: "bg-accent text-accent-foreground",
        false: "text-muted-foreground",
      },
      isCollapsed: {
        true: "justify-center px-2",
        false: "",
      },
    },
    defaultVariants: {
      isActive: false,
      isCollapsed: false,
    },
  },
)

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  icon?: React.ReactNode
  badge?: React.ReactNode
}

const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ className, isActive = false, icon, badge, children, ...props }, ref) => {
    const { isCollapsed } = useSidebar()

    return (
      <div
        ref={ref}
        className={cn(sidebarItemVariants({ isActive, isCollapsed }), className)}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {!isCollapsed && (
          <>
            <span className="flex-1">{children}</span>
            {badge}
          </>
        )}
      </div>
    )
  },
)
SidebarItem.displayName = "SidebarItem"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => {
  return <Separator ref={ref} className={cn("my-2", className)} {...props} />
})
SidebarSeparator.displayName = "SidebarSeparator"

// Collapsible sidebar variant for nested items
interface SidebarCollapsibleProps {
  children: React.ReactNode
  title: string
  icon?: React.ReactNode
  defaultOpen?: boolean
}

const SidebarCollapsible = React.forwardRef<HTMLDivElement, SidebarCollapsibleProps>(
  ({ children, title, icon, defaultOpen = false }, ref) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen)
    const { isCollapsed } = useSidebar()

    if (isCollapsed) {
      return <>{children}</>
    }

    return (
      <div ref={ref} className="flex flex-col gap-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-muted-foreground hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
        >
          {icon && <span className="flex-shrink-0">{icon}</span>}
          <span className="flex-1 text-left">{title}</span>
          <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")} />
        </button>
        {isOpen && <div className="ml-4 flex flex-col gap-1">{children}</div>}
      </div>
    )
  },
)
SidebarCollapsible.displayName = "SidebarCollapsible"

// Layout components for using with sidebar
const SidebarLayout = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex h-screen w-full overflow-hidden", className)} {...props} />
    )
  },
)
SidebarLayout.displayName = "SidebarLayout"

const SidebarInset = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn("flex flex-1 flex-col overflow-hidden", className)}
        {...props}
      />
    )
  },
)
SidebarInset.displayName = "SidebarInset"

export {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarSeparator,
  SidebarCollapsible,
  SidebarLayout,
  SidebarInset,
  useSidebar,
  sidebarVariants,
  sidebarItemVariants,
}
