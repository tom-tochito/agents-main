import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContentCustom,
  ScrollableDialogContent,
} from "./dialog"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
import { Checkbox } from "../checkbox"
import { Badge } from "../badge"
import {
  AlertCircle,
  Info,
  CheckCircle,
  XCircle,
  Trash2,
  Save,
  Settings,
  User,
  Upload,
  Download,
  Share,
  Copy,
  Edit,
  Plus,
  Search,
  Filter,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  ShoppingCart,
  Package,
} from "lucide-react"

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description. It provides additional context about the dialog content.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm">Dialog content goes here. You can add any content you need.</p>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" defaultValue="John Doe" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" defaultValue="john@example.com" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" defaultValue="@johndoe" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}

export const ConfirmationDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Account
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="text-destructive h-5 w-5" />
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setOpen(false)
              }}
            >
              Delete Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Small Dialog</Button>
        </DialogTrigger>
        <DialogContentCustom size="sm">
          <DialogHeader>
            <DialogTitle>Small Dialog</DialogTitle>
            <DialogDescription>This is a small-sized dialog.</DialogDescription>
          </DialogHeader>
          <p className="text-sm">Compact content area.</p>
          <DialogFooter>
            <Button size="sm">Close</Button>
          </DialogFooter>
        </DialogContentCustom>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Medium Dialog</Button>
        </DialogTrigger>
        <DialogContentCustom size="md">
          <DialogHeader>
            <DialogTitle>Medium Dialog</DialogTitle>
            <DialogDescription>This is a medium-sized dialog (default).</DialogDescription>
          </DialogHeader>
          <p className="text-sm">Standard content area.</p>
          <DialogFooter>
            <Button>Close</Button>
          </DialogFooter>
        </DialogContentCustom>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Large Dialog</Button>
        </DialogTrigger>
        <DialogContentCustom size="lg">
          <DialogHeader>
            <DialogTitle>Large Dialog</DialogTitle>
            <DialogDescription>This is a large-sized dialog.</DialogDescription>
          </DialogHeader>
          <p className="text-sm">More spacious content area.</p>
          <DialogFooter>
            <Button>Close</Button>
          </DialogFooter>
        </DialogContentCustom>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Extra Large Dialog</Button>
        </DialogTrigger>
        <DialogContentCustom size="xl">
          <DialogHeader>
            <DialogTitle>Extra Large Dialog</DialogTitle>
            <DialogDescription>This is an extra large-sized dialog.</DialogDescription>
          </DialogHeader>
          <p className="text-sm">Very spacious content area for complex forms or content.</p>
          <DialogFooter>
            <Button>Close</Button>
          </DialogFooter>
        </DialogContentCustom>
      </Dialog>
    </div>
  ),
}

export const ScrollableContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Terms & Conditions</Button>
      </DialogTrigger>
      <ScrollableDialogContent>
        <DialogHeader>
          <DialogTitle>Terms & Conditions</DialogTitle>
          <DialogDescription>Please read and accept our terms and conditions.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i}>
              <h3 className="font-semibold">Section {i + 1}</h3>
              <p className="text-muted-foreground text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </div>
          ))}
        </div>
        <DialogFooter className="bg-background sticky bottom-0 pt-4">
          <Checkbox id="accept" />
          <Label htmlFor="accept" className="flex-1">
            I accept the terms and conditions
          </Label>
          <Button>Continue</Button>
        </DialogFooter>
      </ScrollableDialogContent>
    </Dialog>
  ),
}

export const WithoutCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Required Action</Button>
        </DialogTrigger>
        <DialogContentCustom hideCloseButton>
          <DialogHeader>
            <DialogTitle>Action Required</DialogTitle>
            <DialogDescription>You must complete this action to continue.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm">
              This dialog cannot be closed by clicking outside or pressing Escape. You must click
              one of the buttons below.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Complete Action</Button>
          </DialogFooter>
        </DialogContentCustom>
      </Dialog>
    )
  },
}

export const AlertDialogs: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Info className="mr-2 h-4 w-4" />
            Info
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-500" />
              Information
            </DialogTitle>
            <DialogDescription>
              This is an informational message to keep you updated.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button>Got it</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <CheckCircle className="mr-2 h-4 w-4" />
            Success
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Success!
            </DialogTitle>
            <DialogDescription>Your operation has been completed successfully.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <AlertCircle className="mr-2 h-4 w-4" />
            Warning
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              Warning
            </DialogTitle>
            <DialogDescription>
              Please be aware of the following important information.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Proceed</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <XCircle className="mr-2 h-4 w-4" />
            Error
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <XCircle className="text-destructive h-5 w-5" />
              Error Occurred
            </DialogTitle>
            <DialogDescription>
              Something went wrong. Please try again or contact support.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Contact Support</Button>
            <Button>Try Again</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
}

