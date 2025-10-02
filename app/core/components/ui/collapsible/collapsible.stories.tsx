import type { Meta, StoryObj } from "@storybook/react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleItem,
  CollapsibleGroup,
  CollapsibleCard,
  SimpleCollapsible,
} from "./collapsible"
import React, { useState } from "react"
import { Button } from "../button"
import { Badge } from "../badge"
import {
  ChevronDown,
  ChevronRight,
  Info,
  Settings,
  User,
  Shield,
  Bell,
  CreditCard,
  Lock,
  HelpCircle,
  FileText,
  Code,
  Database,
  Server,
  Cloud,
  Zap,
  BookOpen,
  MessageCircle,
} from "lucide-react"

const meta = {
  title: "UI/Collapsible",
  component: CollapsibleItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost", "card"],
      description: "The visual style variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the collapsible trigger",
    },
    chevron: {
      control: "boolean",
      description: "Show chevron icon",
    },
  },
} satisfies Meta<typeof CollapsibleItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <div className="w-[400px]">
        <CollapsibleItem title="Click to expand">
          <p className="text-muted-foreground text-sm">
            This is the collapsible content. It can contain any React components or HTML elements.
            The content is hidden by default and revealed when the user clicks on the trigger.
          </p>
        </CollapsibleItem>
      </div>
    )
  },
}

export const WithIcon: Story = {
  render: () => {
    return (
      <div className="w-[400px]">
        <CollapsibleItem title="Settings" icon={<Settings className="h-4 w-4" />}>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Dark mode</span>
              <span className="text-muted-foreground text-sm">Off</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Notifications</span>
              <span className="text-muted-foreground text-sm">On</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Auto-save</span>
              <span className="text-muted-foreground text-sm">Every 5 minutes</span>
            </div>
          </div>
        </CollapsibleItem>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    return (
      <div className="w-[400px] space-y-4">
        <CollapsibleItem size="sm" title="Small size">
          <p className="text-muted-foreground text-sm">
            This collapsible uses the small size variant.
          </p>
        </CollapsibleItem>

        <CollapsibleItem size="md" title="Medium size (default)">
          <p className="text-muted-foreground text-sm">
            This collapsible uses the medium size variant.
          </p>
        </CollapsibleItem>

        <CollapsibleItem size="lg" title="Large size">
          <p className="text-muted-foreground text-sm">
            This collapsible uses the large size variant.
          </p>
        </CollapsibleItem>
      </div>
    )
  },
}

export const Variants: Story = {
  render: () => {
    return (
      <div className="w-[400px] space-y-4">
        <CollapsibleItem variant="default" title="Default variant">
          <p className="text-muted-foreground text-sm">
            This uses the default variant with border and rounded corners.
          </p>
        </CollapsibleItem>

        <CollapsibleItem variant="ghost" title="Ghost variant">
          <p className="text-muted-foreground text-sm">
            This uses the ghost variant with no border.
          </p>
        </CollapsibleItem>

        <CollapsibleItem variant="card" title="Card variant">
          <p className="text-muted-foreground text-sm">
            This uses the card variant with shadow and background.
          </p>
        </CollapsibleItem>
      </div>
    )
  },
}

export const CollapsibleCards: Story = {
  render: () => {
    return (
      <div className="w-[500px] space-y-4">
        <CollapsibleCard
          title="Premium Plan"
          description="Full access to all features"
          badge={<Badge variant="secondary">Popular</Badge>}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="text-primary h-4 w-4" />
              <span className="text-sm">Unlimited projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="text-primary h-4 w-4" />
              <span className="text-sm">100GB cloud storage</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-primary h-4 w-4" />
              <span className="text-sm">Priority support</span>
            </div>
            <Button className="mt-4 w-full">Get Started</Button>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Basic Plan" description="Perfect for getting started">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="text-muted-foreground h-4 w-4" />
              <span className="text-sm">5 projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="text-muted-foreground h-4 w-4" />
              <span className="text-sm">10GB storage</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="text-muted-foreground h-4 w-4" />
              <span className="text-sm">Email support</span>
            </div>
            <Button variant="outline" className="mt-4 w-full">
              Try Free
            </Button>
          </div>
        </CollapsibleCard>
      </div>
    )
  },
}

export const CollapsibleGroupExample: Story = {
  render: () => {
    return (
      <div className="w-[500px]">
        <h3 className="mb-4 text-lg font-semibold">Frequently Asked Questions</h3>
        <CollapsibleGroup>
          <CollapsibleItem
            variant="default"
            title="What payment methods do you accept?"
            icon={<CreditCard className="h-4 w-4" />}
          >
            <p className="text-muted-foreground text-sm">
              We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and
              bank transfers for enterprise customers.
            </p>
          </CollapsibleItem>

          <CollapsibleItem
            variant="default"
            title="Can I cancel my subscription anytime?"
            icon={<HelpCircle className="h-4 w-4" />}
          >
            <p className="text-muted-foreground text-sm">
              Yes, you can cancel your subscription at any time. Your access will continue until the
              end of your current billing period.
            </p>
          </CollapsibleItem>

          <CollapsibleItem
            variant="default"
            title="Is my data secure?"
            icon={<Lock className="h-4 w-4" />}
          >
            <p className="text-muted-foreground text-sm">
              Absolutely! We use industry-standard encryption and security measures to protect your
              data. All data is encrypted both in transit and at rest.
            </p>
          </CollapsibleItem>

          <CollapsibleItem
            variant="default"
            title="Do you offer a free trial?"
            icon={<Info className="h-4 w-4" />}
          >
            <p className="text-muted-foreground text-sm">
              Yes, we offer a 14-day free trial with full access to all features. No credit card
              required to start.
            </p>
          </CollapsibleItem>
        </CollapsibleGroup>
      </div>
    )
  },
}

export const SimpleCollapsibleExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="w-[400px]">
        <SimpleCollapsible
          trigger={
            <Button variant="outline" className="w-full justify-between">
              <span>View details</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </Button>
          }
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <div className="mt-4 rounded-lg border p-4">
            <h4 className="mb-2 font-medium">Order Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Order ID:</span>
                <span>#12345</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span>Dec 25, 2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <Badge variant="secondary" size="sm">
                  Delivered
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total:</span>
                <span className="font-medium">$249.99</span>
              </div>
            </div>
          </div>
        </SimpleCollapsible>
      </div>
    )
  },
}

