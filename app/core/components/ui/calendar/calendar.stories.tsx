import type { Meta, StoryObj } from "@storybook/react"
import { Calendar, CalendarWithPresets, MiniCalendar, YearCalendar } from "./calendar"
import { useState } from "react"
import {
  format,
  addDays,
  subDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns"
import { Badge } from "../badge"
import { Button } from "../button"
import { CalendarIcon } from "lucide-react"

// Define DateRange type locally
type DateRange = {
  from: Date | undefined
  to?: Date | undefined
}

const meta = {
  title: "UI/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
      <div className="flex flex-col gap-4">
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        {date && (
          <p className="text-muted-foreground text-center text-sm">
            Selected: {format(date, "PPP")}
          </p>
        )}
      </div>
    )
  },
}

export const DateRangeSelection: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7),
    })

    return (
      <div className="flex flex-col gap-4">
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          className="rounded-md border"
        />
        {range?.from && (
          <p className="text-muted-foreground text-center text-sm">
            {range.to ? (
              <>
                {format(range.from, "LLL dd, y")} - {format(range.to, "LLL dd, y")}
              </>
            ) : (
              format(range.from, "LLL dd, y")
            )}
          </p>
        )}
      </div>
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const [days, setDays] = useState<Date[] | undefined>([
      new Date(),
      addDays(new Date(), 2),
      addDays(new Date(), 5),
    ])

    return (
      <div className="flex flex-col gap-4">
        <Calendar
          mode="multiple"
          selected={days}
          onSelect={setDays}
          className="rounded-md border"
        />
        {days && days.length > 0 && (
          <div className="text-muted-foreground text-center text-sm">
            <p className="mb-2 font-medium">Selected {days.length} dates:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {days.map((day) => (
                <Badge key={day.toISOString()} variant="secondary" size="sm">
                  {format(day, "MMM d")}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  },
}

export const WithPresets: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>()

    const presets = [
      {
        label: "Today",
        dateRange: { from: new Date(), to: new Date() },
      },
      {
        label: "Last 7 days",
        dateRange: { from: subDays(new Date(), 7), to: new Date() },
      },
      {
        label: "Last 30 days",
        dateRange: { from: subDays(new Date(), 30), to: new Date() },
      },
      {
        label: "This month",
        dateRange: {
          from: startOfMonth(new Date()),
          to: endOfMonth(new Date()),
        },
      },
      {
        label: "This week",
        dateRange: {
          from: startOfWeek(new Date()),
          to: endOfWeek(new Date()),
        },
      },
    ]

    return (
      <div className="flex flex-col gap-4">
        <CalendarWithPresets
          mode="range"
          selected={range}
          onSelect={setRange}
          presets={presets}
          onPresetSelect={setRange}
          className="rounded-md border"
        />
        {range?.from && (
          <p className="text-muted-foreground text-center text-sm">
            {range.to ? (
              <>
                {format(range.from, "LLL dd, y")} - {format(range.to, "LLL dd, y")}
              </>
            ) : (
              format(range.from, "LLL dd, y")
            )}
          </p>
        )}
      </div>
    )
  },
}

export const Mini: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
      <div className="flex items-start gap-8">
        <div>
          <h3 className="mb-2 text-sm font-medium">Mini Calendar</h3>
          <MiniCalendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Regular Calendar</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    )
  },
}

export const YearView: Story = {
  render: () => {
    const [selectedDates] = useState<Date[]>([
      new Date(2024, 2, 15),
      new Date(2024, 5, 10),
      new Date(2024, 8, 22),
      new Date(2024, 11, 25),
    ])

    return (
      <div className="flex flex-col gap-4">
        <YearCalendar
          year={2024}
          selectedDates={selectedDates}
          onMonthClick={() => {}}
          className="rounded-md border"
        />
        <p className="text-muted-foreground text-center text-sm">
          Click on a month to view details
        </p>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) => date < new Date() || date > addDays(new Date(), 30)}
        className="rounded-md border"
      />
    )
  },
}

