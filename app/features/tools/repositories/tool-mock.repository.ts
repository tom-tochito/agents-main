import type { Tool } from '../models/tool.model'

export class ToolMockRepository {
  private tools: Tool[] = [
    // Active tools
    {
      id: '1',
      name: 'Facebook page',
      description: 'Linked 12 Jun 2025 | 10:43',
      icon: 'facebook',
      iconType: 'brand',
      category: 'Active',
      status: 'active',
      agentCount: 5,
      lastUpdated: new Date('2025-06-12'),
      platform: 'Facebook'
    },
    {
      id: '2',
      name: 'WhatsApp business',
      description: 'Linked 12 Jun 2025 | 10:43',
      icon: 'whatsapp',
      iconType: 'brand',
      category: 'Active',
      status: 'active',
      agentCount: 2,
      lastUpdated: new Date('2025-06-12'),
      platform: 'WhatsApp'
    },
    {
      id: '3',
      name: 'X account',
      description: 'Linked 12 Jun 2025 | 10:43',
      icon: 'twitter',
      iconType: 'brand',
      category: 'Active',
      status: 'active',
      agentCount: 1,
      lastUpdated: new Date('2025-06-12'),
      platform: 'X (Twitter)'
    },
    {
      id: '4',
      name: 'Google meet',
      description: 'Linked 12 Jun 2025 | 10:43',
      icon: 'google-meet',
      iconType: 'brand',
      category: 'Active',
      status: 'active',
      agentCount: 1,
      lastUpdated: new Date('2025-06-12'),
      platform: 'Google'
    },
    // Social media tools
    {
      id: '5',
      name: 'Fetch YouTube Captions',
      description: 'Get general detail of a Facebook page',
      icon: 'youtube',
      iconType: 'brand',
      category: 'Social media',
      status: 'active',
      agentCount: 0,
      platform: 'YouTube'
    },
    {
      id: '6',
      name: 'Fetch YouTube Channel',
      description: 'Get general detail of a Facebook page',
      icon: 'youtube',
      iconType: 'brand',
      category: 'Social media',
      status: 'active',
      agentCount: 0,
      platform: 'YouTube'
    },
    {
      id: '7',
      name: 'Fetch YouTube Video',
      description: 'Get general detail of a Facebook page',
      icon: 'youtube',
      iconType: 'brand',
      category: 'Social media',
      status: 'active',
      agentCount: 0,
      platform: 'YouTube'
    },
    {
      id: '8',
      name: 'LinkedIn',
      description: 'Get general detail of a Facebook page',
      icon: 'linkedin',
      iconType: 'brand',
      category: 'Social media',
      status: 'active',
      agentCount: 0,
      platform: 'LinkedIn'
    },
    {
      id: '9',
      name: 'Facebook page',
      description: 'Get general detail of a Facebook page',
      icon: 'facebook',
      iconType: 'brand',
      category: 'Social media',
      status: 'active',
      agentCount: 0,
      platform: 'Facebook'
    },
    {
      id: '10',
      name: 'Instagram',
      description: 'Get general detail of a Facebook page',
      icon: 'instagram',
      iconType: 'brand',
      category: 'Social media',
      status: 'active',
      agentCount: 0,
      platform: 'Instagram'
    },
    {
      id: '11',
      name: 'LinkedIn',
      description: 'Get general detail of a Facebook page',
      icon: 'linkedin',
      iconType: 'brand',
      category: 'Social media',
      status: 'active',
      agentCount: 0,
      platform: 'LinkedIn'
    },
    {
      id: '12',
      name: 'Facebook page',
      description: 'Get general detail of a Facebook page',
      icon: 'facebook',
      iconType: 'brand',
      category: 'Social media',
      status: 'active',
      agentCount: 0,
      platform: 'Facebook'
    },
    {
      id: '13',
      name: 'Instagram',
      description: 'Get general detail of a Facebook page',
      icon: 'instagram',
      iconType: 'brand',
      category: 'Social media',
      status: 'active',
      agentCount: 0,
      platform: 'Instagram'
    },
    // Email, SMS & Slack
    {
      id: '14',
      name: 'Send email',
      description: 'Send an email to a registered address',
      icon: 'mail',
      iconType: 'brand',
      category: 'Email, SMS & Slack',
      status: 'active',
      agentCount: 0
    },
    {
      id: '15',
      name: 'Send SMS',
      description: 'Send SMS to a phone number',
      icon: 'message',
      iconType: 'brand',
      category: 'Email, SMS & Slack',
      status: 'active',
      agentCount: 0
    },
    {
      id: '16',
      name: 'Post to Slack',
      description: 'Send message to a channel',
      icon: 'slack',
      iconType: 'brand',
      category: 'Email, SMS & Slack',
      status: 'active',
      agentCount: 0,
      platform: 'Slack'
    },
    {
      id: '17',
      name: 'Fetch Slack history',
      description: 'Send message to a channel',
      icon: 'slack',
      iconType: 'brand',
      category: 'Email, SMS & Slack',
      status: 'active',
      agentCount: 0,
      platform: 'Slack'
    },
    // Google tools
    {
      id: '18',
      name: 'Send email',
      description: 'Send an email to a registered address',
      icon: 'gmail',
      iconType: 'brand',
      category: 'Google',
      status: 'active',
      agentCount: 0,
      platform: 'Gmail'
    },
    {
      id: '19',
      name: 'Send SMS',
      description: 'Send SMS to a phone number',
      icon: 'google',
      iconType: 'brand',
      category: 'Google',
      status: 'active',
      agentCount: 0,
      platform: 'Google'
    },
    {
      id: '20',
      name: 'Post to Slack',
      description: 'Send message to a channel',
      icon: 'google',
      iconType: 'brand',
      category: 'Google',
      status: 'active',
      agentCount: 0,
      platform: 'Google'
    }
  ]

  async findAll(): Promise<Tool[]> {
    await this.simulateDelay()
    return [...this.tools]
  }

  async findById(id: string): Promise<Tool | null> {
    await this.simulateDelay()
    return this.tools.find(t => t.id === id) || null
  }

  async findByCategory(category: string): Promise<Tool[]> {
    await this.simulateDelay()
    return this.tools.filter(t => t.category === category)
  }

  async search(query: string): Promise<Tool[]> {
    await this.simulateDelay()
    const lowerQuery = query.toLowerCase()
    return this.tools.filter(t => 
      t.name.toLowerCase().includes(lowerQuery) ||
      t.description.toLowerCase().includes(lowerQuery) ||
      t.category.toLowerCase().includes(lowerQuery) ||
      t.platform?.toLowerCase().includes(lowerQuery)
    )
  }

  async getCategories(): Promise<string[]> {
    await this.simulateDelay()
    const categories = new Set<string>()
    this.tools.forEach(tool => {
      categories.add(tool.category)
    })
    return Array.from(categories)
  }

  async updateStatus(id: string, status: 'active' | 'inactive'): Promise<boolean> {
    await this.simulateDelay()
    const tool = this.tools.find(t => t.id === id)
    if (tool) {
      tool.status = status
      tool.lastUpdated = new Date()
      return true
    }
    return false
  }

  async delete(id: string): Promise<boolean> {
    await this.simulateDelay()
    const index = this.tools.findIndex(t => t.id === id)
    if (index !== -1) {
      this.tools.splice(index, 1)
      return true
    }
    return false
  }

  private async simulateDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200))
  }
}