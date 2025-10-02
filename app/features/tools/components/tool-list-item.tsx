import { type Tool } from '../models/tool.model'
import { Badge } from '~/core/components/ui/badge/badge'
import { Button } from '~/core/components/ui/button/button'
import { Switch } from '~/core/components/ui/switch/switch'
import { AvatarGroup } from '~/features/prompts/components/avatar-group'
import { 
  MoreVertical,
  Settings,
  Trash2,
  ExternalLink,
  Play,
  Pause
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/core/components/ui/dropdown-menu/dropdown-menu'
import { cn } from '~/core/lib/utils'

interface ToolListItemProps {
  tool: Tool
  selected?: boolean
  onSelect?: (id: string, checked: boolean) => void
  onConfigure: (id: string) => void
  onToggleStatus: (id: string) => void
  onDelete: (id: string) => Promise<void>
  onTest: (id: string) => void
}

export function ToolListItem({ 
  tool,
  selected = false,
  onSelect,
  onConfigure,
  onToggleStatus,
  onDelete,
  onTest
}: ToolListItemProps) {
  return (
    <tr className="hover:bg-gray-50 border-b border-gray-100">
      <td className="pl-6 pr-3 py-4 w-10">
        <input 
          type="checkbox" 
          className="rounded border-gray-300"
          checked={selected}
          onChange={(e) => onSelect?.(tool.id, e.target.checked)}
        />
      </td>
      <td className="px-3 py-4">
        <div>
          <div className="text-sm font-medium text-gray-900">{tool.name}</div>
          <div className="text-xs text-gray-500 mt-0.5">{tool.provider}</div>
        </div>
      </td>
      <td className="px-3 py-4 max-w-md">
        <div className="text-sm text-gray-600 truncate">{tool.description}</div>
      </td>
      <td className="px-3 py-4">
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
      </td>
      <td className="px-3 py-4">
        <Badge 
          variant={tool.type === 'api' ? 'outline' : 'secondary'}
          className="text-xs"
        >
          {tool.type.toUpperCase()}
        </Badge>
      </td>
      <td className="px-3 py-4">
        <AvatarGroup users={tool.usedBy} max={3} />
      </td>
      <td className="px-3 py-4">
        <div className="flex items-center gap-2">
          <Switch
            checked={tool.status === 'active'}
            onCheckedChange={() => onToggleStatus(tool.id)}
          />
          {tool.status === 'beta' && (
            <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">
              Beta
            </Badge>
          )}
        </div>
      </td>
      <td className="px-3 py-4 text-right pr-6">
        <div className="flex items-center justify-end gap-2">
          <Button 
            onClick={() => onTest(tool.id)}
            variant="outline" 
            size="sm"
            className="text-orange-600 border-orange-300 hover:bg-orange-50"
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
              <DropdownMenuItem onClick={() => onConfigure(tool.id)}>
                <Settings className="mr-2 h-3 w-3" />
                Configure
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ExternalLink className="mr-2 h-3 w-3" />
                View Documentation
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
      </td>
    </tr>
  )
}