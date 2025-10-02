import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { useState } from "react"
import { Switch, SwitchWithLabel, SwitchWithIcons, SwitchGroup, SwitchCard } from "./switch"
import { Label } from "../label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card/card"
import {
  Bell,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Check,
  X,
  Mail,
  Shield,
  Globe,
  Zap,
  Heart,
  Star,
  Smartphone,
  Monitor,
  BellRing,
  MessageSquare,
  Users,
  Settings,
} from "lucide-react"

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the switch",
    },
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "success", "warning"],
      description: "The color variant of the switch",
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

// Basic switch
export const Default: Story = {
  args: {
    defaultChecked: false,
  },
}

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-8">
      <div className="flex flex-col items-center space-y-2">
        <Switch size="sm" />
        <Label className="text-xs">Small</Label>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Switch size="md" />
        <Label className="text-xs">Medium</Label>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Switch size="lg" />
        <Label className="text-xs">Large</Label>
      </div>
    </div>
  ),
}

// Different variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Switch variant="default" defaultChecked />
        <Label>Default</Label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch variant="secondary" defaultChecked />
        <Label>Secondary</Label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch variant="destructive" defaultChecked />
        <Label>Destructive</Label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch variant="success" defaultChecked />
        <Label>Success</Label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch variant="warning" defaultChecked />
        <Label>Warning</Label>
      </div>
    </div>
  ),
}

// With labels
export const WithLabels: Story = {
  render: () => (
    <div className="space-y-6">
      <SwitchWithLabel label="Enable notifications" />
      <SwitchWithLabel
        label="Marketing emails"
        description="Receive emails about new products and features"
      />
      <SwitchWithLabel
        label="Two-factor authentication"
        description="Add an extra layer of security to your account"
        labelPosition="left"
      />
      <SwitchWithLabel
        label="Dark mode"
        description="Toggle dark mode for the application"
        labelPosition="left"
        defaultChecked
      />
    </div>
  ),
}

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <SwitchWithIcons
          onIcon={<Sun className="h-3 w-3 text-white" />}
          offIcon={<Moon className="h-3 w-3 text-slate-400" />}
        />
        <Label>Theme</Label>
      </div>
      <div className="flex items-center space-x-3">
        <SwitchWithIcons
          onIcon={<Volume2 className="h-3 w-3 text-white" />}
          offIcon={<VolumeX className="h-3 w-3 text-slate-400" />}
          size="lg"
        />
        <Label>Sound</Label>
      </div>
      <div className="flex items-center space-x-3">
        <SwitchWithIcons
          onIcon={<Wifi className="h-3 w-3 text-white" />}
          offIcon={<WifiOff className="h-3 w-3 text-slate-400" />}
          variant="success"
        />
        <Label>Wi-Fi</Label>
      </div>
      <div className="flex items-center space-x-3">
        <SwitchWithIcons
          onIcon={<Check className="h-3 w-3 text-white" />}
          offIcon={<X className="h-3 w-3 text-slate-400" />}
          variant="destructive"
        />
        <Label>Delete on exit</Label>
      </div>
    </div>
  ),
}

// Switch group
export const Group: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium">Vertical Group</h3>
        <SwitchGroup>
          <SwitchWithLabel label="Push notifications" />
          <SwitchWithLabel label="Email notifications" />
          <SwitchWithLabel label="SMS notifications" />
        </SwitchGroup>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-medium">Horizontal Group</h3>
        <SwitchGroup orientation="horizontal">
          <SwitchWithLabel label="Public" />
          <SwitchWithLabel label="Friends" />
          <SwitchWithLabel label="Private" />
        </SwitchGroup>
      </div>
    </div>
  ),
}

// Switch cards
export const Cards: Story = {
  render: () => (
    <div className="space-y-4">
      <SwitchCard
        title="Push Notifications"
        description="Receive push notifications on your device"
        icon={<Bell className="h-4 w-4" />}
      />
      <SwitchCard
        title="Email Marketing"
        description="Receive promotional emails and special offers"
        icon={<Mail className="h-4 w-4" />}
      />
      <SwitchCard
        title="Two-Factor Authentication"
        description="Add an extra layer of security to your account"
        icon={<Shield className="h-4 w-4" />}
        defaultChecked
      />
      <SwitchCard
        title="Public Profile"
        description="Make your profile visible to everyone"
        icon={<Globe className="h-4 w-4" />}
      />
    </div>
  ),
}

