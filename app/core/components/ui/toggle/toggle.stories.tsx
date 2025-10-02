import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { useState } from "react"
import {
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  ToggleWithLabel,
  IconToggle,
  ToggleCard,
  AnimatedToggle,
} from "./toggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card/card"
import { Label } from "../label"
import { Separator } from "../separator/separator"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  IndentDecrease,
  IndentIncrease,
  Link,
  Image,
  Code,
  Quote,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Moon,
  Sun,
  Heart,
  Star,
  Bookmark,
  Bell,
  BellOff,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Settings,
  Download,
  Upload,
  Share2,
  Edit,
  Trash2,
  Copy,
  Check,
} from "lucide-react"

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  parameters: {
    layout: "padded",
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

// Default toggle
export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}

// With text
export const WithText: Story = {
  render: () => <Toggle>Toggle me</Toggle>,
}

// Variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <div className="space-y-2">
        <Label>Default</Label>
        <div className="flex gap-2">
          <Toggle variant="default">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="default" pressed>
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Outline</Label>
        <div className="flex gap-2">
          <Toggle variant="outline">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" pressed>
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Ghost</Label>
        <div className="flex gap-2">
          <Toggle variant="ghost">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="ghost" pressed>
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Solid</Label>
        <div className="flex gap-2">
          <Toggle variant="solid">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="solid" pressed>
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
    </div>
  ),
}

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Toggle size="sm">
        <Bold className="h-3 w-3" />
        Small
      </Toggle>
      <Toggle size="md">
        <Bold className="h-4 w-4" />
        Medium
      </Toggle>
      <Toggle size="lg">
        <Bold className="h-5 w-5" />
        Large
      </Toggle>
    </div>
  ),
}

// Icon sizes
export const IconSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <IconToggle size="icon-sm">
        <Bold className="h-3 w-3" />
      </IconToggle>
      <IconToggle size="icon">
        <Bold className="h-4 w-4" />
      </IconToggle>
      <IconToggle size="icon-lg">
        <Bold className="h-5 w-5" />
      </IconToggle>
    </div>
  ),
}

// Disabled
export const Disabled: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toggle disabled>
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle disabled pressed>
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" disabled>
        Disabled
      </Toggle>
    </div>
  ),
}

// Toggle group - single selection
export const ToggleGroupSingle: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Align justify">
        <AlignJustify className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

// Toggle group - multiple selection
export const ToggleGroupMultiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

// Toggle group variants
export const ToggleGroupVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Label className="mb-2 block">Default</Label>
        <ToggleGroup type="single" groupVariant="default">
          <ToggleGroupItem value="left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <Label className="mb-2 block">Outline</Label>
        <ToggleGroup type="single" groupVariant="outline">
          <ToggleGroupItem value="left" variant="outline">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" variant="outline">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" variant="outline">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <Label className="mb-2 block">Separated</Label>
        <ToggleGroup type="single" groupVariant="separated">
          <ToggleGroupItem value="left" variant="separated">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" variant="separated">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" variant="separated">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
}

// Toggle with label
export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4">
      <ToggleWithLabel label="Bold text" pressed>
        <Bold className="h-4 w-4" />
      </ToggleWithLabel>
      <ToggleWithLabel label="Italic text" labelPosition="left">
        <Italic className="h-4 w-4" />
      </ToggleWithLabel>
    </div>
  ),
}

// Toggle cards
export const ToggleCards: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])

    const toggleCard = (value: string) => {
      setSelected((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
      )
    }

    return (
      <div className="grid gap-4 md:grid-cols-2">
        <ToggleCard
          title="Dark Mode"
          description="Use dark theme across the application"
          icon={<Moon className="h-5 w-5" />}
          pressed={selected.includes("dark")}
          onPressedChange={() => toggleCard("dark")}
        />
        <ToggleCard
          title="Notifications"
          description="Receive push notifications"
          icon={<Bell className="h-5 w-5" />}
          pressed={selected.includes("notifications")}
          onPressedChange={() => toggleCard("notifications")}
        />
        <ToggleCard
          title="Auto-save"
          description="Automatically save your work"
          icon={<Download className="h-5 w-5" />}
          pressed={selected.includes("autosave")}
          onPressedChange={() => toggleCard("autosave")}
        />
        <ToggleCard
          title="Analytics"
          description="Share usage data to improve the app"
          icon={<Settings className="h-5 w-5" />}
          pressed={selected.includes("analytics")}
          onPressedChange={() => toggleCard("analytics")}
        />
      </div>
    )
  },
}

// Animated toggles
export const Animated: Story = {
  render: () => (
    <div className="flex gap-4">
      <AnimatedToggle>
        <Heart className="h-4 w-4" />
      </AnimatedToggle>
      <AnimatedToggle variant="outline">
        <Star className="h-4 w-4" />
      </AnimatedToggle>
      <AnimatedToggle variant="solid">
        <Bookmark className="h-4 w-4" />
      </AnimatedToggle>
    </div>
  ),
}

