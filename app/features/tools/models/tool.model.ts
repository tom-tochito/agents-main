export interface Tool {
  id: string
  name: string
  description: string
  icon?: string
  iconType?: 'emoji' | 'brand' | 'custom'
  category: 'Active' | 'Social media' | 'Email, SMS & Slack' | 'Google' | 'Other'
  status: 'active' | 'inactive'
  agentCount: number
  lastUpdated?: Date
  platform?: string
}