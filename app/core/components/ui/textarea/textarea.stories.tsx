import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Textarea, TextareaWithLabel, AutoResizeTextarea, ExpandableTextarea } from "./textarea"

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error", "success"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default Textarea
export const Default: Story = {
  args: {
    placeholder: "Enter your text here...",
  },
  render: (args) => (
    <div className="w-[400px]">
      <Textarea {...args} />
    </div>
  ),
}

// Textarea Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-4">
      <Textarea size="sm" placeholder="Small textarea" />
      <Textarea size="default" placeholder="Default textarea" />
      <Textarea size="lg" placeholder="Large textarea" />
    </div>
  ),
}

// Textarea Variants
export const Variants: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-4">
      <Textarea variant="default" placeholder="Default variant" />
      <Textarea variant="error" placeholder="Error variant" />
      <Textarea variant="success" placeholder="Success variant" />
    </div>
  ),
}

// Textarea States
export const States: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-4">
      <Textarea placeholder="Normal textarea" />
      <Textarea placeholder="Disabled textarea" disabled />
      <Textarea placeholder="Readonly textarea" readOnly value="This is read-only content" />
      <Textarea placeholder="Required textarea" required />
    </div>
  ),
}

// Textarea with Character Count
export const WithCharacterCount: Story = {
  render: () => {
    const [value, setValue] = useState("")

    return (
      <div className="flex w-[400px] flex-col gap-4">
        <Textarea
          placeholder="Type something..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          showCount
        />
        <Textarea
          placeholder="Limited to 100 characters"
          maxLength={100}
          showCount
          maxCount={100}
        />
        <Textarea
          placeholder="Limited to 250 characters"
          maxLength={250}
          showCount
          maxCount={250}
        />
      </div>
    )
  },
}

// Textarea with Label
export const WithLabel: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-6">
      <TextareaWithLabel label="Description" placeholder="Enter a description..." />
      <TextareaWithLabel
        label="Comments"
        placeholder="Add your comments..."
        hint="Please provide detailed feedback"
      />
      <TextareaWithLabel label="Message" placeholder="Type your message..." required />
      <TextareaWithLabel
        label="Bio"
        placeholder="Tell us about yourself..."
        error="Bio must be at least 50 characters"
      />
    </div>
  ),
}

// Auto-resize Textarea
export const AutoResize: Story = {
  render: () => {
    const [value, setValue] = useState("")

    return (
      <div className="flex w-[400px] flex-col gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Auto-resize Textarea</label>
          <AutoResizeTextarea
            placeholder="This textarea will grow as you type..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <p className="text-muted-foreground text-sm">
            The textarea automatically adjusts its height based on content
          </p>
        </div>
      </div>
    )
  },
}

// Expandable Textarea
export const Expandable: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Expandable Textarea</label>
        <ExpandableTextarea placeholder="Click to expand or focus to see more..." />
        <p className="text-muted-foreground text-sm">Starts collapsed and expands on interaction</p>
      </div>
    </div>
  ),
}

// Different Row Heights
export const RowHeights: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-4">
      <Textarea placeholder="3 rows" rows={3} />
      <Textarea placeholder="5 rows (default)" rows={5} />
      <Textarea placeholder="8 rows" rows={8} />
      <Textarea placeholder="12 rows" rows={12} />
    </div>
  ),
}

// Form Example
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      feedback: "",
      experience: "",
      suggestions: "",
    })

    return (
      <form className="flex w-[500px] flex-col gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Feedback Form</h3>

          <TextareaWithLabel
            label="Overall Feedback"
            placeholder="How was your experience?"
            value={formData.feedback}
            onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
            required
            showCount
            maxCount={500}
            maxLength={500}
          />

          <TextareaWithLabel
            label="Detailed Experience"
            placeholder="Please describe your experience in detail..."
            hint="Be as specific as possible"
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            rows={6}
          />

          <TextareaWithLabel
            label="Suggestions for Improvement"
            placeholder="Any suggestions?"
            value={formData.suggestions}
            onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
        >
          Submit Feedback
        </button>
      </form>
    )
  },
}

// Validation States
export const ValidationStates: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Default</label>
        <Textarea placeholder="Enter text" />
      </div>

      <div className="space-y-2">
        <label className="text-destructive text-sm font-medium">Error</label>
        <Textarea variant="error" placeholder="Invalid input" defaultValue="Too short" />
        <p className="text-destructive text-sm">Message must be at least 10 characters</p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-green-600">Success</label>
        <Textarea
          variant="success"
          placeholder="Valid input"
          defaultValue="This is a valid message with enough content"
        />
        <p className="text-sm text-green-600">Message looks good!</p>
      </div>
    </div>
  ),
}

// Real World Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="flex w-[600px] flex-col gap-8">
      {/* Comment Section */}
      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Add a Comment</h3>
        <Textarea placeholder="Write your comment..." showCount maxCount={500} maxLength={500} />
        <div className="flex gap-2">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium">
            Post Comment
          </button>
          <button className="hover:bg-muted rounded-md border px-4 py-2 text-sm font-medium">
            Cancel
          </button>
        </div>
      </div>

      {/* Support Ticket */}
      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Submit a Support Ticket</h3>
        <TextareaWithLabel
          label="Issue Description"
          placeholder="Describe the issue you're experiencing..."
          hint="Please be as detailed as possible"
          required
          rows={6}
        />
        <TextareaWithLabel
          label="Steps to Reproduce"
          placeholder="1. First step\n2. Second step\n3. Third step"
          rows={5}
        />
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2 text-sm font-medium">
          Submit Ticket
        </button>
      </div>

      {/* Bio/Profile */}
      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Edit Profile</h3>
        <TextareaWithLabel
          label="Bio"
          placeholder="Tell us about yourself..."
          hint="Maximum 160 characters"
          showCount
          maxCount={160}
          maxLength={160}
        />
        <TextareaWithLabel
          label="Skills & Expertise"
          placeholder="List your skills, separated by commas"
        />
      </div>

      {/* Message Compose */}
      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Compose Message</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Subject"
            className="border-input bg-background flex h-9 w-full rounded-md border px-3 py-1 text-sm"
          />
          <AutoResizeTextarea placeholder="Type your message here..." className="min-h-[150px]" />
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button className="hover:bg-muted rounded p-2">📎</button>
              <button className="hover:bg-muted rounded p-2">😊</button>
              <button className="hover:bg-muted rounded p-2">🖼️</button>
            </div>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Code/JSON Input */}
      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Configuration</h3>
        <TextareaWithLabel
          label="JSON Configuration"
          placeholder='{\n  "key": "value"\n}'
          className="font-mono"
          rows={8}
        />
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium">
          Validate & Save
        </button>
      </div>
    </div>
  ),
}
