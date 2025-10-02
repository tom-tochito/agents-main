import type { Persona } from '../models/persona.model'

export class PersonaMockRepository {
  private personas: Persona[] = [
    {
      id: '1',
      name: 'The Facebook Marketing Assistant',
      role: 'Social Media Marketing',
      description: 'Formal, detail-oriented, data-driven',
      category: 'Marketing',
      tags: ['Sustainability & ESG'],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=facebook',
      createdBy: {
        id: 'user1',
        name: 'You',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user'
      },
      usedBy: [
        { id: 'user2', name: 'James Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james1' },
        { id: 'user3', name: 'Michael Brown', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael' }
      ],
      skills: ['Social Media', 'Content Creation', 'Analytics'],
      tone: 'Formal, detail-oriented, data-driven',
      knowledge: ['Facebook Ads', 'Content Marketing', 'Engagement Metrics'],
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-03-20'),
      isActive: true,
      agentCount: 2
    },
    {
      id: '2',
      name: 'Legal Advisor',
      role: 'Legal & Compliance',
      description: 'Warm, knowledgeable, persuasive',
      category: 'Legal',
      tags: ['Learning & Development'],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=legal',
      createdBy: {
        id: 'user2',
        name: 'James',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james'
      },
      usedBy: [
        { id: 'user1', name: 'You', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=you' },
        { id: 'user3', name: 'Sarah Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah' },
        { id: 'user4', name: 'Michael Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael2' },
        { id: 'user5', name: 'Emily Davis', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily' },
        { id: 'user6', name: 'Robert Lee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=robert' },
        { id: 'user7', name: 'Lisa Wong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa' }
      ],
      skills: ['Contract Review', 'Compliance', 'Risk Assessment'],
      tone: 'Warm, knowledgeable, persuasive',
      knowledge: ['Corporate Law', 'Regulations', 'Contract Management'],
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-03-22'),
      isActive: true,
      agentCount: 6
    },
    {
      id: '3',
      name: 'Friendly Assistant',
      role: 'General Support',
      description: 'Warm, knowledgeable, persuasive',
      category: 'Support',
      tags: ['Product & UX'],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=friendly',
      createdBy: {
        id: 'user1',
        name: 'You',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=you'
      },
      usedBy: [
        { id: 'user2', name: 'Alex Kim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex' },
        { id: 'user3', name: 'Jordan Lee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jordan' },
        { id: 'user4', name: 'Taylor Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=taylor' },
        { id: 'user5', name: 'Morgan Davis', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=morgan' },
        { id: 'user6', name: 'Casey Brown', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=casey' }
      ],
      skills: ['Customer Service', 'Problem Solving', 'Communication'],
      tone: 'Warm, knowledgeable, persuasive',
      knowledge: ['Product Knowledge', 'FAQs', 'Best Practices'],
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-03-21'),
      isActive: true,
      agentCount: 5
    },
    {
      id: '4',
      name: 'Gen Z',
      role: 'Youth Marketing',
      description: 'Technical, methodical, thorough',
      category: 'Marketing',
      tags: ['Data & Research'],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=genz',
      createdBy: {
        id: 'user1',
        name: 'You',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=you'
      },
      usedBy: [
        { id: 'user2', name: 'Zoe Anderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zoe' },
        { id: 'user3', name: 'Max Turner', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=max' }
      ],
      skills: ['Social Media', 'Trend Analysis', 'Content Creation'],
      tone: 'Technical, methodical, thorough',
      knowledge: ['Youth Culture', 'Social Trends', 'Digital Platforms'],
      createdAt: new Date('2024-02-10'),
      updatedAt: new Date('2024-03-19'),
      isActive: true,
      agentCount: 2
    },
    {
      id: '5',
      name: 'Concise summariser',
      role: 'Content Processing',
      description: 'Polished, empathetic, professional',
      category: 'Operations',
      tags: ['Finance & Risk'],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=summariser',
      createdBy: {
        id: 'user1',
        name: 'You',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=you'
      },
      usedBy: [],
      skills: ['Text Analysis', 'Summarization', 'Key Points Extraction'],
      tone: 'Polished, empathetic, professional',
      knowledge: ['Content Analysis', 'Information Architecture', 'Writing'],
      createdAt: new Date('2024-01-25'),
      updatedAt: new Date('2024-03-18'),
      isActive: true,
      agentCount: 0
    },
    {
      id: '6',
      name: 'Operations Manager',
      role: 'Process Optimization Lead',
      description: 'Efficiency expert focused on streamlining operations and improving productivity. Experienced in project management and team coordination.',
      category: 'Operations',
      tags: ['Process', 'Efficiency', 'Management'],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ops1',
      createdBy: {
        id: 'user5',
        name: 'David Lee',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david'
      },
      usedBy: [
        { id: 'user2', name: 'Emily Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily' },
        { id: 'user6', name: 'Lisa Anderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa' },
        { id: 'user11', name: 'Chris Johnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chris' }
      ],
      skills: ['Project Management', 'Process Improvement', 'Team Leadership'],
      tone: 'Direct, organized, results-focused',
      knowledge: ['Lean methodology', 'Supply chain', 'Quality control'],
      createdAt: new Date('2024-02-05'),
      updatedAt: new Date('2024-03-23'),
      isActive: true,
      agentCount: 4
    },
    {
      id: '7',
      name: 'Product Manager',
      role: 'Senior Product Strategist',
      description: 'Strategic thinker with deep understanding of product lifecycle and user needs. Bridges the gap between technical and business teams.',
      category: 'Other',
      tags: ['Product', 'Strategy', 'Roadmap'],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=product1',
      createdBy: {
        id: 'user6',
        name: 'Lisa Anderson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa'
      },
      usedBy: [
        { id: 'user1', name: 'John Smith', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john' },
        { id: 'user2', name: 'Emily Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily' },
        { id: 'user3', name: 'Michael Brown', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael' },
        { id: 'user4', name: 'Sarah Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah' },
        { id: 'user5', name: 'David Lee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david' }
      ],
      skills: ['Product Strategy', 'User Research', 'Agile'],
      tone: 'Strategic, user-focused, collaborative',
      knowledge: ['Market analysis', 'UX principles', 'Technical concepts'],
      createdAt: new Date('2024-01-18'),
      updatedAt: new Date('2024-03-22'),
      isActive: true,
      agentCount: 6
    },
    {
      id: '8',
      name: 'Social Media Manager',
      role: 'Digital Engagement Specialist',
      description: 'Creative social media expert with proven track record of growing brand presence and engagement across multiple platforms.',
      category: 'Marketing',
      tags: ['Social Media', 'Engagement', 'Brand'],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=social1',
      createdBy: {
        id: 'user7',
        name: 'Jennifer Taylor',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer'
      },
      usedBy: [
        { id: 'user8', name: 'Robert Martinez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=robert' },
        { id: 'user9', name: 'Amanda White', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amanda' }
      ],
      skills: ['Content Creation', 'Community Management', 'Analytics'],
      tone: 'Trendy, engaging, authentic',
      knowledge: ['Platform algorithms', 'Viral trends', 'Influencer marketing'],
      createdAt: new Date('2024-02-15'),
      updatedAt: new Date('2024-03-20'),
      isActive: true,
      agentCount: 2
    },
    {
      id: '9',
      name: 'Technical Support Engineer',
      role: 'L2 Support Specialist',
      description: 'Technical expert providing advanced troubleshooting and solution implementation. Strong communication skills for complex technical issues.',
      category: 'Support',
      tags: ['Technical', 'Troubleshooting', 'Engineering'],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tech1',
      createdBy: {
        id: 'user8',
        name: 'Robert Martinez',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=robert'
      },
      usedBy: [
        { id: 'user10', name: 'James Davis', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james' },
        { id: 'user11', name: 'Chris Johnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chris' },
        { id: 'user1', name: 'John Smith', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john' }
      ],
      skills: ['Debugging', 'System Architecture', 'Documentation'],
      tone: 'Technical but clear, patient, thorough',
      knowledge: ['Software systems', 'Network protocols', 'Database management'],
      createdAt: new Date('2024-01-30'),
      updatedAt: new Date('2024-03-21'),
      isActive: true,
      agentCount: 3
    },
    {
      id: '10',
      name: 'Business Development Rep',
      role: 'Lead Generation Specialist',
      description: 'Outbound sales professional focused on identifying and qualifying new business opportunities. Expert at cold outreach and initial engagement.',
      category: 'Sales',
      tags: ['BDR', 'Lead Gen', 'Outbound'],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bdr1',
      createdBy: {
        id: 'user9',
        name: 'Amanda White',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amanda'
      },
      usedBy: [
        { id: 'user1', name: 'John Smith', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john' },
        { id: 'user2', name: 'Emily Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily' }
      ],
      skills: ['Cold Calling', 'Email Outreach', 'Lead Qualification'],
      tone: 'Energetic, persuasive, persistent',
      knowledge: ['Sales methodology', 'Industry verticals', 'Competitor analysis'],
      createdAt: new Date('2024-02-08'),
      updatedAt: new Date('2024-03-19'),
      isActive: true,
      agentCount: 1
    },
    {
      id: '11',
      name: 'Content Strategist',
      role: 'Brand Storytelling Expert',
      description: 'Strategic content professional who develops comprehensive content plans aligned with business goals and audience needs.',
      category: 'Marketing',
      tags: ['Strategy', 'Content', 'Planning'],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=content1',
      createdBy: {
        id: 'user10',
        name: 'James Davis',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james'
      },
      usedBy: [],
      skills: ['Content Planning', 'Editorial Calendar', 'Brand Voice'],
      tone: 'Strategic, creative, audience-focused',
      knowledge: ['Content marketing', 'SEO best practices', 'Analytics'],
      createdAt: new Date('2024-02-12'),
      updatedAt: new Date('2024-03-17'),
      isActive: false,
      agentCount: 0
    },
    {
      id: '12',
      name: 'Data Scientist',
      role: 'Analytics Expert',
      description: 'Advanced analytics professional specializing in machine learning and predictive modeling to drive data-driven decisions.',
      category: 'Other',
      tags: ['Data', 'ML', 'Analytics'],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=data1',
      createdBy: {
        id: 'user11',
        name: 'Chris Johnson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chris'
      },
      usedBy: [
        { id: 'user4', name: 'Sarah Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah' }
      ],
      skills: ['Python', 'Machine Learning', 'Statistical Analysis'],
      tone: 'Analytical, precise, insightful',
      knowledge: ['Statistics', 'ML algorithms', 'Data visualization'],
      createdAt: new Date('2024-01-28'),
      updatedAt: new Date('2024-03-18'),
      isActive: true,
      agentCount: 1
    }
  ]

  async findAll(): Promise<Persona[]> {
    await this.simulateDelay()
    return [...this.personas]
  }

  async findById(id: string): Promise<Persona | null> {
    await this.simulateDelay()
    return this.personas.find(p => p.id === id) || null
  }

  async findByCategory(category: string): Promise<Persona[]> {
    await this.simulateDelay()
    return this.personas.filter(p => p.category === category)
  }

  async search(query: string): Promise<Persona[]> {
    await this.simulateDelay()
    const lowerQuery = query.toLowerCase()
    return this.personas.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.role.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  }

  async create(persona: Omit<Persona, 'id' | 'createdAt' | 'updatedAt'>): Promise<Persona> {
    await this.simulateDelay()
    const newPersona: Persona = {
      ...persona,
      id: `persona-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    this.personas.push(newPersona)
    return newPersona
  }

  async update(id: string, updates: Partial<Omit<Persona, 'id' | 'createdAt'>>): Promise<Persona | null> {
    await this.simulateDelay()
    const index = this.personas.findIndex(p => p.id === id)
    if (index === -1) return null
    
    this.personas[index] = {
      ...this.personas[index],
      ...updates,
      updatedAt: new Date()
    }
    return this.personas[index]
  }

  async delete(id: string): Promise<boolean> {
    await this.simulateDelay()
    const index = this.personas.findIndex(p => p.id === id)
    if (index === -1) return false
    
    this.personas.splice(index, 1)
    return true
  }

  async deleteMany(ids: string[]): Promise<number> {
    await this.simulateDelay()
    let deletedCount = 0
    for (const id of ids) {
      const index = this.personas.findIndex(p => p.id === id)
      if (index !== -1) {
        this.personas.splice(index, 1)
        deletedCount++
      }
    }
    return deletedCount
  }

  private async simulateDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200))
  }
}