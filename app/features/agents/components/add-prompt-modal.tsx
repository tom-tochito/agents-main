import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/core/components/ui/dialog/dialog'
import { Button } from '~/core/components/ui/button/button'
import { Input } from '~/core/components/ui/input/input'
import { Badge } from '~/core/components/ui/badge/badge'
import { Checkbox } from '~/core/components/ui/checkbox/checkbox'
import { X, Plus, Search, Filter } from 'lucide-react'
import { cn } from '~/core/lib/utils'

interface Prompt {
  id: string
  title: string
  prompt: string
  tags: string[]
  selected?: boolean
}

const SAMPLE_PROMPTS: Prompt[] = [
  {
    id: '1',
    title: 'Financial documents',
    prompt: 'Internal profiles, role histories, and HR notes related to current employees.',
    tags: ['Financial'],
    selected: true
  },
  {
    id: '2',
    title: 'Onboarding guides',
    prompt: 'Internal profiles, role histories, and HR notes related to current employees.',
    tags: ['HR', 'Staff'],
    selected: true
  },
  {
    id: '3',
    title: 'Staff records',
    prompt: 'Internal profiles, role histories, and HR notes related to current employees.',
    tags: ['HR']
  },
  {
    id: '4',
    title: 'Product Knowledge',
    prompt: 'Internal profiles, role histories, and HR notes related to current employees.',
    tags: ['Product']
  },
  {
    id: '5',
    title: 'Personal details',
    prompt: 'Internal profiles, role histories, and HR notes related to current employees.',
    tags: ['HR']
  },
  {
    id: '6',
    title: 'Training Materials Starter Pack',
    prompt: 'Internal profiles, role histories, and HR notes related to current employees.',
    tags: ['HR']
  },
  {
    id: '7',
    title: 'Compliance Rules',
    prompt: 'Internal profiles, role histories, and HR notes related to current employees.',
    tags: ['Risk']
  }
]

const TAG_FILTERS = [
  { label: 'Financial', active: true },
  { label: 'HR', active: true },
  { label: 'Staff', active: true },
  { label: 'Risk', active: false },
  { label: 'Product', active: false },
  { label: 'Q3', active: false },
  { label: 'Q2', active: false },
  { label: 'Q1', active: false }
]

interface AddPromptModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (prompts: Prompt[]) => void
}

export function AddPromptModal({ isOpen, onClose, onAdd }: AddPromptModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPrompts, setSelectedPrompts] = useState<Set<string>>(
    new Set(['1', '2'])
  )
  const [activeFilters, setActiveFilters] = useState<Set<string>>(
    new Set(['Financial', 'HR', 'Staff'])
  )
  const [showFilter, setShowFilter] = useState(false)

  const handleTogglePrompt = (promptId: string) => {
    setSelectedPrompts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(promptId)) {
        newSet.delete(promptId)
      } else {
        newSet.add(promptId)
      }
      return newSet
    })
  }

  const handleToggleFilter = (filter: string) => {
    setActiveFilters(prev => {
      const newSet = new Set(prev)
      if (newSet.has(filter)) {
        newSet.delete(filter)
      } else {
        newSet.add(filter)
      }
      return newSet
    })
  }

  const handleAdd = () => {
    const selected = SAMPLE_PROMPTS.filter(p => selectedPrompts.has(p.id))
    onAdd(selected)
    onClose()
  }

  const filteredPrompts = SAMPLE_PROMPTS.filter(prompt => {
    const matchesSearch = !searchTerm || 
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = activeFilters.size === 0 || 
      prompt.tags.some(tag => activeFilters.has(tag))
    
    return matchesSearch && matchesFilter
  })

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 gap-0">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-normal text-gray-600">
            Select from Existing Prompt Libraries
          </h2>
          <Button 
            variant="ghost" 
            className="text-[#fc6737] hover:bg-[#fff0eb] font-medium"
            size="sm"
          >
            <Plus className="size-4 mr-2" />
            New prompt
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-3">
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
              onClick={() => setShowFilter(!showFilter)}
            >
              <Filter className="size-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Tag Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {TAG_FILTERS.map((filter) => (
              <Badge
                key={filter.label}
                variant={activeFilters.has(filter.label) ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-colors px-3 py-1",
                  activeFilters.has(filter.label) 
                    ? "bg-teal-700 text-white hover:bg-teal-800 border-teal-700" 
                    : "bg-white text-gray-600 hover:bg-gray-50 border-gray-300"
                )}
                onClick={() => handleToggleFilter(filter.label)}
              >
                {activeFilters.has(filter.label) && (
                  <span className="mr-1">✓</span>
                )}
                {filter.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Prompt List */}
        <div className="px-6 py-4 max-h-[400px] overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-100">
                <th className="pb-2 w-8"></th>
                <th className="pb-2 text-sm font-medium text-gray-900">Title</th>
                <th className="pb-2 text-sm font-medium text-gray-900">Prompt</th>
                <th className="pb-2 text-sm font-medium text-gray-900">Tags</th>
              </tr>
            </thead>
            <tbody>
              {filteredPrompts.map((prompt) => (
                <tr 
                  key={prompt.id} 
                  className={cn(
                    "border-b border-gray-100 hover:bg-gray-50 cursor-pointer",
                    selectedPrompts.has(prompt.id) && "bg-red-50"
                  )}
                  onClick={() => handleTogglePrompt(prompt.id)}
                >
                  <td className="py-3">
                    <Checkbox
                      checked={selectedPrompts.has(prompt.id)}
                      onCheckedChange={() => handleTogglePrompt(prompt.id)}
                      className={cn(
                        "border-gray-300",
                        selectedPrompts.has(prompt.id) && "bg-[#fc6737] border-[#fc6737]"
                      )}
                    />
                  </td>
                  <td className="py-3">
                    <span className="text-sm text-gray-900">{prompt.title}</span>
                  </td>
                  <td className="py-3">
                    <span className="text-sm text-gray-600">{prompt.prompt}</span>
                  </td>
                  <td className="py-3">
                    <div className="flex gap-2">
                      {prompt.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 flex items-center gap-1"
                        >
                          <span className="text-gray-400">✓</span>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
            disabled={selectedPrompts.size === 0}
          >
            Add ({selectedPrompts.size})
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}