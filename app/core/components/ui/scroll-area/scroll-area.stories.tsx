import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { ScrollArea, ScrollBar } from "./scroll-area"
import { Separator } from "../separator/separator"
import { Badge } from "../badge"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"

const meta: Meta<typeof ScrollArea> = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "padded",
  },
}

export default meta
type Story = StoryObj<typeof ScrollArea>

// Basic vertical scroll
export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <React.Fragment key={i}>
            <div className="text-sm">Tag {i + 1}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  ),
}

// Horizontal scroll
export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <figure key={i} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <div className="bg-muted h-32 w-32" />
            </div>
            <figcaption className="text-muted-foreground pt-2 text-xs">Photo {i + 1}</figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

// Both directions
export const BothDirections: Story = {
  render: () => (
    <ScrollArea className="h-72 w-96 rounded-md border">
      <div className="p-4">
        <table className="w-max">
          <thead>
            <tr className="border-b">
              {Array.from({ length: 10 }).map((_, i) => (
                <th key={i} className="px-4 py-2 text-left font-medium">
                  Column {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 30 }).map((_, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {Array.from({ length: 10 }).map((_, colIndex) => (
                  <td key={colIndex} className="px-4 py-2">
                    Cell {rowIndex + 1}-{colIndex + 1}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ScrollBar orientation="horizontal" />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  ),
}

// List with avatars
export const UserList: Story = {
  render: () => {
    const users = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      status: i % 3 === 0 ? "online" : i % 3 === 1 ? "busy" : "offline",
    }))

    return (
      <ScrollArea className="h-72 w-80 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium">Team Members</h4>
          {users.map((user) => (
            <div key={user.id}>
              <div className="flex items-center space-x-3 py-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>U{user.id + 1}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-muted-foreground text-xs">{user.email}</p>
                </div>
                <Badge
                  variant={
                    user.status === "online"
                      ? "default"
                      : user.status === "busy"
                        ? "secondary"
                        : "outline"
                  }
                  className="text-xs"
                >
                  {user.status}
                </Badge>
              </div>
              <Separator />
            </div>
          ))}
        </div>
      </ScrollArea>
    )
  },
}

// Code block
export const CodeBlock: Story = {
  render: () => (
    <ScrollArea className="h-72 w-full max-w-2xl rounded-md border">
      <pre className="p-4">
        <code className="text-sm">
          {`import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

export function Component() {
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    name: \`Item \${i + 1}\`,
    description: \`Description for item \${i + 1}\`,
  }))

  return (
    <ScrollArea className="h-[400px] w-full">
      <div className="space-y-4 p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border p-4"
          >
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

// Advanced example with virtualization
import { VirtualList } from '@tanstack/react-virtual'

export function VirtualizedScrollArea() {
  const parentRef = React.useRef(null)
  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  })

  return (
    <ScrollArea
      ref={parentRef}
      className="h-[400px] w-full"
    >
      <div
        style={{
          height: \`\${rowVirtualizer.getTotalSize()}px\`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: \`\${virtualItem.size}px\`,
              transform: \`translateY(\${virtualItem.start}px)\`,
            }}
          >
            Row {virtualItem.index}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}`}
        </code>
      </pre>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

// Chat messages
export const ChatMessages: Story = {
  render: () => {
    const messages = [
      { id: 1, sender: "Alice", content: "Hey, how are you?", time: "10:00 AM", isMe: false },
      {
        id: 2,
        sender: "Me",
        content: "I'm good, thanks! How about you?",
        time: "10:02 AM",
        isMe: true,
      },
      {
        id: 3,
        sender: "Alice",
        content: "Doing great! Did you see the new design?",
        time: "10:03 AM",
        isMe: false,
      },
      { id: 4, sender: "Me", content: "Yes, it looks amazing!", time: "10:05 AM", isMe: true },
      {
        id: 5,
        sender: "Alice",
        content: "I'm glad you like it. We should discuss the implementation details.",
        time: "10:06 AM",
        isMe: false,
      },
      {
        id: 6,
        sender: "Me",
        content: "Sure, when would be a good time?",
        time: "10:08 AM",
        isMe: true,
      },
      {
        id: 7,
        sender: "Alice",
        content: "How about tomorrow at 2 PM?",
        time: "10:09 AM",
        isMe: false,
      },
      {
        id: 8,
        sender: "Me",
        content: "Perfect! I'll send you a calendar invite.",
        time: "10:10 AM",
        isMe: true,
      },
      {
        id: 9,
        sender: "Alice",
        content: "Great! Looking forward to it.",
        time: "10:11 AM",
        isMe: false,
      },
      { id: 10, sender: "Me", content: "Me too! See you then.", time: "10:12 AM", isMe: true },
    ]

    return (
      <ScrollArea className="h-96 w-96 rounded-md border p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-3 py-2 ${
                  message.isMe ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p
                  className={`mt-1 text-xs ${
                    message.isMe ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    )
  },
}

// Sidebar navigation
export const SidebarNavigation: Story = {
  render: () => {
    const sections = [
      {
        title: "Getting Started",
        items: ["Introduction", "Installation", "Quick Start", "Tutorial"],
      },
      {
        title: "Components",
        items: ["Button", "Card", "Dialog", "Form", "Input", "Select", "Table", "Toast"],
      },
      {
        title: "Utilities",
        items: ["Colors", "Typography", "Spacing", "Breakpoints", "Animations"],
      },
      {
        title: "Advanced",
        items: ["Theming", "Dark Mode", "Accessibility", "Performance", "Testing"],
      },
    ]

    return (
      <ScrollArea className="h-96 w-64 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-semibold">Documentation</h4>
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              <h5 className="text-muted-foreground mb-2 text-sm font-medium">{section.title}</h5>
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    className="hover:bg-muted w-full rounded-md px-2 py-1.5 text-left text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    )
  },
}

// Timeline
export const Timeline: Story = {
  render: () => {
    const events = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      title: `Event ${i + 1}`,
      description: `This is the description for event ${i + 1}`,
      date: new Date(2024, 0, i + 1).toLocaleDateString(),
      type: i % 3 === 0 ? "milestone" : i % 3 === 1 ? "release" : "update",
    }))

    return (
      <ScrollArea className="h-96 w-96 rounded-md border">
        <div className="p-6">
          <h4 className="mb-6 text-lg font-semibold">Project Timeline</h4>
          <div className="relative">
            <div className="bg-border absolute top-0 left-3 h-full w-0.5" />
            {events.map((event) => (
              <div key={event.id} className="relative mb-8 ml-8">
                <div
                  className={`border-background absolute -left-[29px] h-6 w-6 rounded-full border-4 ${
                    event.type === "milestone"
                      ? "bg-primary"
                      : event.type === "release"
                        ? "bg-green-500"
                        : "bg-muted-foreground"
                  }`}
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h5 className="font-medium">{event.title}</h5>
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                  <p className="text-muted-foreground text-xs">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    )
  },
}
