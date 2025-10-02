import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/core/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md border bg-background text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-green-500 focus-visible:ring-green-500",
      },
      size: {
        default: "h-9 px-3 py-1",
        sm: "h-8 px-2.5 text-xs",
        lg: "h-10 px-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, startIcon, endIcon, ...props }, ref) => {
    if (startIcon || endIcon) {
      return (
        <div className="relative w-full">
          {startIcon && (
            <div className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2">
              {startIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ variant, size }),
              startIcon && "pl-9",
              endIcon && "pr-9",
              className,
            )}
            ref={ref}
            {...props}
          />
          {endIcon && (
            <div className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2">
              {endIcon}
            </div>
          )}
        </div>
      )
    }

    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

// Input with Label component
interface InputWithLabelProps extends InputProps {
  label: string
  error?: string
  hint?: string
  required?: boolean
}

const InputWithLabel = React.forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ label, error, hint, required, id, className, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id || generatedId

    return (
      <div className={cn("space-y-2", className)}>
        <label
          htmlFor={inputId}
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
        <Input ref={ref} id={inputId} variant={error ? "error" : props.variant} {...props} />
        {hint && !error && <p className="text-muted-foreground text-sm">{hint}</p>}
        {error && <p className="text-destructive text-sm">{error}</p>}
      </div>
    )
  },
)
InputWithLabel.displayName = "InputWithLabel"

// Search Input component
interface SearchInputProps extends Omit<InputProps, "type"> {
  onClear?: () => void
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, value, onClear, ...props }, ref) => {
    const handleClear = () => {
      if (onClear) {
        onClear()
      }
    }

    return (
      <div className="relative w-full">
        <svg
          className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <Input
          ref={ref}
          type="search"
          value={value}
          className={cn("pl-9", value && "pr-9", className)}
          {...props}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    )
  },
)
SearchInput.displayName = "SearchInput"

// Password Input component with show/hide toggle
const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
      <div className="relative w-full">
        <Input
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={cn("pr-9", className)}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
        >
          {showPassword ? (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </button>
      </div>
    )
  },
)
PasswordInput.displayName = "PasswordInput"

export { Input, InputWithLabel, SearchInput, PasswordInput, inputVariants }
