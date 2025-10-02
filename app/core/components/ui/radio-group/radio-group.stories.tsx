import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupWithLabels,
  RadioCard,
  HorizontalRadioGroup,
  ButtonRadioGroup,
} from "./radio-group"
import { Label } from "../label"
import { Button } from "../button"
import {
  CreditCard,
  Wallet,
  Banknote,
  Zap,
  Timer,
  Calendar,
  Globe,
  Lock,
  Shield,
  Users,
  User,
  Building,
  Package,
  Truck,
  Plane,
  Ship,
  Moon,
  Sun,
  Monitor,
} from "lucide-react"

const meta: Meta<typeof RadioGroup> = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default Radio Group
export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <Label htmlFor="option-1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <Label htmlFor="option-2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-3" id="option-3" />
        <Label htmlFor="option-3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
}

// Radio Group Variants
export const Variants: Story = {
  render: () => (
    <div className="flex gap-8">
      <RadioGroup defaultValue="default">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" variant="default" />
          <Label>Default</Label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="secondary">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="secondary" variant="secondary" />
          <Label>Secondary</Label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="destructive">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="destructive" variant="destructive" />
          <Label>Destructive</Label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="success">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="success" variant="success" />
          <Label>Success</Label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="warning">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="warning" variant="warning" />
          <Label>Warning</Label>
        </div>
      </RadioGroup>
    </div>
  ),
}

// With Descriptions
export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="standard" className="space-y-3">
      <div className="flex items-start space-x-3">
        <RadioGroupItem value="standard" id="standard" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="standard" className="font-medium">
            Standard Shipping
          </Label>
          <p className="text-muted-foreground text-sm">Delivery in 5-7 business days ($5.00)</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <RadioGroupItem value="express" id="express" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="express" className="font-medium">
            Express Shipping
          </Label>
          <p className="text-muted-foreground text-sm">Delivery in 2-3 business days ($15.00)</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <RadioGroupItem value="overnight" id="overnight" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="overnight" className="font-medium">
            Overnight Shipping
          </Label>
          <p className="text-muted-foreground text-sm">Next business day delivery ($30.00)</p>
        </div>
      </div>
    </RadioGroup>
  ),
}

// Horizontal Layout
export const Horizontal: Story = {
  render: () => (
    <HorizontalRadioGroup defaultValue="small">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="small" id="size-small" />
        <Label htmlFor="size-small">Small</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="medium" id="size-medium" />
        <Label htmlFor="size-medium">Medium</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="large" id="size-large" />
        <Label htmlFor="size-large">Large</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="xlarge" id="size-xlarge" />
        <Label htmlFor="size-xlarge">X-Large</Label>
      </div>
    </HorizontalRadioGroup>
  ),
}

// Disabled State
export const DisabledState: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="dis-1" />
        <Label htmlFor="dis-1">Available Option</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="dis-2" disabled />
        <Label htmlFor="dis-2" className="opacity-50">
          Disabled Option
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-3" id="dis-3" />
        <Label htmlFor="dis-3">Another Available Option</Label>
      </div>
    </RadioGroup>
  ),
}

// With Labels Component
export const WithLabelsComponent: Story = {
  render: () => {
    const [value, setValue] = useState("monthly")

    return (
      <div className="w-[400px]">
        <RadioGroupWithLabels
          label="Billing Cycle"
          description="Choose how often you want to be billed"
          value={value}
          onValueChange={setValue}
          required
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="monthly" id="billing-monthly" />
            <Label htmlFor="billing-monthly">Monthly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="quarterly" id="billing-quarterly" />
            <Label htmlFor="billing-quarterly">Quarterly (Save 10%)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yearly" id="billing-yearly" />
            <Label htmlFor="billing-yearly">Yearly (Save 20%)</Label>
          </div>
        </RadioGroupWithLabels>

        <p className="text-muted-foreground mt-4 text-sm">Selected: {value}</p>
      </div>
    )
  },
}

