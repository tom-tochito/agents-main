import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  SimpleTooltip,
  RichTooltip,
  KeyboardTooltip,
  DelayedTooltip,
  InteractiveTooltip,
} from "./tooltip"
import { Button } from "../button"
import { Input } from "../input"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { Badge } from "../badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card/card"
import { IconToggle } from "../toggle"
import {
  Bold,
  Italic,
  Underline,
  Info,
  HelpCircle,
  AlertCircle,
  CheckCircle,
  Copy,
  Download,
  Share2,
  Home,
  Settings,
  User,
  Mail,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Globe,
  Github,
  Twitter,
  Linkedin,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  MoreHorizontal,
  MoreVertical,
  ChevronDown,
  Search,
  Filter,
  SortAsc,
  RefreshCw,
  Zap,
  Star,
  Heart,
  Bookmark,
  Send,
  Archive,
  FileText,
  Image,
  Video,
  Music,
  Code,
  Terminal,
  Database,
  Cloud,
  Lock,
  Unlock,
  Eye,
  EyeOff,
} from "lucide-react"

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Tooltip>

// Basic tooltip
export const Basic: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
}

// Positions
export const Positions: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 py-20">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Top tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Right tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Bottom tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Left tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

// Alignments
export const Alignments: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 py-20">
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-32">
              Start
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="start">
            <p>Aligned to start</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-32">
              Center
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <p>Aligned to center</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-32">
              End
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="end">
            <p>Aligned to end</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
}

// Variants
export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Default</Button>
        </TooltipTrigger>
        <TooltipContent variant="default">
          <p>Default variant</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Secondary</Button>
        </TooltipTrigger>
        <TooltipContent variant="secondary">
          <p>Secondary variant</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Destructive</Button>
        </TooltipTrigger>
        <TooltipContent variant="destructive">
          <p>Destructive variant</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Outline</Button>
        </TooltipTrigger>
        <TooltipContent variant="outline">
          <p>Outline variant</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Light</Button>
        </TooltipTrigger>
        <TooltipContent variant="light">
          <p>Light variant</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Dark</Button>
        </TooltipTrigger>
        <TooltipContent variant="dark">
          <p>Dark variant</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Small</Button>
        </TooltipTrigger>
        <TooltipContent size="sm">
          <p>Small tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Medium</Button>
        </TooltipTrigger>
        <TooltipContent size="md">
          <p>Medium tooltip (default)</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Large</Button>
        </TooltipTrigger>
        <TooltipContent size="lg">
          <p>Large tooltip with more content</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

// Without arrow
export const WithoutArrow: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">No Arrow</Button>
      </TooltipTrigger>
      <TooltipContent showArrow={false}>
        <p>Tooltip without arrow</p>
      </TooltipContent>
    </Tooltip>
  ),
}

// Simple tooltip
export const Simple: Story = {
  render: () => (
    <div className="flex gap-4">
      <SimpleTooltip content="This is a simple tooltip">
        <Button variant="outline">Hover me</Button>
      </SimpleTooltip>

      <SimpleTooltip content="Delete this item" variant="destructive">
        <Button variant="outline" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </SimpleTooltip>

      <SimpleTooltip content="Edit profile" side="right">
        <Button variant="outline" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      </SimpleTooltip>
    </div>
  ),
}

// Rich tooltip
export const Rich: Story = {
  render: () => (
    <div className="flex gap-4">
      <RichTooltip
        title="User Profile"
        description="View and edit your personal information"
        icon={<User className="h-4 w-4" />}
      >
        <Button variant="outline">
          <User className="h-4 w-4" />
        </Button>
      </RichTooltip>

      <RichTooltip
        title="Warning"
        description="This action cannot be undone"
        icon={<AlertCircle className="h-4 w-4 text-yellow-500" />}
        variant="outline"
      >
        <Button variant="destructive">Delete</Button>
      </RichTooltip>

      <RichTooltip
        title="Success"
        description="Your changes have been saved"
        icon={<CheckCircle className="h-4 w-4 text-green-500" />}
        variant="light"
      >
        <Button variant="outline">
          <Save className="h-4 w-4" />
        </Button>
      </RichTooltip>
    </div>
  ),
}

// Keyboard shortcuts
export const KeyboardShortcuts: Story = {
  render: () => (
    <div className="flex gap-4">
      <KeyboardTooltip text="Copy" keys={["⌘", "C"]}>
        <Button variant="outline" size="icon">
          <Copy className="h-4 w-4" />
        </Button>
      </KeyboardTooltip>

      <KeyboardTooltip text="Save" keys={["⌘", "S"]}>
        <Button variant="outline" size="icon">
          <Save className="h-4 w-4" />
        </Button>
      </KeyboardTooltip>

      <KeyboardTooltip text="Bold" keys={["⌘", "B"]}>
        <IconToggle size="icon">
          <Bold className="h-4 w-4" />
        </IconToggle>
      </KeyboardTooltip>

      <KeyboardTooltip text="Search" keys={["⌘", "K"]}>
        <Button variant="outline">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </KeyboardTooltip>
    </div>
  ),
}

// Delayed tooltip
export const Delayed: Story = {
  render: () => (
    <div className="flex gap-4">
      <SimpleTooltip content="Shows immediately" delayDuration={0}>
        <Button variant="outline">Instant</Button>
      </SimpleTooltip>

      <SimpleTooltip content="Default delay (200ms)" delayDuration={200}>
        <Button variant="outline">Default</Button>
      </SimpleTooltip>

      <DelayedTooltip content="Shows after 700ms" delay={700}>
        <Button variant="outline">Delayed</Button>
      </DelayedTooltip>

      <DelayedTooltip content="Shows after 1 second" delay={1000}>
        <Button variant="outline">Very Delayed</Button>
      </DelayedTooltip>
    </div>
  ),
}

