import { type Persona } from '../models/persona.model'
import { cn } from '~/core/lib/utils'
import { Badge } from '~/core/components/ui/badge/badge'
import { Avatar, AvatarImage, AvatarFallback } from '~/core/components/ui/avatar/avatar'
import { Users, MoreVertical } from 'lucide-react'
import { AvatarGroup } from '~/features/prompts/components/avatar-group'

interface PersonaCardProps {
  persona: Persona
  onClick?: (id: string) => void
  onOptionsClick?: (id: string) => void
  selected?: boolean
  onSelectionChange?: (selected: boolean) => void
}

export function PersonaCard({ 
  persona, 
  onClick, 
  onOptionsClick,
  selected = false,
  onSelectionChange 
}: PersonaCardProps) {
  const handleCardClick = () => {
    onClick?.(persona.id)
  }

  const handleOptionsClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onOptionsClick?.(persona.id)
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    onSelectionChange?.(e.target.checked)
  }

  return (
    <div 
      className={cn(
        "bg-white border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer relative",
        selected ? "border-blue-500 bg-blue-50/50" : "border-gray-200"
      )}
      onClick={handleCardClick}
    >
      {/* Selection checkbox */}
      <div className="absolute top-4 left-4">
        <input
          type="checkbox"
          checked={selected}
          onChange={handleCheckboxChange}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* Options menu */}
      <button
        onClick={handleOptionsClick}
        className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded"
      >
        <MoreVertical className="w-4 h-4 text-gray-500" />
      </button>

      {/* Content */}
      <div className="mt-6">
        {/* Avatar and basic info */}
        <div className="flex items-start gap-3 mb-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={persona.avatar} alt={persona.name} />
            <AvatarFallback>
              {persona.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">
              {persona.name}
            </h3>
            <p className="text-sm text-gray-600 truncate">
              {persona.role}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {persona.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {persona.tags.slice(0, 3).map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-gray-100 text-gray-700"
            >
              {tag}
            </Badge>
          ))}
          {persona.tags.length > 3 && (
            <Badge 
              variant="secondary" 
              className="text-xs bg-gray-100 text-gray-700"
            >
              +{persona.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>{persona.category}</span>
            {persona.agentCount !== undefined && persona.agentCount > 0 && (
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {persona.agentCount} agents
              </span>
            )}
          </div>

          {/* Used by avatars */}
          {persona.usedBy.length > 0 && (
            <AvatarGroup users={persona.usedBy} max={3} size="sm" />
          )}
        </div>
      </div>
    </div>
  )
}