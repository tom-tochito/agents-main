import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { Separator } from "./separator"
import { Badge } from "../badge"
import { Button } from "../button"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "padded",
  },
}

export default meta
type Story = StoryObj<typeof Separator>

// Default horizontal separator
export const Default: Story = {
  render: () => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}

// Vertical separator
export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  ),
}

// With custom styling
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Default</p>
        <Separator />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Thick</p>
        <Separator className="bg-primary h-1" />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Dashed</p>
        <Separator className="border-dashed" />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Colored</p>
        <Separator className="bg-blue-500" />
      </div>
    </div>
  ),
}

// In a form layout
export const FormLayout: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-muted-foreground text-sm">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Username</label>
          <input
            className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
            placeholder="Enter username"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input
            className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
            placeholder="Enter email"
            type="email"
          />
        </div>
      </div>
      <Separator />
      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save changes</Button>
      </div>
    </div>
  ),
}

// In a card header
export const CardHeader: Story = {
  render: () => (
    <div className="w-96 rounded-lg border">
      <div className="p-6">
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <p className="text-muted-foreground text-sm">Manage your account preferences</p>
      </div>
      <Separator />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Email notifications</p>
            <p className="text-muted-foreground text-xs">
              Receive emails about your account activity
            </p>
          </div>
          <Button variant="outline" size="sm">
            Configure
          </Button>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Two-factor authentication</p>
            <p className="text-muted-foreground text-xs">Add an extra layer of security</p>
          </div>
          <Badge variant="outline">Enabled</Badge>
        </div>
      </div>
    </div>
  ),
}

// Menu with separators
export const Menu: Story = {
  render: () => (
    <div className="w-56 rounded-md border">
      <div className="p-2">
        <button className="hover:bg-accent w-full rounded-sm px-2 py-1.5 text-left text-sm">
          Profile
        </button>
        <button className="hover:bg-accent w-full rounded-sm px-2 py-1.5 text-left text-sm">
          Settings
        </button>
        <button className="hover:bg-accent w-full rounded-sm px-2 py-1.5 text-left text-sm">
          Preferences
        </button>
      </div>
      <Separator />
      <div className="p-2">
        <button className="hover:bg-accent w-full rounded-sm px-2 py-1.5 text-left text-sm">
          Team
        </button>
        <button className="hover:bg-accent w-full rounded-sm px-2 py-1.5 text-left text-sm">
          Invite users
        </button>
      </div>
      <Separator />
      <div className="p-2">
        <button className="hover:bg-accent w-full rounded-sm px-2 py-1.5 text-left text-sm text-red-600">
          Log out
        </button>
      </div>
    </div>
  ),
}

// Timeline with separators
export const Timeline: Story = {
  render: () => (
    <div className="w-96">
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-primary h-3 w-3 rounded-full" />
            <Separator orientation="vertical" className="h-full" />
          </div>
          <div className="flex-1 pb-8">
            <p className="text-sm font-medium">Project created</p>
            <p className="text-muted-foreground text-xs">2 hours ago</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-primary h-3 w-3 rounded-full" />
            <Separator orientation="vertical" className="h-full" />
          </div>
          <div className="flex-1 pb-8">
            <p className="text-sm font-medium">First commit</p>
            <p className="text-muted-foreground text-xs">1 hour ago</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-muted-foreground h-3 w-3 rounded-full" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Deploy to production</p>
            <p className="text-muted-foreground text-xs">Pending</p>
          </div>
        </div>
      </div>
    </div>
  ),
}

// Stats with separators
export const Stats: Story = {
  render: () => (
    <div className="flex items-center space-x-6 rounded-lg border p-4">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">452</span>
        <span className="text-muted-foreground text-xs">Total Users</span>
      </div>
      <Separator orientation="vertical" className="h-10" />
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">89</span>
        <span className="text-muted-foreground text-xs">Active Now</span>
      </div>
      <Separator orientation="vertical" className="h-10" />
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">24</span>
        <span className="text-muted-foreground text-xs">New Today</span>
      </div>
    </div>
  ),
}

// Profile header with separator
export const ProfileHeader: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <div className="flex items-center gap-4 pb-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Jane Doe</h2>
          <p className="text-muted-foreground">Software Engineer at Acme Inc</p>
        </div>
        <Button>Follow</Button>
      </div>
      <Separator />
      <div className="flex gap-6 pt-4 text-sm">
        <button className="font-medium">Posts</button>
        <button className="text-muted-foreground hover:text-foreground">About</button>
        <button className="text-muted-foreground hover:text-foreground">Photos</button>
        <button className="text-muted-foreground hover:text-foreground">Videos</button>
      </div>
    </div>
  ),
}

// Breadcrumb with separators
export const Breadcrumb: Story = {
  render: () => (
    <nav className="flex items-center space-x-2 text-sm">
      <a href="#" className="text-muted-foreground hover:text-foreground">
        Home
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="text-muted-foreground hover:text-foreground">
        Products
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="text-muted-foreground hover:text-foreground">
        Electronics
      </a>
      <Separator orientation="vertical" className="h-4" />
      <span className="font-medium">Laptops</span>
    </nav>
  ),
}

// Footer with separators
export const Footer: Story = {
  render: () => (
    <footer className="w-full">
      <Separator className="mb-8" />
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-4 text-sm">
          <a href="#" className="hover:underline">
            Terms
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a href="#" className="hover:underline">
            Cookies
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
        <p className="text-muted-foreground text-sm">© 2024 Acme Inc. All rights reserved.</p>
      </div>
    </footer>
  ),
}
