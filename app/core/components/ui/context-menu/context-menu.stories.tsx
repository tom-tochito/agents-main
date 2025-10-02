import type { Meta, StoryObj } from "@storybook/react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuShortcut,
} from "./context-menu"
import React, { useState } from "react"
import { Button } from "../button"
import {
  Copy,
  Scissors,
  Clipboard,
  Undo2,
  Redo2,
  Bold,
  Italic,
  Underline,
  Plus,
  Save,
  Download,
  Share,
  Settings,
  User,
  LogOut,
  ChevronRight,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Star,
  Heart,
  MessageSquare,
  Mail,
  Phone,
  Calendar,
  Clock,
  Search,
  Filter,
  ArrowUpAZ,
  ArrowDownZA,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from "lucide-react"

const meta = {
  title: "UI/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The trigger element and menu content",
    },
  },
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[200px] w-[400px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Save Page As...
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>Print...</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[200px] w-[400px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click for actions
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Scissors className="mr-2 h-4 w-4" />
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Clipboard className="mr-2 h-4 w-4" />
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Undo2 className="mr-2 h-4 w-4" />
            Undo
            <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Redo2 className="mr-2 h-4 w-4" />
            Redo
            <ContextMenuShortcut>⌘⇧Z</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const WithCheckboxes: Story = {
  render: () => {
    const [showBookmarks, setShowBookmarks] = useState(true)
    const [showFullURLs, setShowFullURLs] = useState(false)

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[200px] w-[400px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click for view options
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
            Show Bookmarks Bar
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showFullURLs} onCheckedChange={setShowFullURLs}>
            Always Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Force Reload
            <ContextMenuShortcut>⌘⇧R</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const WithRadioGroup: Story = {
  render: () => {
    const [alignment, setAlignment] = useState("left")

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[200px] w-[400px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click for alignment options
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Text Alignment</ContextMenuLabel>
          <ContextMenuRadioGroup value={alignment} onValueChange={setAlignment}>
            <ContextMenuRadioItem value="left">
              <AlignLeft className="mr-2 h-4 w-4" />
              Align Left
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="center">
              <AlignCenter className="mr-2 h-4 w-4" />
              Align Center
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="right">
              <AlignRight className="mr-2 h-4 w-4" />
              Align Right
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="justify">
              <AlignJustify className="mr-2 h-4 w-4" />
              Justify
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuItem>Reset to Default</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const WithSubmenus: Story = {
  render: () => {
    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[200px] w-[400px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click for nested menu
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            New File
            <ContextMenuShortcut>⌘N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <FileText className="mr-2 h-4 w-4" />
              Open Recent
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>project-1.tsx</ContextMenuItem>
              <ContextMenuItem>document.pdf</ContextMenuItem>
              <ContextMenuItem>image.png</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Clear Recent Files</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Share className="mr-2 h-4 w-4" />
              Share
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                Email Link
              </ContextMenuItem>
              <ContextMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
              </ContextMenuItem>
              <ContextMenuItem>
                <Copy className="mr-2 h-4 w-4" />
                Copy Link
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
            <ContextMenuShortcut>⌘,</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const WithLabelsAndGroups: Story = {
  render: () => {
    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[200px] w-[400px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click for grouped menu
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Edit</ContextMenuLabel>
          <ContextMenuItem>
            <Undo2 className="mr-2 h-4 w-4" />
            Undo
            <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Redo2 className="mr-2 h-4 w-4" />
            Redo
            <ContextMenuShortcut>⌘Y</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Format</ContextMenuLabel>
          <ContextMenuItem>
            <Bold className="mr-2 h-4 w-4" />
            Bold
            <ContextMenuShortcut>⌘B</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Italic className="mr-2 h-4 w-4" />
            Italic
            <ContextMenuShortcut>⌘I</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Underline className="mr-2 h-4 w-4" />
            Underline
            <ContextMenuShortcut>⌘U</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>View</ContextMenuLabel>
          <ContextMenuItem>
            <Eye className="mr-2 h-4 w-4" />
            Preview
            <ContextMenuShortcut>⌘P</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Search className="mr-2 h-4 w-4" />
            Find
            <ContextMenuShortcut>⌘F</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const WithDestructiveAction: Story = {
  render: () => {
    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[200px] w-[400px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click for file actions
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            Rename
            <ContextMenuShortcut>F2</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            Duplicate
            <ContextMenuShortcut>⌘D</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Archive className="mr-2 h-4 w-4" />
            Archive
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Star className="mr-2 h-4 w-4" />
            Add to Favorites
          </ContextMenuItem>
          <ContextMenuItem>
            <Share className="mr-2 h-4 w-4" />
            Share
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem destructive>
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
            <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const ComplexMenu: Story = {
  render: () => {
    const [view, setView] = useState("grid")
    const [sortBy, setSortBy] = useState("name")
    const [showHidden, setShowHidden] = useState(false)
    const [showSidebar, setShowSidebar] = useState(true)

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[200px] w-[400px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click for complex menu
        </ContextMenuTrigger>
        <ContextMenuContent className="w-72">
          <ContextMenuLabel>View Options</ContextMenuLabel>
          <ContextMenuRadioGroup value={view} onValueChange={setView}>
            <ContextMenuRadioItem value="grid">Grid View</ContextMenuRadioItem>
            <ContextMenuRadioItem value="list">List View</ContextMenuRadioItem>
            <ContextMenuRadioItem value="columns">Column View</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuLabel>Sort By</ContextMenuLabel>
          <ContextMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
            <ContextMenuRadioItem value="name">
              <ArrowUpAZ className="mr-2 h-4 w-4" />
              Name
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="date">
              <Calendar className="mr-2 h-4 w-4" />
              Date Modified
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="size">
              <ArrowDownZA className="mr-2 h-4 w-4" />
              Size
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked={showHidden} onCheckedChange={setShowHidden}>
            <EyeOff className="mr-2 h-4 w-4" />
            Show Hidden Files
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showSidebar} onCheckedChange={setShowSidebar}>
            Show Sidebar
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Plus className="mr-2 h-4 w-4" />
              New
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Document
              </ContextMenuItem>
              <ContextMenuItem>
                <Image className="mr-2 h-4 w-4" />
                Image
              </ContextMenuItem>
              <ContextMenuItem>
                <Video className="mr-2 h-4 w-4" />
                Video
              </ContextMenuItem>
              <ContextMenuItem>
                <Music className="mr-2 h-4 w-4" />
                Audio
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Preferences
            <ContextMenuShortcut>⌘,</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const [playing, setPlaying] = useState(false)
    const [repeat, setRepeat] = useState("off")
    const [quality, setQuality] = useState("1080p")

    return (
      <div className="grid grid-cols-2 gap-8">
        {/* Media Player Context Menu */}
        <div>
          <h3 className="mb-2 text-sm font-medium">Media Player</h3>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md bg-black text-sm text-white">
              Video Player Area
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem onClick={() => setPlaying(!playing)}>
                {playing ? "Pause" : "Play"}
                <ContextMenuShortcut>Space</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Next
                <ContextMenuShortcut>→</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Previous
                <ContextMenuShortcut>←</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuLabel>Playback Speed</ContextMenuLabel>
              <ContextMenuRadioGroup value="1">
                <ContextMenuRadioItem value="0.5">0.5x</ContextMenuRadioItem>
                <ContextMenuRadioItem value="1">Normal</ContextMenuRadioItem>
                <ContextMenuRadioItem value="1.5">1.5x</ContextMenuRadioItem>
                <ContextMenuRadioItem value="2">2x</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
              <ContextMenuSeparator />
              <ContextMenuLabel>Quality</ContextMenuLabel>
              <ContextMenuRadioGroup value={quality} onValueChange={setQuality}>
                <ContextMenuRadioItem value="auto">Auto</ContextMenuRadioItem>
                <ContextMenuRadioItem value="1080p">1080p HD</ContextMenuRadioItem>
                <ContextMenuRadioItem value="720p">720p</ContextMenuRadioItem>
                <ContextMenuRadioItem value="480p">480p</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
              <ContextMenuSeparator />
              <ContextMenuLabel>Repeat</ContextMenuLabel>
              <ContextMenuRadioGroup value={repeat} onValueChange={setRepeat}>
                <ContextMenuRadioItem value="off">Off</ContextMenuRadioItem>
                <ContextMenuRadioItem value="one">Repeat One</ContextMenuRadioItem>
                <ContextMenuRadioItem value="all">Repeat All</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>
        </div>

        {/* Text Editor Context Menu */}
        <div>
          <h3 className="mb-2 text-sm font-medium">Text Editor</h3>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border text-sm">
              Text Editor Area
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                <Scissors className="mr-2 h-4 w-4" />
                Cut
                <ContextMenuShortcut>⌘X</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <Copy className="mr-2 h-4 w-4" />
                Copy
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <Clipboard className="mr-2 h-4 w-4" />
                Paste
                <ContextMenuShortcut>⌘V</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>Format</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>
                    <Bold className="mr-2 h-4 w-4" />
                    Bold
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Italic className="mr-2 h-4 w-4" />
                    Italic
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Underline className="mr-2 h-4 w-4" />
                    Underline
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <Search className="mr-2 h-4 w-4" />
                Find & Replace
                <ContextMenuShortcut>⌘H</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>

        {/* File Manager Context Menu */}
        <div>
          <h3 className="mb-2 text-sm font-medium">File Manager</h3>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-full flex-col items-center justify-center rounded-md border text-sm">
              <FileText className="mb-2 h-8 w-8" />
              document.pdf
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                Open
              </ContextMenuItem>
              <ContextMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Rename
              </ContextMenuItem>
              <ContextMenuItem>
                <Copy className="mr-2 h-4 w-4" />
                Duplicate
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Messages
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Link
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <Lock className="mr-2 h-4 w-4" />
                  Permissions
                </ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>Make Public</ContextMenuItem>
                  <ContextMenuItem>Share with Team</ContextMenuItem>
                  <ContextMenuItem>Make Private</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Download
              </ContextMenuItem>
              <ContextMenuItem>
                <Archive className="mr-2 h-4 w-4" />
                Archive
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem destructive>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>

        {/* User Profile Context Menu */}
        <div>
          <h3 className="mb-2 text-sm font-medium">User Profile</h3>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-full flex-col items-center justify-center rounded-md border text-sm">
              <User className="mb-2 h-8 w-8" />
              John Doe
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuLabel>john.doe@example.com</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <User className="mr-2 h-4 w-4" />
                View Profile
              </ContextMenuItem>
              <ContextMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Message
              </ContextMenuItem>
              <ContextMenuItem>
                <Phone className="mr-2 h-4 w-4" />
                Call
              </ContextMenuItem>
              <ContextMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <Heart className="mr-2 h-4 w-4" />
                Add to Favorites
              </ContextMenuItem>
              <ContextMenuItem destructive>
                <User className="mr-2 h-4 w-4" />
                Block User
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>
    )
  },
}

export const OnCustomElements: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <Button variant="outline" className="w-full">
              Right Click This Button
            </Button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Action 1</ContextMenuItem>
            <ContextMenuItem>Action 2</ContextMenuItem>
            <ContextMenuItem>Action 3</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <h3 className="text-lg font-semibold">Custom Div Element</h3>
              <p className="text-muted-foreground text-sm">Right click anywhere in this area</p>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Edit</ContextMenuItem>
            <ContextMenuItem>Duplicate</ContextMenuItem>
            <ContextMenuItem>Archive</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem destructive>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <ContextMenu>
          <ContextMenuTrigger asChild>
            <img
              src="https://via.placeholder.com/400x200/fc6737/ffffff?text=Right+Click+Image"
              alt="Placeholder"
              className="w-full rounded-lg"
            />
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              View Full Size
            </ContextMenuItem>
            <ContextMenuItem>
              <Download className="mr-2 h-4 w-4" />
              Save Image As...
            </ContextMenuItem>
            <ContextMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              Copy Image
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    )
  },
}
