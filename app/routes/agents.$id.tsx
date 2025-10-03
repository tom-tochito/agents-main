import { useState, useEffect } from 'react'
import { type LoaderFunction } from 'react-router'
import { useLoaderData, Link, useNavigate, useParams } from 'react-router'
import { getAgentService } from '~/features/agents/services/agent.service'
import type { Agent } from '~/features/agents/models/agent.model'
import { Button } from '~/core/components/ui/button/button'
import { Badge } from '~/core/components/ui/badge/badge'
import { Switch } from '~/core/components/ui/switch/switch'
import { Card, CardContent, CardHeader, CardTitle } from '~/core/components/ui/card/card'
import { AgentAvatar } from '~/features/agents/components/agent-avatar'
import { 
  ArrowLeft, 
  Play, 
  Trash2, 
  Settings, 
  Activity,
  Calendar,
  Hash,
  FileText,
  MessageSquare,
  Wrench
} from 'lucide-react'

interface LoaderData {
  agent: Agent | null
}

export const loader: LoaderFunction = async ({ params }) => {
  // Force a fresh load from the repository
  const agentService = getAgentService()
  
  // Add a small delay to ensure localStorage is updated
  await new Promise(resolve => setTimeout(resolve, 100))
  
  const agent = await agentService.getAgentById(params.id as string)
  console.log(`Loader: Looking for agent ${params.id}, found:`, agent)
  
  return { agent }
}

export default function AgentDetailPage() {
  const { agent: initialAgent } = useLoaderData<LoaderData>()
  const navigate = useNavigate()
  const params = useParams()
  const [agent, setAgent] = useState<Agent | null>(initialAgent)
  const [isActive, setIsActive] = useState(agent?.isActive || false)
  const [loading, setLoading] = useState(false)

  // Client-side reload of agent data
  useEffect(() => {
    const loadAgent = async () => {
      if (!params.id) return
      
      setLoading(true)
      const agentService = getAgentService()
      const loadedAgent = await agentService.getAgentById(params.id)
      console.log('Client-side load agent:', loadedAgent)
      
      if (loadedAgent) {
        setAgent(loadedAgent)
        setIsActive(loadedAgent.isActive)
      }
      setLoading(false)
    }

    // Only load on client side
    if (typeof window !== 'undefined' && !initialAgent) {
      loadAgent()
    }
  }, [params.id, initialAgent])

  const handleDelete = async () => {
    if (!agent) return

    const confirmed = window.confirm(`Delete ${agent.name}?`)
    if (!confirmed) return

    const agentService = getAgentService()
    await agentService.deleteAgent(agent.id)
    navigate('/agents')
  }

  const handleToggleActive = async () => {
    if (!agent) return
    
    const agentService = getAgentService()
    const updated = await agentService.updateAgentStatus(agent.id, !isActive)
    if (updated) {
      setIsActive(!isActive)
    }
  }

  const handleRun = async () => {
    if (!agent) return
    
    const agentService = getAgentService()
    await agentService.runAgent(agent.id)
    alert(`Agent ${agent.name} is running!`)
  }
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading agent...</p>
        </div>
      </div>
    )
  }

  if (!agent) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Agent not found</h2>
          <Link to="/agents" className="text-orange-600 hover:text-orange-700 mt-4 inline-block">
            Back to agents
          </Link>
        </div>
      </div>
    )
  }

  // Extract color from avatar if it's a hex color
  const agentColor = agent.avatar?.startsWith('#') ? agent.avatar : '#fc6737'
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/agents" className="text-gray-400 hover:text-gray-600">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{agent.name}</h1>
                <p className="text-sm text-gray-500">{agent.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white"
                onClick={handleRun}
              >
                <Play className="h-4 w-4 mr-2" />
                Run Agent
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Agent Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Agent Overview Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Agent Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <AgentAvatar 
                        color={agentColor}
                        bgColor="#f7f4f0"
                        size="xl"
                        className="w-24 h-24"
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
                        <p className="text-sm text-gray-600">{agent.title}</p>
                        <p className="mt-2 text-gray-700">{agent.description}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={agent.type === 'document' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}>
                          {agent.type === 'document' ? (
                            <><FileText className="h-3 w-3 mr-1" /> Document Generator</>
                          ) : (
                            <><MessageSquare className="h-3 w-3 mr-1" /> Chat Agent</>
                          )}
                        </Badge>
                        <Badge className="bg-gray-100 text-gray-800">
                          {agent.categoryLabel}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tools & Integrations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Tools & Integrations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {agent.tools.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {agent.tools.map(tool => (
                        <Badge key={tool.id} variant="outline" className="py-1.5 px-3">
                          {tool.name}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">No tools configured</p>
                  )}
                </CardContent>
              </Card>

              {/* Workflows */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Workflows
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {agent.workflows.length > 0 ? (
                    <div className="space-y-3">
                      {agent.workflows.map(workflow => (
                        <div key={workflow.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{workflow.name}</p>
                            {workflow.description && (
                              <p className="text-sm text-gray-600">{workflow.description}</p>
                            )}
                          </div>
                          <Badge className={workflow.enabled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                            {workflow.enabled ? 'Enabled' : 'Disabled'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">No workflows configured</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Stats & Actions */}
            <div className="space-y-6">
              {/* Status Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Active</span>
                    <Switch
                      checked={isActive}
                      onCheckedChange={handleToggleActive}
                      className={isActive ? 'bg-green-600' : 'bg-gray-300'}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Statistics Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Hash className="h-4 w-4" />
                      <span className="text-sm">Run Count</span>
                    </div>
                    <span className="font-semibold text-gray-900">{agent.runCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Created</span>
                    </div>
                    <span className="text-sm text-gray-900">
                      {new Date(agent.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Activity className="h-4 w-4" />
                      <span className="text-sm">Last Run</span>
                    </div>
                    <span className="text-sm text-gray-900">
                      {agent.lastRunAt ? new Date(agent.lastRunAt).toLocaleDateString() : 'Never'}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Actions Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={handleRun}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Run Agent
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate(`/agents/${agent.id}/workflow`)}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    View Workflow
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full text-red-600 border-red-200 hover:bg-red-50"
                    onClick={handleDelete}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Agent
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}