import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { useState } from "react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  VerticalTabs,
  VerticalTabsList,
  VerticalTabsTrigger,
  IconTabsList,
  IconTabsTrigger,
  ScrollableTabs,
  ClosableTabTrigger,
} from "./tabs"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
import { Textarea } from "../textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card/card"
import { Badge } from "../badge"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { Separator } from "../separator/separator"
import { Switch } from "../switch"
import { RadioGroup, RadioGroupItem } from "../radio-group"
import {
  User,
  Settings,
  CreditCard,
  Bell,
  Shield,
  Mail,
  MessageSquare,
  Activity,
  FileText,
  Home,
  BarChart,
  Users,
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Calendar,
  Clock,
  Code,
  Database,
  Terminal,
  GitBranch,
  Plus,
  X,
} from "lucide-react"

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

// Default tabs
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

// Underline variant
export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList variant="underline" className="w-full justify-start">
        <TabsTrigger value="overview" variant="underline">
          Overview
        </TabsTrigger>
        <TabsTrigger value="analytics" variant="underline">
          Analytics
        </TabsTrigger>
        <TabsTrigger value="reports" variant="underline">
          Reports
        </TabsTrigger>
        <TabsTrigger value="notifications" variant="underline">
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-muted-foreground text-xs">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
              <Users className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-muted-foreground text-xs">+180.1% from last month</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View detailed analytics and insights.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Analytics content goes here...</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>Generate and download reports.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Reports content goes here...</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage your notification preferences.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Notification settings go here...</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

