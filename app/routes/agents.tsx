import { useState } from 'react'
import { type LoaderFunction } from 'react-router'
import { useLoaderData, useNavigate } from 'react-router'
import { AgentCard } from '~/features/agents/components/agent-card'
import { AgentListItem } from '~/features/agents/components/agent-list-item'
import { AgentsSidebar } from '~/features/agents/components/sidebar'
import { AgentMockRepository } from '~/features/agents/repositories/agent-mock.repository'
import type { Agent } from '~/features/agents/models/agent.model'
import { Button } from '~/core/components/ui/button/button'
import { Input } from '~/core/components/ui/input/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/core/components/ui/select/select'
import { Badge } from '~/core/components/ui/badge/badge'
import { Search, Plus, Grid3X3, List } from 'lucide-react'
import { cn } from '~/core/lib/utils'

interface LoaderData {
  agents: Agent[]
  categories: Array<{ value: string; label: string; count: number }>
}

export const loader: LoaderFunction = async () => {
  const repository = new AgentMockRepository()
  const [agents, categories] = await Promise.all([
    repository.findAll(),
    repository.getCategories()
  ])
  
  return { agents, categories }
}

export default function AgentsPage() {
  const { agents: initialAgents, categories } = useLoaderData<LoaderData>()
  const navigate = useNavigate()
  const [agents, setAgents] = useState<Agent[]>(initialAgents)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedTools, setSelectedTools] = useState<string>('all')
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [agentTypeFilter, setAgentTypeFilter] = useState<'all' | 'document' | 'chat'>('all')
  
  const repository = new AgentMockRepository()
  
  const filteredAgents = agents.filter(agent => {
    const matchesSearch = !search || 
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.title.toLowerCase().includes(search.toLowerCase()) ||
      agent.description.toLowerCase().includes(search.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory
    const matchesStatus = selectedStatus === 'all' || 
      (selectedStatus === 'active' && agent.isActive) ||
      (selectedStatus === 'inactive' && !agent.isActive)
    
    const matchesTools = selectedTools === 'all' ||
      (selectedTools === 'has_tools' && agent.tools.length > 0) ||
      (selectedTools === 'no_tools' && agent.tools.length === 0)
    
    const matchesWorkflow = selectedWorkflow === 'all' ||
      (selectedWorkflow === 'has_workflows' && agent.workflows.length > 0) ||
      (selectedWorkflow === 'no_workflows' && agent.workflows.length === 0)
    
    const matchesType = agentTypeFilter === 'all' || 
      (agent as any).type === agentTypeFilter
    
    return matchesSearch && matchesCategory && matchesStatus && matchesTools && matchesWorkflow && matchesType
  })
  
  const handleToggleActive = async (id: string, active: boolean) => {
    const updated = await repository.updateStatus(id, active)
    if (updated) {
      setAgents(prev => prev.map(a => a.id === id ? { ...a, isActive: active } : a))
    }
  }
  
  const handleRunAgent = async (id: string) => {
    await repository.runAgent(id)
    console.log(`Running agent ${id}`)
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-xl font-semibold text-gray-900">Agents & Workflows</h1>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="px-6 py-6">
          {/* Title and View Toggle */}
          <div className="flex items-center gap-6 mb-6">
            <h1 className="text-2xl font-normal text-gray-900">
              Agents
            </h1>
            
            <div className="bg-amber-50 flex p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  "p-1 rounded-md transition-all",
                  viewMode === 'grid'
                    ? "bg-white shadow-sm"
                    : ""
                )}
              >
                <Grid3X3 className={cn(
                  "h-4 w-4",
                  viewMode === 'grid' ? "text-orange-600" : "text-gray-500"
                )} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  "p-1 rounded-md transition-all",
                  viewMode === 'list'
                    ? "bg-white shadow-sm"
                    : ""
                )}
              >
                <List className={cn(
                  "h-4 w-4",
                  viewMode === 'list' ? "text-orange-600" : "text-gray-500"
                )} />
              </button>
            </div>
          </div>
          
          {/* Filters Row */}
          <div className="flex items-center gap-3 mb-6">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px] h-9">
                <SelectValue placeholder="All personalities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All personalities</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedWorkflow} onValueChange={setSelectedWorkflow}>
              <SelectTrigger className="w-[180px] h-9">
                <SelectValue placeholder="All workflows" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All workflows</SelectItem>
                <SelectItem value="has_workflows">Has workflows</SelectItem>
                <SelectItem value="no_workflows">No workflows</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedTools} onValueChange={setSelectedTools}>
              <SelectTrigger className="w-[180px] h-9">
                <SelectValue placeholder="All tools" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All tools</SelectItem>
                <SelectItem value="has_tools">Has tools</SelectItem>
                <SelectItem value="no_tools">No tools</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value="all" disabled>
              <SelectTrigger className="w-[180px] h-9">
                <SelectValue placeholder="All tags" />
              </SelectTrigger>
            </Select>
            
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search agent or anything..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-9"
              />
            </div>
            
            <Button 
              variant="primary" 
              size="sm" 
              className="h-9 ml-auto"
              onClick={() => navigate('/agents/new')}
            >
              <Plus className="h-4 w-4 mr-1" />
              Create
            </Button>
          </div>
          
          {/* Agent Type Tabs */}
          <div className="mb-6">
            <div className="bg-amber-50 inline-flex p-1 rounded-lg">
              <button
                onClick={() => setAgentTypeFilter('all')}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                  agentTypeFilter === 'all'
                    ? "bg-white text-orange-600 shadow-sm font-bold"
                    : "text-gray-900 hover:text-gray-700"
                )}
              >
                <div className="w-4 h-4 rounded-full border-2 border-current" />
                All agents
              </button>
              <button
                onClick={() => setAgentTypeFilter('document')}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                  agentTypeFilter === 'document'
                    ? "bg-white text-orange-600 shadow-sm font-bold"
                    : "text-gray-900 hover:text-gray-700"
                )}
              >
                <div className="w-4 h-4 rounded-full border-2 border-current" />
                Document generator
              </button>
              <button
                onClick={() => setAgentTypeFilter('chat')}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                  agentTypeFilter === 'chat'
                    ? "bg-white text-orange-600 shadow-sm font-bold"
                    : "text-gray-900 hover:text-gray-700"
                )}
              >
                <div className="w-4 h-4 rounded-full border-2 border-current" />
                Chat Agents
              </button>
            </div>
          </div>
            
          {filteredAgents.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No agents found matching your filters.</p>
                </div>
              ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredAgents.map(agent => (
                    <AgentCard
                      key={agent.id}
                      agent={agent}
                      onToggleActive={handleToggleActive}
                      onRun={handleRunAgent}
                    />
                  ))}
                </div>
              ) : (
                <div className="-mx-6">
                  {/* Section Headers */}
                  {agentTypeFilter !== 'all' && (
                    <div className="px-6 py-2 mb-4">
                      <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {agentTypeFilter === 'document' ? 'Document generator agents' : 'Chat agents'}
                      </h3>
                    </div>
                  )}
                  
                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Agent
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Details
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tools
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Workflows
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Created by
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredAgents.map(agent => (
                          <AgentListItem
                            key={agent.id}
                            agent={agent}
                            onToggleActive={handleToggleActive}
                            onRun={handleRunAgent}
                            onChat={handleRunAgent}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
  )
}