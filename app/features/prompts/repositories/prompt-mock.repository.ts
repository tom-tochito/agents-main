import type { Prompt, PromptCategory } from '../models/prompt.model'

export class PromptMockRepository {
  private prompts: Prompt[] = [
    {
      id: '1',
      title: 'Summarise performance review',
      fullPrompt: 'Write a one-paragraph summary of the employee\'s performance review based on the uploaded document. Highlight key strengths, areas for improvement, and overall rating.',
      tag: 'HR',
      createdBy: {
        id: '1',
        name: 'You'
      },
      usedBy: [
        { id: '1', name: 'John' },
        { id: '2', name: 'Sarah' }
      ],
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-02-10'),
      lastUsed: new Date('2024-02-18')
    },
    {
      id: '2',
      title: 'Risk analysis overview',
      fullPrompt: 'Generate a concise risk analysis overview using the provided knowledge source. Include likelihood, potential impact, and recommended mitigations.',
      tag: 'Risk',
      createdBy: {
        id: '2',
        name: 'James'
      },
      usedBy: [
        { id: '3', name: 'Mike' },
        { id: '4', name: 'Emma' },
        { id: '5', name: 'Alex' },
        { id: '6', name: 'Lisa' },
        { id: '7', name: 'Tom' }
      ],
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-02-15'),
      lastUsed: new Date('2024-02-19')
    },
    {
      id: '3',
      title: 'Executive summary for board',
      fullPrompt: 'Create a 300-word executive summary suitable for a board presentation. Focus on strategic highlights, KPIs, and upcoming priorities.',
      tag: 'Reports',
      createdBy: {
        id: '1',
        name: 'You'
      },
      usedBy: [
        { id: '8', name: 'David' },
        { id: '9', name: 'Anna' },
        { id: '10', name: 'Chris' },
        { id: '11', name: 'Sophie' },
        { id: '12', name: 'Mark' }
      ],
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-02-05'),
      lastUsed: new Date('2024-02-17')
    },
    {
      id: '4',
      title: 'Turn notes into a formal email',
      fullPrompt: 'Rewrite the following bullet-point notes into a clear and professional email addressed to a client. Maintain a friendly and concise tone.',
      tag: 'Communication',
      createdBy: {
        id: '1',
        name: 'You'
      },
      usedBy: [
        { id: '13', name: 'Rachel' },
        { id: '14', name: 'Kevin' }
      ],
      createdAt: new Date('2024-01-25'),
      updatedAt: new Date('2024-02-12'),
      lastUsed: new Date('2024-02-19')
    },
    {
      id: '5',
      title: 'Translate medical notes',
      fullPrompt: 'Convert clinical shorthand into a clean, patient-friendly summary. Use simple language accuracy.',
      tag: 'Clinical',
      createdBy: {
        id: '1',
        name: 'You'
      },
      usedBy: [],
      createdAt: new Date('2024-01-05'),
      updatedAt: new Date('2024-01-30'),
      lastUsed: new Date('2024-02-10')
    },
    {
      id: '6',
      title: 'SWOT summary',
      fullPrompt: 'Extract 3 key insights from this user interview transcript. Focus on user pain points.',
      tag: 'Strategy',
      createdBy: {
        id: '1',
        name: 'You'
      },
      usedBy: [
        { id: '15', name: 'Brian' },
        { id: '16', name: 'Julia' }
      ],
      createdAt: new Date('2024-01-18'),
      updatedAt: new Date('2024-02-08'),
      lastUsed: new Date('2024-02-16')
    },
    {
      id: '7',
      title: 'Insight from interview transcript',
      fullPrompt: 'Based on the uploaded document, summarise the SWOT analysis in bullet points under each heading: Strengths, Weaknesses, Opportunities, Threats.',
      tag: 'Research',
      createdBy: {
        id: '3',
        name: 'Claire'
      },
      usedBy: [],
      createdAt: new Date('2024-01-22'),
      updatedAt: new Date('2024-02-14'),
      lastUsed: new Date('2024-02-18')
    },
    {
      id: '8',
      title: 'Draft social media post',
      fullPrompt: 'Turn the following content into engaging LinkedIn post written in a confident but approachable tone.',
      tag: 'Marketing',
      createdBy: {
        id: '2',
        name: 'James'
      },
      usedBy: [
        { id: '17', name: 'Oliver' },
        { id: '18', name: 'Nina' },
        { id: '19', name: 'Daniel' },
        { id: '20', name: 'Grace' }
      ],
      createdAt: new Date('2024-01-12'),
      updatedAt: new Date('2024-02-03'),
      lastUsed: new Date('2024-02-15')
    },
    {
      id: '9',
      title: 'Create document structure',
      fullPrompt: 'Based on the goal described below, generate a logical structure for a new document including section headings and a brief description of each.',
      tag: 'DocGen',
      createdBy: {
        id: '4',
        name: 'Bella'
      },
      usedBy: [
        { id: '21', name: 'Lucas' },
        { id: '22', name: 'Mia' }
      ],
      createdAt: new Date('2024-01-28'),
      updatedAt: new Date('2024-02-20'),
      lastUsed: new Date('2024-02-21')
    },
    {
      id: '10',
      title: 'Highlight regulatory risks',
      fullPrompt: 'Review the document and list all potential regulatory risks. Categorise them by severity and add a suggested action for each.',
      tag: 'Compliance',
      createdBy: {
        id: '2',
        name: 'James'
      },
      usedBy: [],
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-02-18'),
      lastUsed: new Date('2024-02-20')
    }
  ]

  async findAll(): Promise<Prompt[]> {
    await this.simulateDelay()
    return [...this.prompts]
  }

  async findById(id: string): Promise<Prompt | null> {
    await this.simulateDelay()
    return this.prompts.find(p => p.id === id) || null
  }

  async findByTag(tag: string): Promise<Prompt[]> {
    await this.simulateDelay()
    return this.prompts.filter(p => p.tag === tag)
  }

  async search(query: string): Promise<Prompt[]> {
    await this.simulateDelay()
    const lowerQuery = query.toLowerCase()
    return this.prompts.filter(p => 
      p.title.toLowerCase().includes(lowerQuery) ||
      p.fullPrompt.toLowerCase().includes(lowerQuery) ||
      p.tag.toLowerCase().includes(lowerQuery)
    )
  }

  async getTags(): Promise<string[]> {
    await this.simulateDelay()
    const tags = new Set<string>()
    this.prompts.forEach(prompt => {
      tags.add(prompt.tag)
    })
    return Array.from(tags)
  }

  async getCreators(): Promise<string[]> {
    await this.simulateDelay()
    const creators = new Set<string>()
    this.prompts.forEach(prompt => {
      creators.add(prompt.createdBy.name)
    })
    return Array.from(creators)
  }

  async duplicate(id: string): Promise<Prompt | null> {
    await this.simulateDelay()
    const original = this.prompts.find(p => p.id === id)
    if (original) {
      const duplicate: Prompt = {
        ...original,
        id: `${this.prompts.length + 1}`,
        title: `${original.title} (Copy)`,
        createdAt: new Date(),
        updatedAt: new Date(),
        usedBy: [],
        lastUsed: undefined
      }
      this.prompts.push(duplicate)
      return duplicate
    }
    return null
  }

  async delete(id: string): Promise<boolean> {
    await this.simulateDelay()
    const index = this.prompts.findIndex(p => p.id === id)
    if (index !== -1) {
      this.prompts.splice(index, 1)
      return true
    }
    return false
  }

  private async simulateDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200))
  }
}