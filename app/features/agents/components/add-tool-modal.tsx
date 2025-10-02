import { useState } from 'react'
import { Dialog, DialogContent } from '~/core/components/ui/dialog/dialog'
import { Button } from '~/core/components/ui/button/button'
import { Input } from '~/core/components/ui/input/input'
import { Search, Filter, Mail, MessageSquare, Youtube, Slack } from 'lucide-react'
import { cn } from '~/core/lib/utils'

interface Tool {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  category: string
  selected?: boolean
}

const TOOLS_DATA = {
  'Social media': [
    {
      id: 'youtube-captions',
      name: 'Fetch YouTube Captions',
      description: 'Get general detail of a Facebook page',
      icon: <Youtube className="size-5 text-red-600" />,
      category: 'Social media'
    },
    {
      id: 'youtube-channel',
      name: 'Fetch YouTube Channel',
      description: 'Get general detail of a Facebook page',
      icon: <Youtube className="size-5 text-red-600" />,
      category: 'Social media'
    },
    {
      id: 'youtube-video',
      name: 'Fetch YouTube Video',
      description: 'Get general detail of a Facebook page',
      icon: <Youtube className="size-5 text-red-600" />,
      category: 'Social media'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Get general detail of a Facebook page',
      icon: (
        <div className="size-5 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">in</span>
        </div>
      ),
      category: 'Social media'
    },
    {
      id: 'facebook-page-1',
      name: 'Facebook page',
      description: 'Get general detail of a Facebook page',
      icon: (
        <div className="size-5 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">f</span>
        </div>
      ),
      category: 'Social media'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      description: 'Get general detail of a Facebook page',
      icon: (
        <div className="size-5 bg-gradient-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center">
          <span className="text-white text-xs">📷</span>
        </div>
      ),
      category: 'Social media'
    },
    {
      id: 'facebook-page-2',
      name: 'Facebook page',
      description: 'Get general detail of a Facebook page',
      icon: (
        <div className="size-5 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">f</span>
        </div>
      ),
      category: 'Social media'
    },
    {
      id: 'facebook-page-3',
      name: 'Facebook page',
      description: 'Get general detail of a Facebook page',
      icon: (
        <div className="size-5 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">f</span>
        </div>
      ),
      category: 'Social media'
    },
    {
      id: 'facebook-page-4',
      name: 'Facebook page',
      description: 'Get general detail of a Facebook page',
      icon: (
        <div className="size-5 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">f</span>
        </div>
      ),
      category: 'Social media'
    },
    {
      id: 'linkedin-x',
      name: 'LinkedIn',
      description: 'Get general detail of a Facebook page',
      icon: (
        <div className="size-5 bg-black rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">𝕏</span>
        </div>
      ),
      category: 'Social media'
    },
    {
      id: 'facebook-page-tiktok',
      name: 'Facebook page',
      description: 'Get general detail of a Facebook page',
      icon: (
        <div className="size-5 bg-black rounded flex items-center justify-center">
          <span className="text-white text-xs">♪</span>
        </div>
      ),
      category: 'Social media'
    },
    {
      id: 'instagram-whatsapp',
      name: 'Instagram',
      description: 'Get general detail of a Facebook page',
      icon: (
        <div className="size-5 bg-green-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">💬</span>
        </div>
      ),
      category: 'Social media'
    }
  ],
  'Email, SMS & Slack': [
    {
      id: 'send-email',
      name: 'Send email',
      description: 'Send an email to a registered address',
      icon: <Mail className="size-5 text-gray-600" />,
      category: 'Email, SMS & Slack'
    },
    {
      id: 'send-sms',
      name: 'Send SMS',
      description: 'Send SMS to a phone number',
      icon: <MessageSquare className="size-5 text-gray-600" />,
      category: 'Email, SMS & Slack'
    },
    {
      id: 'post-to-slack',
      name: 'Post to Slack',
      description: 'Send message to a channel',
      icon: <Slack className="size-5 text-purple-600" />,
      category: 'Email, SMS & Slack'
    },
    {
      id: 'fetch-slack-history-1',
      name: 'Fetch Slack history',
      description: 'Send message to a channel',
      icon: <Slack className="size-5 text-purple-600" />,
      category: 'Email, SMS & Slack'
    },
    {
      id: 'fetch-slack-history-2',
      name: 'Fetch Slack history',
      description: 'Send message to a channel',
      icon: <Slack className="size-5 text-purple-600" />,
      category: 'Email, SMS & Slack'
    },
    {
      id: 'fetch-slack-history-3',
      name: 'Fetch Slack history',
      description: 'Send message to a channel',
      icon: <Slack className="size-5 text-purple-600" />,
      category: 'Email, SMS & Slack'
    }
  ],
  'Google': [
    {
      id: 'send-gmail',
      name: 'Send email',
      description: 'Send an email to a registered address',
      icon: (
        <div className="size-5 flex items-center justify-center">
          <span className="text-xl">📧</span>
        </div>
      ),
      category: 'Google'
    },
    {
      id: 'send-sms-google',
      name: 'Send SMS',
      description: 'Send SMS to a phone number',
      icon: (
        <div className="size-5 flex items-center justify-center">
          <span className="text-xl">▶️</span>
        </div>
      ),
      category: 'Google'
    },
    {
      id: 'post-to-slack-google',
      name: 'Post to Slack',
      description: 'Send message to a channel',
      icon: (
        <div className="size-5 rounded-full bg-red-500 text-white flex items-center justify-center">
          <span className="text-xs font-bold">G</span>
        </div>
      ),
      category: 'Google'
    },
    {
      id: 'fetch-slack-history-google-1',
      name: 'Fetch Slack history',
      description: 'Send message to a channel',
      icon: (
        <div className="size-5 flex items-center justify-center">
          <span className="text-xl">📹</span>
        </div>
      ),
      category: 'Google'
    },
    {
      id: 'fetch-slack-history-google-2',
      name: 'Fetch Slack history',
      description: 'Send message to a channel',
      icon: (
        <div className="size-5 flex items-center justify-center">
          <span className="text-xl">📹</span>
        </div>
      ),
      category: 'Google'
    },
    {
      id: 'fetch-slack-history-google-3',
      name: 'Fetch Slack history',
      description: 'Send message to a channel',
      icon: (
        <div className="size-5 flex items-center justify-center">
          <span className="text-xl">📹</span>
        </div>
      ),
      category: 'Google'
    }
  ]
}

