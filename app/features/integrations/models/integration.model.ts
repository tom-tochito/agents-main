export interface Integration {
  id: string
  name: string
  logo?: string
  status: 'connected' | 'not_connected' | 'pending'
  statusLabel?: string
  dateModified: string
  access: string[]
  category: 'communications' | 'social_media' | 'cloud_storage' | 'other'
  connected: boolean
  settings?: string
}

export interface DirectoryIntegration {
  id: string
  name: string
  provider?: string
  category: string
  description: string
  isNew?: boolean
  isConnected?: boolean
}

export interface IntegrationGroup {
  name: string
  count: number
  integrations: Integration[]
}

export type IntegrationStatus = 'all' | 'connected' | 'not_connected'
export type IntegrationCategory = 'all' | 'communications' | 'social_media' | 'cloud_storage' | 'other'
export type IntegrationWorkflow = 'all' | 'workflow1' | 'workflow2'
export type IntegrationTag = 'all' | 'tag1' | 'tag2'