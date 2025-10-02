import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { useState } from "react"
import { Slider, RangeSlider, SliderWithInput, VerticalSlider, SteppedSlider } from "./slider"
import { Label } from "../label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card/card"

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the slider",
    },
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "success", "warning"],
      description: "The color variant of the slider",
    },
    disabled: {
      control: "boolean",
      description: "Whether the slider is disabled",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the slider",
    },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

// Basic slider
export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
}

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Label className="mb-3 text-sm font-medium">Small</Label>
        <Slider defaultValue={[50]} size="sm" />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">Medium (Default)</Label>
        <Slider defaultValue={[50]} size="md" />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">Large</Label>
        <Slider defaultValue={[50]} size="lg" />
      </div>
    </div>
  ),
}

// Different variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Label className="mb-3 text-sm font-medium">Default</Label>
        <Slider defaultValue={[50]} variant="default" />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">Secondary</Label>
        <Slider defaultValue={[50]} variant="secondary" />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">Destructive</Label>
        <Slider defaultValue={[50]} variant="destructive" />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">Success</Label>
        <Slider defaultValue={[50]} variant="success" />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">Warning</Label>
        <Slider defaultValue={[50]} variant="warning" />
      </div>
    </div>
  ),
}

// With value display
export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState([50])

    return (
      <div className="space-y-8">
        <div>
          <Label className="mb-3 text-sm font-medium">Basic Value Display</Label>
          <Slider value={value} onValueChange={setValue} showValue />
        </div>
        <div>
          <Label className="mb-3 text-sm font-medium">Custom Format</Label>
          <Slider defaultValue={[75]} showValue formatValue={(v) => `${v}%`} />
        </div>
        <div>
          <Label className="mb-3 text-sm font-medium">With Labels</Label>
          <Slider defaultValue={[50]} showValue showLabels labels={{ min: "Min", max: "Max" }} />
        </div>
      </div>
    )
  },
}

// With ticks
export const WithTicks: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Label className="mb-3 text-sm font-medium">5 Ticks</Label>
        <Slider defaultValue={[50]} showTicks tickCount={5} />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">11 Ticks</Label>
        <Slider defaultValue={[50]} showTicks tickCount={11} />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">With Labels and Ticks</Label>
        <Slider
          defaultValue={[50]}
          showTicks
          tickCount={5}
          showLabels
          labels={{ min: "0%", max: "100%" }}
        />
      </div>
    </div>
  ),
}

// Range slider
export const Range: Story = {
  render: () => {
    const [value, setValue] = useState([25, 75])

    return (
      <div className="space-y-8">
        <div>
          <Label className="mb-3 text-sm font-medium">Basic Range</Label>
          <RangeSlider />
        </div>
        <div>
          <Label className="mb-3 text-sm font-medium">With Value Display</Label>
          <RangeSlider
            value={value}
            onValueChange={setValue}
            showValue
            formatValue={(v) => `$${v}`}
          />
        </div>
        <div>
          <Label className="mb-3 text-sm font-medium">With Min Distance</Label>
          <RangeSlider defaultValue={[30, 70]} minDistance={10} showValue showLabels />
        </div>
        <div>
          <Label className="mb-3 text-sm font-medium">Colored Range</Label>
          <RangeSlider defaultValue={[40, 80]} variant="success" showValue />
        </div>
      </div>
    )
  },
}

// Slider with input
export const WithInput: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Label className="mb-3 text-sm font-medium">Basic with Input</Label>
        <SliderWithInput defaultValue={[50]} />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">Custom Range</Label>
        <SliderWithInput defaultValue={[250]} min={0} max={500} step={10} inputWidth="5rem" />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">Colored with Input</Label>
        <SliderWithInput defaultValue={[75]} variant="success" size="lg" />
      </div>
    </div>
  ),
}

