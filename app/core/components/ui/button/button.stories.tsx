import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"
import {
  ChevronRight,
  Download,
  Mail,
  Plus,
  Search,
  Settings,
  Trash2,
  User,
  Heart,
  Share2,
} from "lucide-react"

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "destructive"],
      description: "The visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "The size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    loading: {
      control: "boolean",
      description: "Shows a loading spinner",
    },
    asChild: {
      control: "boolean",
      description: "Render as a child component",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
}

export const Icon: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: <Settings className="h-4 w-4" />,
  },
}

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Mail className="h-4 w-4" />,
    children: "Email",
  },
}

export const WithRightIcon: Story = {
  args: {
    rightIcon: <ChevronRight className="h-4 w-4" />,
    children: "Next",
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    children: "Submit",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
}

export const FullWidth: Story = {
  args: {
    className: "w-full",
    children: "Full Width Button",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Primary States</h3>
        <div className="flex gap-2">
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" loading>
            Loading
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Secondary States</h3>
        <div className="flex gap-2">
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button variant="secondary" loading>
            Loading
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Outline States</h3>
        <div className="flex gap-2">
          <Button variant="outline">Default</Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
          <Button variant="outline" loading>
            Loading
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Ghost States</h3>
        <div className="flex gap-2">
          <Button variant="ghost">Default</Button>
          <Button variant="ghost" disabled>
            Disabled
          </Button>
          <Button variant="ghost" loading>
            Loading
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Destructive States</h3>
        <div className="flex gap-2">
          <Button variant="destructive">Default</Button>
          <Button variant="destructive" disabled>
            Disabled
          </Button>
          <Button variant="destructive" loading>
            Loading
          </Button>
        </div>
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Size Variations</h3>
        <div className="flex items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Icons - Small</h3>
        <div className="flex gap-2">
          <Button size="sm" leftIcon={<Plus className="h-3 w-3" />}>
            Add Item
          </Button>
          <Button size="sm" rightIcon={<ChevronRight className="h-3 w-3" />}>
            Next
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Icons - Medium</h3>
        <div className="flex gap-2">
          <Button size="md" leftIcon={<Download className="h-4 w-4" />}>
            Download
          </Button>
          <Button size="md" rightIcon={<Share2 className="h-4 w-4" />}>
            Share
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Icons - Large</h3>
        <div className="flex gap-2">
          <Button size="lg" leftIcon={<User className="h-5 w-5" />}>
            Profile
          </Button>
          <Button size="lg" rightIcon={<Heart className="h-5 w-5" />}>
            Favorite
          </Button>
        </div>
      </div>
    </div>
  ),
}

export const IconButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Icon Button Variants</h3>
        <div className="flex gap-2">
          <Button variant="primary" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="destructive" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  ),
}

export const ButtonGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Button Group - Primary</h3>
        <div className="inline-flex -space-x-px">
          <Button className="rounded-r-none">Previous</Button>
          <Button className="rounded-none border-x-0">Current</Button>
          <Button className="rounded-l-none">Next</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Button Group - Outline</h3>
        <div className="inline-flex -space-x-px">
          <Button variant="outline" className="rounded-r-none">
            Cut
          </Button>
          <Button variant="outline" className="rounded-none border-x-0">
            Copy
          </Button>
          <Button variant="outline" className="rounded-l-none">
            Paste
          </Button>
        </div>
      </div>
    </div>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Form Actions</h3>
        <div className="flex gap-2">
          <Button variant="primary">Save Changes</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Destructive Action</h3>
        <div className="flex gap-2">
          <Button variant="destructive" leftIcon={<Trash2 className="h-4 w-4" />}>
            Delete Account
          </Button>
          <Button variant="ghost">Keep Account</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Navigation</h3>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            Back
          </Button>
          <Button variant="primary" size="sm" rightIcon={<ChevronRight className="h-3 w-3" />}>
            Continue
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Social Actions</h3>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" leftIcon={<Heart className="h-3 w-3" />}>
            Like
          </Button>
          <Button variant="secondary" size="sm" leftIcon={<Share2 className="h-3 w-3" />}>
            Share
          </Button>
        </div>
      </div>
    </div>
  ),
}
