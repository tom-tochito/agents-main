import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

// Table component
const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
)
Table.displayName = "Table"

// Table header
const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

// Table body
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
))
TableBody.displayName = "TableBody"

// Table footer
const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

// Table row variants
const tableRowVariants = cva("border-b transition-colors", {
  variants: {
    variant: {
      default: "hover:bg-muted/50 data-[state=selected]:bg-muted",
      clickable: "cursor-pointer hover:bg-muted/50 data-[state=selected]:bg-muted",
      striped: "odd:bg-muted/20 hover:bg-muted/50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, variant, ...props }, ref) => (
    <tr ref={ref} className={cn(tableRowVariants({ variant }), className)} {...props} />
  ),
)
TableRow.displayName = "TableRow"

// Table head cell
const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

// Table cell variants
const tableCellVariants = cva("p-4 align-middle [&:has([role=checkbox])]:pr-0", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    align: "left",
  },
})

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableCellVariants> {}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, align, ...props }, ref) => (
    <td ref={ref} className={cn(tableCellVariants({ align }), className)} {...props} />
  ),
)
TableCell.displayName = "TableCell"

// Table caption
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn("text-muted-foreground mt-4 text-sm", className)} {...props} />
))
TableCaption.displayName = "TableCaption"

// Enhanced table container with border and shadow
const TableContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    bordered?: boolean
    shadow?: boolean
  }
>(({ className, bordered = false, shadow = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative w-full overflow-auto",
      bordered && "rounded-md border",
      shadow && "shadow-sm",
      className,
    )}
    {...props}
  />
))
TableContainer.displayName = "TableContainer"

// Responsive table wrapper
const ResponsiveTable = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("w-full overflow-x-auto", className)} {...props}>
      <div className="inline-block min-w-full align-middle">{children}</div>
    </div>
  ),
)
ResponsiveTable.displayName = "ResponsiveTable"

// Sortable table header
interface SortableTableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  sorted?: "asc" | "desc" | false
  onSort?: () => void
}

const SortableTableHead = React.forwardRef<HTMLTableCellElement, SortableTableHeadProps>(
  ({ className, sorted, onSort, children, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
        onSort && "hover:text-foreground cursor-pointer select-none",
        className,
      )}
      onClick={onSort}
      {...props}
    >
      <div className="flex items-center gap-2">
        {children}
        {onSort && (
          <div className="flex flex-col">
            <svg
              className={cn(
                "h-3 w-3 transition-colors",
                sorted === "asc" ? "text-foreground" : "text-muted-foreground/50",
              )}
              viewBox="0 0 12 12"
            >
              <path d="M6 3L10 8H2L6 3Z" fill="currentColor" />
            </svg>
            <svg
              className={cn(
                "-mt-1 h-3 w-3 transition-colors",
                sorted === "desc" ? "text-foreground" : "text-muted-foreground/50",
              )}
              viewBox="0 0 12 12"
            >
              <path d="M6 9L2 4H10L6 9Z" fill="currentColor" />
            </svg>
          </div>
        )}
      </div>
    </th>
  ),
)
SortableTableHead.displayName = "SortableTableHead"

// Compact table variant
const CompactTable = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm [&_td]:p-2 [&_th]:h-8 [&_th]:p-2", className)}
      {...props}
    />
  ),
)
CompactTable.displayName = "CompactTable"

// Sticky header table
const StickyHeaderTable = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    maxHeight?: string
  }
>(({ className, maxHeight = "400px", children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative w-full overflow-auto", className)}
    style={{ maxHeight }}
    {...props}
  >
    <table className="w-full caption-bottom text-sm">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TableHeader) {
          return React.cloneElement(child as React.ReactElement<any>, {
            className: cn(
              "sticky top-0 z-10 bg-background shadow-sm",
              (child as React.ReactElement<any>).props.className,
            ),
          })
        }
        return child
      })}
    </table>
  </div>
))
StickyHeaderTable.displayName = "StickyHeaderTable"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableContainer,
  ResponsiveTable,
  SortableTableHead,
  CompactTable,
  StickyHeaderTable,
  tableRowVariants,
  tableCellVariants,
}
