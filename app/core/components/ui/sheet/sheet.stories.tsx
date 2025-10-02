import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  WideSheetContent,
  FullScreenSheetContent,
} from "./sheet"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
import { Textarea } from "../textarea"
import { RadioGroup, RadioGroupItem } from "../radio-group"
import { Checkbox } from "../checkbox"
import {
  Menu,
  Settings,
  User,
  Bell,
  ShoppingCart,
  Filter,
  Search,
  Plus,
  Edit,
  Trash,
  Copy,
  Share2,
  Download,
  Upload,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  AlertCircle,
  Info,
  HelpCircle,
  ChevronRight,
} from "lucide-react"

const meta: Meta<typeof Sheet> = {
  title: "UI/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default Sheet
export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a sheet component that slides in from the side of the screen.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-muted-foreground text-sm">
            Sheet content goes here. You can put any content inside the sheet.
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

// Sheet Positions
export const Positions: Story = {
  render: () => (
    <div className="flex gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">From Right</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the right.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">From Left</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the left.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">From Top</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the top.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">From Bottom</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the bottom.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  ),
}

// Wide Sheet
export const WideSheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Wide Sheet</Button>
      </SheetTrigger>
      <WideSheetContent>
        <SheetHeader>
          <SheetTitle>Wide Sheet</SheetTitle>
          <SheetDescription>This is a wider sheet for displaying more content.</SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="space-y-4">
            <h3 className="font-medium">Column 1</h3>
            <p className="text-muted-foreground text-sm">
              This wide sheet can accommodate more complex layouts with multiple columns.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Column 2</h3>
            <p className="text-muted-foreground text-sm">
              Perfect for forms, settings panels, or detailed information displays.
            </p>
          </div>
        </div>
      </WideSheetContent>
    </Sheet>
  ),
}

// Full Screen Sheet
export const FullScreen: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Full Screen</Button>
      </SheetTrigger>
      <FullScreenSheetContent>
        <div className="flex h-full flex-col">
          <SheetHeader>
            <SheetTitle>Full Screen Sheet</SheetTitle>
            <SheetDescription>This sheet takes up the entire screen.</SheetDescription>
          </SheetHeader>
          <div className="flex-1 py-4">
            <p className="text-muted-foreground text-sm">
              Full screen sheets are perfect for immersive experiences like image galleries,
              document viewers, or complex forms.
            </p>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </FullScreenSheetContent>
    </Sheet>
  ),
}

// Navigation Menu
export const NavigationMenu: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 space-y-1">
          {[
            { icon: User, label: "Profile", badge: null },
            { icon: Bell, label: "Notifications", badge: "3" },
            { icon: Settings, label: "Settings", badge: null },
            { icon: ShoppingCart, label: "Cart", badge: "2" },
            { icon: HelpCircle, label: "Help & Support", badge: null },
          ].map((item) => (
            <button
              key={item.label}
              className="hover:bg-accent flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm"
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </div>
              {item.badge ? (
                <span className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                  {item.badge}
                </span>
              ) : (
                <ChevronRight className="text-muted-foreground h-4 w-4" />
              )}
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  ),
}

// Settings Panel
export const SettingsPanel: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true)
    const [marketing, setMarketing] = useState(false)
    const [theme, setTheme] = useState("light")

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>Manage your account settings and preferences.</SheetDescription>
          </SheetHeader>
          <div className="space-y-6 py-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Push Notifications</Label>
                  <Checkbox
                    id="notifications"
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing">Marketing Emails</Label>
                  <Checkbox id="marketing" checked={marketing} onCheckedChange={setMarketing} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Appearance</h3>
              <RadioGroup value={theme} onValueChange={setTheme}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="light" />
                  <Label htmlFor="light">Light</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="dark" />
                  <Label htmlFor="dark">Dark</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="system" />
                  <Label htmlFor="system">System</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Account</h3>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="johndoe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
              </div>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
            <Button>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  },
}

// Shopping Cart
export const ShoppingCartPanel: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: 1, name: "Product 1", price: 29.99, quantity: 2 },
      { id: 2, name: "Product 2", price: 49.99, quantity: 1 },
      { id: 3, name: "Product 3", price: 19.99, quantity: 3 },
    ])

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart ({items.length})
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
            <SheetDescription>{items.length} items in your cart</SheetDescription>
          </SheetHeader>
          <div className="flex-1 overflow-auto py-6">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="bg-muted h-16 w-16 rounded" />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => setItems(items.filter((i) => i.id !== item.id))}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t pt-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">${total.toFixed(2)}</span>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </SheetClose>
              <Button className="w-full">Checkout</Button>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    )
  },
}