export const CustomStyles: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    const bookedDays = [addDays(new Date(), 1), addDays(new Date(), 3), addDays(new Date(), 5)]

    return (
      <div className="flex flex-col gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            booked: bookedDays,
          }}
          modifiersClassNames={{
            booked: "bg-amber-100 text-amber-900 font-medium hover:bg-amber-200",
          }}
        />
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded border border-amber-200 bg-amber-100" />
            <span>Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary h-3 w-3 rounded" />
            <span>Selected</span>
          </div>
        </div>
      </div>
    )
  },
}

export const InlineCalendar: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
      <div className="w-full max-w-md">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Schedule</h2>
          <p className="text-muted-foreground">Pick a date for your appointment</p>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full rounded-md border"
        />
        {date && (
          <div className="bg-muted mt-4 rounded-md p-4">
            <p className="text-sm font-medium">Selected Date</p>
            <p className="text-lg">{format(date, "EEEE, MMMM d, yyyy")}</p>
          </div>
        )}
      </div>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const [checkIn, setCheckIn] = useState<Date | undefined>()
    const [checkOut, setCheckOut] = useState<Date | undefined>()
    const [appointment, setAppointment] = useState<Date | undefined>()
    const [eventDates, setEventDates] = useState<Date[] | undefined>([])

    return (
      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Hotel Booking</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Check-in Date</label>
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Check-out Date</label>
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                disabled={(date) =>
                  date < (checkIn || new Date()) || date < addDays(checkIn || new Date(), 1)
                }
                className="rounded-md border"
              />
            </div>
          </div>
          {checkIn && checkOut && (
            <div className="bg-muted mt-4 rounded-md p-4">
              <p className="font-medium">Your Stay</p>
              <p className="text-muted-foreground text-sm">
                {format(checkIn, "MMM d")} - {format(checkOut, "MMM d, yyyy")}
              </p>
            </div>
          )}
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Doctor Appointment</h3>
          <div className="max-w-sm">
            <Calendar
              mode="single"
              selected={appointment}
              onSelect={setAppointment}
              disabled={(date) => {
                const day = date.getDay()
                return day === 0 || day === 6 || date < new Date()
              }}
              className="rounded-md border"
            />
            <p className="text-muted-foreground mt-2 text-sm">* Available Monday - Friday only</p>
            {appointment && (
              <Button className="mt-4 w-full">
                Book for {format(appointment, "MMMM d, yyyy")}
              </Button>
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Event Planning</h3>
          <div className="max-w-sm">
            <p className="text-muted-foreground mb-2 text-sm">
              Select multiple dates for your event series
            </p>
            <Calendar
              mode="multiple"
              selected={eventDates}
              onSelect={setEventDates}
              disabled={(date) => date < new Date()}
              className="rounded-md border"
            />
            {eventDates && eventDates.length > 0 && (
              <div className="mt-4">
                <p className="mb-2 text-sm font-medium">Event Dates:</p>
                <div className="flex flex-wrap gap-2">
                  {eventDates.map((date) => (
                    <Badge key={date.toISOString()} variant="secondary">
                      {format(date, "MMM d")}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  },
}

export const WithForm: Story = {
  render: () => {
    const [birthDate, setBirthDate] = useState<Date | undefined>()
    const [showCalendar, setShowCalendar] = useState(false)

    return (
      <div className="max-w-md space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Date of Birth</label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCalendar(!showCalendar)}
              className="flex w-full items-center justify-between rounded-md border px-3 py-2 text-left"
            >
              <span className={birthDate ? "" : "text-muted-foreground"}>
                {birthDate ? format(birthDate, "PPP") : "Pick a date"}
              </span>
              <CalendarIcon className="h-4 w-4 opacity-50" />
            </button>
            {showCalendar && (
              <div className="absolute top-full z-10 mt-2">
                <Calendar
                  mode="single"
                  selected={birthDate}
                  onSelect={(date) => {
                    setBirthDate(date)
                    setShowCalendar(false)
                  }}
                  disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                  className="bg-popover rounded-md border"
                  defaultMonth={birthDate || subDays(new Date(), 365 * 25)}
                />
              </div>
            )}
          </div>
        </div>

        <Button className="w-full">Submit</Button>
      </div>
    )
  },
}

export const Localized: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">English (Default)</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium">Custom Week Start (Monday)</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            weekStartsOn={1}
            className="rounded-md border"
          />
        </div>
      </div>
    )
  },
}
