import type { Meta, StoryObj } from "@storybook/react"
import { Badge, DotBadge, IconBadge, NotificationBadge, ClosableBadge } from "./badge"
import {
  Star,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Zap,
  Award,
  Flag,
  Tag,
  Heart,
  MessageCircle,
  Bell,
} from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "../avatar"
import { Button } from "../button"

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "success",
        "warning",
        "info",
        "subtle",
      ],
      description: "The visual style variant of the badge",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the badge",
    },
    rounded: {
      control: "select",
      options: ["default", "full", "none"],
      description: "The border radius style",
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Badge",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="subtle">Subtle</Badge>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
}

export const Rounded: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge rounded="none">Square</Badge>
      <Badge rounded="default">Default</Badge>
      <Badge rounded="full">Pill</Badge>
    </div>
  ),
}

export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <DotBadge>Active</DotBadge>
      <DotBadge variant="success">Online</DotBadge>
      <DotBadge variant="warning">Away</DotBadge>
      <DotBadge variant="destructive">Busy</DotBadge>
      <DotBadge variant="subtle">Offline</DotBadge>
      <DotBadge dotPosition="right" variant="info">
        Processing
      </DotBadge>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <IconBadge icon={<Star />}>Featured</IconBadge>
      <IconBadge icon={<TrendingUp />} variant="success">
        Trending
      </IconBadge>
      <IconBadge icon={<AlertCircle />} variant="warning">
        Warning
      </IconBadge>
      <IconBadge icon={<XCircle />} variant="destructive">
        Error
      </IconBadge>
      <IconBadge icon={<CheckCircle />} variant="success" iconPosition="right">
        Completed
      </IconBadge>
      <IconBadge icon={<Clock />} variant="info">
        In Progress
      </IconBadge>
    </div>
  ),
}

export const NotificationBadges: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Bell className="h-6 w-6" />
        <div className="absolute -top-1 -right-1">
          <NotificationBadge count={5} variant="destructive" />
        </div>
      </div>

      <div className="relative">
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-1 -right-1">
          <NotificationBadge count={12} variant="primary" />
        </div>
      </div>

      <div className="relative">
        <Heart className="h-6 w-6" />
        <div className="absolute -top-1 -right-1">
          <NotificationBadge count={99} max={99} variant="destructive" />
        </div>
      </div>

      <div className="relative">
        <Bell className="h-6 w-6" />
        <div className="absolute -top-1 -right-1">
          <NotificationBadge count={150} max={99} variant="destructive" />
        </div>
      </div>

      <div className="relative">
        <Bell className="h-6 w-6" />
        <div className="absolute -top-1 -right-1">
          <NotificationBadge count={0} dot variant="destructive" />
        </div>
      </div>
    </div>
  ),
}

export const Closable: Story = {
  render: () => {
    const [badges, setBadges] = React.useState([
      { id: 1, text: "React" },
      { id: 2, text: "TypeScript" },
      { id: 3, text: "Tailwind" },
      { id: 4, text: "Storybook" },
    ])

    return (
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <ClosableBadge
            key={badge.id}
            variant="secondary"
            onClose={() => setBadges(badges.filter((b) => b.id !== badge.id))}
          >
            {badge.text}
          </ClosableBadge>
        ))}
        {badges.length === 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setBadges([
                { id: 1, text: "React" },
                { id: 2, text: "TypeScript" },
                { id: 3, text: "Tailwind" },
                { id: 4, text: "Storybook" },
              ])
            }
          >
            Reset Tags
          </Button>
        )}
      </div>
    )
  },
}

export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Badge variant="success" rounded="full">
          Active
        </Badge>
        <Badge variant="warning" rounded="full">
          Pending
        </Badge>
        <Badge variant="destructive" rounded="full">
          Expired
        </Badge>
        <Badge variant="subtle" rounded="full">
          Draft
        </Badge>
        <Badge variant="info" rounded="full">
          New
        </Badge>
      </div>

      <div className="flex gap-2">
        <DotBadge variant="success">Connected</DotBadge>
        <DotBadge variant="warning">Connecting</DotBadge>
        <DotBadge variant="destructive">Disconnected</DotBadge>
        <DotBadge variant="subtle">Idle</DotBadge>
      </div>
    </div>
  ),
}

