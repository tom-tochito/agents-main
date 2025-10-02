export type AgentStatus = 'active' | 'inactive' | 'archived'
export type AgentCategory = 'business_strategy' | 'finance_reporting' | 'marketing_research' | 'sales_proposals' | 'operations' | 'hr_management'
export type AgentType = 'document' | 'chat'
export type ToolType = 'gmail' | 'slack' | 'jira' | 'notion' | 'github' | 'salesforce'

export interface AgentTool {
  id: string
  type: ToolType
  name: string
  icon?: string
}

export interface AgentWorkflow {
  id: string
  name: string
  description?: string
  enabled: boolean
}

export interface Agent {
  id: string
  name: string
  avatar?: string
  type: AgentType
  category: AgentCategory
  categoryLabel: string
  title: string
  description: string
  status: AgentStatus
  isActive: boolean
  tools: AgentTool[]
  workflows: AgentWorkflow[]
  createdAt: Date
  updatedAt: Date
  lastRunAt?: Date
  runCount: number
}

export interface AgentFilters {
  search?: string
  category?: AgentCategory
  status?: AgentStatus
  hasTools?: boolean
}