// Radio Cards
export const RadioCards: Story = {
  render: () => {
    const [value, setValue] = useState("starter")

    return (
      <RadioGroup value={value} onValueChange={setValue} className="grid w-[400px] gap-3">
        <RadioCard
          value="starter"
          title="Starter Plan"
          description="Perfect for individuals and small projects"
          icon={<User className="h-4 w-4" />}
        />
        <RadioCard
          value="pro"
          title="Pro Plan"
          description="Ideal for professionals and growing teams"
          icon={<Users className="h-4 w-4" />}
        />
        <RadioCard
          value="enterprise"
          title="Enterprise Plan"
          description="Advanced features for large organizations"
          icon={<Building className="h-4 w-4" />}
        />
      </RadioGroup>
    )
  },
}

// Button Radio Group
export const ButtonGroup: Story = {
  render: () => {
    const [size, setSize] = useState("medium")
    const [theme, setTheme] = useState("system")

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Size</Label>
          <ButtonRadioGroup
            value={size}
            onValueChange={setSize}
            options={[
              { value: "small", label: "S" },
              { value: "medium", label: "M" },
              { value: "large", label: "L" },
              { value: "xlarge", label: "XL" },
            ]}
          />
        </div>

        <div className="space-y-2">
          <Label>Theme</Label>
          <ButtonRadioGroup
            value={theme}
            onValueChange={setTheme}
            options={[
              { value: "light", label: "Light", icon: <Sun className="h-4 w-4" /> },
              { value: "dark", label: "Dark", icon: <Moon className="h-4 w-4" /> },
              { value: "system", label: "System", icon: <Monitor className="h-4 w-4" /> },
            ]}
            size="default"
          />
        </div>
      </div>
    )
  },
}

// Payment Methods
export const PaymentMethods: Story = {
  render: () => {
    const [payment, setPayment] = useState("card")

    return (
      <div className="w-[400px]">
        <RadioGroup value={payment} onValueChange={setPayment} className="grid gap-3">
          <div className="flex items-start space-x-3 rounded-lg border p-4">
            <RadioGroupItem value="card" id="payment-card" className="mt-1" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <Label htmlFor="payment-card" className="font-medium">
                  Credit Card
                </Label>
              </div>
              <p className="text-muted-foreground mt-1 text-sm">
                Pay with Visa, Mastercard, or American Express
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 rounded-lg border p-4">
            <RadioGroupItem value="paypal" id="payment-paypal" className="mt-1" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4" />
                <Label htmlFor="payment-paypal" className="font-medium">
                  PayPal
                </Label>
              </div>
              <p className="text-muted-foreground mt-1 text-sm">
                Fast and secure payment with PayPal
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 rounded-lg border p-4">
            <RadioGroupItem value="bank" id="payment-bank" className="mt-1" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Banknote className="h-4 w-4" />
                <Label htmlFor="payment-bank" className="font-medium">
                  Bank Transfer
                </Label>
              </div>
              <p className="text-muted-foreground mt-1 text-sm">
                Direct bank transfer (3-5 business days)
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
    )
  },
}

// Shipping Options
export const ShippingOptions: Story = {
  render: () => {
    const [shipping, setShipping] = useState("standard")

    return (
      <RadioGroup value={shipping} onValueChange={setShipping} className="grid w-[450px] gap-3">
        <RadioCard
          value="standard"
          title="Standard Delivery"
          description="5-7 business days • Free"
          icon={<Truck className="h-4 w-4" />}
        />
        <RadioCard
          value="express"
          title="Express Delivery"
          description="2-3 business days • $12.99"
          icon={<Plane className="h-4 w-4" />}
        />
        <RadioCard
          value="overnight"
          title="Overnight Delivery"
          description="Next business day • $29.99"
          icon={<Zap className="h-4 w-4" />}
        />
        <RadioCard
          value="international"
          title="International Shipping"
          description="7-14 business days • $49.99"
          icon={<Ship className="h-4 w-4" />}
          disabled
        />
      </RadioGroup>
    )
  },
}

// Privacy Settings
export const PrivacySettings: Story = {
  render: () => {
    const [privacy, setPrivacy] = useState("friends")

    return (
      <div className="w-[400px] space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">Privacy Settings</h3>
          <p className="text-muted-foreground text-sm">
            Control who can see your profile information
          </p>
        </div>

        <RadioGroup value={privacy} onValueChange={setPrivacy} className="space-y-3">
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="public" id="privacy-public" className="mt-1" />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <Label htmlFor="privacy-public" className="font-medium">
                  Public
                </Label>
              </div>
              <p className="text-muted-foreground text-sm">Anyone can view your profile</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <RadioGroupItem value="friends" id="privacy-friends" className="mt-1" />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <Label htmlFor="privacy-friends" className="font-medium">
                  Friends Only
                </Label>
              </div>
              <p className="text-muted-foreground text-sm">
                Only your friends can view your profile
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <RadioGroupItem value="private" id="privacy-private" className="mt-1" />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <Label htmlFor="privacy-private" className="font-medium">
                  Private
                </Label>
              </div>
              <p className="text-muted-foreground text-sm">Only you can view your profile</p>
            </div>
          </div>
        </RadioGroup>
      </div>
    )
  },
}

