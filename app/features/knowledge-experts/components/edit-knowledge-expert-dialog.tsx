import { useState, useEffect } from 'react'
import { X, ChevronDown, Filter, Check } from 'lucide-react'
import { Button } from '~/core/components/ui/button/button'
import { Input } from '~/core/components/ui/input/input'
import { Checkbox } from '~/core/components/ui/checkbox/checkbox'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '~/core/components/ui/dialog/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/core/components/ui/select/select'
import { cn } from '~/core/lib/utils'
import type { KnowledgeExpert } from '../models/knowledge-expert.model'
import type { KnowledgeLibrary } from '../models/knowledge-library.model'
import type { Persona } from '~/features/personas/models/persona.model'
import { Badge } from '~/core/components/ui/badge/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/core/components/ui/table/table'

interface EditKnowledgeExpertDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  expert: KnowledgeExpert | null
  personas: Persona[]
  libraries: KnowledgeLibrary[]
  onSave: (data: Partial<KnowledgeExpert>) => void
}

export function EditKnowledgeExpertDialog({
  open,
  onOpenChange,
  expert,
  personas,
  libraries,
  onSave
}: EditKnowledgeExpertDialogProps) {
  const [name, setName] = useState('')
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>('')
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filterTag, setFilterTag] = useState<string>('all')

  useEffect(() => {
    if (expert) {
      setName(expert.name)
      setSelectedPersonaId(expert.personas[0] || '')
      setSelectedLibraries([]) // We'd need to map knowledge to library IDs
    } else {
      setName('')
      setSelectedPersonaId('')
      setSelectedLibraries([])
    }
  }, [expert])

  const selectedPersona = personas.find(p => p.id === selectedPersonaId)

  const filteredLibraries = libraries.filter(library => {
    const matchesSearch = searchQuery === '' || 
      library.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      library.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesTag = filterTag === 'all' || library.tags.includes(filterTag)
    
    return matchesSearch && matchesTag
  })

  const allTags = Array.from(new Set(libraries.flatMap(l => l.tags)))

  const handleSave = () => {
    const selectedLibraryNames = libraries
      .filter(l => selectedLibraries.includes(l.id))
      .map(l => l.name)

    onSave({
      name,
      personas: selectedPersonaId ? [selectedPersonaId] : [],
      knowledge: selectedLibraryNames
    })
    onOpenChange(false)
  }

  const toggleLibrary = (libraryId: string) => {
    setSelectedLibraries(prev => 
      prev.includes(libraryId)
        ? prev.filter(id => id !== libraryId)
        : [...prev, libraryId]
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-0">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              {expert ? 'Edit Knowledge Expert' : 'Create Knowledge Expert'}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6">
          <div className="space-y-6 pb-6">
            {/* Select Persona */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Select persona
              </label>
              <Select value={selectedPersonaId} onValueChange={setSelectedPersonaId}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a persona">
                    {selectedPersona && (
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{selectedPersona.name}</span>
                        <span className="text-muted-foreground">- {selectedPersona.description}</span>
                      </div>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {personas.map(persona => (
                    <SelectItem key={persona.id} value={persona.id}>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{persona.name}</span>
                        <span className="text-muted-foreground">- {persona.description}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Select Libraries */}
            <div>
              <label className="text-sm font-medium mb-3 block">
                Select from existing knowledge libraries
              </label>
              
              {/* Search and Filter */}
              <div className="flex gap-2 mb-4">
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder="Search library or document name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-3"
                  />
                </div>
                <Select value={filterTag} onValueChange={setFilterTag}>
                  <SelectTrigger className="w-[120px]">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <SelectValue placeholder="Filter" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {allTags.map(tag => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Library Table */}
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead className="w-12"></TableHead>
                      <TableHead>Library name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Tags</TableHead>
                      <TableHead className="text-right">No. of documents</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLibraries.map((library) => (
                      <TableRow
                        key={library.id}
                        className="cursor-pointer"
                        onClick={() => toggleLibrary(library.id)}
                      >
                        <TableCell>
                          <Checkbox
                            checked={selectedLibraries.includes(library.id)}
                            onCheckedChange={() => toggleLibrary(library.id)}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{library.name}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {library.description}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {library.tags.map(tag => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs flex items-center gap-1"
                              >
                                {selectedLibraries.includes(library.id) && (
                                  <Check className="h-3 w-3" />
                                )}
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{library.documentCount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Knowledge Expert Name */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Knowledge expert
              </label>
              <Input
                type="text"
                placeholder="e.g., Legal analyst"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-2"
              />
              <div className="text-xs text-muted-foreground">
                e.g., "Performance analyst", "Financial analyst", "Market analyst", "User behavior analyst", "ESG analyst", "Learning performance analyst"
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!name || !selectedPersonaId}
          >
            {expert ? 'Update' : 'Create'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}