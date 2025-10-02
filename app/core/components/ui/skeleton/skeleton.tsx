import { cn } from "~/core/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const skeletonVariants = cva("animate-pulse rounded-md bg-muted", {
  variants: {
    variant: {
      default: "bg-muted",
      shimmer:
        "bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] animate-shimmer",
      pulse: "animate-pulse",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return <div className={cn(skeletonVariants({ variant }), className)} {...props} />
}

// Text skeleton with multiple lines
interface TextSkeletonProps extends SkeletonProps {
  lines?: number
  lastLineWidth?: string
}

function TextSkeleton({
  lines = 3,
  lastLineWidth = "75%",
  className,
  ...props
}: TextSkeletonProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-4"
          style={i === lines - 1 ? { width: lastLineWidth } : undefined}
          {...props}
        />
      ))}
    </div>
  )
}

// Avatar skeleton
interface AvatarSkeletonProps extends SkeletonProps {
  size?: "sm" | "md" | "lg" | "xl"
}

function AvatarSkeleton({ size = "md", className, ...props }: AvatarSkeletonProps) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  }

  return <Skeleton className={cn(sizes[size], "rounded-full", className)} {...props} />
}

// Card skeleton
interface CardSkeletonProps extends SkeletonProps {
  showImage?: boolean
  showAvatar?: boolean
  showActions?: boolean
}

function CardSkeleton({
  showImage = true,
  showAvatar = false,
  showActions = false,
  className,
  ...props
}: CardSkeletonProps) {
  return (
    <div className={cn("rounded-lg border p-4", className)}>
      {showImage && <Skeleton className="mb-4 h-48 w-full rounded-md" {...props} />}
      <div className="space-y-3">
        {showAvatar && (
          <div className="flex items-center space-x-3">
            <AvatarSkeleton size="md" {...props} />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-32" {...props} />
              <Skeleton className="h-3 w-24" {...props} />
            </div>
          </div>
        )}
        <Skeleton className="h-5 w-3/4" {...props} />
        <TextSkeleton lines={2} {...props} />
        {showActions && (
          <div className="flex space-x-2 pt-2">
            <Skeleton className="h-8 w-20" {...props} />
            <Skeleton className="h-8 w-20" {...props} />
          </div>
        )}
      </div>
    </div>
  )
}

// Table skeleton
interface TableSkeletonProps extends SkeletonProps {
  rows?: number
  columns?: number
  showHeader?: boolean
}

function TableSkeleton({
  rows = 5,
  columns = 4,
  showHeader = true,
  className,
  ...props
}: TableSkeletonProps) {
  return (
    <div className={cn("w-full", className)}>
      {showHeader && (
        <div className="flex space-x-4 border-b p-4">
          {Array.from({ length: columns }).map((_, i) => (
            <Skeleton key={i} className="h-4 flex-1" {...props} />
          ))}
        </div>
      )}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex space-x-4 border-b p-4">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={colIndex}
              className={cn("h-4 flex-1", colIndex === 0 && "max-w-[200px]")}
              {...props}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

// List skeleton
interface ListSkeletonProps extends SkeletonProps {
  items?: number
  showIcon?: boolean
  showDescription?: boolean
}

function ListSkeleton({
  items = 3,
  showIcon = false,
  showDescription = false,
  className,
  ...props
}: ListSkeletonProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-start space-x-3">
          {showIcon && <Skeleton className="h-10 w-10 flex-shrink-0 rounded-md" {...props} />}
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" {...props} />
            {showDescription && <Skeleton className="h-3 w-1/2" {...props} />}
          </div>
        </div>
      ))}
    </div>
  )
}

// Form skeleton
interface FormSkeletonProps extends SkeletonProps {
  fields?: number
  showLabels?: boolean
}

