import { type Tool } from '../models/tool.model'
import { cn } from '~/core/lib/utils'
import { 
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaSlack,
  FaTiktok
} from 'react-icons/fa'
import {
  FaXTwitter
} from 'react-icons/fa6'
import {
  SiGmail,
  SiGooglemeet
} from 'react-icons/si'
import {
  Mail,
  MessageSquare,
  Chrome
} from 'lucide-react'

interface ToolCardSimpleProps {
  tool: Tool
  onClick?: (id: string) => void
}

export function ToolCardSimple({ tool, onClick }: ToolCardSimpleProps) {
  const renderIcon = () => {
    if (tool.iconType === 'brand') {
      switch (tool.icon) {
        case 'facebook':
          return <FaFacebook className="w-8 h-8 text-[#1877F2]" />
        case 'whatsapp':
          return <FaWhatsapp className="w-8 h-8 text-[#25D366]" />
        case 'twitter':
          return <FaXTwitter className="w-8 h-8 text-black" />
        case 'google-meet':
          return <SiGooglemeet className="w-8 h-8 text-[#00897B]" />
        case 'youtube':
          return <FaYoutube className="w-8 h-8 text-[#FF0000]" />
        case 'linkedin':
          return <FaLinkedin className="w-8 h-8 text-[#0A66C2]" />
        case 'instagram':
          return <FaInstagram className="w-8 h-8 text-[#E4405F]" />
        case 'tiktok':
          return <FaTiktok className="w-8 h-8 text-black" />
        case 'mail':
          return (
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
              <Mail className="w-6 h-6 text-gray-600" />
            </div>
          )
        case 'gmail':
          return <SiGmail className="w-8 h-8 text-[#EA4335]" />
        case 'message':
          return (
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-gray-600" />
            </div>
          )
        case 'slack':
          return <FaSlack className="w-8 h-8 text-[#4A154B]" />
        case 'google':
          return (
            <div className="w-8 h-8 flex items-center justify-center">
              <Chrome className="w-8 h-8 text-gray-600" />
            </div>
          )
        default:
          return <div className="w-8 h-8 bg-gray-200 rounded" />
      }
    } else if (tool.iconType === 'emoji') {
      return <span className="text-2xl">{tool.icon}</span>
    } else if (tool.iconType === 'custom') {
      return (
        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-600 font-bold">
          {tool.icon}
        </div>
      )
    }
    return <div className="w-8 h-8 bg-gray-200 rounded" />
  }

  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer relative"
      onClick={() => onClick?.(tool.id)}
    >
      {/* Green status indicator for active tools */}
      {tool.status === 'active' && tool.category === 'Active' && (
        <div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full" />
      )}
      
      {/* Agent count badge */}
      {tool.agentCount > 0 && (
        <div className="absolute top-3 right-3 bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 rounded">
          <span className="font-medium">Agents</span>
          <div className="text-center font-bold">{tool.agentCount}</div>
        </div>
      )}
      
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          {renderIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            {tool.name}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2">
            {tool.description}
          </p>
        </div>
      </div>
    </div>
  )
}