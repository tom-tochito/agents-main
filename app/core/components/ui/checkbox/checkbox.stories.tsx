import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox, CheckboxWithLabel, CheckboxGroup, CheckboxCard } from "./checkbox"
import React, { useState } from "react"
import { Button } from "../button"
import { Badge } from "../badge"
import {
  Bell,
  Mail,
  MessageSquare,
  Shield,
  Globe,
  Lock,
  Eye,
  Users,
  Zap,
  Heart,
  Star,
  Settings,
} from "lucide-react"

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the checkbox",
    },
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive"],
      description: "The visual style variant",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    indeterminate: {
      control: "boolean",
      description: "Whether the checkbox is in indeterminate state",
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return <Checkbox checked={checked} onCheckedChange={(checked) => setChecked(checked === true)} />
  },
}

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <CheckboxWithLabel
        label="Accept terms and conditions"
        checked={checked}
        onCheckedChange={(checked) => setChecked(checked === true)}
      />
    )
  },
}

export const WithDescription: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <CheckboxWithLabel
        label="Enable notifications"
        description="You will receive email notifications for important updates"
        checked={checked}
        onCheckedChange={(checked) => setChecked(checked === true)}
      />
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [checkedSm, setCheckedSm] = useState(false)
    const [checkedMd, setCheckedMd] = useState(false)
    const [checkedLg, setCheckedLg] = useState(false)

    return (
      <div className="flex items-center gap-4">
        <CheckboxWithLabel
          size="sm"
          label="Small"
          checked={checkedSm}
          onCheckedChange={(checked) => setCheckedSm(checked === true)}
        />
        <CheckboxWithLabel
          size="md"
          label="Medium"
          checked={checkedMd}
          onCheckedChange={(checked) => setCheckedMd(checked === true)}
        />
        <CheckboxWithLabel
          size="lg"
          label="Large"
          checked={checkedLg}
          onCheckedChange={(checked) => setCheckedLg(checked === true)}
        />
      </div>
    )
  },
}

export const Variants: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <CheckboxWithLabel variant="default" label="Default variant" defaultChecked />
        <CheckboxWithLabel variant="secondary" label="Secondary variant" defaultChecked />
        <CheckboxWithLabel variant="destructive" label="Destructive variant" defaultChecked />
      </div>
    )
  },
}

export const States: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <CheckboxWithLabel label="Unchecked" checked={false} />
        <CheckboxWithLabel label="Checked" checked={true} />
        <CheckboxWithLabel label="Indeterminate" indeterminate={true} />
        <CheckboxWithLabel label="Disabled" disabled />
        <CheckboxWithLabel label="Disabled & Checked" checked={true} disabled />
      </div>
    )
  },
}

export const IndeterminateExample: Story = {
  render: () => {
    const [parentChecked, setParentChecked] = useState<boolean | "indeterminate">(false)
    const [option1, setOption1] = useState(false)
    const [option2, setOption2] = useState(false)
    const [option3, setOption3] = useState(false)

    React.useEffect(() => {
      if (option1 && option2 && option3) {
        setParentChecked(true)
      } else if (option1 || option2 || option3) {
        setParentChecked("indeterminate")
      } else {
        setParentChecked(false)
      }
    }, [option1, option2, option3])

    const handleParentChange = (checked: boolean | "indeterminate") => {
      if (checked === true) {
        setOption1(true)
        setOption2(true)
        setOption3(true)
      } else {
        setOption1(false)
        setOption2(false)
        setOption3(false)
      }
      setParentChecked(checked)
    }

    return (
      <div className="space-y-4">
        <CheckboxWithLabel
          label="Select all"
          checked={parentChecked === true}
          indeterminate={parentChecked === "indeterminate"}
          onCheckedChange={handleParentChange}
        />
        <div className="ml-6 space-y-2">
          <CheckboxWithLabel label="Option 1" checked={option1} onCheckedChange={(checked) => setOption1(checked === true)} />
          <CheckboxWithLabel label="Option 2" checked={option2} onCheckedChange={(checked) => setOption2(checked === true)} />
          <CheckboxWithLabel label="Option 3" checked={option3} onCheckedChange={(checked) => setOption3(checked === true)} />
        </div>
      </div>
    )
  },
}

