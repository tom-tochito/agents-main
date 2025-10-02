import * as React from "react"
import { Check, ChevronsUpDown, Search, X } from "lucide-react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "~/core/lib/utils"
import { Button } from "../button"

interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

interface ComboboxProps {
  options: ComboboxOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  disabled?: boolean
  className?: string
  buttonClassName?: string
  contentClassName?: string
}

const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      options,
      value,
      onValueChange,
      placeholder = "Select an option",
      searchPlaceholder = "Search...",
      emptyText = "No option found.",
      disabled,
      className,
      buttonClassName,
      contentClassName,
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState("")

    const filteredOptions = React.useMemo(() => {
      return options.filter((option) => option.label.toLowerCase().includes(search.toLowerCase()))
    }, [options, search])

    const selectedOption = options.find((option) => option.value === value)

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label={placeholder}
            disabled={disabled}
            className={cn(
              "w-[200px] justify-between",
              !value && "text-muted-foreground",
              buttonClassName,
              className,
            )}
          >
            <span className="truncate">{value ? selectedOption?.label : placeholder}</span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            className={cn(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-[200px] rounded-md border p-0 shadow-md outline-none",
              contentClassName,
            )}
            sideOffset={4}
          >
            <div className="flex items-center border-b px-3 pt-3 pb-2">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input
                className="placeholder:text-muted-foreground flex h-8 w-full rounded-md bg-transparent text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="ring-offset-background focus:ring-ring ml-2 rounded-sm opacity-50 hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="max-h-[300px] overflow-y-auto p-1">
              {filteredOptions.length === 0 ? (
                <div className="relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none">
                  {emptyText}
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onValueChange?.(option.value === value ? "" : option.value)
                      setOpen(false)
                      setSearch("")
                    }}
                    disabled={option.disabled}
                    className={cn(
                      "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                      option.disabled && "pointer-events-none opacity-50",
                    )}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    <span className="truncate">{option.label}</span>
                  </button>
                ))
              )}
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    )
  },
)
Combobox.displayName = "Combobox"

// Advanced Combobox with categories
interface ComboboxCategory {
  label: string
  options: ComboboxOption[]
}

interface ComboboxWithCategoriesProps extends Omit<ComboboxProps, "options"> {
  categories: ComboboxCategory[]
}

const ComboboxWithCategories = React.forwardRef<HTMLButtonElement, ComboboxWithCategoriesProps>(
  (
    {
      categories,
      value,
      onValueChange,
      placeholder = "Select an option",
      searchPlaceholder = "Search...",
      emptyText = "No option found.",
      disabled,
      className,
      buttonClassName,
      contentClassName,
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState("")

    const filteredCategories = React.useMemo(() => {
      return categories
        .map((category) => ({
          ...category,
          options: category.options.filter((option) =>
            option.label.toLowerCase().includes(search.toLowerCase()),
          ),
        }))
        .filter((category) => category.options.length > 0)
    }, [categories, search])

    const allOptions = categories.flatMap((cat) => cat.options)
    const selectedOption = allOptions.find((option) => option.value === value)

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label={placeholder}
            disabled={disabled}
            className={cn(
              "w-[200px] justify-between",
              !value && "text-muted-foreground",
              buttonClassName,
              className,
            )}
          >
            <span className="truncate">{value ? selectedOption?.label : placeholder}</span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            className={cn(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-[200px] rounded-md border p-0 shadow-md outline-none",
              contentClassName,
            )}
            sideOffset={4}
          >
            <div className="flex items-center border-b px-3 pt-3 pb-2">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input
                className="placeholder:text-muted-foreground flex h-8 w-full rounded-md bg-transparent text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="ring-offset-background focus:ring-ring ml-2 rounded-sm opacity-50 hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="max-h-[300px] overflow-y-auto p-1">
              {filteredCategories.length === 0 ? (
                <div className="relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none">
                  {emptyText}
                </div>
              ) : (
                filteredCategories.map((category, categoryIndex) => (
                  <div key={`category-${categoryIndex}`}>
                    <div className="text-muted-foreground px-2 py-1.5 text-xs font-semibold">
                      {category.label}
                    </div>
                    {category.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          onValueChange?.(option.value === value ? "" : option.value)
                          setOpen(false)
                          setSearch("")
                        }}
                        disabled={option.disabled}
                        className={cn(
                          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                          option.disabled && "pointer-events-none opacity-50",
                        )}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === option.value ? "opacity-100" : "opacity-0",
                          )}
                        />
                        <span className="truncate">{option.label}</span>
                      </button>
                    ))}
                  </div>
                ))
              )}
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    )
  },
)
ComboboxWithCategories.displayName = "ComboboxWithCategories"

// Multi-select Combobox
interface MultiComboboxProps extends Omit<ComboboxProps, "value" | "onValueChange"> {
  values?: string[]
  onValuesChange?: (values: string[]) => void
  maxItems?: number
}

const MultiCombobox = React.forwardRef<HTMLButtonElement, MultiComboboxProps>(
  (
    {
      options,
      values = [],
      onValuesChange,
      placeholder = "Select options",
      searchPlaceholder = "Search...",
      emptyText = "No option found.",
      disabled,
      maxItems,
      className,
      buttonClassName,
      contentClassName,
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState("")

    const filteredOptions = React.useMemo(() => {
      return options.filter((option) => option.label.toLowerCase().includes(search.toLowerCase()))
    }, [options, search])

    const handleSelect = (optionValue: string) => {
      const newValues = values.includes(optionValue)
        ? values.filter((v) => v !== optionValue)
        : maxItems && values.length >= maxItems
          ? values
          : [...values, optionValue]
      onValuesChange?.(newValues)
    }

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label={placeholder}
            disabled={disabled}
            className={cn(
              "w-[200px] justify-between",
              values.length === 0 && "text-muted-foreground",
              buttonClassName,
              className,
            )}
          >
            <span className="truncate">
              {values.length > 0 ? `${values.length} selected` : placeholder}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            className={cn(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-[200px] rounded-md border p-0 shadow-md outline-none",
              contentClassName,
            )}
            sideOffset={4}
          >
            <div className="flex items-center border-b px-3 pt-3 pb-2">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input
                className="placeholder:text-muted-foreground flex h-8 w-full rounded-md bg-transparent text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="ring-offset-background focus:ring-ring ml-2 rounded-sm opacity-50 hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="max-h-[300px] overflow-y-auto p-1">
              {filteredOptions.length === 0 ? (
                <div className="relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none">
                  {emptyText}
                </div>
              ) : (
                filteredOptions.map((option) => {
                  const isSelected = values.includes(option.value)
                  const isDisabled =
                    option.disabled || (!!maxItems && values.length >= maxItems && !isSelected)

                  return (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      disabled={isDisabled}
                      className={cn(
                        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                        isDisabled && "pointer-events-none opacity-50",
                      )}
                    >
                      <Check
                        className={cn("mr-2 h-4 w-4", isSelected ? "opacity-100" : "opacity-0")}
                      />
                      <span className="truncate">{option.label}</span>
                    </button>
                  )
                })
              )}
            </div>
            {maxItems && (
              <div className="text-muted-foreground border-t px-3 py-2 text-xs">
                {values.length} / {maxItems} selected
              </div>
            )}
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    )
  },
)
MultiCombobox.displayName = "MultiCombobox"

export {
  Combobox,
  ComboboxWithCategories,
  MultiCombobox,
  type ComboboxOption,
  type ComboboxCategory,
  type ComboboxProps,
  type ComboboxWithCategoriesProps,
  type MultiComboboxProps,
}
