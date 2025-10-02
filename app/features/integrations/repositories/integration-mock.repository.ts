import type { Integration, IntegrationGroup, DirectoryIntegration } from '../models/integration.model'

export class IntegrationMockRepository {
  private integrations: Integration[] = [
    // Connection failed group
    {
      id: '1',
      name: 'Google Podcast',
      status: 'connected',
      statusLabel: 'Connection failed',
      dateModified: 'Jun 5, 25, 11:38 AM',
      access: ['CN', 'JM', 'MT'],
      category: 'communications',
      connected: true,
      settings: 'Settings'
    },
    {
      id: '2',
      name: 'Imo',
      status: 'connected',
      statusLabel: 'Connection failed',
      dateModified: 'Jun 5, 25, 11:38 AM',
      access: ['CN', 'MT'],
      category: 'communications',
      connected: true,
      settings: 'Settings'
    },
    
    // Need setup group
    {
      id: '3',
      name: 'Instagram',
      status: 'pending',
      statusLabel: 'Need setup',
      dateModified: 'Jun 5, 25, 11:38 AM',
      access: ['CN', 'JM', 'MT'],
      category: 'social_media',
      connected: true,
      settings: 'Settings'
    },
    {
      id: '4',
      name: 'Google Meet',
      status: 'pending',
      statusLabel: 'Need setup',
      dateModified: 'Jun 5, 25, 11:38 AM',
      access: ['CN', 'MT'],
      category: 'communications',
      connected: true,
      settings: 'Settings'
    },
    {
      id: '5',
      name: 'Google Drive',
      status: 'pending',
      statusLabel: 'Need setup',
      dateModified: 'Jun 5, 25, 11:38 AM',
      access: ['CN', 'MT', 'HN', 'LU', 'MM', '+2'],
      category: 'cloud_storage',
      connected: true,
      settings: 'Settings'
    },
    
    // Connected group
    {
      id: '6',
      name: 'Kickstarted',
      status: 'connected',
      statusLabel: 'Connected',
      dateModified: 'Jun 5, 25, 11:38 AM',
      access: ['All'],
      category: 'social_media',
      connected: true,
      settings: 'Settings'
    },
    {
      id: '7',
      name: 'Line',
      status: 'connected',
      statusLabel: 'Connected',
      dateModified: 'Jun 5, 25, 11:38 AM',
      access: ['All'],
      category: 'communications',
      connected: true,
      settings: 'Settings'
    },
    {
      id: '8',
      name: 'Slack',
      status: 'connected',
      statusLabel: 'Connected',
      dateModified: 'Jun 5, 25, 11:38 AM',
      access: ['All'],
      category: 'communications',
      connected: true,
      settings: 'Settings'
    },
    {
      id: '9',
      name: 'Zoom',
      status: 'connected',
      statusLabel: 'Connected',
      dateModified: 'Jun 5, 25, 11:38 AM',
      access: ['All'],
      category: 'communications',
      connected: true,
      settings: 'Settings'
    },
    {
      id: '10',
      name: 'Teams',
      status: 'connected',
      statusLabel: 'Connected',
      dateModified: 'Jun 5, 25, 11:38 AM',
      access: ['All'],
      category: 'communications',
      connected: true,
      settings: 'Settings'
    }
  ]

  async getAll(): Promise<Integration[]> {
    return Promise.resolve(this.integrations)
  }

  async getGroupedIntegrations(): Promise<IntegrationGroup[]> {
    const groups: IntegrationGroup[] = [
      {
        name: 'Connection failed',
        count: 2,
        integrations: this.integrations.filter(i => i.statusLabel === 'Connection failed')
      },
      {
        name: 'Need setup',
        count: 3,
        integrations: this.integrations.filter(i => i.statusLabel === 'Need setup')
      },
      {
        name: 'Connected',
        count: 5,
        integrations: this.integrations.filter(i => i.statusLabel === 'Connected' && i.status === 'connected')
      }
    ]
    
    return Promise.resolve(groups)
  }

  async toggleConnection(id: string): Promise<void> {
    const integration = this.integrations.find(i => i.id === id)
    if (integration) {
      integration.connected = !integration.connected
    }
    return Promise.resolve()
  }

