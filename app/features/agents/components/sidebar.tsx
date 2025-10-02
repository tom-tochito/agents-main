import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Input } from '~/core/components/ui/input/input'
import { cn } from '~/core/lib/utils'
import { 
  Search, 
  ChevronDown, 
  ChevronRight,
  SquareUserRound,
  LayoutGrid,
  Wrench,
  MessageSquareHeart,
  Lightbulb,
  FolderInput,
  Brain,
  Blend,
  Settings,
  Users,
  CreditCard,
  Code2,
  BookOpen
} from 'lucide-react'

interface SidebarProps {
  className?: string
}

export function AgentsSidebar({ className }: SidebarProps) {
  const [isAgentsExpanded, setIsAgentsExpanded] = useState(true)
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  return (
    <div className={cn("bg-white border-r border-gray-200 w-64 flex flex-col h-full", className)}>
      {/* Header */}
      <div className="p-2 border-b border-gray-200">
        <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
          <div className="w-10 h-10 bg-white border border-gray-300 rounded flex items-center justify-center">
            <span className="text-xs font-semibold text-gray-700">UL</span>
          </div>
          <div className="flex-1 text-left">
            <div className="text-sm font-bold text-gray-900">UnitedLex</div>
            <div className="text-[10px] text-gray-500">12 members</div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-600" />
        </button>
        
        <div className="mt-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search for anything"
            className="pl-9 h-9 text-sm"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          {/* Client A team section */}
          <button className="w-full flex items-center justify-between px-2 py-1.5 mb-1 text-sm rounded-lg border border-gray-300 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-900">Client A team</span>
            <ChevronDown className="h-4 w-4 text-orange-600" />
          </button>
          
          {/* Agents section */}
          <div className="mb-2">
            <Link 
              to="/agents"
              className={cn(
                "w-full flex items-center gap-2 p-2 rounded-lg text-gray-900 cursor-pointer",
                isActive('/agents') && "bg-orange-50"
              )}
            >
              <SquareUserRound className="h-4 w-4 text-orange-600" />
              <span className="flex-1 text-left text-sm font-bold">Agents</span>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setIsAgentsExpanded(!isAgentsExpanded)
                }}
              >
                <ChevronRight className={cn(
                  "h-4 w-4 text-orange-600 transition-transform",
                  isAgentsExpanded && "rotate-90"
                )} />
              </button>
            </Link>
            
            {isAgentsExpanded && (
              <div className="ml-6 mt-1 border-l border-gray-200">
                <Link 
                  to="/agents/prompts"
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer",
                    isActive('/agents/prompts') ? "bg-orange-50" : "hover:bg-gray-50"
                  )}
                >
                  <LayoutGrid className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-gray-900">Prompts</span>
                </Link>
                <Link 
                  to="/agents/tools"
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer",
                    isActive('/agents/tools') ? "bg-orange-50" : "hover:bg-gray-50"
                  )}
                >
                  <Wrench className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-gray-900">Tools</span>
                </Link>
                <Link 
                  to="/agents/personas"
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer",
                    isActive('/agents/personas') ? "bg-orange-50" : "hover:bg-gray-50"
                  )}
                >
                  <MessageSquareHeart className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-gray-900">Personas</span>
                </Link>
                <Link 
                  to="/agents/knowledge-experts"
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer",
                    isActive('/agents/knowledge-experts') ? "bg-orange-50" : "hover:bg-gray-50"
                  )}
                >
                  <Lightbulb className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-gray-900">Knowledge experts</span>
                </Link>
                <Link 
                  to="/agents/output-library"
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer",
                    isActive('/agents/output-library') ? "bg-orange-50" : "hover:bg-gray-50"
                  )}
                >
                  <FolderInput className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-gray-900">Output library</span>
                </Link>
              </div>
            )}
          </div>
          
          {/* Knowledge library */}
          <Link 
            to="/knowledge-library"
            className={cn(
              "w-full flex items-center gap-2 p-2 rounded-lg cursor-pointer",
              isActive('/knowledge-library') ? "bg-orange-50" : "hover:bg-gray-50"
            )}
          >
            <BookOpen className="h-4 w-4 text-orange-600" />
            <span className="flex-1 text-left text-sm font-bold text-gray-900">Knowledge library</span>
            <ChevronRight className="h-4 w-4 text-orange-600" />
          </Link>
          
          {/* Integrations */}
          <Link 
            to="/integrations"
            className={cn(
              "w-full flex items-center gap-2 p-2 rounded-lg cursor-pointer",
              isActive('/integrations') ? "bg-orange-50" : "hover:bg-gray-50"
            )}
          >
            <Blend className="h-4 w-4 text-orange-600" />
            <span className="flex-1 text-left text-sm font-bold text-gray-900">Integrations</span>
            <ChevronRight className="h-4 w-4 text-orange-600" />
          </Link>
        </div>
      </div>
      
      {/* Organisation section */}
      <div className="border-t border-gray-200 p-2">
        <div className="px-2 py-1.5 mb-2">
          <span className="text-xs text-gray-500">Organisation</span>
        </div>
        
        <button className="w-full flex items-center gap-2 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
          <Settings className="h-4 w-4 text-gray-600" />
          <span className="text-sm text-gray-900">Settings</span>
        </button>
        <button className="w-full flex items-center gap-2 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
          <Users className="h-4 w-4 text-gray-600" />
          <span className="text-sm text-gray-900">Team & roles</span>
        </button>
        <button className="w-full flex items-center gap-2 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
          <CreditCard className="h-4 w-4 text-gray-600" />
          <span className="text-sm text-gray-900">Billing</span>
        </button>
        <button className="w-full flex items-center gap-2 px-2 py-1.5 hover:bg-gray-50 rounded-lg mb-8 cursor-pointer">
          <Code2 className="h-4 w-4 text-gray-600" />
          <span className="text-sm text-gray-900">Developers</span>
        </button>
      </div>
    </div>
  )
}