function FormSkeleton({ fields = 3, showLabels = true, className, ...props }: FormSkeletonProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {Array.from({ length: fields }).map((_, i) => (
        <div key={i} className="space-y-2">
          {showLabels && <Skeleton className="h-4 w-20" {...props} />}
          <Skeleton className="h-10 w-full" {...props} />
        </div>
      ))}
      <div className="flex space-x-2">
        <Skeleton className="h-10 w-24" {...props} />
        <Skeleton className="h-10 w-24" {...props} />
      </div>
    </div>
  )
}

// Button skeleton
interface ButtonSkeletonProps extends SkeletonProps {
  size?: "sm" | "md" | "lg"
}

function ButtonSkeleton({ size = "md", className, ...props }: ButtonSkeletonProps) {
  const sizes = {
    sm: "h-8 w-20",
    md: "h-10 w-24",
    lg: "h-12 w-32",
  }

  return <Skeleton className={cn(sizes[size], "rounded-md", className)} {...props} />
}

// Badge skeleton
function BadgeSkeleton({ className, ...props }: SkeletonProps) {
  return <Skeleton className={cn("h-5 w-16 rounded-full", className)} {...props} />
}

// Chart skeleton
interface ChartSkeletonProps extends SkeletonProps {
  type?: "bar" | "line" | "pie"
}

function ChartSkeleton({ type = "bar", className, ...props }: ChartSkeletonProps) {
  if (type === "pie") {
    return (
      <div className={cn("flex items-center justify-center p-8", className)}>
        <Skeleton className="h-64 w-64 rounded-full" {...props} />
      </div>
    )
  }

  return (
    <div className={cn("p-4", className)}>
      <div className="flex h-64 items-end space-x-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton
            key={i}
            className="flex-1"
            style={{ height: `${Math.random() * 100}%` }}
            {...props}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} className="h-3 w-8" {...props} />
        ))}
      </div>
    </div>
  )
}

// Navigation skeleton
interface NavigationSkeletonProps extends SkeletonProps {
  items?: number
  orientation?: "horizontal" | "vertical"
}

function NavigationSkeleton({
  items = 5,
  orientation = "horizontal",
  className,
  ...props
}: NavigationSkeletonProps) {
  return (
    <div
      className={cn(
        "flex",
        orientation === "horizontal" ? "space-x-4" : "flex-col space-y-2",
        className,
      )}
    >
      {Array.from({ length: items }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-10", orientation === "horizontal" ? "w-24" : "w-full")}
          {...props}
        />
      ))}
    </div>
  )
}

// Media skeleton (for images/videos)
interface MediaSkeletonProps extends SkeletonProps {
  aspectRatio?: "square" | "video" | "portrait"
}

function MediaSkeleton({ aspectRatio = "video", className, ...props }: MediaSkeletonProps) {
  const ratios = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  }

  return <Skeleton className={cn("w-full", ratios[aspectRatio], className)} {...props} />
}

// Feed skeleton (social media style)
interface FeedSkeletonProps extends SkeletonProps {
  posts?: number
}

function FeedSkeleton({ posts = 3, className, ...props }: FeedSkeletonProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {Array.from({ length: posts }).map((_, i) => (
        <div key={i} className="space-y-3">
          <div className="flex items-center space-x-3">
            <AvatarSkeleton size="md" {...props} />
            <div className="flex-1 space-y-1">
              <Skeleton className="h-4 w-32" {...props} />
              <Skeleton className="h-3 w-24" {...props} />
            </div>
          </div>
          <TextSkeleton lines={2} {...props} />
          <MediaSkeleton aspectRatio="video" {...props} />
          <div className="flex space-x-4">
            <Skeleton className="h-8 w-16" {...props} />
            <Skeleton className="h-8 w-16" {...props} />
            <Skeleton className="h-8 w-16" {...props} />
          </div>
        </div>
      ))}
    </div>
  )
}

export {
  Skeleton,
  TextSkeleton,
  AvatarSkeleton,
  CardSkeleton,
  TableSkeleton,
  ListSkeleton,
  FormSkeleton,
  ButtonSkeleton,
  BadgeSkeleton,
  ChartSkeleton,
  NavigationSkeleton,
  MediaSkeleton,
  FeedSkeleton,
  skeletonVariants,
}
