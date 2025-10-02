import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  addDays,
  subDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
} from "date-fns"
import type { DateRange } from "react-day-picker"
import {
  DatePicker,
  DateRangePicker,
  DatePickerWithPresets,
  DateRangePickerWithPresets,
  TimePicker,
  DateTimePicker,
} from "./date-picker"
import { Button } from "../button"
import { Label } from "../label"
import { Badge } from "../badge"

const meta = {
  title: "UI/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date>()

    return (
      <div className="space-y-2">
        <Label>Select a date</Label>
        <DatePicker date={date} onDateChange={setDate} />
        {date && (
          <p className="text-muted-foreground text-sm">Selected date: {date.toDateString()}</p>
        )}
      </div>
    )
  },
}

export const WithInitialDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date>(new Date())

    return (
      <div className="space-y-2">
        <Label>Select a date</Label>
        <DatePicker date={date} onDateChange={setDate} />
      </div>
    )
  },
}

export const CustomFormat: Story = {
  render: () => {
    const [date, setDate] = useState<Date>()

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Short format (MM/dd/yyyy)</Label>
          <DatePicker date={date} onDateChange={setDate} formatStr="MM/dd/yyyy" />
        </div>
        <div className="space-y-2">
          <Label>Long format (EEEE, MMMM do, yyyy)</Label>
          <DatePicker
            date={date}
            onDateChange={setDate}
            formatStr="EEEE, MMMM do, yyyy"
            className="w-[320px]"
          />
        </div>
        <div className="space-y-2">
          <Label>Custom format (dd-MMM-yy)</Label>
          <DatePicker
            date={date}
            onDateChange={setDate}
            formatStr="dd-MMM-yy"
            className="w-[200px]"
          />
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    const [date, setDate] = useState<Date>(new Date())

    return (
      <div className="space-y-2">
        <Label>Disabled date picker</Label>
        <DatePicker date={date} onDateChange={setDate} disabled />
      </div>
    )
  },
}

export const WithPresets: Story = {
  render: () => {
    const [date, setDate] = useState<Date>()

    const presets = [
      { label: "Today", date: new Date() },
      { label: "Tomorrow", date: addDays(new Date(), 1) },
      { label: "Yesterday", date: subDays(new Date(), 1) },
      { label: "In a week", date: addDays(new Date(), 7) },
      { label: "In a month", date: addDays(new Date(), 30) },
    ]

    return (
      <div className="space-y-2">
        <Label>Select a date</Label>
        <DatePickerWithPresets date={date} onDateChange={setDate} presets={presets} />
        {date && <p className="text-muted-foreground text-sm">Selected: {date.toDateString()}</p>}
      </div>
    )
  },
}

export const DateRange: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange>()

    return (
      <div className="space-y-2">
        <Label>Select a date range</Label>
        <DateRangePicker dateRange={dateRange} onDateRangeChange={setDateRange} />
        {dateRange && (
          <p className="text-muted-foreground text-sm">
            From: {dateRange.from?.toDateString()}
            {dateRange.to && ` - To: ${dateRange.to.toDateString()}`}
          </p>
        )}
      </div>
    )
  },
}

export const DateRangeWithPresets: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange>()

    const today = new Date()
    const presets = [
      {
        label: "Last 7 days",
        dateRange: {
          from: subDays(today, 7),
          to: today,
        },
      },
      {
        label: "Last 30 days",
        dateRange: {
          from: subDays(today, 30),
          to: today,
        },
      },
      {
        label: "This week",
        dateRange: {
          from: startOfWeek(today),
          to: endOfWeek(today),
        },
      },
      {
        label: "This month",
        dateRange: {
          from: startOfMonth(today),
          to: endOfMonth(today),
        },
      },
      {
        label: "This year",
        dateRange: {
          from: startOfYear(today),
          to: today,
        },
      },
    ]

    return (
      <div className="space-y-2">
        <Label>Select a date range</Label>
        <DateRangePickerWithPresets
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          presets={presets}
          className="w-[350px]"
        />
        {dateRange && (
          <div className="space-y-1">
            <p className="text-muted-foreground text-sm">From: {dateRange.from?.toDateString()}</p>
            {dateRange.to && (
              <p className="text-muted-foreground text-sm">To: {dateRange.to.toDateString()}</p>
            )}
          </div>
        )}
      </div>
    )
  },
}

export const TimePickerExample: Story = {
  render: () => {
    const [time, setTime] = useState<Date>()

    return (
      <div className="space-y-2">
        <Label>Select a time</Label>
        <TimePicker time={time} onTimeChange={setTime} />
        {time && (
          <p className="text-muted-foreground text-sm">
            Selected time: {time.toLocaleTimeString()}
          </p>
        )}
      </div>
    )
  },
}

export const DateTimePickerExample: Story = {
  render: () => {
    const [dateTime, setDateTime] = useState<Date>()

    return (
      <div className="space-y-2">
        <Label>Select date and time</Label>
        <DateTimePicker dateTime={dateTime} onDateTimeChange={setDateTime} />
        {dateTime && (
          <p className="text-muted-foreground text-sm">Selected: {dateTime.toLocaleString()}</p>
        )}
      </div>
    )
  },
}

