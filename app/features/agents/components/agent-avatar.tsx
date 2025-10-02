import { cn } from '~/core/lib/utils'

interface AgentAvatarProps {
  color?: string
  bgColor?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function AgentAvatar({ 
  color = '#fc6737', 
  bgColor = '#f7f4f0',
  size = 'lg',
  className 
}: AgentAvatarProps) {
  const sizeClasses = {
    sm: 'size-8',
    md: 'size-12',
    lg: 'size-16'
  }

  const sizeValues = {
    sm: 32,
    md: 48,
    lg: 64
  }

  const currentSize = sizeValues[size]

  return (
    <div 
      className={cn(sizeClasses[size], "rounded-lg relative overflow-hidden", className)}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        width={currentSize}
        height={currentSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <mask id={`agent-mask-${size}`}>
            <rect width="64" height="64" fill="white" />
            <path
              d="M32 12C26.4772 12 22 16.4772 22 22C22 27.5228 26.4772 32 32 32C37.5228 32 42 27.5228 42 22C42 16.4772 37.5228 12 32 12Z"
              fill="black"
            />
            <path
              d="M14 52C14 42.0589 22.0589 34 32 34C41.9411 34 50 42.0589 50 52V64H14V52Z"
              fill="black"
            />
          </mask>
        </defs>
        
        {/* Main head shape */}
        <circle 
          cx="32" 
          cy="22" 
          r="10" 
          fill={color}
        />
        
        {/* Body/shoulders shape */}
        <path
          d="M32 32C22.0589 32 14 40.0589 14 50V64H50V50C50 40.0589 41.9411 32 32 32Z"
          fill={color}
        />
        
        {/* Additional shoulder detail for better silhouette */}
        <rect
          x="10"
          y="44"
          width="10"
          height="20"
          rx="5"
          fill={color}
        />
        <rect
          x="44"
          y="44"
          width="10"
          height="20"
          rx="5"
          fill={color}
        />
      </svg>
    </div>
  )
}