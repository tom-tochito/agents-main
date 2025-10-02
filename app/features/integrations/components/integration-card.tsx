import { Button } from '~/core/components/ui/button/button'
import { Badge } from '~/core/components/ui/badge/badge'
import { Switch } from '~/core/components/ui/switch/switch'
import { IntegrationLogo } from './integration-logo'
import type { DirectoryIntegration } from '../models/integration.model'

interface IntegrationCardProps {
  integration: DirectoryIntegration
  onConnect?: () => void
  onLearnMore?: () => void
  onToggleConnection?: () => void
  onSettings?: () => void
}

export function IntegrationCard({ 
  integration, 
  onConnect, 
  onLearnMore,
  onToggleConnection,
  onSettings
}: IntegrationCardProps) {
  const cardClasses = integration.isConnected 
    ? integration.name === 'Medium' 
      ? 'bg-teal-50 border-teal-200' 
      : integration.name === 'Instagram' 
      ? 'bg-orange-50 border-orange-200' 
      : 'bg-white border-gray-200'
    : 'bg-white border-gray-200'

  return (
    <div className={`rounded-xl border p-6 hover:shadow-sm transition-shadow h-[200px] flex flex-col ${cardClasses}`}>
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <IntegrationLogo name={integration.name} className="h-8 w-8 flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-[15px] text-gray-900 leading-tight">{integration.name}</h3>
              {integration.provider && (
                <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {integration.provider}
                </p>
              )}
            </div>
            {integration.isNew && (
              <Badge 
                variant="secondary" 
                className="text-[10px] px-2 py-0.5 h-4 bg-cyan-100 text-cyan-700 border-0 font-medium rounded"
              >
                NEW
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[13px] text-gray-600 mb-auto leading-[1.5] line-clamp-2">
        {integration.description}
      </p>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 mt-auto">
        {integration.isConnected ? (
          <>
            <div className="flex items-center gap-2">
              <Switch 
                checked={true}
                onCheckedChange={onToggleConnection}
                className="h-5 w-9 data-[state=checked]:bg-orange-500"
              />
              <span className="text-xs font-medium text-gray-700">Connected</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onSettings}
              className="text-orange-500 hover:text-orange-600 hover:bg-transparent text-xs font-semibold px-0 h-auto"
            >
              Settings
            </Button>
          </>
        ) : (
          <>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onLearnMore}
              className="text-blue-600 hover:text-blue-700 hover:bg-transparent text-xs font-semibold underline decoration-blue-600 px-0 h-auto"
            >
              Learn more
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onConnect}
              className="text-orange-500 border-orange-500 hover:bg-orange-50 hover:text-orange-600 text-xs font-semibold px-4 h-8 rounded-md"
            >
              Connect
            </Button>
          </>
        )}
      </div>
    </div>
  )
}