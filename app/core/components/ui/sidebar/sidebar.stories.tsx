import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarSeparator,
  SidebarCollapsible,
  SidebarLayout,
  SidebarInset,
} from "./sidebar"
import { Button } from "../button"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { Badge } from "../badge"
import { Input } from "../input"
import {
  Home,
  Search,
  Users,
  Settings,
  FileText,
  Calendar,
  Mail,
  MessageSquare,
  Activity,
  BarChart3,
  Layers,
  Package,
  ShoppingBag,
  Tag,
  CreditCard,
  TrendingUp,
  DollarSign,
  PieChart,
  HelpCircle,
  LogOut,
  ChevronDown,
  Plus,
  Bell,
  Star,
  Archive,
  Trash2,
  Send,
  Inbox,
  File,
  Folder,
  FolderOpen,
  Download,
  Upload,
  Share2,
  Lock,
  Unlock,
  Shield,
  Key,
  Database,
  Server,
  Cloud,
  Cpu,
  Monitor,
  Smartphone,
  Tablet,
  Watch,
  Headphones,
  Camera,
  Mic,
  Volume2,
  Music,
  Video,
  Image as ImageIcon,
  Map,
  Navigation,
  Compass,
  Globe,
  User,
  Building,
} from "lucide-react"

const meta: Meta<typeof Sidebar> = {
  title: "UI/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Sidebar>

// Default sidebar
export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <SidebarLayout>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-lg">
                <Layers className="h-4 w-4" />
              </div>
              <span className="font-semibold">My App</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarItem isActive icon={<Home className="h-4 w-4" />}>
                Dashboard
              </SidebarItem>
              <SidebarItem icon={<Users className="h-4 w-4" />}>Users</SidebarItem>
              <SidebarItem icon={<FileText className="h-4 w-4" />}>Documents</SidebarItem>
              <SidebarItem icon={<Settings className="h-4 w-4" />}>Settings</SidebarItem>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-muted-foreground text-xs">john@example.com</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="flex h-full items-center justify-center">
            <SidebarTrigger />
            <div className="text-center">
              <h1 className="text-2xl font-bold">Main Content Area</h1>
              <p className="text-muted-foreground">Your application content goes here</p>
            </div>
          </div>
        </SidebarInset>
      </SidebarLayout>
    </SidebarProvider>
  ),
}

// Collapsible sidebar
export const Collapsible: Story = {
  render: () => (
    <SidebarProvider defaultCollapsed={false}>
      <SidebarLayout>
        <Sidebar collapsible>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-lg">
                <Layers className="h-4 w-4" />
              </div>
              <span className="font-semibold">Collapsible</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarItem isActive icon={<Home className="h-4 w-4" />}>
                Home
              </SidebarItem>
              <SidebarItem icon={<Search className="h-4 w-4" />}>Search</SidebarItem>
              <SidebarItem
                icon={<Bell className="h-4 w-4" />}
                badge={<Badge variant="destructive">3</Badge>}
              >
                Notifications
              </SidebarItem>
              <SidebarItem icon={<Mail className="h-4 w-4" />} badge={<Badge>12</Badge>}>
                Messages
              </SidebarItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="p-6">
            <h2 className="text-2xl font-bold">Collapsible Sidebar</h2>
            <p className="text-muted-foreground">
              Click the toggle button to collapse/expand the sidebar
            </p>
          </div>
        </SidebarInset>
      </SidebarLayout>
    </SidebarProvider>
  ),
}

// Wide variant
export const WideVariant: Story = {
  render: () => (
    <SidebarProvider variant="wide">
      <SidebarLayout>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-lg">
                <Layers className="h-4 w-4" />
              </div>
              <span className="font-semibold">Wide Sidebar</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
              <SidebarItem isActive icon={<Home className="h-4 w-4" />}>
                Dashboard Overview
              </SidebarItem>
              <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>
                Analytics & Reports
              </SidebarItem>
              <SidebarItem icon={<Users className="h-4 w-4" />}>User Management</SidebarItem>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Resources</SidebarGroupLabel>
              <SidebarItem icon={<FileText className="h-4 w-4" />}>
                Documentation Center
              </SidebarItem>
              <SidebarItem icon={<HelpCircle className="h-4 w-4" />}>Help & Support</SidebarItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="p-6">
            <h2 className="text-2xl font-bold">Wide Sidebar Variant</h2>
            <p className="text-muted-foreground">This sidebar has more space for longer labels</p>
          </div>
        </SidebarInset>
      </SidebarLayout>
    </SidebarProvider>
  ),
}

// With groups and labels
export const WithGroups: Story = {
  render: () => (
    <SidebarProvider>
      <SidebarLayout>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <Package className="h-4 w-4" />
              </div>
              <span className="font-semibold">Product Suite</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarItem isActive icon={<Home className="h-4 w-4" />}>
                Home
              </SidebarItem>
              <SidebarItem icon={<Activity className="h-4 w-4" />}>Activity</SidebarItem>
              <SidebarItem icon={<TrendingUp className="h-4 w-4" />}>Trends</SidebarItem>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Management</SidebarGroupLabel>
              <SidebarItem icon={<Users className="h-4 w-4" />}>Team</SidebarItem>
              <SidebarItem icon={<Package className="h-4 w-4" />}>Products</SidebarItem>
              <SidebarItem icon={<ShoppingBag className="h-4 w-4" />}>Orders</SidebarItem>
              <SidebarItem icon={<Tag className="h-4 w-4" />}>Tags</SidebarItem>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Analytics</SidebarGroupLabel>
              <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>Reports</SidebarItem>
              <SidebarItem icon={<PieChart className="h-4 w-4" />}>Insights</SidebarItem>
              <SidebarItem icon={<DollarSign className="h-4 w-4" />}>Revenue</SidebarItem>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarItem icon={<Settings className="h-4 w-4" />}>Settings</SidebarItem>
            <SidebarItem icon={<LogOut className="h-4 w-4" />}>Logout</SidebarItem>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="p-6">
            <h2 className="text-2xl font-bold">Grouped Sidebar</h2>
            <p className="text-muted-foreground">Organize items with groups and labels</p>
          </div>
        </SidebarInset>
      </SidebarLayout>
    </SidebarProvider>
  ),
}

