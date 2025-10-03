import { useState, lazy, Suspense } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '~/core/components/ui/button/button'
import { Input } from '~/core/components/ui/input/input'
import { Badge } from '~/core/components/ui/badge/badge'
import { Avatar, AvatarFallback } from '~/core/components/ui/avatar/avatar'
import { Switch } from '~/core/components/ui/switch/switch'
import { Textarea } from '~/core/components/ui/textarea/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/core/components/ui/tooltip/tooltip'
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Info, 
  SquareUserRound,
  Network,
  Bell,
  MessageCircleQuestion,
  Check,
  FileText,
  Brain,
  ChevronUp,
  ChevronDown,
  Plus,
  Trash2,
  Play
} from 'lucide-react'
import { cn } from '~/core/lib/utils'
import { getAgentService } from '~/features/agents/services/agent.service'
import { AgentAvatar } from '~/features/agents/components/agent-avatar'
import { AddPromptModal } from '~/features/agents/components/add-prompt-modal'
import { AddKnowledgeModal } from '~/features/agents/components/add-knowledge-modal'
import { AddToolModal } from '~/features/agents/components/add-tool-modal'
import { AddPersonaModal } from '~/features/agents/components/add-persona-modal'

// Lazy load the workflow editor to optimize bundle size
const WorkflowEditor = lazy(() => 
  import('~/features/agents/components/workflow-editor').then(module => ({ 
    default: module.WorkflowEditor 
  }))
)

interface AgentFormData {
  name: string
  jobTitle: string
  avatar?: string
  color: string
  model: 'public' | 'private'
  selectedModel: string
  teamUse: boolean
  description?: string
}

const AGENT_COLORS = [
  { name: 'Orange', value: '#fc6737', bg: '#fff0eb' },
  { name: 'Forest', value: '#04674d', bg: '#e6f0ed' },
  { name: 'Blue', value: '#0ea5e9', bg: '#e0f2fe' },
  { name: 'Purple', value: '#8b5cf6', bg: '#ede9fe' },
  { name: 'Pink', value: '#ec4899', bg: '#fce7f3' },
  { name: 'Yellow', value: '#eab308', bg: '#fef3c7' }
]

const PUBLIC_MODELS = [
  {
    id: 'mistral-7b',
    name: 'Mistral-7B',
    description: 'A fast, lightweight open-source model — great for simple tasks and cost-efficient workflows.',
    type: 'public'
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    description: 'Multimodal and highly capable — handles text, code, and reasoning with high accuracy and speed.',
    type: 'public'
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o Mini',
    description: 'A smaller, faster version of GPT-4o — ideal for fast responses with lower cost.',
    type: 'public'
  }
]

const PRIVATE_MODELS = [
  {
    id: 'llama-3',
    name: 'Llama 3',
    description: 'Meta\'s advanced model for on-premise deployment with strong reasoning capabilities.',
    type: 'private'
  },
  {
    id: 'claude-opus',
    name: 'Claude Opus',
    description: 'Anthropic\'s most capable model for complex tasks, available for private deployment.',
    type: 'private'
  }
]