// Disabled state
export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Switch disabled />
        <Label className="text-muted-foreground">Disabled (off)</Label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch disabled defaultChecked />
        <Label className="text-muted-foreground">Disabled (on)</Label>
      </div>
      <SwitchWithLabel
        label="Disabled with label"
        description="This setting cannot be changed"
        disabled
      />
      <SwitchCard
        title="Disabled Card"
        description="This feature is not available"
        icon={<Lock className="h-4 w-4" />}
        disabled
      />
    </div>
  ),
}

// Controlled state
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Switch checked={checked} onCheckedChange={setChecked} />
          <Label>Controlled switch is {checked ? "on" : "off"}</Label>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setChecked(true)} className="rounded border px-3 py-1 text-sm">
            Turn On
          </button>
          <button onClick={() => setChecked(false)} className="rounded border px-3 py-1 text-sm">
            Turn Off
          </button>
          <button onClick={() => setChecked(!checked)} className="rounded border px-3 py-1 text-sm">
            Toggle
          </button>
        </div>
      </div>
    )
  },
}

// Real-world example: Settings panel
export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      dataSync: true,
      analytics: false,
    })

    const handleSettingChange = (key: keyof typeof settings) => (checked: boolean) => {
      setSettings((prev) => ({ ...prev, [key]: checked }))
    }

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Application Settings</CardTitle>
          <CardDescription>Manage your app preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SwitchCard
            title="Push Notifications"
            description="Get notified about important updates"
            icon={<BellRing className="h-4 w-4" />}
            checked={settings.notifications}
            onCheckedChange={handleSettingChange("notifications")}
          />
          <SwitchCard
            title="Dark Mode"
            description="Use dark theme across the app"
            icon={<Moon className="h-4 w-4" />}
            checked={settings.darkMode}
            onCheckedChange={handleSettingChange("darkMode")}
          />
          <SwitchCard
            title="Auto-save"
            description="Automatically save your work"
            icon={<Zap className="h-4 w-4" />}
            checked={settings.autoSave}
            onCheckedChange={handleSettingChange("autoSave")}
          />
          <SwitchCard
            title="Data Sync"
            description="Sync data across all devices"
            icon={<Smartphone className="h-4 w-4" />}
            checked={settings.dataSync}
            onCheckedChange={handleSettingChange("dataSync")}
          />
          <SwitchCard
            title="Analytics"
            description="Share usage data to improve the app"
            icon={<Settings className="h-4 w-4" />}
            checked={settings.analytics}
            onCheckedChange={handleSettingChange("analytics")}
          />
        </CardContent>
      </Card>
    )
  },
}

// Real-world example: Privacy settings
export const PrivacySettings: Story = {
  render: () => {
    const [privacy, setPrivacy] = useState({
      profilePublic: false,
      showEmail: false,
      showPhone: false,
      allowMessages: true,
      allowInvites: true,
    })

    const handlePrivacyChange = (key: keyof typeof privacy) => (checked: boolean) => {
      setPrivacy((prev) => ({ ...prev, [key]: checked }))
    }

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
          <CardDescription>Control who can see your information</CardDescription>
        </CardHeader>
        <CardContent>
          <SwitchGroup>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Public Profile</Label>
                <p className="text-muted-foreground text-xs">Anyone can view your profile</p>
              </div>
              <Switch
                checked={privacy.profilePublic}
                onCheckedChange={handlePrivacyChange("profilePublic")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Show Email</Label>
                <p className="text-muted-foreground text-xs">Display email on your profile</p>
              </div>
              <Switch
                checked={privacy.showEmail}
                onCheckedChange={handlePrivacyChange("showEmail")}
                disabled={!privacy.profilePublic}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Show Phone</Label>
                <p className="text-muted-foreground text-xs">Display phone on your profile</p>
              </div>
              <Switch
                checked={privacy.showPhone}
                onCheckedChange={handlePrivacyChange("showPhone")}
                disabled={!privacy.profilePublic}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Direct Messages</Label>
                <p className="text-muted-foreground text-xs">Allow others to message you</p>
              </div>
              <Switch
                checked={privacy.allowMessages}
                onCheckedChange={handlePrivacyChange("allowMessages")}
                variant="success"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Group Invites</Label>
                <p className="text-muted-foreground text-xs">Receive group invitations</p>
              </div>
              <Switch
                checked={privacy.allowInvites}
                onCheckedChange={handlePrivacyChange("allowInvites")}
                variant="success"
              />
            </div>
          </SwitchGroup>
        </CardContent>
      </Card>
    )
  },
}