export const RealWorldExamples: Story = {
  render: () => {
    const [paymentOpen, setPaymentOpen] = useState(false)
    const [shareOpen, setShareOpen] = useState(false)
    const [settingsOpen, setSettingsOpen] = useState(false)

    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">E-Commerce Examples</h3>
          <div className="flex flex-wrap gap-4">
            {/* Payment Dialog */}
            <Dialog open={paymentOpen} onOpenChange={setPaymentOpen}>
              <DialogTrigger asChild>
                <Button>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Payment Method</DialogTitle>
                  <DialogDescription>Add a new payment method to your account.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Cardholder Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="save-card" />
                    <Label htmlFor="save-card">Save this card for future purchases</Label>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setPaymentOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setPaymentOpen(false)}>Add Payment Method</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Product Quick View */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Package className="mr-2 h-4 w-4" />
                  Quick View Product
                </Button>
              </DialogTrigger>
              <DialogContentCustom size="lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-muted flex aspect-square items-center justify-center rounded-lg">
                    <Package className="text-muted-foreground h-20 w-20" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <DialogTitle>Premium Laptop Pro</DialogTitle>
                      <p className="mt-2 text-2xl font-bold">$1,299.00</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Badge variant="default">In Stock</Badge>
                        <Badge variant="secondary">Free Shipping</Badge>
                      </div>
                    </div>
                    <DialogDescription>
                      High-performance laptop with the latest processor, 16GB RAM, and 512GB SSD.
                      Perfect for professionals and creators.
                    </DialogDescription>
                    <div className="space-y-2">
                      <Label>Quantity</Label>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          -
                        </Button>
                        <Input className="w-16 text-center" value="1" readOnly />
                        <Button variant="outline" size="sm">
                          +
                        </Button>
                      </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <Button className="w-full sm:w-auto">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="w-full sm:w-auto">
                        View Details
                      </Button>
                    </DialogFooter>
                  </div>
                </div>
              </DialogContentCustom>
            </Dialog>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Collaboration Examples</h3>
          <div className="flex flex-wrap gap-4">
            {/* Share Dialog */}
            <Dialog open={shareOpen} onOpenChange={setShareOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Share className="mr-2 h-4 w-4" />
                  Share Document
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share Document</DialogTitle>
                  <DialogDescription>
                    Share this document with others or get a shareable link.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Add people</Label>
                    <div className="flex gap-2">
                      <Input id="email" placeholder="Enter email address" className="flex-1" />
                      <Button size="sm">Add</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>People with access</Label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded border p-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span className="text-sm">john@example.com</span>
                        </div>
                        <Badge variant="secondary">Editor</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded border p-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span className="text-sm">sarah@example.com</span>
                        </div>
                        <Badge variant="secondary">Viewer</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded border p-3">
                    <div className="flex items-center gap-2">
                      <Copy className="h-4 w-4" />
                      <span className="text-sm">Copy link</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Copy
                    </Button>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShareOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setShareOpen(false)}>Done</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Settings Dialog */}
            <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </DialogTrigger>
              <DialogContentCustom size="lg">
                <DialogHeader>
                  <DialogTitle>Settings</DialogTitle>
                  <DialogDescription>
                    Manage your account settings and preferences.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Notifications</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Email Notifications</Label>
                          <p className="text-muted-foreground text-sm">
                            Receive emails about your account activity
                          </p>
                        </div>
                        <Checkbox defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Push Notifications</Label>
                          <p className="text-muted-foreground text-sm">
                            Receive push notifications on your device
                          </p>
                        </div>
                        <Checkbox />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Privacy</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Public Profile</Label>
                          <p className="text-muted-foreground text-sm">
                            Make your profile visible to everyone
                          </p>
                        </div>
                        <Checkbox />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Data Collection</Label>
                          <p className="text-muted-foreground text-sm">
                            Allow us to collect usage data for improvements
                          </p>
                        </div>
                        <Checkbox defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setSettingsOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setSettingsOpen(false)}>Save Changes</Button>
                </DialogFooter>
              </DialogContentCustom>
            </Dialog>
          </div>
        </div>
      </div>
    )
  },
}

export const NestedDialogs: Story = {
  render: () => {
    const [firstOpen, setFirstOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)

    return (
      <Dialog open={firstOpen} onOpenChange={setFirstOpen}>
        <DialogTrigger asChild>
          <Button>Open First Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>First Dialog</DialogTitle>
            <DialogDescription>
              This is the first dialog. You can open another dialog from here.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Dialog open={secondOpen} onOpenChange={setSecondOpen}>
              <DialogTrigger asChild>
                <Button>Open Second Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Second Dialog</DialogTitle>
                  <DialogDescription>
                    This is a nested dialog opened from the first dialog.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button onClick={() => setSecondOpen(false)}>Close This Dialog</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setFirstOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}
