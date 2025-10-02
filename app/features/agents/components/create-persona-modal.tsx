import { useState } from 'react'
import { Dialog, DialogContent } from '~/core/components/ui/dialog/dialog'
import { Button } from '~/core/components/ui/button/button'
import { Input } from '~/core/components/ui/input/input'
import { Textarea } from '~/core/components/ui/textarea/textarea'
import { 
  Briefcase, 
  Shield, 
  Edit, 
  Heart, 
  Users, 
  FileText, 
  MessageSquare, 
  Mountain,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  Heading1,
  Heading2,
  Heading3,
  Type,
  Sparkles
} from 'lucide-react'
import { cn } from '~/core/lib/utils'

interface PersonaTone {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const PERSONA_TONES: PersonaTone[] = [
  {
    id: 'analyst',
    title: 'The Analyst',
    description: 'Formal, detail-oriented, data-driven',
    icon: <Briefcase className="size-5 text-gray-600" />
  },
  {
    id: 'advisor',
    title: 'The Advisor',
    description: 'Warm, knowledgeable, persuasive',
    icon: <Shield className="size-5 text-gray-600" />
  },
  {
    id: 'assistant',
    title: 'The Assistant',
    description: 'Friendly, concise, helpful',
    icon: <Edit className="size-5 text-gray-600" />
  },
  {
    id: 'specialist',
    title: 'The Specialist',
    description: 'Technical, methodical, thorough',
    icon: <FileText className="size-5 text-gray-600" />
  },
  {
    id: 'diplomat',
    title: 'The Diplomat',
    description: 'Polished, empathetic, professional',
    icon: <Briefcase className="size-5 text-gray-600" />
  },
  {
    id: 'teammate',
    title: 'The Teammate',
    description: 'Casual, enthusiastic, action-oriented',
    icon: <Heart className="size-5 text-gray-600" />
  },
  {
    id: 'summariser',
    title: 'The Summariser',
    description: 'Neutral, concise, fact-focused',
    icon: <FileText className="size-5 text-gray-600" />
  },
  {
    id: 'concierge',
    title: 'The Concierge',
    description: 'Polished, courteous, client-facing',
    icon: <Mountain className="size-5 text-gray-600" />
  }
]

interface CreatePersonaModalProps {
  isOpen: boolean
  onClose: () => void
  onCreate: (persona: { name: string; tone: string; prompt: string }) => void
}

export function CreatePersonaModal({ isOpen, onClose, onCreate }: CreatePersonaModalProps) {
  const [selectedTone, setSelectedTone] = useState<string | null>(null)
  const [personaName, setPersonaName] = useState('')
  const [personaPrompt, setPersonaPrompt] = useState('')
  const [suggestions, setSuggestions] = useState<string>('')

  const handleToneSelect = (toneId: string) => {
    setSelectedTone(toneId)
    const tone = PERSONA_TONES.find(t => t.id === toneId)
    if (tone) {
      // Auto-populate the persona name based on selection
      setPersonaName(tone.title.replace('The ', '') + ' analyst')
      
      // Generate prompt based on tone
      if (toneId === 'analyst') {
        setPersonaPrompt(`You are an analytical, detail-oriented AI assistant with expertise in processing complex information, identifying trends, and delivering data-backed insights. Your responses are clear, factual, and structured, helping users make informed decisions with confidence.

When responding:
• Use precise, formal language.
• Prioritize clarity, logic, and evidence over emotion or opinion.
• Present findings using bullet points, numbered lists, or short paragraphs.
• Avoid fluff; only include information relevant to the question or task.

Your primary objectives are to:
• Analyze and interpret structured and unstructured data.
• Surface key metrics, patterns, or risks.

Response format guideline:
1. Brief summary of the question or issue.
2. Key data points or findings.
3. 1-2 data-driven recommendations.

Example opening sentence styles:
• "Based on the available data, here's what I found:"
• "A review of the trends suggests the following:"`)
      }
    }
  }

  const handleCreate = () => {
    if (selectedTone && personaName && personaPrompt) {
      onCreate({
        name: personaName,
        tone: selectedTone,
        prompt: personaPrompt
      })
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 gap-0 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-normal text-gray-600">
            Create Persona
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 py-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {!selectedTone ? (
            <>
              {/* Tone Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Select a base tone</h3>
                <p className="text-sm text-gray-600 mb-4">Sets the tone, voice, and communication style</p>
                
                <div className="grid grid-cols-4 gap-3">
                  {PERSONA_TONES.map((tone) => (
                    <button
                      key={tone.id}
                      onClick={() => handleToneSelect(tone.id)}
                      className="p-4 border border-gray-200 rounded-lg hover:border-[#fc6737] hover:bg-orange-50 transition-all text-left group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {tone.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            {tone.title}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {tone.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Persona Name Input */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Persona type name
                </label>
                <Input
                  placeholder="Enter persona name"
                  value={personaName}
                  onChange={(e) => setPersonaName(e.target.value)}
                  className="h-10"
                />
                <div className="mt-2">
                  <p className="text-xs text-gray-500">
                    e.g., "Performance analyst", "Financial analyst", "Market analyst", "User behavior analyst", "ESG analyst", "Learning performance analyst"
                  </p>
                </div>
              </div>

              {/* Text Editor Toolbar */}
              <div className="mb-2 flex items-center gap-1 p-2 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-1 pr-2 border-r border-gray-300">
                  <button className="p-1.5 hover:bg-white rounded">
                    <div className="size-4 bg-black rounded-full" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <Type className="size-4" />
                  </button>
                </div>
                <div className="flex items-center gap-1 px-2">
                  <button className="p-1.5 hover:bg-white rounded">
                    <Bold className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <Italic className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <Underline className="size-4" />
                  </button>
                </div>
                <div className="flex items-center gap-1 px-2 border-l border-gray-300">
                  <button className="p-1.5 hover:bg-white rounded">
                    <List className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <ListOrdered className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <AlignLeft className="size-4" />
                  </button>
                </div>
                <div className="flex items-center gap-1 px-2 border-l border-gray-300">
                  <button className="p-1.5 hover:bg-white rounded">
                    <Heading1 className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <Heading2 className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <Heading3 className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <Type className="size-4" />
                  </button>
                </div>
                <div className="ml-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#fc6737] hover:bg-[#fff0eb]"
                  >
                    <Sparkles className="size-4 mr-2" />
                    Style & enhance
                  </Button>
                </div>
              </div>

              {/* Prompt Text Area */}
              <Textarea
                placeholder="Write persona prompt"
                value={personaPrompt}
                onChange={(e) => setPersonaPrompt(e.target.value)}
                className="min-h-[150px] resize-none"
              />
            </>
          ) : (
            <>
              {/* Selected Tone View */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Select a base tone</h3>
                <p className="text-sm text-gray-600 mb-4">Sets the tone, voice, and communication style</p>
                
                <div className="grid grid-cols-4 gap-3">
                  {PERSONA_TONES.map((tone) => (
                    <button
                      key={tone.id}
                      onClick={() => handleToneSelect(tone.id)}
                      className={cn(
                        "p-4 border rounded-lg transition-all text-left",
                        selectedTone === tone.id 
                          ? "border-[#fc6737] bg-orange-50" 
                          : "border-gray-200 hover:border-gray-300"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {tone.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            {tone.title}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {tone.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Persona Name Input */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Persona type name
                </label>
                <div className="relative">
                  <Input
                    value={personaName}
                    onChange={(e) => setPersonaName(e.target.value)}
                    className="h-10 pr-10"
                  />
                  <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#fc6737]" />
                </div>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">
                    e.g., "Performance analyst", "Financial analyst", "Market analyst", "User behavior analyst", "ESG analyst", "Learning performance analyst"
                  </p>
                </div>
              </div>

              {/* Text Editor Toolbar */}
              <div className="mb-2 flex items-center gap-1 p-2 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-1 pr-2 border-r border-gray-300">
                  <button className="p-1.5 hover:bg-white rounded">
                    <div className="size-4 bg-black rounded-full" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <Type className="size-4" />
                  </button>
                </div>
                <div className="flex items-center gap-1 px-2">
                  <button className="p-1.5 hover:bg-white rounded">
                    <Bold className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <Italic className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <Underline className="size-4" />
                  </button>
                </div>
                <div className="flex items-center gap-1 px-2 border-l border-gray-300">
                  <button className="p-1.5 hover:bg-white rounded">
                    <List className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <ListOrdered className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <AlignLeft className="size-4" />
                  </button>
                </div>
                <div className="flex items-center gap-1 px-2 border-l border-gray-300">
                  <button className="p-1.5 hover:bg-white rounded">
                    <Heading1 className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <Heading2 className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <Heading3 className="size-4" />
                  </button>
                  <button className="p-1.5 hover:bg-white rounded">
                    <Type className="size-4" />
                  </button>
                </div>
                <div className="ml-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#fc6737] hover:bg-[#fff0eb]"
                  >
                    <Sparkles className="size-4 mr-2" />
                    Style & enhance
                  </Button>
                </div>
              </div>

              {/* Generated Prompt Content */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap">
                  {personaPrompt}
                </div>
              </div>
            </>
          )}
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
            onClick={handleCreate}
            className="bg-[#fc6737] hover:bg-[#fc6737]/90 text-white"
            disabled={!personaName || !personaPrompt}
          >
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}