export const CheckboxGroupVertical: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const handleCheckboxChange = (value: string, checked: boolean | "indeterminate") => {
      if (checked) {
        setSelectedItems([...selectedItems, value])
      } else {
        setSelectedItems(selectedItems.filter((item) => item !== value))
      }
    }

    return (
      <div className="space-y-4">
        <CheckboxGroup orientation="vertical">
          <CheckboxWithLabel
            label="Email notifications"
            description="Receive email updates about your account"
            checked={selectedItems.includes("email")}
            onCheckedChange={(checked) => handleCheckboxChange("email", checked)}
          />
          <CheckboxWithLabel
            label="SMS notifications"
            description="Receive text messages for important alerts"
            checked={selectedItems.includes("sms")}
            onCheckedChange={(checked) => handleCheckboxChange("sms", checked)}
          />
          <CheckboxWithLabel
            label="Push notifications"
            description="Receive push notifications on your devices"
            checked={selectedItems.includes("push")}
            onCheckedChange={(checked) => handleCheckboxChange("push", checked)}
          />
        </CheckboxGroup>
        {selectedItems.length > 0 && (
          <p className="text-muted-foreground text-sm">Selected: {selectedItems.join(", ")}</p>
        )}
      </div>
    )
  },
}

export const CheckboxGroupHorizontal: Story = {
  render: () => {
    return (
      <CheckboxGroup orientation="horizontal">
        <CheckboxWithLabel label="Option A" />
        <CheckboxWithLabel label="Option B" />
        <CheckboxWithLabel label="Option C" />
        <CheckboxWithLabel label="Option D" />
      </CheckboxGroup>
    )
  },
}

export const CheckboxCards: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])

    const handleChange = (value: string) => (checked: boolean | "indeterminate") => {
      if (checked) {
        setSelected([...selected, value])
      } else {
        setSelected(selected.filter((item) => item !== value))
      }
    }

    return (
      <div className="grid max-w-md gap-4">
        <CheckboxCard
          title="Basic Plan"
          description="Perfect for individuals and small projects"
          icon={<Zap className="text-primary h-5 w-5" />}
          checked={selected.includes("basic")}
          onCheckedChange={handleChange("basic")}
        />
        <CheckboxCard
          title="Pro Plan"
          description="Best for growing teams and businesses"
          icon={<Star className="text-primary h-5 w-5" />}
          checked={selected.includes("pro")}
          onCheckedChange={handleChange("pro")}
        />
        <CheckboxCard
          title="Enterprise"
          description="Advanced features for large organizations"
          icon={<Shield className="text-primary h-5 w-5" />}
          checked={selected.includes("enterprise")}
          onCheckedChange={handleChange("enterprise")}
        />
      </div>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const [privacy, setPrivacy] = useState({
      profile: true,
      activity: false,
      email: true,
    })

    const [features, setFeatures] = useState({
      darkMode: false,
      notifications: true,
      autoSave: true,
      analytics: false,
    })

    return (
      <div className="max-w-2xl space-y-8">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Terms & Conditions</h3>
          <div className="space-y-4">
            <CheckboxWithLabel
              label="I accept the terms and conditions"
              description="By clicking this checkbox, you agree to the terms and conditions."
              required
            />
            <CheckboxWithLabel
              label="Subscribe to newsletter"
              description="Get updates about new features and products."
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Privacy Settings</h3>
          <CheckboxGroup>
            <CheckboxWithLabel
              label="Make profile public"
              description="Anyone can see your profile information"
              checked={privacy.profile}
              onCheckedChange={(checked) => setPrivacy({ ...privacy, profile: checked as boolean })}
            />
            <CheckboxWithLabel
              label="Show activity status"
              description="Others can see when you're online"
              checked={privacy.activity}
              onCheckedChange={(checked) =>
                setPrivacy({ ...privacy, activity: checked as boolean })
              }
            />
            <CheckboxWithLabel
              label="Allow email notifications"
              description="Receive important updates via email"
              checked={privacy.email}
              onCheckedChange={(checked) => setPrivacy({ ...privacy, email: checked as boolean })}
            />
          </CheckboxGroup>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Feature Preferences</h3>
          <div className="grid grid-cols-2 gap-4">
            <CheckboxWithLabel
              label="Dark Mode"
              checked={features.darkMode}
              onCheckedChange={(checked) =>
                setFeatures({ ...features, darkMode: checked as boolean })
              }
            />
            <CheckboxWithLabel
              label="Notifications"
              checked={features.notifications}
              onCheckedChange={(checked) =>
                setFeatures({ ...features, notifications: checked as boolean })
              }
            />
            <CheckboxWithLabel
              label="Auto-save"
              checked={features.autoSave}
              onCheckedChange={(checked) =>
                setFeatures({ ...features, autoSave: checked as boolean })
              }
            />
            <CheckboxWithLabel
              label="Analytics"
              checked={features.analytics}
              onCheckedChange={(checked) =>
                setFeatures({ ...features, analytics: checked as boolean })
              }
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Select Permissions</h3>
          <div className="space-y-4">
            <CheckboxCard
              title="Read Access"
              description="View and read all content"
              icon={<Eye className="h-5 w-5" />}
              defaultChecked
            />
            <CheckboxCard
              title="Write Access"
              description="Create and edit content"
              icon={<MessageSquare className="h-5 w-5" />}
            />
            <CheckboxCard
              title="Admin Access"
              description="Full control over settings and users"
              icon={<Settings className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
    )
  },
}

