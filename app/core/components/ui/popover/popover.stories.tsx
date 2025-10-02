import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
import { Textarea } from "../textarea"
import {
  Settings,
  HelpCircle,
  Info,
  User,
  Mail,
  Bell,
  Calendar,
  Search,
  Filter,
  Download,
  Share2,
  MoreVertical,
  Plus,
  Edit,
  Trash,
  Copy,
  Check,
  X,
} from "lucide-react"

const meta: Meta<typeof Popover> = {
  title: "UI/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default Popover
export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="leading-none font-medium">Popover Title</h4>
          <p className="text-muted-foreground text-sm">
            This is the popover content. You can put any content here.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

// With Form
export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

// Placement Options
export const Placement: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Top
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p className="text-sm">Popover on top</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Right
          </Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p className="text-sm">Popover on right</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Bottom
          </Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p className="text-sm">Popover on bottom</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Left
          </Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <p className="text-sm">Popover on left</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

// With Icons
export const WithIcons: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex gap-3">
          <Info className="mt-0.5 h-5 w-5 text-blue-500" />
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Help & Documentation</h4>
            <p className="text-muted-foreground text-sm">
              Click here to access our comprehensive documentation and get help with common
              questions.
            </p>
            <div className="flex gap-2 pt-2">
              <Button size="sm">View Docs</Button>
              <Button size="sm" variant="outline">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

// User Profile
export const UserProfile: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-full">
            <User className="h-4 w-4" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
              <User className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-muted-foreground text-xs">john@example.com</p>
            </div>
          </div>
          <div className="border-t pt-3">
            <button className="hover:bg-accent flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
              <User className="h-4 w-4" />
              Profile
            </button>
            <button className="hover:bg-accent flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
              <Settings className="h-4 w-4" />
              Settings
            </button>
            <button className="hover:bg-accent flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
              <Bell className="h-4 w-4" />
              Notifications
            </button>
          </div>
          <div className="border-t pt-3">
            <button className="hover:bg-accent text-destructive flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
              Sign out
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

// Notifications
export const Notifications: Story = {
  render: () => {
    const [hasNotifications, setHasNotifications] = useState(true)

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            {hasNotifications && (
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="end">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Notifications</h4>
              <button
                onClick={() => setHasNotifications(false)}
                className="text-muted-foreground hover:text-foreground text-xs"
              >
                Mark all as read
              </button>
            </div>
            <div className="space-y-2">
              <div className="hover:bg-muted flex gap-3 rounded p-2">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-500" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">New message from Alice</p>
                  <p className="text-muted-foreground text-xs">2 minutes ago</p>
                </div>
              </div>
              <div className="hover:bg-muted flex gap-3 rounded p-2">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-green-500" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Your report is ready</p>
                  <p className="text-muted-foreground text-xs">1 hour ago</p>
                </div>
              </div>
              <div className="hover:bg-muted flex gap-3 rounded p-2">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-yellow-500" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Meeting in 30 minutes</p>
                  <p className="text-muted-foreground text-xs">3 hours ago</p>
                </div>
              </div>
            </div>
            <div className="border-t pt-3">
              <Button className="w-full" size="sm">
                View all notifications
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}

// Search Popover
export const SearchPopover: Story = {
  render: () => {
    const [search, setSearch] = useState("")

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-96" align="start">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Search className="text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1"
              />
            </div>
            {search && (
              <div className="space-y-2">
                <p className="text-muted-foreground text-xs">Recent searches</p>
                <div className="space-y-1">
                  <button className="hover:bg-accent flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
                    <Calendar className="h-4 w-4" />
                    Calendar events
                  </button>
                  <button className="hover:bg-accent flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
                    <User className="h-4 w-4" />
                    User profiles
                  </button>
                  <button className="hover:bg-accent flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
                    <Mail className="h-4 w-4" />
                    Email templates
                  </button>
                </div>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}

// Filter Popover
export const FilterPopover: Story = {
  render: () => {
    const [status, setStatus] = useState<string[]>([])
    const [priority, setPriority] = useState<string[]>([])

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
            {(status.length > 0 || priority.length > 0) && (
              <span className="bg-primary text-primary-foreground ml-2 rounded-full px-2 py-0.5 text-xs">
                {status.length + priority.length}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Status</h4>
              <div className="space-y-2">
                {["Active", "Pending", "Completed", "Archived"].map((item) => (
                  <label key={item} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={status.includes(item)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setStatus([...status, item])
                        } else {
                          setStatus(status.filter((s) => s !== item))
                        }
                      }}
                      className="rounded border-gray-300"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Priority</h4>
              <div className="space-y-2">
                {["Low", "Medium", "High", "Critical"].map((item) => (
                  <label key={item} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={priority.includes(item)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setPriority([...priority, item])
                        } else {
                          setPriority(priority.filter((p) => p !== item))
                        }
                      }}
                      className="rounded border-gray-300"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex gap-2 border-t pt-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setStatus([])
                  setPriority([])
                }}
                className="flex-1"
              >
                Clear
              </Button>
              <Button size="sm" className="flex-1">
                Apply
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}

// Actions Menu
export const ActionsMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48" align="end">
        <div className="space-y-1">
          <button className="hover:bg-accent flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
            <Edit className="h-4 w-4" />
            Edit
          </button>
          <button className="hover:bg-accent flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
            <Copy className="h-4 w-4" />
            Duplicate
          </button>
          <button className="hover:bg-accent flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
            <Share2 className="h-4 w-4" />
            Share
          </button>
          <button className="hover:bg-accent flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
            <Download className="h-4 w-4" />
            Download
          </button>
          <div className="my-1 border-t" />
          <button className="hover:bg-accent text-destructive flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
            <Trash className="h-4 w-4" />
            Delete
          </button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

// Color Picker
export const ColorPicker: Story = {
  render: () => {
    const [color, setColor] = useState("#3b82f6")
    const colors = [
      "#ef4444",
      "#f97316",
      "#f59e0b",
      "#eab308",
      "#84cc16",
      "#22c55e",
      "#10b981",
      "#14b8a6",
      "#06b6d4",
      "#0ea5e9",
      "#3b82f6",
      "#6366f1",
      "#8b5cf6",
      "#a855f7",
      "#d946ef",
      "#ec4899",
    ]

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[200px] justify-start">
            <div className="h-4 w-4 rounded" style={{ backgroundColor: color }} />
            <span className="ml-2">{color}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Choose a color</h4>
            <div className="grid grid-cols-8 gap-2">
              {colors.map((c) => (
                <button
                  key={c}
                  className="h-8 w-8 rounded border-2 transition-all hover:scale-110"
                  style={{
                    backgroundColor: c,
                    borderColor: c === color ? c : "transparent",
                  }}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="custom">Custom color</Label>
              <Input
                id="custom"
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}

// Feedback Form
export const FeedbackForm: Story = {
  render: () => {
    const [rating, setRating] = useState(0)

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Give Feedback</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">How was your experience?</h4>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="text-2xl transition-transform hover:scale-110"
                  >
                    {star <= rating ? "⭐" : "☆"}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="feedback">Your feedback</Label>
              <Textarea
                id="feedback"
                placeholder="Tell us what you think..."
                className="min-h-[100px]"
              />
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button size="sm" className="flex-1">
                Submit
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}

// Confirmation Popover
export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="destructive" size="sm">
            <Trash className="mr-2 h-4 w-4" />
            Delete Item
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Are you sure?</h4>
              <p className="text-muted-foreground text-sm">
                This action cannot be undone. This will permanently delete the item and remove it
                from our servers.
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => setOpen(false)} className="flex-1">
                Cancel
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => {
                  // Perform delete action
                  setOpen(false)
                }}
                className="flex-1"
              >
                Delete
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}

// Complex Content
export const ComplexContent: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>View Details</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">Project Overview</h4>
            <p className="text-muted-foreground text-sm">
              Comprehensive project management dashboard
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-muted-foreground text-xs">Status</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">Active</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground text-xs">Priority</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <span className="text-sm font-medium">Medium</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground text-xs">Team Size</p>
              <span className="text-sm font-medium">8 members</span>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground text-xs">Progress</p>
              <span className="text-sm font-medium">67%</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-muted-foreground text-xs">Recent Activity</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-green-500" />
                <div className="flex-1">
                  <p className="text-sm">Task completed by John</p>
                  <p className="text-muted-foreground text-xs">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Plus className="mt-0.5 h-4 w-4 text-blue-500" />
                <div className="flex-1">
                  <p className="text-sm">New milestone added</p>
                  <p className="text-muted-foreground text-xs">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 border-t pt-2">
            <Button size="sm" variant="outline" className="flex-1">
              View Project
            </Button>
            <Button size="sm" className="flex-1">
              <Edit className="mr-2 h-3 w-3" />
              Edit
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

// Custom Width
export const CustomWidth: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Small (200px)
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px]">
          <p className="text-sm">Small popover content</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Default (288px)
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm">Default popover content with standard width</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Large (400px)
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px]">
          <p className="text-sm">Large popover content with more space for complex layouts</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Extra Large (500px)
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[500px]">
          <p className="text-sm">
            Extra large popover content for very complex interfaces and forms
          </p>
        </PopoverContent>
      </Popover>
    </div>
  ),
}
