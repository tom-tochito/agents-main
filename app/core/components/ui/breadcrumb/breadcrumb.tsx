import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal, Slash } from "lucide-react"
import { cn } from "~/core/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
)
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
)
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn(
        "hover:text-primary focus:text-primary text-sm font-medium transition-colors focus:outline-none",
        className,
      )}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground text-sm font-bold", className)}
      {...props}
    />
  ),
)
BreadcrumbPage.displayName = "BreadcrumbPage"

interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<"li"> {
  children?: React.ReactNode
  type?: "chevron" | "slash" | "arrow" | "dot"
}

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  ({ children, className, type = "chevron", ...props }, ref) => {
    const separators = {
      chevron: <ChevronRight className="h-3.5 w-3.5" />,
      slash: <Slash className="h-3.5 w-3.5" />,
      arrow: <span aria-hidden="true">→</span>,
      dot: <span aria-hidden="true">•</span>,
    }

    return (
      <li
        ref={ref}
        role="presentation"
        aria-hidden="true"
        className={cn("[&>svg]:size-3.5", className)}
        {...props}
      >
        {children || separators[type]}
      </li>
    )
  },
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
))
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

// Dropdown for collapsed items
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

const BreadcrumbDropdown = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> & {
    children: React.ReactNode
    items?: Array<{ href: string; label: string }>
  }
>(({ children, items = [], ...props }, _ref) => {
  return (
    <DropdownMenuPrimitive.Root {...props}>
      <DropdownMenuPrimitive.Trigger asChild>
        <button
          className="hover:text-primary focus:text-primary flex h-9 w-9 items-center justify-center focus:outline-none"
          aria-label="Toggle menu"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="bg-popover text-popover-foreground animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md"
          align="start"
        >
          {items.map((item, index) => (
            <DropdownMenuPrimitive.Item key={index} asChild>
              <a
                href={item.href}
                className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none"
              >
                {item.label}
              </a>
            </DropdownMenuPrimitive.Item>
          ))}
          {children}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
})
BreadcrumbDropdown.displayName = "BreadcrumbDropdown"

// Helper component for responsive breadcrumbs
interface ResponsiveBreadcrumbProps {
  items: Array<{
    href?: string
    label: string
    current?: boolean
  }>
  maxItems?: number
  separator?: "chevron" | "slash" | "arrow" | "dot"
}

const ResponsiveBreadcrumb: React.FC<ResponsiveBreadcrumbProps> = ({
  items,
  maxItems = 3,
  separator = "chevron",
}) => {
  const itemsToShow = React.useMemo(() => {
    if (items.length <= maxItems) return items

    const firstItem = items[0]
    const lastItems = items.slice(-(maxItems - 1))
    const collapsedItems = items.slice(1, -(maxItems - 1))

    return {
      first: firstItem,
      collapsed: collapsedItems,
      last: lastItems,
    }
  }, [items, maxItems])

  if (items.length <= maxItems) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.current ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : item.href ? (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                ) : (
                  <span>{item.label}</span>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator type={separator} />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    )
  }

  const { first, collapsed, last } = itemsToShow as {
    first: (typeof items)[0]
    collapsed: typeof items
    last: typeof items
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {first.href ? (
            <BreadcrumbLink href={first.href}>{first.label}</BreadcrumbLink>
          ) : (
            <span>{first.label}</span>
          )}
        </BreadcrumbItem>
        <BreadcrumbSeparator type={separator} />

        <BreadcrumbItem>
          <BreadcrumbDropdown
            items={collapsed.map((item) => ({
              href: item.href || "#",
              label: item.label,
            }))}
          />
        </BreadcrumbItem>
        <BreadcrumbSeparator type={separator} />

        {last.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.current ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : item.href ? (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              ) : (
                <span>{item.label}</span>
              )}
            </BreadcrumbItem>
            {index < last.length - 1 && <BreadcrumbSeparator type={separator} />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbDropdown,
  ResponsiveBreadcrumb,
}