// Vertical slider
export const Vertical: Story = {
  render: () => (
    <div className="flex space-x-8">
      <div className="text-center">
        <Label className="mb-3 text-sm font-medium">Small</Label>
        <div className="flex h-[200px] justify-center">
          <VerticalSlider defaultValue={[50]} size="sm" />
        </div>
      </div>
      <div className="text-center">
        <Label className="mb-3 text-sm font-medium">Medium</Label>
        <div className="flex h-[200px] justify-center">
          <VerticalSlider defaultValue={[50]} size="md" />
        </div>
      </div>
      <div className="text-center">
        <Label className="mb-3 text-sm font-medium">Large</Label>
        <div className="flex h-[200px] justify-center">
          <VerticalSlider defaultValue={[50]} size="lg" />
        </div>
      </div>
      <div className="text-center">
        <Label className="mb-3 text-sm font-medium">Colored</Label>
        <div className="flex h-[200px] justify-center">
          <VerticalSlider defaultValue={[75]} variant="success" />
        </div>
      </div>
    </div>
  ),
}

// Stepped slider
export const Stepped: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Label className="mb-3 text-sm font-medium">Basic Steps</Label>
        <SteppedSlider defaultValue={[50]} steps={[0, 25, 50, 75, 100]} showStepLabels />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">Custom Steps</Label>
        <SteppedSlider
          defaultValue={[20]}
          min={0}
          max={50}
          step={10}
          steps={[0, 10, 20, 30, 40, 50]}
          showStepLabels
        />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">With Ticks</Label>
        <SteppedSlider
          defaultValue={[75]}
          steps={[0, 25, 50, 75, 100]}
          showStepLabels
          showTicks
          tickCount={5}
        />
      </div>
    </div>
  ),
}

// Disabled state
export const Disabled: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Label className="mb-3 text-sm font-medium">Disabled Single</Label>
        <Slider defaultValue={[50]} disabled />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">Disabled Range</Label>
        <RangeSlider defaultValue={[25, 75]} disabled />
      </div>
      <div>
        <Label className="mb-3 text-sm font-medium">Disabled with Input</Label>
        <SliderWithInput defaultValue={[50]} disabled />
      </div>
    </div>
  ),
}

// Real-world example: Volume control
export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = useState([50])
    const [muted, setMuted] = useState(false)

    const getVolumeIcon = () => {
      if (muted || volume[0] === 0) return "🔇"
      if (volume[0] < 33) return "🔈"
      if (volume[0] < 66) return "🔉"
      return "🔊"
    }

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Volume Control</CardTitle>
          <CardDescription>Adjust the system volume</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <button onClick={() => setMuted(!muted)} className="text-2xl">
              {getVolumeIcon()}
            </button>
            <Slider
              value={muted ? [0] : volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="flex-1"
              disabled={muted}
            />
            <span className="w-12 text-sm font-medium">{muted ? "Muted" : `${volume[0]}%`}</span>
          </div>
        </CardContent>
      </Card>
    )
  },
}

// Real-world example: Price range filter
export const PriceRangeFilter: Story = {
  render: () => {
    const [priceRange, setPriceRange] = useState([0, 1000])

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Price Range</CardTitle>
          <CardDescription>Filter products by price</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="font-medium">${priceRange[0]}</span>
            <span className="font-medium">${priceRange[1]}</span>
          </div>
          <RangeSlider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={1000}
            step={10}
            minDistance={50}
            variant="success"
          />
          <div className="text-muted-foreground flex justify-between text-xs">
            <span>Min: $0</span>
            <span>Max: $1000</span>
          </div>
        </CardContent>
      </Card>
    )
  },
}

