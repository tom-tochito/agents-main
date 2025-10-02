import type { Meta, StoryObj } from "@storybook/react"
import { useEffect, useState } from "react"
import {
  Progress,
  ProgressWithLabel,
  CircularProgress,
  SteppedProgress,
  AnimatedProgress,
  MultiSegmentProgress,
} from "./progress"
import { Button } from "../button"

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 5 },
    },
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "success", "warning"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default Progress
export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Progress {...args} />
    </div>
  ),
}

// Progress Variants
export const Variants: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Progress value={60} variant="default" />
      <Progress value={60} variant="secondary" />
      <Progress value={60} variant="destructive" />
      <Progress value={60} variant="success" />
      <Progress value={60} variant="warning" />
    </div>
  ),
}

// Progress Sizes
export const Sizes: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Progress value={50} size="sm" />
      <Progress value={50} size="default" />
      <Progress value={50} size="lg" />
      <Progress value={50} size="xl" />
    </div>
  ),
}

// Progress with Label
export const WithLabel: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <ProgressWithLabel value={25} label="Uploading..." />
      <ProgressWithLabel value={50} label="Processing" />
      <ProgressWithLabel value={75} label="Almost done" variant="success" />
      <ProgressWithLabel value={100} label="Complete!" variant="success" />
    </div>
  ),
}

// Progress without Value Display
export const WithoutValue: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <ProgressWithLabel value={33} label="Step 1 of 3" showValue={false} />
      <ProgressWithLabel value={66} label="Step 2 of 3" showValue={false} />
      <ProgressWithLabel value={100} label="Step 3 of 3" showValue={false} variant="success" />
    </div>
  ),
}

// Animated Progress
export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            return 100
          }
          return prev + 10
        })
      }, 500)

      return () => clearInterval(timer)
    }, [])

    return (
      <div className="w-[400px] space-y-6">
        <ProgressWithLabel value={progress} label="Loading..." />
        <Button onClick={() => setProgress(0)} disabled={progress > 0 && progress < 100}>
          Restart Animation
        </Button>
      </div>
    )
  },
}

// Indeterminate Progress
export const Indeterminate: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Loading indefinitely...</p>
        <div className="bg-primary/20 relative h-2 w-full overflow-hidden rounded-full">
          <div className="bg-primary h-full w-1/3 animate-pulse rounded-full" />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Processing...</p>
        <div className="bg-secondary/20 relative h-2 w-full overflow-hidden rounded-full">
          <div className="bg-secondary h-full w-1/4 animate-pulse rounded-full" />
        </div>
      </div>
    </div>
  ),
}

// Circular Progress
export const Circular: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <CircularProgress value={25} size={80} />
      <CircularProgress value={50} size={100} />
      <CircularProgress value={75} size={120} />
      <CircularProgress value={100} size={120} variant="success" />
    </div>
  ),
}

// Circular Progress Variants
export const CircularVariants: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <CircularProgress value={60} variant="default" />
      <CircularProgress value={60} variant="secondary" />
      <CircularProgress value={60} variant="destructive" />
      <CircularProgress value={60} variant="success" />
      <CircularProgress value={60} variant="warning" />
    </div>
  ),
}

// Circular Progress Without Value
export const CircularWithoutValue: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <CircularProgress value={45} showValue={false} size={60} strokeWidth={4} />
      <CircularProgress value={60} showValue={false} size={80} strokeWidth={6} />
      <CircularProgress value={75} showValue={false} size={100} strokeWidth={8} />
    </div>
  ),
}

// Stepped Progress
export const Stepped: Story = {
  render: () => {
    const [step, setStep] = useState(2)
    const steps = 5

    return (
      <div className="w-[400px] space-y-6">
        <SteppedProgress currentStep={step} totalSteps={steps} />
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
          >
            Previous
          </Button>
          <Button
            size="sm"
            onClick={() => setStep(Math.min(steps, step + 1))}
            disabled={step === steps}
          >
            Next
          </Button>
        </div>
      </div>
    )
  },
}

// Stepped Progress with Labels
export const SteppedWithLabels: Story = {
  render: () => {
    const [step, setStep] = useState(2)
    const labels = ["Start", "Details", "Review", "Payment", "Complete"]

    return (
      <div className="w-[500px] space-y-6">
        <SteppedProgress currentStep={step} totalSteps={5} showLabels labels={labels} />
        <div className="text-center">
          <p className="text-muted-foreground mb-4 text-sm">
            Current Step: {labels[step - 1] || "Not started"}
          </p>
          <div className="flex justify-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
            >
              Back
            </Button>
            <Button
              size="sm"
              onClick={() => setStep(Math.min(labels.length, step + 1))}
              disabled={step === labels.length}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    )
  },
}

