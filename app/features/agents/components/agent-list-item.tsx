import { useNavigate } from 'react-router'
import { cn } from '~/core/lib/utils'
import { Play, MessageCircle } from 'lucide-react'
import type { Agent } from '~/features/agents/models/agent.model'

interface AgentListItemProps {
  agent: Agent
  onToggleActive?: (id: string, active: boolean) => void
  onRun?: (id: string) => void
  onChat?: (id: string) => void
  className?: string
}

const toolIcons: Record<string, string> = {
  gmail: '📧',
  slack: '💬', 
  jira: '📋',
  notion: '📝',
  github: '🐙',
  salesforce: '💼',
  tiktok: '🎵'
}

export function AgentListItem({ agent, onToggleActive, onRun, onChat, className }: AgentListItemProps) {
  const navigate = useNavigate()
  const avatarColors = [
    'bg-orange-100',
    'bg-blue-100', 
    'bg-green-100',
    'bg-purple-100',
    'bg-pink-100',
    'bg-yellow-100'
  ]
  
  const avatarIndex = agent.name.charCodeAt(0) % avatarColors.length
  const avatarColor = avatarColors[avatarIndex]
  
  const handleRowClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on interactive elements
    const target = e.target as HTMLElement
    if (target.closest('button') || target.closest('input') || target.closest('label')) {
      return
    }
    navigate(`/agents/${agent.id}`)
  }
  
  return (
    <tr 
      className={cn("hover:bg-gray-50 transition-colors cursor-pointer", className)}
      onClick={handleRowClick}
    >
      {/* Agent Info */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold",
            avatarColor
          )}>
            {agent.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-sm text-gray-900">
              {agent.name}
            </div>
            <div className="text-xs text-gray-500">
              {agent.categoryLabel}
            </div>
          </div>
        </div>
      </td>
      
      {/* Title & Description */}
      <td className="px-6 py-4">
        <div className="font-semibold text-sm text-gray-900 mb-1">
          {agent.title}
        </div>
        <div className="text-xs text-gray-600 line-clamp-2 max-w-md">
          {agent.description}
        </div>
      </td>
      
      {/* Tools */}
      <td className="px-6 py-4">
        {agent.tools.length > 0 ? (
          <div className="flex gap-1">
            {agent.tools.slice(0, 3).map(tool => (
              <span key={tool.id} className="text-base" title={tool.name}>
                {toolIcons[tool.type] || '🔧'}
              </span>
            ))}
            {agent.tools.length > 3 && (
              <span className="text-xs text-gray-400 ml-1">+{agent.tools.length - 3}</span>
            )}
          </div>
        ) : (
          <span className="text-gray-400">—</span>
        )}
      </td>
      
      {/* Workflows */}
      <td className="px-6 py-4">
        {agent.workflows.length > 0 ? (
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span className="text-sm text-gray-600 truncate max-w-[200px]">
              {agent.workflows[0].name}
            </span>
            {agent.workflows.length > 1 && (
              <span className="text-xs text-gray-400">+{agent.workflows.length - 1}</span>
            )}
          </div>
        ) : (
          <span className="text-gray-400">—</span>
        )}
      </td>
      
      {/* Created by */}
      <td className="px-6 py-4 text-center">
        <span className="text-sm text-gray-500">CN</span>
      </td>
      
      {/* Status */}
      <td className="px-6 py-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={agent.isActive}
            onChange={(e) => {
              e.stopPropagation();
              onToggleActive?.(agent.id, e.target.checked);
            }}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-600"></div>
          <span className="ms-3 text-sm text-gray-700">
            {agent.isActive ? 'Active' : 'Disabled'}
          </span>
        </label>
      </td>
      
      {/* Actions */}
      <td className="px-6 py-4">
        {agent.isActive && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              agent.type === 'chat' ? onChat?.(agent.id) : onRun?.(agent.id);
            }}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-orange-50 transition-colors"
          >
            {agent.type === 'chat' ? (
              <>
                <MessageCircle className="h-4 w-4 text-orange-600" />
                <span className="text-orange-600 font-semibold text-sm">Chat</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4 text-orange-600" />
                <span className="text-orange-600 font-semibold text-sm">Run</span>
              </>
            )}
          </button>
        )}
      </td>
    </tr>
  )
}