  async filterIntegrations(filters: {
    status?: string
    category?: string
    workflow?: string
    tags?: string
    search?: string
  }): Promise<Integration[]> {
    let filtered = [...this.integrations]
    
    if (filters.status && filters.status !== 'all') {
      filtered = filtered.filter(i => i.status === filters.status)
    }
    
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(i => i.category === filters.category)
    }
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      filtered = filtered.filter(i => 
        i.name.toLowerCase().includes(searchTerm)
      )
    }
    
    return Promise.resolve(filtered)
  }

  private directoryIntegrations: DirectoryIntegration[] = [
    {
      id: 'd1',
      name: 'Google Drive',
      provider: 'Cloud storage',
      category: 'Cloud storage',
      description: 'Connect your cloud folders for instant file access.',
      isNew: true,
      isConnected: false
    },
    {
      id: 'd2',
      name: 'Slack',
      provider: 'Communication',
      category: 'Communication',
      description: 'Get AI-powered updates and alerts directly in your channels.',
      isConnected: false
    },
    {
      id: 'd3',
      name: 'Salesforce',
      provider: 'CRM',
      category: 'CRM',
      description: 'Sync customer data to keep workflows running smoothly.',
      isConnected: false
    },
    {
      id: 'd4',
      name: 'HubSpot',
      provider: 'Marketing Automation',
      category: 'Marketing Automation',
      description: 'Automate marketing insights from your CRM in real time.',
      isConnected: false
    },
    {
      id: 'd5',
      name: 'Jira',
      provider: 'Project Management',
      category: 'Project Management',
      description: 'Turn AI-identified tasks into tickets with one click.',
      isConnected: false
    },
    {
      id: 'd6',
      name: 'Microsoft Teams',
      provider: 'Communication',
      category: 'Communication',
      description: 'Collaborate on AI results without leaving your workspace.',
      isConnected: false
    },
    {
      id: 'd7',
      name: 'Notion',
      provider: 'Knowledge Management',
      category: 'Knowledge Management',
      description: 'Save generated content directly to your team\'s knowledge base.',
      isNew: true,
      isConnected: false
    },
    {
      id: 'd8',
      name: 'Asana',
      provider: 'Project Management',
      category: 'Project Management',
      description: 'Automatically create and update project tasks from AI outputs.',
      isConnected: false
    },
    {
      id: 'd9',
      name: 'Dropbox',
      provider: 'Cloud Storage',
      category: 'Cloud Storage',
      description: 'Store and retrieve files for any workflow step instantly.',
      isConnected: false
    },
    {
      id: 'd10',
      name: 'Medium',
      provider: 'Content platform',
      category: 'Content platform',
      description: 'Connect hundreds of apps to trigger AI workflows effortlessly.',
      isConnected: true
    },
    {
      id: 'd11',
      name: 'Zapier',
      provider: 'Automation',
      category: 'Automation',
      description: 'Connect hundreds of apps to trigger AI workflows effortlessly.',
      isConnected: false
    },
    {
      id: 'd12',
      name: 'Instagram',
      provider: 'Social media',
      category: 'Social media',
      description: 'Connect hundreds of apps to trigger AI workflows effortlessly.',
      isConnected: true
    },
    {
      id: 'd13',
      name: 'Notion',
      provider: 'Knowledge Management',
      category: 'Knowledge Management',
      description: 'Save generated content directly to your team\'s knowledge base.',
      isNew: true,
      isConnected: false
    },
    {
      id: 'd14',
      name: 'Microsoft Teams',
      provider: 'Communication',
      category: 'Communication',
      description: 'Collaborate on AI results without leaving your workspace.',
      isConnected: false
    },
    {
      id: 'd15',
      name: 'Asana',
      provider: 'Project Management',
      category: 'Project Management',
      description: 'Automatically create and update project tasks from AI outputs.',
      isConnected: false
    },
    {
      id: 'd16',
      name: 'Jira',
      provider: 'Project Management',
      category: 'Project Management',
      description: 'Turn AI-identified tasks into tickets with one click.',
      isConnected: false
    }
  ]

  async getDirectoryIntegrations(): Promise<DirectoryIntegration[]> {
    return Promise.resolve(this.directoryIntegrations)
  }
}