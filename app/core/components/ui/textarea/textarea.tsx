import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-green-500 focus-visible:ring-green-500",
      },
      size: {
        default: "min-h-[80px]",
        sm: "min-h-[60px] text-xs",
        lg: "min-h-[120px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  showCount?: boolean
  maxCount?: number
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, showCount, maxCount, value, onChange, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value || "")
    const currentLength = String(value ?? internalValue).length

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInternalValue(e.target.value)
      if (onChange) {
        onChange(e)
      }
    }

    if (showCount) {
      return (
        <div className="relative w-full">
          <textarea
            className={cn(textareaVariants({ variant, size }), className)}
            ref={ref}
            value={value ?? internalValue}
            onChange={handleChange}
            {...props}
          />
          <div className="text-muted-foreground absolute right-2 bottom-2 text-xs">
            {currentLength}
            {maxCount ? `/${maxCount}` : ""}
          </div>
        </div>
      )
    }

    return (
      <textarea
        className={cn(textareaVariants({ variant, size }), className)}
        ref={ref}
        value={value}
        onChange={onChange}
        {...props}
      />
    )
  },
)
Textarea.displayName = "Textarea"

// Textarea with Label component
interface TextareaWithLabelProps extends TextareaProps {
  label: string
  error?: string
  hint?: string
  required?: boolean
}

const TextareaWithLabel = React.forwardRef<HTMLTextAreaElement, TextareaWithLabelProps>(
  ({ label, error, hint, required, id, className, ...props }, ref) => {
    const generatedId = React.useId()
    const textareaId = id || generatedId

    return (
      <div className={cn("space-y-2", className)}>
        <label
          htmlFor={textareaId}
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
        <Textarea ref={ref} id={textareaId} variant={error ? "error" : props.variant} {...props} />
        {hint && !error && <p className="text-muted-foreground text-sm">{hint}</p>}
        {error && <p className="text-destructive text-sm">{error}</p>}
      </div>
    )
  },
)
TextareaWithLabel.displayName = "TextareaWithLabel"

// Auto-resize Textarea component
const AutoResizeTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, value, onChange, ...props }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)

    React.useImperativeHandle(ref, () => textareaRef.current!)

    const adjustHeight = React.useCallback(() => {
      const textarea = textareaRef.current
      if (textarea) {
        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight}px`
      }
    }, [])

    React.useEffect(() => {
      adjustHeight()
    }, [value, adjustHeight])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      adjustHeight()
      if (onChange) {
        onChange(e)
      }
    }

    return (
      <textarea
        ref={textareaRef}
        className={cn(
          textareaVariants({ variant, size }),
          "resize-none overflow-hidden",
          className,
        )}
        value={value}
        onChange={handleChange}
        {...props}
      />
    )
  },
)
AutoResizeTextarea.displayName = "AutoResizeTextarea"

// Expandable Textarea component
const ExpandableTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, ...props }, ref) => {
    const [isExpanded, setIsExpanded] = React.useState(false)

    return (
      <div className="relative w-full">
        <textarea
          ref={ref}
          className={cn(
            textareaVariants({ variant, size }),
            !isExpanded && "max-h-[120px]",
            className,
          )}
          onFocus={() => setIsExpanded(true)}
          onBlur={(e) => {
            if (!e.target.value) {
              setIsExpanded(false)
            }
          }}
          {...props}
        />
        {!isExpanded && (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="text-muted-foreground hover:text-foreground absolute right-2 bottom-2 text-xs"
          >
            Expand
          </button>
        )}
      </div>
    )
  },
)
ExpandableTextarea.displayName = "ExpandableTextarea"

export { Textarea, TextareaWithLabel, AutoResizeTextarea, ExpandableTextarea, textareaVariants }
