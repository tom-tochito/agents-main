import { Link } from 'react-router'
import { Avatar, AvatarFallback, AvatarImage } from '~/core/components/ui/avatar/avatar'
import { Badge } from '~/core/components/ui/badge/badge'
import { Button } from '~/core/components/ui/button/button'
import { Switch } from '~/core/components/ui/switch/switch'
import { cn } from '~/core/lib/utils'
import { Play, CheckCircle } from 'lucide-react'
import type { Agent } from '~/features/agents/models/agent.model'

interface AgentCardProps {
  agent: Agent
  onToggleActive?: (id: string, active: boolean) => void
  onRun?: (id: string) => void
  className?: string
}

const toolIcons: Record<string, string> = {
  gmail: '📧',
  slack: '💬',
  jira: '📋',
  notion: '📝',
  github: '🐙',
  salesforce: '💼'
}

export function AgentCard({ agent, onToggleActive, onRun, className }: AgentCardProps) {
  const initials = agent.name.charAt(0).toUpperCase()
  
  const categoryColors: Record<string, string> = {
    business_strategy: 'bg-amber-50 text-amber-900 border-amber-200',
    finance_reporting: 'bg-blue-50 text-blue-900 border-blue-200',
    marketing_research: 'bg-purple-50 text-purple-900 border-purple-200',
    sales_proposals: 'bg-green-50 text-green-900 border-green-200',
    operations: 'bg-orange-50 text-orange-900 border-orange-200',
    hr_management: 'bg-pink-50 text-pink-900 border-pink-200'
  }
  
  return (
    <Link 
      to={`/agents/${agent.id}`} 
      className={cn(
        "block bg-white rounded-md shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer",
        className
      )}
    >
      <div className="flex flex-col relative">
        {/* Avatar and Title Section */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative mb-2">
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
              <span className="text-lg font-semibold text-orange-600">{initials}</span>
            </div>
            {agent.isActive && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
            )}
          </div>
          
          <h3 className="text-sm font-medium text-gray-900">{agent.name}</h3>
          
          <Badge 
            variant="secondary" 
            className="mt-1 text-[10px] px-2 py-0.5 bg-amber-50 text-amber-900 border-0"
          >
            {agent.categoryLabel}
          </Badge>
        </div>
        
        {/* Title and Description */}
        <div className="text-center mb-3">
          <h4 className="font-bold text-gray-900 text-base mb-1">
            {agent.title}
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed px-2">
            {agent.description}
          </p>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 my-3"></div>
        
        {/* Tools and Workflows */}
        <div className="flex gap-4 mb-3">
          {/* Tools */}
          <div className="min-w-[60px]">
            <p className="text-[10px] text-gray-400 mb-1.5">Tools</p>
            <div className="flex gap-1">
              {agent.tools.length > 0 ? (
                agent.tools.slice(0, 1).map(tool => (
                  <div 
                    key={tool.id}
                    className="w-[22px] h-[22px] bg-amber-50 rounded flex items-center justify-center border border-amber-100"
                    title={tool.name}
                  >
                    <span className="text-[14px]">
                      {toolIcons[tool.type] || '🔧'}
                    </span>
                  </div>
                ))
              ) : (
                <span className="text-xs text-gray-400">—</span>
              )}
            </div>
          </div>
          
          {/* Workflows */}
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-gray-400 mb-1.5">Workflows</p>
            {agent.workflows.length > 0 ? (
              <div className="relative group">
                <div className="bg-amber-50 border border-amber-100 rounded-full px-2.5 py-1 flex items-center gap-1.5 w-full">
                  <CheckCircle className="h-3 w-3 text-gray-400 flex-shrink-0" />
                  <span className="text-xs text-gray-700 truncate flex-1">
                    {agent.workflows[0].name}
                  </span>
                  <span className="text-xs text-gray-400 flex-shrink-0">...</span>
                </div>
                {/* Tooltip */}
                <div className="absolute left-0 bottom-full mb-2 bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {agent.workflows[0].name}
                </div>
              </div>
            ) : (
              <span className="text-xs text-gray-400">—</span>
            )}
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 my-3"></div>
        
        {/* Active/Run Row */}
        <div className="flex items-center justify-between">
          <label 
            className="flex items-center gap-2 cursor-pointer relative z-10" 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Switch
              checked={agent.isActive}
              onCheckedChange={(checked) => {
                onToggleActive?.(agent.id, checked);
              }}
              className="h-5"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            />
            <span className="text-sm text-gray-900">
              Active
            </span>
          </label>
          
          {agent.isActive && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onRun?.(agent.id);
              }}
              className="h-8 px-3 hover:bg-amber-50 relative z-10"
            >
              <Play className="h-4 w-4 mr-1 text-orange-600" />
              <span className="text-orange-600 font-bold text-xs">Run</span>
            </Button>
          )}
        </div>
      </div>
    </Link>
  )
}