import type { Meta, StoryObj } from "@storybook/react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog"
import { Button } from "../button"
import { Trash2, AlertTriangle, Info, CheckCircle } from "lucide-react"

const meta = {
  title: "UI/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Destructive: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" leftIcon={<Trash2 className="h-4 w-4" />}>
          Delete Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Trash2 className="text-destructive h-5 w-5" />
            Delete Account
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete your account? This action is permanent and cannot be
            undone. All your data, including projects, settings, and history will be permanently
            removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep Account</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive">
            Yes, Delete My Account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Warning: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" leftIcon={<AlertTriangle className="h-4 w-4" />}>
          Show Warning
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <AlertTriangle className="text-warning-600 h-5 w-5" />
            Unsaved Changes
          </AlertDialogTitle>
          <AlertDialogDescription>
            You have unsaved changes that will be lost if you leave this page. Would you like to
            save your changes before continuing?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:space-x-2">
          <AlertDialogCancel>Discard Changes</AlertDialogCancel>
          <AlertDialogAction>Save Changes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Information: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" leftIcon={<Info className="h-4 w-4" />}>
          Learn More
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Info className="text-primary h-5 w-5" />
            About This Feature
          </AlertDialogTitle>
          <AlertDialogDescription>
            This feature allows you to collaborate with your team in real-time. You can share
            documents, leave comments, and track changes across all your projects. Premium features
            require an active subscription.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction>View Pricing</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Success: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="primary" leftIcon={<CheckCircle className="h-4 w-4" />}>
          Complete Action
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Action Completed Successfully
          </AlertDialogTitle>
          <AlertDialogDescription>
            Your request has been processed successfully. You will receive a confirmation email
            shortly with all the details.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Got it</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const CustomContent: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Custom Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Terms of Service Update</AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            We've updated our terms of service. Here are the key changes:
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="bg-muted my-4 rounded-lg p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>Enhanced data privacy protection measures</li>
            <li>Updated payment processing terms</li>
            <li>Clarified intellectual property rights</li>
            <li>New arbitration clause for dispute resolution</li>
          </ul>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Review Later</AlertDialogCancel>
          <AlertDialogAction>Accept Terms</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const LongContent: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Privacy Policy</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[80vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>Privacy Policy</AlertDialogTitle>
          <AlertDialogDescription>Last updated: January 1, 2024</AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="mb-2 font-medium">1. Information We Collect</h4>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, such as when you create an account,
              subscribe to our newsletter, or contact us for support. This may include your name,
              email address, postal address, phone number, and payment information.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-medium">2. How We Use Your Information</h4>
            <p className="text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services, to
              process transactions, to send you technical notices and support messages, and to
              respond to your comments and questions.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-medium">3. Information Sharing</h4>
            <p className="text-muted-foreground">
              We do not sell, trade, or otherwise transfer your personal information to third
              parties without your consent, except as described in this privacy policy. We may share
              your information in certain situations, such as to comply with legal obligations.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-medium">4. Data Security</h4>
            <p className="text-muted-foreground">
              We take reasonable measures to help protect your personal information from loss,
              theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction>Accept</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const SingleAction: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Show Message</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Welcome Back!</AlertDialogTitle>
          <AlertDialogDescription>
            We're glad to see you again. Check out what's new in your dashboard.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Continue to Dashboard</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const NoDescription: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">Quick Action</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Action</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const MultipleDialogs: Story = {
  render: () => (
    <div className="flex gap-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="primary">Dialog 1</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>First Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This is the first dialog in the example.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">Dialog 2</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Second Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This is the second dialog in the example.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Dialog 3</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Third Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This is the third dialog in the example.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Got it</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" size="sm">
            Delete File
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete "document.pdf"?</AlertDialogTitle>
            <AlertDialogDescription>
              This file will be permanently deleted and cannot be recovered from trash.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="primary" size="sm">
            Publish
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Ready to publish?</AlertDialogTitle>
            <AlertDialogDescription>
              Your post will be visible to all users once published. You can always edit or
              unpublish it later.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Save as Draft</AlertDialogCancel>
            <AlertDialogAction>Publish Now</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" size="sm">
            Log Out
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Log out of your account?</AlertDialogTitle>
            <AlertDialogDescription>
              You'll need to sign in again to access your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Stay Signed In</AlertDialogCancel>
            <AlertDialogAction>Log Out</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="sm">
            Reset Settings
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reset to default settings?</AlertDialogTitle>
            <AlertDialogDescription>
              This will reset all customizations and preferences to their default values.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep Current Settings</AlertDialogCancel>
            <AlertDialogAction>Reset</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
}
