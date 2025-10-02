import { 
  Radio, 
  MessageCircle, 
  Instagram, 
  Video, 
  HardDrive, 
  Rocket, 
  MessageSquare,
  Hash,
  Users,
  Globe,
  Cloud,
  Target,
  CheckSquare,
  FolderOpen,
  BookOpen,
  Zap,
  PenTool
} from 'lucide-react'

interface IntegrationIconProps {
  name: string
  className?: string
}

export function IntegrationIcon({ name, className = "h-5 w-5" }: IntegrationIconProps) {
  const iconMap: Record<string, JSX.Element> = {
    'Google Podcast': <Radio className={`${className} text-blue-600`} />,
    'Imo': <MessageCircle className={`${className} text-green-600`} />,
    'Instagram': <Instagram className={`${className} text-pink-600`} />,
    'Google Meet': <Video className={`${className} text-blue-600`} />,
    'Google Drive': <HardDrive className={`${className} text-blue-600`} />,
    'Kickstarted': <Rocket className={`${className} text-green-600`} />,
    'Line': <MessageSquare className={`${className} text-green-500`} />,
    'Slack': <Hash className={`${className} text-purple-600`} />,
    'Zoom': <Video className={`${className} text-blue-500`} />,
    'Teams': <Users className={`${className} text-indigo-600`} />,
    'Microsoft Teams': <Users className={`${className} text-indigo-600`} />,
    'Salesforce': <Cloud className={`${className} text-blue-500`} />,
    'HubSpot': <Target className={`${className} text-orange-600`} />,
    'Jira': <CheckSquare className={`${className} text-blue-700`} />,
    'Asana': <CheckSquare className={`${className} text-pink-500`} />,
    'Dropbox': <FolderOpen className={`${className} text-blue-600`} />,
    'Notion': <BookOpen className={`${className} text-gray-900`} />,
    'Medium': <PenTool className={`${className} text-gray-900`} />,
    'Zapier': <Zap className={`${className} text-orange-500`} />
  }

  return iconMap[name] || <Globe className={`${className} text-gray-500`} />
}