// Interactive tooltip
export const Interactive: Story = {
  render: () => (
    <InteractiveTooltip
      trigger={<Button variant="outline">Interactive Content</Button>}
      variant="light"
      size="lg"
    >
      <div className="space-y-2">
        <p className="font-semibold">Interactive Tooltip</p>
        <p className="text-muted-foreground text-sm">
          You can hover over this content and interact with it.
        </p>
        <div className="flex gap-2">
          <Button size="sm">Action</Button>
          <Button size="sm" variant="outline">
            Cancel
          </Button>
        </div>
      </div>
    </InteractiveTooltip>
  ),
}

// Icon buttons with tooltips
export const IconButtons: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Toolbar</CardTitle>
        <CardDescription>Icon buttons with helpful tooltips</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1">
          <SimpleTooltip content="Home">
            <Button variant="ghost" size="icon">
              <Home className="h-4 w-4" />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content="Search">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content="Filter">
            <Button variant="ghost" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content="Sort">
            <Button variant="ghost" size="icon">
              <SortAsc className="h-4 w-4" />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content="Refresh">
            <Button variant="ghost" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content="Settings">
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </SimpleTooltip>
        </div>
      </CardContent>
    </Card>
  ),
}

// Form field tooltips
export const FormFields: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Update your account information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <SimpleTooltip content="Your unique username for login">
              <HelpCircle className="text-muted-foreground h-3 w-3" />
            </SimpleTooltip>
          </div>
          <Input id="username" placeholder="Enter username" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <RichTooltip
              title="Email Address"
              description="We'll use this for account recovery and notifications"
              variant="light"
            >
              <Info className="text-muted-foreground h-3 w-3" />
            </RichTooltip>
          </div>
          <Input id="email" type="email" placeholder="Enter email" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <RichTooltip
              title="Password Requirements"
              description="Must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number"
              variant="light"
            >
              <AlertCircle className="text-muted-foreground h-3 w-3" />
            </RichTooltip>
          </div>
          <Input id="password" type="password" placeholder="Enter password" />
        </div>
      </CardContent>
    </Card>
  ),
}

// Status indicators
export const StatusIndicators: Story = {
  render: () => (
    <div className="flex gap-4">
      <SimpleTooltip content="Online - Active now">
        <Badge className="bg-green-500">
          <span className="mr-1 h-2 w-2 animate-pulse rounded-full bg-white" />
          Online
        </Badge>
      </SimpleTooltip>

      <SimpleTooltip content="Away - Last seen 5 minutes ago">
        <Badge className="bg-yellow-500">
          <span className="mr-1 h-2 w-2 rounded-full bg-white" />
          Away
        </Badge>
      </SimpleTooltip>

      <SimpleTooltip content="Do not disturb - In a meeting">
        <Badge className="bg-red-500">
          <span className="mr-1 h-2 w-2 rounded-full bg-white" />
          Busy
        </Badge>
      </SimpleTooltip>

      <SimpleTooltip content="Offline - Last seen 2 hours ago">
        <Badge variant="outline">
          <span className="mr-1 h-2 w-2 rounded-full bg-gray-400" />
          Offline
        </Badge>
      </SimpleTooltip>
    </div>
  ),
}

// User avatars with info
export const UserAvatars: Story = {
  render: () => (
    <div className="flex gap-4">
      <RichTooltip
        title="John Doe"
        description="john.doe@example.com"
        icon={<Mail className="h-3 w-3" />}
        variant="light"
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </RichTooltip>

      <InteractiveTooltip
        trigger={
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        }
        variant="light"
        size="lg"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10">
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Alice Brown</p>
              <p className="text-muted-foreground text-xs">Product Designer</p>
            </div>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              alice@example.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              +1 234 567 890
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              New York, USA
            </div>
          </div>
        </div>
      </InteractiveTooltip>
    </div>
  ),
}

// Truncated text
export const TruncatedText: Story = {
  render: () => (
    <div className="w-[200px] space-y-2">
      <SimpleTooltip content="This is a very long text that doesn't fit in the container and needs to be truncated">
        <p className="truncate text-sm">
          This is a very long text that doesn't fit in the container and needs to be truncated
        </p>
      </SimpleTooltip>

      <SimpleTooltip content="/Users/johndoe/Documents/Projects/my-awesome-project/src/components/ui/tooltip/tooltip.stories.tsx">
        <code className="bg-muted block truncate rounded p-1 text-xs">
          /Users/johndoe/Documents/Projects/my-awesome-project/src/components/ui/tooltip/tooltip.stories.tsx
        </code>
      </SimpleTooltip>
    </div>
  ),
}

// Action confirmations
export const ActionConfirmations: Story = {
  render: () => (
    <div className="flex gap-4">
      <SimpleTooltip content="Click to copy to clipboard">
        <Button variant="outline" size="sm">
          <Copy className="mr-2 h-3 w-3" />
          Copy
        </Button>
      </SimpleTooltip>

      <RichTooltip
        title="Delete Item"
        description="This action cannot be undone"
        icon={<AlertCircle className="h-4 w-4 text-red-500" />}
        variant="destructive"
      >
        <Button variant="destructive" size="sm">
          <Trash2 className="mr-2 h-3 w-3" />
          Delete
        </Button>
      </RichTooltip>

      <SimpleTooltip content="Download file (2.3 MB)">
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-3 w-3" />
          Download
        </Button>
      </SimpleTooltip>
    </div>
  ),
}
