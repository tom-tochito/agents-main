import type { Meta, StoryObj } from "@storybook/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../button"
import { Input } from "../input"
import { Checkbox } from "../checkbox"
import { Label } from "../label"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSection,
  FormFooter,
  FormHeader,
  FormGrid,
} from "./form"
import { DatePicker } from "../date-picker"
import { Combobox } from "../combobox"

const meta: Meta = {
  title: "UI/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
}

export default meta

// Basic Form
const basicFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export const BasicForm: StoryObj = {
  render: () => {
    const form = useForm<z.infer<typeof basicFormSchema>>({
      resolver: zodResolver(basicFormSchema),
      defaultValues: {
        username: "",
        email: "",
        password: "",
      },
    })

    function onSubmit(values: z.infer<typeof basicFormSchema>) {
      // Form submitted successfully
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[400px] space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormDescription>Must be at least 8 characters long.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  },
}

// Profile Form with Sections
const profileFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  birthDate: z.date().optional(),
  country: z.string().optional(),
  notifications: z.object({
    email: z.boolean(),
    push: z.boolean(),
    sms: z.boolean(),
  }),
})

export const ProfileForm: StoryObj = {
  render: () => {
    const form = useForm<z.infer<typeof profileFormSchema>>({
      resolver: zodResolver(profileFormSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        bio: "",
        notifications: {
          email: true,
          push: false,
          sms: false,
        },
      },
    })

    const countries = [
      { value: "us", label: "United States" },
      { value: "uk", label: "United Kingdom" },
      { value: "ca", label: "Canada" },
      { value: "au", label: "Australia" },
    ]

    function onSubmit(values: z.infer<typeof profileFormSchema>) {
      // Form submitted successfully
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[600px] space-y-8">
          <FormHeader
            title="Profile Settings"
            description="Update your personal information and preferences"
          />

          <FormSection
            title="Personal Information"
            description="This information will be displayed publicly"
          >
            <FormGrid columns={2}>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormGrid>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormGrid columns={2}>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Birth Date</FormLabel>
                    <FormControl>
                      <DatePicker
                        date={field.value}
                        onDateChange={field.onChange}
                        placeholder="Select date"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormGrid>

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Combobox
                      options={countries}
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select country"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <textarea
                      className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Brief description for your profile. Max 500 characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormSection>

          <FormSection
            title="Notification Preferences"
            description="Choose how you want to receive notifications"
          >
            <FormField
              control={form.control}
              name="notifications.email"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Email notifications</FormLabel>
                    <FormDescription>Receive notifications via email</FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notifications.push"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Push notifications</FormLabel>
                    <FormDescription>Receive push notifications on your device</FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notifications.sms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>SMS notifications</FormLabel>
                    <FormDescription>Receive notifications via SMS</FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </FormSection>

          <FormFooter>
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </FormFooter>
        </form>
      </Form>
    )
  },
}

// Inline Form
const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export const InlineForm: StoryObj = {
  render: () => {
    const form = useForm<z.infer<typeof newsletterSchema>>({
      resolver: zodResolver(newsletterSchema),
      defaultValues: {
        email: "",
      },
    })

    function onSubmit(values: z.infer<typeof newsletterSchema>) {
      // Form submitted successfully
    }

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-sm items-start space-x-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </Form>
    )
  },
}

// Form with Validation States
const validationFormSchema = z.object({
  required: z.string().min(1, "This field is required"),
  minLength: z.string().min(5, "Must be at least 5 characters"),
  maxLength: z.string().max(10, "Must be less than 10 characters"),
  pattern: z.string().regex(/^[A-Z]+$/, "Must contain only uppercase letters"),
  number: z.string().regex(/^\d+$/, "Must be a number"),
})

export const ValidationStates: StoryObj = {
  render: () => {
    const form = useForm<z.infer<typeof validationFormSchema>>({
      resolver: zodResolver(validationFormSchema),
      mode: "onBlur",
      defaultValues: {
        required: "",
        minLength: "",
        maxLength: "",
        pattern: "",
        number: "",
      },
    })

    function onSubmit(values: z.infer<typeof validationFormSchema>) {
      // Form submitted successfully
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[400px] space-y-6">
          <FormField
            control={form.control}
            name="required"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Required Field</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>This field is required</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="minLength"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Min Length (5)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxLength"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Length (10)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pattern"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pattern (Uppercase Only)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>Must contain only uppercase letters</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numbers Only</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  },
}

// Contact Form
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  priority: z.string(),
})

export const ContactForm: StoryObj = {
  render: () => {
    const form = useForm<z.infer<typeof contactFormSchema>>({
      resolver: zodResolver(contactFormSchema),
      defaultValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
        priority: "normal",
      },
    })

    const priorities = [
      { value: "low", label: "Low Priority" },
      { value: "normal", label: "Normal Priority" },
      { value: "high", label: "High Priority" },
      { value: "urgent", label: "Urgent" },
    ]

    function onSubmit(values: z.infer<typeof contactFormSchema>) {
      // Form submitted successfully
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[500px] space-y-6">
          <FormHeader
            title="Contact Us"
            description="Send us a message and we'll get back to you soon"
          />

          <FormGrid columns={2}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormGrid>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <FormControl>
                  <Combobox
                    options={priorities}
                    value={field.value}
                    onValueChange={field.onChange}
                    placeholder="Select priority"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <textarea
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[120px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us what you need help with..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormFooter>
            <Button type="button" variant="outline">
              Clear
            </Button>
            <Button type="submit">Send Message</Button>
          </FormFooter>
        </form>
      </Form>
    )
  },
}
