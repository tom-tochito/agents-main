export interface KnowledgeLibrary {
  id: string
  name: string
  description: string
  tags: string[]
  documentCount: number
  createdAt: Date
  updatedAt: Date
}