// Filter Panel
export const FilterPanel: Story = {
  render: () => {
    const [priceRange, setPriceRange] = useState([0, 1000])
    const [categories, setCategories] = useState<string[]>([])
    const [brands, setBrands] = useState<string[]>([])

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filter Products</SheetTitle>
            <SheetDescription>Narrow down your search results</SheetDescription>
          </SheetHeader>
          <div className="space-y-6 py-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Categories</h3>
              <div className="space-y-2">
                {["Electronics", "Clothing", "Books", "Home & Garden"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={categories.includes(category)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setCategories([...categories, category])
                        } else {
                          setCategories(categories.filter((c) => c !== category))
                        }
                      }}
                    />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Brands</h3>
              <div className="space-y-2">
                {["Brand A", "Brand B", "Brand C", "Brand D"].map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={brand}
                      checked={brands.includes(brand)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setBrands([...brands, brand])
                        } else {
                          setBrands(brands.filter((b) => b !== brand))
                        }
                      }}
                    />
                    <Label htmlFor={brand}>{brand}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Clear</Button>
            </SheetClose>
            <Button>Apply Filters</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  },
}

// Create/Edit Form
export const CreateEditForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Create New Item</SheetTitle>
            <SheetDescription>Fill in the details below to create a new item.</SheetDescription>
          </SheetHeader>
          <div className="space-y-4 py-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter description"
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                className="border-input bg-background flex h-9 w-full rounded-md border px-3 py-1 text-sm"
              >
                <option>Select category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input id="tags" placeholder="Enter tags separated by commas" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
            <Button onClick={() => setOpen(false)}>Create</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  },
}

// File Manager
export const FileManager: Story = {
  render: () => {
    const files = [
      { name: "document.pdf", type: "pdf", size: "2.4 MB", icon: FileText },
      { name: "image.png", type: "image", size: "1.2 MB", icon: Image },
      { name: "video.mp4", type: "video", size: "45.6 MB", icon: Video },
      { name: "audio.mp3", type: "audio", size: "3.8 MB", icon: Music },
      { name: "archive.zip", type: "archive", size: "12.3 MB", icon: Archive },
    ]

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open File Manager</Button>
        </SheetTrigger>
        <WideSheetContent>
          <SheetHeader>
            <SheetTitle>File Manager</SheetTitle>
            <SheetDescription>Manage your files and folders</SheetDescription>
          </SheetHeader>
          <div className="py-6">
            <div className="mb-4 flex gap-2">
              <Button size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Upload
              </Button>
              <Button size="sm" variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                New Folder
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {files.map((file) => (
                <div
                  key={file.name}
                  className="hover:bg-accent flex cursor-pointer flex-col items-center gap-2 rounded-lg border p-4"
                >
                  <file.icon className="text-muted-foreground h-8 w-8" />
                  <div className="text-center">
                    <p className="text-sm font-medium">{file.name}</p>
                    <p className="text-muted-foreground text-xs">{file.size}</p>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </WideSheetContent>
      </Sheet>
    )
  },
}

// Notifications Panel
export const NotificationsPanel: Story = {
  render: () => {
    const notifications = [
      {
        id: 1,
        title: "New message from Alice",
        description: "Hey, are you available for a call?",
        time: "2 minutes ago",
        unread: true,
        type: "message",
      },
      {
        id: 2,
        title: "Your order has been shipped",
        description: "Track your package with order #12345",
        time: "1 hour ago",
        unread: true,
        type: "order",
      },
      {
        id: 3,
        title: "Security alert",
        description: "New login from Chrome on Windows",
        time: "3 hours ago",
        unread: false,
        type: "security",
      },
      {
        id: 4,
        title: "Payment received",
        description: "You've received $250.00 from John Doe",
        time: "Yesterday",
        unread: false,
        type: "payment",
      },
    ]

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Notifications</SheetTitle>
            <SheetDescription>You have 2 unread notifications</SheetDescription>
          </SheetHeader>
          <div className="space-y-4 py-6">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={cn(
                  "hover:bg-accent rounded-lg border p-4 transition-colors",
                  notification.unread && "bg-accent/50",
                )}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "mt-1 h-2 w-2 rounded-full",
                      notification.unread ? "bg-blue-500" : "bg-transparent",
                    )}
                  />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-muted-foreground text-sm">{notification.description}</p>
                    <p className="text-muted-foreground text-xs">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <SheetFooter>
            <Button variant="outline" className="w-full">
              Mark all as read
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  },
}

function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ")
}
