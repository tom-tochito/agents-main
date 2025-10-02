import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Combobox,
  ComboboxWithCategories,
  MultiCombobox,
  type ComboboxOption,
  type ComboboxCategory,
} from "./combobox"

const meta = {
  title: "UI/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const frameworks: ComboboxOption[] = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember" },
  { value: "gatsby", label: "Gatsby" },
  { value: "nuxt", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

const countries: ComboboxOption[] = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "br", label: "Brazil" },
  { value: "ar", label: "Argentina" },
  { value: "uk", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "it", label: "Italy" },
  { value: "es", label: "Spain" },
  { value: "jp", label: "Japan" },
  { value: "cn", label: "China" },
  { value: "in", label: "India" },
  { value: "au", label: "Australia" },
  { value: "nz", label: "New Zealand" },
]

export const Default: Story = {
  args: {
    options: frameworks,
    placeholder: "Select framework",
  },
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return <Combobox {...args} value={value} onValueChange={setValue} />
  },
}

export const WithSelectedValue: Story = {
  args: {
    options: frameworks,
    placeholder: "Select framework",
  },
  render: (args) => {
    const [value, setValue] = useState<string>("react")
    return <Combobox {...args} value={value} onValueChange={setValue} />
  },
}

export const Disabled: Story = {
  args: {
    options: frameworks,
    placeholder: "Select framework",
    disabled: true,
  },
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return <Combobox {...args} value={value} onValueChange={setValue} />
  },
}

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: "next", label: "Next.js" },
      { value: "react", label: "React", disabled: true },
      { value: "vue", label: "Vue" },
      { value: "angular", label: "Angular", disabled: true },
      { value: "svelte", label: "Svelte" },
    ],
    placeholder: "Select framework",
  },
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return <Combobox {...args} value={value} onValueChange={setValue} />
  },
}

export const LongList: Story = {
  args: {
    options: countries,
    placeholder: "Select country",
    searchPlaceholder: "Search countries...",
  },
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return <Combobox {...args} value={value} onValueChange={setValue} />
  },
}

export const CustomWidth: Story = {
  args: {
    options: frameworks,
    placeholder: "Select framework",
    className: "w-[300px]",
  },
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return <Combobox {...args} value={value} onValueChange={setValue} />
  },
}

export const WithCategories: Story = {
  render: () => {
    const [value, setValue] = useState<string>("")

    const categories: ComboboxCategory[] = [
      {
        label: "Frontend Frameworks",
        options: [
          { value: "react", label: "React" },
          { value: "vue", label: "Vue" },
          { value: "angular", label: "Angular" },
          { value: "svelte", label: "Svelte" },
        ],
      },
      {
        label: "Backend Frameworks",
        options: [
          { value: "express", label: "Express" },
          { value: "nestjs", label: "NestJS" },
          { value: "django", label: "Django" },
          { value: "rails", label: "Ruby on Rails" },
        ],
      },
      {
        label: "Full-Stack Frameworks",
        options: [
          { value: "next", label: "Next.js" },
          { value: "nuxt", label: "Nuxt.js" },
          { value: "remix", label: "Remix" },
          { value: "sveltekit", label: "SvelteKit" },
        ],
      },
    ]

    return (
      <ComboboxWithCategories
        categories={categories}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework"
        className="w-[250px]"
      />
    )
  },
}

export const MultiSelect: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([])

    return (
      <div className="space-y-4">
        <MultiCombobox
          options={frameworks}
          values={values}
          onValuesChange={setValues}
          placeholder="Select frameworks"
          className="w-[250px]"
        />
        <div className="text-muted-foreground text-sm">Selected: {values.join(", ") || "None"}</div>
      </div>
    )
  },
}

