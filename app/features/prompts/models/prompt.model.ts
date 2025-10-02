export interface Prompt {
  id: string
  title: string
  fullPrompt: string
  tag: string
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
  createdAt: Date
  updatedAt: Date
  lastUsed?: Date
}

export interface PromptCategory {
  value: string
  label: string
  count: number
}