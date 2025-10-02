export interface KnowledgeExpert {
  id: string
  name: string
  description: string
  knowledge: string[]
  policies: string[]
  integrations: string[]
  personas: string[]
  usedBy: Array<{
    id: string
    name: string
    avatar?: string
  }>
  isActive: boolean
  hasChat: boolean
  createdAt: Date
  updatedAt: Date
}