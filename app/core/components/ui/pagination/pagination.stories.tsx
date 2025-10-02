import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  SimplePagination,
  MiniPagination,
  TablePagination,
} from "./pagination"

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Pagination
export const Basic: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

// With Ellipsis
export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">9</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

// Simple Pagination (Interactive)
export const SimpleInteractive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10

    return (
      <div className="space-y-4">
        <SimplePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <div className="text-muted-foreground text-center text-sm">Current page: {currentPage}</div>
      </div>
    )
  },
}

// Simple Pagination with Many Pages
export const SimpleManyPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 100

    return (
      <div className="space-y-4">
        <SimplePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <div className="text-muted-foreground text-center text-sm">
          Page {currentPage} of {totalPages}
        </div>
      </div>
    )
  },
}

// Simple Pagination - Different States
export const SimpleStates: Story = {
  render: () => {
    const [page1, setPage1] = useState(1)
    const [page2, setPage2] = useState(5)
    const [page3, setPage3] = useState(10)

    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">First page selected</p>
          <SimplePagination currentPage={page1} totalPages={10} onPageChange={setPage1} />
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">Middle page selected</p>
          <SimplePagination currentPage={page2} totalPages={10} onPageChange={setPage2} />
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">Last page selected</p>
          <SimplePagination currentPage={page3} totalPages={10} onPageChange={setPage3} />
        </div>
      </div>
    )
  },
}

// Simple Pagination - Custom Sibling Count
export const SimpleSiblingCount: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(10)

    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">Sibling count: 1 (default)</p>
          <SimplePagination
            currentPage={currentPage}
            totalPages={20}
            onPageChange={setCurrentPage}
            siblingCount={1}
          />
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">Sibling count: 2</p>
          <SimplePagination
            currentPage={currentPage}
            totalPages={20}
            onPageChange={setCurrentPage}
            siblingCount={2}
          />
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">Sibling count: 3</p>
          <SimplePagination
            currentPage={currentPage}
            totalPages={20}
            onPageChange={setCurrentPage}
            siblingCount={3}
          />
        </div>
      </div>
    )
  },
}

// Without Previous/Next
export const WithoutPreviousNext: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
      <SimplePagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
        showPreviousNext={false}
      />
    )
  },
}

// Mini Pagination
export const Mini: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10

    return (
      <div className="space-y-4">
        <MiniPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <div className="text-muted-foreground text-center text-sm">Current page: {currentPage}</div>
      </div>
    )
  },
}

// Table Pagination
export const Table: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const totalItems = 248
    const totalPages = Math.ceil(totalItems / pageSize)

    return (
      <div className="w-[800px] rounded-lg border">
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
          onPageSizeChange={(size) => {
            setPageSize(size)
            setCurrentPage(1) // Reset to first page when page size changes
          }}
        />
      </div>
    )
  },
}

// Table Pagination Without Page Size
export const TableWithoutPageSize: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 20
    const totalItems = 150
    const totalPages = Math.ceil(totalItems / pageSize)

    return (
      <div className="w-[600px] rounded-lg border">
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
        />
      </div>
    )
  },
}

// Disabled States
export const DisabledStates: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">First page (previous disabled)</p>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="pointer-events-none opacity-50" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Last page (next disabled)</p>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="pointer-events-none opacity-50" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  ),
}

// Real World Example - Blog Posts
export const BlogPosts: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 10
    const totalPosts = 156
    const totalPages = Math.ceil(totalPosts / postsPerPage)

    const posts = Array.from({ length: postsPerPage }, (_, i) => ({
      id: (currentPage - 1) * postsPerPage + i + 1,
      title: `Blog Post ${(currentPage - 1) * postsPerPage + i + 1}`,
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2024-01-01",
    }))

    return (
      <div className="w-[600px] space-y-6">
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="rounded-lg border p-4">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{post.excerpt}</p>
              <p className="text-muted-foreground mt-2 text-xs">{post.date}</p>
            </div>
          ))}
        </div>

        <SimplePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        <div className="text-muted-foreground text-center text-sm">
          Showing posts {(currentPage - 1) * postsPerPage + 1} to{" "}
          {Math.min(currentPage * postsPerPage, totalPosts)} of {totalPosts}
        </div>
      </div>
    )
  },
}

// Real World Example - Data Table
export const DataTable: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const totalItems = 248

    const data = Array.from({ length: pageSize }, (_, i) => ({
      id: (currentPage - 1) * pageSize + i + 1,
      name: `User ${(currentPage - 1) * pageSize + i + 1}`,
      email: `user${(currentPage - 1) * pageSize + i + 1}@example.com`,
      role: ["Admin", "User", "Editor"][Math.floor(Math.random() * 3)],
      status: ["Active", "Inactive"][Math.floor(Math.random() * 2)],
    }))

    const totalPages = Math.ceil(totalItems / pageSize)

    return (
      <div className="w-[800px] rounded-lg border">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="p-4">{row.id}</td>
                <td className="p-4">{row.name}</td>
                <td className="p-4">{row.email}</td>
                <td className="p-4">{row.role}</td>
                <td className="p-4">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
                      row.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-50 text-gray-700",
                    )}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
          onPageSizeChange={(size) => {
            setPageSize(size)
            setCurrentPage(1)
          }}
        />
      </div>
    )
  },
}

// Real World Example - Image Gallery
export const ImageGallery: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const imagesPerPage = 9
    const totalImages = 45
    const totalPages = Math.ceil(totalImages / imagesPerPage)

    const images = Array.from({ length: imagesPerPage }, (_, i) => ({
      id: (currentPage - 1) * imagesPerPage + i + 1,
      src: `https://via.placeholder.com/300x200?text=Image+${
        (currentPage - 1) * imagesPerPage + i + 1
      }`,
    }))

    return (
      <div className="w-[600px] space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="bg-muted aspect-video overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={`Image ${image.id}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <SimplePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    )
  },
}

// Custom Styling
export const CustomStyling: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(3)

    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">Compact pagination</p>
          <Pagination>
            <PaginationContent className="gap-0">
              <PaginationItem>
                <PaginationPrevious href="#" className="h-8 text-xs" />
              </PaginationItem>
              {[1, 2, 3, 4, 5].map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    className="h-8 w-8 text-xs"
                    isActive={page === currentPage}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext href="#" className="h-8 text-xs" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">Large pagination</p>
          <Pagination>
            <PaginationContent className="gap-2">
              <PaginationItem>
                <PaginationPrevious href="#" className="h-12 px-4 text-base" />
              </PaginationItem>
              {[1, 2, 3, 4, 5].map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    className="h-12 w-12 text-base"
                    isActive={page === currentPage}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext href="#" className="h-12 px-4 text-base" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    )
  },
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}
