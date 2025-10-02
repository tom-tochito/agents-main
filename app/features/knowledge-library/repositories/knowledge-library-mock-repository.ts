interface Folder {
  id: string
  name: string
  parentId?: string
  fileCount: number
  isOpen: boolean
  children?: Folder[]
  files?: FileItem[]
}

interface FileItem {
  id: string
  name: string
  type: string
  folder: string
  dateModified: string
  modifiedBy: string
  tags: string[]
  size?: string
}

interface Tag {
  id: string
  name: string
  count: number
}

export class KnowledgeLibraryMockRepository {
  private folders: Folder[] = [
    {
      id: "financials",
      name: "Financials",
      fileCount: 2,
      isOpen: false,
    },
    {
      id: "financial-docs",
      name: "Financial Docs",
      parentId: "financials",
      fileCount: 2,
      isOpen: true,
      children: [],
      files: [
        { id: "f1", name: "Enphase Annual Report 2024.pdf", type: "pdf" },
        { id: "f2", name: "Q1'25 Supplemental Data Sheet.pdf", type: "pdf" },
      ]
    },
    {
      id: "standards-frameworks",
      name: "Standards and frameworks",
      fileCount: 5,
      isOpen: true,
      children: [],
      files: [
        { id: "s1", name: "wms-2024-03-31-10k.pdf", type: "pdf" },
        { id: "s2", name: "Equity research initiation agent_ChatGPT vs Clairo.docx", type: "doc" },
        { id: "s3", name: "Equity Research Company Initiation AI agent parameters and question bank1.pdf", type: "pdf" },
        { id: "s4", name: "Discussions.docx", type: "doc" },
      ]
    },
    {
      id: "alphabet",
      name: "Alphabet",
      fileCount: 15,
      isOpen: false,
    },
    {
      id: "halma-plc",
      name: "Halma PLC",
      fileCount: 47,
      isOpen: false,
    },
    {
      id: "staff-files",
      name: "Staff files",
      fileCount: 32,
      isOpen: false,
    },
    {
      id: "policies-1",
      name: "Policies",
      fileCount: 3,
      isOpen: false,
    },
    {
      id: "policies-2",
      name: "Policies",
      fileCount: 2,
      isOpen: false,
    },
    {
      id: "policies-3",
      name: "Policies",
      fileCount: 7,
      isOpen: false,
    },
    {
      id: "initiation-report",
      name: "Initiation Report_Xylem_February 2025.pdf",
      fileCount: 0,
      isOpen: false,
    },
    {
      id: "pitchbook-profile",
      name: "PitchBook Profile - Enphase Energy.pdf",
      fileCount: 0,
      isOpen: false,
    },
    {
      id: "human-rights",
      name: "Human-rights-code.pdf",
      fileCount: 0,
      isOpen: false,
    },
    {
      id: "esg-report",
      name: "ESG Report 2024.pdf",
      fileCount: 0,
      isOpen: false,
    },
  ]

  private files: FileItem[] = [
    {
      id: "1",
      name: "Glass, Lewis & Co., LLC › Enphase Energy, Inc. › 05_15_2024.pdf",
      type: "pdf",
      folder: "Financial Docs",
      dateModified: "Jun 5, 2025",
      modifiedBy: "James",
      tags: ["Finance & Compliance"],
    },
    {
      id: "2",
      name: "PitchBook Profile - Enphase Energy.pdf",
      type: "pdf",
      folder: "Financial Docs",
      dateModified: "Jun 5, 2025",
      modifiedBy: "James",
      tags: ["HR & Talent"],
    },
    {
      id: "3",
      name: "Human-rights-code.pdf",
      type: "pdf",
      folder: "Standards",
      dateModified: "Jun 5, 2025",
      modifiedBy: "James",
      tags: ["Marketing & Sales"],
    },
    {
      id: "4",
      name: "ESG Report 2024.pdf",
      type: "pdf",
      folder: "Alphabet",
      dateModified: "Jun 5, 2025",
      modifiedBy: "James",
      tags: ["HR & Talent"],
    },
    {
      id: "5",
      name: "Enphase Annual Report 2024.pdf",
      type: "pdf",
      folder: "Alphabet",
      dateModified: "Jun 5, 2025, 11:38 AM",
      modifiedBy: "James",
      tags: ["Business & Strategy"],
    },
    {
      id: "6",
      name: "Corporate-governance-guidelines.pdf",
      type: "pdf",
      folder: "Standards",
      dateModified: "Jun 5, 2025",
      modifiedBy: "James",
      tags: ["Business & Strategy"],
    },
    {
      id: "7",
      name: "Initiation Report_Xylem_February 2025.pdf",
      type: "pdf",
      folder: "Financial Docs",
      dateModified: "Jun 5, 2025",
      modifiedBy: "James",
      tags: [],
    },
  ]

  private tags: Tag[] = [
    { id: "1", name: "Finance & Compliance", count: 24 },
    { id: "2", name: "HR & Talent", count: 18 },
    { id: "3", name: "Marketing & Sales", count: 12 },
    { id: "4", name: "Business & Strategy", count: 31 },
    { id: "5", name: "Legal", count: 8 },
    { id: "6", name: "ESG", count: 15 },
  ]

  getFolders(): Folder[] {
    return this.folders
  }

  getFiles(folderId?: string): FileItem[] {
    if (!folderId || folderId === "all") {
      return this.files
    }
    
    // Return files based on selected folder
    if (folderId === "financials") {
      return this.files.filter(f => 
        f.folder === "Financial Docs" || f.folder === "Standards"
      )
    }
    
    if (folderId === "alphabet") {
      return this.files.filter(f => f.folder === "Alphabet")
    }
    
    return this.files
  }

  getTags(): Tag[] {
    return this.tags
  }

  searchFiles(query: string): FileItem[] {
    const lowercaseQuery = query.toLowerCase()
    return this.files.filter(file => 
      file.name.toLowerCase().includes(lowercaseQuery) ||
      file.folder.toLowerCase().includes(lowercaseQuery) ||
      file.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  }

  getFilesByTag(tagName: string): FileItem[] {
    return this.files.filter(file => 
      file.tags.includes(tagName)
    )
  }

  uploadFile(file: Partial<FileItem>): FileItem {
    const newFile: FileItem = {
      id: `file-${Date.now()}`,
      name: file.name || "New file",
      type: file.type || "pdf",
      folder: file.folder || "Uncategorized",
      dateModified: new Date().toLocaleDateString("en-US", { 
        month: "short", 
        day: "numeric", 
        year: "numeric" 
      }),
      modifiedBy: "Current User",
      tags: file.tags || [],
    }
    
    this.files.push(newFile)
    return newFile
  }

  deleteFile(fileId: string): boolean {
    const index = this.files.findIndex(f => f.id === fileId)
    if (index !== -1) {
      this.files.splice(index, 1)
      return true
    }
    return false
  }

  createFolder(folder: Partial<Folder>): Folder {
    const newFolder: Folder = {
      id: `folder-${Date.now()}`,
      name: folder.name || "New Folder",
      parentId: folder.parentId,
      fileCount: 0,
      isOpen: false,
      children: [],
      files: [],
    }
    
    this.folders.push(newFolder)
    return newFolder
  }
}