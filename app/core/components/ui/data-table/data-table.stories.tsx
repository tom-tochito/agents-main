import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { DataTable, DataTableColumnHeader, DataTableRowActions } from "./data-table"
import type { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../checkbox"
import { Badge } from "../badge"
import {
  ArrowUpDown,
  Edit,
  Copy,
  Trash2,
  MoreHorizontal,
  Mail,
  Phone,
  Building,
  Calendar,
  User,
  Package,
  DollarSign,
  TrendingUp,
  TrendingDown,
} from "lucide-react"
import { Button } from "../button"
import { cn } from "~/core/lib/utils"

const meta = {
  title: "UI/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

// Sample data types
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  date: string
}

type User = {
  id: string
  name: string
  email: string
  role: string
  department: string
  status: "active" | "inactive" | "pending"
  joinDate: string
  avatar?: string
}

type Product = {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: "in_stock" | "low_stock" | "out_of_stock"
  sku: string
}

// Sample data
const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    date: "2024-01-01",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    date: "2024-01-02",
  },
  {
    id: "573a1b88",
    amount: 350,
    status: "success",
    email: "john@company.com",
    date: "2024-01-03",
  },
  {
    id: "af4b2c91",
    amount: 75,
    status: "failed",
    email: "sarah@email.com",
    date: "2024-01-04",
  },
  {
    id: "bc5d3e42",
    amount: 200,
    status: "success",
    email: "mike@business.net",
    date: "2024-01-05",
  },
  {
    id: "cd6e4f53",
    amount: 500,
    status: "pending",
    email: "lisa@corp.com",
    date: "2024-01-06",
  },
  {
    id: "de7f5g64",
    amount: 150,
    status: "processing",
    email: "david@startup.io",
    date: "2024-01-07",
  },
  {
    id: "ef8g6h75",
    amount: 300,
    status: "success",
    email: "emma@tech.com",
    date: "2024-01-08",
  },
  {
    id: "fg9h7i86",
    amount: 425,
    status: "success",
    email: "oliver@design.co",
    date: "2024-01-09",
  },
  {
    id: "gh0i8j97",
    amount: 175,
    status: "pending",
    email: "sophia@agency.org",
    date: "2024-01-10",
  },
]

const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@company.com",
    role: "Admin",
    department: "Engineering",
    status: "active",
    joinDate: "2022-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@company.com",
    role: "Developer",
    department: "Engineering",
    status: "active",
    joinDate: "2022-03-20",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@company.com",
    role: "Designer",
    department: "Design",
    status: "inactive",
    joinDate: "2021-11-10",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@company.com",
    role: "Product Manager",
    department: "Product",
    status: "active",
    joinDate: "2023-01-05",
  },
  {
    id: "5",
    name: "Charlie Wilson",
    email: "charlie@company.com",
    role: "Developer",
    department: "Engineering",
    status: "pending",
    joinDate: "2023-06-15",
  },
]

const products: Product[] = [
  {
    id: "1",
    name: "Laptop Pro",
    category: "Electronics",
    price: 1299,
    stock: 45,
    status: "in_stock",
    sku: "LAP-001",
  },
  {
    id: "2",
    name: "Wireless Mouse",
    category: "Accessories",
    price: 29.99,
    stock: 5,
    status: "low_stock",
    sku: "ACC-002",
  },
  {
    id: "3",
    name: "USB-C Cable",
    category: "Accessories",
    price: 19.99,
    stock: 0,
    status: "out_of_stock",
    sku: "ACC-003",
  },
  {
    id: "4",
    name: "Monitor 4K",
    category: "Electronics",
    price: 599,
    stock: 22,
    status: "in_stock",
    sku: "MON-001",
  },
  {
    id: "5",
    name: "Keyboard Mechanical",
    category: "Accessories",
    price: 149.99,
    stock: 8,
    status: "low_stock",
    sku: "ACC-004",
  },
]

// Payment columns
const paymentColumns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
        pending: "secondary",
        processing: "default",
        success: "outline",
        failed: "destructive",
      }
      return <Badge variant={variants[status] || "default"}>{status}</Badge>
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"))
      return date.toLocaleDateString()
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        actions={[
          {
            label: "Copy payment ID",
            onClick: () => {},
            icon: <Copy className="h-4 w-4" />,
          },
          {
            label: "View details",
            onClick: () => {},
          },
          {
            label: "Delete",
            onClick: () => {},
            icon: <Trash2 className="h-4 w-4" />,
          },
        ]}
      />
    ),
  },
]

export const Default: Story = {
  args: {
    columns: paymentColumns,
    data: payments,
  },
}

export const WithoutSearch: Story = {
  args: {
    columns: paymentColumns,
    data: payments,
    showSearch: false,
  },
}

export const WithoutPagination: Story = {
  args: {
    columns: paymentColumns,
    data: payments.slice(0, 5),
    showPagination: false,
  },
}

export const CustomPageSize: Story = {
  args: {
    columns: paymentColumns,
    data: payments,
    pageSize: 5,
  },
}

export const MinimalTable: Story = {
  args: {
    columns: paymentColumns,
    data: payments,
    showSearch: false,
    showColumnToggle: false,
    showPagination: false,
  },
}

