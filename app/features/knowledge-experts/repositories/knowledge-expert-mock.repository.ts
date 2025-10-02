import type { KnowledgeExpert } from '../models/knowledge-expert.model'

export class KnowledgeExpertMockRepository {
  private experts: KnowledgeExpert[] = [
    {
      id: '1',
      name: 'Financial Analyst',
      description: 'Produces high-level summaries of reports, meetings, or performance dashboards',
      knowledge: ['Enphase Annual Report 2024.pdf'],
      policies: [],
      integrations: [],
      personas: ['Financial Advisor'],
      usedBy: [
        { id: 'user1', name: 'John Smith', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john' },
        { id: 'user2', name: 'Emily Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily' },
        { id: 'user3', name: 'Michael Brown', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael' },
        { id: 'user4', name: 'Sarah Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah' },
        { id: 'user5', name: 'David Lee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david' },
        { id: 'user6', name: 'Lisa Anderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa' }
      ],
      isActive: true,
      hasChat: true,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-03-20')
    },
    {
      id: '2',
      name: 'HR Export',
      description: 'Produces high-level summaries of reports, meetings, or performance dashboards',
      knowledge: ['Enphase Annual Report 2024.pdf', 'Q1 23 Supplemental Data Sheet.pdf'],
      integrations: [],
      policies: [],
      personas: ['Concise summariser'],
      usedBy: [
        { id: 'user1', name: 'Alex Kim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex' },
        { id: 'user2', name: 'Jordan Lee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jordan' },
        { id: 'user3', name: 'Taylor Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=taylor' },
        { id: 'user4', name: 'Morgan Davis', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=morgan' },
        { id: 'user5', name: 'Casey Brown', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=casey' },
        { id: 'user6', name: 'Jamie Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jamie' },
        { id: 'user7', name: 'Riley Thompson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=riley' },
        { id: 'user8', name: 'Skyler Martinez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=skyler' }
      ],
      isActive: true,
      hasChat: true,
      createdAt: new Date('2024-02-10'),
      updatedAt: new Date('2024-03-19')
    },
    {
      id: '3',
      name: 'Data Analyst',
      description: 'Produces high-level summaries of reports, meetings, or performance dashboards',
      knowledge: ['Enphase Annual Report 2024.pdf', 'Q1 23 Supplemental Data Sheet.pdf', 'PitchBook Profile - Enphase Energy.pdf'],
      integrations: [],
      policies: [],
      personas: ['Legal Advisor'],
      usedBy: [
        { id: 'user1', name: 'Sam Roberts', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sam' },
        { id: 'user2', name: 'Pat Johnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pat' },
        { id: 'user3', name: 'Chris Martinez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chris' },
        { id: 'user4', name: 'Dana White', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dana' }
      ],
      isActive: true,
      hasChat: true,
      createdAt: new Date('2024-01-25'),
      updatedAt: new Date('2024-03-18')
    },
    {
      id: '4',
      name: 'UnitedLex Expert',
      description: 'Produces high-level summaries of reports, meetings, or performance dashboards',
      knowledge: ['Enphase Annual Report 2024.pdf', 'Q1 23 Supplemental Data Sheet.pdf', 'Corporate-governance-guidelines.pdf', 'Human-rights-code.pdf', 'ESG Report 2024.pdf', '+2'],
      integrations: [],
      policies: [],
      personas: ['Friendly Assistant'],
      usedBy: [
        { id: 'user1', name: 'Blake Cooper', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=blake' },
        { id: 'user2', name: 'Quinn Foster', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=quinn' },
        { id: 'user3', name: 'Avery Reed', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=avery' },
        { id: 'user4', name: 'River Brooks', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=river' },
        { id: 'user5', name: 'Sage Hunter', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sage' },
        { id: 'user6', name: 'Alex Morgan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alexm' },
        { id: 'user7', name: 'Jordan Taylor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jordant' }
      ],
      isActive: true,
      hasChat: true,
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-03-22')
    }
  ]

  async findAll(): Promise<KnowledgeExpert[]> {
    await this.simulateDelay()
    return [...this.experts]
  }

  async findById(id: string): Promise<KnowledgeExpert | null> {
    await this.simulateDelay()
    return this.experts.find(e => e.id === id) || null
  }

  async search(query: string): Promise<KnowledgeExpert[]> {
    await this.simulateDelay()
    const lowerQuery = query.toLowerCase()
    return this.experts.filter(e => 
      e.name.toLowerCase().includes(lowerQuery) ||
      e.description.toLowerCase().includes(lowerQuery)
    )
  }

  async create(expert: Omit<KnowledgeExpert, 'id' | 'createdAt' | 'updatedAt'>): Promise<KnowledgeExpert> {
    await this.simulateDelay()
    const newExpert: KnowledgeExpert = {
      ...expert,
      id: `expert-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    this.experts.push(newExpert)
    return newExpert
  }

  async update(id: string, updates: Partial<Omit<KnowledgeExpert, 'id' | 'createdAt'>>): Promise<KnowledgeExpert | null> {
    await this.simulateDelay()
    const index = this.experts.findIndex(e => e.id === id)
    if (index === -1) return null
    
    this.experts[index] = {
      ...this.experts[index],
      ...updates,
      updatedAt: new Date()
    }
    return this.experts[index]
  }

  async delete(id: string): Promise<boolean> {
    await this.simulateDelay()
    const index = this.experts.findIndex(e => e.id === id)
    if (index === -1) return false
    
    this.experts.splice(index, 1)
    return true
  }

  private async simulateDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200))
  }
}