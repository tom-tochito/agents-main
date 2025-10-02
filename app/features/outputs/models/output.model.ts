export interface Output {
  id: string
  name: string
  workerId: string
  workerName: string
  description: string
  thumbnail: string
  createdBy: string
  createdByName: string
  createdAt: Date
  updatedAt: Date
  type: 'document' | 'report' | 'summary' | 'proposal' | 'case' | 'minutes'
  date: string
}