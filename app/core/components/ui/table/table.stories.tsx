import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableContainer,
  ResponsiveTable,
  SortableTableHead,
  CompactTable,
  StickyHeaderTable,
} from "./table"
import { Badge } from "../badge"
import { Button } from "../button"
import { Checkbox } from "../checkbox"
import { Input } from "../input"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu"
import {
  MoreHorizontal,
  ArrowUpDown,
  ChevronDown,
  Copy,
  Edit,
  Trash2,
  Download,
  Mail,
  User,
  Calendar,
  DollarSign,
  TrendingUp,
  TrendingDown,
} from "lucide-react"

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
}

export default meta
type Story = StoryObj<typeof Table>

// Basic table
export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV004</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$450.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,200.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

// Striped rows
export const StripedRows: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
          { name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
          { name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
          { name: "Alice Brown", email: "alice@example.com", role: "Editor", status: "Active" },
          { name: "Charlie Wilson", email: "charlie@example.com", role: "User", status: "Active" },
        ].map((user, i) => (
          <TableRow key={i} variant="striped">
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                {user.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// With borders
export const WithBorders: Story = {
  render: () => (
    <TableContainer bordered>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Laptop Pro</TableCell>
            <TableCell>Electronics</TableCell>
            <TableCell>$1,299.00</TableCell>
            <TableCell>15</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wireless Mouse</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell>$29.99</TableCell>
            <TableCell>48</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>USB-C Hub</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell>$49.99</TableCell>
            <TableCell>23</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

// Sortable table
export const Sortable: Story = {
  render: () => {
    const [sort, setSort] = useState<{ column: string; direction: "asc" | "desc" }>({
      column: "",
      direction: "asc",
    })

    const data = [
      { id: 1, name: "Alice", age: 28, department: "Engineering", salary: 95000 },
      { id: 2, name: "Bob", age: 35, department: "Marketing", salary: 75000 },
      { id: 3, name: "Charlie", age: 42, department: "Sales", salary: 85000 },
      { id: 4, name: "Diana", age: 31, department: "Engineering", salary: 105000 },
      { id: 5, name: "Eve", age: 29, department: "HR", salary: 65000 },
    ]

    const handleSort = (column: string) => {
      setSort((prev) => ({
        column,
        direction: prev.column === column && prev.direction === "asc" ? "desc" : "asc",
      }))
    }

    const sortedData = [...data].sort((a, b) => {
      if (!sort.column) return 0
      const aVal = a[sort.column as keyof typeof a]
      const bVal = b[sort.column as keyof typeof b]
      if (sort.direction === "asc") {
        return aVal > bVal ? 1 : -1
      }
      return aVal < bVal ? 1 : -1
    })

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <SortableTableHead
              sorted={sort.column === "name" ? sort.direction : false}
              onSort={() => handleSort("name")}
            >
              Name
            </SortableTableHead>
            <SortableTableHead
              sorted={sort.column === "age" ? sort.direction : false}
              onSort={() => handleSort("age")}
            >
              Age
            </SortableTableHead>
            <SortableTableHead
              sorted={sort.column === "department" ? sort.direction : false}
              onSort={() => handleSort("department")}
            >
              Department
            </SortableTableHead>
            <SortableTableHead
              sorted={sort.column === "salary" ? sort.direction : false}
              onSort={() => handleSort("salary")}
            >
              Salary
            </SortableTableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.age}</TableCell>
              <TableCell>{person.department}</TableCell>
              <TableCell>${person.salary.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

// Selectable rows
export const SelectableRows: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([])
    const data = [
      { id: 1, name: "Project Alpha", status: "In Progress", date: "2024-03-15" },
      { id: 2, name: "Project Beta", status: "Completed", date: "2024-03-10" },
      { id: 3, name: "Project Gamma", status: "Planning", date: "2024-03-20" },
      { id: 4, name: "Project Delta", status: "In Progress", date: "2024-03-18" },
    ]

    const toggleRow = (id: number) => {
      setSelectedRows((prev) =>
        prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
      )
    }

    const toggleAll = () => {
      setSelectedRows((prev) => (prev.length === data.length ? [] : data.map((item) => item.id)))
    }

    return (
      <div>
        {selectedRows.length > 0 && (
          <div className="mb-4 flex items-center gap-2">
            <span className="text-muted-foreground text-sm">
              {selectedRows.length} row(s) selected
            </span>
            <Button size="sm" variant="outline">
              Delete Selected
            </Button>
          </div>
        )}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedRows.length === data.length}
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead>Project Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                data-state={selectedRows.includes(item.id) ? "selected" : undefined}
              >
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(item.id)}
                    onCheckedChange={() => toggleRow(item.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "Completed"
                        ? "default"
                        : item.status === "In Progress"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  },
}

// With actions
export const WithActions: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Last Active</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          {
            name: "Alice Johnson",
            email: "alice@example.com",
            role: "Admin",
            lastActive: "2 hours ago",
          },
          {
            name: "Bob Smith",
            email: "bob@example.com",
            role: "Editor",
            lastActive: "5 hours ago",
          },
          {
            name: "Charlie Brown",
            email: "charlie@example.com",
            role: "Viewer",
            lastActive: "1 day ago",
          },
        ].map((user, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.lastActive}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    View Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

// Compact table
export const Compact: Story = {
  render: () => (
    <CompactTable>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead>Qty</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell>5</TableCell>
          <TableCell>$10.00</TableCell>
          <TableCell>$50.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell>3</TableCell>
          <TableCell>$15.00</TableCell>
          <TableCell>$45.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget C</TableCell>
          <TableCell>7</TableCell>
          <TableCell>$5.00</TableCell>
          <TableCell>$35.00</TableCell>
        </TableRow>
      </TableBody>
    </CompactTable>
  ),
}

// Sticky header
export const StickyHeader: Story = {
  render: () => {
    const rows = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      category: ["Electronics", "Clothing", "Food", "Books"][i % 4],
      price: Math.floor(Math.random() * 1000) + 10,
      stock: Math.floor(Math.random() * 100),
    }))

    return (
      <StickyHeaderTable maxHeight="400px">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>${row.price}</TableCell>
              <TableCell>{row.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StickyHeaderTable>
    )
  },
}

// Responsive table
export const Responsive: Story = {
  render: () => (
    <ResponsiveTable>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment Method</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-mono text-xs">TXN-001-2024</TableCell>
            <TableCell>2024-03-15</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>Laptop Pro</TableCell>
            <TableCell>1</TableCell>
            <TableCell>$1,299.00</TableCell>
            <TableCell>$1,299.00</TableCell>
            <TableCell>
              <Badge>Completed</Badge>
            </TableCell>
            <TableCell>Credit Card</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-mono text-xs">TXN-002-2024</TableCell>
            <TableCell>2024-03-16</TableCell>
            <TableCell>Jane Smith</TableCell>
            <TableCell>Wireless Mouse</TableCell>
            <TableCell>2</TableCell>
            <TableCell>$29.99</TableCell>
            <TableCell>$59.98</TableCell>
            <TableCell>
              <Badge variant="secondary">Processing</Badge>
            </TableCell>
            <TableCell>PayPal</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ResponsiveTable>
  ),
}

// User management table
export const UserManagement: Story = {
  render: () => {
    const users = [
      {
        id: 1,
        avatar: "https://github.com/shadcn.png",
        name: "Sarah Johnson",
        email: "sarah@example.com",
        role: "Admin",
        department: "Engineering",
        status: "Active",
        lastActive: "2 min ago",
      },
      {
        id: 2,
        avatar: null,
        name: "Michael Chen",
        email: "michael@example.com",
        role: "Developer",
        department: "Engineering",
        status: "Active",
        lastActive: "1 hour ago",
      },
      {
        id: 3,
        avatar: null,
        name: "Emily Davis",
        email: "emily@example.com",
        role: "Designer",
        department: "Design",
        status: "Away",
        lastActive: "3 hours ago",
      },
      {
        id: 4,
        avatar: null,
        name: "James Wilson",
        email: "james@example.com",
        role: "Manager",
        department: "Sales",
        status: "Offline",
        lastActive: "2 days ago",
      },
    ]

    return (
      <TableContainer bordered shadow>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      {user.avatar && <AvatarImage src={user.avatar} />}
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-muted-foreground text-sm">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      user.status === "Active"
                        ? "default"
                        : user.status === "Away"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{user.lastActive}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  },
}

// Financial data table
export const FinancialData: Story = {
  render: () => {
    const data = [
      {
        ticker: "AAPL",
        name: "Apple Inc.",
        price: 178.5,
        change: 2.34,
        changePercent: 1.33,
        volume: "52.3M",
        marketCap: "2.8T",
      },
      {
        ticker: "GOOGL",
        name: "Alphabet Inc.",
        price: 138.21,
        change: -1.45,
        changePercent: -1.04,
        volume: "28.1M",
        marketCap: "1.7T",
      },
      {
        ticker: "MSFT",
        name: "Microsoft Corp.",
        price: 378.91,
        change: 5.67,
        changePercent: 1.52,
        volume: "22.8M",
        marketCap: "2.8T",
      },
      {
        ticker: "AMZN",
        name: "Amazon.com Inc.",
        price: 151.94,
        change: 0.89,
        changePercent: 0.59,
        volume: "41.2M",
        marketCap: "1.6T",
      },
      {
        ticker: "TSLA",
        name: "Tesla Inc.",
        price: 238.45,
        change: -8.32,
        changePercent: -3.37,
        volume: "118.4M",
        marketCap: "758B",
      },
    ]

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Company</TableHead>
            <TableHead align="right">Price</TableHead>
            <TableHead align="right">Change</TableHead>
            <TableHead align="right">% Change</TableHead>
            <TableHead align="right">Volume</TableHead>
            <TableHead align="right">Market Cap</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((stock) => (
            <TableRow key={stock.ticker}>
              <TableCell className="font-mono font-medium">{stock.ticker}</TableCell>
              <TableCell>{stock.name}</TableCell>
              <TableCell align="right" className="font-mono">
                ${stock.price.toFixed(2)}
              </TableCell>
              <TableCell align="right">
                <span className={stock.change >= 0 ? "text-green-600" : "text-red-600"}>
                  {stock.change >= 0 ? "+" : ""}
                  {stock.change.toFixed(2)}
                </span>
              </TableCell>
              <TableCell align="right">
                <div
                  className={`flex items-center justify-end gap-1 ${stock.changePercent >= 0 ? "text-green-600" : "text-red-600"}`}
                >
                  {stock.changePercent >= 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {Math.abs(stock.changePercent).toFixed(2)}%
                </div>
              </TableCell>
              <TableCell align="right">{stock.volume}</TableCell>
              <TableCell align="right">{stock.marketCap}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

// Order history table
export const OrderHistory: Story = {
  render: () => (
    <Table>
      <TableCaption>Your recent orders from the last 30 days</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Tracking</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-mono">#ORD-2024-001</TableCell>
          <TableCell>Mar 15, 2024</TableCell>
          <TableCell>
            <div className="text-sm">
              <div>Laptop Pro x1</div>
              <div className="text-muted-foreground">USB-C Cable x2</div>
            </div>
          </TableCell>
          <TableCell>$1,329.98</TableCell>
          <TableCell>
            <Badge>Delivered</Badge>
          </TableCell>
          <TableCell>
            <Button variant="link" size="sm" className="h-auto p-0">
              Track Package
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono">#ORD-2024-002</TableCell>
          <TableCell>Mar 18, 2024</TableCell>
          <TableCell>
            <div className="text-sm">
              <div>Wireless Mouse x1</div>
              <div className="text-muted-foreground">Mouse Pad x1</div>
            </div>
          </TableCell>
          <TableCell>$54.98</TableCell>
          <TableCell>
            <Badge variant="secondary">In Transit</Badge>
          </TableCell>
          <TableCell>
            <Button variant="link" size="sm" className="h-auto p-0">
              Track Package
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono">#ORD-2024-003</TableCell>
          <TableCell>Mar 20, 2024</TableCell>
          <TableCell>
            <div className="text-sm">
              <div>Mechanical Keyboard x1</div>
            </div>
          </TableCell>
          <TableCell>$149.99</TableCell>
          <TableCell>
            <Badge variant="outline">Processing</Badge>
          </TableCell>
          <TableCell>
            <span className="text-muted-foreground text-sm">Not yet shipped</span>
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Orders</TableCell>
          <TableCell>$1,534.95</TableCell>
          <TableCell colSpan={2}></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}
