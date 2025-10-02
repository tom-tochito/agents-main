import { Suspense, lazy } from 'react'
import { type LoaderFunction } from 'react-router'
import { useLoaderData, Link, useNavigate } from 'react-router'
import { AgentMockRepository } from '~/features/agents/repositories/agent-mock.repository'
import { agentRepository } from '~/features/agents/repositories/agent-repository.provider'
import type { Agent } from '~/features/agents/models/agent.model'
import { Button } from '~/core/components/ui/button/button'
import { ArrowLeft, Play, Trash2 } from 'lucide-react'

// Lazy load the workflow editor
const WorkflowEditor = lazy(() => 
  import('~/features/agents/components/workflow-editor').then(module => ({ 
    default: module.WorkflowEditor 
  }))
)

interface LoaderData {
  agent: Agent | null
}

export const loader: LoaderFunction = async ({ params }) => {
  const repository = new AgentMockRepository()
  const agent = await repository.findById(params.id as string)
  return { agent }
}

export default function AgentDetailPage() {
  const { agent } = useLoaderData<LoaderData>()
  const navigate = useNavigate()

  const handleDelete = async () => {
    if (!agent) {
      return
    }

    const confirmed = window.confirm(`Delete ${agent.name}?`)
    if (!confirmed) {
      return
    }

    await agentRepository.deleteAgent(agent.id)
    navigate('/agents')
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
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/agents" className="text-gray-400 hover:text-gray-600">
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <div>
                <h1 className="text-base font-medium text-gray-900">{agent.title}</h1>
                <p className="text-sm text-gray-500">{agent.name} - Workflow Editor</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white" size="sm">
                <Play className="h-3.5 w-3.5 mr-1.5" />
                Run Workflow
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 border-red-200 hover:bg-red-50"
                onClick={handleDelete}
              >
                <Trash2 className="h-3.5 w-3.5 mr-1.5" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Workflow Editor */}
      <div className="p-6">
        <Suspense fallback={
          <div className="flex justify-center items-center min-h-[700px] bg-white rounded-lg shadow-sm">
            <div className="text-gray-500">Loading workflow editor...</div>
          </div>
        }>
          <WorkflowEditor />
        </Suspense>
      </div>
    </div>
  )
}