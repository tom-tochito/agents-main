import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import {
  Skeleton,
  TextSkeleton,
  AvatarSkeleton,
  CardSkeleton,
  TableSkeleton,
  ListSkeleton,
  FormSkeleton,
  ButtonSkeleton,
  BadgeSkeleton,
  ChartSkeleton,
  NavigationSkeleton,
  MediaSkeleton,
  FeedSkeleton,
} from "./skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { Button } from "../button"
import { Badge } from "../badge"

const meta: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "shimmer", "pulse"],
      description: "The animation variant of the skeleton",
    },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

// Basic skeleton
export const Default: Story = {
  args: {
    className: "h-4 w-[250px]",
  },
}

// Different variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-medium">Default</h3>
        <Skeleton className="h-12 w-full" />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Shimmer</h3>
        <Skeleton variant="shimmer" className="h-12 w-full" />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Pulse</h3>
        <Skeleton variant="pulse" className="h-12 w-full" />
      </div>
    </div>
  ),
}

// Text skeleton
export const Text: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-medium">Single Line</h3>
        <TextSkeleton lines={1} />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Multiple Lines</h3>
        <TextSkeleton lines={3} />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Custom Last Line Width</h3>
        <TextSkeleton lines={4} lastLineWidth="60%" />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">With Shimmer</h3>
        <TextSkeleton lines={3} variant="shimmer" />
      </div>
    </div>
  ),
}

// Avatar skeleton
export const Avatars: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <AvatarSkeleton size="sm" />
        <AvatarSkeleton size="md" />
        <AvatarSkeleton size="lg" />
        <AvatarSkeleton size="xl" />
      </div>
      <div className="flex items-center space-x-4">
        <AvatarSkeleton size="sm" variant="shimmer" />
        <AvatarSkeleton size="md" variant="shimmer" />
        <AvatarSkeleton size="lg" variant="shimmer" />
        <AvatarSkeleton size="xl" variant="shimmer" />
      </div>
    </div>
  ),
}

// Card skeleton
export const Cards: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <h3 className="mb-3 text-sm font-medium">With Image</h3>
        <CardSkeleton />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">With Avatar</h3>
        <CardSkeleton showImage={false} showAvatar={true} />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">With Actions</h3>
        <CardSkeleton showActions={true} />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Full Featured</h3>
        <CardSkeleton showAvatar={true} showActions={true} />
      </div>
    </div>
  ),
}

// Table skeleton
export const Table: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-medium">Basic Table</h3>
        <TableSkeleton rows={5} columns={4} />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Without Header</h3>
        <TableSkeleton rows={3} columns={3} showHeader={false} />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">With Shimmer</h3>
        <TableSkeleton rows={3} columns={5} variant="shimmer" />
      </div>
    </div>
  ),
}

// List skeleton
export const Lists: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h3 className="mb-3 text-sm font-medium">Simple List</h3>
        <ListSkeleton items={4} />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">With Icons</h3>
        <ListSkeleton items={4} showIcon={true} />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">With Descriptions</h3>
        <ListSkeleton items={3} showDescription={true} />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Full Featured</h3>
        <ListSkeleton items={3} showIcon={true} showDescription={true} />
      </div>
    </div>
  ),
}

// Form skeleton
export const Forms: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h3 className="mb-3 text-sm font-medium">Basic Form</h3>
        <FormSkeleton fields={3} />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Without Labels</h3>
        <FormSkeleton fields={4} showLabels={false} />
      </div>
    </div>
  ),
}

// Button skeleton
export const Buttons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <ButtonSkeleton size="sm" />
        <ButtonSkeleton size="md" />
        <ButtonSkeleton size="lg" />
      </div>
      <div className="flex items-center space-x-4">
        <ButtonSkeleton size="sm" variant="shimmer" />
        <ButtonSkeleton size="md" variant="shimmer" />
        <ButtonSkeleton size="lg" variant="shimmer" />
      </div>
    </div>
  ),
}

// Badge skeleton
export const Badges: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <BadgeSkeleton />
      <BadgeSkeleton className="w-20" />
      <BadgeSkeleton className="w-24" />
      <BadgeSkeleton variant="shimmer" />
    </div>
  ),
}

// Chart skeleton
export const Charts: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-medium">Bar Chart</h3>
        <ChartSkeleton type="bar" />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Line Chart</h3>
        <ChartSkeleton type="line" />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Pie Chart</h3>
        <ChartSkeleton type="pie" />
      </div>
    </div>
  ),
}

