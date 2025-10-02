import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectWithLabel,
  NativeSelect,
} from "./select"

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default Select
export const Default: Story = {
  render: () => (
    <div className="w-[250px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          <SelectItem value="option4">Option 4</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

// Select Variants
export const Variants: Story = {
  render: () => (
    <div className="flex w-[250px] flex-col gap-4">
      <Select>
        <SelectTrigger variant="default">
          <SelectValue placeholder="Default variant" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger variant="error">
          <SelectValue placeholder="Error variant" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger variant="success">
          <SelectValue placeholder="Success variant" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

// Select States
export const States: Story = {
  render: () => (
    <div className="flex w-[250px] flex-col gap-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Normal select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>

      <Select disabled>
        <SelectTrigger disabled>
          <SelectValue placeholder="Disabled select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="option1">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Pre-selected Option</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

// Select with Groups
export const WithGroups: Story = {
  render: () => (
    <div className="w-[250px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="potato">Potato</SelectItem>
            <SelectItem value="tomato">Tomato</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
}

// Select with Label
export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState("")
    const [value2, setValue2] = useState("")

    return (
      <div className="flex w-[300px] flex-col gap-6">
        <SelectWithLabel label="Country">
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger>
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectContent>
          </Select>
        </SelectWithLabel>

        <SelectWithLabel
          label="Preferred Language"
          hint="Choose your preferred language for communication"
        >
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </SelectContent>
          </Select>
        </SelectWithLabel>

        <SelectWithLabel label="Department" required>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
            </SelectContent>
          </Select>
        </SelectWithLabel>

        <SelectWithLabel label="Team Size" error="Please select a valid team size">
          <Select value={value2} onValueChange={setValue2}>
            <SelectTrigger variant="error">
              <SelectValue placeholder="Select team size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5">1-5 people</SelectItem>
              <SelectItem value="6-10">6-10 people</SelectItem>
              <SelectItem value="11-50">11-50 people</SelectItem>
              <SelectItem value="50+">50+ people</SelectItem>
            </SelectContent>
          </Select>
        </SelectWithLabel>
      </div>
    )
  },
}

// Long List
export const LongList: Story = {
  render: () => {
    const timezones = [
      { value: "utc-12", label: "UTC-12:00 Baker Island" },
      { value: "utc-11", label: "UTC-11:00 Samoa" },
      { value: "utc-10", label: "UTC-10:00 Hawaii" },
      { value: "utc-9", label: "UTC-09:00 Alaska" },
      { value: "utc-8", label: "UTC-08:00 Pacific Time" },
      { value: "utc-7", label: "UTC-07:00 Mountain Time" },
      { value: "utc-6", label: "UTC-06:00 Central Time" },
      { value: "utc-5", label: "UTC-05:00 Eastern Time" },
      { value: "utc-4", label: "UTC-04:00 Atlantic Time" },
      { value: "utc-3", label: "UTC-03:00 Buenos Aires" },
      { value: "utc-2", label: "UTC-02:00 Mid-Atlantic" },
      { value: "utc-1", label: "UTC-01:00 Azores" },
      { value: "utc", label: "UTC+00:00 London" },
      { value: "utc+1", label: "UTC+01:00 Paris" },
      { value: "utc+2", label: "UTC+02:00 Cairo" },
      { value: "utc+3", label: "UTC+03:00 Moscow" },
      { value: "utc+4", label: "UTC+04:00 Dubai" },
      { value: "utc+5", label: "UTC+05:00 Karachi" },
      { value: "utc+6", label: "UTC+06:00 Dhaka" },
      { value: "utc+7", label: "UTC+07:00 Bangkok" },
      { value: "utc+8", label: "UTC+08:00 Beijing" },
      { value: "utc+9", label: "UTC+09:00 Tokyo" },
      { value: "utc+10", label: "UTC+10:00 Sydney" },
      { value: "utc+11", label: "UTC+11:00 Solomon Islands" },
      { value: "utc+12", label: "UTC+12:00 Auckland" },
    ]

    return (
      <div className="w-[300px]">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select timezone" />
          </SelectTrigger>
          <SelectContent>
            {timezones.map((tz) => (
              <SelectItem key={tz.value} value={tz.value}>
                {tz.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  },
}

// Native Select
export const NativeSelectExample: Story = {
  render: () => {
    const [value, setValue] = useState("")

    const options = [
      { value: "", label: "Select an option", disabled: true },
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
      { value: "option4", label: "Option 4" },
    ]

    return (
      <div className="flex w-[250px] flex-col gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Native Select</label>
          <NativeSelect
            value={value}
            onChange={(e) => setValue(e.target.value)}
            options={options}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Native Select with Children</label>
          <NativeSelect>
            <option value="">Choose...</option>
            <optgroup label="Group 1">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </optgroup>
            <optgroup label="Group 2">
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </optgroup>
          </NativeSelect>
        </div>
      </div>
    )
  },
}

// Form Example
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      country: "",
      state: "",
      city: "",
      language: "",
    })

    return (
      <form className="flex w-[400px] flex-col gap-6">
        <h3 className="text-lg font-semibold">Location Settings</h3>

        <SelectWithLabel label="Country" required>
          <Select
            value={formData.country}
            onValueChange={(value) => setFormData({ ...formData, country: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectContent>
          </Select>
        </SelectWithLabel>

        <SelectWithLabel label="State/Province" required>
          <Select
            value={formData.state}
            onValueChange={(value) => setFormData({ ...formData, state: value })}
            disabled={!formData.country}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ca">California</SelectItem>
              <SelectItem value="ny">New York</SelectItem>
              <SelectItem value="tx">Texas</SelectItem>
              <SelectItem value="fl">Florida</SelectItem>
            </SelectContent>
          </Select>
        </SelectWithLabel>

        <SelectWithLabel label="City">
          <Select
            value={formData.city}
            onValueChange={(value) => setFormData({ ...formData, city: value })}
            disabled={!formData.state}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sf">San Francisco</SelectItem>
              <SelectItem value="la">Los Angeles</SelectItem>
              <SelectItem value="sd">San Diego</SelectItem>
              <SelectItem value="sj">San Jose</SelectItem>
            </SelectContent>
          </Select>
        </SelectWithLabel>

        <SelectWithLabel label="Preferred Language" hint="For all communications">
          <Select
            value={formData.language}
            onValueChange={(value) => setFormData({ ...formData, language: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </SelectContent>
          </Select>
        </SelectWithLabel>

        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
        >
          Save Settings
        </button>
      </form>
    )
  },
}

// Real World Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="flex w-[500px] flex-col gap-8">
      {/* User Settings */}
      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">User Preferences</h3>

        <SelectWithLabel label="Theme">
          <Select defaultValue="system">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </SelectWithLabel>

        <SelectWithLabel label="Font Size">
          <Select defaultValue="medium">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
              <SelectItem value="extra-large">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </SelectWithLabel>
      </div>

      {/* Billing */}
      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Billing Information</h3>

        <div className="grid grid-cols-2 gap-4">
          <SelectWithLabel label="Card Type">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select card" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="visa">Visa</SelectItem>
                <SelectItem value="mastercard">Mastercard</SelectItem>
                <SelectItem value="amex">American Express</SelectItem>
                <SelectItem value="discover">Discover</SelectItem>
              </SelectContent>
            </Select>
          </SelectWithLabel>

          <SelectWithLabel label="Billing Cycle">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select cycle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="annually">Annually</SelectItem>
              </SelectContent>
            </Select>
          </SelectWithLabel>
        </div>

        <SelectWithLabel label="Currency">
          <Select defaultValue="usd">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Popular</SelectLabel>
                <SelectItem value="usd">USD - US Dollar</SelectItem>
                <SelectItem value="eur">EUR - Euro</SelectItem>
                <SelectItem value="gbp">GBP - British Pound</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Others</SelectLabel>
                <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                <SelectItem value="aud">AUD - Australian Dollar</SelectItem>
                <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                <SelectItem value="cny">CNY - Chinese Yuan</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </SelectWithLabel>
      </div>

      {/* Project Settings */}
      <div className="space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Project Settings</h3>

        <SelectWithLabel label="Project Status">
          <Select defaultValue="active">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="planning">Planning</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="on-hold">On Hold</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </SelectWithLabel>

        <SelectWithLabel label="Priority Level">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">🔵 Low</SelectItem>
              <SelectItem value="medium">🟡 Medium</SelectItem>
              <SelectItem value="high">🟠 High</SelectItem>
              <SelectItem value="critical">🔴 Critical</SelectItem>
            </SelectContent>
          </Select>
        </SelectWithLabel>

        <SelectWithLabel label="Assigned Team">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select team" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Development</SelectLabel>
                <SelectItem value="frontend">Frontend Team</SelectItem>
                <SelectItem value="backend">Backend Team</SelectItem>
                <SelectItem value="mobile">Mobile Team</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Design</SelectLabel>
                <SelectItem value="ux">UX Team</SelectItem>
                <SelectItem value="ui">UI Team</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Management</SelectLabel>
                <SelectItem value="pm">Product Management</SelectItem>
                <SelectItem value="qa">Quality Assurance</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </SelectWithLabel>
      </div>
    </div>
  ),
}
