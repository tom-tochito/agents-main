import { type Tool } from '../models/tool.model'
import { Badge } from '~/core/components/ui/badge/badge'
import { Button } from '~/core/components/ui/button/button'
import { AvatarGroup } from '~/features/prompts/components/avatar-group'
import { 
  MoreVertical,
  Settings,
  Trash2,
  Play,
  Pause,
  Users,
  Zap,
  ExternalLink
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/core/components/ui/dropdown-menu/dropdown-menu'
import { cn } from '~/core/lib/utils'

interface ToolCardProps {
  tool: Tool
  onConfigure: (id: string) => void
  onToggleStatus: (id: string) => void
  onDelete: (id: string) => Promise<void>
  onTest: (id: string) => void
}

export function ToolCard({ 
  tool,
  onConfigure,
  onToggleStatus,
  onDelete,
  onTest
}: ToolCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500'
      case 'inactive':
        return 'bg-gray-400'
      case 'beta':
        return 'bg-amber-500'
      default:
        return 'bg-gray-400'
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow relative">
      {/* Status indicator */}
      <div className="absolute top-4 right-4">
        <div className={cn("w-2 h-2 rounded-full", getStatusColor(tool.status))} />
      </div>
      
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 pr-8">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
            {tool.name}
          </h3>
          {tool.provider && (
            <p className="text-xs text-gray-500 mt-0.5">by {tool.provider}</p>
          )}
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {tool.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <Badge 
          variant="secondary" 
          className={cn(
            "text-xs font-normal",
            tool.category === 'Communication' && "bg-blue-50 text-blue-700 border-blue-200",
            tool.category === 'AI/ML' && "bg-purple-50 text-purple-700 border-purple-200",
            tool.category === 'Project Management' && "bg-green-50 text-green-700 border-green-200",
            tool.category === 'Development' && "bg-orange-50 text-orange-700 border-orange-200",
            tool.category === 'Finance' && "bg-indigo-50 text-indigo-700 border-indigo-200",
            tool.category === 'Infrastructure' && "bg-gray-50 text-gray-700 border-gray-200",
            tool.category === 'Sales' && "bg-pink-50 text-pink-700 border-pink-200",
            tool.category === 'Analytics' && "bg-yellow-50 text-yellow-700 border-yellow-200"
          )}
        >
          {tool.category}
        </Badge>
        <Badge variant="outline" className="text-xs">
          {tool.type}
        </Badge>
        {tool.status === 'beta' && (
          <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">
            Beta
          </Badge>
        )}
      </div>

      {tool.features && tool.features.length > 0 && (
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {tool.features.slice(0, 2).map((feature, index) => (
              <span key={index} className="text-xs text-gray-500">
                • {feature}
              </span>
            ))}
            {tool.features.length > 2 && (
              <span className="text-xs text-gray-500">
                +{tool.features.length - 2} more
              </span>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <div className="flex items-center gap-3">
          {tool.usedBy.length > 0 && (
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{tool.usedBy.length} users</span>
            </div>
          )}
          {tool.pricing && (
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3" />
              <span className="capitalize">{tool.pricing}</span>
            </div>
          )}
        </div>
      </div>

      {tool.usedBy.length > 0 && (
        <div className="mb-3">
          <AvatarGroup users={tool.usedBy} max={4} />
        </div>
      )}

      <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
        <Button 
          onClick={() => onTest(tool.id)}
          variant="outline" 
          size="sm"
          className={cn(
            "flex-1 h-8",
            tool.status === 'active' 
              ? "text-orange-600 border-orange-300 hover:bg-orange-50" 
              : "text-gray-400 border-gray-300"
          )}
          disabled={tool.status !== 'active'}
        >
          {tool.status === 'active' ? (
            <>
              <Play className="h-3 w-3 mr-1" />
              Test
            </>
          ) : (
            <>
              <Pause className="h-3 w-3 mr-1" />
              Disabled
            </>
          )}
        </Button>
        <Button
          onClick={() => onConfigure(tool.id)}
          variant="ghost"
          size="icon"
          className="h-8 w-8"
        >
          <Settings className="h-4 w-4 text-gray-400" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onToggleStatus(tool.id)}>
              {tool.status === 'active' ? 'Deactivate' : 'Activate'}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ExternalLink className="mr-2 h-3 w-3" />
              Documentation
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onDelete(tool.id)}
              className="text-red-600"
            >
              <Trash2 className="mr-2 h-3 w-3" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}