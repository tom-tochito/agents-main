import type { Agent, AgentFilters } from '~/features/agents/models/agent.model'

export interface CreateAgentDto {
  name: string
  jobTitle: string
  avatar?: string
  color: string
  model: string
  teamUse: boolean
  description?: string
}

const STORAGE_KEY = 'ai-agents-mock-data'

export class AgentMockRepository {
  private static instance: AgentMockRepository | null = null
  private agents: Agent[] = []
  private initialized = false

  private constructor() {
    // Private constructor for singleton
  }

  static getInstance(): AgentMockRepository {
    if (!AgentMockRepository.instance) {
      AgentMockRepository.instance = new AgentMockRepository()
    }
    return AgentMockRepository.instance
  }

  private ensureInitialized(): void {
    // Always reload on client to get latest data
    if (typeof window !== 'undefined') {
      this.loadFromStorage()
      this.initialized = true
    } else if (!this.initialized) {
      this.loadFromStorage()
      this.initialized = true
    }
  }

  private loadFromStorage(): void {
    if (typeof window === 'undefined') {
      // Server-side: always use default agents
      console.log('Repository: Server-side, initializing defaults')
      this.initializeDefaultAgents()
      return
    }

    // Client-side: try to load from localStorage
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      console.log('Repository: Loading from localStorage, found:', stored ? 'data' : 'no data')
      
      if (stored) {
        const data = JSON.parse(stored)
        this.agents = data.map((agent: any) => ({
          ...agent,
          createdAt: new Date(agent.createdAt),
          updatedAt: new Date(agent.updatedAt),
          lastRunAt: agent.lastRunAt ? new Date(agent.lastRunAt) : undefined
        }))
        
        console.log(`Repository: Loaded ${this.agents.length} agents from storage`)
        
        // If no agents loaded, initialize defaults
        if (this.agents.length === 0) {
          console.log('Repository: No agents in storage, initializing defaults')
          this.initializeDefaultAgents()
        }
      } else {
        console.log('Repository: No stored data, initializing defaults')
        this.initializeDefaultAgents()
      }
    } catch (error) {
      console.error('Error loading agents from storage:', error)
      this.initializeDefaultAgents()
    }
  }

  private saveToStorage(): void {
    if (typeof window === 'undefined') return
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.agents))
    } catch (error) {
      console.error('Error saving agents to storage:', error)
    }
  }

  private initializeDefaultAgents(): void {
    this.agents = [
    {
      id: '1',
      name: 'Archie',
      type: 'document',
      category: 'business_strategy',
      categoryLabel: 'Business & Strategy',
      title: 'Executive Summary Generator',
      description: 'Produces high-level summaries of reports, meetings, or performance dashboards.',
      status: 'active',
      isActive: true,
      tools: [
        { id: 't1', type: 'gmail', name: 'Gmail' }
      ],
      workflows: [
        { id: 'w1', name: 'Executive Summary for Board Pack', enabled: true }
      ],
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-09-15'),
      lastRunAt: new Date('2024-09-17'),
      runCount: 142
    },
    {
      id: '2',
      name: 'Jules',
      type: 'document',
      category: 'finance_reporting',
      categoryLabel: 'Finance & Reporting',
      title: 'Risk Assessment Report Writer',
      description: 'Generates structured risk reports with financial metrics, exposure summaries, and mitigation plans.',
      status: 'active',
      isActive: false,
      tools: [
        { id: 't2', type: 'gmail', name: 'Gmail' }
      ],
      workflows: [
        { id: 'w2', name: 'Quarterly Risk Assessment', enabled: true }
      ],
      createdAt: new Date('2024-02-10'),
      updatedAt: new Date('2024-09-16'),
      lastRunAt: new Date('2024-09-16'),
      runCount: 89
    },
    {
      id: '3',
      name: 'Paige',
      type: 'chat',
      category: 'marketing_research',
      categoryLabel: 'Marketing & Research',
      title: 'Market Trends Reporter',
      description: 'Synthesizes competitive research and market trends into readable updates or strategy briefs.',
      status: 'active',
      isActive: false,
      tools: [
        { id: 't3', type: 'gmail', name: 'Gmail' },
        { id: 't4', type: 'slack', name: 'Slack' }
      ],
      workflows: [
        { id: 'w3', name: 'Weekly Market Update', enabled: true }
      ],
      createdAt: new Date('2024-03-05'),
      updatedAt: new Date('2024-09-17'),
      runCount: 234
    },
    {
      id: '4',
      name: 'Casey',
      type: 'chat',
      category: 'sales_proposals',
      categoryLabel: 'Sales & Proposals',
      title: 'Sales Proposal Writer',
      description: 'Generates tailored pitch decks or proposals based on client needs and offering templates.',
      status: 'active',
      isActive: true,
      tools: [
        { id: 't5', type: 'gmail', name: 'Gmail' },
        { id: 't6', type: 'salesforce', name: 'Salesforce' }
      ],
      workflows: [
        { id: 'w4', name: 'Enterprise Proposal Template', enabled: true }
      ],
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-09-17'),
      lastRunAt: new Date('2024-09-17'),
      runCount: 567
    },
    {
      id: '5',
      name: 'Casey',
      type: 'chat',
      category: 'operations',
      categoryLabel: 'Operations',
      title: 'SOP Generator',
      description: 'Creates consistent procedural documentation based on task breakdowns.',
      status: 'active',
      isActive: true,
      tools: [
        { id: 't7', type: 'notion', name: 'Notion' },
        { id: 't8', type: 'jira', name: 'Jira' }
      ],
      workflows: [
        { id: 'w5', name: 'Standard Operating Procedure', enabled: true }
      ],
      createdAt: new Date('2024-04-12'),
      updatedAt: new Date('2024-09-16'),
      lastRunAt: new Date('2024-09-16'),
      runCount: 123
    },
    {
      id: '6',
      name: 'Paige',
      type: 'document',
      category: 'operations',
      categoryLabel: 'Operations',
      title: 'Incident Report Writer',
      description: 'Formats incident descriptions into structured reports with root cause and next steps.',
      status: 'active',
      isActive: true,
      tools: [
        { id: 't9', type: 'jira', name: 'Jira' },
        { id: 't10', type: 'slack', name: 'Slack' }
      ],
      workflows: [
        { id: 'w6', name: 'Incident Post-Mortem', enabled: true }
      ],
      createdAt: new Date('2024-05-08'),
      updatedAt: new Date('2024-09-17'),
      runCount: 45
    },
    {
      id: '7',
      name: 'Archie',
      type: 'document',
      category: 'hr_management',
      categoryLabel: 'HR & Management',
      title: 'Performance Review Summary Agent',
      description: 'Generates review summaries based on 360 feedback or appraisal inputs.',
      status: 'active',
      isActive: true,
      tools: [
        { id: 't11', type: 'gmail', name: 'Gmail' }
      ],
      workflows: [],
      createdAt: new Date('2024-06-15'),
      updatedAt: new Date('2024-09-15'),
      runCount: 78
    },
    {
      id: '8',
      name: 'Jules',
      type: 'document',
      category: 'hr_management',
      categoryLabel: 'HR & Management',
      title: 'Employee Onboarding Pack Generator',
      description: 'Assembles customized welcome documents, contracts, and policy overviews for new hires.',
      status: 'active',
      isActive: true,
      tools: [],
      workflows: [
        { id: 'w7', name: 'New Hire Welcome Package', enabled: true }
      ],
      createdAt: new Date('2024-07-01'),
      updatedAt: new Date('2024-09-16'),
      lastRunAt: new Date('2024-09-15'),
      runCount: 34
    },
    {
      id: '9',
      name: 'Casey',
      type: 'chat',
      category: 'operations',
      categoryLabel: 'Operations',
      title: 'Project Update Generator',
      description: 'Produces formatted progress reports from task systems like Jira or Asana.',
      status: 'active',
      isActive: false,
      tools: [
        { id: 't12', type: 'jira', name: 'Jira' },
        { id: 't13', type: 'github', name: 'GitHub' }
      ],
      workflows: [
        { id: 'w8', name: 'Sprint Progress Report', enabled: true }
      ],
      createdAt: new Date('2024-07-20'),
      updatedAt: new Date('2024-09-17'),
      runCount: 289
    },
    {
      id: '10',
      name: 'Paige',
      type: 'chat',
      category: 'marketing_research',
      categoryLabel: 'Marketing & Research',
      title: 'Literature Review Assistant',
      description: 'Summarizes research articles, publications, or case law into structured outputs.',
      status: 'active',
      isActive: false,
      tools: [
        { id: 't14', type: 'notion', name: 'Notion' },
        { id: 't15', type: 'gmail', name: 'Gmail' }
      ],
      workflows: [
        { id: 'w9', name: 'Research Paper Summary', enabled: true }
      ],
      createdAt: new Date('2024-08-05'),
      updatedAt: new Date('2024-09-16'),
      runCount: 56
    }
    ]
  }

  async findAll(filters?: AgentFilters): Promise<Agent[]> {
    this.ensureInitialized()
    await new Promise(resolve => setTimeout(resolve, 100))
    
    console.log(`Repository: findAll() - Total agents: ${this.agents.length}`)
    let result = [...this.agents]
    
    if (filters?.search) {
      const search = filters.search.toLowerCase()
      result = result.filter(agent => 
        agent.name.toLowerCase().includes(search) ||
        agent.title.toLowerCase().includes(search) ||
        agent.description.toLowerCase().includes(search)
      )
    }
    
    if (filters?.category) {
      result = result.filter(agent => agent.category === filters.category)
    }
    
    if (filters?.status) {
      result = result.filter(agent => agent.status === filters.status)
    }
    
    if (filters?.hasTools !== undefined) {
      result = result.filter(agent => 
        filters.hasTools ? agent.tools.length > 0 : agent.tools.length === 0
      )
    }
    
    return result
  }

  async findById(id: string): Promise<Agent | null> {
    this.ensureInitialized()
    await new Promise(resolve => setTimeout(resolve, 50))
    
    const agent = this.agents.find(agent => agent.id === id) || null
    console.log(`Repository: findById(${id}) found:`, agent)
    console.log(`Repository: Current agents list:`, this.agents.map(a => ({ id: a.id, name: a.name })))
    return agent
  }

  async updateStatus(id: string, isActive: boolean): Promise<Agent | null> {
    this.ensureInitialized()
    await new Promise(resolve => setTimeout(resolve, 200))
    
    const agent = this.agents.find(a => a.id === id)
    if (agent) {
      agent.isActive = isActive
      agent.updatedAt = new Date()
      if (isActive) {
        agent.lastRunAt = new Date()
        agent.runCount++
      }
      this.saveToStorage()
    }
    
    return agent || null
  }

  async runAgent(id: string): Promise<void> {
    this.ensureInitialized()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const agent = this.agents.find(a => a.id === id)
    if (agent) {
      agent.lastRunAt = new Date()
      agent.runCount++
      this.saveToStorage()
    }
  }

  async getCategories(): Promise<Array<{ value: string; label: string; count: number }>> {
    this.ensureInitialized()
    await new Promise(resolve => setTimeout(resolve, 50))
    
    const categories = [
      { value: 'business_strategy', label: 'Business & Strategy', count: 0 },
      { value: 'finance_reporting', label: 'Finance & Reporting', count: 0 },
      { value: 'marketing_research', label: 'Marketing & Research', count: 0 },
      { value: 'sales_proposals', label: 'Sales & Proposals', count: 0 },
      { value: 'operations', label: 'Operations', count: 0 },
      { value: 'hr_management', label: 'HR & Management', count: 0 }
    ]
    
    this.agents.forEach(agent => {
      const category = categories.find(c => c.value === agent.category)
      if (category) {
        category.count++
      }
    })
    
    return categories.filter(c => c.count > 0)
  }

  async createAgent(data: CreateAgentDto): Promise<Agent> {
    console.log('Repository: Creating agent with data:', data)
    this.ensureInitialized()
    await new Promise(resolve => setTimeout(resolve, 200))
    
    const newAgent: Agent = {
      id: `agent-${Date.now()}`,
      name: data.name,
      avatar: data.avatar || data.color,
      type: 'chat',
      category: 'business_strategy',
      categoryLabel: 'Business & Strategy',
      title: data.jobTitle,
      description: data.description || `${data.name} is here to help with ${data.jobTitle.toLowerCase()}.`,
      status: 'active',
      isActive: true,
      tools: [],
      workflows: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      runCount: 0
    }
    
    console.log('Repository: Created agent object:', newAgent)
    this.agents.push(newAgent)
    console.log('Repository: Total agents after push:', this.agents.length)
    
    this.saveToStorage()
    console.log('Repository: Saved to storage')
    
    return newAgent
  }

  async deleteAgent(id: string): Promise<void> {
    this.ensureInitialized()
    await new Promise(resolve => setTimeout(resolve, 200))
    const index = this.agents.findIndex(a => a.id === id)
    if (index !== -1) {
      this.agents.splice(index, 1)
      this.saveToStorage()
    }
  }

  // Method to reset to default agents (useful for testing)
  resetToDefaults(): void {
    console.log('Repository: Resetting to default agents')
    this.initializeDefaultAgents()
    this.saveToStorage()
  }

  // Method to get all agents including newly created ones
  getAllAgentsSync(): Agent[] {
    this.ensureInitialized()
    return [...this.agents]
  }
}