// Navigation skeleton
export const Navigation: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-medium">Horizontal Navigation</h3>
        <NavigationSkeleton items={5} orientation="horizontal" />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Vertical Navigation</h3>
        <NavigationSkeleton items={4} orientation="vertical" />
      </div>
    </div>
  ),
}

// Media skeleton
export const Media: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div>
        <h3 className="mb-3 text-sm font-medium">Square</h3>
        <MediaSkeleton aspectRatio="square" />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Video (16:9)</h3>
        <MediaSkeleton aspectRatio="video" />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Portrait</h3>
        <MediaSkeleton aspectRatio="portrait" />
      </div>
    </div>
  ),
}

// Feed skeleton (social media style)
export const Feed: Story = {
  render: () => (
    <div className="max-w-2xl">
      <h3 className="mb-3 text-sm font-medium">Social Media Feed</h3>
      <FeedSkeleton posts={2} />
    </div>
  ),
}

// Real-world example: User profile loading
export const UserProfile: Story = {
  render: () => (
    <div className="w-full max-w-md rounded-lg border p-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <AvatarSkeleton size="lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <TextSkeleton lines={2} />
      </div>
      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2 text-center">
            <Skeleton className="mx-auto h-6 w-12" />
            <Skeleton className="mx-auto h-3 w-16" />
          </div>
          <div className="space-y-2 text-center">
            <Skeleton className="mx-auto h-6 w-12" />
            <Skeleton className="mx-auto h-3 w-16" />
          </div>
          <div className="space-y-2 text-center">
            <Skeleton className="mx-auto h-6 w-12" />
            <Skeleton className="mx-auto h-3 w-16" />
          </div>
        </div>
        <div className="flex space-x-2">
          <ButtonSkeleton size="md" className="flex-1" />
          <ButtonSkeleton size="md" />
        </div>
      </div>
    </div>
  ),
}

// Real-world example: Article loading
export const Article: Story = {
  render: () => (
    <article className="max-w-2xl space-y-6">
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <div className="flex items-center space-x-2">
          <AvatarSkeleton size="sm" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-1" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
      <MediaSkeleton aspectRatio="video" />
      <TextSkeleton lines={5} />
      <TextSkeleton lines={4} lastLineWidth="80%" />
      <div className="flex items-center space-x-4 pt-4">
        <ButtonSkeleton size="sm" />
        <ButtonSkeleton size="sm" />
        <ButtonSkeleton size="sm" />
      </div>
    </article>
  ),
}

// Real-world example: Dashboard loading
export const Dashboard: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-lg border p-4">
            <div className="pb-2">
              <Skeleton className="h-4 w-20" />
            </div>
            <div>
              <Skeleton className="mb-1 h-8 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <div className="mb-4">
            <Skeleton className="h-5 w-32" />
          </div>
          <ChartSkeleton type="bar" />
        </div>
        <div className="rounded-lg border p-6">
          <div className="mb-4">
            <Skeleton className="h-5 w-32" />
          </div>
          <ChartSkeleton type="line" />
        </div>
      </div>
      <div className="rounded-lg border p-6">
        <div className="mb-4">
          <Skeleton className="h-5 w-32" />
        </div>
        <TableSkeleton rows={5} columns={6} />
      </div>
    </div>
  ),
}

// Comparison: Before and after loading
export const Comparison: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
      const timer = setInterval(() => {
        setIsLoading((prev) => !prev)
      }, 2000)
      return () => clearInterval(timer)
    }, [])

    return (
      <div className="space-y-4">
        <div className="text-center">
          <Badge variant={isLoading ? "secondary" : "default"}>
            {isLoading ? "Loading..." : "Loaded"}
          </Badge>
        </div>
        <div className="mx-auto w-full max-w-md rounded-lg border">
          <div className="p-6">
            {isLoading ? (
              <div className="flex items-center space-x-3">
                <AvatarSkeleton size="md" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-muted-foreground text-sm">@johndoe</p>
                </div>
              </div>
            )}
          </div>
          <div className="px-6 pb-6">
            {isLoading ? (
              <>
                <TextSkeleton lines={3} className="mb-4" />
                <div className="flex space-x-2">
                  <ButtonSkeleton size="sm" />
                  <ButtonSkeleton size="sm" />
                </div>
              </>
            ) : (
              <>
                <p className="mb-4 text-sm">
                  Building amazing products with modern web technologies. Passionate about user
                  experience and clean code.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm">Follow</Button>
                  <Button size="sm" variant="outline">
                    Message
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  },
}