interface AddToolModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (tools: Tool[]) => void
}

export function AddToolModal({ isOpen, onClose, onAdd }: AddToolModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set())

  const handleToggleTool = (toolId: string) => {
    setSelectedTools(prev => {
      const newSet = new Set(prev)
      if (newSet.has(toolId)) {
        newSet.delete(toolId)
      } else {
        newSet.add(toolId)
      }
      return newSet
    })
  }

  const handleAdd = () => {
    const selected: Tool[] = []
    Object.values(TOOLS_DATA).forEach(category => {
      category.forEach(tool => {
        if (selectedTools.has(tool.id)) {
          selected.push(tool)
        }
      })
    })
    onAdd(selected)
    onClose()
  }

  const filteredTools = Object.entries(TOOLS_DATA).reduce((acc, [category, tools]) => {
    const filtered = tools.filter(tool =>
      !searchTerm || 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    if (filtered.length > 0) {
      acc[category] = filtered
    }
    return acc
  }, {} as Record<string, typeof TOOLS_DATA['Social media']>)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 gap-0 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-normal text-gray-600">
            Add Tool
          </h2>
        </div>

        {/* Search */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <Input
                placeholder="Search tool"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-10 bg-gray-50 border-gray-200"
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600"
            >
              <Filter className="size-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="px-6 py-4 overflow-y-auto max-h-[500px]">
          {Object.entries(filteredTools).map(([category, tools]) => (
            <div key={category} className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">{category}</h3>
              <div className="grid grid-cols-3 gap-3">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => handleToggleTool(tool.id)}
                    className={cn(
                      "flex items-start gap-3 p-3 rounded-lg border transition-all text-left hover:shadow-sm",
                      selectedTools.has(tool.id)
                        ? "border-[#fc6737] bg-orange-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    )}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {tool.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {tool.name}
                      </p>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {tool.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-gray-300"
          >
            Cancel
          </Button>
          {selectedTools.size > 0 && (
            <Button
              onClick={handleAdd}
              className="bg-[#fc6737] hover:bg-[#fc6737]/90 text-white"
            >
              Add ({selectedTools.size})
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}