// With collapsible sections
export const WithCollapsibleSections: Story = {
  render: () => (
    <SidebarProvider>
      <SidebarLayout>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <Folder className="h-4 w-4" />
              </div>
              <span className="font-semibold">File Manager</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarItem icon={<Home className="h-4 w-4" />}>Home</SidebarItem>
              <SidebarCollapsible
                title="Documents"
                icon={<FileText className="h-4 w-4" />}
                defaultOpen
              >
                <SidebarItem icon={<File className="h-4 w-4" />}>Contracts</SidebarItem>
                <SidebarItem icon={<File className="h-4 w-4" />}>Invoices</SidebarItem>
                <SidebarItem icon={<File className="h-4 w-4" />}>Reports</SidebarItem>
              </SidebarCollapsible>
              <SidebarCollapsible title="Media" icon={<ImageIcon className="h-4 w-4" />}>
                <SidebarItem icon={<ImageIcon className="h-4 w-4" />}>Images</SidebarItem>
                <SidebarItem icon={<Video className="h-4 w-4" />}>Videos</SidebarItem>
                <SidebarItem icon={<Music className="h-4 w-4" />}>Audio</SidebarItem>
              </SidebarCollapsible>
              <SidebarCollapsible title="Archives" icon={<Archive className="h-4 w-4" />}>
                <SidebarItem icon={<Folder className="h-4 w-4" />}>2023</SidebarItem>
                <SidebarItem icon={<Folder className="h-4 w-4" />}>2022</SidebarItem>
                <SidebarItem icon={<Folder className="h-4 w-4" />}>2021</SidebarItem>
              </SidebarCollapsible>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarItem icon={<Download className="h-4 w-4" />}>Downloads</SidebarItem>
              <SidebarItem icon={<Upload className="h-4 w-4" />}>Uploads</SidebarItem>
              <SidebarItem icon={<Share2 className="h-4 w-4" />}>Shared</SidebarItem>
              <SidebarItem icon={<Trash2 className="h-4 w-4" />}>Trash</SidebarItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="p-6">
            <h2 className="text-2xl font-bold">Collapsible Sections</h2>
            <p className="text-muted-foreground">Organize content with expandable sections</p>
          </div>
        </SidebarInset>
      </SidebarLayout>
    </SidebarProvider>
  ),
}

// Email client example
export const EmailClient: Story = {
  render: () => {
    const [selectedFolder, setSelectedFolder] = useState("inbox")

    return (
      <SidebarProvider>
        <SidebarLayout>
          <Sidebar>
            <SidebarHeader>
              <Button className="w-full" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Compose
              </Button>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarItem
                  isActive={selectedFolder === "inbox"}
                  icon={<Inbox className="h-4 w-4" />}
                  badge={<Badge variant="destructive">5</Badge>}
                  onClick={() => setSelectedFolder("inbox")}
                >
                  Inbox
                </SidebarItem>
                <SidebarItem
                  isActive={selectedFolder === "starred"}
                  icon={<Star className="h-4 w-4" />}
                  onClick={() => setSelectedFolder("starred")}
                >
                  Starred
                </SidebarItem>
                <SidebarItem
                  isActive={selectedFolder === "sent"}
                  icon={<Send className="h-4 w-4" />}
                  onClick={() => setSelectedFolder("sent")}
                >
                  Sent
                </SidebarItem>
                <SidebarItem
                  isActive={selectedFolder === "drafts"}
                  icon={<FileText className="h-4 w-4" />}
                  badge={<Badge variant="secondary">2</Badge>}
                  onClick={() => setSelectedFolder("drafts")}
                >
                  Drafts
                </SidebarItem>
                <SidebarItem
                  isActive={selectedFolder === "archive"}
                  icon={<Archive className="h-4 w-4" />}
                  onClick={() => setSelectedFolder("archive")}
                >
                  Archive
                </SidebarItem>
                <SidebarItem
                  isActive={selectedFolder === "trash"}
                  icon={<Trash2 className="h-4 w-4" />}
                  onClick={() => setSelectedFolder("trash")}
                >
                  Trash
                </SidebarItem>
              </SidebarGroup>
              <SidebarSeparator />
              <SidebarGroup>
                <SidebarGroupLabel>Labels</SidebarGroupLabel>
                <SidebarItem icon={<div className="h-3 w-3 rounded-full bg-red-500" />}>
                  Important
                </SidebarItem>
                <SidebarItem icon={<div className="h-3 w-3 rounded-full bg-blue-500" />}>
                  Work
                </SidebarItem>
                <SidebarItem icon={<div className="h-3 w-3 rounded-full bg-green-500" />}>
                  Personal
                </SidebarItem>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <div className="space-y-2">
                <div className="text-muted-foreground text-xs">Storage</div>
                <div className="bg-secondary h-2 rounded-full">
                  <div className="bg-primary h-2 w-3/4 rounded-full" />
                </div>
                <div className="text-muted-foreground text-xs">7.5 GB of 10 GB used</div>
              </div>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <div className="p-6">
              <h2 className="text-2xl font-bold capitalize">{selectedFolder}</h2>
              <p className="text-muted-foreground">Email messages would appear here</p>
            </div>
          </SidebarInset>
        </SidebarLayout>
      </SidebarProvider>
    )
  },
}
