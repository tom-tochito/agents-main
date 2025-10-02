import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./menubar"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Undo2,
  Redo2,
  Scissors,
  Copy,
  Clipboard,
  Save,
  FileText,
  FolderOpen,
  Printer,
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Settings,
  HelpCircle,
  Info,
  Mail,
  User,
  LogOut,
} from "lucide-react"

const meta: Meta<typeof Menubar> = {
  title: "UI/Menubar",
  component: Menubar,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default Menubar
export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem>Save</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Exit</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom In</MenubarItem>
          <MenubarItem>Zoom Out</MenubarItem>
          <MenubarItem>Reset Zoom</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

// With Shortcuts
export const WithShortcuts: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New File <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save As <MenubarShortcut>⌘⇧S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Print <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Exit <MenubarShortcut>⌘Q</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⌘⇧Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cut <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Copy <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Paste <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Select All <MenubarShortcut>⌘A</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

// With Icons
export const WithIcons: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileText className="mr-2 h-4 w-4" />
            New File
          </MenubarItem>
          <MenubarItem>
            <FolderOpen className="mr-2 h-4 w-4" />
            Open
          </MenubarItem>
          <MenubarItem>
            <Save className="mr-2 h-4 w-4" />
            Save
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Undo2 className="mr-2 h-4 w-4" />
            Undo
          </MenubarItem>
          <MenubarItem>
            <Redo2 className="mr-2 h-4 w-4" />
            Redo
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Scissors className="mr-2 h-4 w-4" />
            Cut
          </MenubarItem>
          <MenubarItem>
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </MenubarItem>
          <MenubarItem>
            <Clipboard className="mr-2 h-4 w-4" />
            Paste
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Search className="mr-2 h-4 w-4" />
            Search
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <ZoomIn className="mr-2 h-4 w-4" />
            Zoom In
          </MenubarItem>
          <MenubarItem>
            <ZoomOut className="mr-2 h-4 w-4" />
            Zoom Out
          </MenubarItem>
          <MenubarItem>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

// With Checkboxes
export const WithCheckboxes: Story = {
  render: () => {
    const [showToolbar, setShowToolbar] = useState(true)
    const [showStatusBar, setShowStatusBar] = useState(true)
    const [showSidebar, setShowSidebar] = useState(false)

    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
              Show Toolbar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
              Show Status Bar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem checked={showSidebar} onCheckedChange={setShowSidebar}>
              Show Sidebar
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem>Full Screen</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Bold</MenubarCheckboxItem>
            <MenubarCheckboxItem>Italic</MenubarCheckboxItem>
            <MenubarCheckboxItem>Underline</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
}

// With Radio Groups
export const WithRadioGroups: Story = {
  render: () => {
    const [alignment, setAlignment] = useState("left")
    const [fontSize, setFontSize] = useState("medium")

    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Text Alignment</MenubarLabel>
            <MenubarRadioGroup value={alignment} onValueChange={setAlignment}>
              <MenubarRadioItem value="left">
                <AlignLeft className="mr-2 h-4 w-4" />
                Left
              </MenubarRadioItem>
              <MenubarRadioItem value="center">
                <AlignCenter className="mr-2 h-4 w-4" />
                Center
              </MenubarRadioItem>
              <MenubarRadioItem value="right">
                <AlignRight className="mr-2 h-4 w-4" />
                Right
              </MenubarRadioItem>
              <MenubarRadioItem value="justify">
                <AlignJustify className="mr-2 h-4 w-4" />
                Justify
              </MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarLabel>Font Size</MenubarLabel>
            <MenubarRadioGroup value={fontSize} onValueChange={setFontSize}>
              <MenubarRadioItem value="small">Small</MenubarRadioItem>
              <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
              <MenubarRadioItem value="large">Large</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
}

// With Submenus
export const WithSubmenus: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Document1.txt</MenubarItem>
              <MenubarItem>Document2.txt</MenubarItem>
              <MenubarItem>Document3.txt</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Clear Recent Files</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Export As</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>PDF</MenubarItem>
              <MenubarItem>PNG</MenubarItem>
              <MenubarItem>JPEG</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>More Options</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>SVG</MenubarItem>
                  <MenubarItem>WebP</MenubarItem>
                  <MenubarItem>GIF</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find & Replace</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Replace...</MenubarItem>
              <MenubarItem>Replace All</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

// Text Editor Menubar
export const TextEditor: Story = {
  render: () => {
    const [wordWrap, setWordWrap] = useState(true)
    const [showLineNumbers, setShowLineNumbers] = useState(true)
    const [theme, setTheme] = useState("light")

    return (
      <Menubar className="w-full max-w-[600px]">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Open <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Save As <MenubarShortcut>⌘⇧S</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Exit</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⌘Y</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Cut <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copy <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Paste <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Find <MenubarShortcut>⌘F</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Replace <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Bold className="mr-2 h-4 w-4" />
              Bold <MenubarShortcut>⌘B</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Italic className="mr-2 h-4 w-4" />
              Italic <MenubarShortcut>⌘I</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Underline className="mr-2 h-4 w-4" />
              Underline <MenubarShortcut>⌘U</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Text Size</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Small</MenubarItem>
                <MenubarItem>Normal</MenubarItem>
                <MenubarItem>Large</MenubarItem>
                <MenubarItem>Extra Large</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked={wordWrap} onCheckedChange={setWordWrap}>
              Word Wrap
            </MenubarCheckboxItem>
            <MenubarCheckboxItem checked={showLineNumbers} onCheckedChange={setShowLineNumbers}>
              Line Numbers
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarLabel>Theme</MenubarLabel>
            <MenubarRadioGroup value={theme} onValueChange={setTheme}>
              <MenubarRadioItem value="light">Light</MenubarRadioItem>
              <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
              <MenubarRadioItem value="system">System</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
}

// Application Menubar
export const ApplicationMenubar: Story = {
  render: () => (
    <Menubar className="w-full max-w-[800px]">
      <MenubarMenu>
        <MenubarTrigger>Application</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>About Application</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Preferences <MenubarShortcut>⌘,</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Hide Application <MenubarShortcut>⌘H</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Hide Others</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Quit <MenubarShortcut>⌘Q</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Project</MenubarItem>
          <MenubarItem>Open Project</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Recent Projects</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Project Alpha</MenubarItem>
              <MenubarItem>Project Beta</MenubarItem>
              <MenubarItem>Project Gamma</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Close Project</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </MenubarItem>
          <MenubarItem>Extensions</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Developer Tools</MenubarItem>
          <MenubarItem>Console</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Window</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Minimize</MenubarItem>
          <MenubarItem>Zoom</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Bring All to Front</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Show Previous Tab</MenubarItem>
          <MenubarItem>Show Next Tab</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <HelpCircle className="mr-2 h-4 w-4" />
            Documentation
          </MenubarItem>
          <MenubarItem>
            <Info className="mr-2 h-4 w-4" />
            Release Notes
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Report Issue</MenubarItem>
          <MenubarItem>
            <Mail className="mr-2 h-4 w-4" />
            Contact Support
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

// Disabled Items
export const DisabledItems: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem disabled>Save (No changes)</MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>Print (No printer)</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled>Undo (Nothing to undo)</MenubarItem>
          <MenubarItem disabled>Redo (Nothing to redo)</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem disabled>Paste (Clipboard empty)</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

// Complex Example
export const ComplexExample: Story = {
  render: () => {
    const [user] = useState({ name: "John Doe", role: "Admin" })
    const [viewMode, setViewMode] = useState("grid")
    const [autoSave, setAutoSave] = useState(true)

    return (
      <div className="w-full max-w-[900px] space-y-4">
        <div className="flex items-center justify-between">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Dashboard</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <User className="mr-2 h-4 w-4" />
                  {user.name}
                </MenubarItem>
                <MenubarLabel className="text-muted-foreground text-xs">
                  Role: {user.role}
                </MenubarLabel>
                <MenubarSeparator />
                <MenubarItem>Profile Settings</MenubarItem>
                <MenubarItem>Account Settings</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Projects</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>All Projects</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Active</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Web Platform</MenubarItem>
                    <MenubarItem>Mobile App</MenubarItem>
                    <MenubarItem>API Service</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSub>
                  <MenubarSubTrigger>Archived</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Legacy System</MenubarItem>
                    <MenubarItem>Old Website</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarLabel>Layout</MenubarLabel>
                <MenubarRadioGroup value={viewMode} onValueChange={setViewMode}>
                  <MenubarRadioItem value="grid">Grid View</MenubarRadioItem>
                  <MenubarRadioItem value="list">List View</MenubarRadioItem>
                  <MenubarRadioItem value="kanban">Kanban View</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarCheckboxItem checked={autoSave} onCheckedChange={setAutoSave}>
                  Auto-save
                </MenubarCheckboxItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Actions</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Create New</MenubarItem>
                <MenubarItem>Import</MenubarItem>
                <MenubarItem>Export</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Sync</MenubarItem>
                <MenubarItem>Refresh</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="text-muted-foreground text-sm">
          Current view: {viewMode} | Auto-save: {autoSave ? "On" : "Off"}
        </div>
      </div>
    )
  },
}
