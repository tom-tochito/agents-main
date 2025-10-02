export interface Persona {
  id: string
  name: string
  role: string
  description: string
  avatar?: string
  category: 'Sales' | 'Marketing' | 'Support' | 'HR' | 'Finance' | 'Operations' | 'Other'
  tags: string[]
  createdBy: {
    id: string
    name: string
    avatar?: string
  }
  usedBy: Array<{
    id: string
    name: string
    avatar?: string
  }>
  skills?: string[]
  tone?: string
  knowledge?: string[]
  createdAt: Date
  updatedAt: Date
  isActive: boolean
  agentCount?: number
}