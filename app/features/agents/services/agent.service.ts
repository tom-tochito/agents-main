import { AgentMockRepository, type CreateAgentDto } from '~/features/agents/repositories/agent-mock.repository'
import type { Agent, AgentFilters } from '~/features/agents/models/agent.model'

export class AgentService {
  private repository: AgentMockRepository

  constructor() {
    this.repository = AgentMockRepository.getInstance()
  }

  async getAllAgents(filters?: AgentFilters): Promise<Agent[]> {
    return this.repository.findAll(filters)
  }

  async getAgentById(id: string): Promise<Agent | null> {
    return this.repository.findById(id)
  }

  async createAgent(data: CreateAgentDto): Promise<Agent> {
    return this.repository.createAgent(data)
  }

  async updateAgentStatus(id: string, isActive: boolean): Promise<Agent | null> {
    return this.repository.updateStatus(id, isActive)
  }

  async runAgent(id: string): Promise<void> {
    return this.repository.runAgent(id)
  }

  async deleteAgent(id: string): Promise<void> {
    return this.repository.deleteAgent(id)
  }

  async getCategories(): Promise<Array<{ value: string; label: string; count: number }>> {
    return this.repository.getCategories()
  }
}

// Create a single instance to reuse
const agentService = new AgentService()

export function getAgentService(): AgentService {
  return agentService
}