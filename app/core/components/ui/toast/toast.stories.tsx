import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { useState, useEffect } from "react"
import { Toaster, toast, CustomToast, ProgressToast, ActionToast, ListToast } from "./toast"
import { Button } from "../button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card/card"
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Download,
  Upload,
  Mail,
  User,
  ShoppingCart,
  Package,
  Trash2,
  Copy,
  Share2,
  Save,
  Send,
  Archive,
  Heart,
  Star,
  Bell,
  MessageSquare,
  Settings,
  Zap,
} from "lucide-react"

const meta: Meta<typeof Toaster> = {
  title: "UI/Toast",
  component: Toaster,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Toaster>

// Basic toasts
export const BasicToasts: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast.default("Default toast message")}>Default Toast</Button>
      <Button variant="outline" onClick={() => toast.success("Operation completed successfully!")}>
        Success Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Something went wrong. Please try again.")}
      >
        Error Toast
      </Button>
      <Button variant="outline" onClick={() => toast.warning("This action cannot be undone.")}>
        Warning Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("New update available. Click to learn more.")}
      >
        Info Toast
      </Button>
      <Button variant="outline" onClick={() => toast.loading("Processing your request...")}>
        Loading Toast
      </Button>
    </div>
  ),
}

// Toast with descriptions
export const WithDescriptions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast.success("File uploaded", {
            description: "Your file has been successfully uploaded to the cloud.",
          })
        }
      >
        Success with Description
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Upload failed", {
            description: "The file size exceeds the maximum limit of 10MB.",
          })
        }
      >
        Error with Description
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("Reminder", {
            description: "You have 3 pending tasks that need your attention.",
          })
        }
      >
        Info with Description
      </Button>
    </div>
  ),
}

// Toast with actions
export const WithActions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast.default("Message sent", {
            action: {
              label: "Undo",
              onClick: () => {},
            },
          })
        }
      >
        Toast with Undo
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Connection failed", {
            action: {
              label: "Retry",
              onClick: () => toast.success("Connected successfully!"),
            },
          })
        }
      >
        Toast with Retry
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("New message", {
            description: "You have received a new message from John Doe",
            action: {
              label: "View",
              onClick: () => {},
            },
            cancel: {
              label: "Dismiss",
              onClick: () => {},
            },
          })
        }
      >
        Toast with Multiple Actions
      </Button>
    </div>
  ),
}

// Promise toast
export const PromiseToast: Story = {
  render: () => {
    const createPromise = (shouldSucceed: boolean, delay: number = 2000) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldSucceed) {
            resolve({ message: "Data fetched successfully" })
          } else {
            reject(new Error("Failed to fetch data"))
          }
        }, delay)
      })

    return (
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            toast.promise(createPromise(true), {
              loading: "Loading data...",
              success: "Data loaded successfully!",
              error: "Failed to load data",
            })
          }
        >
          Promise (Success)
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(createPromise(false), {
              loading: "Processing request...",
              success: "Request completed!",
              error: (err) => `Error: ${err.message}`,
            })
          }
        >
          Promise (Error)
        </Button>
      </div>
    )
  },
}

// Custom toast components
export const CustomToasts: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            toast.custom(
              <CustomToast
                title="Download Complete"
                description="report-2024.pdf has been downloaded"
                icon={<Download className="h-4 w-4 text-green-600" />}
                action={{
                  label: "Open File",
                  onClick: () => {},
                }}
              />,
            )
          }
        >
          Custom Download Toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.custom(
              <CustomToast
                title="New Message"
                description="Sarah sent you a message"
                icon={<MessageSquare className="h-4 w-4 text-blue-600" />}
                action={{
                  label: "Reply",
                  onClick: () => {},
                }}
                onClose={() => toast.dismiss()}
              />,
            )
          }
        >
          Custom Message Toast
        </Button>
      </div>
    </div>
  ),
}

