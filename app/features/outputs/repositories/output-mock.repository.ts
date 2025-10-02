import type { Output } from '../models/output.model'

export class OutputMockRepository {
  private outputs: Output[] = [
    {
      id: '1',
      name: 'Risk Assessment Report Writer',
      workerId: 'worker-1',
      workerName: 'Worker at 14:23',
      description: 'A comprehensive risk assessment report analyzing potential hazards, vulnerabilities, and mitigation strategies for organizational operations and projects.',
      thumbnail: '/api/placeholder/400/300',
      createdBy: 'Mark Tebblerche',
      createdByName: 'Mark Tebblerche',
      createdAt: new Date('2025-07-01'),
      updatedAt: new Date('2025-07-01'),
      type: 'report',
      date: 'Risk Assessment_July 2025'
    },
    {
      id: '2',
      name: 'Executive Summary Generator',
      workerId: 'worker-2',
      workerName: 'Worker at 14:23',
      description: 'Generates concise executive summaries that highlight key findings, recommendations, and action items from detailed reports and analyses.',
      thumbnail: '/api/placeholder/400/300',
      createdBy: 'Mark Tebblerche',
      createdByName: 'Mark Tebblerche',
      createdAt: new Date('2025-07-15'),
      updatedAt: new Date('2025-07-15'),
      type: 'summary',
      date: 'Executive Summary for Board Pack'
    },
    {
      id: '3',
      name: 'Board Pack Assistant',
      workerId: 'worker-3',
      workerName: 'Worker at 14:23',
      description: 'Helps prepare comprehensive board packs including financial reports, strategic updates, and governance documentation for board meetings.',
      thumbnail: '/api/placeholder/400/300',
      createdBy: 'Mark Tebblerche',
      createdByName: 'Mark Tebblerche',
      createdAt: new Date('2025-07-01'),
      updatedAt: new Date('2025-07-01'),
      type: 'document',
      date: 'Board Pack_July 2025'
    },
    {
      id: '4',
      name: 'Business Case Generator',
      workerId: 'worker-4',
      workerName: 'Worker at 14:23',
      description: 'Creates detailed business cases with financial projections, risk analysis, and strategic alignment for new initiatives and investments.',
      thumbnail: '/api/placeholder/400/300',
      createdBy: 'Mark Tebblerche',
      createdByName: 'Mark Tebblerche',
      createdAt: new Date('2025-03-15'),
      updatedAt: new Date('2025-03-15'),
      type: 'case',
      date: 'Business Case March 2025'
    },
    {
      id: '5',
      name: 'Incident Report Writer',
      workerId: 'worker-5',
      workerName: 'Worker at 14:23',
      description: 'Documents incidents with detailed timelines, root cause analysis, and corrective action plans for compliance and improvement purposes.',
      thumbnail: '/api/placeholder/400/300',
      createdBy: 'Mark Tebblerche',
      createdByName: 'Mark Tebblerche',
      createdAt: new Date('2025-07-01'),
      updatedAt: new Date('2025-07-01'),
      type: 'report',
      date: 'Risk Assessment_July 2025'
    },
    {
      id: '6',
      name: 'Project Update Generator',
      workerId: 'worker-6',
      workerName: 'Worker at 14:23',
      description: 'Generates project status updates including milestone achievements, budget tracking, risk updates, and next steps for stakeholder communication.',
      thumbnail: '/api/placeholder/400/300',
      createdBy: 'Mark Tebblerche',
      createdByName: 'Mark Tebblerche',
      createdAt: new Date('2025-07-20'),
      updatedAt: new Date('2025-07-20'),
      type: 'report',
      date: 'Executive Summary for Board Pack'
    },
    {
      id: '7',
      name: 'Campaign Report Agent',
      workerId: 'worker-7',
      workerName: 'Worker at 14:23',
      description: 'Analyzes marketing campaign performance with detailed metrics, ROI calculations, and recommendations for optimization and future campaigns.',
      thumbnail: '/api/placeholder/400/300',
      createdBy: 'Mark Tebblerche',
      createdByName: 'Mark Tebblerche',
      createdAt: new Date('2025-07-01'),
      updatedAt: new Date('2025-07-01'),
      type: 'report',
      date: 'Board Pack_July 2025'
    },
    {
      id: '8',
      name: 'Sales Proposal Writer',
      workerId: 'worker-8',
      workerName: 'Worker at 14:23',
      description: 'Creates compelling sales proposals with customized solutions, pricing strategies, and value propositions tailored to client needs.',
      thumbnail: '/api/placeholder/400/300',
      createdBy: 'Mark Tebblerche',
      createdByName: 'Mark Tebblerche',
      createdAt: new Date('2025-03-10'),
      updatedAt: new Date('2025-03-10'),
      type: 'proposal',
      date: 'Business Case March 2025'
    },
    {
      id: '9',
      name: 'Literature Review Assistant',
      workerId: 'worker-9',
      workerName: 'Worker at 14:23',
      description: 'Compiles comprehensive literature reviews with critical analysis, synthesis of findings, and identification of research gaps.',
      thumbnail: '/api/placeholder/400/300',
      createdBy: 'Mark Tebblerche',
      createdByName: 'Mark Tebblerche',
      createdAt: new Date('2025-07-05'),
      updatedAt: new Date('2025-07-05'),
      type: 'document',
      date: 'Risk Assessment_July 2025'
    },
    {
      id: '10',
      name: 'Meeting Minutes Generator',
      workerId: 'worker-10',
      workerName: 'Worker at 14:23',
      description: 'Automatically generates structured meeting minutes with action items, decisions, and follow-up tasks from meeting recordings or notes.',
      thumbnail: '/api/placeholder/400/300',
      createdBy: 'Mark Tebblerche',
      createdByName: 'Mark Tebblerche',
      createdAt: new Date('2025-07-18'),
      updatedAt: new Date('2025-07-18'),
      type: 'minutes',
      date: 'Executive Summary for Board Pack'
    }
  ]

  async findAll(): Promise<Output[]> {
    await this.simulateDelay()
    return [...this.outputs]
  }

  async findById(id: string): Promise<Output | null> {
    await this.simulateDelay()
    return this.outputs.find(o => o.id === id) || null
  }

  async search(query: string): Promise<Output[]> {
    await this.simulateDelay()
    const lowerQuery = query.toLowerCase()
    return this.outputs.filter(o => 
      o.name.toLowerCase().includes(lowerQuery) ||
      o.description.toLowerCase().includes(lowerQuery) ||
      o.date.toLowerCase().includes(lowerQuery)
    )
  }

  async filterByAgent(agentId: string): Promise<Output[]> {
    await this.simulateDelay()
    if (agentId === 'all') return [...this.outputs]
    return this.outputs.filter(o => o.workerId === agentId)
  }

  async filterByGeneratedBy(userId: string): Promise<Output[]> {
    await this.simulateDelay()
    if (userId === 'all') return [...this.outputs]
    return this.outputs.filter(o => o.createdBy === userId)
  }

  async delete(id: string): Promise<boolean> {
    await this.simulateDelay()
    const index = this.outputs.findIndex(o => o.id === id)
    if (index === -1) return false
    
    this.outputs.splice(index, 1)
    return true
  }

  private async simulateDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200))
  }
}