// Real-world example: Notification preferences
export const NotificationPreferences: Story = {
  render: () => {
    const [notifications, setNotifications] = useState({
      email: {
        marketing: true,
        updates: true,
        security: true,
      },
      push: {
        messages: true,
        mentions: true,
        reminders: false,
      },
    })

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Email Notifications</CardTitle>
            <CardDescription>Choose what emails you want to receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SwitchWithLabel
              label="Marketing Emails"
              description="New features, tips, and special offers"
              checked={notifications.email.marketing}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  email: { ...prev.email, marketing: checked },
                }))
              }
            />
            <SwitchWithLabel
              label="Product Updates"
              description="Important updates about the service"
              checked={notifications.email.updates}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  email: { ...prev.email, updates: checked },
                }))
              }
            />
            <SwitchWithLabel
              label="Security Alerts"
              description="Notifications about your account security"
              checked={notifications.email.security}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  email: { ...prev.email, security: checked },
                }))
              }
              variant="destructive"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Push Notifications</CardTitle>
            <CardDescription>Manage push notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SwitchWithLabel
              label="Direct Messages"
              description="Get notified when someone messages you"
              checked={notifications.push.messages}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  push: { ...prev.push, messages: checked },
                }))
              }
            />
            <SwitchWithLabel
              label="Mentions"
              description="Get notified when someone mentions you"
              checked={notifications.push.mentions}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  push: { ...prev.push, mentions: checked },
                }))
              }
            />
            <SwitchWithLabel
              label="Reminders"
              description="Get reminded about upcoming events"
              checked={notifications.push.reminders}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  push: { ...prev.push, reminders: checked },
                }))
              }
            />
          </CardContent>
        </Card>
      </div>
    )
  },
}

// Real-world example: Feature toggles
export const FeatureToggles: Story = {
  render: () => {
    const [features, setFeatures] = useState({
      beta: false,
      experimental: false,
      devMode: false,
    })

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Advanced Features</CardTitle>
          <CardDescription>Enable experimental features at your own risk</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <Label className="text-blue-900 dark:text-blue-100">Beta Features</Label>
                </div>
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  Try new features before they're released
                </p>
              </div>
              <Switch
                checked={features.beta}
                onCheckedChange={(checked) => setFeatures((prev) => ({ ...prev, beta: checked }))}
                variant="secondary"
              />
            </div>
          </div>

          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-600" />
                  <Label className="text-yellow-900 dark:text-yellow-100">Experimental Mode</Label>
                </div>
                <p className="text-xs text-yellow-700 dark:text-yellow-300">
                  Highly unstable features for testing
                </p>
              </div>
              <Switch
                checked={features.experimental}
                onCheckedChange={(checked) =>
                  setFeatures((prev) => ({ ...prev, experimental: checked }))
                }
                variant="warning"
                disabled={!features.beta}
              />
            </div>
          </div>

          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-red-600" />
                  <Label className="text-red-900 dark:text-red-100">Developer Mode</Label>
                </div>
                <p className="text-xs text-red-700 dark:text-red-300">
                  Access developer tools and logs
                </p>
              </div>
              <Switch
                checked={features.devMode}
                onCheckedChange={(checked) =>
                  setFeatures((prev) => ({ ...prev, devMode: checked }))
                }
                variant="destructive"
                disabled={!features.experimental}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
}
