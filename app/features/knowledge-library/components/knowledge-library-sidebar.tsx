import { useState } from "react"
import { cn } from "~/core/lib/utils"
import { Badge } from "~/core/components/ui/badge/badge"
import { Tabs, TabsList, TabsTrigger } from "~/core/components/ui/tabs/tabs"
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  File,
} from "lucide-react"

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
}

interface KnowledgeLibrarySidebarProps {
  folders: Folder[]
  selectedFolder: string
  onFolderSelect: (folderId: string) => void
  viewMode: "folders" | "tags"
  onViewModeChange: (mode: "folders" | "tags") => void
}

export function KnowledgeLibrarySidebar({
  folders,
  selectedFolder,
  onFolderSelect,
  viewMode,
  onViewModeChange,
}: KnowledgeLibrarySidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["financials", "financial-docs", "standards-frameworks"])
  )

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId)
    } else {
      newExpanded.add(folderId)
    }
    setExpandedFolders(newExpanded)
  }

  const renderFolderTree = (folder: Folder, depth: number = 0) => {
    const isExpanded = expandedFolders.has(folder.id)
    const hasChildren = folder.children && folder.children.length > 0
    const hasFiles = folder.files && folder.files.length > 0
    const isSelected = selectedFolder === folder.id
    const isFile = folder.name.includes('.pdf') || folder.name.includes('.docx')

    return (
      <div key={folder.id}>
        <div
          className={cn(
            "flex items-center gap-1.5 h-8 px-2 hover:bg-orange-50 cursor-pointer rounded",
            isSelected && "bg-orange-50",
            depth === 1 && "ml-5",
            depth === 2 && "ml-10",
            depth === 3 && "ml-[60px]"
          )}
          onClick={() => {
            if (hasChildren || hasFiles) {
              toggleFolder(folder.id)
            }
            onFolderSelect(folder.id)
          }}
        >
          {(hasChildren || hasFiles) && !isFile && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleFolder(folder.id)
              }}
              className="p-0.5"
            >
              {isExpanded ? (
                <ChevronDown className="h-3 w-3 text-orange-600" />
              ) : (
                <ChevronRight className="h-3 w-3 text-gray-400" />
              )}
            </button>
          )}
          {!hasChildren && !hasFiles && !isFile && <div className="w-5" />}
          
          {isFile ? (
            <File className="h-3.5 w-3.5 text-orange-600 ml-5" />
          ) : isExpanded ? (
            <FolderOpen className="h-4 w-4 text-gray-500" />
          ) : (
            <Folder className="h-4 w-4 text-gray-500" />
          )}
          
          <span className={cn(
            "text-sm flex-1 truncate",
            isFile ? "text-gray-700" : "font-medium text-gray-900"
          )}>
            {folder.name}
          </span>
          
          {folder.fileCount > 0 && !isFile && (
            <Badge className="h-5 w-5 px-0 rounded-full bg-orange-600 text-white text-xs font-medium flex items-center justify-center">
              {folder.fileCount}
            </Badge>
          )}
        </div>

        {isExpanded && (
          <>
            {/* Draw vertical line for nested items */}
            {folder.files?.length > 0 && (
              <div className="relative">
                <div className="absolute left-9 top-0 bottom-0 w-px bg-gray-200" />
                {folder.files.map((file, index) => (
                  <div
                    key={file.id}
                    className={cn(
                      "flex items-center gap-1.5 h-7 hover:bg-orange-50 cursor-pointer relative rounded",
                      "pl-10"
                    )}
                  >
                    <File className="h-3.5 w-3.5 text-orange-600" />
                    <span className="text-sm text-gray-700 truncate pr-2">{file.name}</span>
                  </div>
                ))}
              </div>
            )}
            {folder.children?.map((child) => renderFolderTree(child, depth + 1))}
          </>
        )}
      </div>
    )
  }

  // Group folders by type for display
  const rootFolders = folders.filter((f) => f.id === "financials")
  const topLevelFolders = folders.filter((f) => 
    ["financial-docs", "standards-frameworks"].includes(f.id)
  )
  const companyFolders = folders.filter((f) => 
    ["alphabet", "halma-plc"].includes(f.id)
  )
  const fileFolders = folders.filter((f) => 
    f.name.includes(".pdf") || f.name.includes(".docx")
  )
  const policyFolders = folders.filter((f) => 
    f.id.startsWith("policies")
  )

  return (
    <div className="h-full flex flex-col">
      <div className="p-2">
        <Tabs value={viewMode} onValueChange={(v) => onViewModeChange(v as "folders" | "tags")}>
          <TabsList className="w-full h-9 bg-gray-100">
            <TabsTrigger 
              value="folders" 
              className="flex-1 text-sm data-[state=active]:bg-white data-[state=active]:text-orange-600 flex items-center gap-2"
            >
              <Folder className="h-4 w-4" />
              Folders
            </TabsTrigger>
            <TabsTrigger 
              value="tags" 
              className="flex-1 text-sm data-[state=active]:bg-white flex items-center gap-2"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Tags
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex-1 overflow-y-auto">
        {viewMode === "folders" ? (
          <div className="py-1">
            {/* Financials header */}
            <div className="px-3 py-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-900">Financials</h3>
                <span className="text-sm text-gray-500">92</span>
              </div>
            </div>
            
            {/* Root folders */}
            {rootFolders.filter(f => f.id !== "financials").map((folder) => renderFolderTree(folder))}
            
            {/* Top level folders with expansion */}
            {topLevelFolders.map((folder) => renderFolderTree(folder))}
            
            {/* Company folders */}
            {companyFolders.map((folder) => renderFolderTree(folder))}
            
            {/* Individual file entries */}
            {fileFolders.map((folder) => renderFolderTree(folder))}
            
            {/* Policy folders */}
            {policyFolders.map((folder) => renderFolderTree(folder))}
          </div>
        ) : (
          <div className="p-2 space-y-2">
            <div className="px-2 py-1 text-sm text-gray-600">Popular Tags</div>
            <div className="space-y-1">
              <div className="px-2 py-1 hover:bg-gray-100 cursor-pointer rounded">
                <Badge variant="outline" className="text-xs">Finance & Compliance</Badge>
              </div>
              <div className="px-2 py-1 hover:bg-gray-100 cursor-pointer rounded">
                <Badge variant="outline" className="text-xs">HR & Talent</Badge>
              </div>
              <div className="px-2 py-1 hover:bg-gray-100 cursor-pointer rounded">
                <Badge variant="outline" className="text-xs">Marketing & Sales</Badge>
              </div>
              <div className="px-2 py-1 hover:bg-gray-100 cursor-pointer rounded">
                <Badge variant="outline" className="text-xs">Business & Strategy</Badge>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}