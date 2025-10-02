import { useState } from 'react'
import { Dialog, DialogContent } from '~/core/components/ui/dialog/dialog'
import { Button } from '~/core/components/ui/button/button'
import { Input } from '~/core/components/ui/input/input'
import { Badge } from '~/core/components/ui/badge/badge'
import { Checkbox } from '~/core/components/ui/checkbox/checkbox'
import { Search, Filter, Plus, Star, Copy } from 'lucide-react'
import { cn } from '~/core/lib/utils'
import { CreatePersonaModal } from './create-persona-modal'

interface Persona {
  id: string
  type: string
  tags: string[]
  selected?: boolean
  starred?: boolean
}

const PERSONA_DATA: Persona[] = [
  {
    id: '1',
    type: 'The Facebook Marketing Assistant',
    tags: ['Sustainability & ESG'],
    selected: true,
    starred: false
  },
  {
    id: '2',
    type: 'Legal Advisor',
    tags: ['Learning & Development'],
    selected: false,
    starred: true
  },
  {
    id: '3',
    type: 'Friendly Assistant',
    tags: ['Product & UX'],
    selected: false,
    starred: false
  },
  {
    id: '4',
    type: 'Gen Z',
    tags: ['Data & Research'],
    selected: false,
    starred: false
  },
  {
    id: '5',
    type: 'Concise summariser',
    tags: ['Finance & Risk'],
    selected: false,
    starred: false
  }
]

const TAG_FILTERS = [
  { label: 'Business intelligence & operations', active: true },
  { label: 'Finance & risk', active: true },
  { label: 'Data & research', active: true },
  { label: 'Product & UX', active: true },
  { label: 'Sustainability & ESG', active: true },
  { label: 'Learning & development', active: true }
]

interface AddPersonaModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (personas: Persona[]) => void
}

export function AddPersonaModal({ isOpen, onClose, onAdd }: AddPersonaModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPersonas, setSelectedPersonas] = useState<Set<string>>(
    new Set(['1']) // The Facebook Marketing Assistant is selected by default
  )
  const [activeFilters, setActiveFilters] = useState<Set<string>>(
    new Set(TAG_FILTERS.map(f => f.label))
  )
  const [showFilter, setShowFilter] = useState(false)
  const [personas, setPersonas] = useState(PERSONA_DATA)
  const [showCreateModal, setShowCreateModal] = useState(false)

  const handleTogglePersona = (personaId: string) => {
    setSelectedPersonas(prev => {
      const newSet = new Set(prev)
      if (newSet.has(personaId)) {
        newSet.delete(personaId)
      } else {
        newSet.add(personaId)
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

  const handleToggleStar = (personaId: string) => {
    setPersonas(prev => prev.map(p => 
      p.id === personaId ? { ...p, starred: !p.starred } : p
    ))
  }

  const handleUse = () => {
    const selected = personas.filter(p => selectedPersonas.has(p.id))
    onAdd(selected)
    onClose()
  }

  const filteredPersonas = personas.filter(persona => {
    const matchesSearch = !searchTerm || 
      persona.type.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = activeFilters.size === 0 || 
      persona.tags.some(tag => {
        return Array.from(activeFilters).some(filter => 
          filter.toLowerCase().includes(tag.toLowerCase()) || 
          tag.toLowerCase().includes(filter.toLowerCase())
        )
      })
    
    return matchesSearch && matchesFilter
  })

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 gap-0">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-normal text-gray-600">
            Select Persona
          </h2>
          <Button 
            variant="ghost" 
            className="text-[#fc6737] hover:bg-[#fff0eb] font-medium"
            size="sm"
            onClick={() => setShowCreateModal(true)}
          >
            <Plus className="size-4 mr-2" />
            New persona
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <Input
                placeholder="Search persona"
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
                  "cursor-pointer transition-colors px-3 py-1 text-xs",
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

        {/* Persona List */}
        <div className="px-6 py-4 max-h-[400px] overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-100">
                <th className="pb-2 w-8"></th>
                <th className="pb-2 text-sm font-medium text-gray-900">Persona type</th>
                <th className="pb-2 text-sm font-medium text-gray-900">Tags</th>
                <th className="pb-2 text-sm font-medium text-gray-900 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPersonas.map((persona) => (
                <tr 
                  key={persona.id} 
                  className={cn(
                    "border-b border-gray-100 hover:bg-gray-50",
                    selectedPersonas.has(persona.id) && "bg-red-50"
                  )}
                >
                  <td className="py-3">
                    <Checkbox
                      checked={selectedPersonas.has(persona.id)}
                      onCheckedChange={() => handleTogglePersona(persona.id)}
                      className={cn(
                        "border-gray-300",
                        selectedPersonas.has(persona.id) && "bg-[#fc6737] border-[#fc6737]"
                      )}
                    />
                  </td>
                  <td className="py-3">
                    <span className="text-sm text-gray-900">{persona.type}</span>
                  </td>
                  <td className="py-3">
                    <div className="flex gap-2">
                      {persona.tags.map((tag) => (
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
                  <td className="py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleToggleStar(persona.id)}
                        className={cn(
                          "p-1 rounded hover:bg-gray-100",
                          persona.starred && "text-[#fc6737]"
                        )}
                      >
                        <Star className={cn(
                          "size-4",
                          persona.starred && "fill-current"
                        )} />
                      </button>
                      <button
                        className="p-1 rounded hover:bg-gray-100 text-gray-400"
                      >
                        <Copy className="size-4" />
                      </button>
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
            onClick={handleUse}
            className="bg-[#fc6737] hover:bg-[#fc6737]/90 text-white"
            disabled={selectedPersonas.size === 0}
          >
            Use
          </Button>
        </div>
      </DialogContent>
      
      {/* Create Persona Modal */}
      <CreatePersonaModal 
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={(newPersona) => {
          // Add the new persona to the list
          const newPersonaData = {
            id: `new-${Date.now()}`,
            type: newPersona.name,
            tags: ['Custom'],
            selected: true,
            starred: false
          }
          setPersonas(prev => [...prev, newPersonaData])
          setSelectedPersonas(prev => new Set([...prev, newPersonaData.id]))
          setShowCreateModal(false)
        }}
      />
    </Dialog>
  )
}