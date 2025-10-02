import { IntegrationMockRepository } from '../repositories/integration-mock.repository'
import type { Integration, IntegrationGroup, DirectoryIntegration } from '../models/integration.model'

export class IntegrationService {
  private repository: IntegrationMockRepository

  constructor() {
    this.repository = new IntegrationMockRepository()
  }

  async getAllIntegrations(): Promise<Integration[]> {
    return this.repository.getAll()
  }

  async getGroupedIntegrations(): Promise<IntegrationGroup[]> {
    return this.repository.getGroupedIntegrations()
  }

  async toggleIntegrationConnection(id: string): Promise<void> {
    return this.repository.toggleConnection(id)
  }

  async filterIntegrations(filters: {
    status?: string
    category?: string
    workflow?: string
    tags?: string
    search?: string
  }): Promise<Integration[]> {
    return this.repository.filterIntegrations(filters)
  }

  async getDirectoryIntegrations(): Promise<DirectoryIntegration[]> {
    return this.repository.getDirectoryIntegrations()
  }
}