import * as React from "react"
import { toast as sonnerToast, Toaster as SonnerToaster, type ExternalToast } from "sonner"
import { cva } from "class-variance-authority"
import { cn } from "~/core/lib/utils"
import { X, CheckCircle, XCircle, Info, Loader2, AlertTriangle } from "lucide-react"

// Toast component configuration
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        success:
          "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100",
        error:
          "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100",
        warning:
          "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100",
        info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100",
        loading: "border bg-background text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

// Enhanced Toaster component
export interface ToasterProps {
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
  expand?: boolean
  richColors?: boolean
  closeButton?: boolean
  duration?: number
  theme?: "light" | "dark" | "system"
  className?: string
}

export function Toaster({
  position = "bottom-right",
  expand = false,
  richColors = true,
  closeButton = true,
  duration = 4000,
  theme = "system",
  className,
  ...props
}: ToasterProps) {
  return (
    <SonnerToaster
      position={position}
      expand={expand}
      richColors={richColors}
      closeButton={closeButton}
      duration={duration}
      theme={theme}
      className={cn("toaster group", className)}
      toastOptions={{
        classNames: {
          toast: cn(
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          ),
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

// Toast function wrappers with icons
interface ToastOptions extends ExternalToast {
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  cancel?: {
    label: string
    onClick?: () => void
  }
}

const toast = {
  default: (message: string, options?: ToastOptions) => {
    return sonnerToast(message, options)
  },

  success: (message: string, options?: ToastOptions) => {
    return sonnerToast.success(message, {
      ...options,
      icon: <CheckCircle className="h-4 w-4 text-green-600" />,
    })
  },

  error: (message: string, options?: ToastOptions) => {
    return sonnerToast.error(message, {
      ...options,
      icon: <XCircle className="h-4 w-4 text-red-600" />,
    })
  },

  warning: (message: string, options?: ToastOptions) => {
    return sonnerToast.warning(message, {
      ...options,
      icon: <AlertTriangle className="h-4 w-4 text-yellow-600" />,
    })
  },

  info: (message: string, options?: ToastOptions) => {
    return sonnerToast.info(message, {
      ...options,
      icon: <Info className="h-4 w-4 text-blue-600" />,
    })
  },

  loading: (message: string, options?: ToastOptions) => {
    return sonnerToast.loading(message, {
      ...options,
      icon: <Loader2 className="h-4 w-4 animate-spin" />,
    })
  },

  promise: <T,>(
    promise: Promise<T>,
    messages: {
      loading: string
      success: string | ((data: T) => string)
      error: string | ((error: any) => string)
    },
    options?: ToastOptions,
  ) => {
    return sonnerToast.promise(promise, messages, options)
  },

  custom: (component: React.ReactNode, options?: ExternalToast) => {
    return sonnerToast.custom(component, options)
  },

  dismiss: (id?: string | number) => {
    return sonnerToast.dismiss(id)
  },
}

// Custom toast components
interface CustomToastProps {
  title: string
  description?: string
  icon?: React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
  onClose?: () => void
}

export function CustomToast({ title, description, icon, action, onClose }: CustomToastProps) {
  return (
    <div className="flex w-full items-start gap-3">
      {icon && <div className="mt-0.5 flex-shrink-0">{icon}</div>}
      <div className="flex-1 space-y-1">
        <p className="text-sm font-semibold">{title}</p>
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
        {action && (
          <button
            onClick={action.onClick}
            className="text-primary text-sm font-medium hover:underline"
          >
            {action.label}
          </button>
        )}
      </div>
      {onClose && (
        <button onClick={onClose} className="hover:bg-secondary flex-shrink-0 rounded-md p-1">
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

// Progress toast component
interface ProgressToastProps {
  title: string
  progress: number
  description?: string
}

export function ProgressToast({ title, progress, description }: ProgressToastProps) {
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between">
        <p className="text-sm font-semibold">{title}</p>
        <span className="text-muted-foreground text-sm">{progress}%</span>
      </div>
      {description && <p className="text-muted-foreground text-sm">{description}</p>}
      <div className="bg-secondary h-2 w-full rounded-full">
        <div
          className="bg-primary h-full rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

// Action toast component
interface ActionToastProps {
  title: string
  description?: string
  primaryAction: {
    label: string
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
}

export function ActionToast({
  title,
  description,
  primaryAction,
  secondaryAction,
}: ActionToastProps) {
  return (
    <div className="w-full space-y-3">
      <div className="space-y-1">
        <p className="text-sm font-semibold">{title}</p>
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>
      <div className="flex gap-2">
        <button
          onClick={primaryAction.onClick}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 py-1.5 text-xs font-medium"
        >
          {primaryAction.label}
        </button>
        {secondaryAction && (
          <button
            onClick={secondaryAction.onClick}
            className="bg-secondary hover:bg-secondary/80 rounded-md px-3 py-1.5 text-xs font-medium"
          >
            {secondaryAction.label}
          </button>
        )}
      </div>
    </div>
  )
}

// List toast component
interface ListToastProps {
  title: string
  items: string[]
  icon?: React.ReactNode
}

export function ListToast({ title, items, icon }: ListToastProps) {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <ul className="space-y-1 pl-6">
        {items.map((item, index) => (
          <li key={index} className="text-muted-foreground flex items-start gap-2 text-sm">
            <span className="bg-muted-foreground mt-1 h-1 w-1 rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export { toast, toastVariants }