export default function NewAgentPage() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState<'profile' | 'workflow' | 'workflow-builder'>('profile')
  const [selectedWorkflowType, setSelectedWorkflowType] = useState<'generator' | 'knowledge' | null>(null)
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [userMessage, setUserMessage] = useState('')
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([
    { role: 'assistant', content: "Let's start by explaining to me what kind of agent would you like to create?" }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showModelRecommendation, setShowModelRecommendation] = useState(false)
  const [showNodeLibrary, setShowNodeLibrary] = useState(false)
  const [showAddPromptModal, setShowAddPromptModal] = useState(false)
  const [showAddKnowledgeModal, setShowAddKnowledgeModal] = useState(false)
  const [showAddToolModal, setShowAddToolModal] = useState(false)
  const [showAddPersonaModal, setShowAddPersonaModal] = useState(false)
  const [selectedPrompts, setSelectedPrompts] = useState<Array<{ id: string; title: string; prompt: string; tags: string[] }>>([])
  const [selectedKnowledge, setSelectedKnowledge] = useState<Array<{ id: string; name: string; description: string; tag: string; documentCount: number }>>([])
  const [selectedTools, setSelectedTools] = useState<Array<{ id: string; name: string; description: string; category: string }>>([])
  const [selectedPersonas, setSelectedPersonas] = useState<Array<{ id: string; type: string; tags: string[] }>>([])
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    sectionTitle: true,
    persona: true,
    prompts: true,
    knowledgeExpert: false,
    tools: false
  })  
  const [formData, setFormData] = useState<AgentFormData>({
    name: '',
    jobTitle: '',
    color: AGENT_COLORS[0].value,
    model: 'public',
    selectedModel: '',
    teamUse: false
  })

  const handleColorSelect = (color: string) => {
    setFormData(prev => ({ ...prev, color }))
    setShowColorPicker(false)
  }

  const handleModelSelect = (modelId: string) => {
    setFormData(prev => ({ ...prev, selectedModel: modelId }))
  }

  const handleSave = async () => {
    try {
      console.log('Creating agent with data:', formData)
      
      const agentService = getAgentService()
      const newAgent = await agentService.createAgent({
        name: formData.name || 'New Agent',
        jobTitle: formData.jobTitle || 'Agent Assistant',
        avatar: formData.avatar,
        color: formData.color,
        model: formData.selectedModel || 'gpt-4o',
        teamUse: formData.teamUse,
        description: formData.description || `${formData.name || 'This agent'} helps with various tasks.`
      })
      
      console.log('Created agent:', newAgent)
      // Navigate to the agent detail page
      navigate(`/agents/${newAgent.id}`)
    } catch (error) {
      console.error('Error creating agent:', error)
      alert('Failed to create agent. Please try again.')
    }
  }

  const handleNext = () => {
    if (currentStep === 'profile') {
      setCurrentStep('workflow')
    } else if (currentStep === 'workflow' && selectedWorkflowType) {
      setCurrentStep('workflow-builder')
    }
  }
  
  const handleBack = () => {
    if (currentStep === 'workflow') {
      setCurrentStep('profile')
    } else if (currentStep === 'workflow-builder') {
      setCurrentStep('workflow')
      setSelectedWorkflowType(null)
    }
  }
  
  const handleWorkflowSelect = (type: 'generator' | 'knowledge') => {
    setSelectedWorkflowType(type)
    setCurrentStep('workflow-builder')
  }

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message
      setChatMessages(prev => [...prev, { role: 'user', content: inputValue }])
      setUserMessage(inputValue)
      setInputValue('')
      
      // Simulate typing indicator
      setIsTyping(true)
      
      // Simulate AI response after delay
      setTimeout(() => {
        setIsTyping(false)
        
        // Add name suggestions
        setChatMessages(prev => [...prev, {
          role: 'assistant',
          content: `For a Facebook post writer agent, you'll want a name that feels creative, social, and brand-savvy. I suggest the name:`
        }])
        
        // Add job title suggestions after a short delay
        setTimeout(() => {
          setChatMessages(prev => [...prev, {
            role: 'assistant',
            content: `The agent's title should reflect both its function (writing Facebook posts) and its style`
          }])
          
          // Show model recommendation after job title
          setTimeout(() => {
            setShowModelRecommendation(true)
            setChatMessages(prev => [...prev, {
              role: 'assistant',
              content: `Based on your requirements for a Facebook post writer, I recommend using GPT-4o as it excels at creative content generation and understands social media context well.`
            }])
          }, 1500)
        }, 2000)
      }, 1500)
    }
  }

  const handleNameSuggestion = (suggestion: string) => {
    setFormData(prev => ({ ...prev, name: suggestion }))
    setChatMessages(prev => [...prev, {
      role: 'assistant',
      content: `Great choice! "${suggestion}" has been set as your agent's name.`
    }])
  }

  const handleJobSuggestion = (suggestion: string) => {
    setFormData(prev => ({ ...prev, jobTitle: suggestion }))
    setChatMessages(prev => [...prev, {
      role: 'assistant',
      content: `Perfect! "${suggestion}" has been set as the job title.`
    }])
  }
  
  const handleModelRecommendation = (modelId: string) => {
    setFormData(prev => ({ ...prev, selectedModel: modelId, model: 'public' }))
    setShowModelRecommendation(false)
    setChatMessages(prev => [...prev, {
      role: 'assistant',
      content: `Excellent! GPT-4o has been selected as your agent's model. This will give your agent strong creative writing capabilities.`
    }])
  }

  const isNextDisabled = !formData.name || !formData.jobTitle || !formData.selectedModel

  const selectedColor = AGENT_COLORS.find(c => c.value === formData.color) || AGENT_COLORS[0]

  return (
    <div className="bg-[#fcfbfa] min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#f7f4f0] h-12 flex-shrink-0">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate('/agents')}
              className="size-9 border-[#ede7e0] shadow-sm"
            >
              <ArrowLeft className="size-4 text-[#fc6737]" />
            </Button>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-slate-900">New Agent</span>
              <Badge className="bg-[rgba(148,163,184,0.2)] border-0 h-4 px-2 py-0.5 gap-1">
                <div className="size-3 rounded-full bg-white flex items-center justify-center">
                  <div className="size-1.5 bg-[#94a3b8] rounded-full" />
                </div>
                <span className="text-[10px] text-slate-400 font-normal">Unpublished</span>
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pr-4">
            <MessageCircleQuestion className="size-5 text-[#fc6737] cursor-pointer" />
            <Bell className="size-5 text-[#fc6737] cursor-pointer" />
            <Avatar className="size-8">
              <AvatarFallback className="bg-[#f7f4f0] text-xs text-[#a29b94] font-bold">CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Breadcrumb and Actions */}
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 px-[213px]">
            <h1 className="text-2xl font-normal text-slate-900">
              {currentStep === 'profile' ? 'Agent Profile' : 'Workflow Builder'}
            </h1>
            <Badge className="bg-[rgba(148,163,184,0.2)] border-0 h-5 px-2 py-0 gap-1 flex items-center">
              <div className="size-3 rounded-full bg-white flex items-center justify-center">
                <div className="size-1.5 bg-[#94a3b8] rounded-full" />
              </div>
              <span className="text-[10px] text-slate-400 font-normal">Unpublished</span>
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            {currentStep === 'workflow-builder' && (
              <>
                <Button 
                  variant="outline" 
                  className="text-[#fc6737] font-bold border-[#ede7e0] h-9 px-4 shadow-sm"
                  onClick={handleSave}
                >
                  Save as draft
                </Button>
                <Button 
                  variant="secondary"
                  className="bg-[#f7f4f0] text-[#fc6737] font-bold h-9 px-4 shadow-sm flex items-center"
                  onClick={() => {}}
                >
                  <svg className="size-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Run
                </Button>
                <Button 
                  className="bg-[#fc6737] hover:bg-[#fc6737]/90 text-white font-bold h-9 px-4 shadow-sm"
                  onClick={async () => {
                    await handleSave()
                  }}
                >
                  Publish
                </Button>
              </>
            )}
            {currentStep === 'workflow' && (
              <>
                <Button 
                  variant="outline" 
                  className="text-[#fc6737] font-bold border-[#ede7e0] h-9 px-4 shadow-sm"
                  onClick={handleSave}
                >
                  Save as draft
                </Button>
                <Button 
                  variant="outline"
                  className="text-[#fc6737] font-bold border-[#ede7e0] h-9 px-4 shadow-sm"
                  onClick={handleBack}
                >
                  <ArrowLeft className="mr-2 size-4" />
                  Back
                </Button>
                <Button 
                  className="bg-[#fc6737] hover:bg-[#fc6737]/90 text-white font-bold h-9 px-4 shadow-sm"
                  onClick={async () => {
                    await handleSave()
                  }}
                >
                  Publish Agent
                </Button>
              </>
            )}
            {currentStep === 'profile' && (
              <>
                <Button 
                  variant="outline" 
                  className="text-[#fc6737] font-bold border-[#ede7e0] h-9 px-4 shadow-sm"
                  onClick={handleSave}
                >
                  Save as draft
                </Button>
                <Button 
                  className={cn(
                    "bg-[#fc6737] hover:bg-[#fc6737]/90 text-white font-bold h-9 px-4 shadow-sm",
                    isNextDisabled && "opacity-50 cursor-not-allowed"
                  )}
                  onClick={handleNext}
                  disabled={isNextDisabled}
                >
                  Next
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 px-6 pb-6">
          <div className="flex gap-6 h-full">
            {/* Sidebar */}
            <div className="w-[189px] bg-white rounded-lg border border-[#f7f4f0] h-fit">
              <div className="p-4">
                <p className="text-xs text-slate-500/70 mb-3">Agent builder</p>
                <div className="space-y-1">
                  <button 
                    className={cn(
                      "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors",
                      currentStep === 'profile' ? "bg-[#fff0eb]" : "hover:bg-gray-50"
                    )}
                    onClick={() => setCurrentStep('profile')}
                  >
                    <SquareUserRound className="size-4 text-[#fc6737]" />
                    <span className={cn(
                      "text-slate-900",
                      currentStep === 'profile' && "font-medium"
                    )}>Agent profile</span>
                  </button>
                  <button 
                    className={cn(
                      "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors",
                      (currentStep === 'workflow' || currentStep === 'workflow-builder') ? "bg-[#fff0eb]" : "hover:bg-gray-50"
                    )}
                    onClick={() => setCurrentStep('workflow')}
                  >
                    <Network className="size-4 text-[#fc6737]" />
                    <span className={cn(
                      "text-slate-900",
                      (currentStep === 'workflow' || currentStep === 'workflow-builder') && "font-medium"
                    )}>Workflow</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex gap-6">
              <div className="w-[816px] bg-white rounded-lg border border-[#f7f4f0] p-4">
                {currentStep === 'profile' ? (
                  <div className="space-y-6">
                    {/* Agent Profile Section */}
                    <div>
                    <h2 className="text-base font-bold text-slate-900 mb-2">
                      Start by creating your agent's profile
                    </h2>
                    <p className="text-sm text-slate-900 mb-2">
                      Give your agent a name, role, and avatar to match their purpose.
                    </p>
                    
                    <div className="bg-[#fcfbfa] border border-[#f7f4f0] rounded-lg p-3">
                      {/* Avatar and Color - Grid Layout */}
                      <div className="flex gap-6 mb-4">
                        <div>
                          <p className="text-xs text-slate-900 mb-1">Agent icon & colour</p>
                          <div className="flex items-end gap-0 mt-5">
                            <AgentAvatar 
                              color={selectedColor.value}
                              bgColor="#f7f4f0"
                              size="lg"
                            />
                            <div className="relative -ml-4 -mb-1">
                              <button
                                onClick={() => setShowColorPicker(!showColorPicker)}
                                className="size-6 rounded border-2 border-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                                style={{ backgroundColor: selectedColor.value }}
                              />
                              {showColorPicker && (
                                <div className="absolute left-0 top-full mt-2 flex gap-1 p-2 bg-white rounded-lg shadow-lg border border-[#f7f4f0] z-10">
                                  {AGENT_COLORS.map((color) => (
                                    <button
                                      key={color.value}
                                      onClick={() => handleColorSelect(color.value)}
                                      className={cn(
                                        "size-6 rounded border-2 border-white shadow-md hover:scale-110 transition-transform",
                                        formData.color === color.value && "ring-2 ring-offset-1 ring-[#fc6737]"
                                      )}
                                      style={{ backgroundColor: color.value }}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Form Fields */}
                      <div className="space-y-4">
                        {/* Agent Name */}
                        <div>
                          <label className="text-xs text-slate-900 block mb-1">Agent name</label>
                          <div className="relative">
                            <Input
                              placeholder="Give your agent a name"
                              value={formData.name}
                              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                              className="h-9 pr-10 bg-white border-slate-300 placeholder:text-slate-400"
                            />
                            <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#fc6737]" />
                          </div>
                        </div>

                        {/* Job Title */}
                        <div>
                          <label className="text-xs text-slate-900 block mb-1">Job title</label>
                          <div className="relative">
                            <Input
                              placeholder="What does your agent do?"
                              value={formData.jobTitle}
                              onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                              className="h-9 pr-10 bg-white border-slate-300 placeholder:text-slate-400"
                            />
                            <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#fc6737]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Model Selection Section */}
                  <div>
                    <h2 className="text-base font-bold text-slate-900 mb-2">Select a model</h2>
                    <p className="text-sm text-slate-900 mb-2">
                      Choose the AI model your agent will use to understand, respond, and complete tasks.
                      Different models offer different strengths — from lightweight performance to advanced reasoning and creativity.
                    </p>

                    <div className="bg-[#fcfbfa] border border-[#f7f4f0] rounded-lg px-3 py-6">
                      <div className="space-y-4">
                        {/* Tabs and Help Button */}
                        <div className="flex items-center justify-between">
                          <div className="bg-[#fff0eb] p-0.5 rounded-lg w-[600px]">
                            <div className="grid grid-cols-2 gap-0">
                              <button
                                onClick={() => setFormData(prev => ({ ...prev, model: 'public' }))}
                                className={cn(
                                  "px-4 py-2 rounded-md transition-all",
                                  formData.model === 'public' 
                                    ? "bg-white border border-[#fc6737] shadow-sm" 
                                    : ""
                                )}
                              >
                                <p className={cn(
                                  "font-bold text-sm mb-0.5",
                                  formData.model === 'public' ? "text-[#fc6737]" : "text-slate-900"
                                )}>
                                  Public model
                                </p>
                                <p className="text-[10px] text-slate-500 leading-3">
                                  Access powerful general AI models that run via external<br />
                                  APIs like OpenAI or Anthropic.
                                </p>
                              </button>
                              <button
                                onClick={() => setFormData(prev => ({ ...prev, model: 'private' }))}
                                className={cn(
                                  "px-4 py-2 rounded-md transition-all",
                                  formData.model === 'private' 
                                    ? "bg-white border border-[#fc6737] shadow-sm" 
                                    : ""
                                )}
                              >
                                <p className={cn(
                                  "font-bold text-sm mb-0.5",
                                  formData.model === 'private' ? "text-[#fc6737]" : "text-slate-900"
                                )}>
                                  Private model
                                </p>
                                <p className="text-[10px] text-slate-500 leading-3">
                                  Keep all your data within your own environment<br />
                                  — ideal for sensitive workflows.
                                </p>
                              </button>
                            </div>
                          </div>
                          
                          <Button 
                            variant="secondary" 
                            className="bg-[#f7f4f0] text-[#fc6737] h-8 px-3 shadow-sm"
                          >
                            <Sparkles className="size-4 mr-2" />
                            <span className="text-xs font-bold">Help me choose</span>
                          </Button>
                        </div>

                        {/* Model Cards */}
                        <div className="grid grid-cols-3 gap-2">
                          {(formData.model === 'public' ? PUBLIC_MODELS : PRIVATE_MODELS).map((model) => (
                            <TooltipProvider key={model.id}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button
                                    onClick={() => handleModelSelect(model.id)}
                                    className={cn(
                                      "bg-white p-4 rounded-lg border text-left transition-colors",
                                      formData.selectedModel === model.id 
                                        ? "border-[#fc6737]" 
                                        : "border-[#ede7e0]"
                                    )}
                                  >
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="font-bold text-sm text-slate-900">{model.name}</span>
                                      <Info className="size-4 text-[#a29b94]" />
                                    </div>
                                    <p className="text-xs text-slate-500 leading-[14px]">
                                      {model.description}
                                    </p>
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent 
                                  className="bg-[#04674d] text-white text-xs max-w-[200px] p-3 rounded-lg border-0"
                                  sideOffset={5}
                                >
                                  {model.name === 'Mistral-7B' && (
                                    <>
                                      Best for:<br />
                                      • Snappy assistants<br />
                                      • Simple chat agents<br />
                                      • Realtime UI agents<br />
                                      • Lightweight decision support
                                    </>
                                  )}
                                  {model.name === 'GPT-4o' && (
                                    <>
                                      Best for:<br />
                                      • Complex reasoning tasks<br />
                                      • Code generation and analysis<br />
                                      • Multi-modal applications<br />
                                      • High-accuracy requirements
                                    </>
                                  )}
                                  {model.name === 'GPT-4o Mini' && (
                                    <>
                                      Best for:<br />
                                      • Quick responses<br />
                                      • Cost-sensitive applications<br />
                                      • Medium complexity tasks<br />
                                      • High-volume processing
                                    </>
                                  )}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Access Section */}
                  <div>
                    <h2 className="text-base font-bold text-slate-900 mb-4">Access</h2>
                    
                    <div className="bg-[#fcfbfa] border border-[#f7f4f0] rounded-lg px-3 py-6">
                      <p className="font-bold text-sm text-slate-900 mb-4">Team use</p>
                      
                      <div className="flex gap-3">
                        <div className="relative">
                          <Switch
                            checked={formData.teamUse}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, teamUse: checked }))}
                            className={cn(
                              "w-9 h-5",
                              formData.teamUse 
                                ? "bg-[#fc6737]" 
                                : "bg-[rgba(254,185,163,0.5)]"
                            )}
                          />
                        </div>
                        <div>
                          <p className="text-sm text-slate-900">
                            {formData.teamUse ? 'Enabled' : 'Disabled'}
                          </p>
                          <p className="text-xs text-slate-500">
                            Allow anyone to run this AI Agent without making their own copy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                ) : currentStep === 'workflow' ? (
                  /* Workflow Selection Content */
                  <div className="p-4">
                    <div className="flex flex-col items-center justify-center min-h-[500px]">
                      <div className="text-center max-w-lg">
                        <h2 className="text-4xl font-light text-slate-400 mb-2">Let's build</h2>
                        <p className="text-base text-slate-900 mb-8">What do you need your agent to do?</p>
                        
                        {/* Workflow Templates */}
                        <div className="grid grid-cols-2 gap-4">
                          {/* Generator Documents Card */}
                          <div 
                            onClick={() => handleWorkflowSelect('generator')}
                            className="p-4 border border-[#ede7e0] rounded-lg hover:shadow-md transition-all cursor-pointer hover:border-[#fc6737]">
                            <div className="flex flex-col items-start text-left">
                              <div className="size-10 rounded-lg bg-[#f7f4f0] flex items-center justify-center mb-3">
                                <FileText className="size-5 text-slate-700" />
                              </div>
                              <h3 className="font-bold text-sm text-slate-900 mb-2">
                                Generator Documents
                              </h3>
                              <p className="text-xs text-slate-500 leading-relaxed">
                                Automatically creates structured documents like reports, summaries, or proposals.
                              </p>
                            </div>
                          </div>
                          
                          {/* Prompt from Knowledge Card */}
                          <div 
                            onClick={() => handleWorkflowSelect('knowledge')}
                            className="p-4 border border-[#ede7e0] rounded-lg hover:shadow-md transition-all cursor-pointer hover:border-[#fc6737]">
                            <div className="flex flex-col items-start text-left">
                              <div className="size-10 rounded-lg bg-[#f7f4f0] flex items-center justify-center mb-3">
                                <Brain className="size-5 text-slate-700" />
                              </div>
                              <h3 className="font-bold text-sm text-slate-900 mb-2">
                                Prompt from specific knowledge
                              </h3>
                              <p className="text-xs text-slate-500 leading-relaxed">
                                Answers natural language questions by drawing from your knowledge sources.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Workflow Builder with React Flow */
                  <div className="flex-1 flex flex-col p-4">
                    {/* Generate document section */}
                    <div className="bg-white rounded-lg border border-[#f7f4f0] p-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-[#fff0eb] flex items-center justify-center">
                          <FileText className="size-5 text-[#fc6737]" />
                        </div>
                        <span className="text-base font-semibold text-slate-900">Generate document</span>
                      </div>
                    </div>
                    
                    {/* Workflow Editor */}
                    <div className="flex-1">
                      <Suspense fallback={
                        <div className="flex justify-center items-center min-h-[400px]">
                          <div className="text-gray-500">Loading workflow editor...</div>
                        </div>
                      }>
                        <WorkflowEditor />
                      </Suspense>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sidebar - Agent Preview */}
              <div className="w-[347px]">
                {currentStep === 'profile' ? (
                  <div className="bg-white rounded-lg border border-[#f7f4f0] overflow-hidden h-full flex flex-col">
                  {/* Agent Preview Header */}
                  <div 
                    className="px-3 pt-6 pb-4"
                    style={{ backgroundColor: 'rgba(230, 240, 237, 0.5)' }}
                  >
                    <div className="flex flex-col items-center">
                      <div 
                        className="size-12 rounded-full overflow-hidden border"
                        style={{ borderColor: selectedColor.value }}
                      >
                        <AgentAvatar 
                          color={selectedColor.value}
                          bgColor="#f7f4f0"
                          size="md"
                          className="rounded-full"
                        />
                      </div>
                      
                      <div className="flex items-center gap-1 mt-2">
                        <div className="size-4 rounded-full bg-white flex items-center justify-center">
                          <Check className="size-2.5 text-[#04674d]" />
                        </div>
                        <span className="text-xs text-slate-500">
                          {formData.name || 'Archie'}
                        </span>
                      </div>
                      
                      <p className="font-bold text-sm text-slate-900 mt-1">
                        {formData.jobTitle || 'System Agent'}
                      </p>
                      
                      <p className="text-xs text-[#04674d] mt-0.5">
                        The Teammate
                      </p>
                    </div>
                  </div>
                  
                  {/* Chat Area */}
                  <div className="flex-1 p-3 flex flex-col overflow-y-auto">
                    <div className="space-y-3">
                      {chatMessages.map((message, index) => (
                        <div key={index}>
                          {message.role === 'user' ? (
                            <div className="flex justify-end">
                              <div className="bg-[#f7f4f0] rounded-lg p-2 max-w-[80%]">
                                <p className="text-sm text-slate-900">{message.content}</p>
                              </div>
                            </div>
                          ) : (
                            <div className="bg-white rounded-lg p-2">
                              <p className="text-sm text-slate-900">{message.content}</p>
                              
                              {/* Name suggestions */}
                              {message.content.includes('I suggest the name') && (
                                <div className="mt-3 space-y-2">
                                  {[
                                    { name: 'Posta', desc: 'a cheeky nod to posting' },
                                    { name: 'Echo', desc: 'reflects your brand\'s voice' },
                                    { name: 'Vox', desc: 'Latin for voice, feels bold and crisp' },
                                    { name: 'Blynn', desc: 'blend of "blog" and "Lynn"' },
                                    { name: 'Buzz', desc: 'casual, but implies engagement' }
                                  ].map((suggestion) => (
                                    <div key={suggestion.name} className="flex items-start gap-2">
                                      <span className="text-sm text-slate-900">•</span>
                                      <div>
                                        <button 
                                          onClick={() => handleNameSuggestion(suggestion.name)}
                                          className="text-sm font-bold text-slate-900 hover:text-[#fc6737] transition-colors"
                                        >
                                          {suggestion.name}
                                        </button>
                                        <span className="text-sm text-slate-900"> - {suggestion.desc}</span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {/* Job title suggestions */}
                              {message.content.includes('title should reflect') && (
                                <div className="mt-3 space-y-2">
                                  {[
                                    'Social Content Specialist',
                                    'Marketing Copy Agent',
                                    'Campaign Copywriter',
                                    'Social Engagement Writer'
                                  ].map((title) => (
                                    <div key={title} className="flex items-start gap-2">
                                      <span className="text-sm text-slate-900">•</span>
                                      <button 
                                        onClick={() => handleJobSuggestion(title)}
                                        className="text-sm font-bold text-slate-900 hover:text-[#fc6737] transition-colors"
                                      >
                                        {title}
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                      
                      {/* Typing indicator */}
                      {isTyping && (
                        <div className="bg-white rounded-lg p-2">
                          <div className="flex gap-1">
                            <div className="size-2 bg-slate-400 rounded-full animate-pulse" />
                            <div className="size-2 bg-slate-400 rounded-full animate-pulse delay-75" />
                            <div className="size-2 bg-slate-400 rounded-full animate-pulse delay-150" />
                          </div>
                        </div>
                      )}
                      
                      {/* Model recommendation */}
                      {showModelRecommendation && (
                        <div className="bg-[#fff0eb] rounded-lg p-3 border border-[#fc6737]/20">
                          <p className="text-sm font-bold text-slate-900 mb-2">Model Recommendation</p>
                          <p className="text-sm text-slate-900 mb-3">
                            For creative content writing, I recommend:
                          </p>
                          <button
                            onClick={() => handleModelRecommendation('gpt-4o')}
                            className="w-full bg-white p-3 rounded-lg border border-[#fc6737] text-left hover:bg-[#fff0eb] transition-colors"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-sm text-slate-900">GPT-4o</span>
                              <Badge className="bg-[#fc6737] text-white text-[10px] px-2 py-0.5 h-auto">
                                Recommended
                              </Badge>
                            </div>
                            <p className="text-xs text-slate-500">
                              Excellent for creative writing, understands context and tone perfectly
                            </p>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Input Area */}
                  <div 
                    className="p-3 border-t border-[#f7f4f0]"
                    style={{ backgroundColor: 'rgba(230, 240, 237, 0.5)' }}
                  >
                    <div className="relative">
                      <Textarea
                        placeholder="Describe the agent you are trying to create"
                        className="pr-10 resize-none bg-white min-h-[70px] text-sm placeholder:text-slate-400"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                        rows={3}
                      />
                      <Button 
                        size="icon"
                        className={cn(
                          "absolute bottom-2 right-2 size-8 bg-[#fc6737] hover:bg-[#fc6737]/90",
                          !inputValue.trim() && "opacity-50 cursor-not-allowed"
                        )}
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                      >
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                  </div>
                ) : currentStep === 'workflow' ? (
                  /* Workflow Selection - Agent Info Sidebar */
                  <div className="bg-white rounded-lg border border-[#f7f4f0] p-6">
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative">
                        <AgentAvatar 
                          color={selectedColor.value}
                          bgColor="#f7f4f0"
                          size="lg"
                        />
                        <div className="absolute -bottom-1 -right-1 size-6 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center">
                          <Sparkles className="size-3 text-[#fc6737]" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mb-6">
                      <h3 className="font-bold text-lg text-slate-900">{formData.name || 'Echo'}</h3>
                      <p className="text-sm text-slate-500">{formData.jobTitle || 'Social Content Specialist'}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Model</p>
                        <p className="text-sm font-bold text-slate-900">
                          {formData.selectedModel ? 
                            (formData.selectedModel === 'gpt-4o' ? 'GPT-4o' : 
                             formData.selectedModel === 'gpt-4o-mini' ? 'GPT-4o Mini' :
                             formData.selectedModel === 'mistral-7b' ? 'Mistral-7B' : 
                             formData.selectedModel) : 'Not selected'}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-[#f7f4f0]">
                        <p className="text-xs text-slate-500 mb-3">Your agent isn't just smart —</p>
                        <p className="text-xs text-slate-500 mb-3">It's sustainable.</p>
                        <p className="text-xs text-slate-500">
                          Clairo runs entirely on clean energy and uses 50% less power than traditional AI platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Workflow Builder - Right Sidebar */
                  <div className="bg-white rounded-lg border border-[#f7f4f0] flex flex-col overflow-hidden">
                    {/* Node Header */}
                    <div className="px-4 py-3 border-b border-[#f7f4f0]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="size-8 bg-[#fff0eb] rounded flex items-center justify-center">
                            <FileText className="size-4 text-[#fc6737]" />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-slate-900">Document section</p>
                            <p className="text-xs text-slate-500">Main analysis</p>
                          </div>
                        </div>
                        <div className="size-5 rounded-full bg-green-500 flex items-center justify-center">
                          <Check className="size-3 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Configuration Sections */}
                    <div className="flex-1 overflow-y-auto">
                      <div className="p-4 space-y-4">
                        {/* Section Title */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-medium text-slate-900">Section title</label>
                            <div className="flex items-center gap-2">
                              <Info className="size-4 text-slate-400" />
                              <button
                                onClick={() => setExpandedSections(prev => ({ ...prev, sectionTitle: !prev.sectionTitle }))}
                                className="text-[#fc6737] hover:opacity-80"
                              >
                                {expandedSections.sectionTitle ? (
                                  <ChevronUp className="size-4" />
                                ) : (
                                  <ChevronDown className="size-4" />
                                )}
                              </button>
                            </div>
                          </div>
                          {expandedSections.sectionTitle && (
                            <Textarea
                              placeholder="e.g. 'Market Overview' or 'Financial Risk Analysis'"
                              className="min-h-[60px] text-sm resize-none"
                            />
                          )}
                        </div>
                        
                        {/* Persona */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-medium text-slate-900">Persona</label>
                            <div className="flex items-center gap-2">
                              <Info className="size-4 text-slate-400" />
                              <button
                                onClick={() => setExpandedSections(prev => ({ ...prev, persona: !prev.persona }))}
                                className="text-[#fc6737] hover:opacity-80"
                              >
                                {expandedSections.persona ? (
                                  <ChevronUp className="size-4" />
                                ) : (
                                  <ChevronDown className="size-4" />
                                )}
                              </button>
                            </div>
                          </div>
                          {expandedSections.persona && (
                            selectedPersonas.length > 0 ? (
                              <div className="space-y-2">
                                {selectedPersonas.map((persona) => (
                                  <div key={persona.id} className="p-2 bg-gray-50 rounded-lg">
                                    <p className="text-sm font-medium text-slate-900">{persona.type}</p>
                                    <div className="flex gap-2 mt-1">
                                      {persona.tags.map((tag) => (
                                        <span key={tag} className="text-xs text-slate-500">{tag}</span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                                <Button 
                                  variant="outline"
                                  className="w-full justify-start text-[#fc6737] border-[#ede7e0] hover:bg-[#fff0eb]"
                                  onClick={() => setShowAddPersonaModal(true)}
                                >
                                  <Plus className="size-4 mr-2" />
                                  <span className="text-sm font-medium">Add another persona</span>
                                </Button>
                              </div>
                            ) : (
                              <Button 
                                variant="outline"
                                className="w-full justify-start text-[#fc6737] border-[#ede7e0] hover:bg-[#fff0eb]"
                                onClick={() => setShowAddPersonaModal(true)}
                              >
                                <Plus className="size-4 mr-2" />
                                <span className="text-sm font-medium">Add persona</span>
                              </Button>
                            )
                          )}
                        </div>
                        
                        {/* Prompts */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-medium text-slate-900">Prompts</label>
                            <div className="flex items-center gap-2">
                              <Info className="size-4 text-slate-400" />
                              <button
                                onClick={() => setExpandedSections(prev => ({ ...prev, prompts: !prev.prompts }))}
                                className="text-[#fc6737] hover:opacity-80"
                              >
                                {expandedSections.prompts ? (
                                  <ChevronUp className="size-4" />
                                ) : (
                                  <ChevronDown className="size-4" />
                                )}
                              </button>
                            </div>
                          </div>
                          {expandedSections.prompts && (
                            selectedPrompts.length > 0 ? (
                              <div className="space-y-2">
                                {selectedPrompts.map((prompt) => (
                                  <div key={prompt.id} className="p-2 bg-gray-50 rounded-lg">
                                    <p className="text-sm font-medium text-slate-900">{prompt.title}</p>
                                    <p className="text-xs text-slate-500 mt-1">{prompt.prompt}</p>
                                  </div>
                                ))}
                                <Button 
                                  variant="outline"
                                  className="w-full justify-start text-[#fc6737] border-[#ede7e0] hover:bg-[#fff0eb]"
                                  onClick={() => setShowAddPromptModal(true)}
                                >
                                  <Plus className="size-4 mr-2" />
                                  <span className="text-sm font-medium">Add another prompt</span>
                                </Button>
                              </div>
                            ) : (
                              <Button 
                                variant="outline"
                                className="w-full justify-start text-[#fc6737] border-[#ede7e0] hover:bg-[#fff0eb]"
                                onClick={() => setShowAddPromptModal(true)}
                              >
                                <Plus className="size-4 mr-2" />
                                <span className="text-sm font-medium">Add prompt</span>
                              </Button>
                            )
                          )}
                        </div>
                        
                        {/* Knowledge Expert */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-medium text-slate-900">
                              Knowledge expert <span className="text-xs text-slate-400">(optional)</span>
                            </label>
                            <div className="flex items-center gap-2">
                              <Info className="size-4 text-slate-400" />
                              <button
                                onClick={() => setExpandedSections(prev => ({ ...prev, knowledgeExpert: !prev.knowledgeExpert }))}
                                className="text-[#fc6737] hover:opacity-80"
                              >
                                {expandedSections.knowledgeExpert ? (
                                  <ChevronUp className="size-4" />
                                ) : (
                                  <ChevronDown className="size-4" />
                                )}
                              </button>
                            </div>
                          </div>
                          {expandedSections.knowledgeExpert && (
                            selectedKnowledge.length > 0 ? (
                              <div className="space-y-2">
                                {selectedKnowledge.map((knowledge) => (
                                  <div key={knowledge.id} className="p-2 bg-gray-50 rounded-lg">
                                    <div className="flex items-center justify-between">
                                      <p className="text-sm font-medium text-slate-900">{knowledge.name}</p>
                                      <span className="text-xs text-slate-500">{knowledge.documentCount} docs</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">{knowledge.description}</p>
                                  </div>
                                ))}
                                <Button 
                                  variant="outline"
                                  className="w-full justify-start text-[#fc6737] border-[#ede7e0] hover:bg-[#fff0eb]"
                                  onClick={() => setShowAddKnowledgeModal(true)}
                                >
                                  <Plus className="size-4 mr-2" />
                                  <span className="text-sm font-medium">Add another knowledge library</span>
                                </Button>
                              </div>
                            ) : (
                              <Button 
                                variant="outline"
                                className="w-full justify-start text-[#fc6737] border-[#ede7e0] hover:bg-[#fff0eb]"
                                onClick={() => setShowAddKnowledgeModal(true)}
                              >
                                <Plus className="size-4 mr-2" />
                                <span className="text-sm font-medium">Add knowledge library</span>
                              </Button>
                            )
                          )}
                        </div>
                        
                        {/* Tools */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-medium text-slate-900">
                              Tools <span className="text-xs text-slate-400">(optional)</span>
                            </label>
                            <div className="flex items-center gap-2">
                              <Info className="size-4 text-slate-400" />
                              <button
                                onClick={() => setExpandedSections(prev => ({ ...prev, tools: !prev.tools }))}
                                className="text-[#fc6737] hover:opacity-80"
                              >
                                {expandedSections.tools ? (
                                  <ChevronUp className="size-4" />
                                ) : (
                                  <ChevronDown className="size-4" />
                                )}
                              </button>
                            </div>
                          </div>
                          {expandedSections.tools && (
                            selectedTools.length > 0 ? (
                              <div className="space-y-2">
                                {selectedTools.map((tool) => (
                                  <div key={tool.id} className="p-2 bg-gray-50 rounded-lg">
                                    <p className="text-sm font-medium text-slate-900">{tool.name}</p>
                                    <p className="text-xs text-slate-500 mt-1">{tool.description}</p>
                                  </div>
                                ))}
                                <Button 
                                  variant="outline"
                                  className="w-full justify-start text-[#fc6737] border-[#ede7e0] hover:bg-[#fff0eb]"
                                  onClick={() => setShowAddToolModal(true)}
                                >
                                  <Plus className="size-4 mr-2" />
                                  <span className="text-sm font-medium">Add another tool</span>
                                </Button>
                              </div>
                            ) : (
                              <Button 
                                variant="outline"
                                className="w-full justify-start text-[#fc6737] border-[#ede7e0] hover:bg-[#fff0eb]"
                                onClick={() => setShowAddToolModal(true)}
                              >
                                <Plus className="size-4 mr-2" />
                                <span className="text-sm font-medium">Add tool</span>
                              </Button>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="p-4 border-t border-[#f7f4f0] bg-gray-50">
                      <div className="flex items-center justify-between">
                        <Button 
                          variant="ghost" 
                          className="text-red-600 hover:bg-red-50"
                          size="sm"
                        >
                          <Trash2 className="size-4 mr-2" />
                          <span className="text-sm">Delete node</span>
                        </Button>
                        
                        <div className="flex gap-2">
                          <Button 
                            variant="outline"
                            className="text-slate-600 border-[#ede7e0]"
                            size="sm"
                            onClick={handleBack}
                          >
                            Cancel
                          </Button>
                          <Button 
                            className="bg-[#fc6737] hover:bg-[#fc6737]/90 text-white"
                            size="sm"
                            onClick={async () => {
                              await handleSave()
                            }}
                          >
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Prompt Modal */}
      <AddPromptModal 
        isOpen={showAddPromptModal}
        onClose={() => setShowAddPromptModal(false)}
        onAdd={(prompts) => {
          setSelectedPrompts(prev => [...prev, ...prompts])
          setShowAddPromptModal(false)
        }}
      />
      
      {/* Add Knowledge Modal */}
      <AddKnowledgeModal 
        isOpen={showAddKnowledgeModal}
        onClose={() => setShowAddKnowledgeModal(false)}
        onAdd={(libraries) => {
          setSelectedKnowledge(prev => [...prev, ...libraries])
          setShowAddKnowledgeModal(false)
        }}
      />
      
      {/* Add Tool Modal */}
      <AddToolModal 
        isOpen={showAddToolModal}
        onClose={() => setShowAddToolModal(false)}
        onAdd={(tools) => {
          setSelectedTools(prev => [...prev, ...tools])
          setShowAddToolModal(false)
        }}
      />
      
      {/* Add Persona Modal */}
      <AddPersonaModal 
        isOpen={showAddPersonaModal}
        onClose={() => setShowAddPersonaModal(false)}
        onAdd={(personas) => {
          setSelectedPersonas(prev => [...prev, ...personas])
          setShowAddPersonaModal(false)
        }}
      />
    </div>
  )
}