export const UsersTable: Story = {
  render: () => {
    const columns: ColumnDef<User>[] = [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
        cell: ({ row }) => (
          <div className="flex items-center space-x-2">
            <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
              <User className="h-4 w-4" />
            </div>
            <span className="font-medium">{row.getValue("name")}</span>
          </div>
        ),
      },
      {
        accessorKey: "email",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
        cell: ({ row }) => (
          <div className="flex items-center space-x-1">
            <Mail className="text-muted-foreground h-4 w-4" />
            <span>{row.getValue("email")}</span>
          </div>
        ),
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => <Badge variant="outline">{row.getValue("role")}</Badge>,
      },
      {
        accessorKey: "department",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Department" />,
        cell: ({ row }) => (
          <div className="flex items-center space-x-1">
            <Building className="text-muted-foreground h-4 w-4" />
            <span>{row.getValue("department")}</span>
          </div>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
          const status = row.getValue("status") as string
          const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
            active: "default",
            inactive: "secondary",
            pending: "outline",
          }
          return <Badge variant={variants[status] || "default"}>{status}</Badge>
        },
      },
      {
        accessorKey: "joinDate",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Join Date" />,
        cell: ({ row }) => {
          const date = new Date(row.getValue("joinDate"))
          return (
            <div className="flex items-center space-x-1">
              <Calendar className="text-muted-foreground h-4 w-4" />
              <span>{date.toLocaleDateString()}</span>
            </div>
          )
        },
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <DataTableRowActions
            row={row}
            actions={[
              {
                label: "View profile",
                onClick: () => {},
                icon: <User className="h-4 w-4" />,
              },
              {
                label: "Send email",
                onClick: () => {},
                icon: <Mail className="h-4 w-4" />,
              },
              {
                label: "Edit",
                onClick: () => {},
                icon: <Edit className="h-4 w-4" />,
              },
              {
                label: "Delete",
                onClick: () => {},
                icon: <Trash2 className="h-4 w-4" />,
              },
            ]}
          />
        ),
      },
    ]

    return <DataTable columns={columns} data={users} searchPlaceholder="Search users..." />
  },
}

export const ProductsTable: Story = {
  render: () => {
    const columns: ColumnDef<Product>[] = [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "sku",
        header: "SKU",
        cell: ({ row }) => <code className="text-xs">{row.getValue("sku")}</code>,
      },
      {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Product Name" />,
        cell: ({ row }) => (
          <div className="flex items-center space-x-2">
            <Package className="text-muted-foreground h-4 w-4" />
            <span className="font-medium">{row.getValue("name")}</span>
          </div>
        ),
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => <Badge variant="secondary">{row.getValue("category")}</Badge>,
      },
      {
        accessorKey: "price",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Price" />,
        cell: ({ row }) => {
          const price = parseFloat(row.getValue("price"))
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)
          return (
            <div className="flex items-center space-x-1">
              <DollarSign className="text-muted-foreground h-4 w-4" />
              <span className="font-medium">{formatted}</span>
            </div>
          )
        },
      },
      {
        accessorKey: "stock",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Stock" />,
        cell: ({ row }) => {
          const stock = row.getValue("stock") as number
          const { status } = row.original
          const color =
            status === "out_of_stock"
              ? "text-destructive"
              : status === "low_stock"
                ? "text-warning"
                : "text-success"

          return <div className={cn("font-medium", color)}>{stock} units</div>
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
          const status = row.getValue("status") as string
          const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
            in_stock: "default",
            low_stock: "secondary",
            out_of_stock: "destructive",
          }
          const labels: Record<string, string> = {
            in_stock: "In Stock",
            low_stock: "Low Stock",
            out_of_stock: "Out of Stock",
          }
          return <Badge variant={variants[status] || "default"}>{labels[status] || status}</Badge>
        },
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <DataTableRowActions
            row={row}
            actions={[
              {
                label: "View details",
                onClick: () => {},
              },
              {
                label: "Edit product",
                onClick: () => {},
                icon: <Edit className="h-4 w-4" />,
              },
              {
                label: "Duplicate",
                onClick: () => {},
                icon: <Copy className="h-4 w-4" />,
              },
              {
                label: "Delete",
                onClick: () => {},
                icon: <Trash2 className="h-4 w-4" />,
              },
            ]}
          />
        ),
      },
    ]

    return (
      <DataTable
        columns={columns}
        data={products}
        searchPlaceholder="Search products..."
        pageSize={5}
      />
    )
  },
}

export const EmptyState: Story = {
  args: {
    columns: paymentColumns,
    data: [],
  },
}

export const LargeDataset: Story = {
  render: () => {
    // Generate large dataset
    const largeData: Payment[] = Array.from({ length: 100 }, (_, i) => ({
      id: `payment-${i}`,
      amount: Math.floor(Math.random() * 1000),
      status: ["pending", "processing", "success", "failed"][
        Math.floor(Math.random() * 4)
      ] as Payment["status"],
      email: `user${i}@example.com`,
      date: new Date(2024, 0, i + 1).toISOString().split("T")[0],
    }))

    return (
      <DataTable
        columns={paymentColumns}
        data={largeData}
        searchPlaceholder="Search 100 payments..."
      />
    )
  },
}
