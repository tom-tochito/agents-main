import type { KnowledgeLibrary } from '../models/knowledge-library.model'

export class KnowledgeLibraryMockRepository {
  private libraries: KnowledgeLibrary[] = [
    {
      id: '1',
      name: 'Financial documents',
      description: 'Reports, invoices, and statements used for budgeting, analysis, or forecasting.',
      tags: ['Financial'],
      documentCount: 0,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-03-20')
    },
    {
      id: '2',
      name: 'Onboarding guides',
      description: 'Training materials and process docs to help new hires get up to speed.',
      tags: ['HR'],
      documentCount: 2,
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-03-22')
    },
    {
      id: '3',
      name: 'Staff records',
      description: 'Internal profiles, role histories, and HR notes related to current employees.',
      tags: ['HR'],
      documentCount: 20,
      createdAt: new Date('2024-01-25'),
      updatedAt: new Date('2024-03-18')
    },
    {
      id: '4',
      name: 'Product Knowledge',
      description: 'Historical climate and temperature data for reference or analysis.',
      tags: ['Product'],
      documentCount: 5,
      createdAt: new Date('2024-02-10'),
      updatedAt: new Date('2024-03-19')
    },
    {
      id: '5',
      name: 'Personal details',
      description: 'User-submitted info such as names, contact info, preferences, or bios.',
      tags: ['HR'],
      documentCount: 20,
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-03-21')
    },
    {
      id: '6',
      name: 'Training Materials Starter Pack',
      description: 'A pre-built set of foundational training docs for getting new agents up and running.',
      tags: ['HR'],
      documentCount: 20,
      createdAt: new Date('2024-02-05'),
      updatedAt: new Date('2024-03-23')
    },
    {
      id: '7',
      name: 'Compliance Rules',
      description: 'Regulatory policies, legal frameworks, and internal guidelines agents must follow.',
      tags: ['Risk'],
      documentCount: 20,
      createdAt: new Date('2024-01-18'),
      updatedAt: new Date('2024-03-22')
    }
  ]

  async findAll(): Promise<KnowledgeLibrary[]> {
    await this.simulateDelay()
    return [...this.libraries]
  }

  async findById(id: string): Promise<KnowledgeLibrary | null> {
    await this.simulateDelay()
    return this.libraries.find(l => l.id === id) || null
  }

  async findByIds(ids: string[]): Promise<KnowledgeLibrary[]> {
    await this.simulateDelay()
    return this.libraries.filter(l => ids.includes(l.id))
  }

  async search(query: string): Promise<KnowledgeLibrary[]> {
    await this.simulateDelay()
    const lowerQuery = query.toLowerCase()
    return this.libraries.filter(l => 
      l.name.toLowerCase().includes(lowerQuery) ||
      l.description.toLowerCase().includes(lowerQuery) ||
      l.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  }

  async create(library: Omit<KnowledgeLibrary, 'id' | 'createdAt' | 'updatedAt'>): Promise<KnowledgeLibrary> {
    await this.simulateDelay()
    const newLibrary: KnowledgeLibrary = {
      ...library,
      id: `library-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    this.libraries.push(newLibrary)
    return newLibrary
  }

  async update(id: string, updates: Partial<Omit<KnowledgeLibrary, 'id' | 'createdAt'>>): Promise<KnowledgeLibrary | null> {
    await this.simulateDelay()
    const index = this.libraries.findIndex(l => l.id === id)
    if (index === -1) return null
    
    this.libraries[index] = {
      ...this.libraries[index],
      ...updates,
      updatedAt: new Date()
    }
    return this.libraries[index]
  }

  async delete(id: string): Promise<boolean> {
    await this.simulateDelay()
    const index = this.libraries.findIndex(l => l.id === id)
    if (index === -1) return false
    
    this.libraries.splice(index, 1)
    return true
  }

  private async simulateDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200))
  }
}