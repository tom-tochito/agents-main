import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "./index"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card/card"
import { Label } from "../label"
import { Separator } from "../separator/separator"
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  ListChecks,
  IndentDecrease,
  IndentIncrease,
  Link,
  Image,
  Code,
  Code2,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Type,
  Palette,
  Eraser,
  PaintBucket,
  Highlighter,
  ChevronDown,
  MoreHorizontal,
  Undo,
  Redo,
  Copy,
  Clipboard,
  Scissors,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Grid3x3,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Pentagon,
  Octagon,
  Star,
  Heart,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  RotateCw,
  RotateCcw,
  FlipHorizontal,
  FlipVertical,
  Maximize,
  Minimize,
  Move,
  Layers,
  Layout,
  PanelLeft,
  PanelRight,
  Sidebar,
  LayoutGrid,
  LayoutList,
  Table,
} from "lucide-react"

const meta: Meta<typeof ToggleGroup> = {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "padded",
  },
}

export default meta
type Story = StoryObj<typeof ToggleGroup>

// Single selection
export const Single: Story = {
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

// Multiple selection
export const Multiple: Story = {
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
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Strikethrough className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

// With text
export const WithText: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="week">
      <ToggleGroupItem value="day">Day</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="month">Month</ToggleGroupItem>
      <ToggleGroupItem value="year">Year</ToggleGroupItem>
    </ToggleGroup>
  ),
}

// With icons and text
export const WithIconsAndText: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="list">
      <ToggleGroupItem value="grid">
        <LayoutGrid className="mr-2 h-4 w-4" />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list">
        <LayoutList className="mr-2 h-4 w-4" />
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="table">
        <Table className="mr-2 h-4 w-4" />
        Table
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Label className="mb-2 block">Small</Label>
        <ToggleGroup type="single" size="sm">
          <ToggleGroupItem value="left" size="sm">
            <AlignLeft className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" size="sm">
            <AlignCenter className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" size="sm">
            <AlignRight className="h-3 w-3" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <Label className="mb-2 block">Medium (default)</Label>
        <ToggleGroup type="single" size="md">
          <ToggleGroupItem value="left" size="md">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" size="md">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" size="md">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <Label className="mb-2 block">Large</Label>
        <ToggleGroup type="single" size="lg">
          <ToggleGroupItem value="left" size="lg">
            <AlignLeft className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" size="lg">
            <AlignCenter className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" size="lg">
            <AlignRight className="h-5 w-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
}

