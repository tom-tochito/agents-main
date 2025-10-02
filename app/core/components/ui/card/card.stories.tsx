import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { Badge } from "../badge"
import { Progress } from "../progress"
import { Separator } from "../separator/separator"
import {
  Calendar,
  CreditCard,
  Users,
  Activity,
  DollarSign,
  TrendingUp,
  TrendingDown,
  MoreVertical,
  Bell,
  Settings,
  Star,
  Heart,
  MessageSquare,
  Share2,
  Bookmark,
} from "lucide-react"

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
}

export default meta
type Story = StoryObj<typeof Card>

// Basic card
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <p>Card footer</p>
      </CardFooter>
    </Card>
  ),
}

// Card without footer
export const WithoutFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm">Your call has been confirmed.</p>
          <p className="text-muted-foreground text-sm">1 hour ago</p>
        </div>
      </CardContent>
    </Card>
  ),
}

// Login form card
export const LoginForm: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>Enter your email and password to login to your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full">Sign in</Button>
        <Button variant="outline" className="w-full">
          Sign in with Google
        </Button>
      </CardFooter>
    </Card>
  ),
}

// Stats card
export const StatsCard: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-muted-foreground text-xs">
            <span className="text-green-600">+20.1%</span> from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          <Users className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-muted-foreground text-xs">
            <span className="text-green-600">+180.1%</span> from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <CreditCard className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-muted-foreground text-xs">
            <span className="text-green-600">+19%</span> from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          <Activity className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-muted-foreground text-xs">
            <span className="text-red-600">-2%</span> from last hour
          </p>
        </CardContent>
      </Card>
    </div>
  ),
}

// User profile card
export const UserProfile: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle>Jane Doe</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around text-center">
          <div>
            <p className="text-2xl font-bold">1.2k</p>
            <p className="text-muted-foreground text-xs">Followers</p>
          </div>
          <Separator orientation="vertical" className="h-10" />
          <div>
            <p className="text-2xl font-bold">342</p>
            <p className="text-muted-foreground text-xs">Following</p>
          </div>
          <Separator orientation="vertical" className="h-10" />
          <div>
            <p className="text-2xl font-bold">28</p>
            <p className="text-muted-foreground text-xs">Posts</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Message</Button>
        <Button>Follow</Button>
      </CardFooter>
    </Card>
  ),
}

// Product card
export const ProductCard: Story = {
  render: () => (
    <Card className="w-[300px]">
      <div className="bg-muted relative aspect-square">
        <Badge className="absolute top-2 right-2">Sale</Badge>
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">Premium Headphones</CardTitle>
            <CardDescription>Wireless Bluetooth 5.0</CardDescription>
          </div>
          <Button variant="ghost" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-muted-foreground ml-2 text-sm">(124)</span>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold">$89.99</span>
          <span className="text-muted-foreground text-sm line-through">$129.99</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  ),
}

// Blog post card
export const BlogPost: Story = {
  render: () => (
    <Card className="w-[400px]">
      <div className="bg-muted aspect-video" />
      <CardHeader>
        <div className="text-muted-foreground mb-2 flex items-center space-x-2 text-sm">
          <span>Technology</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <CardTitle>The Future of Web Development</CardTitle>
        <CardDescription>
          Exploring the latest trends and technologies shaping the web development landscape in
          2024.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-muted-foreground text-xs">March 15, 2024</p>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between pt-4">
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm">
            <Heart className="mr-1 h-4 w-4" />
            124
          </Button>
          <Button variant="ghost" size="sm">
            <MessageSquare className="mr-1 h-4 w-4" />
            32
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  ),
}