// Real-world example: Color picker
export const ColorPicker: Story = {
  render: () => {
    const [rgb, setRgb] = useState({ r: 128, g: 128, b: 128 })

    const color = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>RGB Color Picker</CardTitle>
          <CardDescription>Adjust RGB values to create colors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="h-24 w-full rounded-lg border" style={{ backgroundColor: color }} />
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex justify-between">
                <Label>Red</Label>
                <span className="text-sm font-medium">{rgb.r}</span>
              </div>
              <Slider
                value={[rgb.r]}
                onValueChange={([r]) => setRgb({ ...rgb, r })}
                max={255}
                variant="destructive"
              />
            </div>
            <div>
              <div className="mb-2 flex justify-between">
                <Label>Green</Label>
                <span className="text-sm font-medium">{rgb.g}</span>
              </div>
              <Slider
                value={[rgb.g]}
                onValueChange={([g]) => setRgb({ ...rgb, g })}
                max={255}
                variant="success"
              />
            </div>
            <div>
              <div className="mb-2 flex justify-between">
                <Label>Blue</Label>
                <span className="text-sm font-medium">{rgb.b}</span>
              </div>
              <Slider
                value={[rgb.b]}
                onValueChange={([b]) => setRgb({ ...rgb, b })}
                max={255}
                className="[&_[data-slot=slider-range]]:bg-blue-500 [&_[data-slot=slider-thumb]]:border-blue-500"
              />
            </div>
          </div>
          <div className="bg-muted rounded-md p-2 text-center font-mono text-sm">{color}</div>
        </CardContent>
      </Card>
    )
  },
}

// Real-world example: Playback controls
export const PlaybackControls: Story = {
  render: () => {
    const [position, setPosition] = useState([0])
    const [isPlaying, setIsPlaying] = useState(false)
    const duration = 240 // 4 minutes in seconds

    React.useEffect(() => {
      if (!isPlaying) return

      const interval = setInterval(() => {
        setPosition(([current]) => {
          const next = current + 1
          return next > duration ? [0] : [next]
        })
      }, 1000)

      return () => clearInterval(interval)
    }, [isPlaying, duration])

    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60)
      const secs = seconds % 60
      return `${mins}:${secs.toString().padStart(2, "0")}`
    }

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Now Playing</CardTitle>
          <CardDescription>Track Name - Artist</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={position}
            onValueChange={setPosition}
            max={duration}
            step={1}
            className="w-full"
          />
          <div className="text-muted-foreground flex justify-between text-xs">
            <span>{formatTime(position[0])}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="flex justify-center">
            <button onClick={() => setIsPlaying(!isPlaying)} className="text-2xl">
              {isPlaying ? "⏸️" : "▶️"}
            </button>
          </div>
        </CardContent>
      </Card>
    )
  },
}

// Real-world example: Settings panel
export const SettingsPanel: Story = {
  render: () => {
    const [brightness, setBrightness] = useState([75])
    const [fontSize, setFontSize] = useState([16])
    const [animationSpeed, setAnimationSpeed] = useState([1])

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Display Settings</CardTitle>
          <CardDescription>Customize your viewing experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="mb-3 flex justify-between">
              <Label>Brightness</Label>
              <span className="text-sm font-medium">{brightness[0]}%</span>
            </div>
            <Slider
              value={brightness}
              onValueChange={setBrightness}
              max={100}
              showTicks
              tickCount={5}
            />
          </div>
          <div>
            <div className="mb-3 flex justify-between">
              <Label>Font Size</Label>
              <span className="text-sm font-medium">{fontSize[0]}px</span>
            </div>
            <Slider
              value={fontSize}
              onValueChange={setFontSize}
              min={12}
              max={24}
              step={2}
              showLabels
              labels={{ min: "12px", max: "24px" }}
            />
          </div>
          <div>
            <div className="mb-3 flex justify-between">
              <Label>Animation Speed</Label>
              <span className="text-sm font-medium">{animationSpeed[0]}x</span>
            </div>
            <Slider
              value={animationSpeed}
              onValueChange={setAnimationSpeed}
              min={0.5}
              max={2}
              step={0.1}
              showLabels
              labels={{ min: "0.5x", max: "2x" }}
            />
          </div>
        </CardContent>
      </Card>
    )
  },
}