// Text editor toolbar
export const TextEditor: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Text Editor</CardTitle>
        <CardDescription>Format your text with these controls</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-1">
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <Separator orientation="vertical" className="mx-1 h-9" />
            <ToggleGroup type="single">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify" aria-label="Justify">
                <AlignJustify className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <Separator orientation="vertical" className="mx-1 h-9" />
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="list" aria-label="Bullet list">
                <List className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="ordered" aria-label="Numbered list">
                <ListOrdered className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="rounded-md border p-4">
            <p className="text-muted-foreground text-sm">Your formatted text will appear here...</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}

// Video call controls
export const VideoCallControls: Story = {
  render: () => {
    const [mic, setMic] = useState(true)
    const [video, setVideo] = useState(true)
    const [volume, setVolume] = useState(true)

    return (
      <Card>
        <CardHeader>
          <CardTitle>Video Call</CardTitle>
          <CardDescription>Control your audio and video settings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center gap-2">
            <Toggle
              size="lg"
              variant={mic ? "default" : "solid"}
              pressed={!mic}
              onPressedChange={(pressed) => setMic(!pressed)}
              aria-label="Toggle microphone"
            >
              {mic ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </Toggle>
            <Toggle
              size="lg"
              variant={video ? "default" : "solid"}
              pressed={!video}
              onPressedChange={(pressed) => setVideo(!pressed)}
              aria-label="Toggle video"
            >
              {video ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </Toggle>
            <Toggle
              size="lg"
              variant={volume ? "default" : "solid"}
              pressed={!volume}
              onPressedChange={(pressed) => setVolume(!pressed)}
              aria-label="Toggle volume"
            >
              {volume ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </Toggle>
          </div>
        </CardContent>
      </Card>
    )
  },
}

// Music player controls
export const MusicPlayer: Story = {
  render: () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [shuffle, setShuffle] = useState(false)

    return (
      <Card>
        <CardHeader>
          <CardTitle>Now Playing</CardTitle>
          <CardDescription>Control playback options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-4">
            <IconToggle
              size="icon-sm"
              pressed={shuffle}
              onPressedChange={setShuffle}
              aria-label="Shuffle"
            >
              <Shuffle className="h-4 w-4" />
            </IconToggle>
            <IconToggle size="icon-sm" aria-label="Previous">
              <SkipBack className="h-4 w-4" />
            </IconToggle>
            <IconToggle
              size="icon-lg"
              variant="solid"
              pressed={isPlaying}
              onPressedChange={setIsPlaying}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </IconToggle>
            <IconToggle size="icon-sm" aria-label="Next">
              <SkipForward className="h-4 w-4" />
            </IconToggle>
            <IconToggle
              size="icon-sm"
              pressed={repeat}
              onPressedChange={setRepeat}
              aria-label="Repeat"
            >
              <Repeat className="h-4 w-4" />
            </IconToggle>
          </div>
        </CardContent>
      </Card>
    )
  },
}

// Settings toggles
export const SettingsToggles: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      wifi: true,
      notifications: true,
      darkMode: false,
      privacy: true,
    })

    const updateSetting = (key: keyof typeof settings) => {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle>Quick Settings</CardTitle>
          <CardDescription>Toggle your preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Toggle
              variant="outline"
              pressed={settings.wifi}
              onPressedChange={() => updateSetting("wifi")}
              className="justify-start"
            >
              {settings.wifi ? (
                <>
                  <Wifi className="mr-2 h-4 w-4" />
                  Wi-Fi On
                </>
              ) : (
                <>
                  <WifiOff className="mr-2 h-4 w-4" />
                  Wi-Fi Off
                </>
              )}
            </Toggle>
            <Toggle
              variant="outline"
              pressed={settings.notifications}
              onPressedChange={() => updateSetting("notifications")}
              className="justify-start"
            >
              {settings.notifications ? (
                <>
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </>
              ) : (
                <>
                  <BellOff className="mr-2 h-4 w-4" />
                  Silent
                </>
              )}
            </Toggle>
            <Toggle
              variant="outline"
              pressed={settings.darkMode}
              onPressedChange={() => updateSetting("darkMode")}
              className="justify-start"
            >
              {settings.darkMode ? (
                <>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun className="mr-2 h-4 w-4" />
                  Light Mode
                </>
              )}
            </Toggle>
            <Toggle
              variant="outline"
              pressed={settings.privacy}
              onPressedChange={() => updateSetting("privacy")}
              className="justify-start"
            >
              {settings.privacy ? (
                <>
                  <Lock className="mr-2 h-4 w-4" />
                  Private
                </>
              ) : (
                <>
                  <Unlock className="mr-2 h-4 w-4" />
                  Public
                </>
              )}
            </Toggle>
          </div>
        </CardContent>
      </Card>
    )
  },
}

// View options
export const ViewOptions: Story = {
  render: () => {
    const [view, setView] = useState<"grid" | "list">("grid")
    const [showPreview, setShowPreview] = useState(true)

    return (
      <Card>
        <CardHeader>
          <CardTitle>View Options</CardTitle>
          <CardDescription>Customize how content is displayed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Layout</Label>
            <ToggleGroup type="single" value={view} onValueChange={(value: any) => setView(value)}>
              <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
              <ToggleGroupItem value="list">List</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Label>Show Preview</Label>
            <Toggle
              pressed={showPreview}
              onPressedChange={setShowPreview}
              aria-label="Toggle preview"
            >
              {showPreview ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </Toggle>
          </div>
        </CardContent>
      </Card>
    )
  },
}
