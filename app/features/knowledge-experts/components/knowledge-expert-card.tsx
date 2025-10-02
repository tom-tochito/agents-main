import { type KnowledgeExpert } from '../models/knowledge-expert.model'
import { Button } from '~/core/components/ui/button/button'
import { AvatarGroup } from '~/features/prompts/components/avatar-group'
import { Switch } from '~/core/components/ui/switch/switch'
import { MoreVertical, Edit, Trash2, MessageSquare, FileText, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/core/components/ui/dropdown-menu/dropdown-menu'

interface KnowledgeExpertCardProps {
  expert: KnowledgeExpert
  onEdit?: () => void
  onDelete?: () => void
  onChat?: () => void
}

export function KnowledgeExpertCard({ 
  expert, 
  onEdit, 
  onDelete,
  onChat 
}: KnowledgeExpertCardProps) {
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-sm transition-shadow h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 text-base mb-1">{expert.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">{expert.description}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-2 p-1 hover:bg-gray-100 rounded-md transition-colors">
              <MoreVertical className="h-4 w-4 text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem onClick={onEdit} className="cursor-pointer">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onDelete} className="cursor-pointer text-red-600 focus:text-red-600">
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content - Flex grow to push footer down */}
      <div className="flex-1 space-y-4">
        {/* Knowledge Section */}
        {expert.knowledge && expert.knowledge.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-2">Knowledge</p>
            <div className="space-y-1.5">
              {expert.knowledge.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 line-clamp-1">{item}</span>
                </div>
              ))}
              {expert.knowledge.length > 3 && (
                <span className="text-xs text-gray-500 pl-6">+{expert.knowledge.length - 3}</span>
              )}
            </div>
          </div>
        )}
        
        {/* Persona Section */}
        {expert.personas && expert.personas.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-2">Persona</p>
            <div className="flex items-start gap-2">
              <User className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <div className="flex flex-wrap gap-1.5">
                {expert.personas.map((persona, index) => (
                  <span 
                    key={index} 
                    className="text-sm text-gray-700"
                  >
                    {persona}{index < expert.personas.length - 1 && ','}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Used By Section */}
        <div>
          <p className="text-xs text-gray-500 mb-2">Used by</p>
          <AvatarGroup users={expert.usedBy} max={8} size="sm" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Switch 
            checked={expert.isActive}
            className="data-[state=checked]:bg-orange-500"
          />
          <span className="text-sm text-gray-700">Active</span>
        </div>
        
        <Button
          onClick={onChat}
          variant="ghost"
          size="sm"
          className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 -mr-2"
        >
          <MessageSquare className="h-4 w-4 mr-1.5" />
          Chat
        </Button>
      </div>
    </div>
  )
}