export const WithForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      newsletter: false,
      updates: false,
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
    }

    return (
      <form onSubmit={handleSubmit} className="max-w-md space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="space-y-3">
          <CheckboxWithLabel
            label="I accept the terms and conditions"
            checked={formData.terms}
            onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
            required
          />
          <CheckboxWithLabel
            label="Subscribe to newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, newsletter: checked as boolean })
            }
          />
          <CheckboxWithLabel
            label="Receive product updates"
            checked={formData.updates}
            onCheckedChange={(checked) => setFormData({ ...formData, updates: checked as boolean })}
          />
        </div>

        <Button type="submit" className="w-full" disabled={!formData.terms}>
          Submit
        </Button>

        {!formData.terms && (
          <p className="text-destructive text-sm">* You must accept the terms and conditions</p>
        )}
      </form>
    )
  },
}

export const TaskList: Story = {
  render: () => {
    const [tasks, setTasks] = useState([
      { id: 1, text: "Complete project documentation", done: true },
      { id: 2, text: "Review pull requests", done: true },
      { id: 3, text: "Update dependencies", done: false },
      { id: 4, text: "Write unit tests", done: false },
      { id: 5, text: "Deploy to staging", done: false },
    ])

    const toggleTask = (id: number) => {
      setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)))
    }

    const completedCount = tasks.filter((t) => t.done).length

    return (
      <div className="max-w-md space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Today's Tasks</h3>
          <Badge variant="secondary">
            {completedCount}/{tasks.length} completed
          </Badge>
        </div>

        <CheckboxGroup>
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center space-x-3 rounded-lg border p-3 ${
                task.done ? "bg-muted/50" : ""
              }`}
            >
              <Checkbox checked={task.done} onCheckedChange={(checked) => toggleTask(task.id)} />
              <label
                className={`flex-1 cursor-pointer ${
                  task.done ? "text-muted-foreground line-through" : ""
                }`}
              >
                {task.text}
              </label>
            </div>
          ))}
        </CheckboxGroup>

        <div className="flex justify-between border-t pt-4">
          <Button variant="outline" size="sm">
            Clear Completed
          </Button>
          <Button size="sm">Add Task</Button>
        </div>
      </div>
    )
  },
}