// Form Example
export const FormExample: Story = {
  render: () => {
    const [plan, setPlan] = useState("")
    const [billing, setBilling] = useState("")
    const [addons, setAddons] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
    }

    return (
      <form onSubmit={handleSubmit} className="w-[500px] space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Choose Your Plan</h3>
          <p className="text-muted-foreground text-sm">Select the plan that best fits your needs</p>
        </div>

        <RadioGroupWithLabels label="Plan Type" required value={plan} onValueChange={setPlan}>
          <RadioCard
            value="basic"
            title="Basic - $9/month"
            description="Essential features for individuals"
          />
          <RadioCard
            value="pro"
            title="Pro - $29/month"
            description="Advanced features for professionals"
          />
          <RadioCard
            value="team"
            title="Team - $99/month"
            description="Collaboration features for teams"
          />
        </RadioGroupWithLabels>

        <RadioGroupWithLabels
          label="Billing Cycle"
          description="Save more with annual billing"
          required
          value={billing}
          onValueChange={setBilling}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="monthly" id="form-monthly" />
            <Label htmlFor="form-monthly">Monthly billing</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="annual" id="form-annual" />
            <Label htmlFor="form-annual">Annual billing (Save 20%)</Label>
          </div>
        </RadioGroupWithLabels>

        <RadioGroupWithLabels label="Additional Features" value={addons} onValueChange={setAddons}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="addon-none" />
            <Label htmlFor="addon-none">No additional features</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="storage" id="addon-storage" />
            <Label htmlFor="addon-storage">Extra storage (+$5/month)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="support" id="addon-support" />
            <Label htmlFor="addon-support">Priority support (+$10/month)</Label>
          </div>
        </RadioGroupWithLabels>

        <div className="flex gap-2 pt-4">
          <Button type="submit" disabled={!plan || !billing}>
            Continue
          </Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </div>
      </form>
    )
  },
}

// Real World - Survey
export const Survey: Story = {
  render: () => {
    const [satisfaction, setSatisfaction] = useState("")
    const [recommend, setRecommend] = useState("")

    return (
      <div className="w-[500px] space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Customer Satisfaction Survey</h3>
          <p className="text-muted-foreground text-sm">
            Your feedback helps us improve our service
          </p>
        </div>

        <RadioGroupWithLabels
          label="How satisfied are you with our product?"
          required
          value={satisfaction}
          onValueChange={setSatisfaction}
        >
          <HorizontalRadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="very-dissatisfied" id="sat-1" />
              <Label htmlFor="sat-1">😞</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dissatisfied" id="sat-2" />
              <Label htmlFor="sat-2">😐</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="neutral" id="sat-3" />
              <Label htmlFor="sat-3">😊</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="satisfied" id="sat-4" />
              <Label htmlFor="sat-4">😃</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="very-satisfied" id="sat-5" />
              <Label htmlFor="sat-5">🤩</Label>
            </div>
          </HorizontalRadioGroup>
        </RadioGroupWithLabels>

        <RadioGroupWithLabels
          label="Would you recommend us to a friend?"
          required
          value={recommend}
          onValueChange={setRecommend}
        >
          <HorizontalRadioGroup>
            {[...Array(11)].map((_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <RadioGroupItem value={String(i)} id={`rec-${i}`} />
                <Label htmlFor={`rec-${i}`}>{i}</Label>
              </div>
            ))}
          </HorizontalRadioGroup>
          <div className="text-muted-foreground mt-1 flex justify-between text-xs">
            <span>Not likely</span>
            <span>Very likely</span>
          </div>
        </RadioGroupWithLabels>

        <Button className="w-full">Submit Survey</Button>
      </div>
    )
  },
}