// Progress toast
export const ProgressToasts: Story = {
  render: () => {
    const [uploadProgress, setUploadProgress] = useState(0)
    const [isUploading, setIsUploading] = useState(false)

    useEffect(() => {
      if (isUploading && uploadProgress < 100) {
        const timer = setTimeout(() => {
          setUploadProgress((prev) => Math.min(prev + 10, 100))
        }, 200)
        return () => clearTimeout(timer)
      } else if (uploadProgress === 100) {
        setTimeout(() => {
          toast.success("Upload complete!")
          setIsUploading(false)
          setUploadProgress(0)
        }, 500)
      }
    }, [uploadProgress, isUploading])

    return (
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => {
            setIsUploading(true)
            const toastId = toast.custom(
              <ProgressToast
                title="Uploading file..."
                progress={uploadProgress}
                description="document.pdf"
              />,
              { duration: Infinity },
            )

            // Update toast as progress changes
            const interval = setInterval(() => {
              setUploadProgress((prev) => {
                const next = Math.min(prev + 10, 100)
                toast.custom(
                  <ProgressToast
                    title="Uploading file..."
                    progress={next}
                    description="document.pdf"
                  />,
                  { id: toastId, duration: Infinity },
                )
                if (next === 100) {
                  clearInterval(interval)
                  setTimeout(() => toast.dismiss(toastId), 1000)
                }
                return next
              })
            }, 200)
          }}
          disabled={isUploading}
        >
          Show Progress Toast
        </Button>
      </div>
    )
  },
}

// Action toast
export const ActionToasts: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast.custom(
            <ActionToast
              title="Delete Item?"
              description="This action cannot be undone."
              primaryAction={{
                label: "Delete",
                onClick: () => {
                  toast.dismiss()
                  toast.success("Item deleted")
                },
              }}
              secondaryAction={{
                label: "Cancel",
                onClick: () => toast.dismiss(),
              }}
            />,
          )
        }
      >
        Confirmation Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.custom(
            <ActionToast
              title="Save Changes?"
              description="You have unsaved changes that will be lost."
              primaryAction={{
                label: "Save",
                onClick: () => {
                  toast.dismiss()
                  toast.success("Changes saved")
                },
              }}
              secondaryAction={{
                label: "Discard",
                onClick: () => {
                  toast.dismiss()
                  toast.info("Changes discarded")
                },
              }}
            />,
          )
        }
      >
        Save Changes Toast
      </Button>
    </div>
  ),
}

// List toast
export const ListToasts: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast.custom(
            <ListToast
              title="3 files uploaded"
              items={["document.pdf", "image.png", "data.xlsx"]}
              icon={<Upload className="h-4 w-4 text-green-600" />}
            />,
          )
        }
      >
        List Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.custom(
            <ListToast
              title="Validation errors"
              items={[
                "Email is required",
                "Password must be at least 8 characters",
                "Please accept the terms",
              ]}
              icon={<AlertCircle className="h-4 w-4 text-red-600" />}
            />,
          )
        }
      >
        Error List Toast
      </Button>
    </div>
  ),
}

// Toast positions
export const Positions: Story = {
  render: () => {
    const [position, setPosition] = useState<any>("bottom-right")

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          <Button
            variant="outline"
            onClick={() => {
              setPosition("top-left")
              toast.default("Top Left Position")
            }}
          >
            Top Left
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setPosition("top-center")
              toast.default("Top Center Position")
            }}
          >
            Top Center
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setPosition("top-right")
              toast.default("Top Right Position")
            }}
          >
            Top Right
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setPosition("bottom-left")
              toast.default("Bottom Left Position")
            }}
          >
            Bottom Left
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setPosition("bottom-center")
              toast.default("Bottom Center Position")
            }}
          >
            Bottom Center
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setPosition("bottom-right")
              toast.default("Bottom Right Position")
            }}
          >
            Bottom Right
          </Button>
        </div>
        <Toaster position={position} />
      </div>
    )
  },
}

