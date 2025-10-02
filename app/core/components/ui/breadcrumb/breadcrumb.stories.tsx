import type { Meta, StoryObj } from "@storybook/react"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbDropdown,
  ResponsiveBreadcrumb,
} from "./breadcrumb"
import {
  Home,
  ChevronRight,
  Settings,
  Users,
  FileText,
  Package,
  ShoppingCart,
  CreditCard,
  User,
} from "lucide-react"
import { Button } from "../button"

const meta = {
  title: "UI/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center gap-1">
            <Home className="h-4 w-4" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/settings" className="flex items-center gap-1">
            <Settings className="h-4 w-4" />
            Settings
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-1">
            <User className="h-4 w-4" />
            Profile
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const SeparatorTypes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Chevron (default)</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="chevron" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="chevron" />
            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <p className="text-muted-foreground mb-2 text-sm">Slash</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <p className="text-muted-foreground mb-2 text-sm">Arrow</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="arrow" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="arrow" />
            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <p className="text-muted-foreground mb-2 text-sm">Dot</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="dot" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="dot" />
            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
}

export const WithDropdown: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbDropdown
            items={[
              { href: "/products", label: "Products" },
              { href: "/categories", label: "Categories" },
              { href: "/brands", label: "Brands" },
            ]}
          />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/electronics">Electronics</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Laptops</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const Responsive: Story = {
  render: () => {
    const items = [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/electronics", label: "Electronics" },
      { href: "/computers", label: "Computers" },
      { href: "/laptops", label: "Laptops" },
      { label: "Gaming Laptops", current: true },
    ]

    return (
      <div className="space-y-6">
        <div>
          <p className="text-muted-foreground mb-2 text-sm">Max 3 items (with dropdown)</p>
          <ResponsiveBreadcrumb items={items} maxItems={3} />
        </div>

        <div>
          <p className="text-muted-foreground mb-2 text-sm">Max 4 items</p>
          <ResponsiveBreadcrumb items={items} maxItems={4} />
        </div>

        <div>
          <p className="text-muted-foreground mb-2 text-sm">All items shown</p>
          <ResponsiveBreadcrumb items={items} maxItems={10} />
        </div>
      </div>
    )
  },
}

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Start</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <span className="text-primary">→</span>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/middle">Middle</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <span className="text-primary">→</span>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>End</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const LongLabels: Story = {
  render: () => (
    <div className="max-w-2xl">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/projects">Project Management System</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/projects/123">
              Q4 2024 Marketing Campaign Planning and Execution
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Task Details and Assignment Overview</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">E-commerce Store</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-1">
                <Home className="h-3.5 w-3.5" />
                Store
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories/clothing">Clothing</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories/clothing/mens">Men's</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>T-Shirts</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Documentation Site</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/guide">Guide</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/guide/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Admin Dashboard</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/users" className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5" />
                Users
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit User #1234</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">File Explorer</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Root</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/documents">Documents</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/documents/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/documents/projects/2024">2024</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbItem>
              <BreadcrumbPage>Q4-Report.pdf</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Checkout Process</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/cart" className="flex items-center gap-1">
                <ShoppingCart className="h-3.5 w-3.5" />
                Cart
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/checkout">Shipping</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="flex items-center gap-1">
                <CreditCard className="h-3.5 w-3.5" />
                Payment
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
}

export const InPageHeader: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Laptop Pro Max</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-bold">Laptop Pro Max</h1>
        <p className="text-muted-foreground mt-2">High-performance laptop for professionals</p>
      </div>

      <div className="rounded-lg border p-6">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/settings/account">Account</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Security</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Security Settings</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Manage your account security and authentication methods
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="primary">Change Password</Button>
            <Button variant="outline">Enable 2FA</Button>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const WithActions: Story = {
  render: () => (
    <div className="flex items-center justify-between">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/project/123">Website Redesign</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Tasks</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          Export
        </Button>
        <Button variant="primary" size="sm">
          Add Task
        </Button>
      </div>
    </div>
  ),
}

export const Truncated: Story = {
  render: () => {
    const longItems = [
      { href: "/", label: "Home" },
      {
        href: "/very-long-category-name",
        label: "Very Long Category Name That Might Break Layout",
      },
      { href: "/another-long-name", label: "Another Extremely Long Subcategory Name" },
      { href: "/products", label: "Products" },
      { label: "Final Product With A Really Long Name That Goes On And On", current: true },
    ]

    return (
      <div className="max-w-xl">
        <ResponsiveBreadcrumb items={longItems} maxItems={3} separator="slash" />
      </div>
    )
  },
}
