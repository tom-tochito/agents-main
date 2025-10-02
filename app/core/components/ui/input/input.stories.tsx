import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Input, InputWithLabel, SearchInput, PasswordInput } from "./input"
import { Mail, User, Lock, CreditCard, Phone, Calendar, Globe } from "lucide-react"

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
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

// Default Input
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
  render: (args) => (
    <div className="w-[350px]">
      <Input {...args} />
    </div>
  ),
}

// Input Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-4">
      <Input size="sm" placeholder="Small input" />
      <Input size="default" placeholder="Default input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
}

// Input Variants
export const Variants: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-4">
      <Input variant="default" placeholder="Default variant" />
      <Input variant="error" placeholder="Error variant" />
      <Input variant="success" placeholder="Success variant" />
    </div>
  ),
}

// Input States
export const States: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-4">
      <Input placeholder="Normal input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="Readonly input" readOnly value="Read-only value" />
      <Input placeholder="Required input" required />
    </div>
  ),
}

// Input Types
export const Types: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-4">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="tel" placeholder="Phone input" />
      <Input type="url" placeholder="URL input" />
      <Input type="date" />
      <Input type="time" />
      <Input type="datetime-local" />
      <Input type="file" />
    </div>
  ),
}

// Input with Icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-4">
      <Input placeholder="Email address" startIcon={<Mail className="h-4 w-4" />} />
      <Input placeholder="Username" startIcon={<User className="h-4 w-4" />} />
      <Input
        placeholder="Amount"
        startIcon={<span className="text-sm">$</span>}
        endIcon={<span className="text-sm">.00</span>}
      />
      <Input
        placeholder="Website"
        startIcon={<Globe className="h-4 w-4" />}
        endIcon={<span className="text-xs">.com</span>}
      />
      <Input placeholder="Security code" endIcon={<Lock className="h-4 w-4" />} />
    </div>
  ),
}

// Input with Label
export const WithLabel: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-6">
      <InputWithLabel label="Email Address" placeholder="john@example.com" type="email" />
      <InputWithLabel
        label="Username"
        placeholder="Enter username"
        hint="Choose a unique username"
      />
      <InputWithLabel label="Password" placeholder="Enter password" type="password" required />
      <InputWithLabel
        label="Phone Number"
        placeholder="+1 (555) 000-0000"
        error="Please enter a valid phone number"
      />
    </div>
  ),
}

// Search Input
export const Search: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("")

    return (
      <div className="flex w-[350px] flex-col gap-4">
        <SearchInput
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClear={() => setSearchValue("")}
        />
        <div className="text-muted-foreground text-sm">
          Search value: {searchValue || "(empty)"}
        </div>
      </div>
    )
  },
}

// Password Input
export const Password: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-4">
      <PasswordInput placeholder="Enter password" />
      <PasswordInput placeholder="Confirm password" />
    </div>
  ),
}

// Form Example
export const FormExample: Story = {
  render: () => (
    <form className="flex w-[400px] flex-col gap-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Create Account</h3>
        <InputWithLabel label="Full Name" placeholder="John Doe" required />
        <InputWithLabel
          label="Email Address"
          placeholder="john@example.com"
          type="email"
          required
        />
        <InputWithLabel
          label="Username"
          placeholder="johndoe"
          hint="This will be your unique identifier"
          required
        />
        <div className="space-y-2">
          <label className="text-sm font-medium">Password</label>
          <PasswordInput placeholder="Enter password" />
          <p className="text-muted-foreground text-sm">Must be at least 8 characters</p>
        </div>
        <InputWithLabel label="Phone Number" placeholder="+1 (555) 000-0000" type="tel" />
      </div>
      <button
        type="submit"
        className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
      >
        Create Account
      </button>
    </form>
  ),
}

// Credit Card Input
export const CreditCardInput: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-4">
      <Input
        placeholder="0000 0000 0000 0000"
        startIcon={<CreditCard className="h-4 w-4" />}
        maxLength={19}
      />
      <div className="flex gap-4">
        <Input placeholder="MM/YY" maxLength={5} />
        <Input placeholder="CVC" maxLength={3} type="password" />
      </div>
    </div>
  ),
}

// Input Group
export const InputGroup: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-4">
      <div className="flex gap-2">
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
      </div>
      <div className="flex">
        <div className="bg-muted border-input flex items-center rounded-l-md border border-r-0 px-3 text-sm">
          https://
        </div>
        <Input placeholder="yoursite" className="rounded-l-none" />
        <div className="bg-muted border-input flex items-center rounded-r-md border border-l-0 px-3 text-sm">
          .com
        </div>
      </div>
      <div className="flex">
        <select className="border-input bg-background flex h-9 rounded-md rounded-r-none border border-r-0 px-3 py-1 text-sm">
          <option>+1</option>
          <option>+44</option>
          <option>+91</option>
        </select>
        <Input type="tel" placeholder="(555) 000-0000" className="rounded-l-none" />
      </div>
    </div>
  ),
}

// Validation States
export const ValidationStates: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Default</label>
        <Input placeholder="Enter value" />
      </div>

      <div className="space-y-2">
        <label className="text-destructive text-sm font-medium">Error</label>
        <Input variant="error" placeholder="Invalid input" defaultValue="Invalid value" />
        <p className="text-destructive text-sm">This field has an error</p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-green-600">Success</label>
        <Input variant="success" placeholder="Valid input" defaultValue="Valid value" />
        <p className="text-sm text-green-600">This field is valid</p>
      </div>
    </div>
  ),
}

// Real World Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="flex w-[500px] flex-col gap-8">
      {/* Login Form */}
      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Sign In</h3>
        <Input type="email" placeholder="Email address" startIcon={<Mail className="h-4 w-4" />} />
        <PasswordInput placeholder="Password" />
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2 text-sm font-medium">
          Sign In
        </button>
      </div>

      {/* Search Bar */}
      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Search Products</h3>
        <SearchInput placeholder="Search for products..." className="w-full" />
      </div>

      {/* Payment Form */}
      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Payment Details</h3>
        <InputWithLabel label="Cardholder Name" placeholder="John Doe" required />
        <div className="space-y-2">
          <label className="text-sm font-medium">Card Number</label>
          <Input placeholder="0000 0000 0000 0000" startIcon={<CreditCard className="h-4 w-4" />} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputWithLabel label="Expiry Date" placeholder="MM/YY" required />
          <InputWithLabel label="CVC" placeholder="123" type="password" required />
        </div>
      </div>

      {/* Profile Form */}
      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Profile Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <InputWithLabel label="First Name" placeholder="John" />
          <InputWithLabel label="Last Name" placeholder="Doe" />
        </div>
        <InputWithLabel
          label="Email"
          type="email"
          placeholder="john@example.com"
          hint="We'll never share your email"
        />
        <InputWithLabel label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
        <InputWithLabel label="Birthday" type="date" />
      </div>
    </div>
  ),
}