// Multi-segment Progress
export const MultiSegment: Story = {
  render: () => (
    <div className="w-[500px] space-y-6">
      <MultiSegmentProgress
        segments={[
          { value: 30, className: "bg-blue-500", label: "Completed" },
          { value: 20, className: "bg-yellow-500", label: "In Progress" },
          { value: 10, className: "bg-red-500", label: "Failed" },
        ]}
        max={100}
        showLabels
      />

      <MultiSegmentProgress
        segments={[
          { value: 250, className: "bg-green-500", label: "Sales" },
          { value: 150, className: "bg-blue-500", label: "Marketing" },
          { value: 100, className: "bg-purple-500", label: "Development" },
        ]}
        max={500}
        size="lg"
        showLabels
      />
    </div>
  ),
}

// Real World - File Upload
export const FileUpload: Story = {
  render: () => {
    const [uploadProgress, setUploadProgress] = useState(0)
    const [isUploading, setIsUploading] = useState(false)

    const startUpload = () => {
      setIsUploading(true)
      setUploadProgress(0)

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsUploading(false)
            return 100
          }
          return prev + 5
        })
      }, 200)
    }

    const getStatusText = () => {
      if (!isUploading && uploadProgress === 0) return "Ready to upload"
      if (isUploading) return `Uploading... ${Math.round(uploadProgress)}%`
      if (uploadProgress === 100) return "Upload complete!"
      return ""
    }

    return (
      <div className="w-[400px] space-y-4">
        <div className="rounded-lg border-2 border-dashed p-6 text-center">
          <div className="space-y-4">
            <div className="text-muted-foreground">
              <svg
                className="mx-auto h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">{getStatusText()}</p>
              {uploadProgress > 0 && uploadProgress < 100 && (
                <p className="text-muted-foreground mt-1 text-xs">2.4 MB of 12.5 MB</p>
              )}
            </div>
            {isUploading && (
              <ProgressWithLabel
                value={uploadProgress}
                showValue={false}
                variant={uploadProgress === 100 ? "success" : "default"}
              />
            )}
            <Button
              onClick={startUpload}
              disabled={isUploading}
              variant={uploadProgress === 100 ? "outline" : "default"}
            >
              {uploadProgress === 100 ? "Upload Another" : "Start Upload"}
            </Button>
          </div>
        </div>
      </div>
    )
  },
}

// Real World - Installation Progress
export const Installation: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [isInstalling, setIsInstalling] = useState(false)

    const steps = [
      { name: "Preparing", duration: 2000 },
      { name: "Downloading", duration: 3000 },
      { name: "Installing", duration: 2500 },
      { name: "Configuring", duration: 1500 },
      { name: "Complete", duration: 0 },
    ]

    const startInstallation = () => {
      setIsInstalling(true)
      setCurrentStep(0)

      const runStep = (index: number) => {
        if (index >= steps.length) {
          setIsInstalling(false)
          return
        }

        setCurrentStep(index)

        if (steps[index].duration > 0) {
          setTimeout(() => runStep(index + 1), steps[index].duration)
        }
      }

      runStep(0)
    }

    const progress = (currentStep / (steps.length - 1)) * 100

    return (
      <div className="w-[500px] space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Software Installation</h3>
            {currentStep === steps.length - 1 && (
              <span className="text-sm font-medium text-green-600">✓ Complete</span>
            )}
          </div>

          <SteppedProgress
            currentStep={currentStep}
            totalSteps={steps.length}
            showLabels
            labels={steps.map((s) => s.name)}
            variant={currentStep === steps.length - 1 ? "success" : "default"}
          />

          <ProgressWithLabel
            value={progress}
            label={steps[currentStep]?.name || "Ready"}
            variant={currentStep === steps.length - 1 ? "success" : "default"}
          />

          <Button onClick={startInstallation} disabled={isInstalling} className="w-full">
            {isInstalling
              ? "Installing..."
              : currentStep === steps.length - 1
                ? "Reinstall"
                : "Install Now"}
          </Button>
        </div>
      </div>
    )
  },
}

// Real World - Skills Progress
export const Skills: Story = {
  render: () => (
    <div className="w-[500px] space-y-6">
      <h3 className="text-lg font-semibold">Technical Skills</h3>

      <div className="space-y-4">
        <ProgressWithLabel value={90} label="React / TypeScript" variant="success" />
        <ProgressWithLabel value={85} label="Node.js / Express" variant="success" />
        <ProgressWithLabel value={75} label="Python / Django" />
        <ProgressWithLabel value={70} label="PostgreSQL / MongoDB" />
        <ProgressWithLabel value={60} label="Docker / Kubernetes" variant="warning" />
        <ProgressWithLabel value={50} label="Machine Learning" variant="warning" />
      </div>
    </div>
  ),
}

// Real World - Dashboard Stats
export const DashboardStats: Story = {
  render: () => (
    <div className="grid w-[600px] grid-cols-2 gap-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Storage Used</span>
          <span className="font-medium">8.2 GB / 10 GB</span>
        </div>
        <Progress value={82} variant="warning" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">API Calls</span>
          <span className="font-medium">45K / 100K</span>
        </div>
        <Progress value={45} variant="default" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Team Members</span>
          <span className="font-medium">12 / 15</span>
        </div>
        <Progress value={80} variant="success" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Projects</span>
          <span className="font-medium">8 / 10</span>
        </div>
        <Progress value={80} variant="success" />
      </div>
    </div>
  ),
}
