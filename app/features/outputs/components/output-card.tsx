import { User } from 'lucide-react'
import { Card } from '~/core/components/ui/card/card'
import { cn } from '~/core/lib/utils'
import type { Output } from '../models/output.model'

interface OutputCardProps {
  output: Output
  onClick?: () => void
}

// Generate realistic document preview text based on output type
const getDocumentPreview = (type: string, name: string) => {
  const previews: Record<string, JSX.Element> = {
    report: (
      <>
        <div className="mb-2">
          <p className="font-semibold text-[10px] leading-tight mb-1">Project Overview</p>
          <p className="text-[8px] leading-tight text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu et velit nulla fermentum faucibus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nunc nulla et tortor ultricies,
            vitae sagittis nulla venenatis. Nullam id amet purus cras sapien cursus tempor.
          </p>
        </div>
        <div className="mb-2">
          <p className="font-semibold text-[10px] leading-tight mb-1">Objectives</p>
          <p className="text-[8px] leading-tight text-gray-600">
            1. Consectetur metus et libero sollicitudin, ac gravida justo vehicula<br/>
            2. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae<br/>
            3. Integer consectetur nulla leo cursus, vitae fermentum magna fermentum
          </p>
        </div>
        <div className="mb-2">
          <p className="font-semibold text-[10px] leading-tight mb-1">Key Considerations</p>
          <p className="text-[8px] leading-tight text-gray-600">
            Aliquam erat volutpat. Quisque sed posuere ligula. Sed luctus lorem iaculis metus quis, et commodo metus commodo.
            Sed et lacus non erat blandit varius. In malesuada orci eget sapien sodales rutrum. Fusce ut sapien quis odio sollicitudin
            tempor.
          </p>
        </div>
      </>
    ),
    summary: (
      <>
        <div className="mb-2">
          <p className="font-semibold text-[10px] leading-tight mb-1">Project Overview</p>
          <p className="text-[8px] leading-tight text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu et velit nulla fermentum faucibus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nunc nulla et tortor ultricies,
            vitae sagittis nulla venenatis. Nullam id amet purus cras sapien cursus tempor.
          </p>
        </div>
        <div className="mb-2">
          <p className="font-semibold text-[10px] leading-tight mb-1">Objectives</p>
          <p className="text-[8px] leading-tight text-gray-600">
            1. Consectetur metus et libero sollicitudin, ac gravida justo vehicula<br/>
            2. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae<br/>
            3. Integer consectetur nulla leo cursus, vitae fermentum magna fermentum
          </p>
        </div>
        <div className="mb-2">
          <p className="font-semibold text-[10px] leading-tight mb-1">Key Considerations</p>
          <p className="text-[8px] leading-tight text-gray-600">
            Aliquam erat volutpat. Quisque sed posuere ligula. Sed luctus lorem iaculis metus quis, et commodo metus commodo.
            Sed et lacus non erat blandit varius. In malesuada orci eget sapien sodales rutrum. Fusce ut sapien quis odio sollicitudin
            tempor.
          </p>
        </div>
        <div className="mb-2">
          <p className="font-semibold text-[10px] leading-tight mb-1">Conclusion</p>
          <p className="text-[8px] leading-tight text-gray-600">
            Nunc ut amet sapien nec lorem porttitor accumsan. Duis tempor, metus sed dignissim tempor, lectus nulla tempor
            tortor, vitae commodo nunc odio vitae nibh. Etiam et vehicula augue. Mauris quis tortor et elit sollicitudin volutpat.
          </p>
        </div>
      </>
    ),
    default: (
      <>
        <div className="mb-2">
          <p className="font-semibold text-[10px] leading-tight mb-1">Project Overview</p>
          <p className="text-[8px] leading-tight text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu et velit nulla fermentum faucibus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
        <div className="mb-2">
          <p className="font-semibold text-[10px] leading-tight mb-1">Key Considerations</p>
          <p className="text-[8px] leading-tight text-gray-600">
            Aliquam erat volutpat. Quisque sed posuere ligula. Sed luctus lorem iaculis metus quis, et commodo metus commodo.
          </p>
        </div>
        <div className="mb-2">
          <p className="font-semibold text-[10px] leading-tight mb-1">Conclusion</p>
          <p className="text-[8px] leading-tight text-gray-600">
            Nunc ut amet sapien nec lorem porttitor accumsan. Duis tempor, metus sed dignissim tempor.
          </p>
        </div>
      </>
    )
  }
  
  return previews[type] || previews.default
}

export function OutputCard({ output, onClick }: OutputCardProps) {
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-200",
        "bg-white border-0 shadow-md"
      )}
      onClick={onClick}
    >
      <div className="p-4">
        {/* Header with avatar and title */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-gray-900 mb-0.5 line-clamp-2">
              {output.name}
            </h3>
            <p className="text-xs text-gray-500">
              Wed at 14:23
            </p>
          </div>
        </div>

        {/* Document Preview */}
        <div className="bg-gray-50 rounded-lg p-3 mb-3 min-h-[200px]">
          {getDocumentPreview(output.type, output.name)}
        </div>

        {/* Footer */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-900">
            {output.date}
          </p>
          <p className="text-xs text-gray-500">
            by {output.createdByName}
          </p>
        </div>
      </div>
    </Card>
  )
}