import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { cn } from "~/core/lib/utils"
import { Button } from "../button"
import { Calendar } from "../calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../popover"

interface DatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  align?: "start" | "center" | "end"
  formatStr?: string
}

function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  disabled = false,
  className,
  align = "start",
  formatStr = "PPP",
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className,
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, formatStr) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align={align}>
        <Calendar mode="single" selected={date} onSelect={onDateChange} initialFocus />
      </PopoverContent>
    </Popover>
  )
}

// Date Range Picker
interface DateRangePickerProps {
  dateRange?: DateRange
  onDateRangeChange?: (range: DateRange | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  align?: "start" | "center" | "end"
  formatStr?: string
}

function DateRangePicker({
  dateRange,
  onDateRangeChange,
  placeholder = "Pick a date range",
  disabled = false,
  className,
  align = "start",
  formatStr = "LLL dd, y",
}: DateRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[300px] justify-start text-left font-normal",
            !dateRange && "text-muted-foreground",
            className,
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {dateRange?.from ? (
            dateRange.to ? (
              <>
                {format(dateRange.from, formatStr)} - {format(dateRange.to, formatStr)}
              </>
            ) : (
              format(dateRange.from, formatStr)
            )
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align={align}>
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={onDateRangeChange}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  )
}

// Date Picker with Presets
interface DatePickerWithPresetsProps extends DatePickerProps {
  presets?: Array<{
    label: string
    date: Date
  }>
}

function DatePickerWithPresets({
  date,
  onDateChange,
  placeholder = "Pick a date",
  disabled = false,
  className,
  align = "start",
  formatStr = "PPP",
  presets = [],
}: DatePickerWithPresetsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className,
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, formatStr) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 p-2" align={align}>
        {presets.length > 0 && (
          <>
            <div className="flex flex-col space-y-1">
              {presets.map((preset) => (
                <Button
                  key={preset.label}
                  variant="ghost"
                  size="sm"
                  onClick={() => onDateChange?.(preset.date)}
                  className="justify-start"
                >
                  {preset.label}
                </Button>
              ))}
            </div>
            <div className="bg-border mx-2 my-1 h-px" />
          </>
        )}
        <Calendar mode="single" selected={date} onSelect={onDateChange} initialFocus />
      </PopoverContent>
    </Popover>
  )
}

// Date Range Picker with Presets
interface DateRangePickerWithPresetsProps extends DateRangePickerProps {
  presets?: Array<{
    label: string
    dateRange: DateRange
  }>
}

function DateRangePickerWithPresets({
  dateRange,
  onDateRangeChange,
  placeholder = "Pick a date range",
  disabled = false,
  className,
  align = "start",
  formatStr = "LLL dd, y",
  presets = [],
}: DateRangePickerWithPresetsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[300px] justify-start text-left font-normal",
            !dateRange && "text-muted-foreground",
            className,
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {dateRange?.from ? (
            dateRange.to ? (
              <>
                {format(dateRange.from, formatStr)} - {format(dateRange.to, formatStr)}
              </>
            ) : (
              format(dateRange.from, formatStr)
            )
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto p-2" align={align}>
        <div className="flex flex-col space-y-2">
          {presets.length > 0 && (
            <div className="flex flex-col space-y-1">
              {presets.map((preset) => (
                <Button
                  key={preset.label}
                  variant="ghost"
                  size="sm"
                  onClick={() => onDateRangeChange?.(preset.dateRange)}
                  className="justify-start"
                >
                  {preset.label}
                </Button>
              ))}
            </div>
          )}
        </div>
        {presets.length > 0 && <div className="bg-border mx-2 h-auto w-px" />}
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={onDateRangeChange}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  )
}

// Time Picker (simple implementation)
interface TimePickerProps {
  time?: Date
  onTimeChange?: (time: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

function TimePicker({
  time,
  onTimeChange,
  placeholder = "Pick a time",
  disabled = false,
  className,
}: TimePickerProps) {
  const hours = time ? time.getHours() : 0
  const minutes = time ? time.getMinutes() : 0

  const handleTimeChange = (newHours: number, newMinutes: number) => {
    const newTime = time ? new Date(time) : new Date()
    newTime.setHours(newHours)
    newTime.setMinutes(newMinutes)
    onTimeChange?.(newTime)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[150px] justify-start text-left font-normal",
            !time && "text-muted-foreground",
            className,
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {time ? format(time, "HH:mm") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3">
        <div className="flex items-center space-x-2">
          <div className="flex flex-col space-y-1">
            <label className="text-xs font-medium">Hours</label>
            <input
              type="number"
              min={0}
              max={23}
              value={hours}
              onChange={(e) => handleTimeChange(parseInt(e.target.value) || 0, minutes)}
              className="border-input bg-background w-16 rounded-md border px-2 py-1 text-sm"
            />
          </div>
          <span className="text-xl">:</span>
          <div className="flex flex-col space-y-1">
            <label className="text-xs font-medium">Minutes</label>
            <input
              type="number"
              min={0}
              max={59}
              value={minutes}
              onChange={(e) => handleTimeChange(hours, parseInt(e.target.value) || 0)}
              className="border-input bg-background w-16 rounded-md border px-2 py-1 text-sm"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

// Date Time Picker
interface DateTimePickerProps {
  dateTime?: Date
  onDateTimeChange?: (dateTime: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  align?: "start" | "center" | "end"
}

function DateTimePicker({
  dateTime,
  onDateTimeChange,
  placeholder = "Pick date and time",
  disabled = false,
  className,
  align = "start",
}: DateTimePickerProps) {
  const handleDateChange = (newDate: Date | undefined) => {
    if (!newDate) {
      onDateTimeChange?.(undefined)
      return
    }
    const updated = dateTime ? new Date(dateTime) : new Date()
    updated.setFullYear(newDate.getFullYear())
    updated.setMonth(newDate.getMonth())
    updated.setDate(newDate.getDate())
    onDateTimeChange?.(updated)
  }

  const handleTimeChange = (hours: number, minutes: number) => {
    const updated = dateTime ? new Date(dateTime) : new Date()
    updated.setHours(hours)
    updated.setMinutes(minutes)
    onDateTimeChange?.(updated)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !dateTime && "text-muted-foreground",
            className,
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {dateTime ? format(dateTime, "PPP HH:mm") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3" align={align}>
        <Calendar mode="single" selected={dateTime} onSelect={handleDateChange} initialFocus />
        <div className="mt-3 border-t pt-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Time</span>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min={0}
                max={23}
                value={dateTime?.getHours() || 0}
                onChange={(e) =>
                  handleTimeChange(parseInt(e.target.value) || 0, dateTime?.getMinutes() || 0)
                }
                className="border-input bg-background w-12 rounded-md border px-2 py-1 text-center text-sm"
                placeholder="HH"
              />
              <span>:</span>
              <input
                type="number"
                min={0}
                max={59}
                value={dateTime?.getMinutes() || 0}
                onChange={(e) =>
                  handleTimeChange(dateTime?.getHours() || 0, parseInt(e.target.value) || 0)
                }
                className="border-input bg-background w-12 rounded-md border px-2 py-1 text-center text-sm"
                placeholder="MM"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export {
  DatePicker,
  DateRangePicker,
  DatePickerWithPresets,
  DateRangePickerWithPresets,
  TimePicker,
  DateTimePicker,
  type DatePickerProps,
  type DateRangePickerProps,
  type DatePickerWithPresetsProps,
  type DateRangePickerWithPresetsProps,
  type TimePickerProps,
  type DateTimePickerProps,
}