// Task card with progress
export const TaskCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">Website Redesign</CardTitle>
            <CardDescription>Q1 2024 Project</CardDescription>
          </div>
          <Badge variant="outline">In Progress</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="text-muted-foreground">65%</span>
          </div>
          <Progress value={65} />
        </div>
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <Avatar key={i} className="border-background h-8 w-8 border-2">
              <AvatarFallback>U{i}</AvatarFallback>
            </Avatar>
          ))}
          <div className="border-background bg-muted flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs">
            +2
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-muted-foreground flex justify-between text-sm">
        <span>Due in 15 days</span>
        <span>12 tasks remaining</span>
      </CardFooter>
    </Card>
  ),
}

// Pricing card
export const PricingCard: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Starter</CardTitle>
          <CardDescription>Perfect for individuals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$9</div>
          <p className="text-muted-foreground text-sm">per month</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-sm">
              <span className="mr-2">✓</span> 5 Projects
            </li>
            <li className="flex items-center text-sm">
              <span className="mr-2">✓</span> 10GB Storage
            </li>
            <li className="flex items-center text-sm">
              <span className="mr-2">✓</span> Basic Support
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Get Started
          </Button>
        </CardFooter>
      </Card>
      <Card className="border-primary">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Pro</CardTitle>
            <Badge>Popular</Badge>
          </div>
          <CardDescription>Great for small teams</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$29</div>
          <p className="text-muted-foreground text-sm">per month</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-sm">
              <span className="mr-2">✓</span> Unlimited Projects
            </li>
            <li className="flex items-center text-sm">
              <span className="mr-2">✓</span> 100GB Storage
            </li>
            <li className="flex items-center text-sm">
              <span className="mr-2">✓</span> Priority Support
            </li>
            <li className="flex items-center text-sm">
              <span className="mr-2">✓</span> Advanced Analytics
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Enterprise</CardTitle>
          <CardDescription>For large organizations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">Custom</div>
          <p className="text-muted-foreground text-sm">contact sales</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-sm">
              <span className="mr-2">✓</span> Everything in Pro
            </li>
            <li className="flex items-center text-sm">
              <span className="mr-2">✓</span> Unlimited Storage
            </li>
            <li className="flex items-center text-sm">
              <span className="mr-2">✓</span> Dedicated Support
            </li>
            <li className="flex items-center text-sm">
              <span className="mr-2">✓</span> Custom Integrations
            </li>
            <li className="flex items-center text-sm">
              <span className="mr-2">✓</span> SLA Guarantee
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Contact Sales
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
}

// Notification card
export const NotificationCard: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Notifications</CardTitle>
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start space-x-3">
          <div className="h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">New message from Sarah</p>
            <p className="text-muted-foreground text-xs">
              Hey, are you available for a quick call?
            </p>
            <p className="text-muted-foreground text-xs">2 minutes ago</p>
          </div>
        </div>
        <Separator />
        <div className="flex items-start space-x-3">
          <div className="h-2 w-2 translate-y-1.5 rounded-full bg-green-500" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Deployment successful</p>
            <p className="text-muted-foreground text-xs">
              Your application has been deployed to production
            </p>
            <p className="text-muted-foreground text-xs">1 hour ago</p>
          </div>
        </div>
        <Separator />
        <div className="flex items-start space-x-3">
          <div className="h-2 w-2 translate-y-1.5 rounded-full bg-yellow-500" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Low disk space warning</p>
            <p className="text-muted-foreground text-xs">
              You have less than 10% disk space remaining
            </p>
            <p className="text-muted-foreground text-xs">3 hours ago</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full">
          View all notifications
        </Button>
      </CardFooter>
    </Card>
  ),
}

// Settings card
export const SettingsCard: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Email Notifications</Label>
            <p className="text-muted-foreground text-sm">
              Receive emails about your account activity
            </p>
          </div>
          <Button variant="outline" size="sm">
            Configure
          </Button>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Privacy Settings</Label>
            <p className="text-muted-foreground text-sm">Control who can see your profile</p>
          </div>
          <Button variant="outline" size="sm">
            Manage
          </Button>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Two-Factor Authentication</Label>
            <p className="text-muted-foreground text-sm">Add an extra layer of security</p>
          </div>
          <Badge variant="outline">Enabled</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  ),
}
