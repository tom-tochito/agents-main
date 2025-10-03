import { AgentMockRepository } from '~/features/agents/repositories/agent-mock.repository'
import { getAgentService } from '~/features/agents/services/agent.service'

// Debug utilities for testing agent creation
export function setupDebugUtils() {
  if (typeof window !== 'undefined') {
    // Add debug utilities to window for testing
    (window as any).agentDebug = {
      // Get the repository instance
      getRepository: () => AgentMockRepository.getInstance(),
      
      // Get the service
      getService: () => getAgentService(),
      
      // Get all agents
      getAllAgents: () => {
        const repo = AgentMockRepository.getInstance()
        return repo.getAllAgentsSync()
      },
      
      // Clear localStorage and reset
      clearStorage: () => {
        localStorage.removeItem('ai-agents-mock-data')
        console.log('Cleared agent storage')
      },
      
      // Reset to defaults
      resetToDefaults: () => {
        const repo = AgentMockRepository.getInstance()
        repo.resetToDefaults()
        console.log('Reset to default agents')
      },
      
      // Create a test agent
      createTestAgent: async () => {
        const service = getAgentService()
        const testAgent = await service.createAgent({
          name: `Test Agent ${Date.now()}`,
          jobTitle: 'Test Assistant',
          color: '#fc6737',
          model: 'gpt-4o',
          teamUse: false,
          description: 'A test agent created for debugging'
        })
        console.log('Created test agent:', testAgent)
        return testAgent
      },
      
      // View storage
      viewStorage: () => {
        const stored = localStorage.getItem('ai-agents-mock-data')
        if (stored) {
          console.log('Stored agents:', JSON.parse(stored))
        } else {
          console.log('No agents in storage')
        }
      }
    }
    
    console.log('🔧 Agent debug utilities loaded. Access via window.agentDebug')
    console.log('Available commands:')
    console.log('  agentDebug.getAllAgents() - Get all agents')
    console.log('  agentDebug.createTestAgent() - Create a test agent')
    console.log('  agentDebug.clearStorage() - Clear localStorage')
    console.log('  agentDebug.resetToDefaults() - Reset to default agents')
    console.log('  agentDebug.viewStorage() - View stored data')
  }
}