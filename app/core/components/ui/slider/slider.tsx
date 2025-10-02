import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/core/lib/utils"

const sliderVariants = cva(
  "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50",
  {
    variants: {
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

const sliderTrackVariants = cva("relative grow overflow-hidden rounded-full bg-secondary", {
  variants: {
    size: {
      sm: "h-1 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1",
      md: "h-1.5 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
      lg: "h-2 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const sliderRangeVariants = cva(
  "absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
  {
    variants: {
      variant: {
        default: "bg-primary",
        secondary: "bg-secondary-foreground",
        destructive: "bg-destructive",
        success: "bg-green-500",
        warning: "bg-yellow-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

const sliderThumbVariants = cva(
  "block shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "size-3 border",
        md: "size-4 border-2",
        lg: "size-5 border-2",
      },
      variant: {
        default: "border-primary bg-background ring-ring/50",
        secondary: "border-secondary-foreground bg-background ring-secondary/50",
        destructive: "border-destructive bg-background ring-destructive/50",
        success: "border-green-500 bg-background ring-green-500/50",
        warning: "border-yellow-500 bg-background ring-yellow-500/50",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
)

export interface SliderProps
  extends React.ComponentProps<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {
  variant?: "default" | "secondary" | "destructive" | "success" | "warning"
  showValue?: boolean
  showLabels?: boolean
  labels?: { min?: string; max?: string }
  formatValue?: (value: number) => string
  showTicks?: boolean
  tickCount?: number
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    {
      className,
      defaultValue,
      value,
      min = 0,
      max = 100,
      size = "md",
      variant = "default",
      showValue = false,
      showLabels = false,
      labels,
      formatValue = (v) => v.toString(),
      showTicks = false,
      tickCount = 5,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(value || defaultValue || [min])

    const handleValueChange = (newValue: number[]) => {
      setInternalValue(newValue)
      onValueChange?.(newValue)
    }

    const currentValue = value || internalValue

    return (
      <div className="w-full">
        {showValue && (
          <div className="mb-2 flex justify-between">
            {currentValue.map((v, i) => (
              <span key={i} className="text-sm font-medium">
                {formatValue(v)}
              </span>
            ))}
          </div>
        )}
        <div className="relative">
          <SliderPrimitive.Root
            ref={ref}
            defaultValue={defaultValue}
            value={value}
            min={min}
            max={max}
            onValueChange={handleValueChange}
            className={cn(
              sliderVariants({ size }),
              "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
              className,
            )}
            {...props}
          >
            <SliderPrimitive.Track className={cn(sliderTrackVariants({ size }))}>
              <SliderPrimitive.Range className={cn(sliderRangeVariants({ variant }))} />
            </SliderPrimitive.Track>
            {currentValue.map((_, index) => (
              <SliderPrimitive.Thumb
                key={index}
                className={cn(sliderThumbVariants({ size, variant }))}
              />
            ))}
          </SliderPrimitive.Root>
          {showTicks && (
            <div className="absolute -bottom-1 flex w-full justify-between px-3">
              {Array.from({ length: tickCount }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "bg-border h-1 w-px",
                    size === "sm" && "h-0.5",
                    size === "lg" && "h-1.5",
                  )}
                />
              ))}
            </div>
          )}
        </div>
        {showLabels && (
          <div className="mt-1 flex justify-between">
            <span className="text-muted-foreground text-xs">{labels?.min || min}</span>
            <span className="text-muted-foreground text-xs">{labels?.max || max}</span>
          </div>
        )}
      </div>
    )
  },
)
Slider.displayName = SliderPrimitive.Root.displayName

// Range slider with two handles
interface RangeSliderProps extends SliderProps {
  minDistance?: number
}

const RangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  RangeSliderProps
>(({ minDistance = 0, defaultValue, ...props }, ref) => {
  const min = props.min ?? 0
  const max = props.max ?? 100
  const range = max - min
  const defaultRange = defaultValue || [min + range * 0.25, min + range * 0.75]

  return (
    <Slider ref={ref} defaultValue={defaultRange} minStepsBetweenThumbs={minDistance} {...props} />
  )
})
RangeSlider.displayName = "RangeSlider"

// Slider with input field
interface SliderWithInputProps extends SliderProps {
  inputWidth?: string
}

const SliderWithInput = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderWithInputProps
>(({ inputWidth = "4rem", value, defaultValue, onValueChange, ...props }, ref) => {
  const [internalValue, setInternalValue] = React.useState(
    value || defaultValue || [props.min ?? 0],
  )

  const currentValue = value || internalValue

  const handleSliderChange = (newValue: number[]) => {
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [Number(e.target.value)]
    if (!isNaN(newValue[0])) {
      setInternalValue(newValue)
      onValueChange?.(newValue)
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <Slider
        ref={ref}
        value={currentValue}
        onValueChange={handleSliderChange}
        className="flex-1"
        {...props}
      />
      <input
        type="number"
        value={currentValue[0]}
        onChange={handleInputChange}
        min={props.min}
        max={props.max}
        className={cn(
          "border-input bg-background rounded-md border px-2 py-1 text-sm",
          "focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none",
        )}
        style={{ width: inputWidth }}
      />
    </div>
  )
})
SliderWithInput.displayName = "SliderWithInput"

// Vertical slider
const VerticalSlider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (props, ref) => {
    return (
      <Slider ref={ref} orientation="vertical" className="h-full min-h-[200px] w-auto" {...props} />
    )
  },
)
VerticalSlider.displayName = "VerticalSlider"

// Stepped slider with marks
interface SteppedSliderProps extends SliderProps {
  steps?: number[]
  showStepLabels?: boolean
}

const SteppedSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SteppedSliderProps
>(({ steps, showStepLabels = false, ...props }, ref) => {
  const min = props.min ?? 0
  const max = props.max ?? 100
  const defaultSteps = steps || [min, 25, 50, 75, max]

  return (
    <div className="w-full">
      <Slider ref={ref} step={defaultSteps[1] - defaultSteps[0]} {...props} />
      {showStepLabels && (
        <div className="mt-2 flex justify-between">
          {defaultSteps.map((step) => (
            <span key={step} className="text-muted-foreground text-xs">
              {step}
            </span>
          ))}
        </div>
      )}
    </div>
  )
})
SteppedSlider.displayName = "SteppedSlider"

export {
  Slider,
  RangeSlider,
  SliderWithInput,
  VerticalSlider,
  SteppedSlider,
  sliderVariants,
  sliderTrackVariants,
  sliderRangeVariants,
  sliderThumbVariants,
}
