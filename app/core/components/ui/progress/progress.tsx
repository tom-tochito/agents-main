import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/core/lib/utils"

const progressVariants = cva("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", {
  variants: {
    variant: {
      default: "bg-primary/20",
      secondary: "bg-secondary/20",
      destructive: "bg-destructive/20",
      success: "bg-green-500/20",
      warning: "bg-yellow-500/20",
    },
    size: {
      sm: "h-1",
      default: "h-2",
      lg: "h-3",
      xl: "h-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const progressIndicatorVariants = cva("h-full w-full flex-1 transition-all", {
  variants: {
    variant: {
      default: "bg-primary",
      secondary: "bg-secondary",
      destructive: "bg-destructive",
      success: "bg-green-500",
      warning: "bg-yellow-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  indicatorClassName?: string
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, variant, size, indicatorClassName, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(progressVariants({ variant, size }), className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(progressIndicatorVariants({ variant }), indicatorClassName)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  ),
)
Progress.displayName = ProgressPrimitive.Root.displayName

// Progress with Label
interface ProgressWithLabelProps extends ProgressProps {
  label?: string
  showValue?: boolean
}

const ProgressWithLabel = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressWithLabelProps
>(({ label, showValue = true, value = 0, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-sm leading-none font-medium">{label}</span>}
          {showValue && <span className="text-muted-foreground text-sm">{value}%</span>}
        </div>
      )}
      <Progress ref={ref} value={value} {...props} />
    </div>
  )
})
ProgressWithLabel.displayName = "ProgressWithLabel"

// Circular Progress
interface CircularProgressProps {
  value?: number
  size?: number
  strokeWidth?: number
  variant?: "default" | "secondary" | "destructive" | "success" | "warning"
  showValue?: boolean
  className?: string
}

const CircularProgress = React.forwardRef<SVGSVGElement, CircularProgressProps>(
  (
    { value = 0, size = 120, strokeWidth = 8, variant = "default", showValue = true, className },
    ref,
  ) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (value / 100) * circumference

    const strokeColors = {
      default: "stroke-primary",
      secondary: "stroke-secondary",
      destructive: "stroke-destructive",
      success: "stroke-green-500",
      warning: "stroke-yellow-500",
    }

    const trackColors = {
      default: "stroke-primary/20",
      secondary: "stroke-secondary/20",
      destructive: "stroke-destructive/20",
      success: "stroke-green-500/20",
      warning: "stroke-yellow-500/20",
    }

    return (
      <div className={cn("relative inline-flex items-center justify-center", className)}>
        <svg ref={ref} width={size} height={size} className="-rotate-90 transform">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className={trackColors[variant]}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className={cn(strokeColors[variant], "transition-all duration-300 ease-in-out")}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        {showValue && (
          <div className="absolute flex items-center justify-center">
            <span className="text-lg font-semibold">{value}%</span>
          </div>
        )}
      </div>
    )
  },
)
CircularProgress.displayName = "CircularProgress"

// Stepped Progress
interface SteppedProgressProps {
  currentStep: number
  totalSteps: number
  variant?: "default" | "secondary" | "destructive" | "success" | "warning"
  size?: "sm" | "default" | "lg"
  showLabels?: boolean
  labels?: string[]
  className?: string
}

const SteppedProgress = React.forwardRef<HTMLDivElement, SteppedProgressProps>(
  (
    {
      currentStep,
      totalSteps,
      variant = "default",
      size = "default",
      showLabels = false,
      labels = [],
      className,
    },
    ref,
  ) => {
    const stepSizes = {
      sm: "h-1 w-1",
      default: "h-2 w-2",
      lg: "h-3 w-3",
    }

    const stepColors = {
      default: "bg-primary",
      secondary: "bg-secondary",
      destructive: "bg-destructive",
      success: "bg-green-500",
      warning: "bg-yellow-500",
    }

    const inactiveColors = {
      default: "bg-primary/20",
      secondary: "bg-secondary/20",
      destructive: "bg-destructive/20",
      success: "bg-green-500/20",
      warning: "bg-yellow-500/20",
    }

    return (
      <div ref={ref} className={cn("space-y-2", className)}>
        <div className="flex items-center justify-between">
          {Array.from({ length: totalSteps }, (_, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <div
                  className={cn(
                    "h-0.5 flex-1",
                    i < currentStep ? stepColors[variant] : inactiveColors[variant],
                  )}
                />
              )}
              <div
                className={cn(
                  "rounded-full",
                  stepSizes[size],
                  i < currentStep ? stepColors[variant] : inactiveColors[variant],
                )}
              />
            </React.Fragment>
          ))}
        </div>
        {showLabels && labels.length > 0 && (
          <div className="flex justify-between">
            {labels.map((label, i) => (
              <span
                key={i}
                className={cn(
                  "text-xs",
                  i < currentStep ? "text-foreground font-medium" : "text-muted-foreground",
                )}
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    )
  },
)
SteppedProgress.displayName = "SteppedProgress"

// Animated Progress (Indeterminate)
interface AnimatedProgressProps extends Omit<ProgressProps, "value"> {
  isIndeterminate?: boolean
}

const AnimatedProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  AnimatedProgressProps
>(({ className, variant, size, isIndeterminate = true, ...props }, ref) => {
  if (isIndeterminate) {
    return (
      <div
        ref={ref as any}
        className={cn(progressVariants({ variant, size }), className)}
        {...props}
      >
        <div
          className={cn(progressIndicatorVariants({ variant }), "animate-progress origin-left")}
        />
      </div>
    )
  }

  return <Progress ref={ref} className={className} variant={variant} size={size} {...props} />
})
AnimatedProgress.displayName = "AnimatedProgress"

// Multi-segment Progress
interface Segment {
  value: number
  className?: string
  label?: string
}

interface MultiSegmentProgressProps {
  segments: Segment[]
  max?: number
  size?: "sm" | "default" | "lg" | "xl"
  showLabels?: boolean
  className?: string
}

const MultiSegmentProgress = React.forwardRef<HTMLDivElement, MultiSegmentProgressProps>(
  ({ segments, max = 100, size = "default", showLabels = false, className }, ref) => {
    const total = segments.reduce((acc, segment) => acc + segment.value, 0)
    const percentage = Math.min((total / max) * 100, 100)

    const sizeClasses = {
      sm: "h-1",
      default: "h-2",
      lg: "h-3",
      xl: "h-4",
    }

    return (
      <div ref={ref} className={cn("space-y-2", className)}>
        {showLabels && (
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Progress</span>
            <span className="text-muted-foreground">{Math.round(percentage)}%</span>
          </div>
        )}
        <div
          className={cn("bg-muted relative w-full overflow-hidden rounded-full", sizeClasses[size])}
        >
          <div className="flex h-full">
            {segments.map((segment, index) => (
              <div
                key={index}
                className={cn("h-full transition-all", segment.className || "bg-primary")}
                style={{ width: `${(segment.value / max) * 100}%` }}
                title={segment.label}
              />
            ))}
          </div>
        </div>
        {showLabels && segments.some((s) => s.label) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {segments.map(
              (segment, index) =>
                segment.label && (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className={cn("h-2 w-2 rounded-full", segment.className || "bg-primary")}
                    />
                    <span className="text-muted-foreground text-xs">
                      {segment.label}: {segment.value}
                    </span>
                  </div>
                ),
            )}
          </div>
        )}
      </div>
    )
  },
)
MultiSegmentProgress.displayName = "MultiSegmentProgress"

export {
  Progress,
  ProgressWithLabel,
  CircularProgress,
  SteppedProgress,
  AnimatedProgress,
  MultiSegmentProgress,
  progressVariants,
  progressIndicatorVariants,
}