// Real-world example: File operations
export const FileOperations: Story = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>File Manager</CardTitle>
        <CardDescription>Manage your files with toast notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button
          className="w-full justify-start"
          variant="outline"
          onClick={() =>
            toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
              loading: "Uploading file...",
              success: "File uploaded successfully!",
              error: "Upload failed",
            })
          }
        >
          <Upload className="mr-2 h-4 w-4" />
          Upload File
        </Button>
        <Button
          className="w-full justify-start"
          variant="outline"
          onClick={() =>
            toast.success("File downloaded", {
              description: "report-2024.pdf saved to Downloads",
              action: {
                label: "Open",
                onClick: () => {},
              },
            })
          }
        >
          <Download className="mr-2 h-4 w-4" />
          Download File
        </Button>
        <Button
          className="w-full justify-start"
          variant="outline"
          onClick={() =>
            toast.custom(
              <ActionToast
                title="Delete file?"
                description="This action cannot be undone"
                primaryAction={{
                  label: "Delete",
                  onClick: () => {
                    toast.dismiss()
                    toast.success("File deleted")
                  },
                }}
                secondaryAction={{
                  label: "Cancel",
                  onClick: () => toast.dismiss(),
                }}
              />,
            )
          }
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete File
        </Button>
        <Button
          className="w-full justify-start"
          variant="outline"
          onClick={() =>
            toast.success("Link copied", {
              description: "Share link copied to clipboard",
            })
          }
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share File
        </Button>
      </CardContent>
    </Card>
  ),
}

// Real-world example: Shopping cart
export const ShoppingCartExample: Story = {
  render: () => {
    const [cartCount, setCartCount] = useState(0)

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Shopping Cart ({cartCount} items)</CardTitle>
          <CardDescription>Add items and see notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            className="w-full"
            onClick={() => {
              setCartCount((prev) => prev + 1)
              toast.success("Added to cart", {
                description: "Product successfully added to your cart",
                action: {
                  label: "View Cart",
                  onClick: () => {},
                },
              })
            }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button
            className="w-full"
            variant="outline"
            onClick={() => {
              if (cartCount > 0) {
                setCartCount((prev) => prev - 1)
                toast.info("Removed from cart", {
                  action: {
                    label: "Undo",
                    onClick: () => setCartCount((prev) => prev + 1),
                  },
                })
              } else {
                toast.error("Cart is empty")
              }
            }}
          >
            Remove from Cart
          </Button>
          <Button
            className="w-full"
            variant="outline"
            onClick={() => {
              if (cartCount > 0) {
                toast.promise(new Promise((resolve) => setTimeout(resolve, 3000)), {
                  loading: "Processing order...",
                  success: `Order placed! ${cartCount} items will be delivered soon`,
                  error: "Failed to place order",
                })
                setCartCount(0)
              } else {
                toast.warning("Your cart is empty")
              }
            }}
          >
            <Package className="mr-2 h-4 w-4" />
            Checkout
          </Button>
        </CardContent>
      </Card>
    )
  },
}

// Real-world example: Form submission
export const FormSubmission: Story = {
  render: () => {
    const [isSaving, setIsSaving] = useState(false)

    const handleSave = async () => {
      setIsSaving(true)
      await toast.promise(
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() > 0.3) {
              resolve("Success")
            } else {
              reject(new Error("Network error"))
            }
          }, 2000)
        }),
        {
          loading: "Saving changes...",
          success: "Changes saved successfully!",
          error: (err) => `Failed to save: ${err.message}`,
        },
      )
      setIsSaving(false)
    }

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Update your preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button className="w-full" onClick={handleSave} disabled={isSaving}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
          <Button
            className="w-full"
            variant="outline"
            onClick={() =>
              toast.info("Draft saved", {
                description: "Your changes have been saved as a draft",
              })
            }
          >
            Save as Draft
          </Button>
          <Button
            className="w-full"
            variant="outline"
            onClick={() =>
              toast.custom(
                <ActionToast
                  title="Discard changes?"
                  description="All unsaved changes will be lost"
                  primaryAction={{
                    label: "Discard",
                    onClick: () => {
                      toast.dismiss()
                      toast.info("Changes discarded")
                    },
                  }}
                  secondaryAction={{
                    label: "Keep Editing",
                    onClick: () => toast.dismiss(),
                  }}
                />,
              )
            }
          >
            Cancel
          </Button>
        </CardContent>
      </Card>
    )
  },
}
