import { useState } from 'react'
import { Dialog, DialogContent } from '~/core/components/ui/dialog/dialog'
import { Button } from '~/core/components/ui/button/button'
import { Input } from '~/core/components/ui/input/input'
import { Checkbox } from '~/core/components/ui/checkbox/checkbox'
import { Search, Filter, Upload, Link } from 'lucide-react'
import { cn } from '~/core/lib/utils'

interface KnowledgeLibrary {
  id: string
  name: string
  description: string
  tag: string
  documentCount: number
  selected?: boolean
}

const SAMPLE_LIBRARIES: KnowledgeLibrary[] = [
  {
    id: '1',
    name: 'Financial documents',
    description: 'Reports, invoices, and statements used for budgeting, analysis, or forecasting.',
    tag: 'Financial',
    documentCount: 5
  },
  {
    id: '2',
    name: 'Onboarding guides',
    description: 'Training materials and process docs to help new hires get up to speed.',
    tag: 'HR',
    documentCount: 2,
    selected: true
  },
  {
    id: '3',
    name: 'Staff records',
    description: 'Internal profiles, role histories, and HR notes related to current employees.',
    tag: 'HR',
    documentCount: 20
  },
  {
    id: '4',
    name: 'Product Knowledge',
    description: 'Historical climate and temperature data for reference or analysis.',
    tag: 'Product',
    documentCount: 5
  },
  {
    id: '5',
    name: 'Personal details',
    description: 'User-submitted info such as names, contact info, preferences, or bios.',
    tag: 'HR',
    documentCount: 20
  },
  {
    id: '6',
    name: 'Training Materials Starter Pack',
    description: 'A pre-built set of foundational training docs for getting new agents up and running.',
    tag: 'HR',
    documentCount: 20
  },
  {
    id: '7',
    name: 'Compliance Rules',
    description: 'Regulatory policies, legal frameworks, and internal guidelines agents must follow.',
    tag: 'Risk',
    documentCount: 20
  }
]

interface AddKnowledgeModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (libraries: KnowledgeLibrary[]) => void
}