export const MultiSelectWithMax: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([])

    return (
      <div className="space-y-4">
        <MultiCombobox
          options={frameworks}
          values={values}
          onValuesChange={setValues}
          placeholder="Select up to 3 frameworks"
          maxItems={3}
          className="w-[250px]"
        />
        <div className="text-muted-foreground text-sm">Selected: {values.join(", ") || "None"}</div>
      </div>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const [timezone, setTimezone] = useState<string>("")
    const [language, setLanguage] = useState<string>("")
    const [currency, setCurrency] = useState<string>("")
    const [department, setDepartment] = useState<string>("")
    const [tags, setTags] = useState<string[]>([])

    const timezones: ComboboxOption[] = [
      { value: "utc", label: "UTC" },
      { value: "est", label: "Eastern Time (EST)" },
      { value: "cst", label: "Central Time (CST)" },
      { value: "mst", label: "Mountain Time (MST)" },
      { value: "pst", label: "Pacific Time (PST)" },
      { value: "gmt", label: "Greenwich Mean Time (GMT)" },
      { value: "cet", label: "Central European Time (CET)" },
      { value: "jst", label: "Japan Standard Time (JST)" },
    ]

    const languages: ComboboxOption[] = [
      { value: "en", label: "English" },
      { value: "es", label: "Spanish" },
      { value: "fr", label: "French" },
      { value: "de", label: "German" },
      { value: "it", label: "Italian" },
      { value: "pt", label: "Portuguese" },
      { value: "ru", label: "Russian" },
      { value: "zh", label: "Chinese" },
      { value: "ja", label: "Japanese" },
      { value: "ko", label: "Korean" },
    ]

    const currencies: ComboboxOption[] = [
      { value: "usd", label: "USD - US Dollar" },
      { value: "eur", label: "EUR - Euro" },
      { value: "gbp", label: "GBP - British Pound" },
      { value: "jpy", label: "JPY - Japanese Yen" },
      { value: "cad", label: "CAD - Canadian Dollar" },
      { value: "aud", label: "AUD - Australian Dollar" },
      { value: "chf", label: "CHF - Swiss Franc" },
      { value: "cny", label: "CNY - Chinese Yuan" },
    ]

    const departments: ComboboxOption[] = [
      { value: "engineering", label: "Engineering" },
      { value: "design", label: "Design" },
      { value: "product", label: "Product" },
      { value: "marketing", label: "Marketing" },
      { value: "sales", label: "Sales" },
      { value: "support", label: "Support" },
      { value: "hr", label: "Human Resources" },
      { value: "finance", label: "Finance" },
    ]

    const tagOptions: ComboboxOption[] = [
      { value: "bug", label: "Bug" },
      { value: "feature", label: "Feature" },
      { value: "enhancement", label: "Enhancement" },
      { value: "documentation", label: "Documentation" },
      { value: "critical", label: "Critical" },
      { value: "high-priority", label: "High Priority" },
      { value: "low-priority", label: "Low Priority" },
      { value: "wontfix", label: "Won't Fix" },
      { value: "duplicate", label: "Duplicate" },
      { value: "help-wanted", label: "Help Wanted" },
    ]

    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">User Settings</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Timezone</label>
              <Combobox
                options={timezones}
                value={timezone}
                onValueChange={setTimezone}
                placeholder="Select timezone"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Language</label>
              <Combobox
                options={languages}
                value={language}
                onValueChange={setLanguage}
                placeholder="Select language"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Currency</label>
              <Combobox
                options={currencies}
                value={currency}
                onValueChange={setCurrency}
                placeholder="Select currency"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Department</label>
              <Combobox
                options={departments}
                value={department}
                onValueChange={setDepartment}
                placeholder="Select department"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Issue Tags</h3>
          <div className="space-y-2">
            <label className="text-sm font-medium">Select tags (max 5)</label>
            <MultiCombobox
              options={tagOptions}
              values={tags}
              onValuesChange={setTags}
              placeholder="Select tags"
              maxItems={5}
              className="w-full max-w-md"
            />
            {tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {tags.map((tag) => {
                  const option = tagOptions.find((o) => o.value === tag)
                  return (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                    >
                      {option?.label}
                    </span>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  },
}

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      country: "",
      language: "",
      framework: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.error("Form submitted:", JSON.stringify(formData, null, 2))
    }

    return (
      <form onSubmit={handleSubmit} className="w-[400px] space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Country</label>
          <Combobox
            options={countries}
            value={formData.country}
            onValueChange={(value) => setFormData({ ...formData, country: value })}
            placeholder="Select country"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Language</label>
          <Combobox
            options={[
              { value: "en", label: "English" },
              { value: "es", label: "Spanish" },
              { value: "fr", label: "French" },
              { value: "de", label: "German" },
            ]}
            value={formData.language}
            onValueChange={(value) => setFormData({ ...formData, language: value })}
            placeholder="Select language"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Framework</label>
          <Combobox
            options={frameworks}
            value={formData.framework}
            onValueChange={(value) => setFormData({ ...formData, framework: value })}
            placeholder="Select framework"
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2 text-sm font-medium"
        >
          Submit
        </button>

        <div className="bg-muted rounded-lg p-4">
          <p className="text-sm font-medium">Form Data:</p>
          <pre className="mt-2 text-xs">{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </form>
    )
  },
}
