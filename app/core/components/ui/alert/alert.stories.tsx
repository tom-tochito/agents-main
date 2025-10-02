import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertTitle, AlertDescription } from "./alert"
import {
  CheckCircle2,
  AlertCircle,
  XCircle,
  Info,
  Bookmark,
  Popcorn,
  ShieldAlert,
  Gift,
  CircleCheck,
} from "lucide-react"

const meta = {
  title: "UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "success"],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Success! Your changes have been saved.</AlertTitle>
        <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
      </>
    ),
    icon: <CheckCircle2 className="text-primary h-4 w-4" />,
  },
}

export const WithIconAndDescription: Story = {
  args: {
    children: (
      <AlertDescription>This one has an icon and a description only. No title.</AlertDescription>
    ),
    icon: <Bookmark className="text-primary h-4 w-4" />,
  },
}

export const DescriptionOnly: Story = {
  args: {
    children: (
      <AlertDescription>This one has a description only. No title. No icon.</AlertDescription>
    ),
  },
}

export const WithIconAndTitle: Story = {
  args: {
    children: <AlertTitle>Let's try one with icon and title.</AlertTitle>,
    icon: <Popcorn className="text-primary h-4 w-4" />,
  },
}

export const LongDescription: Story = {
  args: {
    children: (
      <AlertDescription>
        This is a very long alert description that demonstrates how the component handles extended
        text content and potentially wraps across multiple lines
      </AlertDescription>
    ),
    icon: <Gift className="text-primary h-4 w-4" />,
  },
}

export const LongTitleAndDescription: Story = {
  args: {
    children: (
      <>
        <AlertTitle>
          This is an extremely long alert title that spans multiple lines to demonstrate how...
        </AlertTitle>
        <AlertDescription>
          This is an equally long description that contains detailed information about the alert. It
          shows how the component can accommodate extensive content while preserving proper spacing,
          alignment, and readability across different screen sizes and viewport widths. This helps
          ensure the user experience remains consistent regardless of the content length.
        </AlertDescription>
      </>
    ),
    icon: <AlertCircle className="text-primary h-4 w-4" />,
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: (
      <>
        <AlertTitle>Something went wrong!</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </>
    ),
    icon: <XCircle className="h-4 w-4" />,
  },
}

export const DestructiveWithList: Story = {
  args: {
    variant: "destructive",
    children: (
      <>
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul>
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </>
    ),
    icon: <XCircle className="h-4 w-4" />,
  },
}

export const WithAction: Story = {
  args: {
    children: <AlertTitle>The selected emails have been marked as spam.</AlertTitle>,
    icon: <CircleCheck className="text-primary h-4 w-4" />,
    action: (
      <button className="text-primary border-border hover:bg-accent h-6 rounded-md border px-3 py-1 text-xs font-bold">
        Undo
      </button>
    ),
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    children: (
      <>
        <AlertTitle>Payment successful!</AlertTitle>
        <AlertDescription>
          Your payment has been processed successfully. You will receive a confirmation email
          shortly.
        </AlertDescription>
      </>
    ),
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
}

export const Information: Story = {
  args: {
    children: (
      <>
        <AlertTitle>New features available</AlertTitle>
        <AlertDescription>
          We've added new features to improve your experience. Check out the changelog for more
          details.
        </AlertDescription>
      </>
    ),
    icon: <Info className="text-primary h-4 w-4" />,
  },
}

export const Warning: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Storage limit reached</AlertTitle>
        <AlertDescription>
          You've used 90% of your storage. Consider upgrading your plan or removing unused files.
        </AlertDescription>
      </>
    ),
    icon: <ShieldAlert className="text-primary h-4 w-4" />,
  },
}