export const LabelBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Badge variant="outline" size="sm">
          v2.0.0
        </Badge>
        <Badge variant="secondary" size="sm">
          Beta
        </Badge>
        <Badge variant="default" size="sm">
          Pro
        </Badge>
        <Badge variant="success" size="sm">
          New
        </Badge>
        <Badge variant="warning" size="sm">
          Coming Soon
        </Badge>
      </div>

      <div className="flex gap-2">
        <IconBadge icon={<Zap />} variant="warning" size="sm">
          Premium
        </IconBadge>
        <IconBadge icon={<Award />} variant="success" size="sm">
          Best Seller
        </IconBadge>
        <IconBadge icon={<Flag />} variant="destructive" size="sm">
          Limited
        </IconBadge>
        <IconBadge icon={<Tag />} variant="info" size="sm">
          Sale
        </IconBadge>
      </div>
    </div>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Product Card</h3>
        <div className="max-w-sm rounded-lg border p-4">
          <div className="mb-3 flex items-start justify-between">
            <h4 className="font-medium">Premium Package</h4>
            <Badge variant="success" size="sm">
              New
            </Badge>
          </div>
          <p className="text-muted-foreground mb-4 text-sm">
            Get access to all premium features and priority support.
          </p>
          <div className="flex gap-2">
            <IconBadge icon={<CheckCircle />} variant="outline" size="sm">
              Unlimited Access
            </IconBadge>
            <IconBadge icon={<Zap />} variant="outline" size="sm">
              Fast Support
            </IconBadge>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">User Profile</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="absolute -right-1 -bottom-1">
              <Badge variant="success" size="sm" className="h-5 w-5 rounded-full p-0">
                <CheckCircle className="h-3 w-3" />
              </Badge>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium">John Doe</h4>
              <Badge variant="secondary" size="sm">
                PRO
              </Badge>
              <DotBadge variant="success" size="sm">
                Online
              </DotBadge>
            </div>
            <p className="text-muted-foreground text-sm">Software Developer</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Task List</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded border p-2">
            <span className="text-sm">Design homepage mockup</span>
            <Badge variant="success" size="sm">
              Completed
            </Badge>
          </div>
          <div className="flex items-center justify-between rounded border p-2">
            <span className="text-sm">Implement authentication</span>
            <Badge variant="info" size="sm">
              In Progress
            </Badge>
          </div>
          <div className="flex items-center justify-between rounded border p-2">
            <span className="text-sm">Write documentation</span>
            <Badge variant="warning" size="sm">
              Pending
            </Badge>
          </div>
          <div className="flex items-center justify-between rounded border p-2">
            <span className="text-sm">Deploy to production</span>
            <Badge variant="subtle" size="sm">
              Not Started
            </Badge>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Article Tags</h3>
        <div className="rounded-lg border p-4">
          <h4 className="mb-2 font-medium">Getting Started with React</h4>
          <p className="text-muted-foreground mb-3 text-sm">
            Learn the basics of React and build your first component.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" size="sm">
              React
            </Badge>
            <Badge variant="outline" size="sm">
              JavaScript
            </Badge>
            <Badge variant="outline" size="sm">
              Tutorial
            </Badge>
            <Badge variant="outline" size="sm">
              Beginner
            </Badge>
            <DotBadge variant="success" size="sm">
              5 min read
            </DotBadge>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Navigation with Badges</h3>
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="gap-2">
            <MessageCircle className="h-4 w-4" />
            Messages
            <NotificationBadge count={3} variant="destructive" />
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Bell className="h-4 w-4" />
            Notifications
            <NotificationBadge count={12} variant="destructive" />
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Heart className="h-4 w-4" />
            Likes
            <NotificationBadge count={99} max={99} variant="secondary" />
          </Button>
        </div>
      </div>
    </div>
  ),
}

export const ColorCombinations: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="mb-3 text-sm font-medium">Success States</h4>
        <div className="flex gap-2">
          <Badge variant="success">Approved</Badge>
          <DotBadge variant="success">Active</DotBadge>
          <IconBadge icon={<CheckCircle />} variant="success">
            Verified
          </IconBadge>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-medium">Warning States</h4>
        <div className="flex gap-2">
          <Badge variant="warning">Pending</Badge>
          <DotBadge variant="warning">Away</DotBadge>
          <IconBadge icon={<AlertCircle />} variant="warning">
            Requires Attention
          </IconBadge>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-medium">Error States</h4>
        <div className="flex gap-2">
          <Badge variant="destructive">Failed</Badge>
          <DotBadge variant="destructive">Offline</DotBadge>
          <IconBadge icon={<XCircle />} variant="destructive">
            Error
          </IconBadge>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-medium">Info States</h4>
        <div className="flex gap-2">
          <Badge variant="info">New</Badge>
          <DotBadge variant="info">Processing</DotBadge>
          <IconBadge icon={<AlertCircle />} variant="info">
            Information
          </IconBadge>
        </div>
      </div>
    </div>
  ),
}