export function AddKnowledgeModal({ isOpen, onClose, onAdd }: AddKnowledgeModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLibraries, setSelectedLibraries] = useState<Set<string>>(
    new Set(['2']) // Onboarding guides is selected by default
  )
  const [activeTab, setActiveTab] = useState('existing')

  const handleToggleLibrary = (libraryId: string) => {
    setSelectedLibraries(prev => {
      const newSet = new Set(prev)
      if (newSet.has(libraryId)) {
        newSet.delete(libraryId)
      } else {
        newSet.add(libraryId)
      }
      return newSet
    })
  }

  const handleAdd = () => {
    const selected = SAMPLE_LIBRARIES.filter(lib => selectedLibraries.has(lib.id))
    onAdd(selected)
    onClose()
  }

  const filteredLibraries = SAMPLE_LIBRARIES.filter(library => {
    const matchesSearch = !searchTerm || 
      library.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      library.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesSearch
  })

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 gap-0">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-normal text-gray-600">
            Knowledge Library
          </h2>
        </div>

        {/* Tabs */}
        <div className="px-6 py-3 bg-gray-50 border-b">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('existing')}
              className={cn(
                "flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                activeTab === 'existing' 
                  ? "bg-white text-[#fc6737] shadow-sm" 
                  : "text-gray-600 hover:bg-white/50"
              )}
            >
              <div className={cn(
                "size-5 rounded-full border-2",
                activeTab === 'existing' ? "border-[#fc6737]" : "border-gray-400"
              )}>
                {activeTab === 'existing' && (
                  <div className="size-2.5 bg-[#fc6737] rounded-full m-auto" />
                )}
              </div>
              Existing knowledge libraries
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={cn(
                "flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                activeTab === 'upload' 
                  ? "bg-white text-[#fc6737] shadow-sm" 
                  : "text-gray-600 hover:bg-white/50"
              )}
            >
              <div className={cn(
                "size-5 rounded-full border-2",
                activeTab === 'upload' ? "border-[#fc6737]" : "border-gray-400"
              )}>
                {activeTab === 'upload' && (
                  <div className="size-2.5 bg-[#fc6737] rounded-full m-auto" />
                )}
              </div>
              Upload documents
            </button>
            <button
              onClick={() => setActiveTab('connect')}
              className={cn(
                "flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                activeTab === 'connect' 
                  ? "bg-white text-[#fc6737] shadow-sm" 
                  : "text-gray-600 hover:bg-white/50"
              )}
            >
              <div className={cn(
                "size-5 rounded-full border-2",
                activeTab === 'connect' ? "border-[#fc6737]" : "border-gray-400"
              )}>
                {activeTab === 'connect' && (
                  <div className="size-2.5 bg-[#fc6737] rounded-full m-auto" />
                )}
              </div>
              Connect a tool
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'existing' && (
          <>
            {/* Existing Libraries Tab Content */}
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-medium text-sm text-gray-900 mb-3">
                Select from existing knowledge libraries
              </h3>
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  <Input
                    placeholder="Search library or document name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-10 bg-gray-50 border-gray-200"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600"
                >
                  <Filter className="size-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Library List */}
            <div className="px-6 py-4 max-h-[400px] overflow-y-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-100">
                    <th className="pb-2 w-8"></th>
                    <th className="pb-2 text-sm font-medium text-gray-900">Library name</th>
                    <th className="pb-2 text-sm font-medium text-gray-900">Description</th>
                    <th className="pb-2 text-sm font-medium text-gray-900">Tag</th>
                    <th className="pb-2 text-sm font-medium text-gray-900 text-right">No. of documents</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLibraries.map((library) => (
                    <tr 
                      key={library.id} 
                      className={cn(
                        "border-b border-gray-100 hover:bg-gray-50 cursor-pointer",
                        selectedLibraries.has(library.id) && "bg-red-50"
                      )}
                      onClick={() => handleToggleLibrary(library.id)}
                    >
                      <td className="py-3">
                        <Checkbox
                          checked={selectedLibraries.has(library.id)}
                          onCheckedChange={() => handleToggleLibrary(library.id)}
                          className={cn(
                            "border-gray-300",
                            selectedLibraries.has(library.id) && "bg-[#fc6737] border-[#fc6737]"
                          )}
                        />
                      </td>
                      <td className="py-3">
                        <span className="text-sm text-gray-900">{library.name}</span>
                      </td>
                      <td className="py-3">
                        <span className="text-sm text-gray-600">{library.description}</span>
                      </td>
                      <td className="py-3">
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <span className="text-gray-400">✓</span>
                          {library.tag}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <span className="text-sm text-gray-900">{library.documentCount}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'upload' && (
          <div className="px-6 py-8">
            <div className="flex flex-col items-center justify-center min-h-[300px]">
              <Upload className="size-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Upload documents</h3>
              <p className="text-sm text-gray-500 text-center max-w-md mb-6">
                Upload your own documents to create a custom knowledge base for your agent.
              </p>
              <Button className="bg-[#fc6737] hover:bg-[#fc6737]/90 text-white">
                Choose files to upload
              </Button>
            </div>
          </div>
        )}

        {activeTab === 'connect' && (
          <div className="px-6 py-8">
            <div className="flex flex-col items-center justify-center min-h-[300px]">
              <Link className="size-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Connect a tool</h3>
              <p className="text-sm text-gray-500 text-center max-w-md mb-6">
                Connect external tools and data sources to expand your agent's knowledge.
              </p>
              <Button className="bg-[#fc6737] hover:bg-[#fc6737]/90 text-white">
                Browse available tools
              </Button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-gray-300"
          >
            Cancel
          </Button>
          <Button
            onClick={handleAdd}
            className="bg-[#fc6737] hover:bg-[#fc6737]/90 text-white"
            disabled={activeTab !== 'existing' || selectedLibraries.size === 0}
          >
            Add
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}