// Pills variant
export const Pills: Story = {
  render: () => (
    <Tabs defaultValue="all" className="w-full">
      <TabsList variant="pills">
        <TabsTrigger value="all" variant="pills">
          All
        </TabsTrigger>
        <TabsTrigger value="active" variant="pills">
          Active
        </TabsTrigger>
        <TabsTrigger value="draft" variant="pills">
          Draft
        </TabsTrigger>
        <TabsTrigger value="archived" variant="pills">
          Archived
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="space-y-2">
          {["Project Alpha", "Project Beta", "Project Gamma"].map((project) => (
            <Card key={project}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">{project}</CardTitle>
                  <Badge>Active</Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="active">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-sm">Active projects only</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="draft">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-sm">Draft projects only</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="archived">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-sm">Archived projects only</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

// Ghost variant
export const Ghost: Story = {
  render: () => (
    <Tabs defaultValue="files" className="w-full">
      <TabsList variant="ghost">
        <TabsTrigger value="files" variant="ghost">
          Files
        </TabsTrigger>
        <TabsTrigger value="commits" variant="ghost">
          Commits
        </TabsTrigger>
        <TabsTrigger value="branches" variant="ghost">
          Branches
        </TabsTrigger>
        <TabsTrigger value="tags" variant="ghost">
          Tags
        </TabsTrigger>
      </TabsList>
      <TabsContent value="files">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-sm">
                <FileText className="h-4 w-4" />
                <span>README.md</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <FileText className="h-4 w-4" />
                <span>package.json</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <FileText className="h-4 w-4" />
                <span>tsconfig.json</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="commits">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-sm">Commit history</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="branches">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-sm">Branch list</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tags">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-sm">Tag list</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Small</p>
        <Tabs defaultValue="tab1">
          <TabsList size="sm">
            <TabsTrigger value="tab1" size="sm">
              Tab 1
            </TabsTrigger>
            <TabsTrigger value="tab2" size="sm">
              Tab 2
            </TabsTrigger>
            <TabsTrigger value="tab3" size="sm">
              Tab 3
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Medium (default)</p>
        <Tabs defaultValue="tab1">
          <TabsList size="md">
            <TabsTrigger value="tab1" size="md">
              Tab 1
            </TabsTrigger>
            <TabsTrigger value="tab2" size="md">
              Tab 2
            </TabsTrigger>
            <TabsTrigger value="tab3" size="md">
              Tab 3
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Large</p>
        <Tabs defaultValue="tab1">
          <TabsList size="lg">
            <TabsTrigger value="tab1" size="lg">
              Tab 1
            </TabsTrigger>
            <TabsTrigger value="tab2" size="lg">
              Tab 2
            </TabsTrigger>
            <TabsTrigger value="tab3" size="lg">
              Tab 3
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  ),
}

// Full width tabs
export const FullWidth: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-full">
      <TabsList fullWidth>
        <TabsTrigger value="tab1" fullWidth>
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" fullWidth>
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3" fullWidth>
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Card>
          <CardContent className="pt-6">
            <p>Content for Tab 1</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab2">
        <Card>
          <CardContent className="pt-6">
            <p>Content for Tab 2</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab3">
        <Card>
          <CardContent className="pt-6">
            <p>Content for Tab 3</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

// Vertical tabs
export const Vertical: Story = {
  render: () => (
    <VerticalTabs defaultValue="general" className="w-full">
      <VerticalTabsList className="w-[200px]">
        <VerticalTabsTrigger value="general">General</VerticalTabsTrigger>
        <VerticalTabsTrigger value="security">Security</VerticalTabsTrigger>
        <VerticalTabsTrigger value="notifications">Notifications</VerticalTabsTrigger>
        <VerticalTabsTrigger value="billing">Billing</VerticalTabsTrigger>
        <VerticalTabsTrigger value="advanced">Advanced</VerticalTabsTrigger>
      </VerticalTabsList>
      <div className="flex-1">
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your account settings and preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Display Name</Label>
                <Input placeholder="Enter your display name" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="Enter your email" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your security preferences.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-factor authentication</p>
                    <p className="text-muted-foreground text-sm">Add an extra layer of security</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose what notifications you receive.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Notification settings...</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Manage your billing and payment methods.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Billing details...</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>Configure advanced options.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Advanced options...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </VerticalTabs>
  ),
}

// Icon tabs
export const IconTabs: Story = {
  render: () => (
    <Tabs defaultValue="home" className="w-full">
      <IconTabsList>
        <IconTabsTrigger value="home">
          <Home className="h-4 w-4" />
        </IconTabsTrigger>
        <IconTabsTrigger value="users">
          <Users className="h-4 w-4" />
        </IconTabsTrigger>
        <IconTabsTrigger value="settings">
          <Settings className="h-4 w-4" />
        </IconTabsTrigger>
        <IconTabsTrigger value="notifications">
          <Bell className="h-4 w-4" />
        </IconTabsTrigger>
      </IconTabsList>
      <TabsContent value="home">
        <Card>
          <CardContent className="pt-6">
            <p>Home content</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="users">
        <Card>
          <CardContent className="pt-6">
            <p>Users content</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardContent className="pt-6">
            <p>Settings content</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications">
        <Card>
          <CardContent className="pt-6">
            <p>Notifications content</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

// With icons and text
export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="dashboard" className="w-full">
      <TabsList>
        <TabsTrigger value="dashboard">
          <BarChart className="mr-2 h-4 w-4" />
          Dashboard
        </TabsTrigger>
        <TabsTrigger value="customers">
          <Users className="mr-2 h-4 w-4" />
          Customers
        </TabsTrigger>
        <TabsTrigger value="products">
          <Package className="mr-2 h-4 w-4" />
          Products
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <Card>
          <CardContent className="pt-6">
            <p>Dashboard content with charts and metrics</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="customers">
        <Card>
          <CardContent className="pt-6">
            <p>Customer list and management</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="products">
        <Card>
          <CardContent className="pt-6">
            <p>Product inventory and management</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardContent className="pt-6">
            <p>Application settings</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

// Scrollable tabs
export const Scrollable: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <ScrollableTabs>
        <Tabs defaultValue="tab1">
          <TabsList className="w-max">
            {Array.from({ length: 10 }, (_, i) => (
              <TabsTrigger key={i} value={`tab${i + 1}`}>
                Tab {i + 1}
              </TabsTrigger>
            ))}
          </TabsList>
          {Array.from({ length: 10 }, (_, i) => (
            <TabsContent key={i} value={`tab${i + 1}`}>
              <Card>
                <CardContent className="pt-6">
                  <p>Content for Tab {i + 1}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </ScrollableTabs>
    </div>
  ),
}

// Closable tabs
export const ClosableTabs: Story = {
  render: () => {
    const [tabs, setTabs] = useState([
      { id: "tab1", label: "Tab 1" },
      { id: "tab2", label: "Tab 2" },
      { id: "tab3", label: "Tab 3" },
    ])
    const [activeTab, setActiveTab] = useState("tab1")

    const removeTab = (tabId: string) => {
      const newTabs = tabs.filter((tab) => tab.id !== tabId)
      setTabs(newTabs)
      if (activeTab === tabId && newTabs.length > 0) {
        setActiveTab(newTabs[0].id)
      }
    }

    const addTab = () => {
      const newId = `tab${tabs.length + 1}`
      setTabs([...tabs, { id: newId, label: `Tab ${tabs.length + 1}` }])
      setActiveTab(newId)
    }

    return (
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center gap-2">
          <TabsList>
            {tabs.map((tab) => (
              <ClosableTabTrigger
                key={tab.id}
                value={tab.id}
                onClose={tabs.length > 1 ? () => removeTab(tab.id) : undefined}
              >
                {tab.label}
              </ClosableTabTrigger>
            ))}
          </TabsList>
          <Button size="sm" variant="ghost" onClick={addTab}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <Card>
              <CardContent className="pt-6">
                <p>Content for {tab.label}</p>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    )
  },
}

// Disabled tabs
export const DisabledTabs: Story = {
  render: () => (
    <Tabs defaultValue="enabled1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="enabled1">Enabled</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="enabled2">Also Enabled</TabsTrigger>
      </TabsList>
      <TabsContent value="enabled1">
        <Card>
          <CardContent className="pt-6">
            <p>This tab is enabled and can be selected.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="enabled2">
        <Card>
          <CardContent className="pt-6">
            <p>This tab is also enabled.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

// Settings page example
export const SettingsPage: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList variant="underline" className="w-full justify-start">
          <TabsTrigger value="profile" variant="underline">
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="account" variant="underline">
            <Settings className="mr-2 h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="appearance" variant="underline">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="billing" variant="underline">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="security" variant="underline">
            <Shield className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Button>Change Avatar</Button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input placeholder="Doe" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Bio</Label>
                <Textarea placeholder="Tell us about yourself" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Account settings content...</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Notification settings...</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing & Subscription</CardTitle>
              <CardDescription>Manage your subscription and payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Billing information...</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Keep your account secure</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Security options...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

// Code editor tabs
export const CodeEditor: Story = {
  render: () => (
    <div className="w-full">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-normal">Code Editor</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="index.ts" className="w-full">
            <div className="border-b px-3">
              <TabsList variant="underline" className="h-9 p-0">
                <TabsTrigger value="index.ts" variant="underline" className="h-9">
                  <Code className="mr-2 h-3 w-3" />
                  index.ts
                </TabsTrigger>
                <TabsTrigger value="styles.css" variant="underline" className="h-9">
                  <FileText className="mr-2 h-3 w-3" />
                  styles.css
                </TabsTrigger>
                <TabsTrigger value="package.json" variant="underline" className="h-9">
                  <FileText className="mr-2 h-3 w-3" />
                  package.json
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="index.ts" className="m-0 p-4">
              <pre className="text-sm">
                <code>{`export function hello(name: string) {
  return \`Hello, \${name}!\`
}`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="styles.css" className="m-0 p-4">
              <pre className="text-sm">
                <code>{`.container {
  max-width: 1200px;
  margin: 0 auto;
}`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="package.json" className="m-0 p-4">
              <pre className="text-sm">
                <code>{`{
  "name": "my-app",
  "version": "1.0.0"
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  ),
}