export const MultipleVariants: Story = {
  render: () => {
    const [singleDate, setSingleDate] = useState<Date>()
    const [rangeDate, setRangeDate] = useState<DateRange>()
    const [dateTime, setDateTime] = useState<Date>()

    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Single Date</h3>
          <DatePicker
            date={singleDate}
            onDateChange={setSingleDate}
            placeholder="Select a single date"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Date Range</h3>
          <DateRangePicker
            dateRange={rangeDate}
            onDateRangeChange={setRangeDate}
            placeholder="Select a date range"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Date & Time</h3>
          <DateTimePicker
            dateTime={dateTime}
            onDateTimeChange={setDateTime}
            placeholder="Select date and time"
          />
        </div>
      </div>
    )
  },
}

export const FormExample: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()
    const [birthDate, setBirthDate] = useState<Date>()
    const [appointmentTime, setAppointmentTime] = useState<Date>()

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
    }

    return (
      <form onSubmit={handleSubmit} className="w-[400px] space-y-6">
        <div className="space-y-2">
          <Label htmlFor="birth-date">Date of Birth</Label>
          <DatePicker
            date={birthDate}
            onDateChange={setBirthDate}
            placeholder="Select your birth date"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label>Project Duration</Label>
          <div className="flex gap-2">
            <DatePicker
              date={startDate}
              onDateChange={setStartDate}
              placeholder="Start date"
              className="flex-1"
            />
            <DatePicker
              date={endDate}
              onDateChange={setEndDate}
              placeholder="End date"
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="appointment">Appointment Date & Time</Label>
          <DateTimePicker
            dateTime={appointmentTime}
            onDateTimeChange={setAppointmentTime}
            placeholder="Schedule appointment"
            className="w-full"
          />
        </div>

        <div className="flex gap-2">
          <Button type="submit" className="flex-1">
            Submit
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setStartDate(undefined)
              setEndDate(undefined)
              setBirthDate(undefined)
              setAppointmentTime(undefined)
            }}
          >
            Reset
          </Button>
        </div>
      </form>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const [checkIn, setCheckIn] = useState<Date>()
    const [checkOut, setCheckOut] = useState<Date>()
    const [eventRange, setEventRange] = useState<DateRange>()
    const [deliveryDate, setDeliveryDate] = useState<Date>()
    const [reportRange, setReportRange] = useState<DateRange>()

    const reportPresets = [
      {
        label: "Last 7 days",
        dateRange: {
          from: subDays(new Date(), 7),
          to: new Date(),
        },
      },
      {
        label: "Last 30 days",
        dateRange: {
          from: subDays(new Date(), 30),
          to: new Date(),
        },
      },
      {
        label: "Last quarter",
        dateRange: {
          from: subDays(new Date(), 90),
          to: new Date(),
        },
      },
      {
        label: "Year to date",
        dateRange: {
          from: startOfYear(new Date()),
          to: new Date(),
        },
      },
    ]

    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Hotel Booking</h3>
          <div className="flex gap-4">
            <div className="space-y-2">
              <Label>Check-in Date</Label>
              <DatePicker date={checkIn} onDateChange={setCheckIn} placeholder="Check-in" />
            </div>
            <div className="space-y-2">
              <Label>Check-out Date</Label>
              <DatePicker date={checkOut} onDateChange={setCheckOut} placeholder="Check-out" />
            </div>
          </div>
          {checkIn && checkOut && (
            <Badge variant="secondary">
              {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nights
            </Badge>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Event Planning</h3>
          <div className="space-y-2">
            <Label>Event Duration</Label>
            <DateRangePicker
              dateRange={eventRange}
              onDateRangeChange={setEventRange}
              placeholder="Select event dates"
              className="w-[350px]"
            />
          </div>
          {eventRange?.from && eventRange?.to && (
            <div className="flex gap-2">
              <Badge>
                {Math.ceil(
                  (eventRange.to.getTime() - eventRange.from.getTime()) / (1000 * 60 * 60 * 24),
                ) + 1}{" "}
                days
              </Badge>
              <Badge variant="outline">
                {eventRange.from.toLocaleDateString()} - {eventRange.to.toLocaleDateString()}
              </Badge>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Delivery Scheduling</h3>
          <div className="space-y-2">
            <Label>Expected Delivery Date</Label>
            <DatePickerWithPresets
              date={deliveryDate}
              onDateChange={setDeliveryDate}
              placeholder="Select delivery date"
              presets={[
                { label: "Tomorrow", date: addDays(new Date(), 1) },
                { label: "In 3 days", date: addDays(new Date(), 3) },
                { label: "In a week", date: addDays(new Date(), 7) },
                { label: "In 2 weeks", date: addDays(new Date(), 14) },
              ]}
            />
          </div>
          {deliveryDate && (
            <p className="text-muted-foreground text-sm">
              Delivery scheduled for: <strong>{deliveryDate.toLocaleDateString()}</strong>
            </p>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
          <div className="space-y-2">
            <Label>Report Period</Label>
            <DateRangePickerWithPresets
              dateRange={reportRange}
              onDateRangeChange={setReportRange}
              placeholder="Select report period"
              presets={reportPresets}
              className="w-[400px]"
            />
          </div>
          {reportRange && (
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-medium">Report Summary</p>
              <div className="text-muted-foreground space-y-1 text-sm">
                <p>From: {reportRange.from?.toLocaleDateString()}</p>
                {reportRange.to && <p>To: {reportRange.to.toLocaleDateString()}</p>}
                {reportRange.from && reportRange.to && (
                  <p>
                    Total days:{" "}
                    {Math.ceil(
                      (reportRange.to.getTime() - reportRange.from.getTime()) /
                        (1000 * 60 * 60 * 24),
                    ) + 1}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  },
}