// Variants
export const Variants: Story = {
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

// Disabled items
export const DisabledItems: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" disabled>
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" disabled>
        <AlignJustify className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

// Text formatting toolbar
export const TextFormatting: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Text Formatting</CardTitle>
        <CardDescription>Rich text editor controls</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <ToggleGroup type="single">
              <ToggleGroupItem value="h1" aria-label="Heading 1">
                <Heading1 className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="h2" aria-label="Heading 2">
                <Heading2 className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="h3" aria-label="Heading 3">
                <Heading3 className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="p" aria-label="Paragraph">
                <Type className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <Separator orientation="vertical" className="h-9" />
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
              <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
                <Strikethrough className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <Separator orientation="vertical" className="h-9" />
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
          </div>
          <div className="flex flex-wrap gap-2">
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="list" aria-label="Bullet list">
                <List className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="ordered" aria-label="Numbered list">
                <ListOrdered className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="checklist" aria-label="Checklist">
                <ListChecks className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <Separator orientation="vertical" className="h-9" />
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="link" aria-label="Insert link">
                <Link className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="image" aria-label="Insert image">
                <Image className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="code" aria-label="Code block">
                <Code className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="quote" aria-label="Quote">
                <Quote className="h-4 w-4" />
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

// Device selector
export const DeviceSelector: Story = {
  render: () => {
    const [device, setDevice] = useState("desktop")

    return (
      <Card>
        <CardHeader>
          <CardTitle>Responsive Preview</CardTitle>
          <CardDescription>Preview your design on different devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ToggleGroup type="single" value={device} onValueChange={setDevice}>
              <ToggleGroupItem value="mobile">
                <Smartphone className="mr-2 h-4 w-4" />
                Mobile
              </ToggleGroupItem>
              <ToggleGroupItem value="tablet">
                <Tablet className="mr-2 h-4 w-4" />
                Tablet
              </ToggleGroupItem>
              <ToggleGroupItem value="laptop">
                <Laptop className="mr-2 h-4 w-4" />
                Laptop
              </ToggleGroupItem>
              <ToggleGroupItem value="desktop">
                <Monitor className="mr-2 h-4 w-4" />
                Desktop
              </ToggleGroupItem>
            </ToggleGroup>
            <div className="bg-muted/50 rounded-md border p-8 text-center">
              <p className="text-muted-foreground text-sm">Preview for {device} view</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
}

// Shape selector
export const ShapeSelector: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Shape Tool</CardTitle>
        <CardDescription>Select a shape to draw</CardDescription>
      </CardHeader>
      <CardContent>
        <ToggleGroup type="single" defaultValue="square">
          <ToggleGroupItem value="square" aria-label="Square">
            <Square className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="circle" aria-label="Circle">
            <Circle className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="triangle" aria-label="Triangle">
            <Triangle className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="hexagon" aria-label="Hexagon">
            <Hexagon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="pentagon" aria-label="Pentagon">
            <Pentagon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="octagon" aria-label="Octagon">
            <Octagon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="star" aria-label="Star">
            <Star className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="heart" aria-label="Heart">
            <Heart className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>
    </Card>
  ),
}

// Transform controls
export const TransformControls: Story = {
  render: () => {
    const [transform, setTransform] = useState<string[]>([])

    return (
      <Card>
        <CardHeader>
          <CardTitle>Transform</CardTitle>
          <CardDescription>Apply transformations to selected object</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block">Rotation</Label>
              <ToggleGroup type="single">
                <ToggleGroupItem value="rotate-cw" aria-label="Rotate clockwise">
                  <RotateCw className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="rotate-ccw" aria-label="Rotate counter-clockwise">
                  <RotateCcw className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <Label className="mb-2 block">Flip</Label>
              <ToggleGroup type="multiple" value={transform} onValueChange={setTransform}>
                <ToggleGroupItem value="flip-h" aria-label="Flip horizontal">
                  <FlipHorizontal className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="flip-v" aria-label="Flip vertical">
                  <FlipVertical className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <Label className="mb-2 block">Size</Label>
              <ToggleGroup type="single">
                <ToggleGroupItem value="maximize" aria-label="Maximize">
                  <Maximize className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="minimize" aria-label="Minimize">
                  <Minimize className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
}

// Layout options
export const LayoutOptions: Story = {
  render: () => {
    const [layout, setLayout] = useState("grid")

    return (
      <Card>
        <CardHeader>
          <CardTitle>Layout</CardTitle>
          <CardDescription>Choose your preferred layout</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ToggleGroup
            type="single"
            value={layout}
            onValueChange={setLayout}
            className="grid grid-cols-2 gap-2"
          >
            <ToggleGroupItem value="grid" className="h-20 flex-col" variant="separated">
              <Grid3x3 className="mb-1 h-5 w-5" />
              <span className="text-xs">Grid</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="list" className="h-20 flex-col" variant="separated">
              <LayoutList className="mb-1 h-5 w-5" />
              <span className="text-xs">List</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="sidebar-left" className="h-20 flex-col" variant="separated">
              <PanelLeft className="mb-1 h-5 w-5" />
              <span className="text-xs">Sidebar Left</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="sidebar-right" className="h-20 flex-col" variant="separated">
              <PanelRight className="mb-1 h-5 w-5" />
              <span className="text-xs">Sidebar Right</span>
            </ToggleGroupItem>
          </ToggleGroup>
          <div className="bg-muted/50 rounded-md border p-8 text-center">
            <p className="text-muted-foreground text-sm">Current layout: {layout}</p>
          </div>
        </CardContent>
      </Card>
    )
  },
}

// Edit toolbar
export const EditToolbar: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])

    return (
      <Card>
        <CardHeader>
          <CardTitle>Edit Toolbar</CardTitle>
          <CardDescription>Common editing actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-1">
            <ToggleGroup type="multiple" value={selected} onValueChange={setSelected}>
              <ToggleGroupItem value="undo" aria-label="Undo">
                <Undo className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="redo" aria-label="Redo">
                <Redo className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <Separator orientation="vertical" className="mx-1 h-9" />
            <ToggleGroup type="multiple" value={selected} onValueChange={setSelected}>
              <ToggleGroupItem value="cut" aria-label="Cut">
                <Scissors className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="copy" aria-label="Copy">
                <Copy className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="paste" aria-label="Paste">
                <Clipboard className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <Separator orientation="vertical" className="mx-1 h-9" />
            <ToggleGroup type="single">
              <ToggleGroupItem value="move" aria-label="Move">
                <Move className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="layers" aria-label="Layers">
                <Layers className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>
    )
  },
}

// View mode selector
export const ViewMode: Story = {
  render: () => {
    const [view, setView] = useState("day")

    return (
      <div className="space-y-4">
        <div>
          <Label className="mb-2 block">Calendar View</Label>
          <ToggleGroup type="single" value={view} onValueChange={setView}>
            <ToggleGroupItem value="day">Day</ToggleGroupItem>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
            <ToggleGroupItem value="year">Year</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="rounded-md border p-4">
          <p className="text-muted-foreground text-sm">Showing {view} view</p>
        </div>
      </div>
    )
  },
}
