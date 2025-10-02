import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, type DayPickerProps } from "react-day-picker"
import { cn } from "~/core/lib/utils"
import { buttonVariants } from "../button"

export type CalendarProps = DayPickerProps

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1",
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1",
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
          "[&:has([aria-selected].outside)]:bg-accent/50",
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground",
        ),
        range_start: "day-range-start",
        range_end: "day-range-end",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground",
        outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight
          return <Icon className="h-4 w-4" />
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

// Calendar with preset ranges
interface CalendarWithPresetsProps extends CalendarProps {
  presets?: Array<{
    label: string
    dateRange: { from: Date; to?: Date }
  }>
  onPresetSelect?: (preset: { from: Date; to?: Date }) => void
}

function CalendarWithPresets({ presets, onPresetSelect, ...props }: CalendarWithPresetsProps) {
  return (
    <div className="flex gap-2">
      {presets && presets.length > 0 && (
        <div className="flex flex-col gap-1 border-r pr-2">
          <div className="text-muted-foreground px-2 pb-2 text-xs font-medium">Quick Select</div>
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => onPresetSelect?.(preset.dateRange)}
              className={cn(
                "hover:bg-accent hover:text-accent-foreground rounded-md px-2 py-1.5 text-left text-sm transition-colors",
                "focus:bg-accent focus:text-accent-foreground focus:outline-none",
              )}
            >
              {preset.label}
            </button>
          ))}
        </div>
      )}
      <Calendar {...props} />
    </div>
  )
}
CalendarWithPresets.displayName = "CalendarWithPresets"

// Mini calendar variant
interface MiniCalendarProps extends CalendarProps {
  className?: string
}

function MiniCalendar({ className, ...props }: MiniCalendarProps) {
  return (
    <Calendar
      className={cn("p-0", className)}
      classNames={{
        month_caption: "flex justify-center pt-1 relative items-center text-xs",
        button_previous: cn(
          "h-5 w-5 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-0",
        ),
        button_next: cn("h-5 w-5 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-0"),
        weekday: "text-muted-foreground rounded-md w-7 font-normal text-[0.7rem]",
        day_button: cn("h-7 w-7 p-0 font-normal text-xs aria-selected:opacity-100"),
      }}
      {...props}
    />
  )
}
MiniCalendar.displayName = "MiniCalendar"

// Year view calendar
interface YearCalendarProps {
  year?: number
  selectedDates?: Date[]
  onMonthClick?: (month: number) => void
  className?: string
}

function YearCalendar({
  year = new Date().getFullYear(),
  selectedDates = [],
  onMonthClick,
  className,
}: YearCalendarProps) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const isDateInMonth = (month: number) => {
    return selectedDates.some((date) => date.getFullYear() === year && date.getMonth() === month)
  }

  return (
    <div className={cn("p-3", className)}>
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold">{year}</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => onMonthClick?.(index)}
            className={cn(
              "rounded-lg border p-3 text-sm font-medium transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              "focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none",
              isDateInMonth(index) && "bg-primary text-primary-foreground hover:bg-primary/90",
            )}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  )
}
YearCalendar.displayName = "YearCalendar"

export { Calendar, CalendarWithPresets, MiniCalendar, YearCalendar }
