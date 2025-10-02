import { type Prompt } from '../models/prompt.model'
import { Badge } from '~/core/components/ui/badge/badge'
import { Button } from '~/core/components/ui/button/button'
import { AvatarGroup } from './avatar-group'
import { 
  MoreVertical,
  Edit,
  Trash2,
  Pin,
  MessageSquare
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/core/components/ui/dropdown-menu/dropdown-menu'
import { cn } from '~/core/lib/utils'

interface PromptListItemProps {
  prompt: Prompt
  selected?: boolean
  onSelect?: (id: string, checked: boolean) => void
  onUse: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => Promise<void>
  onPin: (id: string) => void
}

export function PromptListItem({ 
  prompt,
  selected = false,
  onSelect,
  onUse,
  onEdit,
  onDelete,
  onPin
}: PromptListItemProps) {
  return (
    <tr className="hover:bg-gray-50 border-b border-gray-100">
      <td className="pl-6 pr-3 py-4 w-10">
        <input 
          type="checkbox" 
          className="rounded border-gray-300"
          checked={selected}
          onChange={(e) => onSelect?.(prompt.id, e.target.checked)}
        />
      </td>
      <td className="px-3 py-4">
        <div className="text-sm font-medium text-gray-900">{prompt.title}</div>
      </td>
      <td className="px-3 py-4 max-w-md">
        <div className="text-sm text-gray-600 truncate">{prompt.fullPrompt}</div>
      </td>
      <td className="px-3 py-4">
        <Badge 
          variant="secondary" 
          className={cn(
            "text-xs font-normal",
            prompt.tag === 'HR' && "bg-blue-50 text-blue-700 border-blue-200",
            prompt.tag === 'Risk' && "bg-orange-50 text-orange-700 border-orange-200",
            prompt.tag === 'Reports' && "bg-purple-50 text-purple-700 border-purple-200",
            prompt.tag === 'Communication' && "bg-green-50 text-green-700 border-green-200",
            prompt.tag === 'Clinical' && "bg-red-50 text-red-700 border-red-200",
            prompt.tag === 'Strategy' && "bg-indigo-50 text-indigo-700 border-indigo-200",
            prompt.tag === 'Research' && "bg-yellow-50 text-yellow-700 border-yellow-200",
            prompt.tag === 'Marketing' && "bg-pink-50 text-pink-700 border-pink-200",
            prompt.tag === 'DocGen' && "bg-teal-50 text-teal-700 border-teal-200",
            prompt.tag === 'Compliance' && "bg-gray-50 text-gray-700 border-gray-200"
          )}
        >
          {prompt.tag}
        </Badge>
      </td>
      <td className="px-3 py-4">
        <div className="text-sm text-gray-900">{prompt.createdBy.name}</div>
      </td>
      <td className="px-3 py-4">
        <AvatarGroup users={prompt.usedBy} />
      </td>
      <td className="px-3 py-4 text-right pr-6">
        <div className="flex items-center justify-end gap-2">
          <Button 
            onClick={() => onUse(prompt.id)}
            variant="outline" 
            size="sm"
            className="text-orange-600 border-orange-300 hover:bg-orange-50"
          >
            <MessageSquare className="h-3 w-3 mr-1" />
            Use
          </Button>
          <Button
            onClick={() => onPin(prompt.id)}
            variant="ghost"
            size="icon"
            className="h-8 w-8"
          >
            <Pin className="h-4 w-4 text-gray-400" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(prompt.id)}>
                <Edit className="mr-2 h-3 w-3" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onDelete(prompt.id)}
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