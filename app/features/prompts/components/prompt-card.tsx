import { type Prompt } from '../models/prompt.model'
import { Badge } from '~/core/components/ui/badge/badge'
import { Button } from '~/core/components/ui/button/button'
import { AvatarGroup } from './avatar-group'
import { 
  MoreVertical,
  Edit,
  Trash2,
  MessageSquare,
  Pin,
  Users
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/core/components/ui/dropdown-menu/dropdown-menu'
import { cn } from '~/core/lib/utils'

interface PromptCardProps {
  prompt: Prompt
  onUse: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => Promise<void>
  onPin: (id: string) => void
}

export function PromptCard({ 
  prompt,
  onUse,
  onEdit,
  onDelete,
  onPin
}: PromptCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow relative">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 pr-2">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
            {prompt.title}
          </h3>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {prompt.fullPrompt}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-7 w-7 -mr-1">
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

      <div className="flex items-center gap-2 mb-3">
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
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <div className="flex items-center gap-1">
          <span>By {prompt.createdBy.name}</span>
        </div>
        {prompt.usedBy.length > 0 && (
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{prompt.usedBy.length}</span>
          </div>
        )}
      </div>

      {prompt.usedBy.length > 0 && (
        <div className="mb-3">
          <AvatarGroup users={prompt.usedBy} max={3} />
        </div>
      )}

      <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
        <Button 
          onClick={() => onUse(prompt.id)}
          variant="outline" 
          size="sm"
          className="flex-1 text-orange-600 border-orange-300 hover:bg-orange-50 h-8"
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
      </div>
    </div>
  )
}