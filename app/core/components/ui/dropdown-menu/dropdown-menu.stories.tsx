import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuShortcut,
  DropdownMenuGroup,
} from "./dropdown-menu"
import { Button } from "../button"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  ChevronDown,
  MoreHorizontal,
  MoreVertical,
  Copy,
  Scissors,
  Clipboard,
  Trash2,
  Download,
  Share,
  Edit,
  Archive,
  Eye,
  EyeOff,
  Star,
  Heart,
  Flag,
  Bookmark,
  Send,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Check,
  X,
  Moon,
  Sun,
  Monitor,
  Laptop,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Lock,
  Unlock,
  RefreshCw,
  RotateCw,
  Filter,
  SortAsc,
  SortDesc,
  Search,
  Folder,
  File,
  FileText,
  Image,
  Film,
  Music,
  Mic,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Bluetooth,
  Battery,
  BatteryCharging,
} from "lucide-react"

const meta = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Open Menu
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Billing
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Team
          <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Team
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Keyboard className="mr-2 h-4 w-4" />
          Keyboard shortcuts
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Users className="mr-2 h-4 w-4" />
          Team
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UserPlus className="mr-2 h-4 w-4" />
          Invite users
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Plus className="mr-2 h-4 w-4" />
          New Team
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          Support
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          API (coming soon)
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithCheckboxes: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true)
    const [showActivityBar, setShowActivityBar] = useState(false)
    const [showPanel, setShowPanel] = useState(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            View
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            <Monitor className="mr-2 h-4 w-4" />
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
            <Zap className="mr-2 h-4 w-4" />
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
            <Laptop className="mr-2 h-4 w-4" />
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithRadioGroup: Story = {
  render: () => {
    const [theme, setTheme] = useState("system")
    const [fontSize, setFontSize] = useState("medium")

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Preferences
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="light">
              <Sun className="mr-2 h-4 w-4" />
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              <Monitor className="mr-2 h-4 w-4" />
              System
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Font Size</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={fontSize} onValueChange={setFontSize}>
            <DropdownMenuRadioItem value="small">Small</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="large">Large</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithSubmenus: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <File className="mr-2 h-4 w-4" />
          File
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          New File
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Folder className="mr-2 h-4 w-4" />
          New Folder
          <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Share className="mr-2 h-4 w-4" />
            Share
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageSquare className="mr-2 h-4 w-4" />
              Message
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusCircle className="mr-2 h-4 w-4" />
              More...
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Download className="mr-2 h-4 w-4" />
            Download As
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <FileText className="mr-2 h-4 w-4" />
              PDF
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Image className="mr-2 h-4 w-4" />
              PNG
            </DropdownMenuItem>
            <DropdownMenuItem>
              <File className="mr-2 h-4 w-4" />
              CSV
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Archive className="mr-2 h-4 w-4" />
          Archive
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
          <DropdownMenuShortcut>⇧⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const UserAccountMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm leading-none font-medium">John Doe</p>
            <p className="text-muted-foreground text-xs leading-none">john.doe@example.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            Team
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              Invite users
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                Message
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                More...
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          Support
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          API
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const MoreActionsMenu: Story = {
  render: () => (
    <div className="flex gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
            <span className="sr-only">More actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share className="mr-2 h-4 w-4" />
            Share
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
            <span className="sr-only">More actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Star className="mr-2 h-4 w-4" />
            Favorite
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bookmark className="mr-2 h-4 w-4" />
            Bookmark
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Flag className="mr-2 h-4 w-4" />
            Report
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

export const TextEditorMenu: Story = {
  render: () => {
    const [bold, setBold] = useState(false)
    const [italic, setItalic] = useState(false)
    const [underline, setUnderline] = useState(false)
    const [alignment, setAlignment] = useState("left")

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Format
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Text Formatting</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={bold} onCheckedChange={setBold}>
            <Bold className="mr-2 h-4 w-4" />
            Bold
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={italic} onCheckedChange={setItalic}>
            <Italic className="mr-2 h-4 w-4" />
            Italic
            <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={underline} onCheckedChange={setUnderline}>
            <Underline className="mr-2 h-4 w-4" />
            Underline
            <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Alignment</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={alignment} onValueChange={setAlignment}>
            <DropdownMenuRadioItem value="left">
              <AlignLeft className="mr-2 h-4 w-4" />
              Align Left
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="center">
              <AlignCenter className="mr-2 h-4 w-4" />
              Align Center
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">
              <AlignRight className="mr-2 h-4 w-4" />
              Align Right
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="justify">
              <AlignJustify className="mr-2 h-4 w-4" />
              Justify
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const ComplexMenu: Story = {
  render: () => {
    const [viewMode, setViewMode] = useState("grid")
    const [sortBy, setSortBy] = useState("name")
    const [showHidden, setShowHidden] = useState(false)
    const [autoSave, setAutoSave] = useState(true)
    const [notifications, setNotifications] = useState(true)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Options
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72">
          <DropdownMenuLabel>View Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
            <DropdownMenuRadioItem value="grid">Grid View</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="list">List View</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="columns">Column View</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />

          <DropdownMenuLabel>Sort By</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
            <DropdownMenuRadioItem value="name">
              <SortAsc className="mr-2 h-4 w-4" />
              Name
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="date">Date Modified</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="size">
              <SortDesc className="mr-2 h-4 w-4" />
              Size
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />

          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showHidden} onCheckedChange={setShowHidden}>
            <EyeOff className="mr-2 h-4 w-4" />
            Show Hidden Files
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={autoSave} onCheckedChange={setAutoSave}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Auto Save
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={notifications} onCheckedChange={setNotifications}>
            <MessageSquare className="mr-2 h-4 w-4" />
            Notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Shield className="mr-2 h-4 w-4" />
              Privacy
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Lock className="mr-2 h-4 w-4" />
                Lock Screen
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Unlock className="mr-2 h-4 w-4" />
                Clear History
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Shield className="mr-2 h-4 w-4" />
                Privacy Settings
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Globe className="mr-2 h-4 w-4" />
              Language
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>German</DropdownMenuItem>
              <DropdownMenuItem>Japanese</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <RotateCw className="mr-2 h-4 w-4" />
            Reset to Defaults
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      {/* Media Player Controls */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Media Player</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Volume2 className="mr-2 h-4 w-4" />
              Audio
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value="stereo">
              <DropdownMenuRadioItem value="stereo">
                <Volume2 className="mr-2 h-4 w-4" />
                Stereo
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="mono">
                <Mic className="mr-2 h-4 w-4" />
                Mono
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="mute">
                <VolumeX className="mr-2 h-4 w-4" />
                Mute
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Quality</DropdownMenuLabel>
            <DropdownMenuRadioGroup value="high">
              <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="ultra">Ultra</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Network Settings */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Network</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Wifi className="mr-2 h-4 w-4" />
              Connections
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Network Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>
              <Wifi className="mr-2 h-4 w-4" />
              Wi-Fi
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              <Bluetooth className="mr-2 h-4 w-4" />
              Bluetooth
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              <Smartphone className="mr-2 h-4 w-4" />
              Mobile Hotspot
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <WifiOff className="mr-2 h-4 w-4" />
              Airplane Mode
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Network Preferences
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* File Actions */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">File Actions</h3>
        <div className="flex items-center gap-2 rounded border p-2">
          <File className="h-4 w-4" />
          <span className="flex-1 text-sm">document.pdf</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Rename
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy className="mr-2 h-4 w-4" />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Link
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Download
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Archive className="mr-2 h-4 w-4" />
                Archive
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Battery Status */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">System</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Battery className="mr-2 h-4 w-4" />
              Power
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex items-center gap-2">
              <BatteryCharging className="h-4 w-4" />
              Battery: 85%
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value="balanced">
              <DropdownMenuRadioItem value="saver">Battery Saver</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="balanced">Balanced</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="performance">High Performance</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Auto-brightness</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Low Power Mode</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  ),
}
