import { useCallback, useState } from 'react'
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type Node,
  type Edge,
  type Connection,
  Handle,
  Position,
  type NodeProps,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

// Custom Node Components
function StartNode({ data }: NodeProps) {
  return (
    <div className="bg-teal-700 text-white rounded-lg px-4 py-3 flex items-center gap-2 shadow-md min-w-[100px]">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      <span className="text-sm font-medium">Start</span>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </div>
  )
}

function EndNode({ data }: NodeProps) {
  return (
    <div className="bg-teal-700 text-white rounded-lg px-4 py-3 flex items-center gap-2 shadow-md min-w-[100px]">
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-sm font-medium">End</span>
    </div>
  )
}

function TriggerNode({ data }: NodeProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm min-w-[250px]">
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-50 rounded flex items-center justify-center">
            <span className="text-teal-600">📧</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">{data.label}</div>
            <div className="text-xs text-gray-500">{data.description}</div>
          </div>
        </div>
        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </div>
  )
}

function DocumentNode({ data }: NodeProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm min-w-[230px]">
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 bg-orange-50 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-orange-600 text-xs">📄</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-900">{data.label}</div>
            <div className="text-xs text-gray-500">{data.description}</div>
            {data.tools && (
              <div className="mt-2">
                <span className="text-[10px] text-gray-400">Tools</span>
                <div className="flex gap-1 mt-1">
                  {data.tools.map((tool: string, i: number) => (
                    <div key={i} className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center">
                      <span className="text-[10px]">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {data.experts && (
              <div className="mt-1">
                <span className="text-[10px] text-gray-400">Knowledge experts</span>
                <div className="text-xs text-gray-600">{data.experts}</div>
              </div>
            )}
          </div>
        </div>
        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </div>
  )
}

function OutputNode({ data }: NodeProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm min-w-[230px]">
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 bg-orange-50 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-orange-600 text-xs">📄</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-900">{data.label}</div>
            <div className="text-xs text-gray-500">{data.description}</div>
            {data.tools && (
              <div className="mt-2">
                <span className="text-[10px] text-gray-400">Tools</span>
                <div className="flex gap-1 mt-1">
                  <div className="w-5 h-5 bg-teal-50 rounded flex items-center justify-center">
                    <span className="text-[10px] text-teal-600">🔺</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </div>
  )
}

const nodeTypes = {
  start: StartNode,
  end: EndNode,
  trigger: TriggerNode,
  document: DocumentNode,
  output: OutputNode,
}

const initialNodes: Node[] = [
  { id: 'start', type: 'start', position: { x: 400, y: 0 }, data: { label: 'Start' } },
  { 
    id: 'trigger', 
    type: 'trigger', 
    position: { x: 325, y: 80 }, 
    data: { label: 'Trigger', description: 'Manual trigger' } 
  },
  { 
    id: 'doc1', 
    type: 'document', 
    position: { x: 150, y: 200 }, 
    data: { 
      label: 'Document section', 
      description: 'Executive summary',
      tools: ['M']
    } 
  },
  { 
    id: 'doc2', 
    type: 'document', 
    position: { x: 450, y: 200 }, 
    data: { 
      label: 'Document section', 
      description: 'Main analysis',
      experts: 'FA',
      tools: ['M']
    } 
  },
  { 
    id: 'doc3', 
    type: 'document', 
    position: { x: 325, y: 350 }, 
    data: { 
      label: 'Document section', 
      description: 'Conclusion'
    } 
  },
  { 
    id: 'doc4', 
    type: 'document', 
    position: { x: 325, y: 450 }, 
    data: { 
      label: 'Document section', 
      description: 'Introduction'
    } 
  },
  { 
    id: 'output', 
    type: 'output', 
    position: { x: 325, y: 550 }, 
    data: { 
      label: 'Output', 
      description: 'PDF',
      tools: true
    } 
  },
  { id: 'end', type: 'end', position: { x: 400, y: 650 }, data: { label: 'End' } },
]

const initialEdges: Edge[] = [
  { id: 'e1', source: 'start', target: 'trigger', animated: false },
  { id: 'e2', source: 'trigger', target: 'doc1', animated: false },
  { id: 'e3', source: 'trigger', target: 'doc2', animated: false },
  { id: 'e4', source: 'doc1', target: 'doc3', animated: false },
  { id: 'e5', source: 'doc2', target: 'doc3', animated: false },
  { id: 'e6', source: 'doc3', target: 'doc4', animated: false },
  { id: 'e7', source: 'doc4', target: 'output', animated: false },
  { id: 'e8', source: 'output', target: 'end', animated: false },
]

export function WorkflowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: false }, eds)),
    [setEdges]
  )

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNode(node.id)
  }, [])

  const proOptions = { hideAttribution: true }

  return (
    <div className="h-[700px] bg-gray-50 rounded-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        proOptions={proOptions}
        defaultEdgeOptions={{
          style: { stroke: '#d1d5db', strokeWidth: 2 },
          markerEnd: {
            type: 'arrowclosed',
            width: 20,
            height: 20,
            color: '#d1d5db',
          },
        }}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
      
      {selectedNode && (
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold mb-2">Node Properties</h3>
          <p className="text-xs text-gray-600">ID: {selectedNode}</p>
          <p className="text-xs text-gray-600">
            Type: {nodes.find(n => n.id === selectedNode)?.type}
          </p>
        </div>
      )}
    </div>
  )
}