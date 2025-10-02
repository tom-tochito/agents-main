import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarWithStatus } from "./avatar"
import { User, Users, UserCircle, Bot } from "lucide-react"

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "The size of the avatar",
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
        alt="User avatar"
      />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="User" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback size="xs">XS</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback size="sm">SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback size="md">MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback size="lg">LG</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback size="xl">XL</AvatarFallback>
      </Avatar>
      <Avatar size="2xl">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback size="2xl">2XL</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const FallbackVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback variant="default">DF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback variant="primary">PR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback variant="secondary">SC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback variant="success">SU</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback variant="warning">WR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback variant="destructive">DS</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>
          <User className="h-5 w-5" />
        </AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback variant="primary">
          <UserCircle className="h-6 w-6" />
        </AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarFallback variant="secondary">
          <Bot className="h-8 w-8" />
        </AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <AvatarWithStatus status="online">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>ON</AvatarFallback>
      </AvatarWithStatus>
      <AvatarWithStatus status="away">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>AW</AvatarFallback>
      </AvatarWithStatus>
      <AvatarWithStatus status="busy">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>BS</AvatarFallback>
      </AvatarWithStatus>
      <AvatarWithStatus status="offline">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>OF</AvatarFallback>
      </AvatarWithStatus>
    </div>
  ),
}

export const StatusWithSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <AvatarWithStatus status="online" size="xs">
        <AvatarFallback size="xs">XS</AvatarFallback>
      </AvatarWithStatus>
      <AvatarWithStatus status="online" size="sm">
        <AvatarFallback size="sm">SM</AvatarFallback>
      </AvatarWithStatus>
      <AvatarWithStatus status="online" size="md">
        <AvatarFallback size="md">MD</AvatarFallback>
      </AvatarWithStatus>
      <AvatarWithStatus status="online" size="lg">
        <AvatarFallback size="lg">LG</AvatarFallback>
      </AvatarWithStatus>
      <AvatarWithStatus status="online" size="xl">
        <AvatarFallback size="xl">XL</AvatarFallback>
      </AvatarWithStatus>
      <AvatarWithStatus status="online" size="2xl">
        <AvatarFallback size="2xl">2XL</AvatarFallback>
      </AvatarWithStatus>
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" />
        <AvatarFallback>SA</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop" />
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback variant="primary">CD</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
}

export const GroupWithLimit: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Limit: 2</p>
        <AvatarGroup limit={2}>
          <Avatar>
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>E</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>

      <div>
        <p className="text-muted-foreground mb-2 text-sm">Limit: 3</p>
        <AvatarGroup limit={3}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback variant="primary">JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback variant="secondary">MK</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>

      <div>
        <p className="text-muted-foreground mb-2 text-sm">No limit</p>
        <AvatarGroup limit={0}>
          <Avatar>
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </div>
  ),
}

export const GroupSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AvatarGroup size="xs">
        <Avatar>
          <AvatarFallback size="xs">A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback size="xs">B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback size="xs">C</AvatarFallback>
        </Avatar>
      </AvatarGroup>

      <AvatarGroup size="sm">
        <Avatar>
          <AvatarFallback size="sm">A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback size="sm">B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback size="sm">C</AvatarFallback>
        </Avatar>
      </AvatarGroup>

      <AvatarGroup size="md">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </AvatarGroup>

      <AvatarGroup size="lg">
        <Avatar>
          <AvatarFallback size="lg">A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback size="lg">B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback size="lg">C</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">User Profile Card</h3>
        <div className="flex items-center gap-4 rounded-lg border p-4">
          <AvatarWithStatus status="online" size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" />
            <AvatarFallback size="lg">JD</AvatarFallback>
          </AvatarWithStatus>
          <div>
            <h4 className="font-medium">John Doe</h4>
            <p className="text-muted-foreground text-sm">john.doe@example.com</p>
            <span className="text-xs text-green-600">● Online</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Team Members</h3>
        <div className="space-y-2">
          {[
            { name: "Alice Cooper", role: "Designer", status: "online" as const },
            { name: "Bob Smith", role: "Developer", status: "busy" as const },
            { name: "Carol White", role: "Manager", status: "away" as const },
            { name: "David Brown", role: "QA", status: "offline" as const },
          ].map((member) => (
            <div
              key={member.name}
              className="hover:bg-muted flex items-center gap-3 rounded-lg p-2"
            >
              <AvatarWithStatus status={member.status} size="sm">
                <AvatarFallback size="sm">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </AvatarWithStatus>
              <div className="flex-1">
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-muted-foreground text-xs">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Comments Section</h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <Avatar size="sm">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" />
              <AvatarFallback size="sm">SA</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="bg-muted rounded-lg p-3">
                <p className="mb-1 text-sm font-medium">Sarah Anderson</p>
                <p className="text-sm">This looks great! I love the design.</p>
              </div>
              <p className="text-muted-foreground mt-1 text-xs">2 hours ago</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Avatar size="sm">
              <AvatarFallback size="sm" variant="primary">
                MJ
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="bg-muted rounded-lg p-3">
                <p className="mb-1 text-sm font-medium">Mike Johnson</p>
                <p className="text-sm">Thanks for sharing! Very helpful.</p>
              </div>
              <p className="text-muted-foreground mt-1 text-xs">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Project Collaborators</h3>
        <div className="flex items-center gap-2">
          <AvatarGroup limit={5}>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback variant="primary">MK</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback variant="secondary">AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>EF</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>GH</AvatarFallback>
            </Avatar>
          </AvatarGroup>
          <span className="text-muted-foreground ml-2 text-sm">7 collaborators</span>
        </div>
      </div>
    </div>
  ),
}