export const ControlledExample: Story = {
  render: () => {
    const [openItem, setOpenItem] = useState<string | null>(null)

    return (
      <div className="w-[500px]">
        <div className="mb-4 flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setOpenItem("item1")}>
            Open Item 1
          </Button>
          <Button size="sm" variant="outline" onClick={() => setOpenItem("item2")}>
            Open Item 2
          </Button>
          <Button size="sm" variant="outline" onClick={() => setOpenItem(null)}>
            Close All
          </Button>
        </div>

        <CollapsibleGroup>
          <CollapsibleItem
            title="Controlled Item 1"
            open={openItem === "item1"}
            onOpenChange={(open) => setOpenItem(open ? "item1" : null)}
          >
            <p className="text-muted-foreground text-sm">
              This item is controlled externally. Use the buttons above to control it.
            </p>
          </CollapsibleItem>

          <CollapsibleItem
            title="Controlled Item 2"
            open={openItem === "item2"}
            onOpenChange={(open) => setOpenItem(open ? "item2" : null)}
          >
            <p className="text-muted-foreground text-sm">
              This item is also controlled. Only one can be open at a time.
            </p>
          </CollapsibleItem>
        </CollapsibleGroup>
      </div>
    )
  },
}

export const NestedCollapsibles: Story = {
  render: () => {
    return (
      <div className="w-[500px]">
        <CollapsibleItem
          title="API Documentation"
          icon={<BookOpen className="h-4 w-4" />}
          variant="card"
        >
          <div className="space-y-3">
            <p className="text-muted-foreground mb-4 text-sm">
              Explore our comprehensive API documentation.
            </p>

            <CollapsibleItem
              title="Authentication"
              size="sm"
              variant="ghost"
              icon={<Lock className="h-3 w-3" />}
            >
              <div className="space-y-2 pl-5">
                <code className="bg-muted rounded px-2 py-1 text-xs">POST /api/auth/login</code>
                <p className="text-muted-foreground text-xs">
                  Authenticate using email and password
                </p>
              </div>
            </CollapsibleItem>

            <CollapsibleItem
              title="Users"
              size="sm"
              variant="ghost"
              icon={<User className="h-3 w-3" />}
            >
              <div className="space-y-2 pl-5">
                <code className="bg-muted rounded px-2 py-1 text-xs">GET /api/users</code>
                <p className="text-muted-foreground text-xs">Retrieve a list of all users</p>
              </div>
            </CollapsibleItem>

            <CollapsibleItem
              title="Projects"
              size="sm"
              variant="ghost"
              icon={<Server className="h-3 w-3" />}
            >
              <div className="space-y-2 pl-5">
                <code className="bg-muted rounded px-2 py-1 text-xs">GET /api/projects</code>
                <p className="text-muted-foreground text-xs">Manage your projects via API</p>
              </div>
            </CollapsibleItem>
          </div>
        </CollapsibleItem>
      </div>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    return (
      <div className="w-[600px] space-y-8">
        {/* Settings Panel */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Settings</h3>
          <CollapsibleGroup>
            <CollapsibleItem
              variant="card"
              title="Account Settings"
              icon={<User className="h-4 w-4" />}
            >
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border px-3 py-2"
                    defaultValue="user@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Username</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border px-3 py-2"
                    defaultValue="johndoe"
                  />
                </div>
                <Button size="sm">Save Changes</Button>
              </div>
            </CollapsibleItem>

            <CollapsibleItem variant="card" title="Security" icon={<Shield className="h-4 w-4" />}>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Current Password</label>
                  <input type="password" className="mt-1 w-full rounded-md border px-3 py-2" />
                </div>
                <div>
                  <label className="text-sm font-medium">New Password</label>
                  <input type="password" className="mt-1 w-full rounded-md border px-3 py-2" />
                </div>
                <Button size="sm" variant="destructive">
                  Update Password
                </Button>
              </div>
            </CollapsibleItem>

            <CollapsibleItem
              variant="card"
              title="Notifications"
              icon={<Bell className="h-4 w-4" />}
            >
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Email notifications</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Push notifications</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-sm">SMS notifications</span>
                </label>
              </div>
            </CollapsibleItem>
          </CollapsibleGroup>
        </div>

        {/* Code Snippets */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Code Examples</h3>
          <CollapsibleGroup>
            <CollapsibleItem
              variant="default"
              title="React Component"
              icon={<Code className="h-4 w-4" />}
            >
              <pre className="bg-muted overflow-x-auto rounded p-3 text-xs">
                {`import React from 'react'

function MyComponent() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default MyComponent`}
              </pre>
            </CollapsibleItem>

            <CollapsibleItem
              variant="default"
              title="API Request"
              icon={<Server className="h-4 w-4" />}
            >
              <pre className="bg-muted overflow-x-auto rounded p-3 text-xs">
                {`fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))`}
              </pre>
            </CollapsibleItem>
          </CollapsibleGroup>
        </div>

        {/* Product Features */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Product Features</h3>
          <CollapsibleGroup>
            <CollapsibleCard
              title="Analytics Dashboard"
              description="Track your performance metrics"
              badge={
                <Badge variant="default" size="sm">
                  New
                </Badge>
              }
            >
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  Get detailed insights into your business performance with our comprehensive
                  analytics dashboard.
                </p>
                <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                  <li>Real-time data updates</li>
                  <li>Custom report generation</li>
                  <li>Export to CSV/PDF</li>
                  <li>Team collaboration features</li>
                </ul>
              </div>
            </CollapsibleCard>

            <CollapsibleCard title="Advanced Security" description="Enterprise-grade protection">
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  Keep your data safe with our advanced security features.
                </p>
                <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                  <li>Two-factor authentication</li>
                  <li>SSL encryption</li>
                  <li>Regular security audits</li>
                  <li>GDPR compliant</li>
                </ul>
              </div>
            </CollapsibleCard>
          </CollapsibleGroup>
        </div>
      </div>
    )
  },
}

export const WithCustomStyling: Story = {
  render: () => {
    return (
      <div className="w-[500px] space-y-4">
        <CollapsibleItem title="Custom Background" className="bg-primary/5 border-primary/20">
          <p className="text-sm">This collapsible has a custom background color.</p>
        </CollapsibleItem>

        <CollapsibleItem
          title="No Chevron"
          chevron={false}
          icon={
            <ChevronRight className="h-4 w-4 transition-transform data-[state=open]:rotate-90" />
          }
        >
          <p className="text-sm">
            This collapsible uses a custom chevron icon that rotates differently.
          </p>
        </CollapsibleItem>

        <CollapsibleItem
          title="Custom Animation"
          className="transition-shadow duration-300 hover:shadow-lg"
        >
          <p className="text-sm">This collapsible has custom hover effects.</p>
        </CollapsibleItem>
      </div>
    )
  },
}

export const LoadingState: Story = {
  render: () => {
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState<string | null>(null)

    const handleOpen = (open: boolean) => {
      if (open && !content) {
        setLoading(true)
        // Simulate API call
        setTimeout(() => {
          setContent("This content was loaded asynchronously!")
          setLoading(false)
        }, 1500)
      }
    }

    return (
      <div className="w-[400px]">
        <CollapsibleItem title="Click to load content" onOpenChange={handleOpen}>
          {loading ? (
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <div className="border-primary h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
              Loading content...
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">{content || "No content loaded"}</p>
          )}
        </CollapsibleItem>
      </div>
    )
  },
}
