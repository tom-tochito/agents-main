import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

const alertVariants = cva(
  "relative flex w-full gap-3 rounded-xl border px-4 py-3 transition-colors",
  {
    variants: {
      variant: {
        default: "bg-background border-border text-foreground",
        info: "bg-secondary/30 border-primary/20 text-foreground [&_svg]:text-primary",
        warning: "bg-amber-50 border-amber-200 text-amber-900 [&_svg]:text-amber-600",
        destructive:
          "bg-destructive/10 border-destructive/20 text-foreground [&_svg]:text-destructive [&>[data-alert-title]]:text-destructive",
        success:
          "bg-green-50 border-green-200 text-green-900 [&_svg]:text-green-600 [&>[data-alert-title]]:text-green-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode
  action?: React.ReactNode
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, icon, action, children, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
      {icon && <div className="flex shrink-0 items-start pt-0.5">{icon}</div>}
      <div className="flex flex-1 items-start gap-3">
        <div className="flex flex-1 flex-col gap-1">{children}</div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  ),
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      data-alert-title
      className={cn("text-foreground text-sm leading-5 font-medium", className)}
      {...props}
    />
  ),
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-muted-foreground text-sm leading-5 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5",
      className,
    )}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
